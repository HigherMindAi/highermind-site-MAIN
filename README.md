# HigherMindAI — website (React + Vite + TypeScript)

The premium static build, ported into your Bolt stack. Pixel-faithful to the
approved design, now component-driven and route-based. Lean premium: no
modals, no newsletter, no Supabase. One contact form, wired to Netlify Forms.

## Run it

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # type-check, build, then PRERENDER every route to static HTML
npm run preview  # serve the production build locally
```

`npm run build` does three things: builds the client, builds a server bundle,
then prerenders every route in the sitemap to its own static `index.html` with
title, meta, canonical, and JSON-LD baked in. The client then hydrates that HTML
in the browser. No headless browser is involved, so the build runs the same in
Bolt and on Netlify.

## Import to Bolt

Either push this folder to a GitHub repo and use **Import from GitHub**, or drop
the files straight into a Bolt project. Then `npm install` and `npm run dev`.
The old template pages (CryptoProjects, WebDesign, generic AI services) and the
Spline / tsParticles / Supabase dependencies are gone by design.

## Deploy (Netlify)

`netlify.toml` is set: build `npm run build`, publish `dist`, with a SPA
fallback so every route serves the app shell and React Router takes over.
Point your Squarespace DNS at the Netlify site as before.

## Structure

```
src/
  lib/
    site.ts        NAP + brand constants (single source of truth)
    services.ts    service ladder + per-service page copy
    cities.ts      10 city pages + per-city FAQ logic
    schema.ts      JSON-LD builders (LocalBusiness / Service / FAQ / breadcrumbs)
    head.tsx       SEO head context + server-side head renderer
    useReveal.ts   scroll-reveal hook
  components/
    Layout.tsx        nav, footer, scroll/hash manager, quiet depth background
    LocalPackCard.tsx the hero map-pack demo (animates you to #1)
    Nav / Footer / FAQ / CTAStrip / ContactForm / Seo / Icons / ServiceLadder
  pages/
    Home, ServicesHub, ServicePage, LocationsHub, LocationPage, Book, NotFound
  main.tsx           client entry (hydrates prerendered HTML)
  entry-server.tsx   server entry (renders a route to HTML for prerender)
public/  og.png, sitemap.xml, robots.txt, _redirects
index.css   the design system (Montserrat display, Hanken body, navy + teal)
prerender.js  build-time: renders every sitemap route to static HTML
```

## What I added on top of the faithful port

- **Local-pack hero tells the story.** On scroll-in, "Your Business" starts
  buried at #3 and rises to #1 with a smooth FLIP reorder. Thumbnails carry
  storefront glyphs; your card's thumbnail glows teal. Respects reduced-motion.
- **Montserrat** display type (strong, professional) with Hanken Grotesk body.
- **Quiet static depth** behind the page (soft fixed gradient) — no animation.
- **Glass offer cards** — frosted panels with a teal accent on the guarantee.
- **Nav elevates on scroll**, buttery anchor scrolling, scroll-reveals.
- **Live map on the Erin page** using your address.
- **Dedicated `/book` page** for your GBP appointment link.
- **Brand-accurate og.png**.

## Go-live checklist

1. **og.png** — done. Swap if you want a different headline.
2. **Booking page** — `/book/` is a focused page with the contact form. Use
   `https://highermindai.com/book/` as the appointment/booking link in your
   Google Business Profile. In-page CTAs still scroll to `#contact` on the home
   page; both post to the same Netlify form.
3. **Canonical email** — locked to `derek@highermindai.com` everywhere.
4. **Erin map** — a working Google Maps embed using 185 Gear Ave is live. Once
   your GBP is verified, swap it for the official "Embed a map" place URL from
   your Business Profile (one line in `LocationPage.tsx`).

## SEO

Every route ships as fully-rendered static HTML — its own title, meta
description, canonical, Open Graph/Twitter tags, and JSON-LD (LocalBusiness /
Service / FAQ / breadcrumbs) are baked into the file, not injected by
JavaScript. Crawlers and AI scrapers see the complete page on first request, no
rendering pass required. The browser then hydrates the same HTML into the live
app. `sitemap.xml`, `robots.txt`, and the static `og.png` are in `/public`.
Add a city or service and it's prerendered automatically on the next build
(routes are read from the sitemap).

## One thing that needs your call

**Address display vs. service-area business.** Your full address (185 Gear Ave,
Erin, ON N0B 1T0) is in the schema and the footer NAP for exact-match
consistency. If your GBP is set up as a service-area business that hides the
street address, drop the street from the public footer and keep locality only —
a one-line edit in `Footer.tsx` and `schema.ts`. If your GBP shows the address,
leave it as is.

## Netlify Forms

The contact form posts to Netlify Forms. A hidden detection stub in `index.html`
registers the `lead` form at deploy; the React form submits to it. After the
first deploy, set a notification email in Netlify → Forms → `lead`.

---

# v12 - "The Catchment" (18 September 2026)

The rebuild. The writing was never the problem and almost none of it changed;
what changed is everything that made the page read as **code** rather than as a
place a person works.

## What was wrong, mechanically

1. **Monospace on thirty-odd labels.** Mono means terminal. Every section
   eyebrow was mono caps with wide tracking. That single choice did most of the
   damage.
2. **Hairline cards on dark,** repeated down the page - a SaaS dashboard.
3. **One hue.** Teal on navy and nothing else. Monochrome reads as a spec sheet.
4. **No human evidence.** No photography, no film, no texture. The only
   photograph on the homepage was a 48px avatar in the footer.
5. **Diagrams that were analytics,** proving the mechanism to somebody who
   already believed it.
6. **No scale contrast.** One rhythm, eleven times. The page never raised its
   voice.

## What replaced it

- **Mono survives in exactly one component** - The Record, where the thing
  genuinely is a log. Everywhere else the eyebrow is a numbered editorial rule.
- **A second colour.** Amber carries one meaning only: **the leak**. Teal is
  what he gets, amber is what he is losing. Amber never appears on a button, a
  heading or a win state.
- **An editorial serif** (Instrument Serif) on the `.em` emphasis lines and the
  pull quotes. Changing that one CSS rule re-voiced twenty-five pages at once.
  Montserrat stays the structural face and the wordmark.
- **Twelve stills and seven films.** Places, never trades - a dentist and a
  roofer both have to land here and see themselves. No identifiable people, in
  any frame.
- **Dream state first, mechanism second** on every product band.
- **"Nine minutes" is the ask,** everywhere, because it is what gets said on the
  phone.

## The motion budget - do not remove it

`src/lib/motion.ts`. A cinematic site is seven video files and a phone cannot
have them all. **Phones get the hero film and nothing else** (`priority` on the
hero `<Plate>`); chapter loops are desktop-only, and everything pauses offscreen
through one shared IntersectionObserver.

Verified, not assumed - load the page in two iframes at 1400px and 414px and
count `.plate-film`:

    desktop 1400  heroFilm=YES  chapterFilms=5
    phone    414  heroFilm=YES  chapterFilms=0

A media-query typo silently ships seven videos to a phone. Re-run that count
after any change to `Plate` or `motion.ts`.

## Media

`src/lib/media.ts` holds every still and film behind **one switch**. It ships
pointing at the generation CDN. To self-host:

    ./fetch-assets.sh
    # then set USE_LOCAL_ASSETS = true in src/lib/media.ts

Files land in `public/media/`, **not** `public/assets/` - `netlify.toml` caches
`/assets/*` immutable for a year, which is right for Vite's fingerprinted output
and wrong for a hand-named file that might need replacing.

Every plate renders a tonal gradient first, then the still, then the film. A
dead CDN degrades to something that still looks designed, and a still that fails
removes itself rather than showing a broken-image glyph.

## Booking - this was broken on the live site

`CalEmbed` pointed at `highermindai/consult`, which is not a real event type.
**Every "book a call" on the live site was landing on a dead Cal slug.**

`/book/` is now a hub carrying the three real ones, and the URL never changes
because every printed document points at it:

| | |
|---|---|
| `highermindai/intro` | the general nine minutes, the default |
| `highermindai/google-listing` | the listing review |
| `highermindai/9-minute-website-review` | the website review |

Service pages deep-link with `?on=google-listing` or
`?on=9-minute-website-review` to open the right tab. All three render in the
prerendered HTML, so crawlers see them.

## /work/

New page, in the sitemap, in `llms.txt`, with `/portfolio` and `/case-studies`
301ing to it. Canada Car Part is the first entry.

**No performance figures, ever.** A number on a portfolio card is the one claim
a prospect can check and the one nobody sources. Describe what was built.

`shot` in `src/lib/work.ts` is deliberately **empty** until a real screenshot is
in `public/work/`. It does not point at a missing file, because on a prerendered
page an image error fires before React hydrates, so an `onError` handler never
runs and the visitor gets a broken box. Empty means the card draws its designed
frame instead.

  **To add the screenshot:** save it as `public/work/canadacarpart.png`, then set
  `shot: '/work/canadacarpart.png'`. Nothing else changes.
