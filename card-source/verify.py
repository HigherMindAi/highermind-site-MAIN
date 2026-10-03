import asyncio, re, base64, io, urllib.parse, sys
import cv2, numpy as np
from PIL import Image
from playwright.async_api import async_playwright
ok=True
def check(name, cond, detail=''):
    global ok
    print(('PASS ' if cond else 'FAIL ')+name+(' - '+str(detail) if detail else ''))
    ok = ok and bool(cond)

# 1. QR decode
det=cv2.QRCodeDetector()
def decode(path, crop=None):
    im=cv2.imread(path)
    if crop: x,y,w,h=crop; im=im[y:y+h,x:x+w]
    val,_,_=det.detectAndDecode(im)
    if not val:
        g=cv2.cvtColor(im,cv2.COLOR_BGR2GRAY); val,_,_=det.detectAndDecode(cv2.resize(g,None,fx=.5,fy=.5))
    return val
for f in ['out/HigherMindAI_Card_QR_phone.png','out/HigherMindAI_Card_QR_square.png']:
    v=decode(f); check('QR decodes: '+f, v=='https://highermindai.com/card', v)
v=decode('out/HigherMindAI_Card_QR_no_signal.png')
check('no-signal QR is a contact', v.startswith('BEGIN:VCARD') and 'TEL;TYPE=CELL:+16472425800' in v and 'highermindai@gmail.com' in v and 'URL:https://highermindai.com' in v, v[:40].replace('\r\n',' | '))

# 2. vCard
raw=open('site/card/derek-train.vcf','rb').read()
check('vcf uses CRLF only', b'\n' not in raw.replace(b'\r\n',b''))
txt=raw.decode().replace('\r\n ','')  # unfold
lines=txt.strip().split('\r\n')
d={}
for l in lines:
    k,_,val=l.partition(':'); d.setdefault(k,val)
check('vcf frame', lines[0]=='BEGIN:VCARD' and lines[-1]=='END:VCARD' and d.get('VERSION')=='3.0')
check('vcf name', d.get('FN')=='Derek Train' and d.get('N')=='Train;Derek;;;')
check('vcf org/title', d.get('ORG')=='HigherMindAI' and d.get('TITLE')=='Founder')
check('vcf phone', d.get('TEL;TYPE=CELL,VOICE')=='+16472425800')
check('vcf email', d.get('EMAIL;TYPE=INTERNET,WORK')=='highermindai@gmail.com')
check('vcf website', d.get('item1.URL')=='https://highermindai.com')
check('vcf booking link carries UTM', 'utm_source=card' in d.get('item2.URL','') and '/book/' in d.get('item2.URL',''))
check('vcf no street address', d.get('ADR;TYPE=WORK')==';;;Erin;ON;;Canada')
ph=Image.open(io.BytesIO(base64.b64decode(d['PHOTO;ENCODING=b;TYPE=JPEG'])))
check('vcf photo decodes', ph.size==(400,400), ph.size)
check('vcf max line 75 octets', max(len(x) for x in raw.split(b'\r\n'))<=75)

# 3. copy rules on the shipped page
html=open('site/card/index.html').read()
vis=re.sub(r'<style.*?</style>|<script.*?</script>|<svg.*?</svg>','',html,flags=re.S)
vis=re.sub(r'<[^>]+>',' ',vis)
check('no en/em dash anywhere', '–' not in html and '—' not in html)
check('no we/our/us', not re.search(r"\b(we|our|us|we're|we'll)\b", vis, re.I), re.findall(r"\b(we|our|us)\b", vis, re.I))
check('no price figure', '$' not in vis)
nv=re.sub(r'HigherMind\s*AI','',vis)
check('no never-say words', not re.search(r'\b(AI|chatbot|bot|automation|audit|guaranteed|leads?)\b', nv, re.I), re.findall(r'\b(AI|chatbot|bot|automation|audit|guaranteed|leads?)\b', nv, re.I))
check('no Skip intro', 'skip intro' not in html.lower())
links=re.findall(r'href="(https://highermindai\.com[^"]*)"',html)
check('every site link carries the UTM', all('utm_source=card' in l for l in links if '/card/' not in l), links)
check('save button points at the hosted contact file', 'id="save" href="/card/derek-train.vcf"' in html)
check('external requests: none but the site GA4 tag', not re.search(r'(src|href)="https?://(?!highermindai\.com|wa\.me|www\.googletagmanager\.com)',html))

