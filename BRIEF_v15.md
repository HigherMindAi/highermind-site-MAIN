# v15 SWEEP BRIEF - read fully before editing

HigherMindAI site (React + Vite + TS, prerendered). Owner: Derek Train, solo operator,
Erin ON. Source of truth: `src/lib/ladder.ts` (mirrors LADDER_v13.json). Import from it,
never retype ladder copy.

## What changed
The business no longer sells eight services from a menu. A buyer sees THREE STEPS IN
ORDER - The Pin, The Foundation (where most start), The Storefront - with The Read as
the way in and The Tap (paid ads) last. The eight lines still exist only as "what sits
inside step X". Nothing on the site may present the eight as a list to choose from.

Line -> step mapping (use `LINE_TO_STEP` in ladder.ts):
- Visibility / local SEO / Google profile / reviews -> inside **The Pin**
- Intake desk (web + phone answering) -> inside **The Foundation**
- Social media (Facebook + Instagram) -> inside **The Foundation**
- Tracking every call and form ("The Record") -> inside **The Foundation** ("measured")
- Website -> **The Storefront**
- Paid ads (Google/Meta) -> **The Tap** (last, always)
- More Cities, The Mention (AI search), extra social surfaces, custom systems ->
  **"After you have chosen"** add-ons (`/how-it-works/#after`)

New routes that exist (link to them freely): `/how-it-works/` (the ladder, anchors
`#the-read #the-pin #the-foundation #the-storefront #the-tap #after`), `/the-read/`,
`/book/`, `/local-seo/` and `/local-seo/<town>/` for Erin, Orangeville, Caledon, Guelph,
Halton Hills, Mono, Shelburne, Fergus, Elora, Grand Valley. `/services/` now 301s to
`/how-it-works/` - do NOT link to `/services/` hub; link to `/how-it-works/` instead.

## Hard rules (the build is grepped for every one of these)
1. **Solo first person.** I, me, my. Never "we", "our", "us" meaning the business.
   (Only exception: the Tap line in ladder.ts, "then we turn the tap on" - Derek's own.)
   Watch for "us" inside words is fine; the standalone word is not. "Let us" -> rewrite.
2. **Standard hyphens only.** No en dash (U+2013) or em dash (U+2014) anywhere, incl.
   titles/meta. Also no `&mdash;` / `&ndash;` entities.
3. **No figures that price anything.** No `$`, no price, range or "from". Say: "Each
   step has a fixed price, said plainly on the nine minutes once I have seen what you
   have."
4. **One CTA:** "Take the nine minutes" -> `/book/`. No "learn more", "get a quote",
   "see every line", "book a call" buttons. Internal text links inside body copy are
   fine (e.g. "The Read" linking to /the-read/). A page's closing block is the
   `<CTAStrip>` component (it already renders the one button + phone as plain text).
   Where a page currently has a second button (btn-ghost to another page), convert it to
   an inline text link or remove it. Where it has a "Call 647..." ghost button next to
   the nine minutes, remove the button (phone lives in nav/footer/CTAStrip line).
5. **The Rank Lock is the only outcome promise** and keeps its exact words: use
   `RANK_LOCK` from ladder.ts. Remove any other guarantee/claim of results ("Top 3",
   "24/7 answered", "live in 14 days or the build fee comes back", counts of AI systems,
   "30-60d"). Launch timing must read exactly `LAUNCH_LOCK` ("Live in 14 days on the web
   and 21 on the phone, counted from the last thing I need from you.").
6. **Never say** in visible copy, headings, titles, meta, alt text: "AI", "chatbot",
   "bot", "automation"/"automated"/"automatically", "audit". Say instead: the desk,
   instant response, coverage, the system, your own channel, getting found, The Read.
   Exceptions: the brand name "HigherMindAI"; the ONE page `/ai-search-optimization/`
   may use "AI search" as a search term; code identifiers/URLs/slugs that already exist
   are fine (do not rename slugs). "assistant" is fine ("getting named when people ask
   an assistant instead of searching"). ChatGPT/Claude/Gemini/Perplexity product names
   are fine only on /ai-search-optimization/.
7. **No response-time claims** ("answers in seconds", "24/7", "within X minutes").
   "Nights and weekends", "when you cannot" are fine.
8. **Proof rule:** the Brampton auto parts build is described as a build, never a
   result (use `PROOF_PLAIN`). No numbers, rankings, revenue attached to it.
9. Prospects are not motivated by reporting. Lead with more calls / more time; tracking
   is how he SEES it, never the headline.
10. Keep every existing route/slug alive (they rank). Keep schema, canonical, FAQ
   schema matching visible FAQ text. Keep titles < 60 chars where possible, meta
   descriptions < 160.
11. Operator register: statements, not questions. No hedging, no "just", no "would
   you be open to". Calm authority.
12. Leaky vs empty funnel stories never mixed in one section.

## Voice sample (from the handoff, copy this register)
"Your Google profile rebuilt against the businesses above you, then held."
"A desk that answers when you cannot - on the web or on your phone line."
"I will not spend your money sending traffic to a profile with the wrong hours and a
website that does not convert."

## Imagery keys available in `src/lib/media.ts` (Plate image=...)
Show the work, never abstract towns: `hFound hTrusted hAnswered hMeasured` (hero beats),
`sRead sPin sFoundation sStorefront sTap` (ladder steps), `vTrades vAutoParts
vAutoService vProperty` (verticals), `nine aerial mainStreet office assistant`.
Film keys with the same names will exist in FILMS (Plate filmKey=...); pass
`filmKey` equal to the image key - `film()` returns null safely if absent.
Replace old abstract keys (catchment, twoTowns, threeLit, oneNamed, theWayIn, theTap,
reception, checked, theRecord, storefront, afterHours, theLine, roofRidge, firstLight)
on the pages you own with the matching new key.

## Do not touch (owned by the lead)
`src/lib/site.ts, ladder.ts, media.ts, schema.ts, motion.ts`, `components/Nav, Footer,
Layout, CTAStrip, Plate, CalEmbed, ContactForm`, `pages/Home, HowItWorks, TheRead, Book,
WhoIHelp, LocalSeo*`, `App.tsx`, `public/*`, `netlify.toml`, `index.html`, `index.css`.
If you need a new CSS class, reuse existing ones from index.css (grep it) - do not edit
index.css. If something in a do-not-touch file blocks you, note it in your final report.

## Done means
`npx tsc -b` passes (run from repo root /home/claude/repo). Then grep your files:
`grep -nP '\x{2014}|\x{2013}|&mdash;|&ndash;' ` returns nothing, `grep -nwiE 'we|our|us'`
only in code comments, `grep -nwE 'AI|chatbot|bot|automation|audit'` only in comments or
allowed exceptions. Report the files you changed and anything you could not resolve.
Do NOT run `npm run build` (the lead runs it) and do not git commit.
