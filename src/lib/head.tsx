import { createContext } from 'react';
import { BASE, BRAND } from './site';

// v15.8 - the link card is served from our own domain. The media-CDN copy
// (cloudfront) came back blank on X: its crawler could not fetch it, so the
// card fell back to the grey placeholder. Bump ?v= whenever og.png changes so
// X, LinkedIn and Meta re-pull it instead of serving their cached copy.
export const OG_IMAGE = `${BASE}/og.png?v=15.8`;

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HeadData {
  title: string;
  desc: string;
  canonical: string;
  schema: Record<string, any>[];
}

// A mutable sink. During SSR/prerender, <Seo> writes the active route's head
// here so the prerender script can bake it into the static HTML. On the client
// it's harmless (the <Seo> effect updates the live <head> on navigation).
export interface HeadSink {
  current: HeadData | null;
}

export const HeadContext = createContext<HeadSink>({ current: null });

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Renders the exact <head> SEO tags for a route as an HTML string.
// JSON-LD is tagged data-hm-jsonld so the client effect can replace it cleanly.
export function renderHeadTags(head: HeadData): string {
  // The link card: public/og.png, 1200x630, self-hosted.
  const og = OG_IMAGE;
  const t = esc(head.title);
  const d = esc(head.desc);
  const c = esc(head.canonical);
  const lines = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<link rel="canonical" href="${c}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(BRAND)}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${c}" />`,
    `<meta property="og:image" content="${og}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="HigherMindAI - Found on Google. Answered when you cannot pick up. Take the nine minutes." />`,
    `<meta property="og:locale" content="en_CA" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${og}" />`,
  ];
  head.schema.forEach((block) => {
    lines.push(
      `<script type="application/ld+json" data-hm-jsonld>${JSON.stringify(block)}</script>`
    );
  });
  return lines.join('\n    ');
}