# 4. behaviour + layout
async def run():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        UA='Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
        # layout at many widths
        for w,h in [(320,568),(360,640),(375,553),(390,664),(414,720),(430,739),(768,1024),(1024,768),(1280,800),(1440,900),(1920,1080)]:
            ctx=await b.new_context(viewport={'width':w,'height':h},device_scale_factor=1,is_mobile=w<800,has_touch=w<800,user_agent=UA if w<800 else None)
            pg=await ctx.new_page(); errs=[]
            pg.on('pageerror',lambda e:errs.append(str(e)))
            await pg.goto('file:///home/claude/card-build/out/card-preview.html'); await pg.wait_for_timeout(2600)
            sw=await pg.evaluate('document.documentElement.scrollWidth')
            spill=await pg.evaluate('''()=>{const out=[];document.querySelectorAll('.wrap *, footer *').forEach(el=>{
               if(el.closest('.card')&&!el.closest('.c-bot,.c-top,.b-in'))return; if(el.classList.contains('ghostn'))return;
               if(el.scrollWidth>el.clientWidth+1&&getComputedStyle(el).display!=='inline'&&el.clientWidth>0&&!['svg','path','circle','rect'].includes(el.tagName.toLowerCase()))out.push(el.tagName+'.'+el.className+':'+el.scrollWidth+'>'+el.clientWidth)});return out}''')
            sb=await pg.evaluate("document.getElementById('save').getBoundingClientRect().bottom")
            # overlap check inside the card front: name block must not run under the top row
            ov=await pg.evaluate("(()=>{const a=document.querySelector('.c-top').getBoundingClientRect(),c=document.querySelector('.c-bot').getBoundingClientRect();return c.top-a.bottom})()")
            check(f'layout {w}x{h}', sw<=w and not spill and not errs and ov>60, f'scrollW={sw} spill={spill} errs={errs} saveBottom={sb:.0f}/{h} gap={ov:.0f}')
            await ctx.close()
        # flow
        ctx=await b.new_context(viewport={'width':390,'height':664},device_scale_factor=2,is_mobile=True,has_touch=True,user_agent=UA)
        pg=await ctx.new_page()
        await pg.goto('file:///home/claude/card-build/out/card-preview.html'); await pg.wait_for_timeout(2600)
        check('boot clears on its own', await pg.evaluate("document.documentElement.classList.contains('ready') && getComputedStyle(document.getElementById('boot')).visibility==='hidden'"))
        check('page scrolls during/after intro', await pg.evaluate("(()=>{window.scrollTo(0,300);return window.scrollY>250})()"))
        await pg.evaluate('window.scrollTo(0,0)'); await pg.wait_for_timeout(300)
        r=await pg.evaluate("(()=>{const r=document.getElementById('card').getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2]})()")
        await pg.touchscreen.tap(r[0],r[1]); await pg.wait_for_timeout(1400)
        ry=await pg.evaluate("parseFloat(document.getElementById('card').style.getPropertyValue('--ry'))")
        check('tap turns the card over', 150<ry<210, ry)
        await pg.screenshot(path='out/back-check.png')
        v=decode('out/back-check.png'); check('QR on the back of the card decodes from a screenshot', v=='https://highermindai.com/card', v)
        await pg.touchscreen.tap(r[0],r[1]-120); await pg.wait_for_timeout(1400)
        # v1.1: a second tap keeps turning the same way (ry ends near 360, not 0), so test the face shown, not the angle
        back=await pg.evaluate("document.getElementById('card').classList.contains('is-back')")
        check('tap turns it back', not back, 'is-back' if back else 'front')
        # form guard + message
        await pg.evaluate("document.getElementById('ff').scrollIntoView()"); await pg.wait_for_timeout(600)
        await pg.evaluate("document.getElementById('wa').click()")
        check('empty business name is stopped', await pg.evaluate("document.getElementById('ff').classList.contains('shake') && document.activeElement.id==='biz'"))
        await pg.fill('#biz',"Kowalski & Sons <Reno>"); await pg.fill('#town','Orangeville')
        bub=await pg.inner_text('#bubble'); href=await pg.get_attribute('#wa','href')
        msg=urllib.parse.unquote(href.split('text=')[1])
        check('message bubble mirrors the inputs', 'Kowalski & Sons <Reno>' in bub and 'Orangeville' in bub, bub.replace('\n',' / '))
        check('WhatsApp link carries the message', href.startswith('https://wa.me/16472425800?text=') and msg=='Derek - I have your card. Send me my finding.\nBusiness: Kowalski & Sons <Reno>\nTown: Orangeville', msg.replace('\n',' / '))
        check('input is escaped in the bubble', await pg.evaluate("document.querySelectorAll('#bubble reno').length===0"))
        dl=await pg.evaluate("(window.dataLayer||[]).map(e=>e.event)")
        check('events counted', 'card_flip' in dl, dl)
        await pg.screenshot(path='out/form-check.png')
        await ctx.close()
        # reduced motion
        ctx=await b.new_context(viewport={'width':390,'height':664},reduced_motion='reduce',is_mobile=True,has_touch=True,user_agent=UA)
        pg=await ctx.new_page(); await pg.goto('file:///home/claude/card-build/out/card-preview.html'); await pg.wait_for_timeout(500)
        check('reduced motion: no intro, card shown', await pg.evaluate("document.documentElement.classList.contains('ready')"))
        await pg.touchscreen.tap(195,300); await pg.wait_for_timeout(300)
        check('reduced motion: card still turns', abs(await pg.evaluate("parseFloat(document.getElementById('card').style.getPropertyValue('--ry'))")-180)<1)
        await ctx.close()
        # no JS
        ctx=await b.new_context(viewport={'width':390,'height':664},java_script_enabled=False)
        pg=await ctx.new_page(); await pg.goto('file:///home/claude/card-build/out/card-preview.html'); await pg.wait_for_timeout(300)
        check('no JavaScript: card and save button still visible', await pg.locator('#save').is_visible() and await pg.locator('.name').is_visible())
        await b.close()
asyncio.run(run())
print('\nALL PASS' if ok else '\nFAILURES ABOVE'); sys.exit(0 if ok else 1)
