import { useEffect, useRef } from 'react';

/** A one-pixel teal line along the top of the page: how deep into the dive you are. */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        el.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return <div ref={ref} className="scrollprog" aria-hidden="true" />;
}
