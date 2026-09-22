import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import CalEmbed from '../components/CalEmbed';
import { PHONE_E164, PHONE_DISP, EMAIL, CAL_INTRO, CAL_LISTING, CAL_WEBSITE, HOURS_DISPLAY } from '../lib/site';
import { BOOKING_SOURCES } from '../lib/ladder';
import { orgSchema, breadcrumbs } from '../lib/schema';

/**
 * /book/ - the Google Business Profile appointment link, and where every
 * surface of the outreach lands. The URL never changes.
 *
 * THE FUNNEL (HANDOFF v6.0 section 8)
 *   - One question: "Where did you find me?" The answer is passed into the Cal
 *     booking as `source`, which prefills the booking question of the same
 *     identifier. It maps onto the Source column of The Choice.
 *   - Every UTM on the inbound link (utm_source, utm_medium, utm_campaign) is
 *     passed straight through to Cal so it is stored on the booking. The
 *     question is the backstop when a link arrives without one.
 *   - ?on=google-listing / ?on=9-minute-website-review still open the named
 *     Cal event types, because printed documents point at them.
 */

const UTM_TO_SOURCE: Record<string, string> = {
  phone: 'Phone call',
  milena: 'Phone call',
  undertow: 'Email',
  email: 'Email',
  website: 'Website',
  google: 'Google',
  meta: 'Facebook or Instagram',
  facebook: 'Facebook or Instagram',
  instagram: 'Facebook or Instagram',
  linkedin: 'LinkedIn',
  x: 'X',
  whatsapp: 'WhatsApp',
  referral: 'Referral',
  warm: 'Already know Derek',
};

const ON_TO_CAL: Record<string, string> = {
  'google-listing': CAL_LISTING,
  '9-minute-website-review': CAL_WEBSITE,
};

export default function Book() {
  const { search } = useLocation();
  const [source, setSource] = useState('');
  const [utm, setUtm] = useState<Record<string, string>>({});
  const [link, setLink] = useState(CAL_INTRO);

  useEffect(() => {
    const q = new URLSearchParams(search);
    const u: Record<string, string> = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((k) => {
      const v = q.get(k);
      if (v) u[k] = v;
    });
    setUtm(u);
    const pre = UTM_TO_SOURCE[(u.utm_source || '').toLowerCase()];
    if (pre) setSource(pre);
    const on = q.get('on') || '';
    if (ON_TO_CAL[on]) setLink(ON_TO_CAL[on]);
  }, [search]);

  const prefill: Record<string, string> = { ...utm };
  if (source) prefill.source = source;

  return (
    <main>
      <Seo
        title="Take the Nine Minutes - Book with Derek | HigherMindAI"
        desc="Book nine minutes with Derek. I look at your Google profile, your site and the businesses above you first, then tell you which step fits and the fixed price on it."
        path="/book/"
        schema={[orgSchema(), breadcrumbs([['Home', '/'], ['Take the nine minutes', '/book/']])]}
      />

      <section className="phero">
        <div className="wrap">
          <div className="reveal">
            <div className="crumb">
              <Link to="/">Home</Link> &nbsp;/&nbsp; Take the nine minutes
            </div>
            <span className="eyebrow">Take the nine minutes</span>
            <h1>
              Nine minutes. <span className="em">Then you know which step fits.</span>
            </h1>
            <p className="sub">
              I look before every call - your Google profile, your site, and the businesses above you
              in the map. So the nine minutes is me showing you what I found, which step fits, and
              the fixed price on it. <b>Then you decide.</b>
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec-sm" id="book-cal">
        <div className="wrap">
          <div className="book-grid">
            <div className="book-side reveal">
              <span className="eyebrow"><span className="n">01</span> One question</span>
              <label className="book-q" htmlFor="book-source">
                Where did you find me?
              </label>
              <select
                id="book-source"
                className="book-select"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              >
                <option value="">Choose one</option>
                {BOOKING_SOURCES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <p className="book-note">Then pick a time. Nothing to prepare, nothing to send first.</p>

              <ol className="book-steps">
                <li><b>Minute one.</b> Which market you are in, and what a job is worth to you.</li>
                <li><b>Minutes two to five.</b> What I found on your profile, your site and your phone.</li>
                <li><b>Minute six.</b> The three steps, the one I would pick, and the fixed price on each.</li>
                <li><b>Minutes seven to nine.</b> Which one fits. If none can be priced from outside, The Read.</li>
              </ol>

              <div className="contactline">
                <a href={`tel:${PHONE_E164}`}>
                  <span className="ic">&#9742;</span> {PHONE_DISP}
                </a>
                <a href={`mailto:${EMAIL}`}>
                  <span className="ic">&#9993;</span> {EMAIL}
                </a>
                <span>
                  <span className="ic">&#9678;</span> Erin, Ontario &middot; {HOURS_DISPLAY}
                </span>
              </div>
            </div>
            <div className="book-cal">
              <CalEmbed link={link} prefill={prefill} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
