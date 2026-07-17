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
export const LOCALITY = 'Orangeville';
export const REGION = 'ON';
export const COUNTRY = 'CA';

export const NAV: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'The Watershed', href: '/the-watershed' },
  { label: 'Intake Desk', href: '/law-firm-intake' },
  { label: 'Ranking', href: '/law-firm-seo' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const FOUNDER = 'Derek Train';
