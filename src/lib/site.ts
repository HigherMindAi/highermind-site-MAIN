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
// The Whole Operation is the single permitted exception - it is self-explaining.
export const NAV: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Visibility', href: '/property-management-seo/' },
  { label: 'Intake', href: '/property-management-intake/' },
  { label: 'Website', href: '/services/website-build/' },
  { label: 'More Cities', href: '/services/service-area-expansion/' },
  { label: 'Who I Help', href: '/who-i-help/' },
  { label: 'About', href: '/about/' },
];

export const FOUNDER = 'Derek Train';
