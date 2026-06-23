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
