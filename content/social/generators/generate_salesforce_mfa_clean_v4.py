from __future__ import annotations

from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[3]
OUT = ROOT / "content" / "social" / "assets" / "salesforce-mfa-2026-07-01"
ICON = ROOT / "content" / "social" / "assets" / "approved" / "emergent_logic_social_icon.png"

NAVY = "#1E3A5F"
INK = "#111827"
INDIGO = "#6366F1"
SOFT = "#EEF2FF"
SLATE = "#374151"
MUTED = "#64748B"
LINE = "#CBD5E1"
LIGHT = "#F8FAFC"
WHITE = "#FFFFFF"
GREEN = "#16A34A"
AMBER = "#D97706"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


def text_block(
    draw: ImageDraw.ImageDraw,
    text: str,
    xy: tuple[int, int],
    chars: int,
    fnt: ImageFont.FreeTypeFont,
    fill: str,
    gap: int = 10,
) -> int:
    x, y = xy
    for line in wrap(text, width=chars):
        draw.text((x, y), line, font=fnt, fill=fill)
        y = draw.textbbox((x, y), line, font=fnt)[3] + gap
    return y


def brand(draw: ImageDraw.ImageDraw, img: Image.Image, x: int, y: int, label: str) -> None:
    if ICON.exists():
        icon = Image.open(ICON).convert("RGBA").resize((58, 58))
        img.paste(icon, (x, y), icon)
    draw.text((x + 78, y + 4), "EMERGENT LOGIC", font=font(22, True), fill=NAVY)
    draw.text((x + 78, y + 34), label, font=font(18), fill=MUTED)


def background(size: tuple[int, int]) -> Image.Image:
    img = Image.new("RGB", size, LIGHT)
    draw = ImageDraw.Draw(img, "RGBA")
    w, h = size
    for x in range(0, w, 80):
        draw.line((x, 0, x, h), fill=(203, 213, 225, 28), width=1)
    for y in range(0, h, 80):
        draw.line((0, y, w, y), fill=(203, 213, 225, 28), width=1)
    draw.ellipse((w - 360, -240, w + 220, 340), fill=(99, 102, 241, 30))
    draw.ellipse((-260, h - 260, 320, h + 260), fill=(30, 58, 95, 14))
    return img


def card(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str = WHITE) -> None:
    draw.rounded_rectangle(box, radius=30, fill=fill, outline=(203, 213, 225, 150), width=2)


def check(draw: ImageDraw.ImageDraw, x: int, y: int, text: str, accent: str = INDIGO) -> None:
    draw.ellipse((x, y + 4, x + 22, y + 26), fill=accent)
    draw.line((x + 6, y + 15, x + 10, y + 20), fill=WHITE, width=3)
    draw.line((x + 10, y + 20, x + 18, y + 9), fill=WHITE, width=3)
    draw.text((x + 38, y), text, font=font(25, True), fill=SLATE)


def build_founder_square() -> None:
    img = background((1200, 1200))
    draw = ImageDraw.Draw(img, "RGBA")
    brand(draw, img, 82, 76, "Salesforce MFA readiness")

    draw.rounded_rectangle((82, 190, 405, 242), radius=26, fill=SOFT, outline=(99, 102, 241, 90), width=1)
    draw.text((112, 203), "Privileged access review", font=font(20, True), fill=INDIGO)

    draw.text((82, 292), "Admin access", font=font(82, True), fill=NAVY)
    draw.text((82, 384), "needs a review.", font=font(82, True), fill=INDIGO)
    text_block(
        draw,
        "Salesforce MFA enforcement is a good trigger to check who can change data, reports, workflows, and integrations.",
        (86, 504),
        42,
        font(32),
        SLATE,
        12,
    )

    card(draw, (720, 250, 1088, 790))
    draw.text((760, 300), "Check before", font=font(36, True), fill=NAVY)
    draw.text((760, 344), "it becomes urgent", font=font(36, True), fill=NAVY)
    check(draw, 760, 440, "Admin roles")
    check(draw, 760, 510, "MFA method")
    check(draw, 760, 580, "SSO signal")
    check(draw, 760, 650, "Backup owner", GREEN)

    draw.rounded_rectangle((82, 900, 1118, 1058), radius=30, fill=NAVY)
    draw.text((126, 930), "Simple test", font=font(26, True), fill=(221, 226, 255))
    draw.text((126, 968), "If one admin is locked out tomorrow,", font=font(30, True), fill=WHITE)
    draw.text((126, 1004), "who keeps the CRM moving?", font=font(30, True), fill=WHITE)
    draw.line((84, 1110, 456, 1110), fill=INDIGO, width=8)
    draw.text((84, 1136), "Emergent Logic", font=font(25, True), fill=NAVY)
    draw.text((292, 1136), "CRM cleanup, access, automation", font=font(25), fill=MUTED)

    img.save(OUT / "salesforce_mfa_founder_clean_v4.png", optimize=True)


