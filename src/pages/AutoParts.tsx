import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import Plate from '../components/Plate';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { LAUNCH_WINDOW } from '../lib/property';
import { orgSchema, serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

// ---------------------------------------------------------------------------
// /auto-parts-recyclers/ - the vertical the live build was made in.
//
// This is the only page on the site where the argument is not described, it is
// shown: canadacarpart.com is a working year/make/model/trim part matcher with
// photo upload and a request composer, built for a Brampton supplier. A yard
// owner reading this page can go and use it.
//
// The opening finding is the strongest one in the kit: try to buy a part on
// his site the way a customer would, and time how long it takes to tell him a
// year, make, model and part. On almost every one of them you cannot, and the
// only route is the phone.
//
// The honest limit is load-bearing and stays on the page: a matcher quoting
// from an undisciplined inventory makes a yard look worse than the phone did.
// ---------------------------------------------------------------------------

const URL = '/auto-parts-recyclers/';

const DESC =
  'A part finder your customers can actually use, instead of a phone number and an address. Websites and local SEO for auto recyclers and salvage yards.';

const FAQS: [string, string][] = [
  [
    'What is a part matcher, in plain terms?',
    'A page where a customer picks a year, make, model and trim, says which part he needs, and sends you a request that arrives complete enough for the counter to act on. Add photographs where the part is damage-dependent. It replaces the twenty questions your counter staff currently ask on the phone, and it works at nine at night when nobody is there to ask them.',
  ],
  [
    'Can I see one that is actually running?',
    'Yes, and I would rather you used it than took my word for it. canadacarpart.com is a Brampton auto body and mechanical parts supplier. Pick a vehicle, pick a part, and watch what the request looks like by the time it reaches the counter. It is the same build I am describing, live, with a real business depending on it.',
  ],
  [
    'My phone already rings constantly. Why would I want this?',
    'Because a busy phone is not the same as a converting one, and a counter that is always on the phone is a counter that is not selling. The requests that arrive through a matcher come in complete, can be worked in order, and do not need somebody to stop what they are doing. The number worth knowing is what an average request converts at and what a shop account is worth in a year - bring both to the call and the arithmetic does itself.',
  ],
  [
    'What if my inventory is not tidy?',
    'Then do not buy the matcher yet, and I will tell you that on the call rather than after the invoice. A tool that quotes from an inventory you cannot vouch for makes you look worse than the phone did, and that is a harm I would have been paid to cause. Visibility and a straightforward rebuild first. The matcher when the shelf and the system agree with each other.',
  ],
  [
    'Do I need ranking as well, or just the site?',
    'Both, and in that order of dependence: the requests have to come from somewhere. A matcher with no traffic into it is a very good tool nobody uses. Most yards are also sitting in a broad category rather than the specific one buyers search, which is a single setting and usually most of the gap.',
  ],
  [
    'Is my whole price list going to be public?',
    'Only if you want it to be, and most yards do not. There is a difference between letting a customer specify exactly what he needs and publishing what you paid for it. What is public, what is quoted on request and what is never shown at all is your decision, made before anything is built and written into the scope.',
  ],
];

export default function AutoParts() {
  return (
    <main>
      <Seo
        title="Auto Recycler &amp; Parts Supplier Websites | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          orgSchema(),
          serviceSchema(
            'Website builds and local search marketing for auto recyclers and parts suppliers',
            DESC,
            URL
          ),
          breadcrumbs([['Home', '/'], ['Who I Help', '/who-i-help/'], ['Auto Parts and Recyclers', URL]]),
          faqSchema(FAQS),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">Auto parts and recyclers</span>
          <h1 className="reveal">
            Try to buy a part <span className="em">on your own website.</span>
          </h1>
          <p className="sub reveal">
            Go and do it now, the way a customer would. Time how long it takes to get from your
            front page to telling you a year, a make, a model and the part he needs. On nearly every
            yard site in the country <b>the answer is that you cannot</b> - the only route is the
            phone, which means every request has to survive a phone call to exist at all, and the
            ones that arrive at nine at night do not survive anything.
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
            A working build you can use today &middot; {LAUNCH_WINDOW} &middot; One yard per market.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------- the live one */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">01</span> Built, live, and yours to test</span>
            <h2>
              I am not going to describe it. <span className="em">Go and use it.</span>
            </h2>
            <p className="lead">
              canadacarpart.com is a Brampton auto body and mechanical parts supplier. The site
              carries a year, make, model and trim part matcher with multi-part selection, photo
              upload for damage-dependent parts, and a request composer that routes to the counter
              by text, by email and on screen. Pick a vehicle and send yourself a request.{' '}
              <b>Then try the same thing on your own site.</b>
            </p>
          </div>
          <div className="chap">
            <div className="chap-copy reveal">
              <ul className="plist">
                <li>
                  The customer specifies the vehicle rather than describing it, so the request
                  arrives complete instead of arriving as a conversation.
                </li>
                <li>
                  Photographs attach where the part depends on the damage, which is most of the
                  panels and most of the arguments.
                </li>
                <li>
                  Generated landing pages for each vehicle generation, so the yard ranks for the
                  specific searches buyers actually type rather than one page about used parts.
                </li>
                <li>
                  The counter works a queue in order instead of answering the same twenty questions
                  by voice, twelve times a day.
                </li>
              </ul>
              <div className="pfoot">
                <a
                  href="https://canadacarpart.com"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Use the live build <Arrow />
                </a>
                <Link to="/work/" className="btn btn-ghost">
                  How it was built
                </Link>
              </div>
            </div>
            <div className="chap-media reveal">
              <Plate image="inOrder" ratio="4 / 3" scrim="soft" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------ what it fixes */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow"><span className="n">02</span> What actually changes</span>
            <h2>
              A busy phone is not the same thing{' '}
              <span className="em">as a converting counter.</span>
            </h2>
          </div>
          <div className="vgrid">
            <div className="vtile reveal">
              <h3>Requests arrive complete</h3>
              <p>
                Vehicle, part, condition and contact, in one item. Nobody has to ring back to
                establish what the customer actually wants before anyone can price it.
              </p>
            </div>
            <div className="vtile reveal">
              <h3>The evening stops being dead</h3>
              <p>
                A shop foreman sourcing a part after close is not going to leave a voicemail. He
                sends a request or he sources it from the next yard, and until there is somewhere to
                send it, it is always the next yard.
              </p>
            </div>
            <div className="vtile reveal">
              <h3>Shop accounts, not just counter trade</h3>
              <p>
                A shop that can specify and send from its own bay on a Tuesday afternoon comes back
                on the Wednesday. A repeating account is worth a multiple of the ticket that started
                it, which is the number worth doing the arithmetic on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------- the honesty */}
      <section className="sec">
        <div className="wrap">
          <div className="prod-cols">
            <div className="vcard reveal">
              <div className="vlab">When I will tell you not to buy this</div>
              <div className="vbig">
                If you cannot tell me what is on the shelf, a tool that quotes from it will{' '}
                <b>make you look worse than the phone did.</b> That is a harm I would have been paid
                to cause, and I would rather sell you the smaller thing and say why.
              </div>
            </div>
            <div className="termpanel reveal">
              <div className="tp-label">What to buy instead, in that case</div>
              <p className="tp-note">
                Visibility and a straightforward rebuild. Get found for the specific parts searches
                you can actually fill, make the site fast and useful on a phone, and let the counter
                keep doing what it is already good at. The matcher is a conversation for when the
                shelf and the system agree with each other, and it will still be here.
              </p>
              <div className="tp-label" style={{ marginTop: 26 }}>What you decide, not me</div>
              <p className="tp-note">
                What is public, what is quoted on request and what is never shown at all. Most yards
                want a customer to be able to specify a part precisely without publishing a price
                list, and that is a scope decision made before anything is built rather than
                discovered afterwards.
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
        head={<>Bring two numbers <span className="em">to the call.</span></>}
        sub="What an average request converts at, and what a shop account is worth to you in a year. With those two the arithmetic does itself, and you will know inside nine minutes whether this is worth doing."
      />
    </main>
  );
}
