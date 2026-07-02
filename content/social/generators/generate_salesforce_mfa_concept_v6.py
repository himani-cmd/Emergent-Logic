from __future__ import annotations

from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[3]
OUT = ROOT / "content" / "social" / "assets" / "salesforce-mfa-2026-07-01"
ICON = ROOT / "content" / "social" / "assets" / "approved" / "emergent_logic_social_icon.png"

NAVY = "#1E3A5F"
DEEP = "#08111F"
INDIGO = "#6366F1"
ELECTRIC = "#818CF8"
SOFT = "#EEF2FF"
SLATE = "#374151"
MUTED = "#64748B"
LINE = "#CBD5E1"
LIGHT = "#F8FAFC"
WHITE = "#FFFFFF"
GREEN = "#16A34A"
AMBER = "#D97706"
RED = "#DC2626"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


def wrapped(draw: ImageDraw.ImageDraw, text: str, x: int, y: int, chars: int, fnt, fill: str, gap: int = 8) -> int:
    for line in wrap(text, width=chars):
        draw.text((x, y), line, font=fnt, fill=fill)
        y = draw.textbbox((x, y), line, font=fnt)[3] + gap
    return y


def brand(draw: ImageDraw.ImageDraw, img: Image.Image, x: int, y: int, label: str, dark: bool = False) -> None:
    if ICON.exists():
        icon = Image.open(ICON).convert("RGBA").resize((56, 56))
        img.paste(icon, (x, y), icon)
    draw.text((x + 74, y + 2), "EMERGENT LOGIC", font=font(21, True), fill=WHITE if dark else NAVY)
    draw.text((x + 74, y + 31), label, font=font(17), fill=(221, 226, 255) if dark else MUTED)


def glow_background(size: tuple[int, int], dark: bool = False) -> Image.Image:
    base = Image.new("RGB", size, DEEP if dark else LIGHT)
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer, "RGBA")
    w, h = size
    draw.ellipse((w - 430, -260, w + 230, 390), fill=(99, 102, 241, 58 if dark else 30))
    draw.ellipse((-290, h - 330, 430, h + 260), fill=(56, 189, 248, 28 if dark else 12))
    layer = layer.filter(ImageFilter.GaussianBlur(18))
    img = base.convert("RGBA")
    img.alpha_composite(layer)
    draw = ImageDraw.Draw(img, "RGBA")
    if not dark:
        for x in range(0, w, 96):
            draw.line((x, 0, x, h), fill=(203, 213, 225, 14), width=1)
        for y in range(0, h, 96):
            draw.line((0, y, w, y), fill=(203, 213, 225, 14), width=1)
    return img.convert("RGB")


def rounded(draw: ImageDraw.ImageDraw, box, radius=28, fill=WHITE, outline=(203, 213, 225, 150), width=2) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def pill(draw: ImageDraw.ImageDraw, x: int, y: int, text: str, fill: str = SOFT, text_fill: str = INDIGO) -> None:
    bbox = draw.textbbox((0, 0), text, font=font(18, True))
    draw.rounded_rectangle((x, y, x + bbox[2] + 42, y + 42), radius=21, fill=fill, outline=(99, 102, 241, 100), width=1)
    draw.text((x + 21, y + 10), text, font=font(18, True), fill=text_fill)


def draw_node_map(draw: ImageDraw.ImageDraw, center: tuple[int, int], dark: bool = False) -> None:
    cx, cy = center
    line_fill = (238, 242, 255, 80) if dark else (30, 58, 95, 55)
    label_fill = WHITE if dark else NAVY
    nodes = [
        ("Data", (cx - 160, cy - 200), INDIGO),
        ("Reports", (cx + 170, cy - 170), GREEN),
        ("Flows", (cx + 220, cy + 95), AMBER),
        ("Users", (cx - 190, cy + 135), ELECTRIC),
    ]
    for label, (x, y), color in nodes:
        draw.line((cx, cy, x, y), fill=line_fill, width=5)
    draw.ellipse((cx - 92, cy - 92, cx + 92, cy + 92), fill=WHITE if dark else NAVY)
    draw.text((cx - 54, cy - 18), "ADMIN", font=font(27, True), fill=NAVY if dark else WHITE)
    for label, (x, y), color in nodes:
        draw.ellipse((x - 50, y - 50, x + 50, y + 50), fill=color)
        draw.ellipse((x - 18, y - 18, x + 18, y + 18), fill=WHITE)
        tw = draw.textbbox((0, 0), label, font=font(20, True))[2]
        draw.text((x - tw / 2, y + 60), label, font=font(20, True), fill=label_fill)


def build_founder() -> None:
    img = glow_background((1200, 1200), dark=True)
    draw = ImageDraw.Draw(img, "RGBA")
    draw.rounded_rectangle((52, 52, 610, 740), radius=34, fill=(8, 17, 31, 155), outline=(238, 242, 255, 24), width=1)
    brand(draw, img, 80, 72, "Salesforce MFA readiness", dark=True)
    pill(draw, 80, 182, "Founder POV", fill=(255, 255, 255, 28), text_fill=(221, 226, 255))

    draw.text((80, 304), "An admin login", font=font(68, True), fill=WHITE)
    draw.text((80, 384), "is not one door.", font=font(68, True), fill=ELECTRIC)
    wrapped(
        draw,
        "It can touch data, reports, flows, users, integrations, and every handoff your team depends on.",
        86,
        508,
        39,
        font(31),
        (226, 232, 240),
        10,
    )

    draw_node_map(draw, (835, 620), dark=True)

    rounded(draw, (80, 930, 1120, 1048), radius=30, fill=(255, 255, 255, 238), outline=(255, 255, 255, 90))
    draw.text((124, 962), "Before enforcement, review the blast radius.", font=font(32, True), fill=NAVY)
    draw.text((124, 1004), "Admin roles | MFA method | SSO signal | Recovery owner", font=font(24), fill=SLATE)
    draw.line((82, 1110, 430, 1110), fill=ELECTRIC, width=8)
    draw.text((82, 1136), "Emergent Logic", font=font(24, True), fill=WHITE)
    draw.text((286, 1136), "CRM access, cleanup, automation", font=font(24), fill=(221, 226, 255))
    img.save(OUT / "salesforce_mfa_founder_concept_v6.png", optimize=True)


