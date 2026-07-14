from __future__ import annotations

import json
from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import landscape, letter
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from PIL import Image as PILImage


ROOT = Path(__file__).resolve().parents[2]
BRAND_DIR = ROOT / "content" / "brand"
TOKENS_PATH = BRAND_DIR / "emergent-logic-brand-tokens.json"
OUTPUT = BRAND_DIR / "EMERGENT_LOGIC_BRAND_GUIDELINES_2026.pdf"
OFFICIAL_DARK_SQUARE = BRAND_DIR / "assets" / "emergent_logic_dark_square_1080.png"
OFFICIAL_PRIMARY_DARK = BRAND_DIR / "assets" / "emergent_logic_primary_logo_dark_500.png"

PAGE_W, PAGE_H = landscape(letter)
MARGIN = 44

TOKENS = json.loads(TOKENS_PATH.read_text())
COLORS = {key: HexColor(value["hex"]) for key, value in TOKENS["colors"].items()}

NAVY = COLORS["brand_navy"]
INDIGO = COLORS["signal_indigo"]
ACTION = COLORS["action_indigo"]
INK = COLORS["deep_ink"]
MUTED = COLORS["muted_slate"]
SOFT = COLORS["soft_indigo"]
PAPER = COLORS["paper"]
LINE = COLORS["line"]
TEAL = COLORS["process_teal"]
CORAL = COLORS["alert_coral"]
LIGHT_INDIGO = HexColor("#C7D2FE")
MID_INDIGO = HexColor("#A5B4FC")
PALE_CORAL = HexColor("#FFF1EC")
PALE_TEAL = HexColor("#E9F6F3")


def wrap_lines(text: str, font: str, size: float, width: float) -> list[str]:
    words = text.split()
    if not words:
        return []
    lines: list[str] = []
    current = ""
    for word in words:
        trial = f"{current} {word}".strip()
        if stringWidth(trial, font, size) <= width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_text(
    c: canvas.Canvas,
    text: str,
    x: float,
    y_top: float,
    width: float,
    *,
    font: str = "Helvetica",
    size: float = 9,
    leading: float = 13,
    color=INK,
    max_lines: int | None = None,
) -> float:
    y = y_top
    lines_drawn = 0
    paragraphs = text.split("\n")
    for idx, paragraph in enumerate(paragraphs):
        if not paragraph:
            y -= leading * 0.55
            continue
        lines = wrap_lines(paragraph, font, size, width)
        for line in lines:
            if max_lines is not None and lines_drawn >= max_lines:
                return y
            c.setFillColor(color)
            c.setFont(font, size)
            c.drawString(x, y, line)
            y -= leading
            lines_drawn += 1
        if idx < len(paragraphs) - 1:
            y -= leading * 0.25
    return y


def draw_bullets(
    c: canvas.Canvas,
    items: list[str],
    x: float,
    y_top: float,
    width: float,
    *,
    size: float = 8.7,
    leading: float = 12.5,
    color=INK,
    bullet_color=INDIGO,
    gap: float = 5,
) -> float:
    y = y_top
    for item in items:
        lines = wrap_lines(item, "Helvetica", size, width - 18)
        c.setFillColor(bullet_color)
        c.circle(x + 3.5, y + 2.5, 2.8, fill=1, stroke=0)
        for line in lines:
            c.setFillColor(color)
            c.setFont("Helvetica", size)
            c.drawString(x + 14, y, line)
            y -= leading
        y -= gap
    return y


def rounded_box(c: canvas.Canvas, x: float, y: float, w: float, h: float, fill, stroke=LINE, radius: float = 8):
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(0.8)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=1)


def label(c: canvas.Canvas, text: str, x: float, y: float, color=ACTION):
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(x, y, text.upper())


def draw_image_fit(
    c: canvas.Canvas,
    path: Path,
    x: float,
    y: float,
    width: float,
    height: float,
    *,
    trim_transparency: bool = False,
):
    image = ImageReader(str(path))
    image_width, image_height = image.getSize()
    bbox = (0, 0, image_width, image_height)
    if trim_transparency:
        with PILImage.open(path) as source:
            if "A" in source.getbands():
                alpha_bbox = source.getchannel("A").getbbox()
                if alpha_bbox:
                    bbox = alpha_bbox

    left, top, right, bottom = bbox
    content_width = right - left
    content_height = bottom - top
    scale = min(width / content_width, height / content_height)
    rendered_width = image_width * scale
    rendered_height = image_height * scale
    content_draw_width = content_width * scale
    content_draw_height = content_height * scale
    draw_x = x + (width - content_draw_width) / 2 - left * scale
    draw_y = y + (height - content_draw_height) / 2 - (image_height - bottom) * scale

    c.saveState()
    clip = c.beginPath()
    clip.rect(x, y, width, height)
    c.clipPath(clip, stroke=0, fill=0)
    c.drawImage(
        image,
        draw_x,
        draw_y,
        width=rendered_width,
        height=rendered_height,
        mask="auto",
        preserveAspectRatio=False,
    )
    c.restoreState()


def draw_dark_lockup(c: canvas.Canvas, x: float, y: float, width: float, height: float):
    draw_image_fit(c, OFFICIAL_DARK_SQUARE, x, y, width, height)


def draw_reversed_lockup(c: canvas.Canvas, x: float, y: float, width: float, height: float):
    draw_image_fit(c, OFFICIAL_PRIMARY_DARK, x, y, width, height)


