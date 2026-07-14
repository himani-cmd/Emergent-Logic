from __future__ import annotations

import csv
import textwrap
from dataclasses import dataclass
from datetime import date, timedelta
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[3]
PUBLIC_DIR = ROOT / "public" / "social-assets" / "monthly-2026-07"
CONTENT_DIR = ROOT / "content" / "social"
LOGO_PATH = ROOT / "content" / "brand" / "assets" / "emergent_logic_primary_logo_dark_500.png"

BRAND = {
    "navy": "#17233f",
    "ink": "#101828",
    "muted": "#667085",
    "indigo": "#6d5dfc",
    "indigo_dark": "#4b37c8",
    "lavender": "#eef0ff",
    "blue": "#1e3a5f",
    "line": "#dfe3f5",
    "paper": "#fbfbff",
    "white": "#ffffff",
}


@dataclass(frozen=True)
class Post:
    slug: str
    date: str
    theme: str
    headline: str
    subline: str
    visual_notes: str
    founder_caption: str
    company_caption: str
    instagram_caption: str
    cta: str


def font(size: int, weight: str = "regular") -> ImageFont.FreeTypeFont:
    candidates = {
        "bold": [
            "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
            "/System/Library/Fonts/Supplemental/Helvetica Bold.ttf",
            "/Library/Fonts/Arial Bold.ttf",
        ],
        "regular": [
            "/System/Library/Fonts/Supplemental/Arial.ttf",
            "/System/Library/Fonts/Supplemental/Helvetica.ttf",
            "/Library/Fonts/Arial.ttf",
        ],
    }
    for path in candidates[weight]:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def draw_wrapped(draw: ImageDraw.ImageDraw, text: str, xy: tuple[int, int], width: int, fill: str, size: int, weight: str = "regular", spacing: int = 12) -> int:
    fnt = font(size, weight)
    words = text.split()
    lines: list[str] = []
    line = ""
    for word in words:
        test = f"{line} {word}".strip()
        if draw.textbbox((0, 0), test, font=fnt)[2] <= width:
            line = test
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)

    x, y = xy
    for line in lines:
        draw.text((x, y), line, font=fnt, fill=fill)
        y += size + spacing
    return y


def rounded_rect(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], radius: int, fill: str, outline: str | None = None, width: int = 1) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def draw_logo(draw: ImageDraw.ImageDraw, canvas: Image.Image, x: int, y: int, size: int) -> None:
    if not LOGO_PATH.exists():
        raise FileNotFoundError(f"Approved logo master is missing: {LOGO_PATH}")
    logo = Image.open(LOGO_PATH).convert("RGBA").resize((size, size), Image.Resampling.LANCZOS)
    canvas.alpha_composite(logo, (x, y))


def draw_background(draw: ImageDraw.ImageDraw, w: int, h: int) -> None:
    draw.rectangle((0, 0, w, h), fill=BRAND["paper"])
    draw.ellipse((w - 420, -180, w + 160, 390), fill="#f0efff")
    draw.ellipse((-250, h - 300, 360, h + 260), fill="#f4f7ff")
    draw.line((0, 0, w, 0), fill=BRAND["indigo"], width=10)

    for i, alpha_color in enumerate(["#e7e9ff", "#dde1ff", "#f4f7ff"]):
        x = w - 220 + i * 82
        y = 150 + i * 92
        draw.rounded_rectangle((x, y, x + 86, y + 86), radius=24, outline=alpha_color, width=3)


def draw_mini_system(draw: ImageDraw.ImageDraw, x: int, y: int, scale: float = 1.0) -> None:
    labels = ["Capture", "Route", "Follow up"]
    box_w = int(190 * scale)
    box_h = int(72 * scale)
    gap = int(30 * scale)
    for idx, label in enumerate(labels):
        left = x + idx * (box_w + gap)
        rounded_rect(draw, (left, y, left + box_w, y + box_h), int(20 * scale), BRAND["white"], BRAND["line"], 2)
        draw.ellipse((left + 18, y + 22, left + 46, y + 50), fill=BRAND["lavender"], outline=BRAND["indigo"], width=2)
        draw.text((left + 58, y + 24), label, font=font(int(22 * scale), "bold"), fill=BRAND["navy"])
        if idx < len(labels) - 1:
            ax = left + box_w + 8
            ay = y + box_h // 2
            draw.line((ax, ay, ax + gap - 14, ay), fill=BRAND["indigo"], width=3)
            draw.polygon([(ax + gap - 14, ay), (ax + gap - 25, ay - 8), (ax + gap - 25, ay + 8)], fill=BRAND["indigo"])


