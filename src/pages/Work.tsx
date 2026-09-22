import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import WorkCard from '../components/WorkCard';
import Plate from '../components/Plate';
import CTAStrip from '../components/CTAStrip';
import { WORK } from '../lib/work';
import { STOREFRONT } from '../lib/ladder';
import { orgSchema, breadcrumbs, workSchema } from '../lib/schema';

/**
 * /work/ - selected builds.
 *
 * Honest by construction. What was built and what it does, never a performance
 * figure, because a performance figure on a portfolio is the one claim a
 * prospect can check and the one nobody ever sources. v15: each build is tagged
 * with the ladder step it sits in, and the page closes on the one CTA.
 */
export default function Work() {
  return (
    <main>
      <Seo
        title="Selected Work | Website Builds by HigherMindAI"
        desc="Websites built to do a job rather than sit there - a part finder on year, make, model and trim. Selected builds by HigherMindAI, Erin, Ontario."
        path="/work/"
        schema={[
          orgSchema(),
          breadcrumbs([['Home', '/'], ['Work', '/work/']]),
          workSchema(WORK.map((w) => ({ name: w.name, url: w.href, line: w.line, built: w.built }))),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Work
            </div>
            <span className="eyebrow">Selected work</span>
            <h1 style={{ marginTop: 22 }}>
              Sites that do a job, <span className="em">not sites that sit there.</span>
            </h1>
            <p className="sub">
              Almost every local business is running one process by hand every day - reading a part
              number down the phone, taking a booking on paper, chasing a quote through a text
              thread. <b>I find that process and build the thing that eats it</b>, then wrap it in a
              site worth arriving at. That is{' '}
              <Link to={STOREFRONT.href}>{STOREFRONT.name}</Link>, the third step: the Foundation,
              and a site that sells.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap">
          <div className="workgrid">
            {WORK.map((w) => (
              <WorkCard key={w.slug} item={w} />
            ))}
          </div>
        </div>
      </section>

      {WORK.map((w) => (
        <section className="sec" key={w.slug}>
          <div className="wrap">
            <div className="sec-head left reveal">
              <span className="eyebrow">{w.tag}</span>
              <h2 style={{ marginTop: 22 }}>{w.name}</h2>
            </div>
            <div className="chap">
              <div className="chap-copy reveal">
                <p className="lead" style={{ marginTop: 0 }}>{w.body}</p>
                <ul className="plist" style={{ marginTop: 26 }}>
                  {w.built.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <p className="lead">
                  The build is live at{' '}
                  <a href={w.href} target="_blank" rel="noreferrer">
                    {w.url}
                  </a>
                  .
                </p>
              </div>
              <div className="chap-media reveal">
                {w.shot ? (
                  <figure className="shotfull">
                    <img src={w.shot} alt={`The ${w.name} website`} loading="lazy" decoding="async" />
                  </figure>
                ) : (
                  <Plate image="sStorefront" filmKey="sStorefront" ratio="4 / 3" scrim="soft" />
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTAStrip
        head={<>Nine minutes. <span className="em">No pitch.</span></>}
        sub="I open your site on a phone during the call and time how long it takes to become useful, then read your homepage title back to you exactly as it appears in a search result. If it does what it should, I will say so and that is the end of it."
      />
    </main>
  );
}
