import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import ServiceAreaMap from '../components/ServiceAreaMap';
import NotFound from './NotFound';
import { Arrow } from '../components/Icons';
import { cityBySlug, locFaq, REGION_FULL, cityPath, LOCATIONS_HUB } from '../lib/cities';
import { CTA_LABEL, CTA_HREF, PIN, FOUNDATION } from '../lib/ladder';
import { nearestCities } from '../lib/geo';
import { locationSchema, breadcrumbs, faqSchema } from '../lib/schema';

const accentTeal = { color: 'var(--teal)' } as const;

export default function LocationPage() {
  const { slug = '' } = useParams();
  const c = cityBySlug(slug);
  if (!c) return <NotFound />;

  const rfull = REGION_FULL[c.region];
  const url = cityPath(c.slug);
  const faq = locFaq(c);

  // Home pin gets a live map. Once the GBP is verified, swap this query-based
  // embed for the official "Embed a map" place URL from the Business Profile.
  const mapQuery = encodeURIComponent(`${c.city}, ${c.region}, Canada`);

  // Erin is a real, verified pin, so Erin keeps a real map. Nobody else gets one:
  // an embed passes zero ranking signal and costs ~500KB of third-party JS on the
  // pages where speed is the entire product. They get the survey chart instead,
  // which is on-brand, weighs a few KB, and carries the internal links.
  const rightPanel =
    c.tier === 'home' ? (
      <div className="mapframe reveal" style={{ padding: 0 }}>
        <iframe
          title={`${c.city} location map`}
          src={`https://www.google.com/maps?q=${mapQuery}&z=13&output=embed`}
          style={{ width: '100%', height: '100%', border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    ) : (
      <ServiceAreaMap c={c} />
    );

  const near = nearestCities(c);

  return (
    <main>
      <Seo
        title={`Property Management SEO in ${c.city} | HigherMindAI`}
        desc={`Rank for "property management company ${c.city}" and get found by owners looking for a manager. Your profile rebuilt and held, backed by the Rank Lock.`}
        path={url}
        schema={[
          locationSchema(c, url),
          breadcrumbs([['Home', '/'], ['Ranking', '/property-management-seo/'], ['Locations', LOCATIONS_HUB], [`${c.city}, ${rfull}`, url]]),
          faqSchema(faq),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; <Link to={LOCATIONS_HUB}>Locations</Link> &nbsp;/&nbsp; {c.city}, {rfull}
            </div>
            <span className="eyebrow">Property management SEO &middot; {c.city}, {rfull}</span>
            <h1>
              Owners searching for a manager in {c.city}{}
              <span className="em">should find your firm first.</span>
            </h1>
            <p className="sub">{c.sub}</p>
            <div className="ctas" style={{ marginTop: 34, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to={CTA_HREF} className="btn btn-primary">
                {CTA_LABEL} <Arrow />
              </Link>
            </div>
            <div className="townrow">
              {c.nearby.map((t) => (
                <span className={'town' + (t === c.city ? ' primary' : '')} key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="maparea">
            <div className="reveal">
              <span className="eyebrow">In and around {c.city}</span>
              <h2 style={{ margin: '22px 0 16px' }}>{c.mapH2}</h2>
              <p className="lead" style={{ marginBottom: 0 }}>{c.mapPara}</p>
            </div>
            {rightPanel}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Why local search wins here</span>
            <h2>
              The owners are already searching. <span style={accentTeal}>The question is who they find.</span>
            </h2>
          </div>
          <div className="vgrid">
            <div className="vtile reveal">
              <div className="vt-n">01</div>
              <h3>The market here</h3>
              <p>{c.compNote}</p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">02</div>
              <h3>The term owners actually type</h3>
              <p>{c.termNote}</p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">03</div>
              <h3>The answer layer</h3>
              <p>{c.answerNote}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* The internal mesh. Free, and it compounds. */}
      <section className="sec-sm">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">The rest of the system</span>
            <h2 style={{ marginTop: 24, fontSize: 'clamp(26px,3.2vw,38px)' }}>
              Found is the first step. <span className="em">Answered is the one that pays.</span>
            </h2>
            <p className="lead">
              Ranking in {c.city} sits inside {PIN.name}, and it is only the inflow - an owner enquiry
              that arrives at seven in the evening and rings out is a door lost permanently, and you
              never learn it existed. {FOUNDATION.name} welds the position to a desk that answers and
              qualifies every enquiry it brings in, and counts every call and form so you see what it
              did.
            </p>
          </div>
          <div className="mesh reveal">
            <span className="mesh-lab">The rest of it</span>
            <Link to="/how-it-works/">How it works</Link>
            <Link to="/property-management-seo/">Visibility, inside {PIN.name}</Link>
            <Link to="/property-management-intake/">The desk, inside {FOUNDATION.name}</Link>
            <Link to="/the-record/">How delivery is evidenced</Link>
            <Link to="/condominium-management-marketing/">Condominium boards</Link>
            <Link to="/how-it-works/#after">More cities, after you have chosen</Link>
            <Link to="/proof/">Proof</Link>
          </div>
          {near.length > 0 && (
            <div className="mesh reveal">
              <span className="mesh-lab">Nearby markets I also work</span>
              {near.map((n) => (
                <Link key={n.city.slug} to={cityPath(n.city.slug)}>
                  {n.city.city} <span style={{ color: 'var(--faint)', fontSize: 12 }}>{Math.round(n.km)} km</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow center">{c.city} questions</span>
            <h2>Local, answered.</h2>
          </div>
          <FAQ items={faq} />
        </div>
      </section>

      <CTAStrip
        head={<>Put your {c.city} firm <span className="em">in front of the owners searching.</span></>}
        sub={`Nine minutes. I will read you where you actually show across the ${c.city} area, which three firms sit above you, and what happens to an owner enquiry that lands at seven in the evening.`}
      />
    </main>
  );
}
