import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { site, nav } from '../config/site.js';
import { services } from '../config/services.js';
import { quickLink } from '../lib/whatsapp.js';
import Mandala from './Mandala.jsx';

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-beige/85">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Mandala seed={2} className="h-12 w-12 text-gold" />
            <span className="font-serif text-2xl font-bold text-beige">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{site.tagline} Mehndi artist serving {site.serviceAreas.join(', ')}.</p>
        </div>
        <div>
          <h3 className="font-serif text-xl !text-gold">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">{nav.map((n) => <li key={n.to}><Link className="hover:text-gold" to={n.to}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="font-serif text-xl !text-gold">Services</h3>
          <ul className="mt-3 space-y-2 text-sm">{services.slice(0, 6).map((s) => <li key={s.id}><Link className="hover:text-gold" to="/services">{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="font-serif text-xl !text-gold">Contact</h3>
          <ul className="mt-3 space-y-3 text-sm">
            <li><a className="flex items-center gap-2 hover:text-gold" href={quickLink()} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> Chat on WhatsApp</a></li>
            {site.phoneDisplay && <li><a className="flex items-center gap-2 hover:text-gold" href={`tel:${site.phoneDisplay.replace(/\s/g, '')}`}><Phone size={16} /> {site.phoneDisplay}</a></li>}
            {site.email && <li><a className="flex items-center gap-2 hover:text-gold" href={`mailto:${site.email}`}><Mail size={16} /> {site.email}</a></li>}
            {site.instagram && <li><a className="flex items-center gap-2 hover:text-gold" href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16} /> {site.instagramHandle || 'Instagram'}</a></li>}
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> {site.address || `Serving ${site.serviceAreas.join(', ')}`}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/20 py-5 text-center text-xs text-beige/60">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  );
}
