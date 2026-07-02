from __future__ import annotations

from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[3]
OUT = ROOT / "content" / "social" / "assets" / "salesforce-mfa-2026-07-01"
ICON = ROOT / "content" / "social" / "assets" / "approved" / "emergent_logic_social_icon.png"

NAVY = "#1E3A5F"
DEEP = "#0B1220"
INDIGO = "#6366F1"
SOFT = "#EEF2FF"
SLATE = "#374151"
MUTED = "#64748B"
LINE = "#CBD5E1"
LIGHT = "#F8FAFC"
WHITE = "#FFFFFF"
GREEN = "#16A34A"
AMBER = "#D97706"


def f(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


def draw_wrapped(draw: ImageDraw.ImageDraw, text: str, x: int, y: int, chars: int, font, fill: str, gap: int = 8) -> int:
    for line in wrap(text, width=chars):
        draw.text((x, y), line, font=font, fill=fill)
        y = draw.textbbox((x, y), line, font=font)[3] + gap
    return y


def brand(draw: ImageDraw.ImageDraw, img: Image.Image, x: int, y: int, label: str, dark: bool = False) -> None:
    if ICON.exists():
        icon = Image.open(ICON).convert("RGBA").resize((54, 54))
        img.paste(icon, (x, y), icon)
    draw.text((x + 72, y + 2), "EMERGENT LOGIC", font=f(21, True), fill=WHITE if dark else NAVY)
    draw.text((x + 72, y + 31), label, font=f(17), fill=(221, 226, 255) if dark else MUTED)


def base(size: tuple[int, int]) -> Image.Image:
    img = Image.new("RGB", size, LIGHT)
    draw = ImageDraw.Draw(img, "RGBA")
    w, h = size
    draw.rectangle((0, 0, w, h), fill=LIGHT)
    for x in range(0, w, 96):
        draw.line((x, 0, x, h), fill=(203, 213, 225, 22), width=1)
    for y in range(0, h, 96):
        draw.line((0, y, w, y), fill=(203, 213, 225, 22), width=1)
    draw.ellipse((w - 360, -260, w + 220, 320), fill=(99, 102, 241, 28))
    draw.ellipse((-260, h - 280, 360, h + 280), fill=(30, 58, 95, 10))
    return img


def round_rect(draw: ImageDraw.ImageDraw, box, radius=26, fill=WHITE, outline=(203, 213, 225, 150), width=2) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def small_tag(draw: ImageDraw.ImageDraw, x: int, y: int, text: str) -> None:
    bbox = draw.textbbox((0, 0), text, font=f(18, True))
    draw.rounded_rectangle((x, y, x + bbox[2] + 42, y + 42), radius=21, fill=SOFT, outline=(99, 102, 241, 90), width=1)
    draw.text((x + 21, y + 10), text, font=f(18, True), fill=INDIGO)


def checklist_item(draw: ImageDraw.ImageDraw, x: int, y: int, number: str, title: str, copy: str, accent: str = INDIGO) -> None:
    draw.ellipse((x, y, x + 44, y + 44), fill=accent)
    draw.text((x + 13, y + 10), number, font=f(18, True), fill=WHITE)
    draw.text((x + 66, y - 1), title, font=f(26, True), fill=NAVY)
    draw.text((x + 66, y + 33), copy, font=f(21), fill=SLATE)


def build_founder() -> None:
    img = base((1200, 1200))
    draw = ImageDraw.Draw(img, "RGBA")
    brand(draw, img, 82, 74, "Salesforce MFA readiness")
    small_tag(draw, 82, 178, "Founder POV")

    draw.text((82, 292), "Before the", font=f(78, True), fill=NAVY)
    draw.text((82, 378), "MFA deadline,", font=f(78, True), fill=NAVY)
    draw.text((82, 464), "review access.", font=f(78, True), fill=INDIGO)
    draw_wrapped(
        draw,
        "The risk is not only whether users can log in. It is who can change the CRM once they are inside.",
        88,
        585,
        43,
        f(30),
        SLATE,
        11,
    )

    round_rect(draw, (706, 250, 1090, 820), radius=34)
    draw.text((752, 300), "Access audit", font=f(38, True), fill=NAVY)
    draw.text((752, 348), "4 checks", font=f(28, True), fill=INDIGO)
    checklist_item(draw, 752, 440, "1", "Admin roles", "Who has elevated access?")
    checklist_item(draw, 752, 536, "2", "MFA method", "Is it phishing-resistant?")
    checklist_item(draw, 752, 632, "3", "SSO signal", "Is identity configured?")
    checklist_item(draw, 752, 728, "4", "Fallback", "Who owns recovery?", GREEN)

    round_rect(draw, (82, 920, 1090, 1038), radius=30, fill=NAVY, outline=(30, 58, 95, 255))
    draw.text((126, 955), "Security is CRM operations.", font=f(34, True), fill=WHITE)
    draw.text((126, 999), "A clean system is easier to protect.", font=f(25), fill=(221, 226, 255))
    draw.line((84, 1108, 430, 1108), fill=INDIGO, width=8)
    draw.text((84, 1134), "Emergent Logic", font=f(24, True), fill=NAVY)
    draw.text((280, 1134), "CRM access, cleanup, automation", font=f(24), fill=MUTED)
    img.save(OUT / "salesforce_mfa_founder_director_v5.png", optimize=True)


def build_company() -> None:
    img = Image.new("RGB", (1200, 1200), WHITE)
    draw = ImageDraw.Draw(img, "RGBA")
    draw.rectangle((0, 0, 1200, 1200), fill=WHITE)
    draw.rectangle((0, 0, 1200, 18), fill=INDIGO)
    draw.rectangle((0, 18, 1200, 26), fill=NAVY)
    draw.rectangle((0, 0, 96, 1200), fill=NAVY)
    draw.rectangle((96, 0, 104, 1200), fill=INDIGO)
    draw.ellipse((830, -260, 1430, 330), fill=(99, 102, 241, 22))
    for y in range(112, 1100, 116):
        draw.line((160, y, 1080, y), fill=(203, 213, 225, 48), width=1)

    brand(draw, img, 156, 74, "CRM security operations")
    small_tag(draw, 156, 186, "Company education")

    draw.text((156, 302), "MFA protects", font=f(76, True), fill=NAVY)
    draw.text((156, 386), "the login.", font=f(76, True), fill=INDIGO)
    draw.text((156, 500), "Access design", font=f(76, True), fill=NAVY)
    draw.text((156, 584), "protects the system.", font=f(76, True), fill=INDIGO)

    draw_wrapped(
        draw,
        "For Salesforce teams, this is the moment to check permissions, authentication, and recovery before enforcement creates friction.",
        162,
        720,
        48,
        f(29),
        SLATE,
        10,
    )

    review_items = [("Admin access", INDIGO), ("Privileged MFA", INDIGO), ("Backup owner", GREEN)]
    for idx, (label, color) in enumerate(review_items):
        x = 156 + idx * 300
        round_rect(draw, (x, 890, x + 270, 984), radius=26, fill=LIGHT)
        draw.ellipse((x + 30, 924, x + 54, 948), fill=color)
        draw.line((x + 37, 936, x + 42, 942), fill=WHITE, width=3)
        draw.line((x + 42, 942, x + 50, 930), fill=WHITE, width=3)
        draw.text((x + 76, 920), label, font=f(22, True), fill=SLATE)

    draw.text((156, 1108), "Emergent Logic | Salesforce access review", font=f(23, True), fill=NAVY)
    img.save(OUT / "salesforce_mfa_company_director_v5.png", optimize=True)


def build_vertical() -> None:
    img = base((1080, 1350))
    draw = ImageDraw.Draw(img, "RGBA")
    brand(draw, img, 72, 72, "Salesforce MFA readiness")
    small_tag(draw, 72, 170, "Save this checklist")

    draw.text((72, 274), "Salesforce", font=f(82, True), fill=NAVY)
    draw.text((72, 364), "MFA:", font=f(82, True), fill=NAVY)
    draw.text((72, 454), "what to check", font=f(82, True), fill=INDIGO)
    draw.text((72, 544), "before it breaks.", font=f(82, True), fill=INDIGO)

    items = [
        ("01", "Admin access", "Who can change data, reports, and automation?"),
        ("02", "MFA method", "Are privileged users using phishing-resistant MFA?"),
        ("03", "Recovery", "Who owns fallback if access fails?"),
    ]
    y = 720
    for number, title, copy in items:
        round_rect(draw, (72, y, 1008, y + 138), radius=28)
        draw.text((112, y + 36), number, font=f(30, True), fill=INDIGO)
        draw.text((218, y + 26), title, font=f(34, True), fill=NAVY)
        draw.text((218, y + 74), copy, font=f(24), fill=SLATE)
        y += 164

    round_rect(draw, (72, 1210, 1008, 1290), radius=26, fill=NAVY, outline=(30, 58, 95, 255))
    draw.text((112, 1238), "Security is CRM operations.", font=f(30, True), fill=WHITE)
    draw.text((720, 1242), "Emergent Logic", font=f(23, True), fill=(221, 226, 255))
    img.save(OUT / "salesforce_mfa_vertical_director_v5.png", optimize=True)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    build_founder()
    build_company()
    build_vertical()
    print(OUT)


if __name__ == "__main__":
    main()
