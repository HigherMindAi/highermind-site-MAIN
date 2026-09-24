import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { still, thumb, film, TONE, HERO_BEATS } from '../lib/media';
import { motionBudget } from '../lib/motion';
import { CTA_LABEL, CTA_HREF } from '../lib/ladder';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { Arrow } from './Icons';

// ---------------------------------------------------------------------------
// THE HERO - v15.5, "show the work", on a timer.
//
// One story in four beats, told from the buyer's side of the phone:
//   01 Found     - someone nearby has a problem tonight and your pin is lit
//   02 Trusted   - they check you: job photos, stars, every review answered
//   03 Answered  - 7:04pm, the cab is empty, the call is still answered
//   04 Measured  - next morning, every call and form counted
//
// The film carries the world. The glass card carries the words - an AI video
// cannot be trusted to render a legible phone screen, so the thing I actually
// do is drawn in HTML over the frame, crisp at every size.
//
// Rules (see the Storefront kit):
//   - Timed, never scroll-locked. Each beat holds 2.8s and fades to the next;
//     the page scrolls past the hero from the first pixel. No pinned stage, no
//     Skip intro (Derek, 24 Sept).
//   - The rotation pauses when the hero is off screen, the tab is hidden, or
//     the pointer rests on the copy. Reduced motion: no rotation at all.
//   - Portrait films on portrait screens.
//   - Phones hold ONE film (beat 01's); the other beats are stills.
//   - Everything in the prerendered HTML is a still. Films arrive client-side.
// ---------------------------------------------------------------------------

interface Beat {
  n: string;
  word: string;
  /** The big line for this beat. Beat 01 renders as the page's <h1>. */
  head: string;
  em: string;
  line: string;
}

const BEATS: Beat[] = [
  {
    n: '01',
    word: 'Found',
    head: 'I get you found on Google.',
    em: 'Your pin is the one they see first.',
    line: 'Someone nearby has a problem tonight. They search, and the map decides who gets the call.',
  },
  {
    n: '02',
    word: 'Trusted',
    head: 'They check you before they call.',
    em: 'I make sure they like what they find.',
    line: 'Your own job photos, every review answered, pages that look alive.',
  },
  {
    n: '03',
    word: 'Answered',
    head: '7:04pm. You are on a job.',
    em: 'The call still gets answered.',
    line: 'The desk takes the details and sends them to you by text. It never quotes.',
  },
  {
    n: '04',
    word: 'Measured',
    head: 'Next morning, it is all counted.',
    em: 'Every call. Every form.',
    line: 'Where you started is recorded first, so you see exactly what the work did.',
  },
];

/* ---- the glass cards: the job, drawn legibly over the film --------------- */

const QUERIES = ['furnace repair near me', 'collision repair near me', 'used alternator near me'];

function FoundCard() {
  const [q, setQ] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setInterval(() => setQ((x) => (x + 1) % QUERIES.length), 3200);
    return () => window.clearInterval(t);
  }, []);
  return (
    <div className="sh-card">
      <div className="shc-search">
        <span className="shc-glass" aria-hidden="true" />
        <span className="shc-q" key={q}>{QUERIES[q]}</span>
      </div>
      <ol className="shc-pack">
        <li className="you">
          <span className="pin" aria-hidden="true" />
          <span className="nm"><b>Your business</b><small>Open now &middot; 4.9 &#9733;</small></span>
          <span className="tag">Call</span>
        </li>
        <li>
          <span className="pin" aria-hidden="true" />
          <span className="nm"><b>The one below you</b><small>Closes soon</small></span>
        </li>
      </ol>
      <p className="shc-foot">The map pack. The call goes to the top one.</p>
    </div>
  );
}

