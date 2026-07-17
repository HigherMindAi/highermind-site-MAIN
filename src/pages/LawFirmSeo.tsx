import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import { Arrow } from '../components/Icons';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { serviceSchema, faqSchema, breadcrumbs } from '../lib/schema';

const URL = '/law-firm-seo';

const DESC =
  'Google ranking and lead generation for law firms: a managed Google Business Profile engineered into the Map Pack top three, plus paid campaigns on the highest-intent legal searches. First page in 60 days or you stop paying.';

const SEO_FAQ: [string, string][] = [
  [
    'How do law firms rank higher on Google Maps?',
    'With a managed Google Business Profile - correct category, complete practice-area services, consistent name, address and phone across directories, steady reviews, and local content - engineered into the Map Pack top three and held there.',
  ],
  [
    'How long does it take a law firm to rank?',
    'The Rank Lock puts 60 days on the clock, starting the day I have what I need. If your firm is not on the first page of the Map Pack by then, you stop paying the monthly and I keep working at no charge until you are there.',
  ],
  [
    'Which practice areas is this best for?',
    'Highest impact for personal injury, family and divorce, criminal defence, and immigration - urgent, high-value work where the first firm to answer usually gets retained.',
  ],
];

export default function LawFirmSeo() {
  return (
    <main>
      <Seo
        title="Google Ranking & Leads for Law Firms | HigherMindAI"
        desc={DESC}
        path={URL}
        schema={[
          serviceSchema('Google Ranking & Lead Generation for Law Firms', DESC, URL),
          breadcrumbs([['Home', '/'], ['Ranking for Law Firms', URL]]),
          faqSchema(SEO_FAQ),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <span className="eyebrow reveal">The demand half of The Watershed</span>
          <h1 className="reveal">
            The clients searching for a lawyer <span className="em">should find your firm first.</span>
          </h1>
          <p className="sub reveal">
            Google ranking and lead generation for law firms: a managed Google Business Profile
            engineered into the top three of the Map Pack and held there, plus - where you want speed
            - paid campaigns built on the most expensive keywords in legal search. The person typing
            "injury lawyer near me" at 11pm is inside your market. This is how they land on you.
          </p>
          <div className="ctas reveal">
            <Link to="/contact" className="btn btn-primary">
              Book a free Watershed Audit <Arrow />
            </Link>
            <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
              Call {PHONE_DISP}
            </a>
          </div>
          <p className="trustline reveal">
            First page of Google Maps in 60 days or you stop paying &middot; The ranking is an asset
            you own &middot; Paired with the intake desk that answers what it brings in.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">How the ranking is built</span>
            <h2>Engineered into the Map Pack, then held there.</h2>
          </div>
          <div className="vgrid">
            {[
              ['The profile, rebuilt', 'Correct primary category, complete practice-area services, consistent name, address and phone across every directory. The signals Google actually reads, set correctly.'],
              ['Reviews and authority', 'A structured review system that keeps velocity steady, plus the citation and local-content signals that decide who holds the top three.'],
              ['Owned, not rented', 'Organic ranking is an asset your firm owns. It keeps sending you clients long after the build is done, and it does not stop the day you pause spend.'],
            ].map(([h, b]) => (
              <div className="vtile reveal" key={h}>
                <h3>{h}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The other half</span>
            <h2>
              A ranking on its own is a phone ringing in an empty office.{' '}
              <span className="em">The intake desk is what answers it.</span>
            </h2>
          </div>
          <p className="lead reveal">
            Ranking creates the call. If no one picks up after five, the file goes to the next firm
            on the list. That is why ranking and intake are sold as one loop.{' '}
            <Link to="/law-firm-intake">See the intake half</Link>, or{' '}
            <Link to="/the-watershed">see the full Watershed</Link>.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">Questions</span>
            <h2>Answered plainly.</h2>
          </div>
          <FAQ items={SEO_FAQ} />
        </div>
      </section>

      <CTAStrip
        head={<>See where your firm actually ranks.</>}
        sub="The free Watershed Audit includes a rank read across your service area - exactly where your firm shows from every corner of the map, and where it does not."
      />
    </main>
  );
}
