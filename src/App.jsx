import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Values from './components/Values.jsx';
import Spaces from './components/Spaces.jsx';
import Availability from './components/Availability.jsx';
import Audience from './components/Audience.jsx';
import Process from './components/Process.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Values />
        <Spaces />
        <Availability />
        <Audience />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat phone="5492610000000" />
    </>
  );
}
