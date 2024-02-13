# from transparent_background import Remover
from PIL import Image
from pathlib import Path
import math
# from rembg import remove, new_session
# 
# remover = Remover(mode='fast')
checked = [t.replace('.png', '').split('/')[-1].strip() for t in Path('checked.txt').open().read().split('\n')]

# session = new_session('isnet-general-use')


for file in Path('public/images/devices').glob('*.jpg'):
    img = Image.open(file).convert('RGB')
    if not file.name.replace('.jpg', '') in checked:
        
        # old_width, old_height = img.size
        # canvas_width = 300
        # canvas_height = 300
        # mode = img.mode
        # x1 = int(math.floor((canvas_width - old_width) / 2))
        # y1 = int(math.floor((canvas_height - old_height) / 2))
        # newImage = Image.new(mode, (canvas_width, canvas_height), (255, 255, 255))
        # newImage.paste(img, (x1, y1, x1 + old_width, y1 + old_height))

        # # newImage = Image.new(3, (170,170))
        # # print(file.name)
        # out = remover.process(newImage)
        target = f"{file.parent}/{file.name.replace('.jpg', '.png')}"
        Path(target).unlink()
        # out = out.crop((x1, y1, x1 + old_width, y1 + old_height))
        # # target = f"/Users/koenkk/Desktop/to_convert/{file.name.replace('.jpg', '.png')}"
        # # output = remove(img, session=session)
        # # output.save(target)
        # # newImage.save(target)
        # out.save(target)
        # # # print(target)
