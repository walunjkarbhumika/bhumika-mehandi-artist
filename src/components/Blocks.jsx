import { useState } from 'react';
import { ChevronDown, Star, Palette, Eye, MessageCircle, CalendarCheck, HeartHandshake, Gem } from 'lucide-react';

const Icons = { Palette, Eye, MessageCircle, CalendarCheck, HeartHandshake, Gem };
import { whyChoose, steps, faqs } from '../config/site.js';
import { testimonials } from '../config/testimonials.js';
import SectionHeading from './SectionHeading.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import Mandala from './Mandala.jsx';

export function WhyChoose() {
  return (
    <section className="section bg-beige-deep">
      <div className="wrap">
        <SectionHeading title="Why book Bhumika" text="A calm, well-organised experience from first message to final stain." />
        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => {
            const Icon = Icons[w.icon];
            return (
              <div key={w.title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-maroon text-gold"><Icon size={22} aria-hidden="true" /></span>
                <div><h3 className="text-2xl font-semibold">{w.title}</h3><p className="mt-1 text-brown/75">{w.text}</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BookingSteps() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading title="Booking is four easy steps" center />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-3xl border border-gold/50 bg-white p-6">
              <span className="font-serif text-5xl text-gold">{i + 1}</span>
              <h3 className="mt-2 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-brown/75">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center"><WhatsAppButton>Start on WhatsApp</WhatsAppButton></div>
      </div>
    </section>
  );
}

export function Testimonials() {
  if (!testimonials.length) return null; // never shows placeholder or invented reviews
  return (
    <section className="section bg-beige-deep">
      <div className="wrap">
        <SectionHeading title="Kind words from clients" center />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-white p-6 shadow-soft">
              {t.rating && <div className="flex gap-0.5 text-gold" aria-label={`${t.rating} out of 5`}>{Array.from({ length: t.rating }, (_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>}
              <blockquote className="mt-3 text-lg leading-relaxed">{t.text}</blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm">
                {t.photo && <img src={t.photo} alt="" loading="lazy" className="h-11 w-11 rounded-full object-cover" />}
                <span><strong>{t.name}</strong>{t.occasion && <span className="block text-brown/65">{t.occasion}</span>}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section bg-beige-deep">
      <div className="wrap max-w-3xl">
        <SectionHeading title="Questions, answered" center />
        <div className="divide-y divide-brown/15 rounded-3xl bg-white px-6 shadow-soft">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <h3>
                <button type="button" className="flex w-full items-center justify-between gap-4 py-5 text-left font-serif text-xl font-semibold text-maroon"
                  aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                  {f.q}<ChevronDown className={`shrink-0 transition ${open === i ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </h3>
              <div id={`faq-${i}`} hidden={open !== i} className="pb-5 text-brown/80">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-maroon py-20 text-center text-beige sm:py-28">
      <Mandala seed={3} className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 text-gold opacity-15" />
      <div className="wrap relative">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold !text-beige sm:text-6xl">Your special day deserves beautiful mehndi.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-beige/80">Let&apos;s create something beautiful for your special occasion.</p>
        <div className="mt-8"><WhatsAppButton className="btn btn-gold">Book your mehndi artist today</WhatsAppButton></div>
      </div>
    </section>
  );
}