def build_company_square() -> None:
    img = background((1200, 1200))
    draw = ImageDraw.Draw(img, "RGBA")
    brand(draw, img, 82, 76, "CRM security operations")

    draw.text((82, 270), "MFA is not", font=font(82, True), fill=NAVY)
    draw.text((82, 362), "the finish line.", font=font(82, True), fill=INDIGO)
    text_block(
        draw,
        "For Salesforce teams, the operational question is access design: who has high permissions, how they authenticate, and what happens if access fails.",
        (88, 492),
        48,
        font(30),
        SLATE,
        12,
    )

    boxes = [
        ("1", "Access", "Who has elevated permissions?", INDIGO),
        ("2", "Auth", "Are privileged users phishing-resistant?", NAVY),
        ("3", "Fallback", "Who can recover access safely?", GREEN),
    ]
    y = 725
    for number, title, copy, color in boxes:
        card(draw, (82, y, 1118, y + 112))
        draw.ellipse((124, y + 28, 180, y + 84), fill=color)
        draw.text((143, y + 41), number, font=font(24, True), fill=WHITE)
        draw.text((212, y + 24), title, font=font(31, True), fill=NAVY)
        draw.text((212, y + 63), copy, font=font(25), fill=SLATE)
        y += 138

    draw.rectangle((0, 1152, 1200, 1200), fill=NAVY)
    draw.text((82, 1163), "Emergent Logic | Salesforce access review", font=font(24, True), fill=WHITE)

    img.save(OUT / "salesforce_mfa_company_clean_v4.png", optimize=True)


def build_vertical() -> None:
    img = background((1080, 1350))
    draw = ImageDraw.Draw(img, "RGBA")
    brand(draw, img, 72, 74, "Salesforce MFA readiness")

    draw.text((72, 242), "Before", font=font(86, True), fill=NAVY)
    draw.text((72, 336), "enforcement,", font=font(86, True), fill=NAVY)
    draw.text((72, 430), "check 3 things.", font=font(86, True), fill=INDIGO)

    text_block(
        draw,
        "Clean CRM operations start with clean access.",
        (78, 558),
        38,
        font(31),
        SLATE,
        10,
    )

    steps = [
        ("01", "Access", "Who has admin or high-risk permissions?"),
        ("02", "Authentication", "Are privileged users using the right MFA method?"),
        ("03", "Recovery", "Who owns fallback if an admin gets locked out?"),
    ]
    y = 690
    for number, title, copy in steps:
        card(draw, (72, y, 1008, y + 140))
        draw.text((112, y + 40), number, font=font(30, True), fill=INDIGO)
        draw.text((220, y + 28), title, font=font(34, True), fill=NAVY)
        draw.text((220, y + 76), copy, font=font(25), fill=SLATE)
        y += 170

    draw.rounded_rectangle((72, 1210, 1008, 1292), radius=28, fill=NAVY)
    draw.text((112, 1238), "Security is CRM operations.", font=font(30, True), fill=WHITE)
    draw.text((690, 1242), "Emergent Logic", font=font(24, True), fill=(221, 226, 255))

    img.save(OUT / "salesforce_mfa_vertical_clean_v4.png", optimize=True)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    build_founder_square()
    build_company_square()
    build_vertical()
    print(OUT)


if __name__ == "__main__":
    main()
