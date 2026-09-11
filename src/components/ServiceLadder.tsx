import { Link } from 'react-router-dom';
import { LADDER, serviceHref } from '../lib/services';
import { Go } from './Icons';

export default function ServiceLadder() {
  return (
    <div className="ladder">
      {LADDER.map((s, i) => (
        <Link
          key={s.slug}
          to={serviceHref(s)}
          className={'svc reveal' + (s.flag ? ' flag' : '')}
        >
          <div className="si">{String(i + 1).padStart(2, '0')}</div>
          <div className="sbody">
            <span className="sn">{s.tag}</span>
            <h3>{s.name}</h3>
            <p>{s.line}</p>
          </div>
          <Go />
        </Link>
      ))}
    </div>
  );
}
