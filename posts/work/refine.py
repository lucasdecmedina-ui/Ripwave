from pathlib import Path
p=Path(r'C:/Users/Lucas Medina/Documents/ChatGPT/Posts ripwave/work/compose_9585.py')
s=p.read_text()
s=s.replace('mask=cv2.medianBlur(mask,7)', '''# Smooth segmentation noise along the dark rail at the wall junction.
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
mask=cv2.medianBlur(mask,7)''')
p.write_text(s)
