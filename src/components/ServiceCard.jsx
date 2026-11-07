import { Check } from 'lucide-react';
import Photo from './Photo.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import { servicePrices, formatPrice } from '../config/pricing.js';

export default function ServiceCard({ s }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft">
      <div className="aspect-[4/3]"><Photo src={s.image} alt={`${s.title} design`} seed={s.seed} /></div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold">{s.title}</h3>
        <p className="mt-2 text-brown/75">{s.short}</p>
        <ul className="mt-4 space-y-2 text-sm">
          {s.details.map((d) => <li key={d} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />{d}</li>)}
        </ul>
        <p className="mt-5 text-sm font-bold text-maroon">{formatPrice(servicePrices[s.id])}</p>
        <WhatsAppButton service={s.title} className="btn btn-ghost mt-3 w-full">Book {s.title.split(' ')[0]}</WhatsAppButton>
      </div>
    </article>
  );
}
