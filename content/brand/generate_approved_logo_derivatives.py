from __future__ import annotations

import hashlib
import shutil
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[2]
BRAND_DIR = ROOT / "content" / "brand"
ASSET_DIR = BRAND_DIR / "assets"
PUBLIC_BRAND_DIR = ROOT / "public" / "brand"
SOCIAL_PROFILE_DIR = ROOT / "content" / "social" / "assets" / "approved"

DARK_SQUARE = ASSET_DIR / "emergent_logic_dark_square_1080.png"
PRIMARY_DARK = ASSET_DIR / "emergent_logic_primary_logo_dark_500.png"

EXPECTED_SHA256 = {
    DARK_SQUARE.name: "dcc53fb24490469e09a5c9a8c7692c6a9f52d615e0d820a18c073b8677704b5a",
    PRIMARY_DARK.name: "d895a38cfd5161e39e444bf8bcb66c972507e33215d6972293724bb89a4fd72e",
}

NAVY = "#1E3A5F"
WHITE = "#FFFFFF"
LIGHT_INDIGO = "#DCE4FF"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as source:
        for chunk in iter(lambda: source.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def verify_masters() -> None:
    for path in (DARK_SQUARE, PRIMARY_DARK):
        actual = sha256(path)
        expected = EXPECTED_SHA256[path.name]
        if actual != expected:
            raise RuntimeError(f"Unapproved logo master: {path} ({actual})")


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


def resize_master(source: Path, destination: Path, size: int) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as image:
        rendered = image.convert("RGB").resize((size, size), Image.Resampling.LANCZOS)
        rendered.save(destination, optimize=True)


def install_public_masters() -> None:
    PUBLIC_BRAND_DIR.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(DARK_SQUARE, PUBLIC_BRAND_DIR / "emergent-logic-dark-square-1080.png")
    shutil.copyfile(PRIMARY_DARK, PUBLIC_BRAND_DIR / "emergent-logic-primary-logo-dark-500.png")


def replace_legacy_aliases() -> None:
    for size in (16, 32, 48, 64, 128, 180, 256, 512):
        resize_master(PRIMARY_DARK, ROOT / "public" / f"el-logo-{size}.png", size)

    shutil.copyfile(PRIMARY_DARK, ROOT / "public" / "el-logo-original.png")
    shutil.copyfile(PRIMARY_DARK, ROOT / "public" / "hex-logo-original.png")
    resize_master(PRIMARY_DARK, ROOT / "public" / "el-logo-header.png", 180)
    resize_master(PRIMARY_DARK, ROOT / "public" / "apple-touch-icon.png", 180)
    shutil.copyfile(PRIMARY_DARK, ROOT / "app" / "icon.png")
    shutil.copyfile(PRIMARY_DARK, ROOT / "app" / "apple-icon.png")

    with Image.open(PRIMARY_DARK) as source:
        icon = source.convert("RGBA")
        icon.save(
            ROOT / "app" / "favicon.ico",
            format="ICO",
            sizes=[(16, 16), (32, 32), (48, 48)],
        )


def make_facebook_cover(destination: Path) -> None:
    canvas = Image.new("RGB", (820, 312), NAVY)
    draw = ImageDraw.Draw(canvas)

    with Image.open(PRIMARY_DARK) as source:
        logo = source.convert("RGB").resize((250, 250), Image.Resampling.LANCZOS)
    canvas.paste(logo, (38, 31))

    draw.line((326, 58, 326, 254), fill="#55719A", width=2)
    draw.text((366, 76), "CRM systems that stay visible.", font=font(30, True), fill=WHITE)
    draw.text((366, 137), "Cleanup | lead routing | automation", font=font(19), fill=LIGHT_INDIGO)
    draw.text((366, 213), "emergent-logic.ca", font=font(20, True), fill=WHITE)

    destination.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(destination, optimize=True)


def make_open_graph_image(destination: Path) -> None:
    canvas = Image.new("RGB", (1200, 630), NAVY)
    draw = ImageDraw.Draw(canvas)

    with Image.open(DARK_SQUARE) as source:
        logo = source.convert("RGB").resize((330, 330), Image.Resampling.LANCZOS)
    canvas.paste(logo, (56, 150))

    draw.line((426, 142, 426, 488), fill="#55719A", width=3)
    draw.text((480, 166), "Emergent Logic", font=font(54, True), fill=WHITE)
    draw.text((480, 252), "CRM systems that stay visible.", font=font(31, True), fill=LIGHT_INDIGO)
    draw.text((480, 328), "Cleanup | lead routing | automation", font=font(23), fill=WHITE)
    draw.text((480, 373), "HubSpot | Salesforce | practical AI workflows", font=font(20), fill=LIGHT_INDIGO)
    draw.text((480, 447), "Surrey, BC | emergent-logic.ca", font=font(21, True), fill=WHITE)

    destination.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(destination, optimize=True)


def install_social_profile_assets() -> None:
    SOCIAL_PROFILE_DIR.mkdir(parents=True, exist_ok=True)
    for name in (
        "emergent_logic_instagram_profile.png",
        "emergent_logic_facebook_page_profile.png",
        "emergent_logic_social_icon.png",
    ):
        shutil.copyfile(PRIMARY_DARK, SOCIAL_PROFILE_DIR / name)

    make_facebook_cover(SOCIAL_PROFILE_DIR / "emergent_logic_facebook_cover.png")
    light_variant = SOCIAL_PROFILE_DIR / "emergent_logic_facebook_cover_light.png"
    if light_variant.exists():
        light_variant.unlink()


def replace_research_header() -> None:
    path = ROOT / "public" / "social-assets" / "research-2026" / "crm-cleanup-demand-report-1000x700.png"
    if not path.exists():
        return

    with Image.open(path) as source:
        image = source.convert("RGB")
    with Image.open(PRIMARY_DARK) as source:
        logo = source.convert("RGB").resize((82, 82), Image.Resampling.LANCZOS)

    draw = ImageDraw.Draw(image)
    header_color = image.getpixel((500, 50))
    draw.rectangle((0, 0, 310, 100), fill=header_color)
    image.paste(logo, (42, 9))
    image.save(path, optimize=True)


def main() -> None:
    verify_masters()
    install_public_masters()
    replace_legacy_aliases()
    install_social_profile_assets()
    make_open_graph_image(ROOT / "public" / "og-image.png")
    replace_research_header()


if __name__ == "__main__":
    main()
