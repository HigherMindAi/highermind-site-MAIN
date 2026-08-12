import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import RecordTicker from '../components/RecordTicker';
import { RecordStage } from '../components/Stages';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { RECORD_LOCK } from '../lib/property';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/property-management/the-record';

const DESC =
  'Every contact logged with the time it came in and the time it was answered, and a monthly report written to be tabled at a board meeting without editing.';

const RECORD_FAQ: [string, string][] = [
  [
    'What is in the monthly report?',
    'What came in, through which channel, how fast it was answered, what happened next, and what it produced. It is written to be forwarded to an owner or tabled at a board meeting without editing - which is a design constraint, not a marketing line. If it needs rewriting before it can be shown to anybody, it has failed.',
  ],
  [
    'Who decides what counts as answered?',
    'You do, at kickoff, before go-live. Your response standard gets set first so the report measures your standard rather than mine. A firm managing eleven corporations and a firm managing two do not have the same threshold and should not be scored against one.',
  ],
  [
    'Can I export it if a specific date is in dispute?',
    'Yes. The contact log is continuous and searchable, and it exports. That is the entire point of it: when a resident says he called three times on a particular evening, you should be able to answer with a record rather than a recollection.',
  ],
  [
    'Does the record cover calls my own staff answered?',
    'It covers every contact that comes through the channels I build - the site, the chat desk and the voice desk. Contacts handled entirely on a staff mobile outside those channels are not captured, and I will not claim otherwise. In practice the after-hours and overflow traffic is where the disputes come from, and that is exactly what runs through the desk.',
  ],
];

const SCENARIOS: [string, string][] = [
  [
    'The resident who called three times',
    'He may well have. Without a log you are arguing recollection against recollection in front of a board, and recollection loses to confidence every time.',
  ],
  [
    'The board that wants to know who knew what',
    'A timestamped record of the contact, the triage decision and the routing turns a difficult meeting into a document you hand across the table.',
  ],
  [
    'The owner asking why the unit sat empty',
    'Enquiry volume, response times and outcomes, month over month. The answer stops being defensive and becomes evidence.',
  ],
  [
    'The renewal you should win and nearly lose',
    'Firms are replaced over perceived responsiveness far more often than over fees. This is the only thing that makes responsiveness a number.',
  ],
];

export default function TheRecord() {
  return (
    <main>
      <Seo
        title="The Record: Intake Logs & Board Reports | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('The Record - Timestamped Intake Logging and Reporting', DESC, URL),
          breadcrumbs([
            ['Home', '/'],
            ['Property Management', '/property-management'],
            ['The Record', URL],
          ]),
          faqSchema(RECORD_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">The Record - prove it</span>
          <h1 className="reveal">
            Your exposure is almost never the event.{' '}
            <span className="em">It is the account of the event.</span>
          </h1>
          <p className="sub reveal">
            Every contact logged with the time it came in and the time it was answered, plus a
            monthly report written to be forwarded to an owner or tabled at a board meeting without
            editing. Firms are replaced over perceived responsiveness far more often than over fees,
            and this is the only engine that turns responsiveness into a number you can put in front
            of somebody.
          </p>
          <div className="ctas reveal">
            <Link to="/book/" className="btn btn-primary">
              Book a call <Arrow />
            </Link>
            <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
              Call {PHONE_DISP}
            </a>
          </div>
          <p className="trustline reveal">
            Timestamped in and answered &middot; A monthly report you can forward unedited &middot;
            From month one.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ---------------------------------------------------------- the ticker */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What it looks like</span>
            <h2>Every contact, with a time on it.</h2>
          </div>
          <div className="prod-cols">
            <div className="reveal">
              <RecordTicker variant="property" />
            </div>
            <div className="stg-wrap reveal">
              <RecordStage />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------------- the badge */}
      <section className="sec">
        <div className="wrap">
          <div className="vcard reveal">
            <div className="vlab">Why this engine exists</div>
            <div className="vbig">
              I spent years in a job where{' '}
              <b>an incident was only ever as good as the record of it.</b> That is not a credential
              I lead with, but it is the reason this engine is built the way it is.
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* --------------------------------------------------------- scenarios */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Four rooms this ends up in</span>
            <h2>None of them are marketing conversations.</h2>
          </div>
          <div className="vgrid four">
            {SCENARIOS.map(([h, b]) => (
              <div className="vtile reveal" key={h}>
                <h3>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------- what lands */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">What lands, and when</span>
            <h2>Three deliverables, and one of them is yours to set.</h2>
          </div>
          <div className="vgrid">
            <div className="vtile feat reveal">
              <div className="vt-n">Monthly</div>
              <h3>The Keystone Report</h3>
              <p>
                What came in, through which channel, how fast it was answered, what happened next, and
                what it produced. Written to be forwarded to an owner or tabled at a board meeting
                without editing.
              </p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">Continuous</div>
              <h3>The contact log</h3>
              <p>
                Every intake event with a timestamp in and a timestamp answered. Searchable, and
                exportable when a specific date is in question.
              </p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">At kickoff</div>
              <h3>The response standard</h3>
              <p>
                You set what &ldquo;answered&rdquo; means for your firm before go-live, so the report
                measures your standard rather than mine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------------ the moat */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The moat</span>
            <h2>
              Ranking can be bought from anyone.{' '}
              <span className="em">This cannot.</span>
            </h2>
            <p className="lead">
              A defensible record of every contact your firm has received, structured for a board
              table, is a different category of thing - and once a firm has twelve months of it, it
              is not going back. That is the honest reason this engine ships with every
              configuration rather than being sold as an upgrade.{' '}
              <Link to="/the-keystone">See how it sits inside the Keystone</Link>.
            </p>
          </div>
          <p className="note reveal">{RECORD_LOCK}</p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={RECORD_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>Ask me what your firm could prove today.</>}
        sub="Nine minutes. If a board asked you tonight how fast the last thirty contacts were answered, could you tell them? That question is the whole pitch, and the answer is usually no."
      />
    </main>
  );
}
