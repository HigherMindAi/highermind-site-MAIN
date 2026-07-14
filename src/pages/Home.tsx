import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ServiceLadder from '../components/ServiceLadder';
import HeroField from '../components/HeroField';
import CatchmentReport from '../components/CatchmentReport';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP, EMAIL } from '../lib/site';
import { orgSchema, faqSchema, personSchema } from '../lib/schema';

const HOME_FAQ: [string, string][] = [
  [
    'What does it cost?',
    'It depends on the inflow your market needs, and I will not name a number before I have looked at it. Run the Catchment Audit first. It is free, it takes me forty minutes, and then the number means something.',
  ],
  [
    'Is there a contract?',
    'Ninety days, then month-to-month with thirty days notice. The build takes two weeks and a ranking needs a fair run to compound. Ninety days is the shortest honest window to judge it. Most people in this market will lock you in for a year.',
  ],
  [
    'I already have a receptionist.',
    'You do, and she is good. She is also one person who takes lunch, goes home at five, and cannot pick up while she is with a patient. I am not replacing her. I am covering the calls she never got the chance to take.',
  ],
  [
    'I already have a chatbot.',
    'You have a form that says hello. Most of them cannot tell a visitor whether you even offer the service they are asking about, cannot book, and hand everything to a human who is busy. That is a mailbox with an avatar.',
  ],
  [
    'Will an AI answering my phone put people off?',
    'They want an answer. Right now, at nine at night, they get a ring tone. Something that picks up, knows your practice, and books them in is not competing with a person. It is competing with nobody.',
  ],
  [
    'What exactly is the Catch Lock?',
    'Every enquiry gets answered and offered a booking. If one goes unanswered, that month is free. Not a credit. Not a discount. Free. The logs are the record, and you can see them any time.',
  ],
  [
    'How fast does it work?',
    'Cortex is live in fourteen days and catches enquiries from day one. Ranking compounds, so it is slower - the Rank Lock puts sixty days on the clock, starting the day I have what I need. I have never failed it.',
  ],
  [
    'Why one operator instead of an agency?',
    'You deal with the person doing the work. No account manager, no handoff to a junior team learning on your profile.',
  ],
];

