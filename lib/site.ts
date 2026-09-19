// ---------------------------------------------------------------------------
// HigherMindAI - site constants (single source of truth for NAP + brand)
// Exact-match NAP everywhere is a ranking lever. Change it in one place only.
// ---------------------------------------------------------------------------

export const BASE = 'https://highermindai.com';

export const BIZ_NAME = 'HigherMindAI';
export const BRAND = 'HigherMindAI';
export const PHONE_DISP = '647-242-5800';
export const PHONE_E164 = '+16472425800';
export const EMAIL = 'highermindai@gmail.com';
// No street address in site copy or schema (GBP suspension-risk mitigation).
export const LOCALITY = 'Erin';
export const REGION = 'ON';
export const COUNTRY = 'CA';

// SEPTEMBER 2026 - plain leads, the creative name is a tag.
// The site specialises in a failure, not an industry: they never find you, or
// nobody answers. Nav carries plain labels only. Nobody navigates by a
// sentence, and nobody navigates by a proper noun he has not learned yet.
//
// v10: AI Search takes a nav slot of its own. It was live, indexed and
// reachable only from the footer, which is why it kept reading as missing.
// Website and More Cities move behind Services, which now carries every line
// on one page rather than five of them.
export const NAV: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Visibility', href: '/property-management-seo/' },
  { label: 'Intake', href: '/property-management-intake/' },
  { label: 'AI Search', href: '/ai-search-optimization/' },
  { label: 'Services', href: '/services/' },
  { label: 'Who I Help', href: '/who-i-help/' },
  { label: 'About', href: '/about/' },
];

export const FOUNDER = 'Derek Train';

// ---------------------------------------------------------------------------
// THE ENTITY PROFILES  (Waypoint GEO, lever G2)
//
// A model resolves a business to an entity BEFORE it can name it. These are
// the URLs that let it do that - the same business, asserted from several
// independent places, all pointing back here.
//
// Split deliberately:
//   ORG_PROFILES    identify the BUSINESS. They go on Organization.sameAs.
//   PERSON_PROFILES identify DEREK. LinkedIn is a personal profile, so it
//                   belongs on the Person node, not the company one. Putting
//                   a personal profile on Organization.sameAs is the most
//                   common way an entity graph gets muddied.
//
// The Google profile is written as its canonical CID URL rather than the long
// /maps/place/... link that the browser produces. That link carries session
// parameters (sa, ved, ictx) which change per visit and can rot; the CID is
// the permanent identifier for the listing and is what the API returns.
//
// WhatsApp is NOT here. wa.me is a click-to-chat deep link, not a profile that
// identifies the entity, so it is published as a ContactPoint instead - which
// is both more accurate and machine-readable in its own right.
// ---------------------------------------------------------------------------
export const ORG_PROFILES: ReadonlyArray<string> = [
  'https://maps.google.com/?cid=5113912630308331181',
  'https://www.facebook.com/people/HigherMindai/61578930671818/',
  'https://www.instagram.com/highermindai/',
];

export const PERSON_PROFILES: ReadonlyArray<string> = [
  'https://www.linkedin.com/in/derek-train/',
];

export const WHATSAPP_URL = 'https://wa.me/16472425800';

// ---------------------------------------------------------------------------
// THE BOOKING FUNNEL
//
// /book/ is the Google Business Profile appointment link and every document in
// the outreach and onboarding suite points at it, so the URL never changes. It
// is the hub, not a redirect: one indexable page that ranks, carrying three
// specific entry points rather than one generic one.
//
// ONE event type. There were briefly three, behind a tab picker, and the
// picker broke the embed: Cal's loader drains its queue once, so the second
// and third calendars were created too late to ever become real and rendered
// nothing. The call is the same nine minutes whichever door a prospect comes
// through, so the doors are gone and the one that works is the only one.
//
// If a second event type is ever added here, it does NOT go behind a tab on
// /book/. It gets its own page, its own URL and its own single embed.
//
// NOTE: the site was previously pointing at `highermindai/consult`, which is
// not a real slug. Every "book a call" was landing on a Cal page that does not
// exist. That is fixed here.
// ---------------------------------------------------------------------------
export const CAL_INTRO = 'highermindai/intro';

export const calUrl = (slug: string) => `https://cal.com/${slug}`;
