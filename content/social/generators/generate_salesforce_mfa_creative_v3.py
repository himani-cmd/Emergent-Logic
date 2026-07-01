from __future__ import annotations

import math
from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[3]
OUT = ROOT / "content" / "social" / "assets" / "salesforce-mfa-2026-07-01"
ICON = ROOT / "content" / "social" / "assets" / "approved" / "emergent_logic_social_icon.png"

NAVY = "#1E3A5F"
DEEP = "#0B1220"
INK = "#111827"
INDIGO = "#6366F1"
ELECTRIC = "#818CF8"
SOFT = "#EEF2FF"
SLATE = "#374151"
MUTED = "#64748B"
WHITE = "#FFFFFF"
GREEN = "#16A34A"
AMBER = "#D97706"
CYAN = "#38BDF8"


def f(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


def wrapped(draw: ImageDraw.ImageDraw, text: str, xy: tuple[int, int], chars: int, font, fill, gap: int = 10) -> int:
    x, y = xy
    for line in wrap(text, width=chars):
        draw.text((x, y), line, font=font, fill=fill)
        bbox = draw.textbbox((x, y), line, font=font)
        y = bbox[3] + gap
    return y


def vertical_gradient(size: tuple[int, int], top: tuple[int, int, int], bottom: tuple[int, int, int]) -> Image.Image:
    w, h = size
    img = Image.new("RGB", size)
    pix = img.load()
    for y in range(h):
        t = y / max(h - 1, 1)
        row = tuple(int(top[i] * (1 - t) + bottom[i] * t) for i in range(3))
        for x in range(w):
            pix[x, y] = row
    return img


def glow_layer(size: tuple[int, int]) -> Image.Image:
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer, "RGBA")
    draw.ellipse((610, -230, 1400, 600), fill=(99, 102, 241, 72))
    draw.ellipse((-220, 790, 520, 1450), fill=(56, 189, 248, 34))
    return layer.filter(ImageFilter.GaussianBlur(42))


def brand(draw: ImageDraw.ImageDraw, img: Image.Image, x: int, y: int, label: str, dark: bool) -> None:
    if ICON.exists():
        icon = Image.open(ICON).convert("RGBA").resize((72, 72))
        img.paste(icon, (x, y), icon)
    draw.text((x + 92, y + 6), "EMERGENT LOGIC", font=f(23, True), fill=WHITE if dark else INDIGO)
    draw.text((x + 92, y + 40), label, font=f(21), fill=(221, 226, 255) if dark else MUTED)


def pill(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], text: str, fill, text_fill, outline=None) -> None:
    draw.rounded_rectangle(box, radius=28, fill=fill, outline=outline, width=2 if outline else 1)
    x1, y1, x2, y2 = box
    bbox = draw.textbbox((0, 0), text, font=f(22, True))
    draw.text((x1 + (x2 - x1 - (bbox[2] - bbox[0])) / 2, y1 + 18), text, font=f(22, True), fill=text_fill)


def build_blast_radius() -> None:
    size = (1200, 1200)
    img = vertical_gradient(size, (8, 13, 27), (30, 58, 95))
    glow = glow_layer(size)
    base = img.convert("RGBA")
    base.alpha_composite(glow)
    img = base.convert("RGB")
    draw = ImageDraw.Draw(img, "RGBA")

    # Subtle orbital grid.
    for r in [150, 255, 365]:
        draw.ellipse((790 - r, 550 - r, 790 + r, 550 + r), outline=(238, 242, 255, 28), width=2)
    for angle in range(0, 360, 30):
        rad = math.radians(angle)
        draw.line((790, 550, 790 + math.cos(rad) * 390, 550 + math.sin(rad) * 390), fill=(238, 242, 255, 18), width=1)

    brand(draw, img, 78, 72, "Salesforce MFA", True)

    # Main copy block.
    draw.text((80, 242), "One admin account", font=f(66, True), fill=WHITE)
    draw.text((80, 318), "has a blast radius.", font=f(66, True), fill=ELECTRIC)
    draw.line((82, 420, 438, 420), fill=ELECTRIC, width=8)
    wrapped(
        draw,
        "Before MFA enforcement exposes the weak spots, check privileged access, authentication, and fallback ownership.",
        (82, 472),
        34,
        f(34),
        (226, 232, 240),
        12,
    )

    # Admin core and connected systems.
    core = (790, 550)
    draw.ellipse((core[0] - 92, core[1] - 92, core[0] + 92, core[1] + 92), fill=(255, 255, 255, 242))
    draw.text((core[0] - 58, core[1] - 19), "ADMIN", font=f(28, True), fill=NAVY)

    nodes = [
        ("Data", (600, 330), INDIGO),
        ("Reports", (1015, 328), GREEN),
        ("Flows", (1095, 635), AMBER),
        ("Apps", (865, 790), CYAN),
        ("Users", (540, 720), "#A78BFA"),
    ]
    for label, pos, color in nodes:
        draw.line((core[0], core[1], pos[0], pos[1]), fill=(238, 242, 255, 96), width=4)
        draw.ellipse((pos[0] - 46, pos[1] - 46, pos[0] + 46, pos[1] + 46), fill=color)
        draw.ellipse((pos[0] - 17, pos[1] - 17, pos[0] + 17, pos[1] + 17), fill=WHITE)
        draw.text((pos[0] - 34, pos[1] + 58), label, font=f(20, True), fill=WHITE)

    # Bottom checklist.
    draw.rounded_rectangle((80, 890, 1118, 1064), radius=34, fill=(255, 255, 255, 236), outline=(255, 255, 255, 80), width=2)
    draw.text((118, 925), "Review before it becomes urgent", font=f(26, True), fill=NAVY)
    items = ["Admin roles", "MFA method", "SSO signal", "Backup admin"]
    for idx, item in enumerate(items):
        x = 120 + idx * 245
        draw.ellipse((x, 983, x + 18, 1001), fill=INDIGO)
        draw.text((x + 30, 974), item, font=f(22, True), fill=SLATE)

    img.save(OUT / "salesforce_mfa_blast_radius_v3.png", optimize=True)


