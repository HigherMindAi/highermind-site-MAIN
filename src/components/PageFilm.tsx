import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { still, film, filmMeta, TONE, type StillKey } from '../lib/media';
import { motionBudget, observeFilm } from '../lib/motion';

// ---------------------------------------------------------------------------
// THE PAGE FILM
//
// Every page arrived at from the nav opens on moving picture, the way the
// homepage does. Without it the homepage is cinematic and the rest of the site
// is a document, and the drop between them is felt on the first click.
//
// Done centrally rather than page by page. It renders once inside Layout,
// behind the page, and picks its film from the pathname - so twenty-two pages
// gained a hero from one file, and a new page gets one by adding a line to the
// map below rather than by editing the page.
//
// It sits BEHIND `.phero`, which already has the right padding and already
// holds the h1. Nothing in any page had to move.
//
// The bottom is masked to transparent rather than overlaid with a colour. The
// page background is a gradient that changes with scroll depth, so there is no
// single colour to overlay WITH - a mask dissolves into whatever is actually
// there.
// ---------------------------------------------------------------------------

interface Scene {
  image: StillKey;
  filmKey?: string;
}

/**
 * Longest prefix wins, so `/property-management-seo/oakville/` inherits the
 * visibility film without needing its own entry. The homepage is excluded -
 * it builds its own hero.
 */
const SCENES: ReadonlyArray<[string, Scene]> = [
  ['/property-management-seo', { image: 'twoTowns', filmKey: 'twoTowns' }],
  ['/property-management-intake', { image: 'reception', filmKey: 'reception' }],
  ['/ai-search-optimization', { image: 'oneNamed', filmKey: 'oneNamed' }],
  ['/the-record', { image: 'theRecord' }],
  ['/services/website-build', { image: 'storefront', filmKey: 'storefront' }],
  ['/services/paid-growth', { image: 'theTap' }],
  ['/services/ai-systems', { image: 'inOrder' }],
  ['/services/service-area-expansion', { image: 'twoTowns', filmKey: 'twoTowns' }],
  ['/services/social-media-management', { image: 'theBench' }],
  ['/services/reputation-management', { image: 'checked' }],
  ['/services/property-management-seo', { image: 'twoTowns', filmKey: 'twoTowns' }],
  ['/services', { image: 'theWayIn', filmKey: 'theWayIn' }],
  ['/work', { image: 'storefront', filmKey: 'storefront' }],
  ['/book', { image: 'theWayIn', filmKey: 'theWayIn' }],
  ['/contact', { image: 'theLine' }],
  ['/about', { image: 'firstLight' }],
  ['/who-i-help', { image: 'catchment', filmKey: 'catchment' }],
  ['/property-management', { image: 'oneNamed', filmKey: 'oneNamed' }],
  ['/condominium-management-marketing', { image: 'oneNamed' }],
  ['/roofing', { image: 'roofRidge' }],
  ['/arborists', { image: 'firstLight' }],
  ['/coverage', { image: 'twoTowns', filmKey: 'twoTowns' }],
  ['/scope-limits', { image: 'theRecord' }],
  ['/proof', { image: 'theRecord' }],
];

function sceneFor(pathname: string): Scene | null {
  if (pathname === '/' || pathname === '') return null;
  let best: Scene | null = null;
  let bestLen = 0;
  for (const [prefix, scene] of SCENES) {
    if (pathname.startsWith(prefix) && prefix.length > bestLen) {
      best = scene;
      bestLen = prefix.length;
    }
  }
  return best;
}

export default function PageFilm() {
  const { pathname } = useLocation();
  const scene = sceneFor(pathname);

  const vid = useRef<HTMLVideoElement | null>(null);
  const [runFilm, setRunFilm] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const src = scene?.filmKey ? film(scene.filmKey) : null;
  const meta = filmMeta(scene?.filmKey || '');

  // Route changed: re-evaluate. The film is a hero, so it runs on the hero
  // budget - a phone gets this one and no chapter loops.
  useEffect(() => {
    setImgFailed(false);
    setRunFilm(!!src && motionBudget().hero);
  }, [src, pathname]);

  useEffect(() => {
    const el = vid.current;
    if (!runFilm || !el) return;
    const seek = () => {
      if (meta.startAt) el.currentTime = meta.startAt;
    };
    const again = () => {
      el.currentTime = meta.startAt;
      void el.play().catch(() => {});
    };
    el.addEventListener('loadedmetadata', seek);
    if (meta.startAt) el.addEventListener('ended', again);
    seek();
    const stop = observeFilm(el);
    return () => {
      el.removeEventListener('loadedmetadata', seek);
      el.removeEventListener('ended', again);
      stop();
    };
  }, [runFilm, pathname, meta.startAt]);

  if (!scene) return null;

  return (
    <div className="pagefilm" aria-hidden="true" style={{ background: TONE[scene.image] }}>
      {imgFailed ? null : (
        <img
          className="pagefilm-img"
          src={still(scene.image)}
          alt=""
          /* Hero of every inner page, so it is that page's LCP element. */
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          onError={() => setImgFailed(true)}
        />
      )}
      {runFilm && src ? (
        <video
          ref={vid}
          key={pathname}
          className="pagefilm-vid"
          src={src}
          poster={still(scene.image)}
          style={meta.zoom > 1 ? { transform: `scale(${meta.zoom})` } : undefined}
          muted
          loop={!meta.startAt}
          playsInline
          preload={motionBudget().preload}
          tabIndex={-1}
        />
      ) : null}
      <div className="pagefilm-veil" />
    </div>
  );
}
