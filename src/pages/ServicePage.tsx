import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import NotFound from './NotFound';
import { Arrow } from '../components/Icons';
import { SERVICES, SERVICE_PAGES, PHASE_LABELS } from '../lib/services';
import { CITIES } from '../lib/cities';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { serviceSchema, breadcrumbs, faqSchema } from '../lib/schema';

const italicTeal = { fontStyle: 'italic', color: 'var(--teal)' } as const;

export default function ServicePage() {
  const { slug = '' } = useParams();
  const d = SERVICE_PAGES[slug];
  const meta = SERVICES.find((s) => s.slug === slug);
  if (!d || !meta) return <NotFound />;

  const name = meta.name;
  const url = `/services/${slug}/`;

  return (
    <main>
      <Seo
        title={d.title}
        desc={d.desc}
        path={url}
        schema={[
          serviceSchema(name, d.desc, url),
          breadcrumbs([['Home', '/'], ['Services', '/services/'], [name, url]]),
          faqSchema(d.faq),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; <Link to="/services/">Services</Link> &nbsp;/&nbsp; {name}
            </div>
            <span className="eyebrow">{d.eyebrow}</span>
            <h1>
              {d.h1Lead}
              <span className="em">{d.h1Em}</span>
            </h1>
            <p className="sub">{d.sub}</p>
            <div className="ctas" style={{ marginTop: 34, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
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
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">Why it works</span>
            <h2>What you&rsquo;re actually getting.</h2>
          </div>
          <div className="vgrid">
            {d.values.map(([t, p], i) => (
              <div className="vtile reveal" key={t}>
                <div className="vt-n">{String(i + 1).padStart(2, '0')}</div>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">The process</span>
            <h2>
              A repeatable system - <span style={italicTeal}>not a one-off push.</span>
            </h2>
          </div>
          <div className="steps reveal">
            {d.process.map(([t, p], i) => (
              <div className="step" key={t}>
                <div className="sn">{PHASE_LABELS[i]}</div>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow center">Questions</span>
            <h2>Before you call.</h2>
          </div>
          <FAQ items={d.faq} />
        </div>
      </section>

      <div className="divider" />

      {/* The reverse mesh: every service page feeds the city pages, and they feed back. */}
      <section className="sec-sm">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Where I work</span>
            <h2 style={{ marginTop: 24, fontSize: 'clamp(26px,3.2vw,38px)' }}>
              Based in Erin. <span className="em">Ranking businesses across Canada.</span>
            </h2>
          </div>
          <div className="mesh reveal">
            <span className="mesh-lab">Local SEO by city</span>
            {CITIES.map((c) => (
              <Link key={c.slug} to={`/local-seo/${c.slug}/`}>
                {c.city}
              </Link>
            ))}
          </div>
          <div className="mesh reveal">
            <span className="mesh-lab">The rest of the system</span>
            {SERVICES.filter((x) => x.slug !== slug).slice(0, 5).map((x) => (
              <Link key={x.slug} to={`/services/${x.slug}/`}>
                {x.name}
              </Link>
            ))}
            <Link to="/proof/">Proof</Link>
          </div>
        </div>
      </section>

      <CTAStrip
        head={<>Ready to put <span className="em">{name}</span> to work?</>}
        sub="Tell me your business and your city. I will tell you the most direct path to the result - and whether I can win it."
      />
    </main>
  );
}