def page_header(c: canvas.Canvas, page_no: int, title: str, subtitle: str = ""):
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    label(c, "Emergent Logic / Brand system 1.2", MARGIN, PAGE_H - 28, ACTION)
    c.setFillColor(MUTED)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawRightString(PAGE_W - MARGIN, PAGE_H - 28, f"{page_no:02d}")
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(MARGIN, PAGE_H - 64, title)
    if subtitle:
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 9.5)
        c.drawString(MARGIN, PAGE_H - 82, subtitle)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.8)
    c.line(MARGIN, PAGE_H - 96, PAGE_W - MARGIN, PAGE_H - 96)


def page_footer(c: canvas.Canvas, page_no: int):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.6)
    c.line(MARGIN, 28, PAGE_W - MARGIN, 28)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7)
    c.drawString(MARGIN, 15, "Emergent Logic | emergent-logic.ca | Brand guidelines 1.2 | Effective 2026-07-14")
    c.linkURL("https://www.emergent-logic.ca", (MARGIN, 8, 250, 25), relative=0)
    c.drawRightString(PAGE_W - MARGIN, 15, f"{page_no} / 13")


def finish_page(c: canvas.Canvas, page_no: int):
    page_footer(c, page_no)
    c.showPage()


def draw_rule_row(c: canvas.Canvas, number: str, title: str, body: str, x: float, y: float, w: float):
    c.setFillColor(ACTION)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(x, y, number)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(x + 26, y, title)
    draw_text(c, body, x + 26, y - 15, w - 26, size=8, leading=11.5, color=MUTED, max_lines=3)
    c.setStrokeColor(LINE)
    c.line(x, y - 52, x + w, y - 52)


def draw_swatch(c: canvas.Canvas, x: float, y: float, w: float, h: float, name: str, hex_value: str, role: str, text_on_color=white):
    fill = HexColor(hex_value)
    rounded_box(c, x, y, w, h, white, LINE, 7)
    c.setFillColor(fill)
    c.roundRect(x, y + h - 42, w, 42, 7, fill=1, stroke=0)
    c.rect(x, y + h - 42, w, 7, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.line(x, y + h - 42, x + w, y + h - 42)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(x + 9, y + h - 58, name)
    c.setFillColor(MUTED)
    c.setFont("Helvetica-Bold", 7.2)
    c.drawRightString(x + w - 9, y + h - 58, hex_value)
    draw_text(c, role, x + 9, y + h - 73, w - 18, size=6.7, leading=9.2, color=MUTED, max_lines=3)


def build_cover(c: canvas.Canvas):
    c.bookmarkPage("cover")
    c.addOutlineEntry("Cover", "cover", 0)
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    draw_image_fit(c, OFFICIAL_PRIMARY_DARK, MARGIN, PAGE_H - 160, 120, 120)

    c.setFillColor(INDIGO)
    c.rect(MARGIN, 168, 7, 240, fill=1, stroke=0)
    label(c, "Definitive system", MARGIN + 24, 403, LIGHT_INDIGO)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 38)
    c.drawString(MARGIN + 24, 348, "Brand guidelines")
    c.setFillColor(LIGHT_INDIGO)
    c.setFont("Helvetica", 16)
    c.drawString(MARGIN + 24, 314, "A visual, verbal, and production standard")

    draw_text(
        c,
        "For websites, documents, research, proposals, social assets, and public communications.",
        MARGIN + 24,
        272,
        405,
        size=11,
        leading=16,
        color=HexColor("#DDE5FF"),
    )

    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(MARGIN + 24, 201, "VERSION 1.2")
    c.setFillColor(LIGHT_INDIGO)
    c.setFont("Helvetica", 9)
    c.drawString(MARGIN + 103, 201, "Effective 2026-07-14")

    # Structural network motif derived from the approved hex mark.
    draw_image_fit(c, OFFICIAL_DARK_SQUARE, 520, 195, 210, 210)
    for yy, text in [(171, "Clear systems"), (144, "Visible follow-up"), (117, "Human accountability")]:
        c.setStrokeColor(INDIGO)
        c.line(550, yy + 4, 578, yy + 4)
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(588, yy, text)

    c.setFillColor(HexColor("#162F50"))
    c.rect(0, 0, PAGE_W, 82, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(MARGIN, 48, "Brand owner and sole public-facing person")
    c.setFillColor(LIGHT_INDIGO)
    c.setFont("Helvetica", 10)
    c.drawString(MARGIN, 30, "Himani Kharbanda | Founder & CEO")
    c.drawRightString(PAGE_W - MARGIN, 30, "emergent-logic.ca")
    c.linkURL("https://www.emergent-logic.ca", (PAGE_W - MARGIN - 120, 18, PAGE_W - MARGIN, 44), relative=0)
    c.showPage()


def build_foundation(c: canvas.Canvas):
    page_no = 2
    c.bookmarkPage("foundation")
    c.addOutlineEntry("Brand foundation", "foundation", 0)
    page_header(c, page_no, "Brand foundation", "The company should feel like a capable operator: clear, calm, specific, and accountable.")

    rounded_box(c, 44, 318, 330, 174, white)
    label(c, "Positioning", 62, 466)
    draw_text(
        c,
        "Emergent Logic helps Canadian businesses implement, clean up, and automate CRM and lead follow-up systems so ownership, next steps, and reporting remain visible.",
        62,
        442,
        294,
        font="Helvetica-Bold",
        size=12,
        leading=17,
        color=INK,
    )
    label(c, "Brand promise", 62, 362, TEAL)
    draw_text(c, "Make the operating path clear, fix a defined bottleneck, test the result, and leave documentation behind.", 62, 343, 294, size=8.7, leading=12.5, color=MUTED)

    rounded_box(c, 390, 318, 358, 174, NAVY, NAVY)
    label(c, "Approved language", 408, 466, LIGHT_INDIGO)
    rows = [
        ("Official tagline", "AI-Accelerated Solutions. Human-Centered Results."),
        ("Descriptor", "AI-accelerated CRM consulting"),
        ("Service line", "CRM implementation, cleanup, automation, and lead capture systems"),
        ("Campaign line", "Find the leak. Fix the flow."),
    ]
    y = 440
    for row_label, value in rows:
        c.setFillColor(LIGHT_INDIGO)
        c.setFont("Helvetica-Bold", 7.2)
        c.drawString(408, y, row_label.upper())
        draw_text(c, value, 488, y, 238, font="Helvetica-Bold", size=9.2, leading=12.5, color=white, max_lines=2)
        y -= 36

    principles = [
        ("01", "Precise", "Name the field, owner, stage, or next step."),
        ("02", "Calm", "State the consequence without manufacturing fear."),
        ("03", "Technical", "Explain the system in language a buyer can use."),
        ("04", "Evidence-led", "Show the source, method, or observable condition."),
        ("05", "Helpful", "Give a useful next step before asking for a call."),
        ("06", "Accountable", "AI accelerates delivery; people own judgment."),
    ]
    start_y = 268
    col_w = 336
    for idx, (num, title, body) in enumerate(principles):
        col = idx % 2
        row = idx // 2
        draw_rule_row(c, num, title, body, 44 + col * 368, start_y - row * 65, col_w)

    rounded_box(c, 44, 46, 704, 44, SOFT, HexColor("#C9D1FF"), 7)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(60, 64, "Identity rule")
    c.setFont("Helvetica", 9)
    c.drawString(132, 64, "Himani Kharbanda is the sole public-facing person. The company page may speak as Emergent Logic.")
    finish_page(c, page_no)


def build_identity(c: canvas.Canvas):
    page_no = 3
    c.bookmarkPage("identity")
    c.addOutlineEntry("Public identity", "identity", 0)
    page_header(c, page_no, "Public identity", "One accountable founder identity across profiles, outreach, documents, and social content.")

    rounded_box(c, 44, 126, 258, 366, NAVY, NAVY)
    draw_image_fit(c, OFFICIAL_PRIMARY_DARK, 66, 402, 78, 78)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 21)
    c.drawString(66, 374, "Himani Kharbanda")
    c.setFillColor(LIGHT_INDIGO)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(66, 352, "Founder & CEO, Emergent Logic")
    c.setStrokeColor(INDIGO)
    c.setLineWidth(3)
    c.line(66, 332, 244, 332)
    details = [
        "himani@emergent-logic.ca",
        "778-652-6271",
        "Surrey, BC | Serving Canada",
        "emergent-logic.ca",
    ]
    y = 299
    for detail in details:
        c.setFillColor(white)
        c.setFont("Helvetica", 9)
        c.drawString(66, y, detail)
        y -= 25
    c.setFillColor(LIGHT_INDIGO)
    c.setFont("Helvetica", 7.5)
    c.drawString(66, 158, "Pronouns: she/her where platform-supported")

    rounded_box(c, 326, 330, 422, 162, white)
    label(c, "Approved short bio", 346, 464)
    draw_text(
        c,
        "Himani Kharbanda is Founder & CEO of Emergent Logic, a Surrey-based CRM consulting firm focused on implementation, cleanup, automation, lead routing, and follow-up visibility.",
        346,
        437,
        378,
        size=10.2,
        leading=15,
        color=INK,
    )

    rounded_box(c, 326, 126, 422, 180, SOFT, HexColor("#CBD3FF"))
    label(c, "Governance", 346, 278, ACTION)
    draw_bullets(
        c,
        [
            "Founder posts, bylines, quotes, bios, headshots, and signatures use Himani Kharbanda.",
            "No other person is positioned as a founder, employee, operator, or spokesperson without a written brand-governance change.",
            "Legacy multi-person business-card exports are historical only. Regenerate Himani-only collateral before distribution.",
            "Do not expose private employment, personal-profile, or unrelated-company information through Emergent Logic assets.",
        ],
        346,
        250,
        378,
        size=8.5,
        leading=12,
        gap=4,
    )
    finish_page(c, page_no)


