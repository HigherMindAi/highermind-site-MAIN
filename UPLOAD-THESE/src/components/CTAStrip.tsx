import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { Arrow } from './Icons';

interface CtaStripProps {
  head: ReactNode;
  sub: string;
  /**
   * Which conversation to open on /book/. The URL never changes - the tab does.
   * Pass 'google-listing' from a visibility page, '9-minute-website-review'
   * from a website page. Omit for the general nine minutes.
   */
  on?: string;
}

export default function CTAStrip({ head, sub, on }: CtaStripProps) {
  return (
    <>
      <div className="divider" />
      <section className="ctastrip">
        <div className="wrap narrow reveal">
          <h2>{head}</h2>
          <p>{sub}</p>
          <div className="ctas">
            <Link to={on ? `/book/?on=${on}` : '/book/'} className="btn btn-primary">
              Take the nine minutes <Arrow />
            </Link>
            <a href={`tel:${PHONE_E164}`} className="btn btn-ghost">
              Call {PHONE_DISP}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