def draw_leak_map(draw: ImageDraw.ImageDraw, x: int, y: int, scale: float = 1.0) -> None:
    labels = [("Inquiry", "captured"), ("Inbox", "waiting"), ("Gap", "no owner"), ("CRM", "visible")]
    box_w = int(150 * scale)
    box_h = int(96 * scale)
    gap = int(24 * scale)
    for idx, (title, note) in enumerate(labels):
        left = x + idx * (box_w + gap)
        fill = "#fff7f0" if title == "Gap" else BRAND["white"]
        outline = "#f1c7a6" if title == "Gap" else BRAND["line"]
        rounded_rect(draw, (left, y, left + box_w, y + box_h), int(24 * scale), fill, outline, 2)
        draw.text((left + 18, y + 22), title, font=font(int(22 * scale), "bold"), fill=BRAND["navy"])
        draw.text((left + 18, y + 55), note, font=font(int(17 * scale)), fill=BRAND["muted"])
        if idx < len(labels) - 1:
            ax = left + box_w + 6
            ay = y + box_h // 2
            draw.line((ax, ay, ax + gap - 12, ay), fill=BRAND["indigo"], width=3)
            draw.polygon([(ax + gap - 12, ay), (ax + gap - 22, ay - 7), (ax + gap - 22, ay + 7)], fill=BRAND["indigo"])


def draw_checklist(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, scale: float = 1.0) -> None:
    items = ["Source captured", "Owner assigned", "Next step visible", "Follow-up not memory-based"]
    card_h = int(250 * scale)
    rounded_rect(draw, (x, y, x + w, y + card_h), int(32 * scale), BRAND["white"], BRAND["line"], 2)
    draw.text((x + 32, y + 30), "System checklist", font=font(int(24 * scale), "bold"), fill=BRAND["indigo_dark"])
    for idx, item in enumerate(items):
        iy = y + int(78 * scale) + idx * int(38 * scale)
        draw.ellipse((x + 32, iy, x + 54, iy + 22), fill=BRAND["lavender"], outline=BRAND["indigo"], width=2)
        draw.line((x + 38, iy + 11, x + 44, iy + 17), fill=BRAND["indigo"], width=2)
        draw.line((x + 44, iy + 17, x + 52, iy + 6), fill=BRAND["indigo"], width=2)
        draw.text((x + 72, iy - 2), item, font=font(int(22 * scale), "bold"), fill=BRAND["navy"])


def draw_stack(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, scale: float = 1.0) -> None:
    labels = [("Data layer", "clean fields"), ("Workflow layer", "safe automation"), ("Revenue layer", "clear next steps")]
    for idx, (title, note) in enumerate(labels):
        top = y + idx * int(98 * scale)
        inset = idx * int(22 * scale)
        fill = [BRAND["white"], "#f7f8ff", BRAND["lavender"]][idx]
        rounded_rect(draw, (x + inset, top, x + w - inset, top + int(90 * scale)), int(26 * scale), fill, BRAND["line"], 2)
        draw.text((x + inset + 30, top + 18), title, font=font(int(23 * scale), "bold"), fill=BRAND["navy"])
        draw.text((x + inset + 30, top + 52), note, font=font(int(18 * scale)), fill=BRAND["muted"])


def draw_signal_panel(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, scale: float = 1.0) -> None:
    rounded_rect(draw, (x, y, x + w, y + int(240 * scale)), int(34 * scale), "#121a31", None, 0)
    draw.text((x + 34, y + 34), "Revenue signal", font=font(int(24 * scale), "bold"), fill="#bfc7ff")
    metrics = [("Response", "minutes"), ("Owner", "assigned"), ("Next step", "visible")]
    for idx, (label, value) in enumerate(metrics):
        left = x + 34 + idx * int((w - 68) / 3)
        draw.text((left, y + 92), label, font=font(int(18 * scale)), fill="#aab2d5")
        draw.text((left, y + 124), value, font=font(int(28 * scale), "bold"), fill=BRAND["white"])
        draw.rounded_rectangle((left, y + 174, left + int(112 * scale), y + 184), radius=5, fill=BRAND["indigo"])


