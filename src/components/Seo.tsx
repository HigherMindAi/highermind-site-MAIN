import { useContext, useEffect } from 'react';
import { BASE, BRAND } from '../lib/site';
import { HeadContext } from '../lib/head';

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

export default function Seo({ title, desc, path, schema = [] }: SeoProps) {
  const sink = useContext(HeadContext);
  const canonical = BASE + (path.startsWith('/') ? path : '/' + path);
  // Record for SSR/prerender (runs during render, including on the server).
  sink.current = { title, desc, canonical, schema };

  const schemaKey = JSON.stringify(schema);
  useEffect(() => {
    const og = `${BASE}/og.png`;

    document.title = title;
    upsertMeta('name', 'description', desc);
    upsertMeta('name', 'robots', 'index, follow');
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

    // JSON-LD: clear any we added previously, then inject the current set.
    document
      .querySelectorAll('script[data-hm-jsonld]')
      .forEach((n) => n.remove());
    const added: HTMLScriptElement[] = [];
    schema.forEach((block) => {
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