def build_keys() -> None:
    img = Image.new("RGB", (1200, 1200), WHITE)
    draw = ImageDraw.Draw(img, "RGBA")
    draw.rectangle((0, 0, 1200, 28), fill=INDIGO)
    draw.rectangle((0, 28, 1200, 36), fill=NAVY)
    draw.ellipse((760, -210, 1400, 420), fill=(99, 102, 241, 26))
    draw.ellipse((-200, 820, 440, 1380), fill=(30, 58, 95, 8))

    brand(draw, img, 82, 82, "CRM Security", False)

    # Big keyring illustration.
    ring_center = (865, 525)
    draw.ellipse((ring_center[0] - 112, ring_center[1] - 112, ring_center[0] + 112, ring_center[1] + 112), outline=INDIGO, width=26)
    key_shapes = [
        (760, 705, 970, 752, GREEN),
        (805, 788, 1080, 835, AMBER),
        (690, 860, 990, 907, NAVY),
    ]
    for x1, y1, x2, y2, color in key_shapes:
        draw.rounded_rectangle((x1, y1, x2, y2), radius=22, fill=color)
        draw.ellipse((x1 - 38, y1 - 14, x1 + 58, y1 + 82), fill=color)
        draw.ellipse((x1 - 8, y1 + 16, x1 + 28, y1 + 52), fill=WHITE)
        draw.rectangle((x2 - 55, y1 + 47, x2 - 20, y1 + 75), fill=WHITE)
        draw.rectangle((x2 - 105, y1 + 47, x2 - 77, y1 + 75), fill=WHITE)
    draw.line((ring_center[0], ring_center[1] + 112, 780, 690), fill=INDIGO, width=10)

    # Main content.
    draw.text((82, 275), "Who has", font=f(76, True), fill=NAVY)
    draw.text((82, 360), "the keys?", font=f(88, True), fill=INDIGO)
    draw.text((88, 475), "MFA matters.", font=f(42, True), fill=NAVY)
    draw.text((88, 528), "Permission design matters more.", font=f(42, True), fill=NAVY)
    wrapped(
        draw,
        "Salesforce security is not only about login protection. It is also about who can change the system after they get in.",
        (90, 626),
        36,
        f(31),
        SLATE,
        12,
    )

    pill(draw, (92, 846, 342, 910), "Admin roles", SOFT, NAVY, (99, 102, 241, 95))
    pill(draw, (374, 846, 628, 910), "High access", SOFT, NAVY, (99, 102, 241, 95))
    pill(draw, (92, 934, 342, 998), "MFA status", SOFT, NAVY, (99, 102, 241, 95))
    pill(draw, (374, 934, 628, 998), "Fallback", SOFT, NAVY, (99, 102, 241, 95))

    draw.line((90, 1080, 440, 1080), fill=INDIGO, width=8)
    draw.text((90, 1112), "Emergent Logic", font=f(24, True), fill=INDIGO)
    draw.text((300, 1112), "CRM access, cleanup, automation", font=f(24), fill=SLATE)

    img.save(OUT / "salesforce_mfa_who_has_keys_v3.png", optimize=True)


def build_vertical_story() -> None:
    img = vertical_gradient((1080, 1350), (10, 16, 32), (30, 58, 95))
    img = img.convert("RGBA")
    img.alpha_composite(glow_layer((1080, 1350)))
    img = img.convert("RGB")
    draw = ImageDraw.Draw(img, "RGBA")

    brand(draw, img, 72, 74, "Salesforce MFA", True)

    draw.text((72, 260), "The login", font=f(88, True), fill=WHITE)
    draw.text((72, 356), "is not the", font=f(88, True), fill=WHITE)
    draw.text((72, 452), "whole risk.", font=f(88, True), fill=ELECTRIC)

    # Vertical risk path.
    x = 160
    y0 = 650
    stages = [
        ("1", "Access", "Who has elevated permissions?"),
        ("2", "Auth", "How are they verified?"),
        ("3", "Fallback", "Who can recover access?"),
    ]
    draw.line((x + 42, y0 + 44, x + 42, y0 + 370), fill=(238, 242, 255, 120), width=6)
    for idx, (num, title, desc) in enumerate(stages):
        y = y0 + idx * 162
        color = INDIGO if idx < 2 else GREEN
        draw.ellipse((x, y, x + 84, y + 84), fill=color)
        draw.text((x + 29, y + 22), num, font=f(30, True), fill=WHITE)
        draw.text((x + 130, y - 2), title, font=f(40, True), fill=WHITE)
        draw.text((x + 130, y + 50), desc, font=f(25), fill=(226, 232, 240))

    draw.rounded_rectangle((72, 1190, 1008, 1280), radius=28, fill=(255, 255, 255, 230))
    draw.text((108, 1218), "Security is CRM operations.", font=f(31, True), fill=NAVY)
    draw.text((108, 1254), "Emergent Logic", font=f(22, True), fill=INDIGO)

    img.save(OUT / "salesforce_mfa_vertical_story_v3.png", optimize=True)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    build_blast_radius()
    build_keys()
    build_vertical_story()
    print(OUT)


if __name__ == "__main__":
    main()