def build_logo_system(c: canvas.Canvas):
    page_no = 4
    c.bookmarkPage("logos")
    c.addOutlineEntry("Logo system", "logos", 0)
    page_header(c, page_no, "Logo system", "Exactly two supplied masters. No symbol-only, reconstructed, or alternate marks.")

    rounded_box(c, 44, 256, 336, 236, white)
    label(c, "Approved master 1 / Dark square 1080", 62, 464)
    draw_image_fit(c, OFFICIAL_DARK_SQUARE, 62, 270, 180, 180)
    draw_text(
        c,
        "Use for high-resolution square placements and branded holding fields. Preserve the complete artwork.",
        268,
        402,
        94,
        size=7.5,
        leading=10.5,
        color=MUTED,
    )

    rounded_box(c, 396, 256, 352, 236, white)
    label(c, "Approved master 2 / Primary dark 500", 414, 464)
    draw_image_fit(c, OFFICIAL_PRIMARY_DARK, 414, 270, 180, 180)
    draw_text(
        c,
        "Use for profiles, compact square placements, schema, favicons, and faithful layout derivatives.",
        620,
        402,
        110,
        size=7.5,
        leading=10.5,
        color=MUTED,
    )

    rounded_box(c, 44, 120, 704, 106, SOFT, HexColor("#CBD3FF"))
    label(c, "Derivative and governance rule", 62, 198)
    draw_bullets(
        c,
        [
            "Uniform resize or unchanged placement only; preserve aspect ratio and the complete artwork.",
            "Do not crop, redraw, recolour, trace, isolate, retype, or rebuild the hex symbol.",
            "Verify master checksums against APPROVED_LOGO_MANIFEST.md before generating derivatives.",
        ],
        62,
        174,
        656,
        size=8.2,
        leading=11.5,
        gap=3,
    )
    finish_page(c, page_no)