def draw_visual_motif(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, variant: str, style_index: int) -> None:
    scale = 1.0 if variant == "portrait" else 0.88
    if style_index == 0:
        draw_mini_system(draw, x, y, scale)
    elif style_index == 1:
        draw_leak_map(draw, x, y, scale)
    elif style_index == 2:
        draw_checklist(draw, x, y, min(w, int(660 * scale)), scale)
    elif style_index == 3:
        draw_stack(draw, x, y, min(w, int(700 * scale)), scale)
    else:
        draw_signal_panel(draw, x, y, min(w, int(760 * scale)), scale)


def render_card(post: Post, variant: str, size: tuple[int, int]) -> Path:
    w, h = size
    img = Image.new("RGBA", (w, h), BRAND["paper"])
    draw = ImageDraw.Draw(img)
    draw_background(draw, w, h)

    margin = 72 if w >= 1080 else 56
    draw_logo(draw, img, margin, 18, 160)

    badge = post.theme.upper()
    badge_w = draw.textbbox((0, 0), badge, font=font(20, "bold"))[2] + 44
    rounded_rect(draw, (margin, 196, margin + badge_w, 246), 25, BRAND["lavender"], BRAND["line"], 1)
    draw.text((margin + 22, 210), badge, font=font(20, "bold"), fill=BRAND["indigo_dark"])

    headline_size = 66 if variant == "portrait" else 58
    headline_y = 278
    y = draw_wrapped(draw, post.headline, (margin, headline_y), w - margin * 2, BRAND["ink"], headline_size, "bold", 16)
    y += 22
    y = draw_wrapped(draw, post.subline, (margin, y), w - margin * 2 - 20, BRAND["muted"], 34 if variant == "portrait" else 31, "regular", 12)

    system_y = min(h - 360, y + 55)
    style_index = sum(ord(ch) for ch in post.slug) % 5
    draw_visual_motif(draw, margin, system_y, w - margin * 2, variant, style_index)

    footer_y = h - 145
    rounded_rect(draw, (margin, footer_y, w - margin, footer_y + 78), 28, BRAND["white"], BRAND["line"], 2)
    draw.text((margin + 32, footer_y + 22), post.cta, font=font(27, "bold"), fill=BRAND["navy"])
    draw.text((w - margin - 250, footer_y + 24), "emergent-logic.ca", font=font(25), fill=BRAND["indigo_dark"])

    out_name = f"{post.date}_{post.slug}_{variant}.png"
    out = PUBLIC_DIR / out_name
    img.convert("RGB").save(out, quality=95)
    return out


def business_days(start: date, count: int) -> list[str]:
    days: list[str] = []
    current = start
    while len(days) < count:
        if current.weekday() < 5:
            days.append(current.isoformat())
        current += timedelta(days=1)
    return days


