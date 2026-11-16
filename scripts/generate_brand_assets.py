"""Generate favicon / touch icon / social preview from the official logo."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "images" / "logo.png"
PUBLIC = ROOT / "public"

NAVY = (16, 34, 79)
NAVY_DARK = (8, 21, 48)
CREAM = (251, 238, 221)
RED = (232, 31, 43)


def trim_logo() -> Image.Image:
    logo = Image.open(SOURCE).convert("RGBA")
    alpha = logo.getchannel("A")
    box = alpha.point(lambda value: 255 if value > 40 else 0).getbbox()
    if box is None:
        return logo
    left, top, right, bottom = box
    pad = 10
    box = (
        max(0, left - pad),
        max(0, top - pad),
        min(logo.width, right + pad),
        min(logo.height, bottom + pad),
    )
    return logo.crop(box)


def square(image: Image.Image) -> Image.Image:
    size = max(image.size)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.alpha_composite(image, ((size - image.width) // 2, (size - image.height) // 2))
    return canvas


def main() -> None:
    mark = square(trim_logo())

    mark.resize((512, 512), Image.LANCZOS).save(ROOT / "public" / "logo.png")
    mark.resize((64, 64), Image.LANCZOS).save(PUBLIC / "favicon.png")
    mark.resize((180, 180), Image.LANCZOS).save(PUBLIC / "apple-touch-icon.png")

    width, height = 1200, 630
    og = Image.new("RGB", (width, height), NAVY_DARK)
    gradient = Image.new("RGB", (width, height), NAVY)
    og_draw = ImageDraw.Draw(gradient)
    for x in range(width):
        ratio = x / width
        color = tuple(int(NAVY_DARK[i] + (NAVY[i] - NAVY_DARK[i]) * ratio) for i in range(3))
        og_draw.line([(x, 0), (x, height)], fill=color)
    og.paste(gradient, (0, 0))

    glow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse((760, -260, 1460, 440), fill=(*RED, 200))
    glow_draw.ellipse((880, 240, 1400, 760), fill=(*NAVY, 255))
    glow = glow.filter(ImageFilter.GaussianBlur(4))
    og = Image.alpha_composite(og.convert("RGBA"), glow).convert("RGB")

    logo_size = 360
    logo = mark.resize((logo_size, logo_size), Image.LANCZOS)
    og.paste(logo, (770, 135), logo)

    draw = ImageDraw.Draw(og)
    font_bold = "C:/Windows/Fonts/arialbd.ttf"
    font_regular = "C:/Windows/Fonts/arial.ttf"
    try:
        title_font = ImageFont.truetype(font_bold, 86)
        eyebrow_font = ImageFont.truetype(font_bold, 24)
        body_font = ImageFont.truetype(font_regular, 28)
    except OSError:
        title_font = eyebrow_font = body_font = ImageFont.load_default()

    draw.rounded_rectangle((90, 108, 322, 156), radius=24, fill=CREAM)
    draw.text((112, 121), "LIBERTY SARL", font=eyebrow_font, fill=NAVY)
    draw.text((88, 196), "FRAIS", font=title_font, fill=CREAM)
    draw.text((88, 286), "& CONGELÉ", font=title_font, fill=CREAM)
    draw.rounded_rectangle((90, 408, 372, 416), radius=4, fill=RED)
    draw.text((90, 450), "Qualité et fraîcheur au meilleur prix.", font=body_font, fill=(205, 214, 235))
    draw.text((90, 500), "Gros · Détail · 8 villes en RDC", font=body_font, fill=(205, 214, 235))

    og.save(PUBLIC / "og-image.jpg", quality=92)
    print("Brand assets generated.")


if __name__ == "__main__":
    main()
