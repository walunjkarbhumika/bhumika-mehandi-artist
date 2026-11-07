import { site } from '../config/site.js';

const digits = () => (site.whatsappNumber || '').replace(/\D/g, '');

export const waLink = (text) => `https://wa.me/${digits()}?text=${encodeURIComponent(text)}`;

export const fmtDate = (iso) =>
  iso ? new Date(iso + 'T00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '';

export function buildMessage({ name = '', service = '', date = '', location = '', design = '' } = {}) {
  const lines = [
    'Hello Bhumika! I visited your website and would like to enquire about your Mehndi services.',
    '',
  ];
  if (name) lines.push(`Name: ${name}`);
  lines.push(`Service: ${service}`, `Event Date: ${fmtDate(date)}`, `Event Location: ${location}`, `Preferred Design: ${design}`, '', 'Please share your availability and pricing.');
  return lines.join('\n');
}

export const quickLink = (service = '') => waLink(buildMessage({ service }));
