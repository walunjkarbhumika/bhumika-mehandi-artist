import { useEffect } from 'react';
import { site } from '../config/site.js';

function setMeta(sel, attr, value) {
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement(sel.startsWith('link') ? 'link' : 'meta');
    const m = sel.match(/\[(.+?)="(.+?)"\]/);
    el.setAttribute(m[1], m[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function useSeo({ title, description, path = '/' }) {
  useEffect(() => {
    const full = `${title} | ${site.name}`;
    const url = site.siteUrl.replace(/\/$/, '') + path;
    document.title = full;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', full);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('link[rel="canonical"]', 'href', url);
    window.scrollTo(0, 0);
  }, [title, description, path]);
}

export function localBusinessSchema() {
  const base = site.siteUrl.replace(/\/$/, '');
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: site.name,
    description: site.tagline + ' Professional mehndi artist.',
    url: base,
    image: site.heroImage ? base + site.heroImage : base + '/og-image.svg',
    areaServed: site.serviceAreas.map((a) => ({ '@type': 'City', name: a })),
    makesOffer: undefined,
  };
  if (site.phoneDisplay) data.telephone = site.phoneDisplay;
  if (site.email) data.email = site.email;
  if (site.instagram) data.sameAs = [site.instagram];
  if (site.address) data.address = { '@type': 'PostalAddress', streetAddress: site.address, addressCountry: 'IN' };
  return JSON.stringify(data);
}
