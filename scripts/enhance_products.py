import cv2, numpy as np, os
src='public/img'; out='public/img/products'
# slug, sheet, crop(x,y,w,h), mode: pad = white studio shot, fill = photo with its own background
P=[('cylindrical-cans','product_cylcans.jpg',(135,48,215,240),'pad'),
   ('sanitary-cans','product_sancans.jpg',(100,62,320,190),'pad'),
   ('rectangular-cans','product_rectcans.jpg',(122,12,228,150),'fill'),
   ('pails-and-drums','product_pail.jpg',(135,10,240,195),'fill'),
   ('seamless-and-brilliantine','product_seambrill.jpg',(100,10,268,240),'fill'),
   ('household-plastics','product_plasthse.jpg',(170,144,142,116),'fill'),
   ('industrial-plastics','product_plastindustl.jpg',(145,10,135,145),'pad'),
   ('ropp-closures','product_ropp.jpg',(115,10,170,110),'pad'),
   ('screw-caps','product_scrwcaps.jpg',(122,12,210,150),'fill'),
   ('stationery','product_stationery.jpg',(145,20,150,120),'pad'),
   ('household-miscellaneous','product_plasthse.jpg',(170,15,140,115),'pad'),
   ('advertising','product_advert.jpg',(85,10,280,185),'fill')]
W,H=1200,900
for slug,f,(x,y,w,h),mode in P:
    im=cv2.imread(os.path.join(src,f))[y:y+h,x:x+w]
    im=cv2.fastNlMeansDenoisingColored(im,None,5,5,5,15)          # soften JPEG blocking
    s=4; im=cv2.resize(im,None,fx=s,fy=s,interpolation=cv2.INTER_LANCZOS4)
    im=cv2.bilateralFilter(im,7,28,7)                              # smooth flats, keep edges
    blur=cv2.GaussianBlur(im,(0,0),2.2); im=cv2.addWeighted(im,1.55,blur,-0.55,0)  # unsharp
    hh,ww=im.shape[:2]
    if mode=='pad':
        k=min(W*0.86/ww,H*0.86/hh); im=cv2.resize(im,(int(ww*k),int(hh*k)),interpolation=cv2.INTER_AREA)
        # push near-white background to pure white so it merges with the card
        g=cv2.cvtColor(im,cv2.COLOR_BGR2GRAY); im[g>236]=(255,255,255)
        canvas=np.full((H,W,3),255,np.uint8); hh,ww=im.shape[:2]
        oy,ox=(H-hh)//2,(W-ww)//2; canvas[oy:oy+hh,ox:ox+ww]=im; im=canvas
    else:
        k=max(W/ww,H/hh); im=cv2.resize(im,(int(ww*k)+1,int(hh*k)+1),interpolation=cv2.INTER_CUBIC)
        hh,ww=im.shape[:2]; oy,ox=(hh-H)//2,(ww-W)//2; im=im[oy:oy+H,ox:ox+W]
    cv2.imwrite(os.path.join(out,slug+'.jpg'),im,[cv2.IMWRITE_JPEG_QUALITY,88])
# contact sheet
tiles=[cv2.resize(cv2.imread(os.path.join(out,p[0]+'.jpg')),(400,300)) for p in P]
rows=[np.hstack(tiles[i:i+4]) for i in range(0,12,4)]
cv2.imwrite(os.environ['SHEET'],np.vstack(rows),[cv2.IMWRITE_JPEG_QUALITY,85]); print('done')
