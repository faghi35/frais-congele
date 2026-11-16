from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
POSTERS = ROOT / "public" / "images" / "products"
OUTPUT = ROOT / "public" / "images" / "hero-campaign.png"
WIDTH, HEIGHT = 1800, 1200

canvas = Image.new("RGB", (WIDTH, HEIGHT))
pixels = canvas.load()
for y in range(HEIGHT):
    progress = y / HEIGHT
    color = (
        int(11 + 12 * progress),
        int(43 + 22 * progress),
        int(118 + 28 * progress),
    )
    for x in range(WIDTH):
        pixels[x, y] = color

shapes = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
draw = ImageDraw.Draw(shapes)
draw.ellipse((-720, -370, 820, 1330), fill=(238, 31, 42, 255))
draw.polygon([(0, 850), (920, 1200), (0, 1200)], fill=(9, 35, 101, 190))
draw.ellipse((1180, -430, 1990, 380), fill=(255, 255, 255, 20))
draw.polygon([(780, 0), (1020, 0), (1800, 860), (1800, 1060)], fill=(255, 255, 255, 14))
canvas = Image.alpha_composite(canvas.convert("RGBA"), shapes)

for poster_name, position, angle, size in [
    ("502431332_122120120642835103_282435830133942516_n.jpg", (900, 95), -7, 540),
    ("505599096_122124865190835103_978545969160029087_n.jpg", (1255, 335), 6, 480),
    ("502488225_122120366096835103_1626432328984949129_n.jpg", (920, 650), 4, 420),
]:
    poster = Image.open(POSTERS / poster_name).convert("RGB")
    poster = ImageOps.fit(poster, (size, size), method=Image.Resampling.LANCZOS)
    frame = Image.new("RGBA", (size + 28, size + 28), (255, 255, 255, 255))
    frame.paste(poster, (14, 14))
    frame = frame.rotate(angle, resample=Image.Resampling.BICUBIC, expand=True)

    shadow = Image.new("RGBA", frame.size, (5, 17, 55, 0))
    shadow.putalpha(frame.getchannel("A").point(lambda value: int(value * 0.48)))
    shadow = shadow.filter(ImageFilter.GaussianBlur(24))
    canvas.alpha_composite(shadow, (position[0] + 14, position[1] + 22))
    canvas.alpha_composite(frame, position)

canvas.convert("RGB").save(OUTPUT, "PNG", optimize=True)
print(f"Generated {OUTPUT}")