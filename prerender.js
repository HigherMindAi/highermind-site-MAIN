// Prerenders every route to static HTML with its own <head> (title, meta,
// canonical, JSON-LD) baked in. Pure Node — no headless browser — so it runs
// in Bolt's WebContainer and on Netlify alike.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, 'dist');

// Routes come straight from the sitemap so the two never drift.
function routesFromSitemap() {
  const xml = readFileSync(join(__dirname, 'public', 'sitemap.xml'), 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return locs.map((u) => new URL(u).pathname);
}

function outFileFor(route) {
  if (route === '/') return join(dist, 'index.html');
  const clean = route.replace(/^\/|\/$/g, '');
  return join(dist, clean, 'index.html');
}

async function run() {
  const template = readFileSync(join(dist, 'index.html'), 'utf8');
  const { render } = await import(
    pathToFileURL(join(dist, 'server', 'entry-server.js')).href
  );

  const routes = routesFromSitemap();
  // a real 404 document too (served as the SPA fallback / unknown paths)
  const jobs = [...routes.map((r) => ({ route: r, file: outFileFor(r) }))];
  jobs.push({ route: '/__not-found__', file: join(dist, '404.html') });

  for (const { route, file } of jobs) {
    const { appHtml, headHtml } = render(route);
    const html = template
      .replace('<!--app-head-->', headHtml)
      .replace('<!--app-html-->', appHtml);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
    console.log('  prerendered', route, '->', file.replace(dist, 'dist'));
  }

  // the SSR bundle is build-only; drop it from the publish output
  rmSync(join(dist, 'server'), { recursive: true, force: true });
  console.log(`\nPrerendered ${jobs.length} routes into ./dist`);
}

run().catch((e) => {
  console.error('Prerender failed:', e);
  process.exit(1);
});
