// ---------------------------------------------------------------------------
// THE MOTION BUDGET
//
// A cinematic site is seven video files. A phone on cellular cannot have them
// all, and a phone decoding six looping videos at once stutters, heats up and
// burns battery. This is written BEFORE the first video element rather than
// discovered on a phone the night before it matters.
//
// The rule: phones get the hero film and nothing else. The chapter stills carry
// the rest, and the full film is one tap away on the play button. One file
// instead of seven.
//
// Everything is computed once, lazily, on the client. It must never run during
// the prerender - `window` and `matchMedia` do not exist there, and a server
// that guesses wrong would bake the wrong answer into the HTML.
// ---------------------------------------------------------------------------

export interface MotionBudget {
  /** The hero film. Runs almost everywhere - it is the first impression. */
  hero: boolean;
  /** Ambient chapter loops. Desktop only, and never on a metered connection. */
  chapters: boolean;
  /** Preload the next clip in the film sequence while the current one plays. */
  preloadNext: boolean;
  /** How much of a video element to fetch up front. */
  preload: 'none' | 'metadata' | 'auto';
}

const OFF: MotionBudget = {
  hero: false,
  chapters: false,
  preloadNext: false,
  preload: 'none',
};

let cached: MotionBudget | null = null;

export function motionBudget(): MotionBudget {
  if (cached) return cached;
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    // Prerender. Assume nothing, ship the stills, let the client decide.
    return OFF;
  }

  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
    mozConnection?: { saveData?: boolean; effectiveType?: string };
    webkitConnection?: { saveData?: boolean; effectiveType?: string };
  };
  const conn = nav.connection || nav.mozConnection || nav.webkitConnection;

  const saveData = !!(conn && conn.saveData);
  const slowNet = !!(conn && /(^|-)2g$|^3g$/.test(conn.effectiveType || ''));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = window.matchMedia('(max-width: 900px)').matches;

  cached = {
    hero: !reduced && !saveData && !slowNet,
    chapters: !reduced && !saveData && !slowNet && !small,
    preloadNext: !saveData && !slowNet,
    preload: small ? 'metadata' : 'auto',
  };
  return cached;
}

// ---------------------------------------------------------------------------
// ONE observer for every ambient film on the page.
//
// Plays on enter, pauses on exit. A film that is not on screen is not decoding.
// `pauseAll` is called when a full-screen takeover opens, and `resumeVisible`
// when it closes - which resumes only the ones actually in view rather than
// waking all seven at once.
// ---------------------------------------------------------------------------
type Tracked = { el: HTMLVideoElement; visible: boolean };

let io: IntersectionObserver | null = null;
let tracked: Tracked[] = [];
let suspended = false;

function ensure(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null;
  if (io) return io;
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const rec = tracked.find((t) => t.el === e.target);
        if (!rec) return;
        rec.visible = e.isIntersecting;
        if (suspended) return;
        if (e.isIntersecting) void rec.el.play().catch(() => {});
        else rec.el.pause();
      });
    },
    { threshold: 0.15 }
  );
  return io;
}

export function observeFilm(el: HTMLVideoElement): () => void {
  const obs = ensure();
  if (!obs) {
    void el.play().catch(() => {});
    return () => {};
  }
  tracked.push({ el, visible: false });
  obs.observe(el);
  return () => {
    obs.unobserve(el);
    tracked = tracked.filter((t) => t.el !== el);
  };
}

/** Every ambient film stops. Called when the film modal takes the screen. */
export function pauseAll(): void {
  suspended = true;
  tracked.forEach((t) => t.el.pause());
}

/** Only the ones actually on screen come back. */
export function resumeVisible(): void {
  suspended = false;
  tracked.forEach((t) => {
    if (t.visible) void t.el.play().catch(() => {});
  });
}
