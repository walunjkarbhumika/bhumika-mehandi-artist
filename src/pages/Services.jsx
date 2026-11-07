import { services } from '../config/services.js';
import { site } from '../config/site.js';
import { useSeo } from '../lib/useSeo.js';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { FinalCta } from '../components/Blocks.jsx';

export default function Services() {
  useSeo({ title: 'Mehndi Services', description: `Bridal, engagement, Arabic, traditional, minimal, festival, baby shower and group mehndi in ${site.serviceAreas.join(', ')}.`, path: '/services' });
  return (
    <>
      <section className="section">
        <div className="wrap">
          <SectionHeading title="Mehndi services" text={`Home and event bookings across ${site.serviceAreas.join(', ')}. Prices depend on design and coverage, so every quote is confirmed on WhatsApp.`} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{services.map((s) => <ServiceCard key={s.id} s={s} />)}</div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
