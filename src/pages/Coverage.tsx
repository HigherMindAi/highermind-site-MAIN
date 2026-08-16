import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import {
  US_MARKETS,
  CA_MARKETS,
  COVERAGE_INTRO,
  COVERAGE_QUEBEC,
  COVERAGE_NOT_LISTED,
  COVERAGE_WHY_ONE,
  Market,
} from '../lib/coverage';
import { breadcrumbs, serviceSchema, faqSchema } from '../lib/schema';

const URL = '/coverage';

const DESC =
  'Where I work: eight US states and five Canadian regions, one property management firm per market. Rental portfolios and community association management, both tracks.';

const COVERAGE_FAQ: [string, string][] = [
  [
    'Do you actually work in the United States, or is this a Canadian firm claiming to?',
    'I am a Canadian operator working American firms, and I would rather you hear that from me than work it out later. I am based in Erin, Ontario, I call from Eastern time, and the eight states I work were chosen partly because I can reach them properly on that clock. The work itself - the profile, the citations, the reviews, the intake desk - is delivered remotely, which is how every firm in this category operates whether they say so or not.',
  ],
  [
    'What does one firm per market actually mean?',
    'It means I will not sell the same visibility work to two firms competing for the same owners. Market is defined at kickoff and written down, because a vague promise of exclusivity is worth nothing. It is not a scarcity tactic - it is a straightforward consequence of being one operator rather than an agency with a roster, and it is why the honest answer to your question is sometimes that your market is gone.',
  ],
  [
    'Is the pricing on this site what a US firm pays?',
    'No. The published figures are Canadian rates in Canadian dollars, for Canadian firms. US firms are priced separately in USD - different market, different rate - and I will give you that number on the call rather than have you convert the wrong one. I would rather explain the difference now than have you find it and wonder.',
  ],
  [
    'My state is not listed. Is that a no?',
    'Usually not. It generally means I have not opened it yet rather than that I have ruled it out, and there are a small number I decline for regulatory reasons rather than capacity. Ask directly and I will tell you which of those it is on the first call. Quebec is the one I say no to outright, and the reason is on this page.',
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
          serviceSchema('Property Management Marketing and AI Intake - Coverage', DESC, URL),
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
              One firm per market.{' '}
              <span className="em">Eight states, five Canadian regions.</span>
            </h1>
            <p className="sub">{COVERAGE_INTRO}</p>
            <div className="ctas">
              <Link to="/book/" className="btn btn-primary">
                Check your market <Arrow />
              </Link>
              <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
                Call {PHONE_DISP}
              </a>
            </div>
            <p className="trustline">
              Both tracks in every market &middot; Rental portfolios and community associations
              &middot; Scope configured to your licensing regime
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <MarketList
            heading="United States"
            note="Eight states, chosen for market conditions and for the practical reason that I call from Eastern time and can reach them properly. Both tracks in every one of them - rental portfolios and community association management - with the desk configured to that state's licensing regime."
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
              <h3>Not on the list</h3>
              <p>{COVERAGE_NOT_LISTED}</p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">03</div>
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
              There is no office in Columbus and I am not going to invent one. The ranking work is
              delivered to the Google profile your firm already holds, the intake desk runs wherever
              your phone rings, and the record arrives in your inbox - none of which improves by being
              done from inside your city. What you get instead of a local address is a single person
              who answers his own phone, publishes where the desk stops before you ask, and tells you
              on the first call if your market is already gone.
            </p>
          </div>
          <div className="mesh reveal">
            <span className="mesh-lab">What runs in every market</span>
            <Link to="/the-keystone">The Keystone</Link>
            <Link to="/property-management-seo">Ranking &amp; visibility</Link>
            <Link to="/property-management-intake">The intake desk</Link>
            <Link to="/property-management/the-record">The Record</Link>
            <Link to="/scope-limits">Where the desk stops</Link>
            <Link to="/condominium-management-marketing">Condominium boards</Link>
            <Link to="/local-seo/">Cities I build in</Link>
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
            Is your market <span className="em">still open?</span>
          </>
        }
        sub="Nine minutes. Tell me your city and how many doors you carry, and I will tell you whether the seat is free, where you currently sit against the firms around you, and what happens to an owner enquiry that lands at seven in the evening."
      />
    </main>
  );
}
