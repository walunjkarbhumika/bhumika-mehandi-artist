// ───────── CENTRAL BUSINESS CONFIG: edit this file to update the whole site ─────────
export const site = {
  name: 'Bhumika Mehandi Artist',
  artistName: 'Bhumika',
  tagline: 'Where Art Meets Tradition.',
  siteUrl: 'https://www.example.com', // ← replace with your live domain (used for SEO + sitemap)

  // WhatsApp number with country code, digits only. Example: '919876543210'
  // While empty, WhatsApp buttons open WhatsApp with the message ready to send to any contact.
  whatsappNumber: '',
  phoneDisplay: '', // e.g. '+91 98765 43210'
  email: '',
  instagram: '', // full URL, e.g. 'https://instagram.com/yourhandle'
  instagramHandle: '', // e.g. '@yourhandle'

  address: '', // Full studio / base address. Leave empty to hide the map.
  serviceAreas: ['Induri', 'Talegaon', 'Vadgaon',  'Maval'],
  hours: 'By appointment', // e.g. 'Mon–Sat, 10 am – 7 pm'

  // Images (put files in /public and reference like '/images/hero.jpg'). Empty = decorative artwork.
  heroImage: '',
  artistImage: '',

  about: {
    intro:
      'Bhumika is a professional mehndi artist creating bridal, festive and occasion mehndi across Induri, Talegaon, Vadgaon and Maval.',
    story: [
      'Every hand is different, so every design is drawn for the person wearing it: the occasion, the outfit and the story you want to carry.',
      'Bookings are by appointment, so each client gets time, a proper design discussion and clear communication before the day.',
    ],
  },
};

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
];

export const whyChoose = [
  { icon: 'Palette', title: 'Personalised designs', text: 'Patterns drawn around your outfit, occasion and taste.' },
  { icon: 'Eye', title: 'Attention to detail', text: 'Clean lines, balanced layouts and careful finishing.' },
  { icon: 'MessageCircle', title: 'Clear communication', text: 'Availability, pricing and timing shared upfront on WhatsApp.' },
  { icon: 'CalendarCheck', title: 'Appointment-based', text: 'Your slot is reserved, so you are never rushed.' },
  { icon: 'HeartHandshake', title: 'Customer-first', text: 'Your comfort and satisfaction guide every booking.' },
  { icon: 'Gem', title: 'Quality focus', text: 'Care taken from design to the final stain.' },
];

export const steps = [
  { title: 'Choose your service', text: 'Pick bridal, engagement, festival or any other occasion.' },
  { title: 'Share your event date', text: 'Send the date and location so availability can be checked.' },
  { title: 'Discuss your design', text: 'Share references and requirements. Get a quote.' },
  { title: 'Confirm your booking', text: 'Pay the booking advance to reserve your slot.' },
];

export const faqs = [
  { q: 'How early should I book bridal mehndi?', a: 'Wedding dates fill up early, so message as soon as your date is fixed. Festival dates book up fast too.' },
  { q: 'How much time does bridal mehndi take?', a: 'Detailed bridal designs take several hours depending on coverage. Exact timing is confirmed when you book.' },
  { q: 'Do you provide home services?', a: 'Yes, in Pune, PCMC and Maval. Share your location on WhatsApp to confirm travel details.' },
  { q: 'How can I check availability?', a: 'Send your date and location on WhatsApp. You will get a reply with availability.' },
  { q: 'What is the booking advance?', a: 'A small advance confirms your slot. The amount is shared along with your quote.' },
  { q: 'Do you customise designs?', a: 'Yes. Share reference photos or describe your idea and the design is tailored to you.' },
  { q: 'How can I get a price estimate?', a: 'Use the enquiry form or WhatsApp button with your service, date and coverage. Custom work is quoted individually.' },
];
