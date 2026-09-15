from PIL import Image
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
# Smooth segmentation noise along the dark rail at the wall junction.
ys=np.arange(3040,3390)
rights=np.array([np.flatnonzero(mask[j])[-1] for j in ys])
fit=np.polyval(np.polyfit(ys-3200,rights,3),ys-3200)
for j,r,f in zip(ys,rights,fit):
 weight=min(1,(j-3040)/45,(3389-j)/45)
 end=round(r*(1-weight)+f*weight)
 mask[j,r+1:]=0
 mask[j,min(end,r):]=0
 start=np.flatnonzero(mask[j])[0]
 mask[j,start:end+1]=255
mask=cv2.medianBlur(mask,7)
im=cv2.copyMakeBorder(im,200,100,221,221,cv2.BORDER_CONSTANT)
mask=cv2.copyMakeBorder(mask,200,100,221,221,cv2.BORDER_CONSTANT)
h,w=mask.shape
rng=np.random.default_rng(2026)
yy,xx=np.mgrid[0:h,0:w].astype(np.float32); x=xx/w; y=yy/h
# Quiet plaster wall and matte cement floor, lit from the upper left.
def texture(rows,cols,sigma):
    a=rng.normal(0,1,(rows,cols)).astype(np.float32)
    a=cv2.resize(a,(w,h),interpolation=cv2.INTER_CUBIC)
    return a*sigma
tex=texture(20,15,1.2)+texture(180,135,0.38)+rng.normal(0,0.35,(h,w)).astype(np.float32)
light=9*(1-x)-6*y+4*np.exp(-((x-.24)**2+(y-.2)**2)/.4)
base=np.stack([216+light+tex,204+light+tex,184+light+tex],axis=2)
line=.817+.018*x
floor=y>line
ft=texture(70,60,1.0)+texture(400,350,.45)
fl=6*(y-.82)-4*x+ft
for c,v in enumerate([194,183,166]): base[:,:,c]=np.where(floor,v+fl,base[:,:,c])
# Broad, diffuse window light across warm plaster.
u=x+.48*y
v=y-.13*x
win=(((u>.02)&(u<.31)|(u>.335)&(u<.65))&(v>.07)&(v<.61)).astype(np.float32)
win=cv2.GaussianBlur(win,(0,0),w*.014)
base += (win*13*(~floor))[:,:,None]
# Soft, restrained wall/floor junction.
joint=np.exp(-((y-line)/.0012)**2)*5
base-=joint[:,:,None]
# Cast shadow follows the photographed outline and light direction.
small=cv2.resize(mask,(w//4,h//4)).astype(np.float32)/255
shadow=cv2.warpAffine(small,np.float32([[1,0,12],[0,1,3]]),(w//4,h//4))
shadow=cv2.GaussianBlur(shadow,(0,0),9)
shadow=cv2.resize(shadow,(w,h))*.15
shadow*=np.where(floor,.4,1)
contact=.26*np.exp(-(((x-.505)/.09)**2+((y-.925)/.007)**2))
cast=.13*np.exp(-(((x-.56)/.13)**2+((y-.921)/.016)**2))
base*= (1-shadow-contact-cast)[:,:,None]
# Feather only the silhouette boundary at less than one source pixel.
alpha=cv2.GaussianBlur(mask.astype(np.float32)/255,(0,0),.55)
alpha[mask==255]=1
out=np.clip(im.astype(np.float32)*alpha[:,:,None]+base*(1-alpha[:,:,None]),0,255).round().astype(np.uint8)
assert np.array_equal(out[mask==255],im[mask==255])
Image.fromarray(out).save(root/'outputs/Ripwave_IMG_9585_editorial_original.png')
post=Image.fromarray(out).resize((1080,1350),Image.Resampling.LANCZOS)
post.save(root/'outputs/Ripwave_IMG_9585_post.jpg',quality=97,subsampling=0)
post.resize((864,1080)).save(root/'work/final_9585.jpg',quality=95)
print('Verified masked original product pixels unchanged.')

