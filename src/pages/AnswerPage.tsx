import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import FAQ from '../components/FAQ';
import CTAStrip from '../components/CTAStrip';
import NotFound from './NotFound';
import { Arrow } from '../components/Icons';
import { ANSWERS, answerPath } from '../lib/answers';
import { orgSchema, faqSchema, breadcrumbs, featurePageSchema } from '../lib/schema';

/**
 * One answer-first page (Waypoint lever G3).
 *
 * The page opens with the answer, in a block styled to be unmistakably THE
 * answer, before any argument. That block is written to stand alone, because
 * standing alone is the condition for being quoted.
 *
 * Schema: the page is a WebPage rather than a Service - it sells nothing - and
 * the question plus its follow-ups are emitted as an FAQPage so the direct
 * answer is machine-readable rather than only visible.
 */
export default function AnswerPage() {
  const { slug = '' } = useParams();
  const a = ANSWERS.find((x) => x.slug === slug);
  if (!a) return <NotFound />;

  const url = answerPath(a.slug);
  const others = ANSWERS.filter((x) => x.slug !== a.slug);

  return (
    <main>
      <Seo
        title={`${a.title} | HigherMindAI`}
        desc={a.desc}
        path={url}
        schema={[
          orgSchema(),
          featurePageSchema(a.q, a.desc, url),
          breadcrumbs([['Home', '/'], ['Answers', '/answers/'], [a.short, url]]),
          // The headline question leads, so it is the one a model lifts.
          faqSchema([[a.q, a.answer], ...a.more]),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; <Link to="/answers/">Answers</Link>
            </div>
            <span className="eyebrow">Straight answer</span>
            <h1 style={{ marginTop: 22 }}>{a.q}</h1>
          </div>

          {/* THE ANSWER. First thing on the page, before any argument. */}
          <div className="answerbox reveal">
            <span className="answerbox-lab">The short answer</span>
            <p>{a.answer}</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          {a.body.map(([h, p]) => (
            <div className="answersec reveal" key={h}>
              <h2>{h}</h2>
              <p>{p}</p>
            </div>
          ))}
          <div className="pfoot reveal" style={{ marginTop: 40 }}>
            <Link to={a.cta.href} className="btn btn-primary">
              {a.cta.label} <Arrow />
            </Link>
            <Link to="/book/" className="btn btn-ghost">
              Have me check yours
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head left reveal">
            <span className="eyebrow">What people ask next</span>
            <h2>The follow-ups.</h2>
          </div>
          <FAQ items={a.more} />
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Other straight answers</span>
          </div>
          <div className="mesh reveal">
            <span className="mesh-lab">Answers</span>
            {others.map((o) => (
              <Link key={o.slug} to={answerPath(o.slug)}>
                {o.short}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        head={<>Want me to check <span className="em">your own listing?</span></>}
        sub="Nine minutes. I will run the search your customer runs, read you what I find, and tell you which setting is costing you the most. If it is already right, I will say so and we are done."
      />
    </main>
  );
}
