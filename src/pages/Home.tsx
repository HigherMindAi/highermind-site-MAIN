import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ServiceLadder from '../components/ServiceLadder';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP, EMAIL } from '../lib/site';
import { orgSchema, faqSchema } from '../lib/schema';

const HOME_FAQ: [string, string][] = [
  [
    'Is there a contract?',
    'Ninety days, then month-to-month with thirty days notice. The build takes two weeks and a ranking needs a fair run to compound, so ninety days is the shortest honest window in which you can judge whether this works. It is not there to trap you, and any month I fail the Catch Lock you do not pay for it regardless of the term.',
  ],
  [
    'I already have a receptionist.',
    'You do, and she is good. She is also one person who takes lunch, goes home at five, and cannot pick up while she is with a patient. I am not replacing her. I am covering the calls she never got the chance to take.',
  ],
  [
    'I already have a chatbot.',
    'You have a form that says hello. Most of them cannot tell a visitor whether you even offer the service they are asking about, cannot book, and hand everything to a human who is busy. That is not a chatbot. It is a mailbox with an avatar.',
  ],
  [
    'Will a robot answering my phone put people off?',
    'They want an answer. Right now, at nine at night, they get a ring tone. A voice that picks up, knows your practice, takes their details and books them in is not competing with a person. It is competing with nobody.',
  ],
  [
    'What exactly is the Catch Lock?',
    'Every enquiry that arrives gets answered and offered a booking. If one goes unanswered, that month is free. Not a credit, not a discount. Free. The logs are the record and you can see them any time. It is the only guarantee I make that does not expire the day it comes true.',
  ],
  [
    'How fast will I actually see results?',
    'Cortex is live in fourteen days and starts catching enquiries the day it goes on. Ranking is slower because it compounds - early movement, then position, then holding it. The Rank Lock puts sixty days on the clock, and the clock starts the day I have what I need, not the day you sign. I have never failed it.',
  ],
  [
    'What do I actually receive every month?',
    'The Catchment Report, on the first. Every enquiry that arrived, every one that was caught, every one that came in after you had gone home, and every appointment that was booked, with the times on them. You will never have to wonder whether this is working. You will be holding the answer.',
  ],
  [
    'Why one operator instead of an agency?',
    'You work directly with the person doing the work. No account managers, no handoffs to a junior team learning on your profile. One operator, one system, one number to call.',
  ],
];

const italicTeal = { fontStyle: 'italic', color: 'var(--teal)' } as const;

