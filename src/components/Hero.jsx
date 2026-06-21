import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <img
        className="hero-bg"
        src="/assets/photos/hero-piscina.jpg"
        alt="Piscina y jardín de Espacio Raku en Chacras de Coria"
        width="1600"
        height="1067"
        fetchpriority="high"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <img
          src="/assets/brand/logo-blanco.png"
          alt="Espacio Raku"
          className="hero-logo"
          width="5226"
          height="2730"
        />
        <h1>Cabañas y alojamiento en Chacras de Coria, Mendoza</h1>
        <p className="hero-sub">
          Lofts y departamento cálidos con piscina y jardín, en Luján de Cuyo. Un
          hospedaje tranquilo para disfrutar Mendoza de otra manera.
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
