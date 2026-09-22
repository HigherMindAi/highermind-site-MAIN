import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import Plate from '../components/Plate';
import { Arrow, Go } from '../components/Icons';
import {
  CTA_LABEL,
  CTA_HREF,
  RANK_LOCK,
  LAUNCH_LOCK,
  TAP_LINE,
  STEPS,
  READ,
  TAP,
  FLIP,
  FOUNDATION,
  VERTICALS,
  LADDER_FAQ,
} from '../lib/ladder';
import { NightShiftStage, InflowStage } from '../components/Stages';
import { orgSchema, serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

// ---------------------------------------------------------------------------
// /trades/ - the wide bench, and one of the three verticals the outreach dials.
//
// v15: the page shows the ladder as three steps in order, with The Foundation
// highlighted because that is where a trade lands. The leaky story (calls
// ringing out while the owner is on tools) and the empty story (good at the
// work, nobody finds him) each get their own section and never share one.
//
// The trades are NAMED in the copy rather than each given a page, which is
// what lets one page rank for fifteen categories without pretending to be
// fifteen pages. /roofing/ and /arborists/ 301 here.
// ---------------------------------------------------------------------------

const URL = '/trades/';

const VERTICAL = VERTICALS.find((v) => v.key === 'trades')!;

const DESC =
  'Local SEO and call answering for trades. Found on the map, answered when you cannot pick up, every call counted. One operator, Erin, Ontario.';

const TRADES = [
  'Plumbing', 'HVAC and heating', 'Electrical', 'Concrete and paving',
  'Landscaping and hardscaping', 'Roofing', 'Tree care and arborists', 'Flooring',
  'Garage doors', 'Septic', 'Excavation', 'Painting', 'Fencing', 'Masonry',
  'Pest control', 'Junk removal', 'Mobile welding',
];

const FAQS: [string, string][] = [
  [
    'What happens to a call that comes in while my hands are full?',
    'It gets answered and qualified instead of going to voicemail. The desk takes the job type, the town, whether it is urgent and whether it is a repair or an install, books the visit into your calendar if it should be booked, and routes anything real to you on your own escalation order. You come off the job to booked work rather than four missed calls and a guess about which one was worth returning.',
  ],
  [
    'Why am I being out-ranked by companies smaller than mine?',
    'Usually one setting, and usually the category. A broad category picked at claim time quietly cannot rank for the specific thing you sell, so a two-van operation in the correct category beats a twelve-van operation in the wrong one. The second most common cause is a service area that was never drawn, which leaves the profile competing only in the postal code your address sits in. Neither is a reflection of how good you are, and neither fixes itself.',
  ],
  [
    'Should I buy a new website first?',
    'Almost never, and I will talk you out of it if the profile work is not in hand. A better site that nobody reaches is a more expensive version of the problem you already have, and you would be right to blame me for it. The Pin first, The Foundation next, The Storefront third. The exception is a site so slow or so broken that it is losing the traffic you already get, and I will tell you if that is what I find.',
  ],
  [
    'I already buy leads. Why change?',
    'A purchased lead is frequently sold to two of your competitors as well, costs the same every month forever, and stops dead the day you stop paying. A ranked position compounds and it stays yours. You do not have to stop buying leads to start owning the position - most contractors run both for a season and let the calls decide.',
  ],
  [
    'Does the desk quote prices or commit my crew?',
    'No. It never quotes a price, never estimates a job, never commits a crew to a date or a window you have not authorised, and never tells a caller whether something is covered by insurance. Those are hard escalations to a person, written into the agreement rather than promised on a call. The full list is published.',
  ],
  LADDER_FAQ[0],
  LADDER_FAQ[2],
];

export default function Trades() {
  return (
    <main>
      <Seo
        title="Local SEO and Call Answering for Trades | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          orgSchema(),
          serviceSchema('Local search, call answering and call tracking for trades and home services', DESC, URL),
          breadcrumbs([['Home', '/'], ['Who I Help', '/who-i-help/'], ['Trades', URL]]),
          faqSchema(FAQS),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Trades and home services</span>
          <h1 className="reveal">
            For the trade owner <span className="em">still on the tools.</span>
          </h1>
          <p className="sub reveal">
            Plumbers, electricians, roofers, landscapers, paving and fencing crews - two to twelve
            people with the owner still quoting, selling and running the job. I get you found on the
            map when somebody nearby goes looking, I put a desk on your line that answers when you
            cannot, and I count every call and form so you see exactly what it did.{' '}
            <b>Found first, answered second, then the ads.</b>
          </p>
          <div className="ctas reveal">
            <Link to={CTA_HREF} className="btn btn-primary">
              {CTA_LABEL} <Arrow />
            </Link>
          </div>
          <p className="trustline reveal">
            Found on the map &middot; Answered when you cannot &middot; Every call counted
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* -------------------------------------------------------- the ladder */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Three steps, in order</span>
            <h2>
              Most trades land on <span className="em">{VERTICAL.landsOn}.</span>
            </h2>
            <p className="lead">
              The way in is <Link to={READ.href}>{READ.name}</Link>: everything you have online,
              gone through properly in a week. Then three steps, always in this order. A trade busy enough to miss calls lands on the
              second one, because the calls already exist and are ringing out. Each step has a fixed
              price, said plainly on the nine minutes once I have seen what you have.
            </p>
          </div>
          <div className="ladder">
            {STEPS.map((s, i) => {
              const here = VERTICAL.landsOn.includes(s.name);
              return (
                <Link key={s.key} to={s.href} className={'svc reveal' + (here ? ' flag' : '')}>
                  <div className="si">{String(i + 1).padStart(2, '0')}</div>
                  <div className="sbody">
                    <span className="sn">
                      {s.position}
                      {here ? ' - where most trades start' : ''}
                    </span>
                    <h3>{s.name}</h3>
                    <p>{s.line}</p>
                  </div>
                  <Go />
                </Link>
              );
            })}
          </div>
          <p className="lead reveal">
            <Link to={TAP.href}>{TAP.name}</Link> comes last, always. Paid campaigns on your own
            accounts go on only once the profile and the desk are already working.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------ leaky: intake */}
      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div>
              <div className="sec-head left reveal">
                <span className="eyebrow leak">
                  <span className="n">01</span> Busy, and the phone rings out
                </span>
                <h2>
                  {FLIP.leaky.hook.replace(/\.$/, '')}{' '}
                  <span className="em">- while your hands are full.</span>
                </h2>
                <p className="lead">
                  Nobody is under a floor with a tool running and answering the phone at the same
                  time. That is not a discipline problem, it is physics, and it means your busiest
                  days are the days you lose the most work. The caller who rang while you were under
                  a sink does not ring back. He calls the next name on the list and that job is gone.
                  Inside {FOUNDATION.name}, one desk answers on the web and on your phone line. It
                  asks what kind of job, which town and whether it is urgent, books the visit, and
                  routes the real emergencies to whoever is on call.
                </p>
              </div>
              <ul className="plist reveal">
                <li>
                  Most of what arrives does not need you: do you do that kind of work, do you cover
                  my town, how far out are you booking, do you offer financing. Those do not need a
                  tradesman. They need something that replies.
                </li>
                <li>
                  A contact form is a filing cabinet, not a dispatcher. A request that lands at
                  eight on a Friday sits until Monday, and by Monday he has had two other quotes.
                </li>
                <li>
                  Administrative intake only. It never quotes, never estimates, never commits your
                  crew to a window you have not authorised - it routes to a person and stops.{' '}
                  <Link to="/scope-limits/">Where the desk stops</Link> is published.
                </li>
                <li>
                  Every call and form counted, so you see what came in, when, and what happened to
                  it.
                </li>
                <li>{LAUNCH_LOCK}</li>
              </ul>
            </div>
            <div className="stg-wrap reveal">
              <NightShiftStage />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ---------------------------------------------------- empty: the pin */}
      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div className="stg-wrap reveal">
              <InflowStage />
            </div>
            <div>
              <div className="sec-head left reveal">
                <span className="eyebrow">
                  <span className="n">02</span> Good at the work, and nobody finds you
                </span>
                <h2>
                  Found first when somebody nearby{' '}
                  <span className="em">goes looking for your trade.</span>
                </h2>
                <p className="lead">
                  {FLIP.empty.hook} Somebody with water coming through a ceiling does not scroll. He
                  taps the first names on the map and takes whoever answers, and if you are further
                  down the list you were never in that job at all. It never appears anywhere you
                  would look for it either. The companies beating you to it are usually not better
                  at the work. <b>They are higher on a list.</b> That is The Pin, and it sits inside
                  every step.
                </p>
              </div>
              <ul className="plist reveal">
                <li>
                  The profile rebuilt properly: correct primary category, every service named the
                  way customers actually search for it, and the real service area drawn instead of
                  a radius guess.
                </li>
                <li>
                  Every review answered and new ones asked for properly, with consistent details
                  across every directory - carried inside the step, never billed beside it.
                </li>
                <li>{RANK_LOCK}</li>
                <li>
                  The next town over built as its own ranked unit once the home town is holding -
                  offered <Link to="/how-it-works/#after">after you have chosen</Link>, never as
                  the first conversation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------------------- the bench */}
      <section className="sec">
        <div className="wrap">
          <div className="chap">
            <div className="chap-copy reveal">
              <div className="sec-head left">
                <span className="eyebrow">Who this is built for</span>
                <h2>
                  Two to twelve people, <span className="em">and the owner still on tools.</span>
                </h2>
                <p className="lead">
                  You quote it, you sell it, you schedule it, and most days you are still running a
                  crew. The findings do not care which trade it is - a category set wrong and a
                  phone that rings out at seven in the evening cost the same work in any of these.
                </p>
              </div>
            </div>
            <div className="chap-media reveal">
              <Plate image="vTrades" filmKey="vTrades" ratio="4 / 3" scrim="soft" />
            </div>
          </div>
          <div className="mesh reveal">
            <span className="mesh-lab">Built for</span>
            {TRADES.map((t) => (
              <span key={t} className="mesh-item">{t}</span>
            ))}
          </div>
          <p className="lead reveal">
            If yours is not on that list it almost certainly still fits. The desk is built on your
            own knowledge, your screening rules and your words, so the trade is an input rather than
            a version.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------- the honesty */}
      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div className="vcard reveal">
              <div className="vlab">What I will talk you out of</div>
              <div className="vbig">
                A new site before the profile work is a more expensive version of the same problem.{' '}
                <b>A better site that nobody reaches still nobody reaches.</b> I would rather lose
                the bigger invoice than sell you that.
              </div>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">The order, and why</div>
              <p className="tp-note">
                Found first, answered second, then the site, then the ads. Getting found creates the
                enquiry, it compounds, and you keep it. The desk catches what already rings out. The
                site is the third conversation and it usually lands on a straightforward rebuild -
                a page per service, a page per town you actually serve.
              </p>
              <div className="tp-label" style={{ marginTop: 26 }}>Why the ads wait</div>
              <p className="tp-note">{TAP_LINE}</p>
              <div className="tp-label" style={{ marginTop: 26 }}>Before you rank</div>
              <p className="tp-note">
                Tell me your booking lead time on the call. If you are already at capacity with no
                intention of adding a van or a tech, ranking you produces a worse review profile
                than you started with, and I will say so rather than take the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={FAQS} />
        </div>
      </section>

      <CTAStrip
        head={<>Nine minutes on <span className="em">where your calls go.</span></>}
        sub="Tell me your trade and your town. I will tell you where you come up, what happens to a call at seven in the evening, and which step fits - with its fixed price, said plainly."
      />
    </main>
  );
}
