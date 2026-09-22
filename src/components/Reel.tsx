import { useEffect, useRef, useState } from 'react';
import { film, still, REEL, type StillKey } from '../lib/media';
import { motionBudget, pauseAll, resumeVisible } from '../lib/motion';

/**
 * THE REEL - "What I do, in 48 seconds".
 *
 * Six eight-second clips played back to back with a caption each, so a buyer
 * who will not read a word still leaves knowing the job: found, trusted,
 * answered, measured, then the site, then the ads. Not stitched - a playlist
 * in the browser, the same result with no render step.
 *
 * The modal pauses every ambient film on the page while it plays and resumes
 * only the ones in view when it closes. On close the decoder is freed.
 */
export default function Reel({ label = 'Watch what I do - 48 seconds' }: { label?: string }) {
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);
  const vref = useRef<HTMLVideoElement | null>(null);
  const next = useRef<HTMLVideoElement | null>(null);

  const clips = REEL.filter((c) => film(c.key));

  useEffect(() => {
    if (!open) return;
    pauseAll();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') setI((x) => Math.min(clips.length - 1, x + 1));
      if (e.key === 'ArrowLeft') setI((x) => Math.max(0, x - 1));
    };
    document.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
      const v = vref.current;
      if (v) {
        v.pause();
        v.removeAttribute('src');
        v.load();
      }
      resumeVisible();
    };
  }, [open, clips.length]);

  useEffect(() => {
    if (!open) return;
    const v = vref.current;
    if (!v) return;
    const portrait = window.matchMedia('(orientation: portrait) and (max-width: 700px)').matches;
    const pick = (k: string) => (portrait && film(k + 'V')) || film(k) || '';
    v.src = pick(clips[i].key);
    void v.play().catch(() => {});
    // preload the next clip while this one plays
    const n = next.current;
    if (n && motionBudget().preloadNext && clips[i + 1]) {
      n.src = pick(clips[i + 1].key);
      n.preload = 'auto';
    }
  }, [open, i, clips]);

  if (!clips.length) return null;

  return (
    <>
      <button type="button" className="reel-btn" onClick={() => { setI(0); setOpen(true); }}>
        <span className="reel-play" aria-hidden="true" />
        {label}
      </button>
      {open ? (
        <div className="reel" role="dialog" aria-modal="true" aria-label="What I do">
          <button type="button" className="reel-x" onClick={() => setOpen(false)} aria-label="Close">
            &times;
          </button>
          <div className="reel-frame">
            <video
              ref={vref}
              poster={still(clips[i].key as StillKey)}
              muted
              playsInline
              onEnded={() => setI((x) => (x + 1 < clips.length ? x + 1 : 0))}
            />
            <video ref={next} muted playsInline style={{ display: 'none' }} aria-hidden="true" />
            <p className="reel-cap" key={i}>{clips[i].caption}</p>
          </div>
          <div className="reel-bar">
            {clips.map((c, k) => (
              <button
                key={c.key}
                type="button"
                className={k === i ? 'on' : k < i ? 'past' : ''}
                onClick={() => setI(k)}
                aria-label={`Clip ${k + 1}`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
