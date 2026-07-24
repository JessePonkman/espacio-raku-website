import { useState } from 'react';
import { PinIcon } from './icons/Icons.jsx';
import { site } from '../data/site.js';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';
import { trackWhatsAppClick } from '../utils/analytics.js';

export default function LocationSection() {
  const [mapStatus, setMapStatus] = useState('loading');

  return (
    <section className="section location" id="ubicacion">
      <div className="container loc-grid">
        <div className="loc-text">
          <span className="eyebrow">DÓNDE ESTAMOS</span>
          <h2>
            Dónde estamos en Chacras de Coria, <span className="accent">Luján de Cuyo</span>
          </h2>
          <p>
            Espacio Raku está en Chacras de Coria, Mendoza: una zona residencial tranquila
            del departamento de Luján de Cuyo, con buen acceso
            a bodegas, restaurantes, supermercados, centros comerciales, Ciudad de Mendoza
            y salidas hacia la montaña.
          </p>
          <p>
            Fácil acceso en auto, remis o transporte privado desde el Aeropuerto El
            Plumerillo. Escribinos y te mandamos las indicaciones exactas para llegar.
          </p>
          <a
            href={buildWhatsAppUrl(messages.location)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label="Pedir indicaciones por WhatsApp"
            onClick={() => trackWhatsAppClick('whatsapp_click_location')}
          >
            Pedir indicaciones por WhatsApp
          </a>
        </div>

        <figure className={`map-card map-card--${mapStatus}`}>
          <div className="map-frame">
            {mapStatus !== 'loaded' && (
              <div
                className="map-status"
                role={mapStatus === 'error' ? 'alert' : 'status'}
                aria-live="polite"
              >
                <div className="map-pin" aria-hidden="true">
                  <PinIcon />
                </div>
                <strong>
                  {mapStatus === 'error' ? 'No pudimos cargar el mapa' : 'Cargando mapa…'}
                </strong>
                {mapStatus === 'error' && (
                  <p>Podés abrir la ubicación directamente en Google Maps.</p>
                )}
              </div>
            )}
            <iframe
              className="map-embed"
              src={site.googleMapsEmbedUrl}
              title="Mapa de Espacio Raku en Chacras de Coria, Mendoza"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={() => setMapStatus('loaded')}
              onError={() => setMapStatus('error')}
            />
          </div>
          <figcaption className="map-caption">
            <div>
              <strong>Espacio Raku</strong>
              <p>Chacras de Coria, Mendoza, Argentina</p>
            </div>
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver en Google Maps (se abre en una pestaña nueva)"
            >
              Ver en Google Maps →
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
