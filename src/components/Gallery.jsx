import { useMemo, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { categories, portfolio } from '../config/portfolio.js';
import Photo from './Photo.jsx';
import Lightbox from './Lightbox.jsx';

export default function Gallery({ limit, filters = true }) {
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState(null);
  const items = useMemo(() => {
    const f = cat === 'All' ? portfolio : portfolio.filter((p) => p.category === cat);
    return limit ? f.slice(0, limit) : f;
  }, [cat, limit]);

  return (
    <div>
      {filters && (
        <div role="group" aria-label="Filter portfolio by category" className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${cat === c ? 'border-maroon bg-maroon text-beige' : 'border-maroon/30 text-maroon hover:border-maroon'}`}>{c}</button>
          ))}
        </div>
      )}
      <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {items.map((p, i) => (
          <li key={p.id}>
            <button onClick={() => setOpen(i)} aria-label={`View ${p.title} full screen`}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-soft">
              <div className="h-full w-full transition duration-500 group-hover:scale-105"><Photo src={p.image} alt={p.alt} seed={p.id} /></div>
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-brown/80 to-transparent p-3 pt-10 text-left text-sm font-semibold text-beige opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                {p.title}<ZoomIn size={18} aria-hidden="true" />
              </span>
            </button>
          </li>
        ))}
      </ul>
      {items.length === 0 && <p className="py-10 text-center text-brown/70">No designs in this category yet.</p>}
      {open !== null && <Lightbox items={items} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
    </div>
  );
}
