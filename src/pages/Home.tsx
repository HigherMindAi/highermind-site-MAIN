import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ScrollHero from '../components/ScrollHero';
import LadderBlock from '../components/LadderBlock';
import Reel from '../components/Reel';
import FAQ from '../components/FAQ';
import Plate from '../components/Plate';
import WorkCard from '../components/WorkCard';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { FOUNDER } from '../lib/site';
import { GENERAL_FAQ } from '../lib/services';
import { FEATURED } from '../lib/work';
import { ONE_LINE, THE_QUESTION, FLIP, LADDER_FAQ, PROOF_PLAIN } from '../lib/ladder';
import { TOWNS } from '../lib/towns';
import { orgSchema, faqSchema, personSchema, ladderSchema } from '../lib/schema';

const HOME_FAQ: [string, string][] = [GENERAL_FAQ[0], ...LADDER_FAQ, ...GENERAL_FAQ.slice(1)];

const LOOP = [
  { k: 'Found', img: 'hFound', line: 'Your profile in the map when someone nearby looks.' },
  { k: 'Trusted', img: 'hTrusted', line: 'Photos, reviews answered, pages that look alive.' },
  { k: 'Answered', img: 'hAnswered', line: 'The desk picks up when you are on a job.' },
  { k: 'Measured', img: 'hMeasured', line: 'Every call and form counted. You see what it did.' },
] as const;

const WHO = [
  {
    name: 'Trades',
    href: '/trades/',
    img: 'vTrades',
    line: 'Plumbing, heating, electrical, roofing, landscaping. On the tools all day, and the evening call rings out.',
    lands: 'Most start on the Foundation',
  },
  {
    name: 'Auto Parts and Recyclers',
    href: '/auto-parts-recyclers/',
    img: 'vAutoParts',
    line: 'Nobody can tell from your site whether the part fits their car, so they phone - or they phone someone else.',
    lands: 'The Read, then the Storefront',
  },
  {
    name: 'Auto Service and Collision',
    href: '/auto-service-collision/',
    img: 'vAutoService',
    line: 'Bays full, hands dirty, phone ringing. The booking goes to the shop that answered.',
    lands: 'Most start on the Foundation',
  },
] as const;

