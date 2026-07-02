from __future__ import annotations

import math
from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[3]
OUT = ROOT / "content" / "social" / "assets" / "salesforce-mfa-2026-07-01"
ICON = ROOT / "content" / "social" / "assets" / "approved" / "emergent_logic_social_icon.png"

NAVY = "#1E3A5F"
DEEP = "#0F172A"
INDIGO = "#6366F1"
SOFT_INDIGO = "#EEF2FF"
SLATE = "#374151"
MUTED = "#64748B"
WHITE = "#FFFFFF"
LINE = "#CBD5E1"
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


def text_wrap(draw: ImageDraw.ImageDraw, text: str, xy: tuple[int, int], chars: int, fnt, fill: str, gap: int = 10) -> int:
    x, y = xy
    for line in wrap(text, width=chars):
        draw.text((x, y), line, font=fnt, fill=fill)
        bbox = draw.textbbox((x, y), line, font=fnt)
        y = bbox[3] + gap
    return y


def gradient(size: tuple[int, int], top: tuple[int, int, int], bottom: tuple[int, int, int]) -> Image.Image:
    w, h = size
    img = Image.new("RGB", size)
    pix = img.load()
    for y in range(h):
        t = y / max(h - 1, 1)
        row = tuple(int(top[i] * (1 - t) + bottom[i] * t) for i in range(3))
        for x in range(w):
            pix[x, y] = row
    return img


def paste_icon(img: Image.Image, xy: tuple[int, int], size: int = 74) -> None:
    if not ICON.exists():
        return
    icon = Image.open(ICON).convert("RGBA").resize((size, size))
    img.paste(icon, xy, icon)


def draw_brand(draw: ImageDraw.ImageDraw, img: Image.Image, xy: tuple[int, int], label: str, dark: bool = False) -> None:
    x, y = xy
    paste_icon(img, (x, y), 74)
    draw.text((x + 94, y + 8), "EMERGENT LOGIC", font=font(23, True), fill=WHITE if dark else INDIGO)
    draw.text((x + 94, y + 42), label, font=font(21), fill=(220, 226, 255) if dark else MUTED)


def rounded_shadow(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], radius: int, fill, outline=None) -> None:
    x1, y1, x2, y2 = box
    draw.rounded_rectangle((x1 + 10, y1 + 16, x2 + 10, y2 + 16), radius=radius, fill=(15, 23, 42, 28))
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=2 if outline else 1)


def node(draw: ImageDraw.ImageDraw, xy: tuple[int, int], label: str, color: str, dark_text: bool = False) -> None:
    x, y = xy
    draw.ellipse((x - 38, y - 38, x + 38, y + 38), fill=color)
    draw.ellipse((x - 15, y - 15, x + 15, y + 15), fill=WHITE)
    tw = draw.textbbox((0, 0), label, font=font(20, True))
    draw.text((x - (tw[2] - tw[0]) / 2, y + 52), label, font=font(20, True), fill=DEEP if dark_text else WHITE)


def build_founder_v2() -> None:
    img = gradient((1200, 1200), (15, 23, 42), (30, 58, 95))
    draw = ImageDraw.Draw(img, "RGBA")

    # Atmosphere.
    draw.ellipse((610, -250, 1440, 560), fill=(99, 102, 241, 34))
    draw.ellipse((-230, 760, 440, 1360), fill=(99, 102, 241, 18))
    for i in range(0, 1200, 60):
        draw.line((i, 0, i - 520, 1200), fill=(255, 255, 255, 10), width=1)

    draw_brand(draw, img, (80, 74), "Founder POV", dark=True)

    # Access map on right.
    center = (845, 515)
    ring = [(690, 345), (1010, 345), (1065, 700), (700, 765)]
    for p in ring:
        draw.line((center[0], center[1], p[0], p[1]), fill=(238, 242, 255, 95), width=4)
    draw.ellipse((center[0] - 82, center[1] - 82, center[0] + 82, center[1] + 82), fill=(255, 255, 255, 235))
    draw.text((center[0] - 55, center[1] - 18), "ADMIN", font=font(26, True), fill=NAVY)
    node(draw, ring[0], "Data", INDIGO)
    node(draw, ring[1], "Reports", GREEN)
    node(draw, ring[2], "Flows", AMBER)
    node(draw, ring[3], "Apps", "#38BDF8")

    # Left content panel.
    rounded_shadow(draw, (76, 200, 655, 1038), 42, (255, 255, 255, 245), (203, 213, 225, 90))
    draw.text((118, 250), "Admin access", font=font(58, True), fill=NAVY)
    draw.text((118, 320), "is CRM risk.", font=font(58, True), fill=NAVY)
    draw.line((118, 398, 415, 398), fill=INDIGO, width=8)

    y = text_wrap(
        draw,
        "One privileged account can touch data, reports, automation, integrations, and permissions.",
        (118, 448),
        29,
        font(33),
        SLATE,
        12,
    )

    rounded_shadow(draw, (118, y + 44, 596, y + 272), 28, (238, 242, 255, 255), (99, 102, 241, 95))
    draw.text((152, y + 78), "Review this week", font=font(25, True), fill=NAVY)
    checklist = ["Admin roles", "MFA method", "SSO signal", "Backup admin"]
    for idx, item in enumerate(checklist):
        iy = y + 132 + idx * 36
        draw.ellipse((154, iy + 6, 170, iy + 22), fill=INDIGO)
        draw.text((188, iy), item, font=font(24), fill=SLATE)

    draw.text((118, 980), "Security is CRM operations.", font=font(25, True), fill=NAVY)

    img.save(OUT / "salesforce_mfa_founder_creative_v2.png", optimize=True)


