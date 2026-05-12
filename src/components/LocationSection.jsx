import { PinIcon } from './icons/Icons.jsx';
import { site } from '../data/site.js';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';

export default function LocationSection() {
  return (
    <section className="section location" id="ubicacion">
      <div className="container loc-grid">
        <div className="loc-text">
          <span className="eyebrow">DÓNDE ESTAMOS</span>
          <h2>
            Chacras de Coria, <span className="accent">Mendoza</span>
          </h2>
          <p>
            Espacio Raku está en el corazón de Chacras de Coria: una zona residencial
            tranquila, rodeada de viñedos y a pocos minutos del centro de Mendoza.
          </p>
          <p>
            Fácil acceso en auto, remis o transporte privado desde el aeropuerto
            (aproximadamente 20 minutos). Escribinos y te mandamos las indicaciones exactas.
          </p>
          <a
            href={buildWhatsAppUrl(messages.location)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label="Pedir indicaciones por WhatsApp"
          >
            Pedir indicaciones por WhatsApp
          </a>
        </div>

        <div
          className="map-card"
          role="img"
          aria-label="Mapa de ubicación: Chacras de Coria, Mendoza"
        >
          <div className="map-pin" aria-hidden="true">
            <PinIcon />
          </div>
          <strong>Espacio Raku</strong>
          <p>Chacras de Coria, Mendoza, Argentina</p>
          <a
            href={site.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