export default function Home() {
  return (
    <main id="top">
      <Seo
        title="Local SEO & Call Answering for Trades and Auto | HigherMindAI"
        desc="I get local businesses found on Google, answer the calls they cannot pick up, and count every one. Trades, auto parts and auto service. Erin, Ontario."
        path="/"
        schema={[orgSchema(), personSchema(), ladderSchema(), faqSchema(HOME_FAQ)]}
      />

      <ScrollHero />

      {/* ------------------------------------------------ THE SENTENCE */}
      <section className="sec sentence">
        <div className="wrap">
          <div className="sentence-in reveal">
            <span className="eyebrow"><span className="n">01</span> What I do</span>
            <p className="big-line">{ONE_LINE}</p>
            <div className="sentence-row">
              <Reel />
              <span className="sentence-note">No sound needed. Six clips, one story.</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------ THE LADDER */}
      <section className="sec" id="ladder">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">02</span> Three steps, in order</span>
            <h2 style={{ marginTop: 22 }}>
              Three steps, in order. <span className="em">Most businesses start on the Foundation.</span>
            </h2>
            <p className="lead">{THE_QUESTION}</p>
          </div>
          <LadderBlock />
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------ THE FLIP */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow leak"><span className="n">03</span> Where the calls go</span>
            <h2 style={{ marginTop: 22 }}>
              A business loses calls one of two ways. <span className="em">Yours is one of these.</span>
            </h2>
          </div>
          <div className="flip">
            <div className="flip-card reveal">
              <Plate image="hAnswered" ratio="16 / 9" light scrim="soft" />
              <div className="flip-body">
                <span className="flip-k">The leaky funnel</span>
                <h3>{FLIP.leaky.hook}</h3>
                <p>
                  Busy, good at the work, and the phone rings while you are on a job. The call at
                  seven in the evening rings out, and whoever answers is on site tomorrow. You never
                  learn you were in the running.
                </p>
                <p className="flip-rec">
                  Where it lands: <Link to="/how-it-works/#the-foundation">The Foundation</Link>
                </p>
              </div>
            </div>
            <div className="flip-card reveal">
              <Plate image="sPin" ratio="16 / 9" light scrim="soft" />
              <div className="flip-body">
                <span className="flip-k">The empty funnel</span>
                <h3>{FLIP.empty.hook}</h3>
                <p>
                  Strong rating, quick to reply, and hardly any enquiries - because three names come
                  up in the map and yours is not one of them. Being fourth is not a close second.
                </p>
                <p className="flip-rec">
                  Where it lands: <Link to="/how-it-works/#the-pin">The Pin</Link> - or{' '}
                  <Link to="/how-it-works/#the-storefront">The Storefront</Link> if the site is weak too
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------ THE LOOP */}
      <section className="gband">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow center"><span className="n">04</span> The loop</span>
            <h2>
              Found, trusted, answered, measured. <span className="em">One loop, not four vendors.</span>
            </h2>
            <p>
              Each piece makes the next one worth more. A profile in the map sends the call; the
              photos and reviews make them pick you; the desk catches it when you cannot; the count
              shows you it happened. That is the Foundation, and it is why most start there.
            </p>
          </div>
          <div className="loop4">
            {LOOP.map((l, i) => (
              <div className="loop-tile reveal" key={l.k}>
                <Plate image={l.img} ratio="4 / 3" light scrim="soft" />
                <div className="loop-cap">
                  <span className="loop-n">0{i + 1}</span>
                  <b>{l.k}</b>
                  <span>{l.line}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------ WHO I HELP */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">05</span> Who I help</span>
            <h2 style={{ marginTop: 22 }}>
              Three kinds of business, <span className="em">worked out in detail.</span>
            </h2>
            <p className="lead">
              The same two failures show up in a heating company, a salvage yard and a collision
              centre: they never find you, or nobody answers. These three I build for every week.
              Property and condominium management runs on the same system.
            </p>
          </div>
          <div className="who3">
            {WHO.map((w) => (
              <Link to={w.href} className="who3-card reveal" key={w.name}>
                <Plate image={w.img} filmKey={w.img} ratio="16 / 10" light scrim="soft" />
                <div className="who3-body">
                  <h3>{w.name}</h3>
                  <p>{w.line}</p>
                  <span className="who3-lands">{w.lands} <Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
          <p className="who-more reveal">
            Also: <Link to="/property-management/">property management</Link> and{' '}
            <Link to="/condominium-management-marketing/">condominium management</Link>.{' '}
            <Link to="/who-i-help/">Everyone I work with</Link>.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------ THE WORK */}
      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">06</span> Selected work</span>
            <h2 style={{ marginTop: 22 }}>
              A site that does a job, <span className="em">not a site that sits there.</span>
            </h2>
            <p className="lead">{PROOF_PLAIN}</p>
          </div>
          <div className="workgrid">
            {FEATURED.map((w) => (
              <WorkCard key={w.slug} item={w} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------ HOME GROUND (ranking) */}
      <section className="sec">
        <div className="wrap">
          <div className="chap">
            <div className="chap-copy reveal">
              <span className="eyebrow"><span className="n">07</span> Home ground</span>
              <h2 style={{ marginTop: 22 }}>
                Based in Erin. <span className="em">Working across the Headwaters and beyond.</span>
              </h2>
              <p className="lead">
                I work with businesses across Canada and the United States, and I start at home.
                If you are in one of these towns, I already know who sits above you in the map.
              </p>
              <div className="townrow">
                {TOWNS.map((t) => (
                  <Link key={t.slug} to={`/local-seo/${t.slug}/`} className="town">
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="chap-media reveal">
              <Plate image="aerial" filmKey="aerial" ratio="4 / 3" scrim="soft" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------ WHO YOU DEAL WITH */}
      <section className="gband who">
        <div className="wrap">
          <div className="who-grid reveal">
            <div>
              <div className="who-shot">
                <img src="/derek.webp" width={300} height={300} loading="lazy" decoding="async"
                  alt={`${FOUNDER}, founder of HigherMindAI`} />
              </div>
              <div className="who-name"><b>{FOUNDER}</b>Founder &middot; Erin, Ontario</div>
            </div>
            <div>
              <span className="eyebrow"><span className="n">08</span> Who you deal with</span>
              <h2 style={{ marginTop: 24 }}>
                One operator. <span className="em">No account manager between you and the work.</span>
              </h2>
              <p>
                I built a produce delivery business to twenty-six cities, a warehouse and delivery
                teams - all of it on referrals, with no owned way of being found. When COVID took the
                referrals, it took the business with it. That is why the order here never changes:
                found first, answered second, and the ads last. Before that, law enforcement and the
                Canadian Armed Forces. I do the work myself, start to finish.
              </p>
              <p style={{ marginTop: 18 }}>
                <Link to="/about/">The full story</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec" id="faq">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">09</span> Questions</span>
            <h2 style={{ marginTop: 22 }}>Answered plainly.</h2>
          </div>
          <FAQ items={HOME_FAQ} />
        </div>
      </section>

      {/* ------------------------------------------------ THE NINE */}
      <section className="bleed">
        <Plate image="nine" filmKey="nine" ratio="21 / 9" scrim="hard">
          <div className="wrap">
            <div className="nine">
              <span className="num">Nine</span>
              <span className="word">minutes. Then you know which step fits.</span>
            </div>
          </div>
        </Plate>
      </section>

      <CTAStrip
        head={<>Take the nine minutes. <span className="em">I will already have looked.</span></>}
        sub="Before the call I pull up your profile, your site and the businesses above you in the map. On the call I show you what I found, which step fits, and the fixed price on it. Then you decide."
      />
    </main>
  );
}
