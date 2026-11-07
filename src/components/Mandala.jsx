// Decorative henna-style line art (SVG). Used until real photographs are added.
export default function Mandala({ seed = 0, draw = false, className = '' }) {
  const n = 8 + (seed % 4) * 2;
  const rot = (i, o = 0) => `rotate(${(360 / n) * i + o})`;
  let k = 0;
  const p = () => ({ pathLength: 1, style: { animationDelay: `${(k++ % 14) * 0.12}s` } });
  return (
    <svg viewBox="-100 -100 200 200" fill="none" stroke="currentColor" strokeWidth=".7"
      strokeLinecap="round" className={`${draw ? 'draw' : ''} ${className}`} aria-hidden="true">
      <circle r="96" {...p()} /><circle r="90" {...p()} /><circle r="30" {...p()} /><circle r="8" {...p()} />
      {Array.from({ length: n }, (_, i) => (
        <g key={i}>
          <path transform={rot(i)} d="M0-32C11-48 11-68 0-86C-11-68-11-48 0-32Z" {...p()} />
          <path transform={rot(i, 180 / n)} d="M0-52C6-64 6-76 0-90C-6-76-6-64 0-52Z" {...p()} />
          <path transform={rot(i)} d="M0-40C4-48 4-56 0-62" {...p()} />
          <circle transform={rot(i, 180 / n)} cx="0" cy="-44" r="1.6" {...p()} />
        </g>
      ))}
    </svg>
  );
}
