import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV, PHONE_E164, PHONE_DISP, BRAND } from '../lib/site';
import { Wordmark, Hamburger, Close } from './Icons';

const LEGAL_PATHS = ['/the-watershed', '/law-firm-intake', '/law-firm-seo'];

function isActive(label: string, pathname: string): boolean {
  if (label === 'Property Management')
    return (
      pathname === '/property-management' ||
      pathname.startsWith('/property-management/') ||
      pathname.startsWith('/condominium-management-marketing')
    );
  if (label === 'The Keystone') return pathname.startsWith('/the-keystone');
  if (label === 'Ranking') return pathname.startsWith('/property-management-seo');
  if (label === 'Intake') return pathname.startsWith('/property-management-intake');
  if (label === 'Law Firms') return LEGAL_PATHS.some((p) => pathname.startsWith(p));
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
          <a href={`tel:${PHONE_E164}`} className="mobcall" onClick={() => setOpen(false)}>
            Call {PHONE_DISP}
          </a>
          <Link to="/book/" className="btn btn-primary" onClick={() => setOpen(false)}>
            Book a Call
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
