import asyncio, base64, os
from playwright.async_api import async_playwright
R=os.path.dirname(os.path.abspath(__file__))
font=base64.b64encode(open(R+'/node_modules/@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2','rb').read()).decode()
photo=base64.b64encode(open(R+'/assets/derek-card.jpg','rb').read()).decode()
qr_link=open(R+'/out/qr-link.svg').read(); qr_off=open(R+'/out/qr-offline.svg').read()
BASE=f'''<style>
@font-face{{font-family:Montserrat;font-weight:100 900;src:url(data:font/woff2;base64,{font}) format("woff2")}}
*{{box-sizing:border-box;margin:0}}
body{{font-family:Montserrat;color:#F4F8FB;-webkit-font-smoothing:antialiased;overflow:hidden;
 background:radial-gradient(110% 46% at 100% 0%,rgba(63,224,181,.20),transparent 60%),radial-gradient(90% 42% at 0% 100%,rgba(13,148,136,.24),transparent 62%),linear-gradient(180deg,#0F1729,#0B1A3A 48%,#080F20)}}
.grid{{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:var(--g) var(--g);-webkit-mask-image:radial-gradient(70% 55% at 50% 52%,#000,transparent 88%)}}
.wm{{display:inline-flex;align-items:center;gap:.42em;font-weight:800;letter-spacing:-.01em;color:#fff;line-height:1}}
.wm i{{width:.5em;height:.5em;border-radius:50%;background:#3FE0B5;box-shadow:0 0 .7em rgba(63,224,181,.9),0 0 1.6em rgba(63,224,181,.45)}}
.wm b{{color:#3FE0B5;font-weight:800}}
.ring{{position:absolute;border-radius:50%;border:2px solid rgba(63,224,181,.16);left:50%;transform:translate(-50%,-50%)}}
.qr{{background:#fff;border-radius:7%;padding:5.2%;box-shadow:0 0 0 3px rgba(63,224,181,.75),0 0 120px 6px rgba(63,224,181,.42),0 40px 90px -30px rgba(0,0,0,.8)}}
.qr svg{{display:block;width:100%;height:100%}}
.eb{{font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:#3FE0B5}}
</style>'''
def phone(qr, eb, head, sub, foot):
    rings=''.join(f'<div class="ring" style="top:1500px;width:{d}px;height:{d}px;opacity:{o}"></div>' for d,o in [(1180,1),(1560,.75),(1960,.5),(2400,.32),(2900,.2)])
    return f'''<!doctype html><meta charset="utf-8">{BASE}<body style="width:1290px;height:2796px;--g:86px;position:relative">
<div class="grid"></div>{rings}
<div style="position:absolute;left:0;right:0;top:860px;text-align:center"><span class="wm" style="font-size:66px"><i></i><span>HigherMind<b>AI</b></span></span></div>
<div class="eb" style="position:absolute;left:0;right:0;top:1002px;text-align:center;font-size:30px">{eb}</div>
<div class="qr" style="position:absolute;left:215px;top:1070px;width:860px;height:860px">{qr}</div>
<div style="position:absolute;left:0;right:0;top:2010px;text-align:center">
 <div style="font-size:104px;font-weight:800;letter-spacing:-.03em;line-height:1">{head}</div>
 <div style="font-size:44px;font-weight:700;margin-top:26px;color:#3FE0B5;letter-spacing:-.01em">{sub}</div>
 <div style="font-size:31px;font-weight:600;margin-top:34px;color:#8FA2BD;letter-spacing:.06em">{foot}</div>
</div></body>'''
def square(qr):
    return f'''<!doctype html><meta charset="utf-8">{BASE}<body style="width:1600px;height:1600px;--g:80px;position:relative">
<div class="grid"></div>
<div class="ring" style="top:770px;width:1250px;height:1250px"></div><div class="ring" style="top:770px;width:1700px;height:1700px;opacity:.6"></div>
<div style="position:absolute;left:0;right:0;top:92px;text-align:center"><span class="wm" style="font-size:60px"><i></i><span>HigherMind<b>AI</b></span></span></div>
<div class="qr" style="position:absolute;left:350px;top:230px;width:900px;height:900px">{qr}</div>
<div style="position:absolute;left:0;right:0;top:1206px;text-align:center">
 <div style="font-size:96px;font-weight:800;letter-spacing:-.03em;line-height:1">Derek Train</div>
 <div style="font-size:42px;font-weight:700;margin-top:24px;color:#3FE0B5">I do not carry paper.</div>
 <div style="font-size:30px;font-weight:600;margin-top:30px;color:#8FA2BD;letter-spacing:.06em">647-242-5800 &nbsp;&middot;&nbsp; highermindai.com/card</div>
</div></body>'''
def og():
    return f'''<!doctype html><meta charset="utf-8">{BASE}<body style="width:1200px;height:630px;--g:60px;position:relative">
<div class="grid" style="-webkit-mask-image:radial-gradient(70% 90% at 30% 50%,#000,transparent 90%)"></div>
<div style="position:absolute;right:0;top:0;width:560px;height:630px;background:url(data:image/jpeg;base64,{photo}) center 8%/cover;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 34%,#000 100%)"></div>
<div style="position:absolute;right:0;top:0;width:560px;height:630px;background:linear-gradient(180deg,rgba(11,26,58,0) 55%,rgba(8,15,32,.85) 100%)"></div>
<div style="position:absolute;left:72px;top:70px"><span class="wm" style="font-size:36px"><i></i><span>HigherMind<b>AI</b></span></span></div>
<div style="position:absolute;left:72px;top:206px;width:640px">
 <div style="font-size:84px;font-weight:800;letter-spacing:-.035em;line-height:1.02">I do not carry <span style="color:#3FE0B5">paper.</span></div>
 <div style="font-size:30px;font-weight:600;margin-top:30px;color:#C9D6E6">Save me to your phone. No typing.</div>
</div>
<div style="position:absolute;left:72px;bottom:66px;font-size:26px;font-weight:700">Derek Train <span style="color:#8FA2BD;font-weight:600">&nbsp;&middot;&nbsp; Founder &nbsp;&middot;&nbsp; 647-242-5800</span></div>
<div style="position:absolute;left:0;top:0;width:1200px;height:5px;background:linear-gradient(90deg,transparent,#3FE0B5,transparent)"></div>
</body>'''
JOBS=[
 ('out/HigherMindAI_Card_QR_phone.png',1290,2796,phone(qr_link,'Point your camera here','Derek Train','I do not carry paper.','647-242-5800 &nbsp;&middot;&nbsp; highermindai.com/card'),'png'),
 ('out/HigherMindAI_Card_QR_no_signal.png',1290,2796,phone(qr_off,'No signal - scan this one','Derek Train','Straight into your contacts.','Works with no internet &nbsp;&middot;&nbsp; 647-242-5800'),'png'),
 ('out/HigherMindAI_Card_QR_square.png',1600,1600,square(qr_link),'png'),
 ('site/card/og.jpg',1200,630,og(),'jpeg'),
]
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        for path,w,h,html,kind in JOBS:
            pg=await b.new_page(viewport={'width':w,'height':h})
            await pg.set_content(html); await pg.wait_for_timeout(400)
            kw={'quality':88} if kind=='jpeg' else {}
            await pg.screenshot(path=os.path.join(R,path),type=kind,**kw); await pg.close()
            print(path, os.path.getsize(os.path.join(R,path)))
        await b.close()
asyncio.run(main())
