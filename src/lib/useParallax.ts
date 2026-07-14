import { useEffect } from 'react';

/**
 * Writes the scroll offset to a single CSS custom property, once per frame.
 *
 * This is the entire JS cost of the scroll cinematic. One passive listener, one
 * rAF, one variable. It never reads layout, so it cannot thrash, and the actual
 * movement is done by the compositor via transform on the hero field.
 *
 * It stops writing past the first viewport, because nothing below the fold is
 * parallaxed and there is no reason to keep the compositor awake for it. It
 * also does nothing at all under prefers-reduced-motion or on a narrow screen,
 * where the effect costs more battery than it returns in atmosphere.
 */
export function useParallax() {
  useEffect(() => {
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const narrow = window.matchMedia('(max-width: 900px)').matches;
    if (still || narrow) return;

    let raf = 0;
    const root = document.documentElement;

    const write = () => {
      raf = 0;
      const y = window.scrollY;
      // past one viewport the hero is gone; stop touching the DOM
      if (y < window.innerHeight * 1.2) {
        root.style.setProperty('--sy', `${y}px`);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(write);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    write();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
      root.style.removeProperty('--sy');
    };
  }, []);
}
