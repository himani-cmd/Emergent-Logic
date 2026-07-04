from __future__ import annotations

from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[3]
ASSET_DIR = ROOT / "content" / "social" / "assets" / "salesforce-mfa-2026-07-01"
SOURCE = ASSET_DIR / "source" / "gpt_image2_crm_access_map_source.png"
ICON = ROOT / "content" / "social" / "assets" / "approved" / "emergent_logic_social_icon.png"

NAVY = "#1E3A5F"
DEEP = "#07111F"
INDIGO = "#6366F1"
ELECTRIC = "#8B8CFF"
WHITE = "#FFFFFF"
SOFT_WHITE = "#E5E7EB"
MUTED = "#CBD5E1"
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


def wrapped(draw: ImageDraw.ImageDraw, text: str, x: int, y: int, chars: int, fnt, fill: str, gap: int = 8) -> int:
    for line in wrap(text, width=chars):
        draw.text((x, y), line, font=fnt, fill=fill)
        y = draw.textbbox((x, y), line, font=fnt)[3] + gap
    return y


def brand(draw: ImageDraw.ImageDraw, img: Image.Image, x: int, y: int, label: str) -> None:
    if ICON.exists():
        icon = Image.open(ICON).convert("RGBA").resize((54, 54))
        img.paste(icon, (x, y), icon)
    draw.text((x + 72, y + 2), "EMERGENT LOGIC", font=font(21, True), fill=WHITE)
    draw.text((x + 72, y + 31), label, font=font(17), fill=MUTED)


def prepare_bg(size: tuple[int, int], crop: tuple[int, int, int, int] | None = None) -> Image.Image:
    src = Image.open(SOURCE).convert("RGB")
    if crop:
        src = src.crop(crop)
    src = ImageEnhance.Contrast(src).enhance(1.08)
    src = ImageEnhance.Color(src).enhance(0.9)
    bg = src.resize(size, Image.Resampling.LANCZOS).convert("RGBA")

    # Darken the copy area while preserving the premium 3D visual.
    shade = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(shade, "RGBA")
    w, h = size
    draw.rectangle((0, 0, int(w * 0.56), h), fill=(4, 10, 22, 188))
    draw.rectangle((0, 0, w, h), fill=(4, 10, 22, 38))
    blur = Image.new("RGBA", size, (0, 0, 0, 0))
    bdraw = ImageDraw.Draw(blur, "RGBA")
    bdraw.ellipse((-220, h - 260, 480, h + 260), fill=(30, 58, 95, 80))
    bdraw.ellipse((w - 420, -260, w + 260, 380), fill=(99, 102, 241, 70))
    blur = blur.filter(ImageFilter.GaussianBlur(30))
    bg.alpha_composite(shade)
    bg.alpha_composite(blur)
    return bg


def pill(draw: ImageDraw.ImageDraw, x: int, y: int, text: str) -> None:
    bbox = draw.textbbox((0, 0), text, font=font(18, True))
    draw.rounded_rectangle((x, y, x + bbox[2] + 40, y + 42), radius=21, fill=(8, 17, 31, 205), outline=(139, 140, 255, 155), width=1)
    draw.text((x + 20, y + 10), text, font=font(18, True), fill=WHITE)


def draw_footer(draw: ImageDraw.ImageDraw, x: int, y: int, width: int) -> None:
    draw.line((x, y, x + 350, y), fill=ELECTRIC, width=7)
    draw.text((x, y + 26), "Emergent Logic", font=font(23, True), fill=WHITE)
    draw.text((x + 190, y + 26), "CRM access, cleanup, automation", font=font(23), fill=MUTED)


