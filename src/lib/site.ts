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

// Two books, two doors. Nav leads with the flagships because the homepage
// forks there, then the shared engines.
export const NAV: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Property Management', href: '/property-management' },
  { label: 'The Keystone', href: '/the-keystone' },
  { label: 'Ranking', href: '/property-management-seo' },
  { label: 'Intake', href: '/property-management-intake' },
  { label: 'Law Firms', href: '/the-watershed' },
  { label: 'About', href: '/about' },
];

export const FOUNDER = 'Derek Train';
