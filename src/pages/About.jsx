import { site, whyChoose } from '../config/site.js';
import { useSeo } from '../lib/useSeo.js';
import Photo from '../components/Photo.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { FinalCta } from '../components/Blocks.jsx';

export default function About() {
  useSeo({ title: `About ${site.artistName}`, description: `Meet ${site.artistName}, a professional mehndi artist serving Pune, PCMC and Maval. Personalised designs, booked by appointment.`, path: '/about' });
  return (
    <>
      <section className="section">
        <div className="wrap grid items-center gap-12 md:grid-cols-2">
          <div className="mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full shadow-soft ring-1 ring-gold ring-offset-[10px] ring-offset-beige">
            <Photo src={site.artistImage} alt={`${site.artistName}, mehndi artist`} seed={2} priority />
          </div>
          <div>
            <h1 className="text-5xl font-semibold sm:text-6xl">Hi, I&apos;m {site.artistName}.</h1>
            <p className="mt-5 text-xl leading-relaxed">{site.about.intro}</p>
            {site.about.story.map((t) => <p key={t} className="mt-4 leading-relaxed text-brown/80">{t}</p>)}
          </div>
        </div>
      </section>
      <section className="section bg-beige-deep">
        <div className="wrap">
          <SectionHeading title="How I work" text="Three things guide every booking." />
          <div className="grid gap-6 md:grid-cols-3">
            {[whyChoose[0], whyChoose[1], whyChoose[4]].map((w) => (
              <div key={w.title} className="rounded-3xl bg-white p-6 shadow-soft"><h3 className="text-2xl font-semibold">{w.title}</h3><p className="mt-2 text-brown/75">{w.text}</p></div>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
