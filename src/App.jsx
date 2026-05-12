import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AboutSection from './components/AboutSection.jsx';
import AccommodationsSection from './components/AccommodationsSection.jsx';
import Availability from './components/Availability.jsx';
import AmenitiesSection from './components/AmenitiesSection.jsx';
import ExperiencesSection from './components/ExperiencesSection.jsx';
import LocationSection from './components/LocationSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import FAQSection from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <AccommodationsSection />
        <Availability />
        <AmenitiesSection />
        <ExperiencesSection />
        <LocationSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
