import { writeFileSync } from 'node:fs';
import { site } from '../src/config/site.js';
const base = (process.env.SITE_URL || site.siteUrl).replace(/\/$/, '');
const pages = ['', '/about', '/services', '/portfolio', '/pricing', '/contact'];
const today = new Date().toISOString().slice(0, 10);
writeFileSync('public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages.map((p) => `  <url><loc>${base}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n') + `\n</urlset>\n`);
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);
console.log('SEO files generated for', base);
