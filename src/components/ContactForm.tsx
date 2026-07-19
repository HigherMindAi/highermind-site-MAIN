import { useState } from 'react';
import { Arrow } from './Icons';

type Status = 'idle' | 'submitting' | 'done' | 'error';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');
}

/**
 * The write-in form. Netlify mechanics untouched (form name, field names,
 * honeypot) - this is a presentation rebuild: two-column rows, a header that
 * sets expectations, and a success card that promises a reply, not an audit.
 */
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
          Got it. <span className="em">You&rsquo;ll hear from me today.</span>
        </h3>
        <p style={{ color: 'var(--muted)', margin: 0 }}>
          I read these personally and reply the same day, usually within a few hours. I&rsquo;ll come
          back with what I would build for you and when it goes live. If it&rsquo;s urgent, call me
          directly at 647-242-5800.
        </p>
      </div>
    );
  }

  return (
    <div className="formcard reveal">
      <div className="formhead">
        <span className="ln" style={{ marginBottom: 6 }}>Send it in writing</span>
        <p>Four fields, thirty seconds. I reply personally, usually the same day.</p>
      </div>
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
        <div className="frow">
          <label htmlFor="name">
            <span className="ln">Your name</span>
            <input id="name" type="text" name="name" value={form.name} onChange={onChange} autoComplete="name" required />
          </label>
          <label htmlFor="contact">
            <span className="ln">Phone or email</span>
            <input id="contact" type="text" name="contact" value={form.contact} onChange={onChange} autoComplete="tel" required />
          </label>
        </div>
        <label htmlFor="biz">
          <span className="ln">Your firm &amp; city</span>
          <input
            id="biz"
            type="text"
            name="business"
            value={form.business}
            onChange={onChange}
            placeholder="e.g. Hartley Family Law, Brampton ON"
            required
          />
        </label>
        <label htmlFor="goal">
          <span className="ln">What should the phone be doing that it is not?</span>
          <textarea
            id="goal"
            name="goal"
            value={form.goal}
            onChange={onChange}
            placeholder="Missed after-hours calls, a quiet Google profile, no time for intake - whatever is costing you clients."
          />
        </label>
        <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : <>Book my call <Arrow /></>}
        </button>
        {status === 'error' && (
          <p className="fine" style={{ color: '#e0746a' }}>
            Something went wrong sending that. Call or email me directly and I&rsquo;ll sort it.
          </p>
        )}
        {status !== 'error' && <p className="fine">Free. No pitch. A fast no if it&rsquo;s not a fit.</p>}
      </form>
    </div>
  );
}
