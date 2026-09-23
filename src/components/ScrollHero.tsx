import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { still, thumb, film, TONE, HERO_BEATS } from '../lib/media';
import { motionBudget } from '../lib/motion';
import { CTA_LABEL, CTA_HREF } from '../lib/ladder';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { Arrow } from './Icons';

// ---------------------------------------------------------------------------
// THE SCROLL HERO - v15, "show the work".
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
// Rules paid for on other builds (see the Storefront kit):
//   - Skip intro is mandatory. A pinned hero traps whoever wants the number.
//   - svh on phones, or the browser chrome cuts the last beat.
//   - Portrait films on portrait screens.
//   - Phones hold ONE film in memory: src stripped from inactive beats.
//   - Everything in the prerendered HTML is a still. Films arrive client-side.
// ---------------------------------------------------------------------------

interface Beat {
  n: string;
  word: string;
  head: string;
  line: string;
}

const BEATS: Beat[] = [
  {
    n: '01',
    word: 'Found',
    head: 'I get you found on Google.',
    line: 'Someone nearby has a problem tonight. Your pin is the one they see first.',
  },
  {
    n: '02',
    word: 'Trusted',
    head: 'I make you the one they trust.',
    line: 'Your own job photos, every review answered, pages that look alive.',
  },
  {
    n: '03',
    word: 'Answered',
    head: 'I answer when you cannot.',
    line: '7:04pm and you are on a job. The desk answers and sends you the details.',
  },
  {
    n: '04',
    word: 'Measured',
    head: 'And I count every call.',
    line: 'Every call and form counted, so you see exactly what it did.',
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

export default function ScrollHero() {
  const secRef = useRef<HTMLElement | null>(null);
  const vids = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [done, setDone] = useState(false);
  const [portrait, setPortrait] = useState(false);
  const [films, setFilms] = useState(false);

  // Client-only decisions. The prerender ships stills.
  useEffect(() => {
    const mq = window.matchMedia('(orientation: portrait) and (max-width: 900px)');
    const upd = () => setPortrait(mq.matches);
    upd();
    mq.addEventListener?.('change', upd);
    setFilms(motionBudget().hero);
    return () => mq.removeEventListener?.('change', upd);
  }, []);

  // Scroll -> active beat.
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      const el = secRef.current;
      if (!el) return;
      const span = el.offsetHeight - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, (window.scrollY - el.offsetTop) / span)) : 0;
      const idx = Math.min(BEATS.length - 1, Math.floor(p * BEATS.length * 0.9999));
      setActive(idx);
      setDone(p > 0.97);
      el.style.setProperty('--shp', String(p));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Films: the active beat plays; on phones everything else loses its src.
  useEffect(() => {
    if (!films) return;
    const small = window.matchMedia('(max-width: 900px)').matches;
    vids.current.forEach((v, i) => {
      if (!v) return;
      const keep = i === active || (!small && Math.abs(i - active) === 1);
      if (keep) {
        const want = v.dataset.src || '';
        if (want && v.getAttribute('src') !== want) {
          v.setAttribute('src', want);
          v.load();
        }
        if (i === active) void v.play().catch(() => {});
        else v.pause();
      } else {
        v.pause();
        if (small && v.getAttribute('src')) {
          v.removeAttribute('src');
          v.load();
        }
      }
    });
  }, [active, films, portrait]);

  const skip = () => {
    const el = secRef.current;
    if (!el) return;
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, el.offsetTop + el.offsetHeight - 60);
    html.style.scrollBehavior = prev;
  };

  const goBeat = (i: number) => {
    const el = secRef.current;
    if (!el) return;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + span * ((i + 0.5) / BEATS.length), behavior: 'smooth' });
  };

  return (
    <section className={'sh' + (done ? ' done' : '')} ref={secRef} aria-label="What I do, in four steps">
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
          <div className="sh-copy">
            <h1>
              Found on Google. <span className="em">Answered when you cannot pick up.</span>
            </h1>
            <div className="sh-beats">
              {BEATS.map((b, i) => (
                <div key={b.n} className={'sh-beat' + (i === active ? ' on' : '')} aria-hidden={i !== active}>
                  <span className="sh-n">{b.n} &middot; {b.word}</span>
                  <h2>{b.head}</h2>
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
            >
              <span>{b.word}</span>
            </button>
          ))}
        </nav>
        <button type="button" className="sh-skip" onClick={skip}>
          Skip intro
        </button>
      </div>
    </section>
  );
}