export default function Home() {
  return (
    <main id="top">
      <Seo
        title="Local SEO & AI Front Desk That Books Every Lead | HigherMindAI"
        desc="I engineer the people already searching to find you, then an AI front desk answers, qualifies and books every one of them, day or night. Any enquiry missed, that month is free."
        path="/"
        schema={[orgSchema(), faqSchema(HOME_FAQ)]}
      />

      {/* 1 - HERO. The anchor is the booked appointment. */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid solo">
            <div className="reveal">
              <span className="eyebrow">The Catchment &middot; demand engineering + an AI front desk</span>
              <h1>
                Every enquiry answered.{' '}
                <span className="em">Every one worth having, booked.</span>
              </h1>
              <p className="sub">
                Your catchment is every person nearby already searching for what you do. Right now most
                of it drains somewhere else - either because they cannot find you, or because nobody
                answers when they do. <b>I close both.</b>
              </p>
              <div className="ctas">
                <Link to="/#contact" className="btn btn-primary">
                  Book a call <Arrow />
                </Link>
                <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
                  Call {PHONE_DISP}
                </a>
              </div>
              <div className="undercta">
                <span><span className="t">-</span> Answered in under 60 seconds</span>
                <span><span className="t">-</span> Booked into your calendar</span>
                <span><span className="t">-</span> Any enquiry missed, that month is free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 2 - THE TWO PROBLEMS. The thesis. */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The two holes</span>
            <h2>
              You are invisible to most of your market.{' '}
              <span style={italicTeal}>And the few who find you cannot reach you.</span>
            </h2>
            <p className="lead">
              Those are two different problems, and almost every agency sells you a fix for one of them
              and walks away from the other. I fix both, because half of this system is worthless
              without the other half.
            </p>
          </div>
          <div className="steps reveal">
            <div className="step">
              <div className="sn">Hole one</div>
              <h3>They never see you</h3>
              <p>
                The top three of the Map Pack take most of the local clicks and most of the local calls.
                If you are not in it, you are not in the conversation, and the practice two blocks away
                that is in it takes the case that should have been yours. That is revenue you never see,
                so you never miss it.
              </p>
            </div>
            <div className="step">
              <div className="sn">Hole two</div>
              <h3>They see you, and nobody picks up</h3>
              <p>
                An enquiry lands at nine at night, or while your front desk is with a patient, or during
                the hour they take for lunch. It rings out, or it sits in a form inbox until Tuesday. By
                then that person has called two other practices and gone with whoever answered first.
                This hole is the worse of the two, because they had already chosen you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 3 - THE CATCHMENT. The loop. */}
      <section className="sec" id="system">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The Catchment</span>
            <h2>
              Demand, welded to the thing that catches it.{' '}
              <span style={italicTeal}>One loop.</span>
            </h2>
            <p className="lead">
              A catchment is the entire territory that drains into a single point. Yours is every person
              nearby already searching for what you do. I engineer them toward you, and then I make sure
              not one of them is dropped at the other end.
            </p>
          </div>
          <div className="vgrid reveal">
            <div className="vtile">
              <div className="vt-n">One</div>
              <h3>The Inflow</h3>
              <p>
                Organic, paid, or both. Organic engineers your Google Business Profile into the top three
                of the Map Pack and holds it there, and builds every winnable town around you as its own
                ranked unit. It is an owned asset - it compounds, and it does not stop the day you stop
                paying. Paid builds Google and Meta funnels on research into the exact language your real
                buyers use. Faster, and you control the tap.
              </p>
            </div>
            <div className="vtile">
              <div className="vt-n">Two</div>
              <h3>The Catch</h3>
              <p>
                Cortex. An AI front desk trained on your practice. It answers from your actual knowledge
                rather than guessing. It asks your qualifying questions, in your words, and it screens out
                the people you do not want. It books the ones you do, straight into your calendar, while
                they are still in the conversation. Every web enquiry gets a real reply in under sixty
                seconds. No-shows get chased.
              </p>
            </div>
            <div className="vtile">
              <div className="vt-n">Three</div>
              <h3>The Report</h3>
              <p>
                The Catchment Report, on the first of every month. Every enquiry that arrived, every one
                that was caught, every one that came in after you had gone home, and every appointment
                that was booked, with the times on them. You will never have to wonder whether this is
                working. You will be holding the answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 4 - PROOF. Numbers, then the honest turn. Client is never named. */}
      <section className="sec-sm">
        <div className="wrap">
          <div className="proof-grid">
            <div className="reveal">
              <span className="eyebrow">Proof, not promises</span>
              <h2 style={{ marginTop: 22 }}>
                A profile that did not exist.{' '}
                <span style={italicTeal}>Number one in five months.</span>
              </h2>
              <p className="lead" style={{ margin: 0 }}>
                No history, no reviews, no rankings. Built from nothing, on the same clock and the same
                levers every client runs on. These are his real numbers, straight off the profile.
              </p>
            </div>
            <div className="vcard reveal">
              <div className="vlab">Case &middot; a security systems installer, Atlantic Canada</div>
              <div className="vbig">
                From a profile that did not exist to <b>#1 for both money keywords</b>, and holding.
              </div>
              <p className="vnote">
                February to June 2026. Built from zero, ranked in five months, still there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-sm" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stats reveal">
            <div className="s">
              <div className="n">18 &rarr; 96</div>
              <div className="l">monthly profile interactions</div>
            </div>
            <div className="s">
              <div className="n">44</div>
              <div className="l">calls straight off the profile</div>
            </div>
            <div className="s">
              <div className="n">184</div>
              <div className="l">clicks through to the site</div>
            </div>
            <div className="s">
              <div className="n"><em>#1</em></div>
              <div className="l">both money keywords</div>
            </div>
          </div>
        </div>
      </section>

      {/* The honest turn. This is the most persuasive thing on the page. */}
      <section className="gband">
        <div className="wrap narrow reveal">
          <span className="eyebrow center">The honest part</span>
          <h2>
            I am not going to make your phone ring{' '}
            <span className="em">and then walk away.</span>
          </h2>
          <p>
            Those 44 calls arrived at a small business with a small team. Some were answered. Some were
            not. Nobody knows which, because there was no system catching them. That is a real result
            with a real hole in it, and <b>I am not selling the hole any more.</b> I am going to make it
            ring, and then I am going to answer it.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* 5 - THE LOCKS. The Catch Lock carries the weight. */}
      <section className="sec" id="guarantee">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The locks</span>
            <h2>
              Three commitments.{' '}
              <span style={italicTeal}>One of them renews every morning.</span>
            </h2>
            <p className="lead">
              I do not ask you to believe me. I put the risk on my side of the table and let you check
              the logs.
            </p>
          </div>
          <div className="vgrid reveal">
            <div className="vtile">
              <div className="vt-n">The Rank Lock</div>
              <h3>First page in 60 days</h3>
              <p>
                First page of the Google Map Pack within 60 days of me having what I need, or you stop
                paying the monthly and I keep working at no charge until you are there. I have never
                failed it. My fastest build hit the top three in 30 days.
              </p>
            </div>
            <div className="vtile feat">
              <div className="vt-n">The Catch Lock</div>
              <h3>Miss one, and the month is free</h3>
              <p>
                Every enquiry that arrives gets answered and offered a booking. If one goes unanswered,
                that month is free. Not a credit. Not a discount. Free. The logs are the record and you
                can see them any time.
              </p>
            </div>
            <div className="vtile">
              <div className="vt-n">The Launch Lock</div>
              <h3>Live in 14 days</h3>
              <p>
                Live in 14 days, or I return your build fee in full. No conditions, no argument, no small
                print. It removes the last excuse standing between you and a live system.
              </p>
            </div>
          </div>
          <p className="terms-line reveal" style={{ marginTop: 'clamp(32px,4vw,52px)' }}>
            The first lock is how I win your business. <b>The second is why you will still be here in two
            years</b> - because it is not a promise that expires the day it comes true. It is a promise I
            have to keep every morning, forever, and if I ever stop keeping it, you stop paying.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* 6 - PRICING. Highest first, left to right. Total featured. Never $1,000 before $2,500. */}
      <section className="sec" id="pricing">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The offer</span>
            <h2>
              Four ways in.{' '}
              <span style={italicTeal}>One of them is the one I want you to take.</span>
            </h2>
            <p className="lead">
              Every configuration includes Cortex, because demand without a catch is the hole I just
              showed you. Build fees are split 50/50, half to start and half on launch.
            </p>
          </div>
          <div className="vgrid four reveal">
            <div className="vtile feat">
              <div className="vt-n">The Catchment &middot; Total</div>
              <div className="ptag">$2,500<sub>/mo</sub></div>
              <div className="pbuild">$3,000 build &middot; ad spend separate</div>
              <p>
                Organic builds the asset underneath while paid fills the calendar on top. Every route in
                is covered, and every person who takes one of them is caught at the other end. Bought
                separately these two run to $3,000 a month. Together they are $2,500, because they are
                better together and I would rather you took both.
              </p>
            </div>
            <div className="vtile">
              <div className="vt-n">The Catchment &middot; Paid</div>
              <div className="ptag">$2,000<sub>/mo</sub></div>
              <div className="pbuild">$2,000 build &middot; ad spend separate</div>
              <p>
                Google and Meta funnels built on research into the exact language your real buyers use,
                landing pages built to convert them, and Cortex catching every enquiry they send. Faster
                than organic, and you control the tap.
              </p>
            </div>
            <div className="vtile">
              <div className="vt-n">The Catchment &middot; Organic</div>
              <div className="ptag">$1,000<sub>/mo</sub></div>
              <div className="pbuild">$1,500 build</div>
              <p>
                Your Google Business Profile engineered into the top three and held there, every winnable
                town around you built as its own ranked unit, and Cortex catching what it brings in. An
                owned asset. It compounds, and it does not stop the day you stop paying.
              </p>
            </div>
            <div className="vtile">
              <div className="vt-n">Cortex &middot; standalone</div>
              <div className="ptag">$300<sub>/mo + usage</sub></div>
              <div className="pbuild">$1,000 build &middot; usage billed at cost</div>
              <p>
                The front desk on its own, for the practice that already has the traffic and cannot catch
                it. Trained on your knowledge, asks your qualifying questions, books straight into your
                calendar. No demand engineering, no markup on usage.
              </p>
            </div>
          </div>
          <p className="terms-line reveal">
            <b>Month-to-month after an initial 90 days.</b> The 90 days exist because the build takes two
            weeks and a ranking needs a fair run - not to trap anyone. Any month I fail the Catch Lock is
            free regardless.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* 7 - THE COMPONENTS. The ladder is parts, not the product. */}
      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The components</span>
            <h2>
              What the inflow is built from.{' '}
              <span style={italicTeal}>Parts, not the product.</span>
            </h2>
            <p className="lead">
              Each of these is a component of The Catchment. Each can be bought on its own if that is
              genuinely what the job needs. Most of the time it is not, and I will tell you so.
            </p>
          </div>
          <ServiceLadder />
        </div>
      </section>

      <div className="divider" />

      {/* 8 - FIT. Written for a practice owner, not a tradesman. */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Straight talk</span>
            <h2>Whether this is for you.</h2>
            <p className="lead">
              I would rather tell you up front than waste your time on a call. Here is who this fits, and
              who it does not.
            </p>
          </div>
          <div className="fit reveal">
            <div className="col yes">
              <h3>This is for you if</h3>
              <ul>
                <li>A new client or case is worth real money to you, not a few hundred dollars.</li>
                <li>Your front desk is one or two people who cannot always pick up.</li>
                <li>You already spend on marketing and cannot prove what it returns.</li>
                <li>You want booked appointments, not impressions.</li>
              </ul>
            </div>
            <div className="col no">
              <h3>This isn&rsquo;t for you if</h3>
              <ul>
                <li>You are shopping purely on price.</li>
                <li>You do not want to know how many enquiries you are currently missing.</li>
                <li>You would rather keep buying leads from an aggregator than own the channel.</li>
                <li>You want page one overnight, before the work compounds.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 9 - FAQ */}
      <section className="sec" id="faq">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow center">Questions</span>
            <h2>The things people ask before they call.</h2>
          </div>
          <FAQ items={HOME_FAQ} />
        </div>
      </section>

      <div className="divider" />

      {/* 10 - CONTACT. Netlify form "lead", honeypot on. Mechanics unchanged. */}
      <section className="sec" id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal">
              <span className="eyebrow">Find out what you are missing</span>
              <h2 style={{ marginTop: 22 }}>
                Tell me your practice and your city.{' '}
                <span className="em">I will tell you what is draining away.</span>
              </h2>
              <p className="lead">
                No pitch. A straight read on what your catchment is actually worth, how much of it you
                are losing right now, and whether I can close the gap.
              </p>
              <div className="contactline">
                <a href={`tel:${PHONE_E164}`}><span className="ic">&#9742;</span> {PHONE_DISP}</a>
                <a href={`mailto:${EMAIL}`}><span className="ic">&#9993;</span> {EMAIL}</a>
                <Link to="/local-seo/erin/"><span className="ic">&#9678;</span> Erin, Ontario &middot; serving Canada, US &amp; UK</Link>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
