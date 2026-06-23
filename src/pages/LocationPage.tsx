import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import NotFound from './NotFound';
import { Arrow } from '../components/Icons';
import { cityBySlug, locFaq, REGION_FULL } from '../lib/cities';
import { PHONE_E164, PHONE_DISP, ADDRESS_STREET, POSTAL } from '../lib/site';
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
  const mapQuery = encodeURIComponent(
    `${ADDRESS_STREET}, ${c.city}, ${c.region} ${POSTAL}`
  );

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
      <div className="termpanel reveal">
        <div className="tp-label">Winnable terms I target in {c.city}</div>
        <ul className="tp-list">
          {[
            `${c.nearby[0].toLowerCase()} near me`,
            `best [your service] ${c.city}`,
            `[your service] ${c.city} ${c.region}`,
            `[your service] near me`,
          ].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="tp-note">
          I pin the work to the terms where your business can actually rank - not a saturated head term.
        </p>
      </div>
    );

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
                Book a call <Arrow />
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
              The customers are already searching. <span style={italicTeal}>The question is who they find.</span>
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