def blueprint_room(draw: ImageDraw.ImageDraw, box, label: str, accent: str) -> None:
    x1, y1, x2, y2 = box
    draw.rounded_rectangle(box, radius=8, outline=(99, 102, 241, 125), width=4, fill=(255, 255, 255, 18))
    draw.rectangle((x1 + 18, y1 + 18, x1 + 46, y1 + 46), fill=accent)
    draw.text((x1 + 62, y1 + 20), label, font=font(24, True), fill=NAVY)


def build_company() -> None:
    img = glow_background((1200, 1200), dark=False)
    draw = ImageDraw.Draw(img, "RGBA")
    brand(draw, img, 82, 74, "CRM security operations")
    pill(draw, 82, 184, "Company education")

    draw.text((82, 300), "MFA is the", font=font(78, True), fill=NAVY)
    draw.text((82, 386), "front door.", font=font(78, True), fill=INDIGO)
    draw.text((82, 510), "Permissions are", font=font(78, True), fill=NAVY)
    draw.text((82, 596), "the floor plan.", font=font(78, True), fill=INDIGO)

    # Blueprint-style CRM floor plan.
    rounded(draw, (690, 250, 1090, 820), radius=28, fill=(255, 255, 255, 188), outline=(99, 102, 241, 95))
    draw.text((730, 292), "CRM access plan", font=font(31, True), fill=NAVY)
    blueprint_room(draw, (732, 365, 1048, 458), "Admin roles", INDIGO)
    blueprint_room(draw, (732, 490, 1048, 583), "MFA method", AMBER)
    blueprint_room(draw, (732, 615, 1048, 708), "Fallback", GREEN)
    draw.arc((802, 450, 930, 575), 270, 360, fill=NAVY, width=4)
    draw.line((890, 458, 890, 490), fill=NAVY, width=4)
    draw.arc((802, 575, 930, 700), 270, 360, fill=NAVY, width=4)
    draw.line((890, 583, 890, 615), fill=NAVY, width=4)

    rounded(draw, (82, 875, 1090, 1018), radius=30, fill=NAVY, outline=(30, 58, 95, 255))
    draw.text((126, 914), "Good security is not just login protection.", font=font(33, True), fill=WHITE)
    draw.text((126, 958), "It is knowing who can change the system after login.", font=font(25), fill=(221, 226, 255))
    draw.text((82, 1114), "Emergent Logic | Salesforce access review", font=font(24, True), fill=NAVY)
    img.save(OUT / "salesforce_mfa_company_concept_v6.png", optimize=True)


def checkpoint(draw: ImageDraw.ImageDraw, x: int, y: int, number: str, title: str, copy: str, accent: str) -> None:
    rounded(draw, (x, y, x + 860, y + 145), radius=28, fill=WHITE)
    draw.rounded_rectangle((x + 30, y + 30, x + 106, y + 106), radius=20, fill=accent)
    draw.text((x + 54, y + 52), number, font=font(27, True), fill=WHITE)
    draw.text((x + 140, y + 30), title, font=font(36, True), fill=NAVY)
    draw.text((x + 140, y + 80), copy, font=font(24), fill=SLATE)
    draw.ellipse((x + 742, y + 43, x + 812, y + 113), outline=accent, width=5)
    draw.line((x + 762, y + 78, x + 774, y + 92), fill=accent, width=5)
    draw.line((x + 774, y + 92, x + 795, y + 64), fill=accent, width=5)


def build_vertical() -> None:
    img = glow_background((1080, 1350), dark=False)
    draw = ImageDraw.Draw(img, "RGBA")
    brand(draw, img, 72, 72, "Salesforce MFA readiness")
    pill(draw, 72, 172, "Checkpoint checklist")

    draw.text((72, 280), "Before", font=font(88, True), fill=NAVY)
    draw.text((72, 374), "Salesforce MFA", font=font(88, True), fill=NAVY)
    draw.text((72, 468), "blocks work,", font=font(88, True), fill=INDIGO)
    draw.text((72, 562), "check access.", font=font(88, True), fill=INDIGO)

    checkpoint(draw, 72, 730, "1", "Access", "Who has elevated permissions?", INDIGO)
    checkpoint(draw, 72, 908, "2", "Auth", "Are privileged users verified?", AMBER)
    checkpoint(draw, 72, 1086, "3", "Recovery", "Who owns fallback access?", GREEN)

    draw.rounded_rectangle((72, 1262, 1008, 1326), radius=25, fill=NAVY)
    draw.text((112, 1280), "Security is CRM operations.", font=font(28, True), fill=WHITE)
    draw.text((720, 1283), "Emergent Logic", font=font(22, True), fill=(221, 226, 255))
    img.save(OUT / "salesforce_mfa_vertical_concept_v6.png", optimize=True)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    build_founder()
    build_company()
    build_vertical()
    print(OUT)


if __name__ == "__main__":
    main()
