from PIL import Image
import numpy as np, cv2
from pathlib import Path
root=Path(r'C:/Users/Lucas Medina/Documents/ChatGPT/Posts ripwave')
im=np.array(Image.open(root/'work/original_9585.png')); h,w=im.shape[:2]; s=w/900
p=np.array([(445,13),(470,32),(498,72),(526,126),(550,189),(572,273),(591,380),(604,494),(607,623),(603,717),(592,824),(578,907),(569,950),(556,994),(540,1036),(522,1074),(502,1103),(478,1124),(455,1132),(433,1128),(413,1117),(391,1094),(372,1064),(353,1026),(340,983),(330,940),(321,894),(308,810),(297,715),(292,609),(293,502),(300,405),(313,305),(331,217),(356,139),(386,78),(418,35)],np.float32)*s
seed=np.zeros((h,w),np.uint8); cv2.fillPoly(seed,[p.astype(np.int32)],255)
# Refine the silhouette using local image evidence around the traced outline.
small=cv2.resize(im,(w//2,h//2)); sm=cv2.resize(seed,(w//2,h//2),interpolation=cv2.INTER_NEAREST)
k=np.ones((13,13),np.uint8)
er=cv2.erode(sm,k); di=cv2.dilate(sm,k)
gc=np.full(sm.shape,cv2.GC_BGD,np.uint8); gc[di>0]=cv2.GC_PR_BGD; gc[sm>0]=cv2.GC_PR_FGD; gc[er>0]=cv2.GC_FGD
cv2.grabCut(small,gc,None,np.zeros((1,65),np.float64),np.zeros((1,65),np.float64),5,cv2.GC_INIT_WITH_MASK)
m=np.isin(gc,[1,3]).astype(np.uint8)*255
mask=cv2.resize(m,(w,h),interpolation=cv2.INTER_NEAREST)
# Refine at original resolution in a narrow boundary corridor.
er=cv2.erode(mask,np.ones((5,5),np.uint8)); di=cv2.dilate(mask,np.ones((5,5),np.uint8))
gc=np.full(mask.shape,cv2.GC_BGD,np.uint8); gc[di>0]=cv2.GC_PR_BGD; gc[mask>0]=cv2.GC_PR_FGD; gc[er>0]=cv2.GC_FGD
cv2.grabCut(im,gc,None,np.zeros((1,65),np.float64),np.zeros((1,65),np.float64),2,cv2.GC_INIT_WITH_MASK)
mask=np.isin(gc,[1,3]).astype(np.uint8)*255
for y in range(h):
 xs=np.flatnonzero(mask[y]);
 if len(xs): mask[y,xs[0]:xs[-1]+1]=255
Image.fromarray(mask).save(root/'work/mask_9585.png')
check=im.copy(); check[mask==0]=[215,204,185]
Image.fromarray(check).resize((900,1200)).save(root/'work/check_9585.png')