def build_logo_mechanics(c: canvas.Canvas):
    page_no = 5
    c.bookmarkPage("logo-mechanics")
    c.addOutlineEntry("Logo mechanics", "logo-mechanics", 0)
    page_header(c, page_no, "Clear space, size, and contrast", "The mark must remain visible before it is decorative.")

    rounded_box(c, 44, 292, 286, 200, white)
    label(c, "Clear space", 62, 464)
    box_x, box_y, box_size = 104, 332, 122
    c.setStrokeColor(INDIGO)
    c.setDash(4, 3)
    c.rect(box_x, box_y, box_size, box_size, fill=0, stroke=1)
    c.setDash()
    draw_image_fit(c, OFFICIAL_PRIMARY_DARK, box_x + 20, box_y + 20, 82, 82)
    c.setFillColor(ACTION)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(box_x + 4, box_y + box_size + 8, "x")
    c.drawString(box_x - 12, box_y + box_size / 2, "x")
    draw_text(c, "Let x equal 25% of the complete artwork width. Keep at least x clear on all four sides.", 62, 318, 250, size=8, leading=11.5, color=MUTED)

    rounded_box(c, 346, 292, 402, 200, white)
    label(c, "Minimum size", 364, 464)
    specs = [
        ("Dark square 1080", "160 px digital", "42 mm print"),
        ("Primary dark 500", "160 px digital", "42 mm print"),
    ]
    y = 430
    for name, digital, print_size in specs:
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(364, y, name)
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 8.5)
        c.drawString(510, y, digital)
        c.drawString(625, y, print_size)
        c.setStrokeColor(LINE)
        c.line(364, y - 14, 730, y - 14)
        y -= 45
    draw_text(c, "Below the logo minimum, use Emergent Logic as accessible live text. There is no approved symbol-only mark.", 364, 326, 366, size=8, leading=11.5, color=MUTED)

    variants = [
        (44, 118, 162, 142, PAPER, False, "Light page", "Complete dark square master"),
        (222, 118, 162, 142, NAVY, True, "Dark page", "Complete primary dark master"),
        (400, 118, 162, 142, white, False, "Square", "Dark square master"),
        (578, 118, 170, 142, white, False, "Profile", "Primary dark master"),
    ]
    for idx, (x, y, w, h, fill, dark, title, note) in enumerate(variants):
        rounded_box(c, x, y, w, h, fill, LINE if not dark else NAVY)
        if idx == 0:
            draw_image_fit(c, OFFICIAL_DARK_SQUARE, x + 48, y + 48, 66, 66)
        elif idx == 1:
            draw_image_fit(c, OFFICIAL_PRIMARY_DARK, x + 48, y + 48, 66, 66)
        elif idx == 2:
            draw_image_fit(c, OFFICIAL_DARK_SQUARE, x + 18, y + 53, 58, 58)
        else:
            draw_image_fit(c, OFFICIAL_PRIMARY_DARK, x + 18, y + 53, 58, 58)
        c.setFillColor(white if dark else INK)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(x + 14, y + 31, title)
        c.setFillColor(LIGHT_INDIGO if dark else MUTED)
        c.setFont("Helvetica", 6.7)
        c.drawString(x + 14, y + 17, note)
    finish_page(c, page_no)


def build_colors(c: canvas.Canvas):
    page_no = 6
    c.bookmarkPage("colors")
    c.addOutlineEntry("Colour system", "colors", 0)
    page_header(c, page_no, "Colour system", "Navy and indigo are canonical. Functional colours explain state; they do not decorate the page.")

    core = [
        ("Brand Navy", "#1E3A5F", "Brand anchor and dark fields", white),
        ("Signal Indigo", "#6366F1", "Logo nodes and large accents", white),
        ("Action Indigo", "#4B37C8", "Buttons, links, active states", white),
        ("Deep Ink", "#101828", "Primary text", white),
        ("White", "#FFFFFF", "Reverse text and surfaces", NAVY),
    ]
    sw = 132
    for idx, item in enumerate(core):
        draw_swatch(c, 44 + idx * 142, 328, sw, 162, *item)

    support = [
        ("Muted Slate", "#667085", "Secondary text", white),
        ("Soft Indigo", "#EEF2FF", "Tinted panels", NAVY),
        ("Paper", "#FBFBFF", "Light background", NAVY),
        ("Line", "#DFE3F5", "Borders and dividers", NAVY),
        ("Process Teal", "#0F766E", "Verified and complete", white),
        ("Alert Coral", "#D95D39", "Risk and bottlenecks", white),
    ]
    sw2 = 108
    for idx, item in enumerate(support):
        draw_swatch(c, 44 + idx * 118, 152, sw2, 144, *item)

    label(c, "Recommended light-asset proportion", 44, 124)
    bar_x, bar_y, bar_w, bar_h = 44, 77, 704, 26
    segments = [(0.72, PAPER), (0.15, NAVY), (0.08, INDIGO), (0.03, TEAL), (0.02, CORAL)]
    cursor = bar_x
    for ratio, fill in segments:
        width = bar_w * ratio
        c.setFillColor(fill)
        c.rect(cursor, bar_y, width, bar_h, fill=1, stroke=0)
        cursor += width
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7)
    c.drawString(44, 58, "72% Paper  |  15% Navy  |  8% Indigo  |  3% Teal  |  2% Coral")
    c.drawRightString(748, 58, "Use Action Indigo, not Signal Indigo, behind normal-size white button text.")
    finish_page(c, page_no)


