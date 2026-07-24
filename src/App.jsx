import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AboutSection from './components/AboutSection.jsx';
import LocalSeoSection from './components/LocalSeoSection.jsx';
import AccommodationsSection from './components/AccommodationsSection.jsx';
import GroupStaySection from './components/GroupStaySection.jsx';
import Availability from './components/Availability.jsx';
import AmenitiesSection from './components/AmenitiesSection.jsx';
import ExperiencesSection from './components/ExperiencesSection.jsx';
import LocationSection from './components/LocationSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import FAQSection from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import SeoStructuredData from './components/SeoStructuredData.jsx';
import SeoLandingPage from './components/SeoLandingPage.jsx';
import { getPageByPath, homeMeta, normalizePath } from './data/seo.js';

function currentPath(initialPath) {
  if (initialPath) return normalizePath(initialPath);
  if (typeof window === 'undefined') return '/';
  return normalizePath(window.location.pathname);
}

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        <LocalSeoSection />
        <AccommodationsSection />
        <GroupStaySection />
        <Availability />
        <AmenitiesSection />
        <ExperiencesSection />
        <LocationSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
    </>
  );
}

export default function App({ initialPath } = {}) {
  const path = currentPath(initialPath);
  const page = getPageByPath(path);
  const isHome = !page || page.path === '/';
  const activePage = page ?? homeMeta;

  return (
    <>
      <SeoStructuredData page={activePage} />
      <Header />
      {isHome ? <HomePage /> : <SeoLandingPage page={activePage} />}
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
