import { useContext, useEffect } from 'react';
import { BASE, BRAND } from '../lib/site';
import { HeadContext, OG_IMAGE } from '../lib/head';
import { orgSchema } from '../lib/schema';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface SeoProps {
  title: string;
  desc: string;
  path: string; // canonical path, e.g. "/" or "/services/"
  schema?: Record<string, any>[];
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * THE ENTITY ANCHOR, ON EVERY PAGE.
 *
 * Twenty-seven of thirty-six pages carried a Service or FAQ block that pointed
 * at `#org` by @id - but never defined `#org` on the page. A crawler reads one
 * document at a time, so a reference to a node that is not in that document
 * resolves to nothing. The service pages were describing a provider the model
 * could not identify.
 *
 * The Organization graph is now injected here instead, so it appears on all
 * thirty-six. Pages that already pass `orgSchema()` explicitly are deduped by
 * @id rather than emitting it twice, because two conflicting definitions of
 * the same @id is worse than one.
 */
function withOrgAnchor(schema: Record<string, any>[]): Record<string, any>[] {
  const hasOrg = schema.some((b) => {
    const nodes = Array.isArray(b?.['@graph']) ? b['@graph'] : [b];
    return nodes.some((n: any) => n?.['@id'] === `${BASE}/#org`);
  });
  return hasOrg ? schema : [orgSchema(), ...schema];
}

export default function Seo({ title, desc, path, schema = [] }: SeoProps) {
  const sink = useContext(HeadContext);
  const canonical = BASE + (path.startsWith('/') ? path : '/' + path);
  const full = withOrgAnchor(schema);
  // Record for SSR/prerender (runs during render, including on the server).
  sink.current = { title, desc, canonical, schema: full };

  const schemaKey = JSON.stringify(full);
  useEffect(() => {
    const og = OG_IMAGE;

    document.title = title;
    upsertMeta('name', 'description', desc);
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1');
    upsertLink('canonical', canonical);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', BRAND);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', desc);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', og);
    upsertMeta('property', 'og:locale', 'en_CA');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', desc);

    // JSON-LD: clear any block injected previously, then inject the current set.
    document
      .querySelectorAll('script[data-hm-jsonld]')
      .forEach((n) => n.remove());
    const added: HTMLScriptElement[] = [];
    withOrgAnchor(schema).forEach((block) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-hm-jsonld', '');
      s.textContent = JSON.stringify(block);
      document.head.appendChild(s);
      added.push(s);
    });

    return () => {
      added.forEach((s) => s.remove());
    };
    // schemaKey captures schema contents; schema itself is read in the closure.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, desc, path, schemaKey]);

  return null;
}