def founder_square() -> None:
    img = prepare_bg((1200, 1200))
    draw = ImageDraw.Draw(img, "RGBA")
    brand(draw, img, 82, 72, "Salesforce MFA readiness")
    pill(draw, 82, 176, "Founder POV")

    draw.text((82, 302), "An admin login", font=font(74, True), fill=WHITE)
    draw.text((82, 386), "is not one door.", font=font(74, True), fill=ELECTRIC)
    wrapped(
        draw,
        "It can touch data, reports, automations, integrations, and every handoff your team depends on.",
        88,
        512,
        37,
        font(31),
        SOFT_WHITE,
        10,
    )

    draw.rounded_rectangle((82, 892, 1118, 1018), radius=30, fill=(255, 255, 255, 235))
    draw.text((126, 928), "Before enforcement, review the blast radius.", font=font(32, True), fill=NAVY)
    draw.text((126, 972), "Admin roles | MFA method | SSO signal | Recovery owner", font=font(24), fill="#374151")
    draw_footer(draw, 82, 1088, 500)
    img.convert("RGB").save(ASSET_DIR / "salesforce_mfa_founder_premium_gpt_image2.png", optimize=True)


def company_square() -> None:
    img = prepare_bg((1200, 1200))
    draw = ImageDraw.Draw(img, "RGBA")
    brand(draw, img, 82, 72, "CRM security operations")
    pill(draw, 82, 176, "Company education")

    draw.text((82, 292), "MFA protects", font=font(72, True), fill=WHITE)
    draw.text((82, 374), "the login.", font=font(72, True), fill=ELECTRIC)
    draw.text((82, 500), "Access design", font=font(72, True), fill=WHITE)
    draw.text((82, 582), "protects the system.", font=font(72, True), fill=ELECTRIC)

    wrapped(
        draw,
        "For Salesforce teams, this is the moment to check permissions, authentication, and recovery before enforcement creates friction.",
        88,
        728,
        39,
        font(29),
        SOFT_WHITE,
        10,
    )

    tags = [("Admin access", INDIGO), ("Privileged MFA", AMBER), ("Backup owner", GREEN)]
    x = 82
    for label, color in tags:
        box_w = 290
        draw.rounded_rectangle((x, 912, x + box_w, 984), radius=24, fill=(255, 255, 255, 230))
        draw.ellipse((x + 28, 936, x + 50, 958), fill=color)
        draw.text((x + 70, 932), label, font=font(21, True), fill="#374151")
        x += box_w + 22
    draw_footer(draw, 82, 1088, 500)
    img.convert("RGB").save(ASSET_DIR / "salesforce_mfa_company_premium_gpt_image2.png", optimize=True)


def vertical_story() -> None:
    img = prepare_bg((1080, 1350), crop=(0, 0, 1248, 1248))
    draw = ImageDraw.Draw(img, "RGBA")
    brand(draw, img, 72, 72, "Salesforce MFA readiness")
    pill(draw, 72, 170, "Save this checklist")

    draw.text((72, 286), "Before", font=font(82, True), fill=WHITE)
    draw.text((72, 378), "Salesforce MFA", font=font(82, True), fill=WHITE)
    draw.text((72, 470), "blocks work,", font=font(82, True), fill=ELECTRIC)
    draw.text((72, 562), "check access.", font=font(82, True), fill=ELECTRIC)

    steps = [
        ("01", "Admin access", "Who can change data, reports, and automation?", INDIGO),
        ("02", "MFA method", "Are privileged users phishing-resistant?", AMBER),
        ("03", "Recovery", "Who owns fallback access?", GREEN),
    ]
    y = 742
    for number, title, copy, color in steps:
        draw.rounded_rectangle((72, y, 1008, y + 132), radius=28, fill=(255, 255, 255, 235))
        draw.text((112, y + 34), number, font=font(30, True), fill=color)
        draw.text((218, y + 24), title, font=font(34, True), fill=NAVY)
        draw.text((218, y + 72), copy, font=font(24), fill="#374151")
        y += 156

    draw.rounded_rectangle((72, 1236, 1008, 1306), radius=26, fill=(30, 58, 95, 245))
    draw.text((112, 1258), "Security is CRM operations.", font=font(29, True), fill=WHITE)
    draw.text((720, 1262), "Emergent Logic", font=font(22, True), fill=MUTED)
    img.convert("RGB").save(ASSET_DIR / "salesforce_mfa_vertical_premium_gpt_image2.png", optimize=True)


def main() -> None:
    if not SOURCE.exists():
        raise FileNotFoundError(SOURCE)
    founder_square()
    company_square()
    vertical_story()
    print(ASSET_DIR)


if __name__ == "__main__":
    main()