def build_company_v2() -> None:
    img = Image.new("RGB", (1200, 1200), WHITE)
    draw = ImageDraw.Draw(img, "RGBA")

    draw.rectangle((0, 0, 1200, 26), fill=INDIGO)
    draw.rectangle((0, 26, 1200, 34), fill=NAVY)
    draw.ellipse((760, -190, 1390, 405), fill=(99, 102, 241, 28))
    draw.rounded_rectangle((785, 150, 1110, 980), radius=50, fill=(248, 250, 252, 220), outline=(203, 213, 225, 80), width=2)

    draw_brand(draw, img, (82, 82), "CRM Security Checklist")

    # Large lock/gate motif.
    gate_x, gate_y = 805, 318
    draw.rounded_rectangle((gate_x, gate_y + 170, gate_x + 250, gate_y + 470), radius=36, fill=NAVY)
    draw.arc((gate_x + 42, gate_y, gate_x + 208, gate_y + 250), 180, 360, fill=INDIGO, width=26)
    draw.ellipse((gate_x + 104, gate_y + 295, gate_x + 146, gate_y + 337), fill=WHITE)
    draw.rounded_rectangle((gate_x + 119, gate_y + 323, gate_x + 132, gate_y + 385), radius=6, fill=WHITE)
    for angle in range(0, 360, 45):
        rad = math.radians(angle)
        x1 = gate_x + 125 + math.cos(rad) * 185
        y1 = gate_y + 320 + math.sin(rad) * 185
        x2 = gate_x + 125 + math.cos(rad) * 215
        y2 = gate_y + 320 + math.sin(rad) * 215
        draw.line((x1, y1, x2, y2), fill=(99, 102, 241, 120), width=4)

    # Main message.
    draw.text((86, 255), "MFA is the", font=font(72, True), fill=NAVY)
    draw.text((86, 335), "visible part.", font=font(72, True), fill=NAVY)
    draw.text((86, 430), "Access design is", font=font(58, True), fill=INDIGO)
    draw.text((86, 498), "the real system.", font=font(58, True), fill=INDIGO)

    y = text_wrap(
        draw,
        "Review who has elevated Salesforce access, how they authenticate, and what happens if an admin gets locked out.",
        (90, 610),
        37,
        font(31),
        SLATE,
        12,
    )

    cards = [
        ("01", "Admin roles"),
        ("02", "High access"),
        ("03", "MFA status"),
        ("04", "Lockout plan"),
    ]
    for idx, (num, label) in enumerate(cards):
        x = 90 + (idx % 2) * 320
        cy = y + 58 + (idx // 2) * 112
        rounded_shadow(draw, (x, cy, x + 278, cy + 86), 22, (248, 250, 252, 255), (203, 213, 225, 120))
        draw.text((x + 24, cy + 25), num, font=font(22, True), fill=INDIGO)
        draw.text((x + 74, cy + 25), label, font=font(24, True), fill=NAVY)

    draw.line((90, 1070, 430, 1070), fill=INDIGO, width=8)
    draw.text((90, 1100), "Clean systems. Safer access. Better operations.", font=font(24), fill=SLATE)

    img.save(OUT / "salesforce_mfa_company_creative_v2.png", optimize=True)


def build_vertical_v2() -> None:
    img = gradient((1080, 1350), (248, 250, 252), (238, 242, 255))
    draw = ImageDraw.Draw(img, "RGBA")

    draw.rectangle((0, 0, 1080, 28), fill=INDIGO)
    draw.rectangle((0, 28, 1080, 38), fill=NAVY)
    draw.ellipse((610, -180, 1240, 420), fill=(99, 102, 241, 28))
    draw.ellipse((-260, 790, 420, 1480), fill=(30, 58, 95, 10))

    rounded_shadow(draw, (70, 92, 1010, 1260), 48, (255, 255, 255, 248), (203, 213, 225, 120))
    draw_brand(draw, img, (118, 138), "Salesforce MFA")

    draw.text((118, 306), "Before MFA", font=font(75, True), fill=NAVY)
    draw.text((118, 390), "breaks your day,", font=font(75, True), fill=NAVY)
    draw.text((118, 492), "check admin access.", font=font(58, True), fill=INDIGO)

    # Path diagram.
    y = 690
    steps = [("Access", "Who can change the org?"), ("Auth", "How do they verify?"), ("Fallback", "Who can recover access?")]
    for idx, (title, desc) in enumerate(steps):
        x = 132
        cy = y + idx * 145
        draw.ellipse((x, cy, x + 70, cy + 70), fill=INDIGO if idx != 2 else GREEN)
        draw.text((x + 23, cy + 18), str(idx + 1), font=font(28, True), fill=WHITE)
        if idx < len(steps) - 1:
            draw.line((x + 35, cy + 74, x + 35, cy + 138), fill=(99, 102, 241, 125), width=5)
        draw.text((x + 105, cy - 2), title, font=font(34, True), fill=NAVY)
        draw.text((x + 105, cy + 42), desc, font=font(26), fill=SLATE)

    draw.line((118, 1182, 460, 1182), fill=INDIGO, width=8)
    draw.text((118, 1210), "Emergent Logic", font=font(25, True), fill=INDIGO)
    draw.text((118, 1242), "CRM implementation, cleanup, automation", font=font(21), fill=SLATE)

    img.save(OUT / "salesforce_mfa_vertical_creative_v2.png", optimize=True)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    build_founder_v2()
    build_company_v2()
    build_vertical_v2()
    print(OUT)


if __name__ == "__main__":
    main()