def posts() -> list[Post]:
    dates = business_days(date(2026, 7, 7), 20)
    base = [
        ("lead-followup", "Lead Follow-Up", "The lead did not disappear.", "It was waiting for a clear next step.", "Lead capture to CRM handoff", "Most businesses do not need more leads first. They need fewer leads falling through the cracks after the first reply.\n\nA clean follow-up system gives every inquiry an owner, stage, source, and next action.", "Leads should not depend on memory. Emergent Logic connects form fills, CRM records, routing, tasks, and follow-up visibility.", "The form is not the finish line. It is the handoff point.", "Audit one lead path"),
        ("crm-cleanup", "CRM Cleanup", "Before automation, clean the data.", "Bad fields make fast workflows fail faster.", "CRM data quality", "Automation only works when the data underneath it is trustworthy.\n\nIf lifecycle stages, owners, duplicates, and source fields are messy, speed becomes noise.", "CRM cleanup helps teams trust the system before adding more workflows, dashboards, or campaigns.", "Clean first. Automate second. Scale third.", "Start with cleanup"),
        ("hubspot-workflows", "HubSpot", "One more workflow may not fix it.", "Sometimes the work is understanding the ones already running.", "HubSpot workflow cleanup", "HubSpot makes workflows easy to create. That is powerful, and also risky.\n\nOld enrollment rules, duplicate automations, and stale lists can quietly break follow-up.", "We help teams audit HubSpot workflows, lifecycle logic, forms, lists, and handoffs so automation stays reliable.", "If nobody can explain the workflow, it is time to clean it up.", "Review your workflows"),
        ("salesforce-admin", "Salesforce", "Salesforce admin work piles up quietly.", "Old fields, owners, reports, and flows become operational debt.", "Salesforce admin support", "Salesforce usually does not break in one big moment.\n\nIt gets harder to trust through small changes nobody had time to clean up.", "Emergent Logic supports Salesforce cleanup, admin support, reporting hygiene, and safe automation improvements.", "Your CRM should not feel like a mystery box.", "Fix the operating layer"),
        ("website-to-crm", "Lead Capture", "A website lead needs a system behind it.", "A contact form alone is not a follow-up process.", "Website to CRM routing", "The website can look professional and still lose revenue if the inquiry lands in an inbox with no owner or next step.\n\nThe handoff matters.", "We build lead capture paths that connect website forms to CRM records, owners, notifications, and follow-up tasks.", "Pretty website. Clear handoff. Better follow-up.", "Map your form path"),
        ("speed-to-lead", "Response Time", "Speed to lead is an operations problem.", "Fast replies need routing, ownership, and reminders.", "Response SLA", "Responding faster is not only about motivation.\n\nIt is about whether the system tells the right person what happened, what to do, and when to follow up.", "Emergent Logic helps teams reduce response delays with routing, notifications, task creation, and CRM visibility.", "The first reply should not depend on someone checking an inbox.", "Build the route"),
        ("old-leads", "Pipeline", "Old leads are not always dead.", "Many were never followed up properly.", "Pipeline revival", "A stale pipeline is often full of people who showed interest once but never got a proper follow-up path.\n\nBefore buying more leads, review what already exists.", "We help teams clean stale pipelines, identify warm opportunities, and rebuild simple follow-up sequences.", "Some revenue is already sitting in the CRM.", "Review stale leads"),
        ("source-tracking", "Reporting", "If source tracking is messy, reporting lies.", "Campaign decisions need clean attribution.", "Source tracking", "When every lead source becomes Other, Website, or Unknown, reporting stops being useful.\n\nMarketing cannot improve what the CRM cannot explain.", "We clean source fields, campaign capture, lifecycle stages, and reporting views so teams can trust the numbers.", "Bad source data makes good marketing look random.", "Clean source fields"),
        ("handoff", "Sales Handoff", "The handoff is where revenue leaks.", "Marketing captures interest. Sales needs the next move visible.", "MQL to SQL handoff", "A lead handoff should not be a Slack message, a memory, or a spreadsheet row nobody owns.\n\nThe CRM should carry the context forward.", "Emergent Logic improves MQL to SQL routing, owner assignment, task creation, and follow-up visibility.", "A better handoff creates fewer dropped leads.", "Fix the handoff"),
        ("ai-automation", "AI Automation", "AI helps when the process is already clear.", "Prompts cannot rescue a broken workflow.", "AI automation readiness", "AI automation is not magic dust.\n\nIt works best when the intake, decision rules, ownership, and exceptions are clear first.", "We design practical AI-assisted workflows for lead follow-up, admin tasks, routing, and response drafts.", "AI should reduce busywork, not create mystery.", "Find one repeatable task"),
        ("calendar-bookings", "Booking", "Missed appointments often start before the calendar.", "The lead asked. The system did not move fast enough.", "Booking follow-up", "For service businesses, the booking gap is expensive.\n\nA faster response, reminder, and next-step workflow can recover opportunities already coming in.", "We build simple booking and follow-up systems that connect forms, calendars, reminders, and CRM notes.", "The appointment is won in the follow-up.", "Improve booking flow"),
        ("crm-audit", "Audit", "A CRM audit should produce decisions.", "Not a 40-page report nobody uses.", "CRM audit", "The best audit is practical.\n\nWhat is broken, what matters, what to fix first, and what not to automate yet.", "Emergent Logic audits CRM setup, data quality, workflows, lead routing, reporting, and follow-up gaps.", "Audit for action. Not documentation theatre.", "Run a practical audit"),
        ("property-management", "Property Teams", "Property inquiries need clean routing.", "Owner, tenant, vendor, and rental paths should not collide.", "Property management routing", "Property teams often receive different types of requests through the same contact layer.\n\nThe CRM should separate the path before follow-up becomes messy.", "We help property teams route inquiries by request type, owner, urgency, and next action.", "Different inquiry types need different workflows.", "Separate the paths"),
        ("immigration-crm", "Immigration", "Consultation requests need follow-up visibility.", "A shared inbox is not a client intake system.", "Immigration intake", "Immigration firms often handle high-trust, high-detail inquiries.\n\nIf the intake path is not clear, response time and context suffer.", "We support consultation intake, CRM routing, reminders, and simple follow-up systems for professional services.", "High-trust inquiries deserve a clean process.", "Review intake flow"),
        ("real-estate-teams", "Real Estate", "Real estate leads need long-cycle nurture.", "Not every inquiry is ready today.", "Real estate follow-up", "Real estate teams lose opportunities when only hot leads get tracked.\n\nWarm buyers, sellers, and valuation requests need a visible follow-up path.", "Emergent Logic helps real estate teams improve lead routing, CRM cleanup, and long-cycle follow-up visibility.", "The future client is often already in the database.", "Clean the pipeline"),
        ("dashboard-trust", "Dashboards", "Dashboards only help when the data is trusted.", "A beautiful report cannot fix messy inputs.", "Reporting reliability", "If the team does not trust the CRM fields, they will not trust the dashboard.\n\nReporting work starts with the records underneath.", "We improve CRM reporting by cleaning properties, stages, owners, lifecycle logic, and source capture.", "Better dashboards begin before the chart.", "Trust the data"),
        ("followup-rules", "Follow-Up", "Follow-up should have rules.", "Not vibes, memory, or whoever has time.", "Follow-up rules", "A simple rule beats an ambitious system nobody uses.\n\nWho owns it? When is follow-up due? What happens after no reply?", "We help teams define and implement practical follow-up rules inside HubSpot, Salesforce, and connected workflows.", "Simple rules create consistent revenue motion.", "Define the rules"),
        ("integration-risk", "Integration", "Integrations should reduce manual work.", "Not create another place to check.", "CRM integration", "A useful integration removes duplicate entry and makes the next action clearer.\n\nA bad one just moves confusion between tools.", "Emergent Logic connects forms, calendars, spreadsheets, inboxes, and CRMs with clean ownership and visibility.", "Connect the tools around the process.", "Connect the path"),
        ("founder-operator", "Operator POV", "Most tech problems are process problems wearing software clothes.", "Fix the path before buying another tool.", "Operator systems", "The tempting answer is usually another tool.\n\nBut many teams need a clearer path for the work they already have: capture, route, own, follow up, report.", "Emergent Logic helps businesses improve the systems behind sales, marketing, CRM, and lead follow-up.", "Software helps only when the process is legible.", "Map the system"),
        ("monthly-close", "Revenue Systems", "More leads work only when follow-up can hold them.", "Build the system before scaling traffic.", "Revenue operations", "Traffic, ads, SEO, and outreach all create pressure.\n\nIf follow-up is weak, more volume just creates more leakage.", "We build CRM and automation systems that help teams capture, route, follow up, and report with more confidence.", "Scale the system, not just the top of funnel.", "Book a strategy call"),
    ]
    return [Post(date=dates[i], slug=item[0], theme=item[1], headline=item[2], subline=item[3], visual_notes=item[4], founder_caption=item[5], company_caption=item[6], instagram_caption=item[7], cta=item[8]) for i, item in enumerate(base)]