def build_typography(c: canvas.Canvas):
    page_no = 7
    c.bookmarkPage("typography")
    c.addOutlineEntry("Typography", "typography", 0)
    page_header(c, page_no, "Typography", "Inter is primary. Helvetica or Arial is the approved portable fallback.")

    rounded_box(c, 44, 190, 348, 302, NAVY, NAVY)
    label(c, "Type specimen", 64, 462, LIGHT_INDIGO)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 34)
    c.drawString(64, 402, "Clear systems.")
    c.drawString(64, 360, "Visible follow-up.")
    c.setFillColor(LIGHT_INDIGO)
    c.setFont("Helvetica", 13)
    c.drawString(64, 322, "CRM implementation, cleanup, automation,")
    c.drawString(64, 302, "and lead capture systems.")
    c.setStrokeColor(INDIGO)
    c.setLineWidth(4)
    c.line(64, 275, 240, 275)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(64, 242, "Inter 700 / fallback Helvetica Bold")
    c.setFillColor(LIGHT_INDIGO)
    c.setFont("Helvetica", 8.5)
    c.drawString(64, 222, "Letter spacing: 0 | No thin weights | Sentence case")

    rounded_box(c, 408, 190, 340, 302, white)
    label(c, "Web scale", 426, 462)
    scale_rows = [
        ("Display", "48 / 56", 18, "Systems people trust"),
        ("H1", "40 / 48", 15, "CRM cleanup, clearly"),
        ("H2", "30 / 38", 14, "What the current path shows"),
        ("H3", "22 / 30", 11, "Ownership and routing"),
        ("Body", "16 / 26", 9, "Map, fix, test, document."),
        ("Small", "14 / 22", 8, "Scope and methodology note"),
        ("Label", "12 / 16", 7, "VERIFIED PROCESS"),
    ]
    y = 429
    for name, spec, sample_size, sample in scale_rows:
        c.setFillColor(ACTION)
        c.setFont("Helvetica-Bold", 7)
        c.drawString(426, y, name.upper())
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 7)
        c.drawString(478, y, spec)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold" if name in {"Display", "H1", "H2", "H3"} else "Helvetica", sample_size)
        c.drawString(526, y - 2, sample)
        c.setStrokeColor(LINE)
        c.line(426, y - 17, 730, y - 17)
        y -= 38

    rounded_box(c, 44, 52, 704, 108, SOFT, HexColor("#CBD3FF"))
    label(c, "Production rules", 62, 132)
    draw_bullets(
        c,
        [
            "Use 800 for cover statements, 700 for headings and key numbers, 600 for labels, and 400 for body copy.",
            "Use sentence case. Reserve all caps for labels of three words or fewer.",
            "On mobile, use 36/44 for display and 32/40 for H1. Do not scale type continuously with viewport width.",
            "Never shrink text to force excess copy into a fixed container. Edit the copy or expand the layout.",
        ],
        62,
        111,
        660,
        size=7.8,
        leading=10.5,
        gap=1.5,
    )
    finish_page(c, page_no)


