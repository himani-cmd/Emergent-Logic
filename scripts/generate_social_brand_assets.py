from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "content" / "social" / "assets"
OUT.mkdir(parents=True, exist_ok=True)

LOGO = ROOT / "public" / "el-logo-512.png"

INDIGO = (99, 91, 255)
NAVY = (28, 45, 79)
INK = (31, 41, 55)
MUTED = (93, 108, 132)
PALE = (238, 242, 255)
WHITE = (255, 255, 255)


def font(size, bold=False):
    candidates = [
        "/System/Library/Fonts/Avenir Next.ttc",
        "/System/Library/Fonts/HelveticaNeue.ttc",
        "/System/Library/Fonts/SFNS.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size=size, index=1 if bold else 0)
        except Exception:
            continue
    return ImageFont.load_default()


def resize_logo(size):
    logo = Image.open(LOGO).convert("RGBA")
    bbox = logo.getbbox()
    if bbox:
        logo = logo.crop(bbox)
    logo.thumbnail((size, size), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    canvas.alpha_composite(logo, ((size - logo.width) // 2, (size - logo.height) // 2))
    return canvas


def rounded_shadow(base, xy, radius, fill, shadow=(25, 35, 55, 32), blur=22, offset=(0, 14)):
    x1, y1, x2, y2 = xy
    shadow_layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(shadow_layer)
    sx, sy = offset
    d.rounded_rectangle((x1 + sx, y1 + sy, x2 + sx, y2 + sy), radius=radius, fill=shadow)
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(blur))
    base.alpha_composite(shadow_layer)
    d = ImageDraw.Draw(base)
    d.rounded_rectangle(xy, radius=radius, fill=fill)


def text(draw, xy, value, size, color, bold=False, anchor=None):
    draw.text(xy, value, fill=color, font=font(size, bold), anchor=anchor)


def pill(draw, xy, label):
    x, y = xy
    f = font(24, True)
    bbox = draw.textbbox((0, 0), label, font=f)
    w = bbox[2] - bbox[0] + 38
    draw.rounded_rectangle((x, y, x + w, y + 46), radius=23, fill=(244, 247, 255), outline=(222, 229, 245), width=2)
    draw.text((x + 19, y + 11), label, fill=NAVY, font=f)
    return w


def generate_cover():
    w, h = 1640, 624
    img = Image.new("RGBA", (w, h), (248, 251, 255, 255))
    draw = ImageDraw.Draw(img)

    # Soft grid.
    for x in range(0, w, 64):
        draw.line((x, 0, x, h), fill=(235, 239, 248, 120), width=1)
    for y in range(0, h, 64):
        draw.line((0, y, w, y), fill=(235, 239, 248, 120), width=1)

    # Brand top rule and right-side atmosphere.
    for x in range(w):
        ratio = x / w
        r = int(INDIGO[0] * (1 - ratio) + NAVY[0] * ratio)
        g = int(INDIGO[1] * (1 - ratio) + NAVY[1] * ratio)
        b = int(INDIGO[2] * (1 - ratio) + NAVY[2] * ratio)
        draw.line((x, 0, x, 16), fill=(r, g, b, 255), width=1)

    draw.ellipse((1140, -150, 1710, 420), fill=(236, 238, 255, 210))
    draw.ellipse((1290, 150, 1780, 640), fill=(242, 246, 252, 230))
    draw.arc((1250, 45, 1500, 295), 210, 25, fill=(218, 226, 242, 160), width=5)
    draw.arc((1320, 115, 1590, 385), 205, 28, fill=(218, 226, 242, 120), width=4)

    # Main safe card. Text stays away from edges and from typical profile overlay.
    rounded_shadow(img, (142, 92, 1110, 458), 34, (255, 255, 255, 244))
    draw = ImageDraw.Draw(img)

    mark = resize_logo(116)
    img.alpha_composite(mark, (196, 152))
    text(draw, (338, 158), "EMERGENT LOGIC", 64, INDIGO, True)
    text(draw, (340, 232), "AI-Accelerated CRM Consulting", 34, NAVY, False)
    text(draw, (340, 286), "CRM implementation, cleanup, automation, and lead capture systems", 26, INK, False)
    text(draw, (340, 331), "Based in Surrey, BC — serving Canada and the US", 22, MUTED, False)

    x = 338
    for label in ["CRM Cleanup", "HubSpot", "Salesforce", "Lead Capture"]:
        x += pill(draw, (x, 378), label) + 16

    # Small system motif on the right.
    node_color = (99, 91, 255, 130)
    line_color = (99, 91, 255, 70)
    nodes = [(1238, 252), (1320, 210), (1414, 250), (1370, 338), (1268, 344)]
    for a, b in zip(nodes, nodes[1:] + nodes[:1]):
        draw.line((*a, *b), fill=line_color, width=4)
    for nx, ny in nodes:
        draw.ellipse((nx - 10, ny - 10, nx + 10, ny + 10), fill=node_color)

    out = OUT / "emergent-logic-facebook-cover-1640x624.png"
    img.convert("RGB").save(out, quality=95)
    return out


def avatar(path, label=None, instagram=False):
    size = 1080
    img = Image.new("RGBA", (size, size), (250, 252, 255, 255))
    draw = ImageDraw.Draw(img)

    # Layered brand atmosphere.
    for y in range(size):
        ratio = y / size
        bg = (
            int(248 * (1 - ratio) + 238 * ratio),
            int(251 * (1 - ratio) + 242 * ratio),
            int(255 * (1 - ratio) + 255 * ratio),
        )
        draw.line((0, y, size, y), fill=(*bg, 255))
    draw.ellipse((-210, -190, 520, 540), fill=(238, 242, 255, 230))
    draw.ellipse((560, 560, 1320, 1320), fill=(232, 238, 252, 200))
    draw.ellipse((790, -120, 1180, 270), fill=(99, 91, 255, 26))

    # Circular crop guide: key mark is within 70 percent center area.
    rounded_shadow(img, (202, 202, 878, 878), 168, (255, 255, 255, 244), blur=28, offset=(0, 18))
    draw = ImageDraw.Draw(img)
    logo = resize_logo(510 if instagram else 470)
    img.alpha_composite(logo, ((size - logo.width) // 2, 286 if label else (size - logo.height) // 2))

    if label:
        text(draw, (size // 2, 790), label, 64, NAVY, True, anchor="mm")
        text(draw, (size // 2, 855), "CRM systems that follow up", 30, MUTED, False, anchor="mm")

    img.convert("RGB").save(path, quality=96)
    return path


if __name__ == "__main__":
    generated = [
        generate_cover(),
        avatar(OUT / "emergent-logic-facebook-profile-1080.png"),
        avatar(OUT / "emergent-logic-instagram-profile-1080.png", instagram=True),
    ]
    for file in generated:
        print(file)
