import { createContext } from 'react';
import { BRAND } from './site';

export const OG_IMAGE =
  'https://d2ol7oe51mr4n9.cloudfront.net/user_2vxHkVim9pDZL3FfvXCfzWCkqG7/ea9736e0-195f-4440-adcd-b04bf4a1da37.jpg';

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
  // The link card: the hand-and-pin still from the hero film, set as a 1200x630
  // card. Hosted on the media CDN so previews of any deploy show the new card.
  const og = OG_IMAGE;
  const t = esc(head.title);
  const d = esc(head.desc);
  const c = esc(head.canonical);
  const lines = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${c}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(BRAND)}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${c}" />`,
    `<meta property="og:image" content="${og}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="A hand holding a phone with a lit map pin. Found on Google. Answered when you cannot pick up." />`,
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
