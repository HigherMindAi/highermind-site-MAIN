#!/usr/bin/env python3
"""Builds the card page, the contact file and the QR artwork. One source of truth: CONTACT."""
import base64, io, os, textwrap, segno

ROOT = os.path.dirname(os.path.abspath(__file__))
CARD_URL = "https://highermindai.com/card"
BOOK_URL = "https://highermindai.com/book/?utm_source=card&utm_medium=contact&utm_campaign=ladder-v6-general"
C = dict(
    first="Derek", last="Train", org="HigherMindAI", title="Founder",
    tel="+16472425800", email="highermindai@gmail.com", url="https://highermindai.com",
    city="Erin", region="ON", country="Canada",
    note=("I find what is costing a local business its calls, fix it in order, and only then turn on the ads. "
          "Local SEO, Google Business Profile and call answering for trades and auto. "
          "Take the nine minutes: highermindai.com/book"),
)

def b64(path):
    return base64.b64encode(open(path, "rb").read()).decode()

def vesc(s):
    return s.replace("\\", "\\\\").replace(",", "\\,").replace(";", chr(92)+";").replace("\n", "\\n")

def fold(line):
    # RFC 2426 folding: 75 octets, continuation lines start with one space
    out, b = [], line.encode("utf-8")
    first = True
    while b:
        n = 75 if first else 74
        chunk, b = b[:n], b[n:]
        out.append((b"" if first else b" ") + chunk)
        first = False
    return b"\r\n".join(out).decode("utf-8")

def vcard_min():
    L = ["BEGIN:VCARD", "VERSION:3.0", f"N:{C['last']};{C['first']}", f"FN:{C['first']} {C['last']}",
         f"ORG:{C['org']}", f"TITLE:{C['title']}", f"TEL;TYPE=CELL:{C['tel']}", f"EMAIL:{C['email']}",
         f"URL:{C['url']}", "END:VCARD"]
    return "\r\n".join(L) + "\r\n"

def vcard(photo=True):
    L = ["BEGIN:VCARD", "VERSION:3.0",
         f"N:{C['last']};{C['first']};;;", f"FN:{C['first']} {C['last']}",
         f"ORG:{vesc(C['org'])}", f"TITLE:{C['title']}",
         f"TEL;TYPE=CELL,VOICE:{C['tel']}",
         f"EMAIL;TYPE=INTERNET,WORK:{C['email']}",
         f"item1.URL:{C['url']}", "item1.X-ABLabel:Website",
         f"item2.URL:{BOOK_URL}", "item2.X-ABLabel:Take the nine minutes",
         f"ADR;TYPE=WORK:;;;{C['city']};{C['region']};;{C['country']}",
         f"NOTE:{vesc(C['note'])}"]
    if photo:
        L.append("PHOTO;ENCODING=b;TYPE=JPEG:" + b64(os.path.join(ROOT, "assets/derek-contact.jpg")))
    L.append("END:VCARD")
    return "\r\n".join(fold(x) for x in L) + "\r\n"

def qr_svg(data, error="q", dark="#0B1A3A"):
    q = segno.make(data, error=error, micro=False)
    buf = io.BytesIO()
    q.save(buf, kind="svg", xmldecl=False, svgns=True, nl=False, border=2, dark=dark, light=None, omitsize=True)
    return buf.getvalue().decode(), q

def main():
    os.makedirs(os.path.join(ROOT, "site/card"), exist_ok=True)
    os.makedirs(os.path.join(ROOT, "out"), exist_ok=True)
    vcf = vcard(True)
    open(os.path.join(ROOT, "site/card/derek-train.vcf"), "w", newline="").write(vcf)
    svg, q = qr_svg(CARD_URL)
    print("link QR:", q.designator, "modules", q.symbol_size(border=0)[0])
    tpl = open(os.path.join(ROOT, "card.template.html")).read()
    base = (tpl.replace("{{FONT_B64}}", b64(os.path.join(ROOT, "node_modules/@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2")))
               .replace("{{PHOTO_B64}}", b64(os.path.join(ROOT, "assets/derek-card.jpg")))
               .replace("{{QR_SVG}}", svg))
    live = base.replace("{{VCF_HREF}}", "/card/derek-train.vcf")
    prev = base.replace("{{VCF_HREF}}", "data:text/vcard;charset=utf-8;base64," + base64.b64encode(vcf.encode()).decode())
    assert "{{" not in live
    open(os.path.join(ROOT, "site/card/index.html"), "w").write(live)
    open(os.path.join(ROOT, "out/card-preview.html"), "w").write(prev)
    # QR artwork sources
    open(os.path.join(ROOT, "out/qr-link.svg"), "w").write(qr_svg(CARD_URL)[0])
    off, q2 = qr_svg(vcard_min(), error="m")
    print("offline QR:", q2.designator, "modules", q2.symbol_size(border=0)[0])
    open(os.path.join(ROOT, "out/qr-offline.svg"), "w").write(off)
    for f in ("site/card/index.html", "site/card/derek-train.vcf"):
        print(f, os.path.getsize(os.path.join(ROOT, f)))

if __name__ == "__main__":
    main()
