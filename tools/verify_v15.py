#!/usr/bin/env python3
"""v15 ship check - HANDOFF v6.0 section 9 + THE SPINE section 12, run on the BUILT site.
Usage: npm run build && python3 tools/verify_v15.py   (exits non-zero on any failure)"""
import re, sys, pathlib, html
ROOT = pathlib.Path(__file__).resolve().parent.parent / 'dist'
fails = []
def text_of(h):
    h = re.sub(r'<script\b[^>]*>.*?</script>', ' ', h, flags=re.S)
    h = re.sub(r'<style\b[^>]*>.*?</style>', ' ', h, flags=re.S)
    h = re.sub(r'<!--.*?-->', ' ', h, flags=re.S)
    t = re.sub(r'<[^>]+>', ' ', h)
    return html.unescape(re.sub(r'\s+', ' ', t))
def attrs_of(h):
    return ' '.join(re.findall(r'(?:content|alt|title|aria-label)="([^"]*)"', h))
pages = sorted(ROOT.rglob('*.html'))
for p in pages:
    rel = '/' + str(p.relative_to(ROOT)).replace('index.html', '')
    raw = p.read_text()
    vis = (text_of(raw) + ' ' + html.unescape(attrs_of(raw))).replace('HigherMind AI', 'HigherMindAI')
    ld = ' '.join(re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', raw, flags=re.S))
    allt = vis + ' ' + ld
    if re.search(r'\$\s?\d', allt): fails.append((rel, 'price figure ($)'))
    if re.search('[–—]', allt) or '&mdash;' in raw or '&ndash;' in raw: fails.append((rel, 'en/em dash'))
    v2 = vis.replace('then we turn the tap on', '')
    for w in re.findall(r'\b(we|We|our|Our|us)\b', v2):
        ctx = re.search(r'.{0,40}\b' + w + r'\b.{0,40}', v2).group(0)
        fails.append((rel, f'first-person plural "{w}": ...{ctx}...'))
        break
    if re.search(r'\baudit', allt, re.I): fails.append((rel, 'the word audit'))
    if rel != '/ai-search-optimization/':
        m = re.search(r'.{0,30}\b(AI|chatbot|chatbots|bot|bots|automation|automated|automatically)\b.{0,30}', vis)
        if m: fails.append((rel, f'banned word: ...{m.group(0)}...'))
    for bad in ['Book a Call', 'Book a call', 'Learn more', 'Get a quote', 'See every line', 'Free quote', 'Book my call']:
        if bad in vis: fails.append((rel, f'second CTA "{bad}"'))
    if rel not in ('/404.html',) and 'Take the nine minutes' not in vis:
        fails.append((rel, 'no "Take the nine minutes"'))
    if re.search(r'\b24/7\b|within (?:\d+|sixty|thirty) seconds', vis): fails.append((rel, 'response-time claim'))
    if 'Rank Lock:' in vis and 'first page on the agreed term inside sixty days' not in vis and 'first page on the agreed' not in vis:
        fails.append((rel, 'Rank Lock without its exact words'))
home = text_of((ROOT / 'index.html').read_text())
for must in ['The Pin', 'The Foundation', 'The Storefront', 'Where most start', 'Three steps, in order', 'The Read', 'The Tap']:
    if must not in home: fails.append(('/', f'home missing "{must}"'))
print(f'checked {len(pages)} pages')
for r, m in fails: print(f'FAIL {r}: {m}')
print('PASS' if not fails else f'{len(fails)} failures')
sys.exit(1 if fails else 0)
