import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import ServiceAreaMap from '../components/ServiceAreaMap';
import NotFound from './NotFound';
import { Arrow } from '../components/Icons';
import { cityBySlug, locFaq, REGION_FULL } from '../lib/cities';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { nearestCities } from '../lib/geo';
import { locationSchema, breadcrumbs, faqSchema } from '../lib/schema';

const italicTeal = { fontStyle: 'italic', color: 'var(--teal)' } as const;

export default function LocationPage() {
  const { slug = '' } = useParams();
  const c = cityBySlug(slug);
  if (!c) return <NotFound />;

  const rfull = REGION_FULL[c.region];
  const url = `/local-seo/${c.slug}/`;
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
        title={`Local SEO & Google Maps Ranking in ${c.city}, ${rfull} | HigherMindAI`}
        desc={`Get found first in ${c.city}, ${rfull}. I rank local businesses into the top 3 of Google Maps and keep them there. First page in 60 days or you stop paying.`}
        path={url}
        schema={[
          locationSchema(c, url),
          breadcrumbs([['Home', '/'], ['Locations', '/local-seo/'], [`${c.city}, ${rfull}`, url]]),
          faqSchema(faq),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; <Link to="/local-seo/">Locations</Link> &nbsp;/&nbsp; {c.city}, {rfull}
            </div>
            <span className="eyebrow">Local SEO &middot; {c.city}, {rfull}</span>
            <h1>
              Local SEO &amp; Google Maps ranking <span className="em">in {c.city}.</span>
            </h1>
            <p className="sub">{c.sub}</p>
            <div className="ctas" style={{ marginTop: 34, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/#contact" className="btn btn-primary">
                Book a Watershed Audit <Arrow />
              </Link>
              <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
                Call {PHONE_DISP}
              </a>
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
              The clients are already searching. <span style={italicTeal}>The question is who they find.</span>
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
              <h3>Winnable terms, not vanity</h3>
              <p>
                I pin the work to &ldquo;your service + {c.city}&rdquo; - the term where you can actually
                rank and the calls are real - not a saturated regional head term.
              </p>
            </div>
            <div className="vtile reveal">
              <div className="vt-n">03</div>
              <h3>The answer layer</h3>
              <p>
                Beyond the Map Pack, I build the citations and reviews that get a business named when
                someone asks an AI for the best in the {c.city} area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* The internal mesh. Free, and it compounds. */}
      <section className="sec-sm">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Also in the {c.city} area</span>
            <h2 style={{ marginTop: 24, fontSize: 'clamp(26px,3.2vw,38px)' }}>
              Ranking is half of it. <span className="em">Answering is the half that pays.</span>
            </h2>
            <p className="lead">
              Getting a {c.city} business into the top three is what I am known for. It is also only the
              inflow. The Watershed welds it to a 24/7 AI intake desk that answers, screens and books every
              enquiry it brings in, so the calls I win you do not ring out.
            </p>
          </div>
          <div className="mesh reveal">
            <span className="mesh-lab">The system</span>
            <Link to="/the-watershed">The Watershed</Link>
            <Link to="/law-firm-intake">The AI intake desk</Link>
            <Link to="/services/local-ranking-system/">The Local Ranking System</Link>
            <Link to="/services/service-area-expansion/">Service Area Expansion</Link>
            <Link to="/proof/">Proof</Link>
          </div>
          {near.length > 0 && (
            <div className="mesh reveal">
              <span className="mesh-lab">Nearby markets I also rank in</span>
              {near.map((n) => (
                <Link key={n.city.slug} to={`/local-seo/${n.city.slug}/`}>
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
        head={<>Get your {c.city} business <span className="em">into the top 3.</span></>}
        sub={`Tell me what you do and where in the ${c.city} area you want to show up first. I will tell you if I can win it.`}
      />
    </main>
  );
}
