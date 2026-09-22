import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV, PHONE_E164, PHONE_DISP, BRAND } from '../lib/site';
import { CTA_LABEL, CTA_HREF } from '../lib/ladder';
import { Wordmark, Hamburger, Close } from './Icons';

function isActive(label: string, pathname: string): boolean {
  if (label === 'How it works')
    return pathname.startsWith('/how-it-works') || pathname.startsWith('/services');
  if (label === 'The Read') return pathname.startsWith('/the-read');
  if (label === 'Who I Help')
    return (
      pathname.startsWith('/who-i-help') ||
      pathname.startsWith('/property-management') ||
      pathname.startsWith('/trades') ||
      pathname.startsWith('/auto-service-collision') ||
      pathname.startsWith('/auto-parts-recyclers') ||
      pathname.startsWith('/condominium-management-marketing') ||
      pathname.startsWith('/local-seo')
    );
  if (label === 'Work') return pathname.startsWith('/work');
  if (label === 'About') return pathname.startsWith('/about');
  return false;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      setOpen((o) => (o ? false : o));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // close the menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="wrap row">
        <Link to="/" className="mark" aria-label={`${BRAND} home`}>
          <Wordmark />
        </Link>
        <nav className={'links' + (open ? ' open' : '')} id="navlinks">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={isActive(item.label, pathname) ? 'active' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:${PHONE_E164}`} className="navphone" onClick={() => setOpen(false)}>
            {PHONE_DISP}
          </a>
          <Link to={CTA_HREF} className="btn btn-primary" onClick={() => setOpen(false)}>
            {CTA_LABEL}
          </Link>
        </nav>
        <button
          className="navtoggle"
          id="navtoggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((o) => !o);
          }}
        >
          <Hamburger />
          <Close />
        </button>
      </div>
    </header>
  );
}
