from transparent_background import Remover
from PIL import Image
from pathlib import Path

remover = Remover(mode='fast')
checked = [t.replace('.png', '').split('/')[-1] for t in Path('checked.txt').open().read().split('\n')]

for file in Path('public/images/devices').glob('*.jpg'):
    img = Image.open(file).convert('RGB')
    png = Path(str(file).replace(".jpg", ".png"))
    if png.is_file():
        png_img = Image.open(png).convert('RGB')
        if png_img.width == 512:
            continue
    if not file.name.replace('.jpg', '') in checked:
        out = remover.process(img)
        target = f"{file.parent}/{file.name.replace('.jpg', '.png')}"
        # img.save(target)
        out.save(target)
