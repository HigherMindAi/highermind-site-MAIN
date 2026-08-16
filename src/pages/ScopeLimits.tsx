import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { SCOPE_DOES, SCOPE_STOPS, CMRAO_LINE } from '../lib/property';
import { breadcrumbs, serviceSchema, faqSchema } from '../lib/schema';

const URL = '/scope-limits';

const DESC =
  'Exactly what the intake desk does and exactly where it stops, published before you ask. It routes to a licensed manager and never performs a licensed function.';

const SCOPE_FAQ: [string, string][] = [
  [
    'Why publish this at all?',
    'Because every firm I speak to is quietly worried about the same thing, and almost nobody selling AI intake will answer it in writing. A limit you only hear about after something goes wrong is not a limit, it is a surprise. Publishing it costs me nothing I was entitled to and gives you something you can forward to a board or a lawyer without asking me for it first.',
  ],
  [
    'Does the desk ever give a resident an answer about their own unit?',
    'It answers from the corporation\u2019s or the firm\u2019s own documents - hours, procedures, what to do about a specific category of problem, what the declaration says on a matter where the declaration is plain. What it will not do is interpret. The line is between reading you what is written and telling you what it means for your situation, and the second one is a licensed judgement.',
  ],
  [
    'What happens when somebody calls with a real emergency?',
    'It triages against criteria you set at kickoff - your criteria, not mine, because a firm carrying eleven corporations and a firm carrying two do not have the same threshold - and it routes on your escalation order. It does not decide whether something is an emergency by its own judgement, and it does not sit on anything overnight to be tidy about it.',
  ],
  [
    'Is this different in the United States?',
    'The principle is identical and the regime is not. Some states license community association managers and some do not, and a few license rental management under a real estate broker licence instead. The desk is configured to whichever applies where you operate, and the routing rule is the same everywhere: anything requiring a licence goes to the person who holds one.',
  ],
  [
    'What if I want the desk to do more than this?',
    'Then the answer is no, and it will keep being no. These limits are not a starting position to be negotiated up as the relationship gets comfortable. They exist because the moment the desk starts making licensed judgements, every hour of protection it was supposed to buy you turns into exposure instead.',
  ],
];

export default function ScopeLimits() {
  return (
    <main>
      <Seo
        title="Where the AI Intake Desk Stops: Published Scope Limits | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('AI Intake Desk - Published Scope Limits', DESC, URL),
          breadcrumbs([
            ['Home', '/'],
            ['Property Management', '/property-management'],
            ['Scope Limits', URL],
          ]),
          faqSchema(SCOPE_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp;{' '}
              <Link to="/property-management">Property Management</Link> &nbsp;/&nbsp; Scope Limits
            </div>
            <span className="eyebrow">Scope limits &middot; published, not buried</span>
            <h1>
              Everyone sells you what the desk does.{' '}
              <span className="em">This is where it stops.</span>
            </h1>
            <p className="sub">
              The question every principal is too polite to ask on a first call is what happens when
              the thing answers something it had no business answering. Here is the answer, in
              advance, on a page you can forward to your board or your lawyer without asking me for
              it. Nothing on this list moves later because the relationship has warmed up.
            </p>
            <div className="ctas">
              <Link to="/book/" className="btn btn-primary">
                Book a call <Arrow />
              </Link>
              <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
                Call {PHONE_DISP}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="locgroup reveal">
            <h3>What the desk does</h3>
            <div className="tp-list">
              {SCOPE_DOES.map((s) => (
                <div className="tp-note" key={s}>
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="locgroup reveal">
            <h3>Where it stops, every time</h3>
            <div className="tp-list">
              {SCOPE_STOPS.map((s) => (
                <div className="tp-note" key={s}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="vcard reveal">
            <div className="vlab">The licensing line</div>
            <div className="vbig">{CMRAO_LINE}</div>
            <p className="vnote">
              Where a jurisdiction does not license management, the same routing applies anyway. The
              limit is not there because a regulator is watching - it is there because an intake desk
              making judgement calls about a declaration is a liability wearing the costume of a
              convenience.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Why this is on a public URL</span>
            <h2 style={{ marginTop: 24, fontSize: 'clamp(26px,3.2vw,38px)' }}>
              A limit you discover afterwards <span className="em">is not a limit.</span>
            </h2>
            <p className="lead">
              I spent close to a decade in the justice system, and the lesson that transferred most
              cleanly is that the account of what happened matters more than what happened. A desk
              that quietly exceeded its remit at eleven on a Tuesday does not look like a small
              administrative drift once somebody is reading the log back to a board. So the remit gets
              published, the contacts get timestamped, and both of those exist before you need them
              rather than after.
            </p>
          </div>
          <div className="mesh reveal">
            <span className="mesh-lab">The rest of it</span>
            <Link to="/property-management-intake">The intake desk</Link>
            <Link to="/property-management/the-record">The Record</Link>
            <Link to="/the-keystone">The Keystone</Link>
            <Link to="/condominium-management-marketing">Condominium boards</Link>
            <Link to="/coverage">Where I work</Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow center">Scope questions</span>
            <h2>The ones worth asking.</h2>
          </div>
          <FAQ items={SCOPE_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={
          <>
            Read the limits. <span className="em">Now ask me the hard one.</span>
          </>
        }
        sub="Nine minutes. Bring the scenario you are actually worried about - the resident who calls three times, the board that wants to know who knew what - and I will tell you exactly what the desk would have done and what it would have refused to do."
      />
    </main>
  );
}