function TrustedCard() {
  return (
    <div className="sh-card">
      <div className="shc-rev">
        <div className="stars" aria-label="Five stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p>&ldquo;Came out the same evening. Explained everything before he started.&rdquo;</p>
        <div className="shc-reply">
          <b>Reply from the owner</b>
          <span>Thank you - glad the heat is back on. Call me any time.</span>
        </div>
      </div>
      <p className="shc-foot">Every review answered, for the next person reading it.</p>
    </div>
  );
}

function AnsweredCard() {
  return (
    <div className="sh-card">
      <ul className="shc-log">
        <li><span className="t">7:04pm</span><span>Call to your line - you are on a job</span></li>
        <li className="ok"><span className="t">7:04pm</span><span>Answered by the desk</span></li>
        <li className="ok"><span className="t">7:06pm</span><span>No heat, Erin - sent to you by text</span></li>
      </ul>
      <p className="shc-foot">It never quotes and never commits a crew.</p>
    </div>
  );
}

function MeasuredCard() {
  return (
    <div className="sh-card">
      <div className="shc-count">
        <div><span>Calls</span><b>counted</b></div>
        <div><span>Forms</span><b>counted</b></div>
        <div><span>Reviews</span><b>answered</b></div>
      </div>
      <p className="shc-foot">Where you started, recorded before anything is touched.</p>
    </div>
  );
}

const CARDS = [FoundCard, TrustedCard, AnsweredCard, MeasuredCard];

/** How long each beat holds before the next one fades in (Derek: 2 to 3 seconds). */
const BEAT_MS = 2800;

