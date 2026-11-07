import { useSeo } from '../lib/useSeo.js';
import { site } from '../config/site.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Gallery from '../components/Gallery.jsx';
import { FinalCta } from '../components/Blocks.jsx';

export default function Portfolio() {
  useSeo({ title: 'Mehndi Portfolio', description: 'Browse bridal, Arabic, traditional, minimal, full hand and feet mehndi designs by Bhumika.', path: '/portfolio' });
  return (
    <>
      <section className="section">
        <div className="wrap">
          <SectionHeading title="Portfolio" text="Filter by style and tap a design to view it full screen." />
          <Gallery />
          {site.instagram && <p className="mt-10 text-center"><a className="font-semibold text-maroon underline" href={site.instagram} target="_blank" rel="noopener noreferrer">See more on Instagram</a></p>}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
