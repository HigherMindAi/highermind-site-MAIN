import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { CTA_LABEL, CTA_HREF, FOUNDATION } from '../lib/ladder';
import { SCOPE_DOES, SCOPE_STOPS, CMRAO_LINE } from '../lib/property';
import { breadcrumbs, featurePageSchema, faqSchema } from '../lib/schema';

const URL = '/scope-limits/';

const DESC =
  'Exactly what the desk inside The Foundation does and where it stops, published before you ask. It routes to a person and never does what a licence is for.';

const SCOPE_FAQ: [string, string][] = [
  [
    'Why publish this at all?',
    'Because every owner I speak to is quietly worried about the same thing, and almost nobody selling an answering desk will answer it in writing. A limit you only hear about after something goes wrong is not a limit, it is a surprise. Publishing it costs me nothing I was entitled to and gives you something you can forward to a board or a lawyer without asking me for it first.',
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
        title="Where the Desk Stops: Published Scope | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          featurePageSchema('The desk - published scope limits', DESC, URL),
          breadcrumbs([
            ['Home', '/'],
            ['Who I Help', '/who-i-help/'],
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
              <Link to="/how-it-works/">How it works</Link> &nbsp;/&nbsp; Where the desk stops
            </div>
            <Link to={FOUNDATION.href} className="eyebrow">
              Inside The Foundation &middot; where the desk stops
            </Link>
            <h1>
              Everyone sells you what the desk does.{' '}
              <span className="em">This is where it stops.</span>
            </h1>
            <p className="sub">
              The desk sits inside The Foundation and answers when you cannot, on the web or on your
              phone line. The question every owner is too polite to ask is what happens when it
              answers something it had no business answering. Here is the answer, in advance, on a
              page you can forward to your partner, your board or your lawyer without asking me for
              it. Nothing on this list moves later because the relationship has warmed up.
            </p>
            <div className="ctas">
              <Link to={CTA_HREF} className="btn btn-primary">
                {CTA_LABEL} <Arrow />
              </Link>
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

      <section className="sec" id="by-trade">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">By trade</span>
            <h2>
              One desk, <span className="em">and the edges move with the trade.</span>
            </h2>
            <p className="lead">
              The desk performs administrative intake in every trade I build for. What changes is
              which judgement is reserved to a licensed or qualified person, and each one is
              configured as a hard escalation rather than a judgement call.
            </p>
          </div>
          <div className="vgrid reveal">
            <div className="vtile">
              <h3>Property &amp; condominium management</h3>
              <p>
                Administrative intake only. It never interprets a declaration, never rules common
                element versus unit, never authorises an expenditure, never puts dates on statutory
                processes, never touches another owner&rsquo;s file, and never performs a function
                reserved to a licensed manager.
              </p>
            </div>
            <div className="vtile">
              <h3>Auto service &amp; collision</h3>
              <p>
                It never quotes a repair, never estimates a job, never states or implies whether
                damage is covered by a policy, never contacts an insurer or an adjuster, never
                discusses, absorbs, rebates or waives a deductible, and never commits your shop to a
                completion date or a loaner you have not authorised. It never tells a driver a
                vehicle is safe to drive.
              </p>
            </div>
            <div className="vtile">
              <h3>Auto parts &amp; recyclers</h3>
              <p>
                It never confirms a part is in stock unless your own system says so, never quotes a
                price you have not published, never states that a part will fit a vehicle it has not
                been matched to, never promises a delivery date, and never represents a used or
                aftermarket part as new or as carrying a warranty you have not set.
              </p>
            </div>
            <div className="vtile">
              <h3>Trades and home services</h3>
              <p>
                It never quotes a price, never estimates a job, never commits a crew to a date or an
                attendance window you have not authorised, never states or implies whether damage is
                covered by insurance, and never touches a deductible. Where a trade is licensed, it
                routes to the licensed person and stops rather than performing any part of the
                reserved function.
              </p>
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
            <span className="mesh-lab">Where this sits</span>
            <Link to={FOUNDATION.href}>The Foundation</Link>
            <Link to="/answers/what-is-a-virtual-receptionist/">The desk</Link>
            <Link to="/the-record/">Every call and form counted</Link>
            <Link to="/trades/">Trades</Link>
            <Link to="/auto-service-collision/">Auto service &amp; collision</Link>
            <Link to="/auto-parts-recyclers/">Auto parts &amp; recyclers</Link>
            <Link to="/coverage/">Where I work</Link>
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
