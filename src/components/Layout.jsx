import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import WhatsAppFloat from './WhatsAppFloat.jsx';

export default function Layout() {
  return (
    <>
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
