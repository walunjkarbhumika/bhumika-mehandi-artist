import { Link } from 'react-router-dom';
import { site } from '../config/site.js';
import Mandala from './Mandala.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="wrap grid items-center gap-10 py-12 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
        <div className="rise">
          <h1 className="text-[2.9rem] font-semibold leading-[1.02] sm:text-7xl">Beautiful Mehndi. Timeless Memories.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brown/80">Every design tells a story. Let Bhumika create beautiful Mehndi art for your special moments in {site.serviceAreas.join(', ')}.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton>Book Your Appointment</WhatsAppButton>
            <Link to="/portfolio" className="btn btn-ghost">Explore Our Designs</Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[420px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-maroon shadow-soft ring-1 ring-gold ring-offset-[10px] ring-offset-beige">
            {site.heroImage
              ? <img src={site.heroImage} alt="Bridal mehndi by Bhumika" width="840" height="1050" fetchpriority="high" className="h-full w-full object-cover" />
              : <Mandala seed={1} draw className="absolute inset-0 m-auto h-[86%] w-[86%] text-gold" />}
          </div>
        </div>
      </div>
    </section>
  );
}
