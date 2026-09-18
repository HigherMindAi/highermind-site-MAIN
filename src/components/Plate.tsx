import { useEffect, useRef, useState } from 'react';
import { still, thumb, film, TONE, type StillKey } from '../lib/media';
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
    return observeFilm(el);
  }, [runFilm]);

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
          loading="lazy"
          decoding="async"
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
          muted
          loop
          playsInline
          preload={motionBudget().preload}
          aria-hidden="true"
          tabIndex={-1}
        />
      ) : null}
      {scrim !== 'none' ? <div className={`plate-scrim plate-scrim-${scrim}`} /> : null}
      {children ? <figcaption className="plate-body">{children}</figcaption> : null}
    </figure>
  );
}
