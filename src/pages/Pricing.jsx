import { Check } from 'lucide-react';
import { packages, pricingNote, formatPrice } from '../config/pricing.js';
import { useSeo } from '../lib/useSeo.js';
import SectionHeading from '../components/SectionHeading.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import { Faq } from '../components/Blocks.jsx';

export default function Pricing() {
  useSeo({ title: 'Mehndi Pricing & Packages', description: 'Basic, premium and bridal mehndi packages in Pune, PCMC and Maval. Get a personalised quote on WhatsApp.', path: '/pricing' });
  return (
    <>
      <section className="section">
        <div className="wrap">
          <SectionHeading title="Pricing & packages" text={pricingNote} />
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <article key={p.id} className={`flex flex-col rounded-3xl p-8 shadow-soft ${p.highlight ? 'bg-maroon text-beige' : 'bg-white'}`}>
                <h3 className={`text-3xl font-semibold ${p.highlight ? '!text-beige' : ''}`}>{p.name}</h3>
                <p className={`mt-2 ${p.highlight ? 'text-beige/80' : 'text-brown/70'}`}>{p.description}</p>
                <p className={`mt-6 font-serif text-3xl font-semibold ${p.highlight ? 'text-gold' : 'text-maroon'}`}>{formatPrice(p.price)}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => <li key={f} className="flex gap-2"><Check size={18} className={`mt-0.5 shrink-0 ${p.highlight ? 'text-gold' : 'text-maroon'}`} aria-hidden="true" />{f}</li>)}
                </ul>
                <WhatsAppButton service={`${p.name} Package`} className={`btn mt-8 ${p.highlight ? 'btn-gold' : 'btn-primary'}`}>Get a quote</WhatsAppButton>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}