def build_interface(c: canvas.Canvas):
    page_no = 8
    c.bookmarkPage("interface")
    c.addOutlineEntry("Interface layout", "interface", 0)
    page_header(c, page_no, "Website and interface layout", "Quiet, operational, and built for scanning, comparison, and repeated action.")

    # Website wireframe.
    rounded_box(c, 44, 126, 400, 366, white)
    c.setFillColor(NAVY)
    c.roundRect(44, 438, 400, 54, 8, fill=1, stroke=0)
    c.rect(44, 438, 400, 10, fill=1, stroke=0)
    draw_reversed_lockup(c, 58, 446, 108, 38)
    c.setFillColor(LIGHT_INDIGO)
    c.setFont("Helvetica", 6.8)
    c.drawRightString(428, 464, "Services   Pricing   Research   Contact")

    c.setFillColor(PAPER)
    c.rect(44, 292, 400, 146, fill=1, stroke=0)
    label(c, "Literal offer", 64, 410)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(64, 374, "Fix one CRM bottleneck")
    c.setFont("Helvetica-Bold", 22)
    c.drawString(64, 346, "in five business days")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8.5)
    c.drawString(64, 321, "Clear scope. Tested handoff. Documentation included.")
    c.setFillColor(ACTION)
    c.roundRect(64, 294, 118, 24, 6, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(123, 303, "Book a fit check")

    c.setFillColor(white)
    c.rect(44, 214, 400, 78, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(64, 267, "The operating path")
    for idx, item in enumerate(["Capture", "Route", "Follow up", "Report"]):
        x = 64 + idx * 86
        rounded_box(c, x, 227, 72, 25, SOFT, LINE, 5)
        c.setFillColor(NAVY)
        c.setFont("Helvetica-Bold", 7)
        c.drawCentredString(x + 36, 236, item)
        if idx < 3:
            c.setStrokeColor(INDIGO)
            c.line(x + 72, 239, x + 84, 239)

    c.setFillColor(SOFT)
    c.rect(44, 126, 400, 88, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(64, 187, "Evidence before claims")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8)
    c.drawString(64, 166, "Use real reports, workflow diagrams, CRM screens, or public source tables.")
    c.drawString(64, 149, "Show the actual product, state, process, or deliverable.")

    rounded_box(c, 468, 260, 280, 232, white)
    label(c, "Structure", 486, 464)
    draw_bullets(
        c,
        [
            "Use full-width page bands with a constrained content column.",
            "Put the actual service, CRM state, report finding, workflow, or offer in the first viewport.",
            "Use cards only for repeated items, comparisons, or framed tools.",
            "Never place cards inside cards.",
            "Keep card and button radii at 8 px or less.",
            "Use one primary CTA per section.",
        ],
        486,
        438,
        244,
        size=8.2,
        leading=11.5,
        gap=3,
    )

    rounded_box(c, 468, 126, 280, 112, NAVY, NAVY)
    label(c, "Button hierarchy", 486, 210, LIGHT_INDIGO)
    c.setFillColor(ACTION)
    c.roundRect(486, 165, 104, 28, 6, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(538, 176, "Primary action")
    c.setStrokeColor(white)
    c.setFillColor(NAVY)
    c.roundRect(602, 165, 110, 28, 6, fill=1, stroke=1)
    c.setFillColor(white)
    c.drawCentredString(657, 176, "Secondary action")
    c.setFillColor(LIGHT_INDIGO)
    c.setFont("Helvetica", 7)
    c.drawString(486, 145, "Text links use Action Indigo on light surfaces.")
    finish_page(c, page_no)


def build_documents(c: canvas.Canvas):
    page_no = 9
    c.bookmarkPage("documents")
    c.addOutlineEntry("Document layout", "documents", 0)
    page_header(c, page_no, "Document and PDF layout", "A branded document should reveal the observation, implication, and next step without visual noise.")

    # Portrait one-page report mockup.
    doc_x, doc_y, doc_w, doc_h = 60, 92, 254, 400
    c.setFillColor(HexColor("#E8ECF5"))
    c.roundRect(doc_x + 8, doc_y - 8, doc_w, doc_h, 6, fill=1, stroke=0)
    rounded_box(c, doc_x, doc_y, doc_w, doc_h, white, LINE, 6)
    c.setFillColor(NAVY)
    c.roundRect(doc_x, doc_y + doc_h - 72, doc_w, 72, 6, fill=1, stroke=0)
    c.rect(doc_x, doc_y + doc_h - 72, doc_w, 8, fill=1, stroke=0)
    draw_reversed_lockup(c, doc_x + 14, doc_y + doc_h - 59, 72, 38)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(doc_x + 94, doc_y + doc_h - 32, "Public inquiry path review")
    c.setFillColor(LIGHT_INDIGO)
    c.setFont("Helvetica", 6.5)
    c.drawString(doc_x + 94, doc_y + doc_h - 47, "Subject | Prepared date | Scope")

    y = doc_y + doc_h - 92
    for title, fill, accent, height in [
        ("Opportunity", PALE_TEAL, TEAL, 56),
        ("What the public path shows", white, CORAL, 128),
        ("Recommended next step", PALE_CORAL, CORAL, 76),
    ]:
        c.setFillColor(fill)
        c.setStrokeColor(LINE)
        c.roundRect(doc_x + 18, y - height, doc_w - 36, height, 5, fill=1, stroke=1)
        c.setFillColor(accent)
        c.rect(doc_x + 18, y - height, 3, height, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 7.5)
        c.drawString(doc_x + 30, y - 17, title)
        c.setStrokeColor(LINE)
        for offset in range(32, height - 9, 14):
            c.line(doc_x + 30, y - offset, doc_x + doc_w - 30, y - offset)
        y -= height + 12
    c.setStrokeColor(LINE)
    c.line(doc_x + 18, doc_y + 30, doc_x + doc_w - 18, doc_y + 30)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 5.5)
    c.drawString(doc_x + 18, doc_y + 17, "Emergent Logic | emergent-logic.ca | scope note")

    rounded_box(c, 342, 300, 406, 192, white)
    label(c, "Content anatomy", 362, 464)
    anatomy = [
        ("01", "Context or opportunity"),
        ("02", "Evidence or public observation"),
        ("03", "Operational implication"),
        ("04", "Recommended next step"),
        ("05", "Scope and methodology note"),
    ]
    y = 430
    for num, title in anatomy:
        c.setFillColor(ACTION)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(362, y, num)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(390, y, title)
        y -= 29

    rounded_box(c, 342, 92, 406, 186, SOFT, HexColor("#CBD3FF"))
    label(c, "Production rules", 362, 250)
    draw_bullets(
        c,
        [
            "US Letter portrait for audits and one-page reviews; landscape for presentations and reference guides.",
            "Use at least 0.5 inch margins and one CTA block per page at most.",
            "Use Coral for risk and Teal for verified or complete states.",
            "Use live links and a footer with brand, website, version/date, and page number where appropriate.",
            "Use 'Prepared by Himani Kharbanda, Founder & CEO' when a personal byline is needed.",
        ],
        362,
        226,
        364,
        size=8.1,
        leading=11.2,
        gap=3,
    )
    finish_page(c, page_no)


def build_social(c: canvas.Canvas):
    page_no = 10
    c.bookmarkPage("social")
    c.addOutlineEntry("Social layout", "social", 0)
    page_header(c, page_no, "Social layout", "One operator insight, one proof element, one action.")

    # Portrait mockup at 4:5.
    px, py, pw, ph = 44, 112, 205, 380
    rounded_box(c, px, py, pw, ph, PAPER, LINE, 8)
    c.setFillColor(INDIGO)
    c.rect(px, py + ph - 6, pw, 6, fill=1, stroke=0)
    draw_dark_lockup(c, px + 14, py + ph - 62, 112, 40)
    label(c, "Operator insight", px + 16, py + ph - 82)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 17)
    c.drawString(px + 16, py + ph - 119, "The leak starts")
    c.drawString(px + 16, py + ph - 141, "after Submit")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8)
    c.drawString(px + 16, py + ph - 164, "Ownership. Routing. Next step.")
    rounded_box(c, px + 16, py + 105, pw - 32, 104, white, LINE, 6)
    for idx, item in enumerate(["Capture", "Assign", "Follow up"]):
        yy = py + 178 - idx * 29
        c.setFillColor(SOFT)
        c.circle(px + 32, yy + 2, 7, fill=1, stroke=0)
        c.setFillColor(ACTION)
        c.setFont("Helvetica-Bold", 7)
        c.drawCentredString(px + 32, yy, str(idx + 1))
        c.setFillColor(NAVY)
        c.drawString(px + 48, yy, item)
    rounded_box(c, px + 16, py + 24, pw - 32, 48, white, LINE, 6)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(px + 28, py + 43, "Message Himani")
    c.setFillColor(ACTION)
    c.drawRightString(px + pw - 28, py + 43, "emergent-logic.ca")

    # Square mockup.
    sx, sy, ss = 270, 166, 255
    rounded_box(c, sx, sy, ss, ss, white, LINE, 8)
    c.setFillColor(NAVY)
    c.rect(sx, sy + ss - 62, ss, 62, fill=1, stroke=0)
    draw_reversed_lockup(c, sx + 14, sy + ss - 54, 112, 42)
    label(c, "One finding", sx + 18, sy + ss - 88, ACTION)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 18)
    c.drawString(sx + 18, sy + ss - 122, "41% unassigned")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8)
    c.drawString(sx + 18, sy + ss - 142, "Sample CRM follow-up audit")
    c.setStrokeColor(INDIGO)
    c.setLineWidth(6)
    c.line(sx + 18, sy + 83, sx + 201, sy + 83)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(sx + 18, sy + 52, "Make ownership visible")
    c.setFillColor(ACTION)
    c.setFont("Helvetica", 8)
    c.drawString(sx + 18, sy + 29, "Get the 5-point audit")

    rounded_box(c, 548, 112, 200, 380, SOFT, HexColor("#CBD3FF"))
    label(c, "Approved formats", 566, 464)
    format_rows = [
        ("LinkedIn portrait", "1080 x 1350", "80 px safe margin"),
        ("Social square", "1080 x 1080", "72 px safe margin"),
        ("Open Graph", "1200 x 630", "64 px safe margin"),
    ]
    y = 434
    for name, dims, safe in format_rows:
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 8.5)
        c.drawString(566, y, name)
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 7.5)
        c.drawString(566, y - 14, f"{dims} | {safe}")
        c.setStrokeColor(LINE)
        c.line(566, y - 25, 730, y - 25)
        y -= 54
    label(c, "Composition", 566, 262, ACTION)
    draw_bullets(
        c,
        [
            "Top: one complete approved master, or the company name as live text without a reconstructed symbol.",
            "Primary: one claim, question, number, or operator insight.",
            "Evidence: one diagram, checklist, source note, or real deliverable excerpt.",
            "Footer: one CTA and the domain.",
            "Keep core image copy under 30 words when possible.",
            "Founder content uses Himani; company content uses the company page.",
        ],
        566,
        238,
        164,
        size=7.6,
        leading=10.5,
        gap=2.5,
    )
    finish_page(c, page_no)


