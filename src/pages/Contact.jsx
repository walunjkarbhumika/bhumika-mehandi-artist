import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
import { site } from '../config/site.js';
import { useSeo } from '../lib/useSeo.js';
import SectionHeading from '../components/SectionHeading.jsx';
import BookingForm from '../components/BookingForm.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';

export default function Contact() {
  useSeo({ title: 'Book Your Mehndi Appointment', description: `Send a booking enquiry to ${site.name} on WhatsApp. Serving ${site.serviceAreas.join(', ')}.`, path: '/contact' });
  const row = 'flex items-start gap-3';
  return (
    <section className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <SectionHeading title="Book your appointment" text="Fill in the form and your enquiry opens in WhatsApp, ready to send." />
          <BookingForm />
        </div>
        <aside className="space-y-6 lg:pt-28">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <h2 className="text-3xl font-semibold">Prefer to chat?</h2>
            <p className="mt-2 text-brown/75">Message directly for availability and a quick quote.</p>
            <WhatsAppButton className="btn btn-primary mt-4 w-full">Chat on WhatsApp</WhatsAppButton>
            <ul className="mt-6 space-y-3 text-[15px]">
              <li className={row}><MapPin size={18} className="mt-0.5 shrink-0 text-maroon" />{site.address || `Serving ${site.serviceAreas.join(', ')}`}</li>
              <li className={row}><Clock size={18} className="mt-0.5 shrink-0 text-maroon" />{site.hours}</li>
              {site.phoneDisplay && <li className={row}><Phone size={18} className="mt-0.5 shrink-0 text-maroon" /><a href={`tel:${site.phoneDisplay.replace(/\s/g, '')}`}>{site.phoneDisplay}</a></li>}
              {site.email && <li className={row}><Mail size={18} className="mt-0.5 shrink-0 text-maroon" /><a href={`mailto:${site.email}`}>{site.email}</a></li>}
              {site.instagram && <li className={row}><Instagram size={18} className="mt-0.5 shrink-0 text-maroon" /><a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle || 'Instagram'}</a></li>}
            </ul>
          </div>
          {site.address && (
            <iframe title={`Map of ${site.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full rounded-3xl border-0 shadow-soft"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`} />
          )}
        </aside>
      </div>
    </section>
  );
}
