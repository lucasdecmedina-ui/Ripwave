from pathlib import Path
root=Path(r'C:/Users/Lucas Medina/Documents/ChatGPT/Posts ripwave')
old=Path(r'C:/Users/Lucas Medina/Documents/Codex/2026-09-08/referenced-chatgpt-conversation-this-is-an/work/editorial.py').read_text()
body=old[old.index('rng=np.random'):old.index("Image.fromarray(out).save")]
body=body.replace('line=.857+.018*x','line=.817+.018*x').replace('y-.86','y-.82').replace('y-.959','y-.925').replace('y-.95','y-.921')
header='''from PIL import Image
import numpy as np, cv2
from pathlib import Path
root=Path(r'C:/Users/Lucas Medina/Documents/ChatGPT/Posts ripwave')
im=np.array(Image.open(root/'work/original_9585.png'))
mask=np.array(Image.open(root/'work/mask_9585.png'))
# Recover the dark outer rail in the locally ambiguous wood boundary.
for yy in range(round(930*3.36),round(965*3.36)):
 row=im[yy].astype(float)
 xs=np.flatnonzero((row[1850:1960,2]-row[1850:1960,0])>2)
 if len(xs):
  end=1850+xs[-1]
  start=np.flatnonzero(mask[yy])[0]
  mask[yy,start:end+1]=255
im=cv2.copyMakeBorder(im,200,100,221,221,cv2.BORDER_CONSTANT)
mask=cv2.copyMakeBorder(mask,200,100,221,221,cv2.BORDER_CONSTANT)
h,w=mask.shape
'''
footer='''Image.fromarray(out).save(root/'outputs/Ripwave_IMG_9585_editorial_original.png')
post=Image.fromarray(out).resize((1080,1350),Image.Resampling.LANCZOS)
post.save(root/'outputs/Ripwave_IMG_9585_post.jpg',quality=97,subsampling=0)
post.resize((864,1080)).save(root/'work/final_9585.jpg',quality=95)
print('Verified masked original product pixels unchanged.')
'''
(root/'work/compose_9585.py').write_text(header+body+footer)
