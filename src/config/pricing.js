// ───────── EDIT PRICES HERE ─────────
// Leave `null` until confirmed. The site then shows "Quote on request".
export const servicePrices = {
  bridal: null, engagement: null, arabic: null, traditional: null,
  minimal: null, festival: null, 'baby-shower': null, group: null,
};

export const packages = [
  { id: 'basic', name: 'Basic Mehndi', price: null, highlight: false,
    description: 'For small occasions and simple looks.',
    features: ['Simple mehndi designs', 'Selected hand coverage', 'Suitable for small occasions'] },
  { id: 'premium', name: 'Premium Mehndi', price: null, highlight: true,
    description: 'Detailed work for important functions.',
    features: ['Detailed designs', 'More intricate patterns', 'Personalised design consultation'] },
  { id: 'bridal', name: 'Bridal Mehndi', price: null, highlight: false,
    description: 'Complete bridal artwork, planned with you.',
    features: ['Customised bridal artwork', 'Detailed hand and feet designs', 'Personal booking consultation'] },
];

export const pricingNote =
  'Final pricing depends on design complexity, coverage, location and date. Custom bookings may be priced differently, and every quote is confirmed on WhatsApp before you pay.';

export const formatPrice = (p) => (p ? `From ₹${Number(p).toLocaleString('en-IN')}` : 'Quote on request');
