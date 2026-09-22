import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import NotFound from './NotFound';
import { Arrow } from '../components/Icons';
import { SERVICES, SERVICE_PAGES, PHASE_LABELS } from '../lib/services';
import { LINE_TO_STEP, CTA_LABEL, CTA_HREF } from '../lib/ladder';
import { serviceSchema, featurePageSchema, breadcrumbs, faqSchema } from '../lib/schema';

/**
 * One delivery line, shown as what it is: a part of a step, never a thing to
 * pick on its own. The page opens on the step it sits inside (from
 * LINE_TO_STEP, keyed by slug), links that tag to the step on /how-it-works/,
 * and closes on the nine minutes. No menu of the other lines, no second CTA.
 */

/** The tag above the H1. The Tap and the add-ons read differently on purpose. */
function stepTag(step: string): string {
  if (step === 'The Tap') return 'The Tap - last, always';
  if (step === 'After you have chosen') return 'After you have chosen';
  return `Inside ${step}`;
}

export default function ServicePage() {
  const { slug = '' } = useParams();
  const d = SERVICE_PAGES[slug];
  const meta = SERVICES.find((s) => s.slug === slug);
  if (!d || !meta) return <NotFound />;

  const name = meta.name;
  const url = `/services/${slug}/`;
  const where = LINE_TO_STEP[slug] ?? { step: 'The Foundation', href: '/how-it-works/#the-foundation' };
  const tag = stepTag(where.step);
  const isAfter = where.step === 'After you have chosen';

  return (
    <main>
      <Seo
        title={d.title}
        desc={d.desc}
        path={url}
        schema={[
          /* A line retired as its own offer keeps its page and its rankings
             but stops claiming to be one. */
          meta.hidden
            ? featurePageSchema(`${name} - how it is carried`, d.desc, url)
            : serviceSchema(name, d.desc, url),
          breadcrumbs([['Home', '/'], ['How it works', '/how-it-works/'], [name, url]]),
          faqSchema(d.faq),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; <Link to="/how-it-works/">How it works</Link> &nbsp;/&nbsp; {name}
            </div>
            <Link to={where.href} className="eyebrow">
              {tag}
            </Link>
            <h1>
              {d.h1Lead}
              <span className="em">{d.h1Em}</span>
            </h1>
            <p className="sub">{d.sub}</p>
            <div className="ctas" style={{ marginTop: 34 }}>
              <Link to={CTA_HREF} className="btn btn-primary">
                {CTA_LABEL} <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head left reveal">
            <span className="eyebrow">{d.eyebrow}</span>
            <h2>What sits inside it.</h2>
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
            <span className="eyebrow">The work</span>
            <h2>
              Done in order, <span className="em">then held.</span>
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
            <h2>Before the nine minutes.</h2>
          </div>
          <FAQ items={d.faq} />
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm">
        <div className="wrap narrow">
          <div className="reveal">
            <span className="eyebrow">Where this sits</span>
            <p className="sub" style={{ marginTop: 18 }}>
              {isAfter ? (
                <>
                  This is offered after you have chosen a step, never as the step itself. The
                  order - The Read, The Pin, The Foundation, The Storefront, and The Tap last - is
                  on <Link to="/how-it-works/#after">how it works</Link>.
                </>
              ) : (
                <>
                  {name} is not sold on its own. It sits inside{' '}
                  <Link to={where.href}>{where.step}</Link>, and the whole order is on{' '}
                  <Link to="/how-it-works/">how it works</Link>.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      <CTAStrip
        head={<>Which step fits <span className="em">where you are.</span></>}
        sub="Nine minutes. I will already have looked at what you have, and each step has a fixed price, said plainly once I have seen it."
      />
    </main>
  );
}
