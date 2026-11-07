import { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Photo from './Photo.jsx';

export default function Lightbox({ items, index, onClose, onChange }) {
  const closeRef = useRef(null);
  const item = items[index];
  const go = (d) => onChange((index + d + items.length) % items.length);

  useEffect(() => {
    const prev = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const key = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', key);
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = ''; prev?.focus?.(); };
  });

  let x0 = null;
  return (
    <div role="dialog" aria-modal="true" aria-label={`${item.title}, image ${index + 1} of ${items.length}`}
      className="fixed inset-0 z-50 flex flex-col bg-brown/95" onClick={onClose}
      onTouchStart={(e) => (x0 = e.touches[0].clientX)}
      onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1); }}>
      <div className="flex items-center justify-between p-4 text-beige">
        <p className="font-serif text-xl">{item.title} <span className="text-sm text-beige/60">{index + 1}/{items.length}</span></p>
        <button ref={closeRef} onClick={onClose} aria-label="Close" className="grid h-11 w-11 place-items-center rounded-full hover:bg-white/10"><X /></button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16">
        <button onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous image" className="absolute left-2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-beige hover:bg-white/20"><ChevronLeft /></button>
        <div key={item.id} className="rise aspect-[4/5] h-full max-h-full max-w-full overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
          <Photo src={item.image} alt={item.alt} seed={item.id} priority />
        </div>
        <button onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next image" className="absolute right-2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-beige hover:bg-white/20"><ChevronRight /></button>
      </div>
    </div>
  );
}
