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
  STOREFRONT,
  VERTICALS,
  PROOF_PLAIN,
  LADDER_FAQ,
} from '../lib/ladder';
import { orgSchema, serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

// ---------------------------------------------------------------------------
// /auto-parts-recyclers/ - the vertical the live build was made in, and one of
// the three verticals the outreach dials.
//
// The proof on this page is a BUILD, never a result: PROOF_PLAIN from
// ladder.ts, linking /work/. No figures, rankings or revenue attached to it.
//
// The opening finding is the strongest one in the kit: try to buy a part on
// his site the way a customer would, and time how long it takes to tell him a
// year, make, model and part. On almost every one of them you cannot, and the
// only route is the phone.
//
// Parts lands on "The Read, then The Storefront". The page tells the empty
// story (nobody can buy from the site) and keeps the leaky story out of it.
//
// The honest limit is load-bearing and stays on the page: a matcher quoting
// from an undisciplined inventory makes a yard look worse than the phone did.
// ---------------------------------------------------------------------------

const URL = '/auto-parts-recyclers/';

const VERTICAL = VERTICALS.find((v) => v.key === 'auto_parts')!;

const DESC =
  'Websites and local SEO for auto recyclers and parts suppliers. A part finder your customers can use, found on the map, every request counted.';

const FAQS: [string, string][] = [
  [
    'What is a part matcher, in plain terms?',
    'A page where a customer picks a year, make, model and trim, says which part he needs, and sends you a request that arrives complete enough for the counter to act on. Add photographs where the part is damage-dependent. It replaces the twenty questions your counter staff currently ask on the phone, and it works at nine at night when nobody is there to ask them.',
  ],
  [
    'Can I see one that is actually built?',
    'Yes. ' +
      PROOF_PLAIN +
      ' What was built and what it does is on the work page.',
  ],
  [
    'My phone already rings constantly. Why would I want this?',
    'Because a busy phone is not the same as a selling counter, and a counter that is always on the phone is a counter that is not selling. The requests that arrive through a matcher come in complete, can be worked in order, and do not need somebody to stop what they are doing. The number worth knowing is what an average request converts at and what a shop account is worth in a year - bring both to the call and the arithmetic does itself.',
  ],
  [
    'What if my inventory is not tidy?',
    'Then do not buy the matcher yet, and I will tell you that on the call rather than after the invoice. A tool that quotes from an inventory you cannot vouch for makes you look worse than the phone did, and that is a harm I would have been paid to cause. The profile and a straightforward rebuild first. The matcher when the shelf and the system agree with each other.',
  ],
  [
    'Do I need ranking as well, or only the site?',
    'Both, and in that order of dependence: the requests have to come from somewhere. A matcher with no traffic into it is a very good tool nobody uses. Most yards are also sitting in a broad category rather than the specific one buyers search, which is a single setting and usually most of the gap. The Storefront carries everything in The Foundation for that reason.',
  ],
  [
    'Is my whole price list going to be public?',
    'Only if you want it to be, and most yards do not. There is a difference between letting a customer specify exactly what he needs and publishing what you paid for it. What is public, what is quoted on request and what is never shown at all is your decision, made before anything is built and written into the scope.',
  ],
  LADDER_FAQ[1],
  LADDER_FAQ[0],
];

export default function AutoParts() {
  return (
    <main>
      <Seo
        title="Auto Recycler and Parts Supplier Websites | HigherMindAI"
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
            For parts suppliers and yards <span className="em">that sell by phone.</span>
          </h1>
          <p className="sub reveal">
            Auto recyclers, salvage yards and body and mechanical parts suppliers. I get you found on
            the map for the parts searches you can actually fill, I build a site a buyer can specify
            a part on, and every request and call that comes in is answered and counted. Try to buy a
            part on your own site now, the way a customer would. On nearly every yard site in the
            country <b>the only route is the phone.</b>
          </p>
          <div className="ctas reveal">
            <Link to={CTA_HREF} className="btn btn-primary">
              {CTA_LABEL} <Arrow />
            </Link>
          </div>
          <p className="trustline reveal">
            Found on the map &middot; Answered when you cannot &middot; Every request counted
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
              Most yards start with <span className="em">{VERTICAL.landsOn}.</span>
            </h2>
            <p className="lead">
              <b>
                The way in is <Link to={READ.href}>{READ.name}</Link>
              </b>
              : everything you have online, gone through properly in a week, with what is wrong
              ranked by what it costs you. On a parts business the finding is almost always the
              site, which is why yards usually land on the third step rather than the second. Each
              step has a fixed price, said plainly on the nine minutes once I have seen what you
              have.
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
                      {here ? ' - where most yards land after The Read' : ''}
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
            accounts go on only once the profile, the desk and the site are already working.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------------- the proof */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">
              <span className="n">01</span> A build, described plainly
            </span>
            <h2>
              What a parts site that does a job <span className="em">looks like.</span>
            </h2>
            <p className="lead">{PROOF_PLAIN}</p>
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
                  A page for each vehicle it stocks for, so there is something specific to be found
                  on for the searches buyers actually type, rather than one page about used parts.
                </li>
                <li>
                  The counter works requests in order instead of answering the same twenty questions
                  by voice, twelve times a day.
                </li>
              </ul>
              <p className="lead">
                That is {STOREFRONT.name}. What was built and what it does is on{' '}
                <Link to="/work/">the work page</Link>.
              </p>
            </div>
            <div className="chap-media reveal">
              <Plate image="vAutoParts" filmKey="vAutoParts" ratio="4 / 3" scrim="soft" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ------------------------------------------------- empty: the site */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">
              <span className="n">02</span> Good stock, and nobody finds it
            </span>
            <h2>
              {FLIP.empty.hook.split('. ')[0]}.{' '}
              <span className="em">Almost nobody does.</span>
            </h2>
            <p className="lead">
              A shop foreman sourcing a part after close is not going to leave a voicemail. He looks
              for a yard he can specify the part to. If your site is a phone number and an address,
              he never gets as far as you - and a buyer who never found you does not complain. It
              runs for years in yards that are otherwise very well run.
            </p>
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
              <h3>Found for the part, not the yard</h3>
              <p>
                The profile in the right category, every part line named the way buyers search for
                it, and a page per vehicle so the site has something specific to be found on.{' '}
                {RANK_LOCK}
              </p>
            </div>
            <div className="vtile reveal">
              <h3>Shop accounts, not only counter trade</h3>
              <p>
                A shop that can specify and send from its own bay on a Tuesday afternoon comes back
                on the Wednesday. A repeating account is worth a multiple of the ticket that started
                it, which is the number worth doing the arithmetic on.
              </p>
            </div>
          </div>
          <p className="lead reveal">
            Everything in {STOREFRONT.name} carries The Foundation with it - the profile, the desk
            that answers when the counter cannot, and every request counted so you see what the site
            did. {LAUNCH_LOCK}
          </p>
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
                The Foundation and a straightforward rebuild. Get found for the specific parts
                searches you can actually fill, make the site fast and useful on a phone, and let the
                counter keep doing what it is already good at. The matcher is a conversation for when
                the shelf and the system agree with each other, and it will still be here.
              </p>
              <div className="tp-label" style={{ marginTop: 26 }}>What you decide, not me</div>
              <p className="tp-note">
                What is public, what is quoted on request and what is never shown at all. Most yards
                want a customer to be able to specify a part precisely without publishing a price
                list, and that is a scope decision made before anything is built rather than
                discovered afterwards.
              </p>
              <div className="tp-label" style={{ marginTop: 26 }}>Why the ads wait</div>
              <p className="tp-note">{TAP_LINE}</p>
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
        sub="What an average request converts at, and what a shop account is worth to you in a year. With those two the arithmetic does itself, and inside nine minutes you know which step fits."
      />
    </main>
  );
}
