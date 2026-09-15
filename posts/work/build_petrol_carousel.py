from pathlib import Path

import cv2
import numpy as np
from PIL import Image


SOURCE = Path(r"C:\Users\Lucas Medina\Pictures\Arquivos ripwave\testeprancha\download.jpg")
BACKGROUND = Path(r"C:\Users\Lucas Medina\.codex\generated_images\01a082b9-144c-7742-94bf-60c9faf41cc5\exec-f0685954-0919-4754-b07e-b35b82f5055f.png")
OUTPUT = Path(r"C:\Users\Lucas Medina\Documents\ChatGPT\Posts ripwave\outputs\carrossel_azul_petroleo")


def product_mask(image: np.ndarray) -> np.ndarray:
    """Create a conservative mask for the board in the approved full-board image."""
    h, w = image.shape[:2]
    outline = np.array(
        [
            (535, 108), (497, 146), (461, 227), (431, 327), (407, 438),
            (389, 575), (378, 718), (379, 858), (394, 975), (421, 1080),
            (452, 1174), (490, 1233), (533, 1248), (574, 1235), (618, 1177),
            (653, 1080), (680, 973), (698, 850), (704, 715), (702, 578),
            (690, 450), (671, 335), (645, 237), (609, 157), (566, 110),
        ],
        dtype=np.int32,
    )
    corridor = np.zeros((h, w), np.uint8)
    cv2.fillPoly(corridor, [outline], 255)
    # The board resin is cool blue-white while the original beige setting is warm.
    red, _, blue = cv2.split(image)
    cool_resin = ((blue.astype(np.int16) - red.astype(np.int16) > 10) & (corridor > 0)).astype(np.uint8) * 255
    count, labels, stats, _ = cv2.connectedComponentsWithStats(cool_resin)
    mask = (labels == (1 + np.argmax(stats[1:, cv2.CC_STAT_AREA]))).astype(np.uint8) * 255

    # Restore dark stringer and graphics by filling only between the detected rails.
    rows = []
    left_edge = []
    right_edge = []
    for row in range(h):
        cols = np.flatnonzero(mask[row])
        if len(cols):
            rows.append(row)
            left_edge.append(cols[0])
            right_edge.append(cols[-1])

    # The color selection is intentionally conservative, so smooth the sampled rail line
    # before filling it. This removes segmentation stair-steps without altering the deck.
    rows = np.array(rows)
    left_edge = cv2.GaussianBlur(np.array(left_edge, dtype=np.float32).reshape(-1, 1), (0, 0), 2.2).ravel()
    right_edge = cv2.GaussianBlur(np.array(right_edge, dtype=np.float32).reshape(-1, 1), (0, 0), 2.2).ravel()
    mask[:] = 0
    for row, left, right in zip(rows, left_edge, right_edge):
        mask[row, round(left) : round(right) + 1] = 255

    # Keep the pointed nose supplied by the hand-traced contour.
    cv2.fillPoly(mask, [outline[:4]], 255)
    return mask


def compose(image: np.ndarray, mask: np.ndarray, background: np.ndarray) -> np.ndarray:
    alpha = cv2.GaussianBlur(mask.astype(np.float32) / 255.0, (0, 0), 0.55)
    alpha[mask == 255] = 1.0
    result = image.astype(np.float32) * alpha[..., None] + background.astype(np.float32) * (1 - alpha[..., None])
    return np.clip(result, 0, 255).round().astype(np.uint8)


def save_post(image: Image.Image, name: str) -> None:
    image.resize((1080, 1350), Image.Resampling.LANCZOS).save(OUTPUT / name, quality=97, subsampling=0)


OUTPUT.mkdir(parents=True, exist_ok=True)
full = np.array(Image.open(SOURCE).convert("RGB"))
background = np.array(Image.open(BACKGROUND).convert("RGB").resize((full.shape[1], full.shape[0]), Image.Resampling.LANCZOS))
# Retain the gentle wall/floor transition while reducing the generated texture to a quiet backdrop.
background = cv2.GaussianBlur(background, (0, 0), 18)
petrol_base = np.full_like(background, (33, 66, 78))
background = np.clip(background.astype(np.float32) * 0.42 + petrol_base.astype(np.float32) * 0.58, 0, 255).astype(np.uint8)
# Quiet grounding shadow at the original tail contact point.
shadow = np.zeros(full.shape[:2], np.uint8)
cv2.ellipse(shadow, (540, 1252), (76, 13), 0, 0, 360, 255, -1)
shadow = cv2.GaussianBlur(shadow, (0, 0), 12).astype(np.float32) / 255.0
background = np.clip(background.astype(np.float32) * (1 - 0.13 * shadow[..., None]), 0, 255).astype(np.uint8)
mask = product_mask(full)
composite = compose(full, mask, background)

# Deck pixels inside the fully opaque mask are bit-for-bit identical to the approved source.
assert np.array_equal(composite[mask == 255], full[mask == 255])
master = Image.fromarray(composite)
save_post(master, "01_prancha_inteira.jpg")

# The logo slide is a crop of the approved full image, not a generated reinterpretation.
logo_crop = master.crop((250, 45, 950, 920))
save_post(logo_crop, "02_logo_bico_fiel.jpg")

# Tail detail uses the same verified composite, retaining the original graphics and plug.
tail_crop = master.crop((245, 575, 845, 1325))
save_post(tail_crop, "03_detalhe_rabeta.jpg")

Image.fromarray(mask).save(OUTPUT / "mascara_prancha.png")
print("Created 3 carousel slides. Verified product pixels unchanged in the full-board master.")
