import { useEffect, useRef, useState } from 'react';
import { still, thumb, film, filmMeta, TONE, type StillKey } from '../lib/media';
import { motionBudget, observeFilm } from '../lib/motion';

// ---------------------------------------------------------------------------
// A PLATE is one photographic frame on the page.
//
// It always renders a tonal gradient first, then lays the still on top of it,
// then - only where the motion budget allows - lays the film on top of that.
// Three layers, degrading in that order. A dead CDN gets you the gradient and
// the page still looks like somebody designed it.
//
// The still is ALWAYS in the DOM even when the film plays over it, because it
// is the poster frame and because a film that fails to decode should reveal a
// photograph rather than a hole.
// ---------------------------------------------------------------------------

interface PlateProps {
  /** Which still. Also selects the tonal gradient behind it. */
  image: StillKey;
  /** Ambient film key. Omit for a still-only plate. */
  filmKey?: string;
  /** Aspect ratio as a CSS value, e.g. '16 / 9'. */
  ratio?: string;
  /** Use the lighter webp derivative. Cards and thumbnails. */
  light?: boolean;
  /** Extra classes on the wrapper. */
  className?: string;
  /** Decorative by default. Give it alt text when it carries meaning. */
  alt?: string;
  /** Scrim strength over the plate. 'none' | 'soft' | 'hard' */
  scrim?: 'none' | 'soft' | 'hard';
  /**
   * The hero. It runs on the HERO budget rather than the chapter budget, which
   * is the whole point of having two: a phone gets this film and nothing else.
   * Without it the hero inherits the desktop-only chapter rule and phones get
   * a still where they should be getting the one clip that matters.
   */
  priority?: boolean;
  children?: React.ReactNode;
}

export default function Plate({
  image,
  filmKey,
  ratio = '16 / 9',
  light = false,
  className = '',
  alt = '',
  scrim = 'none',
  priority = false,
  children,
}: PlateProps) {
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const [runFilm, setRunFilm] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const src = film(filmKey || '');
  const meta = filmMeta(filmKey || '');

  // The decision to run an ambient film is made on the client, after mount.
  // It must never be baked into the prerendered HTML.
  useEffect(() => {
    if (!filmKey || !src) return;
    const b = motionBudget();
    if (priority ? b.hero : b.chapters) setRunFilm(true);
  }, [filmKey, src, priority]);

  useEffect(() => {
    const el = vidRef.current;
    if (!runFilm || !el) return;
    // `loop` always restarts at zero, which would undo the start offset, so the
    // loop is driven by hand whenever a clip opens partway in.
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
  }, [runFilm, meta.startAt]);

  return (
    <figure
      className={`plate ${className}`}
      style={{ aspectRatio: ratio, background: TONE[image] }}
    >
      {/* If the still cannot be fetched - a slow CDN, a blocked region, a
          moved file - the img removes itself and the tonal gradient behind it
          becomes the plate. A browser's broken-image glyph on a full-bleed
          hero is worse than no image at all. */}
      {imgFailed ? null : (
        <img
          className="plate-img"
          src={light ? thumb(image) : still(image)}
          alt={alt}
          /* The hero plate is the LCP element. Lazy-loading it tells the
             browser to DEPRIORITISE the one image the score is measured on -
             a textbook own goal. Chapter plates below the fold stay lazy. */
          loading={priority ? 'eager' : 'lazy'}
          {...(priority ? ({ fetchpriority: 'high' } as Record<string, string>) : {})}
          decoding={priority ? 'sync' : 'async'}
          aria-hidden={alt ? undefined : true}
          onError={() => setImgFailed(true)}
        />
      )}
      {runFilm && src ? (
        <video
          ref={vidRef}
          className="plate-film"
          src={src}
          poster={still(image)}
          style={meta.zoom > 1 ? { transform: `scale(${meta.zoom})` } : undefined}
          muted
          loop={!meta.startAt}
          playsInline
          /* Chapter loops fetch nothing until the shared observer plays them in
             view - a page of twelve plates must not preload twelve films. */
          preload={priority ? motionBudget().preload : 'none'}
          aria-hidden="true"
          tabIndex={-1}
        />
      ) : null}
      {scrim !== 'none' ? <div className={`plate-scrim plate-scrim-${scrim}`} /> : null}
      {children ? <figcaption className="plate-body">{children}</figcaption> : null}
    </figure>
  );
}