def write_calendar(posts_list: list[Post], generated_assets: dict[str, dict[str, str]]) -> None:
    out = CONTENT_DIR / "Monthly_Content_Kit_2026-07-07_to_2026-08-03.md"
    lines = [
        "# Emergent Logic Monthly Social Content Kit",
        "",
        "Prepared: 2026-07-06",
        "Schedule window: 2026-07-07 to 2026-08-03",
        "Channels: Himani LinkedIn profile, Emergent Logic LinkedIn page, Facebook page, Instagram",
        "",
        "## Publishing Rules",
        "",
        "- Use `status=approved` only when the post can go live automatically.",
        "- Use one queue row per platform because captions and image formats differ.",
        "- Square graphics are for LinkedIn/Facebook. Portrait graphics are for Instagram.",
        "- Image URLs go live after Vercel deploy from `public/social-assets/monthly-2026-07/`.",
        "",
    ]
    for idx, post in enumerate(posts_list, 1):
        assets = generated_assets[post.slug]
        lines.extend([
            f"## {idx}. {post.date} - {post.theme}: {post.headline}",
            "",
            f"Visual: {post.visual_notes}",
            f"Square: `{assets['square']}`",
            f"Portrait: `{assets['portrait']}`",
            "",
            "### Himani LinkedIn",
            "",
            post.founder_caption,
            "",
            "### Company LinkedIn / Facebook",
            "",
            post.company_caption,
            "",
            "### Instagram",
            "",
            post.instagram_caption,
            "",
        ])
    out.write_text("\n".join(lines), encoding="utf-8")


