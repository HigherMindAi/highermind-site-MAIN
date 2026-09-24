import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { CTA_LABEL, CTA_HREF } from '../lib/ladder';
import {
  US_MARKETS,
  CA_MARKETS,
  COVERAGE_INTRO,
  COVERAGE_QUEBEC,
  COVERAGE_EXCLUSIONS,
  COVERAGE_NOT_LISTED,
  COVERAGE_WHY_ONE,
  Market,
} from '../lib/coverage';
import { breadcrumbs, serviceSchema, faqSchema } from '../lib/schema';

const URL = '/coverage/';

const DESC =
  'Where I work: Erin, Ontario and the towns around it, plus eight American states and five Canadian regions. One business per trade, per market.';

const COVERAGE_FAQ: [string, string][] = [
  [
    'Do you actually work in the United States, or is this a Canadian firm claiming to?',
    'I am a Canadian operator working American firms, and I would rather you hear that from me than work it out later. I am based in Erin, Ontario, I call from Eastern time, and the eight states I work were chosen partly because I can reach them properly on that clock. The work itself - the profile, the listings, the reviews, the desk - is delivered remotely, which is how every firm in this category operates whether they say so or not.',
  ],
  [
    'What does one firm per market actually mean?',
    'It means I will not sell the same visibility work to two firms competing for the same owners. Market is defined at kickoff and written down, because a vague promise of exclusivity is worth nothing. It is not a scarcity tactic - it is a straightforward consequence of being one operator rather than an agency with a roster, and it is why the honest answer to your question is sometimes that your market is gone.',
  ],
  [
    'Do American firms pay the same as Canadian ones?',
    'No. American businesses are priced separately, in American dollars, and no figure for either country is published on this site. Each step has a fixed price, said plainly on the nine minutes once I have seen what you have, worked out against your own figures rather than converted from somebody else\u2019s.',
  ],
  [
    'My state is not listed. Is that a no?',
    'Usually not. It generally means I have not opened it yet rather than that I have ruled it out, and there are a small number I decline for regulatory reasons rather than capacity. Ask directly and I will tell you which of those it is in the nine minutes. Quebec is the one I say no to outright, and the reason is on this page.',
  ],
];

function MarketList({ heading, note, markets }: { heading: string; note: string; markets: Market[] }) {
  return (
    <div className="locgroup reveal">
      <h3>{heading}</h3>
      <p className="lead" style={{ marginTop: -6, marginBottom: 20 }}>
        {note}
      </p>
      <div className="tp-list">
        {markets.map((m) => (
          <div className="tp-note" key={m.name}>
            <b>{m.name}</b>
            {m.taken ? (
              <span style={{ color: 'var(--faint)' }}> &middot; one firm, currently at capacity</span>
            ) : null}
            <br />
            {m.places}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Coverage() {
  return (
    <main>
      <Seo
        title="Where I Work: Coverage by State and Province | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('Local search marketing and intake - coverage', DESC, URL),
          breadcrumbs([
            ['Home', '/'],
            ['Coverage', URL],
          ]),
          faqSchema(COVERAGE_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Coverage
            </div>
            <span className="eyebrow">Coverage &middot; two countries</span>
            <h1>
              One firm per trade, per market.{' '}
              <span className="em">Eight states, five Canadian regions.</span>
            </h1>
            <p className="sub">{COVERAGE_INTRO}</p>
            <div className="ctas">
              <Link to={CTA_HREF} className="btn btn-primary">
                {CTA_LABEL} <Arrow />
              </Link>
            </div>
            <p className="trustline">
              Trades &middot; Auto service and collision &middot; Auto parts and recyclers &middot;
              The desk set to your licensing regime
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <MarketList
            heading="United States"
            note="Eight states, chosen for market conditions and for the practical reason that I call from Eastern time and can reach them properly. Every trade in every one of them, with the desk configured to that state's licensing regime."
            markets={US_MARKETS}
          />

          <MarketList
            heading="Canada"
            note="Rental and condominium or strata management both. Where a province licenses management - the CMRAO in Ontario, RECA in Alberta, BCFSA in British Columbia - the desk is configured to route to a licensed manager and stop there."
            markets={CA_MARKETS}
          />
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The honest edges</span>
            <h2>
              Where the answer is no, <span className="em">and why.</span>
            </h2>
          </div>
          <div className="vgrid">
            <div className="vtile reveal">
              <div className="vt-n">01</div>
              <h3>Quebec</h3>
              <p>{COVERAGE_QUEBEC}</p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">02</div>
              <h3>California, Washington, Florida</h3>
              <p>{COVERAGE_EXCLUSIONS}</p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">03</div>
              <h3>Not on the list</h3>
              <p>{COVERAGE_NOT_LISTED}</p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">04</div>
              <h3>Already taken</h3>
              <p>{COVERAGE_WHY_ONE}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Based in Ontario, working both countries</span>
            <h2 style={{ marginTop: 24, fontSize: 'clamp(26px,3.2vw,38px)' }}>
              I am one operator in Erin, Ontario.{' '}
              <span className="em">That is not a disclaimer, it is the model.</span>
            </h2>
            <p className="lead">
              There is no office in Columbus and I am not going to invent one. The profile work is
              done on the Google profile you already hold, the desk answers wherever your phone
              rings, and every call and form is counted wherever it lands - none of which improves by
              being done from inside your city. What you get instead of a local address is one person
              who answers his own phone, publishes where the desk stops before you ask, and tells you
              in the nine minutes if your market is already gone.
            </p>
          </div>
          <div className="mesh reveal">
            <span className="mesh-lab">What runs in every market</span>
            <Link to="/how-it-works/">How it works</Link>
            <Link to="/local-seo/">Local SEO around Erin</Link>
            <Link to="/how-it-works/#the-pin">The Pin</Link>
            <Link to="/answers/what-is-a-virtual-receptionist/">The desk</Link>
            <Link to="/the-record/">Every call and form counted</Link>
            <Link to="/scope-limits/">Where the desk stops</Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow center">Coverage questions</span>
            <h2>Asked and answered.</h2>
          </div>
          <FAQ items={COVERAGE_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={
          <>
            Find out whether your market <span className="em">is still open.</span>
          </>
        }
        sub="Nine minutes. Tell me your town and your trade, and I will tell you whether the seat is free and where you currently sit against the businesses around you."
      />
    </main>
  );
}
