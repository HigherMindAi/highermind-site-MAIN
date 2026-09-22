import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import CTAStrip from '../components/CTAStrip';
import { ANSWERS, answerPath } from '../lib/answers';
import { orgSchema, breadcrumbs, featurePageSchema, faqSchema } from '../lib/schema';

/**
 * /answers/ - the index of the answer-first pages.
 *
 * It carries every headline question and its short answer in full, so the hub
 * is itself worth quoting rather than being a list of links to somewhere
 * useful. A hub that only links is a page a model has no reason to read.
 */
export default function AnswersHub() {
  return (
    <main>
      <Seo
        title="Straight Answers on Local Search and Intake | HigherMindAI"
        desc="Plain answers to what business owners actually ask about Google Maps ranking, service areas, virtual receptionists and being found. No pitch."
        path="/answers/"
        schema={[
          orgSchema(),
          featurePageSchema(
            'Straight answers on local search, Google Business Profiles and intake',
            'Plain answers to the questions business owners actually ask about ranking, service areas and intake.',
            '/answers/'
          ),
          breadcrumbs([['Home', '/'], ['Answers', '/answers/']]),
          faqSchema(ANSWERS.map((a) => [a.q, a.answer])),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Answers
            </div>
            <span className="eyebrow">Straight answers</span>
            <h1 style={{ marginTop: 22 }}>
              The questions owners actually ask, <span className="em">answered plainly.</span>
            </h1>
            <p className="sub">
              Every one of these is a question I get asked on calls, answered the way I answer it
              on the phone rather than the way a marketing page would.{' '}
              <b>Several of them end with a reason not to hire me</b>, which is the point - if the
              answer only works when it sells something, it is not an answer.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec">
        <div className="wrap narrow">
          {ANSWERS.map((a) => (
            <div className="answersec reveal" key={a.slug} style={{ marginBottom: 46 }}>
              <h2 style={{ marginBottom: 14 }}>
                <Link to={answerPath(a.slug)}>{a.q}</Link>
              </h2>
              <p>{a.answer}</p>
              <p style={{ marginTop: 18 }}>
                <Link to={answerPath(a.slug)}>The longer answer</Link>
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip
        head={<>Bring the question <span className="em">you came with.</span></>}
        sub="Ask it in the nine minutes. If the honest answer is that you do not need me yet, that is the answer you will get."
      />
    </main>
  );
}