def write_queue(posts_list: list[Post], generated_assets: dict[str, dict[str, str]]) -> None:
    out = CONTENT_DIR / "Social_Queue_2026-07-07_to_2026-08-03.csv"
    rows = []
    for post in posts_list:
        square_url = f"https://www.emergent-logic.ca{generated_assets[post.slug]['square']}"
        portrait_url = f"https://www.emergent-logic.ca{generated_assets[post.slug]['portrait']}"
        rows.extend([
            {
                "id": f"{post.date}-{post.slug}-himani-linkedin",
                "publish_date": post.date,
                "channel": "linkedin_profile",
                "caption": post.founder_caption,
                "status": "draft",
                "image_url": square_url,
                "linkedin_actor_urn": "",
                "facebook_page_id": "",
                "instagram_business_account_id": "",
            },
            {
                "id": f"{post.date}-{post.slug}-company-linkedin",
                "publish_date": post.date,
                "channel": "linkedin_company",
                "caption": post.company_caption,
                "status": "draft",
                "image_url": square_url,
                "linkedin_actor_urn": "",
                "facebook_page_id": "",
                "instagram_business_account_id": "",
            },
            {
                "id": f"{post.date}-{post.slug}-facebook",
                "publish_date": post.date,
                "channel": "facebook",
                "caption": post.company_caption,
                "status": "draft",
                "image_url": square_url,
                "linkedin_actor_urn": "",
                "facebook_page_id": "",
                "instagram_business_account_id": "",
            },
            {
                "id": f"{post.date}-{post.slug}-instagram",
                "publish_date": post.date,
                "channel": "instagram",
                "caption": post.instagram_caption,
                "status": "draft",
                "image_url": portrait_url,
                "linkedin_actor_urn": "",
                "facebook_page_id": "",
                "instagram_business_account_id": "",
            },
        ])
    with out.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)


def main() -> None:
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    posts_list = posts()
    generated_assets: dict[str, dict[str, str]] = {}
    for post in posts_list:
        square = render_card(post, "square", (1080, 1080))
        portrait = render_card(post, "portrait", (1080, 1350))
        generated_assets[post.slug] = {
            "square": "/" + str(square.relative_to(ROOT / "public")),
            "portrait": "/" + str(portrait.relative_to(ROOT / "public")),
        }
    write_calendar(posts_list, generated_assets)
    write_queue(posts_list, generated_assets)
    print(f"Generated {len(posts_list) * 2} graphics")
    print(f"Graphics: {PUBLIC_DIR}")
    print(f"Calendar: {CONTENT_DIR / 'Monthly_Content_Kit_2026-07-07_to_2026-08-03.md'}")
    print(f"Queue: {CONTENT_DIR / 'Social_Queue_2026-07-07_to_2026-08-03.csv'}")


if __name__ == "__main__":
    main()
