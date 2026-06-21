import { useState } from 'react';
import { PinIcon } from './icons/Icons.jsx';
import { site } from '../data/site.js';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';

export default function LocationSection() {
  const [mapStatus, setMapStatus] = useState('loading');

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
              referrerPolicy="no-referrer-when-downgrade"
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
              aria-label="Abrir la ubicación de Espacio Raku en Google Maps (se abre en una pestaña nueva)"
            >
              Ver en Google Maps →
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
