#!/usr/bin/env python3
"""
HigherMindAI - v15.3 "Found and counted" acceptance test.

Run after `npm run build`, beside tools/verify_v15.py:

    python3 tools/verify_found.py            # IDs optional (dormant build)
    python3 tools/verify_found.py --expect-ga G-XXXXXXXXXX

Checks the SEO and measurement layer, not the design:
  1. No sitemap URL is shadowed by a redirect (the bug that killed the ten
     Headwaters town pages on 22-23 September 2026). Simulates Netlify's
     first-match on public/_redirects, splats included.
  2. Every legacy URL we know was indexed still lands on a real page (one hop).
  3. Every sitemap URL was prerendered, has one canonical pointing at itself,
     a title <= 70 characters and a meta description <= 160.
  4. Every JSON-LD block parses; no Offer description ends mid-sentence.
  5. The tracking block is on every page when an ID is set, and nowhere when
     it is not. The verification tags match the IDs.
  6. The IndexNow key file is published and matches the plugin.
"""
import json
import os
import re
import sys
from html import unescape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, 'dist')
FAILS = []


def fail(msg):
    FAILS.append(msg)


def load_redirects():
    rules = []
    for line in open(os.path.join(ROOT, 'public', '_redirects')):
        line = line.split('#', 1)[0].strip()
        if not line:
            continue
        parts = line.split()
        if len(parts) >= 3:
            rules.append((parts[0], parts[1], parts[2]))
    return rules


def match(rule_from, path):
    if rule_from.endswith('/*'):
        base = rule_from[:-2]
        if path == base or path.startswith(base + '/'):
            return path[len(base) + 1:] if path.startswith(base + '/') else ''
        return None
    if rule_from == '/*':
        return path[1:]
    return '' if path == rule_from else None


def resolve(path, rules, static):
    """One Netlify hop: forced rules first-match; non-forced only if no file."""
    for frm, to, status in rules:
        splat = match(frm, path)
        if splat is None:
            continue
        forced = status.endswith('!')
        if not forced and path in static:
            return path, 200
        if not forced and not path.endswith('/') and path + '/' in static:
            return path + '/', 301  # a real file wins over an unforced rule
        return to.replace(':splat', splat), int(status.rstrip('!'))
    if path in static:
        return path, 200
    if not path.endswith('/') and path + '/' in static:
        return path + '/', 301  # Netlify pretty URLs add the slash
    return path, 404


def sitemap_paths():
    xml = open(os.path.join(ROOT, 'public', 'sitemap.xml')).read()
    return [re.sub(r'^https://highermindai\.com', '', u) for u in re.findall(r'<loc>([^<]+)</loc>', xml)]


def main():
    expect_ga = ''
    if '--expect-ga' in sys.argv:
        expect_ga = sys.argv[sys.argv.index('--expect-ga') + 1]

    rules = load_redirects()
    paths = sitemap_paths()
    static = set(paths)

    # 1 - nothing in the sitemap is redirected away
    for p in paths:
        dest, code = resolve(p, rules, static)
        if dest != p or code != 200:
            fail(f'sitemap URL {p} is shadowed: -> {dest} ({code})')

    # 2 - legacy URLs land on a live page in one hop
    legacy = [
        '/local-seo/bolton/', '/local-seo/brampton/', '/local-seo/mississauga/', '/local-seo/vaughan/',
        '/local-seo/oakville/', '/local-seo/newmarket/', '/local-seo/moncton/', '/services/', '/the-pin/',
        '/the-read', '/the-keystone/', '/roofing/', '/arborists/', '/law-firm-seo/', '/the-watershed/',
        '/answers/what-is-an-ai-receptionist/', '/portfolio/', '/the-mention/',
    ]
    for p in legacy:
        dest, code = resolve(p, rules, static)
        if code == 404:
            fail(f'legacy URL {p} is a 404')
            continue
        if dest != p:
            d2, c2 = resolve(dest, rules, static)
            if c2 != 200 or d2 != dest:
                fail(f'legacy URL {p} -> {dest} does not land on a live page ({d2} {c2})')
    if resolve('/the-pin/', rules, static)[0] != '/how-it-works/':
        fail('/the-pin/ must land on /how-it-works/ (The Pin is step one for everybody)')

    # 3, 4, 5 - every prerendered page
    ga_seen = 0
    for p in paths:
        f = os.path.join(DIST, p.strip('/'), 'index.html') if p != '/' else os.path.join(DIST, 'index.html')
        if not os.path.exists(f):
            fail(f'{p} was not prerendered')
            continue
        h = open(f, encoding='utf-8').read()
        canon = re.findall(r'<link rel="canonical" href="([^"]+)"', h)
        if canon != ['https://highermindai.com' + p]:
            fail(f'{p} canonical is {canon}')
        t = re.search(r'<title>(.*?)</title>', h, re.S)
        title = unescape(t.group(1)) if t else ''
        if not title or len(title) > 70:
            fail(f'{p} title length {len(title)}: {title}')
        d = re.search(r'<meta name="description" content="([^"]*)"', h)
        desc = unescape(d.group(1)) if d else ''
        if not desc or len(desc) > 160:
            fail(f'{p} meta description length {len(desc)}')
        for m in re.finditer(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', h, re.S):
            try:
                j = json.loads(m.group(1))
            except Exception as e:  # noqa: BLE001
                fail(f'{p} JSON-LD does not parse: {e}')
                continue
            for desc_ in re.findall(r'"description":\s*"([^"]*)"', json.dumps(j)):
                if desc_.rstrip().endswith(':'):
                    fail(f'{p} JSON-LD description ends mid-sentence: {desc_[:60]}')
        has_ga = 'googletagmanager.com/gtag/js?id=' in h
        if has_ga:
            ga_seen += 1
            if expect_ga and f'id={expect_ga}' not in h:
                fail(f'{p} carries a different GA4 ID than {expect_ga}')
        elif expect_ga:
            fail(f'{p} is missing the GA4 tag')
        if h.count('googletagmanager.com/gtag/js') > 1:
            fail(f'{p} loads gtag twice')
    if not expect_ga and ga_seen not in (0, len(paths)):
        fail(f'GA4 tag on {ga_seen} of {len(paths)} pages - it is all or nothing')

    # 6 - IndexNow key
    plug = open(os.path.join(ROOT, 'plugins', 'indexnow', 'index.js')).read()
    key = re.search(r"const KEY = '([0-9a-f]{32})'", plug)
    if not key:
        fail('IndexNow plugin has no key')
    else:
        kf = os.path.join(DIST, key.group(1) + '.txt')
        if not os.path.exists(kf) or open(kf).read().strip() != key.group(1):
            fail('IndexNow key file missing from dist or does not match the plugin')

    print(f'checked {len(paths)} sitemap URLs, {len(legacy)} legacy URLs, GA4 on {ga_seen} pages')
    if FAILS:
        print('FAIL')
        for x in FAILS:
            print('  -', x)
        sys.exit(1)
    print('PASS')


if __name__ == '__main__':
    main()