export default function ScrollHero() {
  const secRef = useRef<HTMLElement | null>(null);
  const vids = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);
  const [portrait, setPortrait] = useState(false);
  const [films, setFilms] = useState(false);
  const [calm, setCalm] = useState(false); // reduced motion: no rotation
  const [inView, setInView] = useState(true);
  const [tabHidden, setTabHidden] = useState(false);
  const [hover, setHover] = useState(false);
  const paused = !inView || tabHidden || hover;
  const deadline = useRef(0);
  const remain = useRef(BEAT_MS);

  // Client-only decisions. The prerender ships stills.
  useEffect(() => {
    const mq = window.matchMedia('(orientation: portrait) and (max-width: 900px)');
    const upd = () => setPortrait(mq.matches);
    upd();
    mq.addEventListener?.('change', upd);
    setFilms(motionBudget().hero);
    setCalm(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    return () => mq.removeEventListener?.('change', upd);
  }, []);

  // Pause when nobody is watching: hero scrolled away, or the tab hidden.
  useEffect(() => {
    const el = secRef.current;
    let io: IntersectionObserver | null = null;
    if (el && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
      io.observe(el);
    }
    const vis = () => setTabHidden(document.hidden);
    document.addEventListener('visibilitychange', vis);
    return () => {
      io?.disconnect();
      document.removeEventListener('visibilitychange', vis);
    };
  }, []);

  // The timer. Each beat holds BEAT_MS; a pause keeps what was left of the beat.
  useEffect(() => {
    if (calm) return;
    if (paused) {
      remain.current = Math.max(200, deadline.current - performance.now());
      return;
    }
    deadline.current = performance.now() + remain.current;
    const t = window.setTimeout(() => {
      remain.current = BEAT_MS;
      setActive((a) => (a + 1) % BEATS.length);
      setTick((x) => x + 1);
    }, remain.current);
    return () => window.clearTimeout(t);
  }, [paused, calm, tick]);

  // Films. Desktop holds the beat on screen plus the next one, preloading.
  // Phones hold one film only, the first beat's; the other beats are stills.
  useEffect(() => {
    if (!films) return;
    const small = window.matchMedia('(max-width: 900px)').matches;
    const next = (active + 1) % BEATS.length;
    vids.current.forEach((v, i) => {
      if (!v) return;
      const keep = small ? i === 0 : i === active || i === next;
      if (keep) {
        const want = v.dataset.src || '';
        if (want && v.getAttribute('src') !== want) {
          v.preload = 'auto';
          v.setAttribute('src', want);
          v.load();
        }
        if (i === active && !paused) void v.play().catch(() => {});
        else v.pause();
      } else {
        v.pause();
        if (v.getAttribute('src')) {
          v.removeAttribute('src');
          v.load();
        }
      }
    });
  }, [active, films, portrait, paused]);

  const goBeat = (i: number) => {
    remain.current = BEAT_MS;
    deadline.current = performance.now() + BEAT_MS;
    setActive(i);
    setTick((x) => x + 1);
  };

  return (
    <section
      className={'sh' + (paused ? ' paused' : '') + (calm ? ' still' : '')}
      ref={secRef}
      aria-label="What I do, in four steps"
      style={{ ['--beat' as string]: `${BEAT_MS}ms` }}
    >
      <div className="sh-stage">
        {HERO_BEATS.map((b, i) => {
          const key = portrait ? b.imgV : b.img;
          const src = film(key) || film(b.img);
          return (
            <div
              key={b.img}
              className={'sh-layer' + (i === active ? ' on' : '')}
              style={{ background: TONE[b.img] }}
              aria-hidden="true"
            >
              <picture>
                <source media="(orientation: portrait) and (max-width: 900px)" srcSet={thumb(b.imgV)} />
                <source media="(max-width: 900px)" srcSet={thumb(b.img)} />
                <img
                  src={still(b.img)}
                  alt=""
                  loading={i === 0 ? 'eager' : 'lazy'}
                  {...(i === 0 ? ({ fetchpriority: 'high' } as Record<string, string>) : {})}
                  decoding={i === 0 ? 'sync' : 'async'}
                />
              </picture>
              {films && src ? (
                <video
                  ref={(el) => (vids.current[i] = el)}
                  data-src={src}
                  poster={portrait ? thumb(b.imgV) : still(b.img)}
                  muted
                  loop
                  playsInline
                  preload="none"
                  tabIndex={-1}
                />
              ) : null}
            </div>
          );
        })}
        <div className="sh-veil" aria-hidden="true" />

        <div className="wrap sh-in">
          <div
            className="sh-copy"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="sh-heads">
              {BEATS.map((b, i) => {
                const cls = 'sh-head' + (i === active ? ' on' : '');
                const inner = (
                  <>
                    {b.head} <span className="em">{b.em}</span>
                  </>
                );
                return i === 0 ? (
                  <h1 key={b.n} className={cls}>{inner}</h1>
                ) : (
                  <p key={b.n} className={cls} aria-hidden="true">{inner}</p>
                );
              })}
            </div>
            <div className="sh-beats">
              {BEATS.map((b, i) => (
                <div key={b.n} className={'sh-beat' + (i === active ? ' on' : '')} aria-hidden={i !== active}>
                  <span className="sh-n">{b.n} &middot; {b.word}</span>
                  <p>{b.line}</p>
                </div>
              ))}
            </div>
            <div className="ctas">
              <Link to={CTA_HREF} className="btn btn-primary">
                {CTA_LABEL} <Arrow />
              </Link>
              <a className="sh-call" href={`tel:${PHONE_E164}`}>or call {PHONE_DISP}</a>
            </div>
          </div>

          <div className="sh-cards" aria-hidden="true">
            {CARDS.map((C, i) => (
              <div key={i} className={'sh-cardwrap' + (i === active ? ' on' : '')}>
                <C />
              </div>
            ))}
          </div>
        </div>

        <nav className="sh-rail" aria-label="Hero steps">
          {BEATS.map((b, i) => (
            <button
              key={b.n}
              type="button"
              className={i === active ? 'on' : ''}
              onClick={() => goBeat(i)}
              aria-label={`${b.n} ${b.word}`}
              aria-current={i === active ? 'step' : undefined}
            >
              <span>
                {b.word}
                <i className="sh-fill" key={i === active ? `f${tick}` : `i${i}`} aria-hidden="true" />
              </span>
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
