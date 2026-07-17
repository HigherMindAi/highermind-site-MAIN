import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PHONE_E164, PHONE_DISP } from '../lib/site';
import { Arrow } from './Icons';

interface CtaStripProps {
  head: ReactNode;
  sub: string;
}

export default function CTAStrip({ head, sub }: CtaStripProps) {
  return (
    <>
      <div className="divider" />
      <section className="ctastrip">
        <div className="wrap narrow reveal">
          <h2>{head}</h2>
          <p>{sub}</p>
          <div className="ctas">
            <Link to="/contact" className="btn btn-primary">
              Book a Watershed Audit <Arrow />
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