def build_voice(c: canvas.Canvas):
    page_no = 11
    c.bookmarkPage("voice")
    c.addOutlineEntry("Tone of voice", "voice", 0)
    page_header(c, page_no, "Tone of voice", "Specific before impressive. Systems before tools. Evidence before claims.")

    principles = [
        ("01", "Specific before impressive", "Name the field, owner, stage, workflow, or next step."),
        ("02", "Systems before tools", "Explain the operating path before recommending software."),
        ("03", "Evidence before claims", "Show the source, method, or observable condition."),
        ("04", "Calm before urgent", "State consequences without manufacturing fear."),
        ("05", "Helpful before salesy", "Give the reader a useful next step before asking for a call."),
        ("06", "Human accountability", "AI accelerates delivery; it does not replace ownership or judgment."),
    ]
    y = 458
    for idx, item in enumerate(principles):
        col = idx % 2
        row = idx // 2
        draw_rule_row(c, *item, 44 + col * 368, y - row * 74, 336)

    rounded_box(c, 44, 72, 336, 142, PALE_CORAL, HexColor("#F0C8BA"))
    label(c, "Avoid", 62, 188, CORAL)
    avoid = "Revolutionize your revenue with an autonomous AI CRM system."
    draw_text(c, avoid, 62, 157, 300, font="Helvetica-Bold", size=13, leading=18, color=INK)
    c.setFillColor(CORAL)
    c.setFont("Helvetica", 7.5)
    c.drawString(62, 91, "Vague promise | autonomous claim | no operating detail")

    rounded_box(c, 396, 72, 352, 142, PALE_TEAL, HexColor("#B9DDD5"))
    label(c, "Use", 414, 188, TEAL)
    approved = "We map the handoff, fix the routing or workflow, test it, and document the result."
    draw_text(c, approved, 414, 157, 316, font="Helvetica-Bold", size=13, leading=18, color=INK)
    c.setFillColor(TEAL)
    c.setFont("Helvetica", 7.5)
    c.drawString(414, 91, "Defined work | human ownership | testable finish line")
    finish_page(c, page_no)


