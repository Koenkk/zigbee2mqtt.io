# from transparent_background import Remover
from PIL import Image
from pathlib import Path
from rembg import remove, new_session

# remover = Remover(mode='fast')
checked = [t.replace('.png', '').split('/')[-1].strip() for t in Path('checked.txt').open().read().split('\n')]

session = new_session()

for file in Path('public/images/devices').glob('*.jpg'):
    img = Image.open(file).convert('RGB')
    png = Path(str(file).replace(".jpg", ".png"))
    if not file.name.replace('.jpg', '') in checked:
        # out = remover.process(img)
        target = f"{file.parent}/{file.name.replace('.jpg', '.png')}"
        output = remove(img, session=session)
        output.save(target)
        # img.save(target)
        # out.save(target)
        # print(target)
