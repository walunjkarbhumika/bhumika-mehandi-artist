import { Link } from 'react-router-dom';
import { site } from '../config/site.js';
import { services } from '../config/services.js';
import { useSeo } from '../lib/useSeo.js';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import Gallery from '../components/Gallery.jsx';
import Photo from '../components/Photo.jsx';
import { WhyChoose, BookingSteps, Testimonials, Faq, FinalCta } from '../components/Blocks.jsx';

export default function Home() {
  useSeo({
    title: 'Mehndi Artist in Pune, PCMC & Maval',
    description: `Bridal, engagement, festival and party mehndi by ${site.artistName} in Pune, PCMC and Maval. Book your appointment on WhatsApp.`,
    path: '/',
  });
  return (
    <>
      <Hero />
      <section className="section bg-beige-deep">
        <div className="wrap">
          <SectionHeading title="Mehndi for every occasion" text="From full bridal artwork to a quick festival design, each booking is planned around you." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{services.filter((s) => s.featured).map((s) => <ServiceCard key={s.id} s={s} />)}</div>
          <div className="mt-10 text-center"><Link to="/services" className="btn btn-ghost">See all services</Link></div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHeading title="Recent designs" text="Tap any design to view it full screen." />
          <Gallery limit={6} filters={false} />
          <div className="mt-10 text-center"><Link to="/portfolio" className="btn btn-ghost">View full portfolio</Link></div>
        </div>
      </section>
      <section className="section bg-maroon text-beige">
        <div className="wrap grid items-center gap-10 md:grid-cols-[.8fr_1.2fr]">
          <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-full ring-1 ring-gold ring-offset-[10px] ring-offset-maroon">
            <Photo src={site.artistImage} alt={`${site.artistName}, mehndi artist`} seed={2} />
          </div>
          <div>
            <h2 className="text-4xl font-semibold !text-beige sm:text-5xl">Meet {site.artistName}</h2>
            <p className="mt-5 text-lg leading-relaxed text-beige/85">{site.about.intro}</p>
            <p className="mt-4 leading-relaxed text-beige/75">{site.about.story[0]}</p>
            <Link to="/about" className="btn btn-ghost-light mt-7">Read more</Link>
          </div>
        </div>
      </section>
      <WhyChoose />
      <Testimonials />
      <BookingSteps />
      <Faq />
      <FinalCta />
    </>
  );
}
