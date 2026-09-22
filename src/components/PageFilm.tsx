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
  /** Portrait still + film for phones held upright. Without one, a phone gets the still only. */
  imageV?: StillKey;
}

/**
 * Longest prefix wins, so `/property-management-seo/oakville/` inherits the
 * visibility film without needing its own entry. The homepage is excluded -
 * it builds its own hero.
 */
const SCENES: ReadonlyArray<[string, Scene]> = [
  // v15 "show the work" keys. filmKey always equals the image key; film()
  // returns null safely for any key without a film yet.
  ['/property-management-seo', { image: 'sPin', filmKey: 'sPin' }],
  ['/property-management-intake', { image: 'hAnswered', filmKey: 'hAnswered' }],
  ['/ai-search-optimization', { image: 'assistant', filmKey: 'assistant' }],
  ['/the-record', { image: 'hMeasured', filmKey: 'hMeasured' }],
  ['/services/website-build', { image: 'sStorefront', filmKey: 'sStorefront' }],
  ['/services/paid-growth', { image: 'sTap', filmKey: 'sTap' }],
  ['/services/ai-systems', { image: 'office', filmKey: 'office' }],
  ['/services/service-area-expansion', { image: 'aerial', filmKey: 'aerial' }],
  ['/services/social-media-management', { image: 'sFoundation', filmKey: 'sFoundation' }],
  ['/services/reputation-management', { image: 'hTrusted', filmKey: 'hTrusted' }],
  ['/services/property-management-seo', { image: 'sPin', filmKey: 'sPin' }],
  ['/services', { image: 'sRead', filmKey: 'sRead' }],
  ['/how-it-works', { image: 'sFoundation', filmKey: 'sFoundation' }],
  ['/the-read', { image: 'sRead', filmKey: 'sRead', imageV: 'sReadV' }],
  ['/local-seo', { image: 'mainStreet', filmKey: 'mainStreet' }],
  ['/work', { image: 'sStorefront', filmKey: 'sStorefront' }],
  ['/book', { image: 'nine', filmKey: 'nine' }],
  ['/contact', { image: 'nine', filmKey: 'nine' }],
  ['/about', { image: 'office', filmKey: 'office' }],
  ['/who-i-help', { image: 'mainStreet', filmKey: 'mainStreet' }],
  ['/property-management', { image: 'vProperty', filmKey: 'vProperty' }],
  ['/condominium-management-marketing', { image: 'vProperty', filmKey: 'vProperty' }],
  ['/answers', { image: 'sRead', filmKey: 'sRead' }],
  ['/trades', { image: 'vTrades', filmKey: 'vTrades', imageV: 'vTradesV' }],
  ['/auto-service-collision', { image: 'vAutoService', filmKey: 'vAutoService', imageV: 'vAutoServiceV' }],
  ['/auto-parts-recyclers', { image: 'vAutoParts', filmKey: 'vAutoParts', imageV: 'vAutoPartsV' }],
  ['/coverage', { image: 'aerial', filmKey: 'aerial' }],
  ['/scope-limits', { image: 'hAnswered', filmKey: 'hAnswered' }],
  ['/proof', { image: 'sStorefront', filmKey: 'sStorefront' }],
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

  const [portrait, setPortrait] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(orientation: portrait) and (max-width: 900px)');
    setPortrait(mq.matches);
  }, [pathname]);
  const small = typeof window !== 'undefined' && window.matchMedia?.('(max-width: 900px)').matches;
  // Phones: a portrait film if the scene has one, otherwise the still only -
  // the landscape chapter films are desktop weight and never go to a phone.
  const useV = !!(portrait && scene?.imageV && film(scene.imageV));
  const src = !scene?.filmKey ? null : useV ? film(scene.imageV as string) : small ? null : film(scene.filmKey);
  const meta = filmMeta(useV ? (scene?.imageV as string) : scene?.filmKey || '');
  const poster = scene ? (useV ? still(scene.imageV as StillKey) : still(scene.image)) : '';

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
          src={useV ? poster : still(scene.image)}
          alt=""
          /* Hero of every inner page, so it is that page's LCP element. */
          loading="eager"
          {...({ fetchpriority: "high" } as Record<string, string>)}
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
          poster={poster}
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
