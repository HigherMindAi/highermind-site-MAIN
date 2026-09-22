import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { CTA_LABEL, CTA_HREF } from '../lib/ladder';
import { Arrow } from './Icons';

interface CtaStripProps {
  head: ReactNode;
  sub: string;
}

/**
 * The close on every page. ONE call to action - Take the nine minutes - and
 * the phone number as plain text beneath it, never as a second button. The
 * Spine: "There is no second CTA. Every surface ends on the nine minutes."
 */
export default function CTAStrip({ head, sub }: CtaStripProps) {
  return (
    <>
      <div className="divider" />
      <section className="ctastrip">
        <div className="wrap narrow reveal">
          <h2>{head}</h2>
          <p>{sub}</p>
          <div className="ctas">
            <Link to={CTA_HREF} className="btn btn-primary">
              {CTA_LABEL} <Arrow />
            </Link>
          </div>
          <p className="cta-or">
            or call <a href={`tel:${PHONE_E164}`}>{PHONE_DISP}</a>
          </p>
        </div>
      </section>
    </>
  );
}