def build_incorrect(c: canvas.Canvas):
    page_no = 12
    c.bookmarkPage("incorrect")
    c.addOutlineEntry("Incorrect usage", "incorrect", 0)
    page_header(c, page_no, "Incorrect usage", "Protect recognition, accessibility, trust, and public identity.")

    items = [
        ("Invented mark", "Do not use a letter-based EL roundel as an Emergent Logic logo."),
        ("Distorted mark", "Do not stretch, crop, rotate, bevel, glow, or shadow a logo."),
        ("Reconstructed lockup", "Do not retype, rearrange, or replace the supplied wordmark or tagline."),
        ("Colour drift", "Do not add new violet or blue shades when an approved token works."),
        ("Identity drift", "Do not use another personal identity in public brand materials."),
        ("Invented proof", "Do not publish fabricated metrics, testimonials, logos, or outcomes."),
        ("Weak contrast", "Do not use normal white text on Signal Indigo or Alert Coral without checking contrast."),
        ("Crowded layout", "Do not use nested cards, clipped text, negative tracking, or overflowing containers."),
    ]
    card_w, card_h = 336, 88
    for idx, (title, body) in enumerate(items):
        col = idx % 2
        row = idx // 2
        x = 44 + col * 368
        y = 402 - row * 100
        rounded_box(c, x, y, card_w, card_h, white)
        c.setFillColor(CORAL)
        c.circle(x + 24, y + card_h - 25, 10, fill=1, stroke=0)
        c.setStrokeColor(white)
        c.setLineWidth(1.5)
        c.line(x + 20, y + card_h - 29, x + 28, y + card_h - 21)
        c.line(x + 28, y + card_h - 29, x + 20, y + card_h - 21)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 9.5)
        c.drawString(x + 43, y + card_h - 29, title)
        draw_text(c, body, x + 43, y + card_h - 48, card_w - 59, size=7.8, leading=10.5, color=MUTED, max_lines=3)

    rounded_box(c, 44, 46, 704, 42, SOFT, HexColor("#CBD3FF"))
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(60, 63, "Transitional assets require review")
    c.setFont("Helvetica", 8)
    c.drawString(205, 63, "Legacy website violet, multi-person cards, old social exports, and the old Open Graph image are not automatic templates.")
    finish_page(c, page_no)


def build_governance(c: canvas.Canvas):
    page_no = 13
    c.bookmarkPage("governance")
    c.addOutlineEntry("Production governance", "governance", 0)
    page_header(c, page_no, "Production governance", "Source files, approval gates, and the final quality check.")

    rounded_box(c, 44, 274, 344, 218, white)
    label(c, "Approved source assets", 62, 464)
    sources = [
        ("Dark square master", "assets/emergent_logic_dark_square_1080.png"),
        ("Primary dark master", "assets/emergent_logic_primary_logo_dark_500.png"),
        ("Logo manifest", "content/brand/APPROVED_LOGO_MANIFEST.md"),
        ("Derivative generator", "content/brand/generate_approved_logo_derivatives.py"),
        ("Machine-readable tokens", "content/brand/emergent-logic-brand-tokens.json"),
        ("Human-readable guide", "content/brand/EMERGENT_LOGIC_BRAND_GUIDELINES_2026.md"),
    ]
    y = 434
    for title, path in sources:
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 7.7)
        c.drawString(62, y, title)
        c.setFillColor(MUTED)
        c.setFont("Courier", 6.4)
        c.drawString(176, y, path)
        y -= 24

    rounded_box(c, 404, 274, 344, 218, NAVY, NAVY)
    label(c, "Himani approval required", 422, 464, LIGHT_INDIGO)
    draw_bullets(
        c,
        [
            "Logo, colour, typography, or descriptor changes",
            "New public personal identities",
            "Founder bios, headshots, or quotes",
            "Client logos, testimonials, or outcome claims",
            "Paid advertising master creative",
            "Permanent homepage or navigation brand changes",
        ],
        422,
        435,
        308,
        size=8.3,
        leading=11.5,
        color=white,
        bullet_color=INDIGO,
        gap=3,
    )

    rounded_box(c, 44, 82, 704, 180, SOFT, HexColor("#CBD3FF"))
    label(c, "Pre-publish checklist", 62, 234)
    checklist = [
        "Brand name is Emergent Logic; Himani Kharbanda is the only public-facing person.",
        "Approved logo source, contrast variant, clear space, and minimum size are correct.",
        "Colours match the token file; no new violet or blue variant was introduced.",
        "Inter or an approved fallback is used with letter spacing 0.",
        "Normal text meets 4.5:1 contrast; layout has no clipping, overlaps, or nested cards.",
        "Claims are sourced and qualified; client names, screenshots, logos, and metrics are permission-safe.",
        "Email, phone, domain, CTA, live links, and prepared date are correct.",
        "PDF or image export was reviewed at full size and thumbnail size.",
    ]
    for idx, item in enumerate(checklist):
        col = idx % 2
        row = idx // 2
        x = 62 + col * 342
        y = 205 - row * 37
        c.setStrokeColor(TEAL)
        c.setLineWidth(1)
        c.rect(x, y - 3, 9, 9, fill=0, stroke=1)
        draw_text(c, item, x + 17, y + 2, 305, size=7.3, leading=9.8, color=INK, max_lines=3)

    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(44, 54, "File naming")
    c.setFillColor(MUTED)
    c.setFont("Courier", 7.2)
    c.drawString(108, 54, "emergent_logic_<asset>_<channel>_<YYYY-MM-DD>.<ext>")
    c.setFillColor(ACTION)
    c.setFont("Helvetica-Bold", 8)
    c.drawRightString(748, 54, "Brand owner: Himani Kharbanda")
    finish_page(c, page_no)


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=(PAGE_W, PAGE_H), pageCompression=1)
    c.setTitle("Emergent Logic Brand Guidelines 1.2")
    c.setAuthor("Emergent Logic")
    c.setSubject("Definitive brand identity, visual, verbal, layout, and governance guidelines")
    c.setCreator("Emergent Logic brand system generator")

    build_cover(c)
    build_foundation(c)
    build_identity(c)
    build_logo_system(c)
    build_logo_mechanics(c)
    build_colors(c)
    build_typography(c)
    build_interface(c)
    build_documents(c)
    build_social(c)
    build_voice(c)
    build_incorrect(c)
    build_governance(c)

    c.save()
    print(OUTPUT)


if __name__ == "__main__":
    build()
