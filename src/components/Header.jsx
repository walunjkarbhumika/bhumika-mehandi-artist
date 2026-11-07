import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { site, nav } from '../config/site.js';
import { quickLink } from '../lib/whatsapp.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc); };
  }, [open]);

  const link = ({ isActive }) =>
    `rounded-full px-3 py-2 text-[15px] font-semibold transition ${isActive ? 'text-maroon underline decoration-gold decoration-2 underline-offset-8' : 'text-brown/80 hover:text-maroon'}`;

  return (
    <header className={`sticky top-0 z-40 transition ${scrolled || open ? 'bg-beige/95 shadow-soft backdrop-blur' : 'bg-beige'}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:p-3">Skip to content</a>
      <div className="wrap flex h-[68px] items-center justify-between">
        <Link to="/" className="flex flex-col leading-none" aria-label={`${site.name} home`}>
          <span className="font-serif text-2xl font-bold text-maroon">{site.name}</span>
          <span className="mt-1 text-[11px] font-semibold tracking-wide text-gold-dark" style={{ color: '#8f7339' }}>{site.tagline}</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'} className={link}>{n.label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={quickLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden !min-h-[42px] sm:inline-flex">
            <MessageCircle size={17} aria-hidden="true" /> Book now
          </a>
          <button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full text-maroon lg:hidden"
            aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="fixed inset-x-0 top-[68px] bottom-0 overflow-y-auto bg-beige px-5 pb-10 pt-4 lg:hidden">
          <ul className="divide-y divide-brown/10">
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => `block py-4 font-serif text-3xl ${isActive ? 'text-maroon' : 'text-brown'}`}>{n.label}</NavLink>
              </li>
            ))}
          </ul>
          <a href={quickLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6 w-full"><MessageCircle size={18} /> Book on WhatsApp</a>
        </nav>
      )}
    </header>
  );
}