export default function Home() {
  return (
    <main id="top">
      <Seo
        title="Local SEO & AI Front Desk That Books Every Lead | HigherMindAI"
        desc="Qualified traffic, then an AI front desk that answers, qualifies and books every enquiry, day or night. Any enquiry missed, that month is free. Free Catchment Audit."
        path="/"
        schema={[orgSchema(), personSchema(), faqSchema(HOME_FAQ)]}
      />

      {/* 1 - HERO */}
      <section className="hero">
        <HeroField />
        <div className="wrap">
          <div className="hero-grid solo">
            <div className="reveal">
              <span className="eyebrow">Demand engineering + an AI front desk</span>
              <h1>
                Every enquiry answered.{' '}
                <span className="em">Every one worth having, booked.</span>
              </h1>
              <p className="sub">
                Right now your market drains somewhere else. Either they cannot find you, or nobody
                answers when they do. <b>I close both.</b>
              </p>
              <div className="ctas">
                <Link to="/#contact" className="btn btn-primary">
                  Get your Catchment Audit <Arrow />
                </Link>
                <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
                  Call {PHONE_DISP}
                </a>
              </div>
              <div className="undercta">
                <span><span className="t">/</span> Answered and qualified</span>
                <span><span className="t">/</span> Booked into your calendar</span>
                <span><span className="t">/</span> Miss one, that month is free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 2 - THE TWO HOLES */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">01 &middot; The two holes</span>
            <h2>
              Invisible to most of your market.{' '}
              <span className="em">Unreachable to the rest.</span>
            </h2>
            <p className="lead">
              Two different problems. Most agencies sell a fix for one and walk away from the other.
            </p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">Hole one</div>
              <h3>They never see you</h3>
              <p>
                The top three of the Map Pack take most of the local calls. If you are not in it, the
                practice down the road that is takes the case that should have been yours. You never see
                it happen, so you never miss it.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">Hole two</div>
              <h3>They see you, and nobody picks up</h3>
              <p>
                An enquiry lands at nine at night, or while your front desk is with a patient. It rings
                out. By Tuesday that person has called two other practices and gone with whoever answered
                first. <b>This is the worse hole. They had already chosen you.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 3 - THE CATCHMENT. The flagship, but not the whole site. */}
      <section className="sec" id="system">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">02 &middot; The Catchment &middot; the flagship</span>
            <h2>
              Demand, welded to the thing that catches it.{' '}
              <span className="em">One loop.</span>
            </h2>
            <p className="lead">
              A catchment is the territory that drains into a single point. Yours is everyone nearby
              already searching for what you do.
            </p>
          </div>

          <div className="vgrid">
            <div className="vtile reveal">
              <div className="vt-n">The Inflow</div>
              <h3>Qualified traffic</h3>
              <p>
                Organic, paid, or both. Top three of the Map Pack, held. Google and Meta funnels built on
                the words your real buyers use. Not impressions - people with a wallet out.
              </p>
            </div>
            <div className="vtile feat reveal">
              <div className="vt-n">The Catch</div>
              <h3>Booked appointments</h3>
              <p>
                Cortex. An AI front desk trained on your practice. Answers in under sixty seconds, asks
                your qualifying questions, screens out the tyre-kickers, and books the rest straight into
                your calendar.
              </p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">The Report</div>
              <h3>Proof, monthly</h3>
              <p>
                Every enquiry that arrived, every one caught, every one that came in after hours, every
                appointment booked. With timestamps. You will never wonder whether this is working.
              </p>
            </div>
          </div>

          {/* Scannable. What actually lands. */}
          <div className="fit" style={{ marginTop: 26 }}>
            <div className="col yes reveal">
              <h3>What you get</h3>
              <ul>
                <li>Top-three Map Pack placement, engineered and held</li>
                <li>Every enquiry answered and qualified, 24/7</li>
                <li>Qualifying questions asked in your words, before it reaches you</li>
                <li>Appointments booked straight into your calendar</li>
                <li>No-shows chased automatically</li>
                <li>The Catchment Report on the first of every month</li>
              </ul>
            </div>
            <div className="col no reveal">
              <h3>What you do not get</h3>
              <ul>
                <li>A twelve-month lock-in</li>
                <li>An account manager between you and the work</li>
                <li>A guarantee that only starts paying out at month six</li>
                <li>A dashboard of impressions nobody can spend</li>
                <li>Leads resold to three of your competitors</li>
                <li>A junior learning on your profile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 4 - THE AUDIT. The door handle. */}
      <section className="sec" id="audit">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">03 &middot; The Catchment Audit &middot; free</span>
            <h2>
              Before I pitch you anything,{' '}
              <span className="em">I become your customer.</span>
            </h2>
            <p className="lead">
              Not an opinion. Evidence, gathered from your own business, that you cannot argue with.
              Forty minutes of my time. Yours to keep either way.
            </p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="sn">Part one</div>
              <h3>The Rank Read</h3>
              <p>
                A heatmap across your whole service area, not one pin. Every street where you do not
                exist. And the three names sitting above you.
              </p>
            </div>
            <div className="step reveal">
              <div className="sn">Part two</div>
              <h3>The Leak Log</h3>
              <p>
                Six calls to your office over five days at varied hours. Your web chat, asked a real
                question. Your contact form, submitted. Then I wait, and I time you.
              </p>
            </div>
          </div>
          <p className="terms-line reveal">
            <b>Nobody gets a price from me before their Audit is done.</b> Quoting you first would be a
            guess with a number on it.
          </p>
          <div className="ctas reveal">
            <Link to="/#contact" className="btn btn-primary">
              Run my Catchment Audit <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 5 - PROOF */}
      <section className="sec-sm">
        <div className="wrap">
          <div className="proof-grid">
            <div className="reveal">
              <span className="eyebrow">04 &middot; Proof, not promises</span>
              <h2 style={{ marginTop: 24 }}>
                A profile that did not exist.{' '}
                <span className="em">Number one in five months.</span>
              </h2>
              <p className="lead">
                No history, no reviews, no rankings. Built from nothing. His real numbers, straight off
                Google.
              </p>
              <div className="ctas" style={{ marginTop: 30 }}>
                <Link to="/proof/" className="btn btn-ghost">
                  See the whole case <Arrow />
                </Link>
              </div>
            </div>
            <div className="vcard reveal">
              <div className="vlab">Case &middot; a security systems installer, Atlantic Canada</div>
              <div className="vbig">
                From a profile that did not exist to <b>#1 for both money keywords</b>, and holding.
              </div>
              <p className="vnote">February to June 2026. Built from zero, ranked in five months, still there.</p>
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

      {/* The honest turn. The face belongs here, next to the admission - not in
             the footer, where it would only be decoration. */}
      <section className="gband who">
        <div className="wrap">
          <div className="who-grid reveal">
            <div>
              <figure className="who-shot">
                <img
                  src="/derek.webp"
                  srcSet="/derek-sm.webp 360w, /derek.webp 720w"
                  sizes="(max-width: 900px) 240px, 300px"
                  width={720}
                  height={882}
                  loading="lazy"
                  decoding="async"
                  alt="Derek, the operator behind HigherMindAI, based in Erin, Ontario"
                />
              </figure>
              <div className="who-name">
                <b>Derek</b>
                HigherMindAI &middot; Erin, Ontario
                <br />
                One operator. No account managers.
              </div>
            </div>
            <div>
              <span className="eyebrow">The honest part</span>
              <h2 style={{ marginTop: 24 }}>
                I am not going to make your phone ring{' '}
                <span className="em">and then walk away.</span>
              </h2>
              <p>
                Those 44 calls landed at a small business with a small team. Some were answered. Some
                were not. Nobody knows which, because nothing was catching them.
              </p>
              <p>
                I have ranked eight businesses. Most reached the top three. I held every guarantee I made
                and <b>I lost all eight inside eight days</b>, and every one of them told me they were
                happy. A ranking is a phone ringing in an empty room. <b>So I am not selling the hole any
                more.</b> I make it ring, and then I answer it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 6 - THE LOCKS */}
      <section className="sec" id="guarantee">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">05 &middot; The locks</span>
            <h2>
              Three commitments.{' '}
              <span className="em">One renews every morning.</span>
            </h2>
            <p className="lead">
              I never say trust me. I say what happens if I miss, and I let you check the logs.
            </p>
          </div>
          <div className="vgrid">
            <div className="vtile reveal">
              <div className="vt-n">The Rank Lock</div>
              <h3>First page in 60 days</h3>
              <p>
                Or you stop paying and I keep working free until you are there. Never failed it. Fastest
                build hit the top three in 30 days.
              </p>
            </div>
            <div className="vtile feat reveal">
              <div className="vt-n">The Catch Lock</div>
              <h3>Miss one, the month is free</h3>
              <p>
                Every enquiry answered and offered a booking. If one goes unanswered, that month is free.
                Not a credit. Not a discount. Free. No conditions attached to it.
              </p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">The Launch Lock</div>
              <h3>Live in 14 days</h3>
              <p>
                Or the build fee comes back in full. No conditions, no argument, no small print.
              </p>
            </div>
          </div>
          <p className="terms-line reveal">
            The first lock wins your business. <b>The second is why you are still here in two years</b> -
            it does not expire the day it comes true. I have to keep it every morning, forever.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* 6b - THE REPORT. The trust asset. Every competitor promises an owner
             dashboard. None of them will show you one before you have paid. */}
      <section className="sec" id="report">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">06 &middot; The Catchment Report</span>
            <h2>
              This lands on your desk on the first.{' '}
              <span className="em">Here it is, before you pay me anything.</span>
            </h2>
            <p className="lead">
              Everyone in this market promises you a dashboard. Nobody shows you one until after you
              have signed. This is the whole thing, and it is also where the Catch Lock stops being a
              slogan: if the first two numbers ever fail to match, that month is free.
            </p>
          </div>
          <CatchmentReport />
        </div>
      </section>

      <div className="divider" />

      {/* 7 - EVERYTHING I DO. The Catchment leads, it does not swallow the page. */}
      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">07 &middot; Everything I do</span>
            <h2>
              The Catchment is the flagship.{' '}
              <span className="em">It is not the only thing I build.</span>
            </h2>
            <p className="lead">
              Ranking, paid funnels, AI systems, sites that convert, service-area expansion. Each one
              stands on its own, and each one can be bought on its own. If that is genuinely what the job
              needs, I will say so on the first call.
            </p>
          </div>
          <ServiceLadder />
        </div>
      </section>

      <div className="divider" />

      {/* 8 - FIT */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">08 &middot; Straight talk</span>
            <h2>Whether this is for you.</h2>
            <p className="lead">A no is a perfectly good answer, and it is faster than a bad yes.</p>
          </div>
          <div className="fit">
            <div className="col yes reveal">
              <h3>This is for you if</h3>
              <ul>
                <li>One new client is worth real money, not a few hundred dollars</li>
                <li>Your front desk is one or two people who cannot always pick up</li>
                <li>You spend on marketing and cannot prove what it returns</li>
                <li>You want booked appointments, not impressions</li>
              </ul>
            </div>
            <div className="col no reveal">
              <h3>This isn&rsquo;t for you if</h3>
              <ul>
                <li>You are shopping purely on price</li>
                <li>You would rather not know how many enquiries you are missing</li>
                <li>You would rather rent leads than own the channel</li>
                <li>You want page one overnight, before the work compounds</li>
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
            <span className="eyebrow center">09 &middot; Questions</span>
            <h2>Before you call.</h2>
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
              <span className="eyebrow">10 &middot; The Catchment Audit</span>
              <h2 style={{ marginTop: 24 }}>
                Tell me your practice and your city.{' '}
                <span className="em">I will tell you what is draining away.</span>
              </h2>
              <p className="lead">
                No pitch, no price, no obligation. I run the rank read, I run the leak log, and I send
                you both.
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
