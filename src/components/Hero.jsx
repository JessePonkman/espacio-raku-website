import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';
import OptimizedImage, { LOGO_WIDTHS, PHOTO_WIDTHS } from './OptimizedImage.jsx';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <OptimizedImage
        className="hero-bg"
        src="/assets/photos/hero-piscina.jpg"
        alt="Piscina y jardín de Espacio Raku en Chacras de Coria"
        widths={PHOTO_WIDTHS}
        sizes="100vw"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <OptimizedImage
          src="/assets/brand/logo-blanco.png"
          alt="Espacio Raku"
          className="hero-logo"
          widths={LOGO_WIDTHS}
          sizes="(max-width: 760px) 184px, 240px"
          loading="eager"
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
