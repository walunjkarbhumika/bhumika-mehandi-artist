# Bhumika Henna Studio: React + Vite + Tailwind

Mehndi artist website built for WhatsApp enquiries. Pages: Home, About, Services, Portfolio, Pricing, Contact & Booking.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist (also regenerates sitemap + robots)
npm run preview    # test the production build
```

## What to edit (all content lives in `src/config/`)
| File | Controls |
|---|---|
| `site.js` | WhatsApp number, phone, email, Instagram, address (enables Google Map), hero/artist photo, about text, FAQs, booking steps, domain |
| `services.js` | The 8 services and their photos |
| `pricing.js` | All prices (`null` shows "Quote on request"), packages, pricing note |
| `portfolio.js` | Gallery items and categories |
| `testimonials.js` | Real reviews only. The section stays hidden while empty |

### Must do before launch
1. `site.whatsappNumber`: country code + number, digits only, e.g. `919876543210`. Until set, WhatsApp buttons open WhatsApp without a recipient.
2. `site.siteUrl`: your live domain (SEO, sitemap, canonical URLs).
3. Add real photos: put files in `public/portfolio/` and set each item's `image` (e.g. `'/portfolio/bridal-1.jpg'`). Same for `heroImage`, `artistImage` and service `image`. Items with no image show decorative line art, so replace all of them before launch.
4. Set Instagram, address (shows a Google Map automatically, no API key needed), and prices when confirmed.
5. Add `public/og-image.jpg` (1200x630) and point `og:image` in `index.html` to it for better link previews.

### Image tips
Export photos about 1000 px wide as WebP or JPG (under 200 KB each). Images lazy-load automatically.

## Deploy
- Netlify: build `npm run build`, publish `dist` (`public/_redirects` handles page refreshes).
- Vercel: framework Vite (`vercel.json` handles routing).
- Cloudflare Pages / GitHub Pages: output `dist`, add a SPA fallback to `index.html`.

Set `SITE_URL=https://yourdomain.com` as an environment variable to override `siteUrl` for the sitemap.

## Notes
- The booking form validates input and opens WhatsApp with a prefilled message. No data is stored or sent to any server.
- LocalBusiness structured data is generated from `site.js`; address and phone appear once filled in.
- Accessibility: skip link, keyboard-operable gallery and lightbox (Esc, arrows, swipe), focus styles, reduced-motion support.
