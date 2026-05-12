import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" role="img" aria-label="Piscina y jardín de Espacio Raku" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <img
          src="/assets/brand/logo-blanco.png"
          alt="Espacio Raku"
          className="hero-logo"
        />
        <h1>Un lugar para bajar el ritmo en Chacras de Coria</h1>
        <p className="hero-sub">
          Alojamientos cálidos, piscina, tranquilidad y experiencias para disfrutar
          Mendoza de otra manera.
        </p>
        <div className="hero-ctas">
          <a
            href={buildWhatsAppUrl(messages.availability)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label="Consultar disponibilidad por WhatsApp"
          >
            Consultar disponibilidad por WhatsApp
          </a>
          <a href="#alojamientos" className="btn btn-ghost">
            Ver alojamientos
          </a>
        </div>
      </div>
    </section>
  );
}
