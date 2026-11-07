import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Pricing from './pages/Pricing.jsx';
import Contact from './pages/Contact.jsx';
import { localBusinessSchema, useSeo } from './lib/useSeo.js';

function NotFound() {
  useSeo({ title: 'Page not found', description: 'This page does not exist.', path: '/404' });
  return (
    <div className="wrap section text-center">
      <h1 className="text-5xl">Page not found</h1>
      <p className="mt-3">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary mt-6">Back to home</Link>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    let el = document.getElementById('ld-json');
    if (!el) { el = document.createElement('script'); el.id = 'ld-json'; el.type = 'application/ld+json'; document.head.appendChild(el); }
    el.textContent = localBusinessSchema();
  }, []);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
