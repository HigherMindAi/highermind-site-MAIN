import { useState } from 'react';
import { Arrow } from './Icons';

type Status = 'idle' | 'submitting' | 'done' | 'error';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', business: '', contact: '', goal: '' });
  const [botField, setBotField] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'lead', 'bot-field': botField, ...form }),
      });
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="formcard reveal">
        <span className="eyebrow">Received</span>
        <h3 style={{ fontSize: 26, margin: '20px 0 12px' }}>
          Got it. <span className="em">I&rsquo;ll start the Audit.</span>
        </h3>
        <p style={{ color: 'var(--muted)', margin: 0 }}>
          I run the rank read first, then the leak log across five days, then I send you both.
          I reply personally, usually the same day. If it is urgent, call me directly at
          647-242-5800.
        </p>
      </div>
    );
  }

  return (
    <div className="formcard reveal">
      <form name="lead" onSubmit={onSubmit}>
        <p className="hp">
          <label>
            Leave blank:{' '}
            <input
              name="bot-field"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </p>
        <label htmlFor="name"><span className="ln">Your name</span></label>
        <input id="name" type="text" name="name" value={form.name} onChange={onChange} required />
        <label htmlFor="biz"><span className="ln">Practice &amp; city</span></label>
        <input
          id="biz"
          type="text"
          name="business"
          value={form.business}
          onChange={onChange}
          placeholder="e.g. Bay Street Dental, Toronto ON"
          required
        />
        <label htmlFor="contact"><span className="ln">Phone or email</span></label>
        <input id="contact" type="text" name="contact" value={form.contact} onChange={onChange} required />
        <label htmlFor="goal"><span className="ln">What do you do, and where?</span></label>
        <textarea
          id="goal"
          name="goal"
          value={form.goal}
          onChange={onChange}
          placeholder="The service that matters most, and the area you want it from."
        />
        <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : <>Send me my Catchment Audit <Arrow /></>}
        </button>
        {status === 'error' && (
          <p className="fine" style={{ color: '#e0746a' }}>
            Something went wrong sending that. Call or email me directly and I&rsquo;ll sort it.
          </p>
        )}
        {status !== 'error' && <p className="fine">Free. No pitch. Yours to keep either way.</p>}
      </form>
    </div>
  );
}
