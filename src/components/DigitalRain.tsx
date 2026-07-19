import { useEffect, useRef } from 'react';

/**
 * Digital rain, tuned way down: teal glyphs falling soft behind the hero.
 * Runs ~14fps, pauses when offscreen or the tab is hidden, and does not run
 * at all under prefers-reduced-motion. Weighs nothing; the prerendered HTML
 * is an empty canvas, so crawlers and the Lighthouse gate never feel it.
 */
const GLYPHS = 'アイウエオカキクケコサシスセソタチツ01';
const CELL = 18;

export default function DigitalRain({ fixed = false }: { fixed?: boolean }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cx = cv.getContext('2d');
    if (!cx) return;

    let drops: number[] = [];
    let speeds: number[] = [];
    let raf = 0;
    let last = 0;
    let visible = true;

    const resize = () => {
      cv.width = cv.offsetWidth;
      cv.height = cv.offsetHeight;
      const cols = Math.max(8, Math.floor(cv.width / (fixed ? 23 : CELL)));
      drops = Array.from({ length: cols }, () => Math.random() * -cv.height);
      speeds = Array.from({ length: cols }, () => 0.35 + Math.random() * 0.55);
    };
    resize();
    window.addEventListener('resize', resize);

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(cv);

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible || document.hidden) return;
      if (t - last < (fixed ? 84 : 70)) return;
      last = t;
      cx.clearRect(0, 0, cv.width, cv.height);
      cx.font = '12px monospace';
      for (let i = 0; i < drops.length; i++) {
        const x = i * CELL + 3;
        for (let k = 0; k < 6; k++) {
          const y = drops[i] - k * CELL;
          if (y < -CELL || y > cv.height + CELL) continue;
          cx.fillStyle =
            k === 0
              ? 'rgba(63,224,181,.52)'
              : `rgba(63,224,181,${0.18 - k * 0.024})`;
          cx.fillText(GLYPHS[Math.floor((i * 7 + k * 3 + t / 900) % GLYPHS.length)], x, y);
        }
        drops[i] += speeds[i] * CELL * 0.45;
        if (drops[i] > cv.height + 6 * CELL && Math.random() > 0.975) {
          drops[i] = Math.random() * -140;
        }
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      io.disconnect();
    };
  }, [fixed]);

  return <canvas ref={ref} className={fixed ? 'rain rain-fixed' : 'rain'} aria-hidden="true" />;
}
