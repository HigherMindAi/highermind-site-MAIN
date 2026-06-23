import { useEffect } from 'react';

// Adds `.in` to `.reveal` elements as they enter the viewport.
// Ports network.js reveal behaviour; re-scans on every route change because
// React mounts a fresh page each navigation.
export function useReveal(dep: unknown) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document
        .querySelectorAll<HTMLElement>('.reveal')
        .forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    // wait one frame so the freshly-rendered route is in the DOM
    const id = requestAnimationFrame(() => {
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.in)')
        .forEach((el) => io.observe(el));
    });

    return () => {
      cancelAnimationFrame(id);
      io.disconnect();
    };
  }, [dep]);
}
