import Mandala from './Mandala.jsx';

const tones = ['bg-maroon text-gold', 'bg-maroon-dark text-gold-light', 'bg-beige-deep text-maroon', 'bg-gold text-maroon-dark'];

// Real image when `src` is set, otherwise decorative artwork. Lazy-loaded with explicit size to avoid layout shift.
export default function Photo({ src, alt, seed = 0, className = '', priority = false }) {
  if (src) {
    return (
      <img src={src} alt={alt} width="800" height="1000"
        loading={priority ? 'eager' : 'lazy'} decoding="async" fetchpriority={priority ? 'high' : 'auto'}
        className={`h-full w-full object-cover ${className}`} />
    );
  }
  return (
    <div role="img" aria-label={alt} className={`flex h-full w-full items-center justify-center ${tones[seed % tones.length]} ${className}`}>
      <Mandala seed={seed} className="h-[78%] w-[78%] opacity-90" />
    </div>
  );
}
