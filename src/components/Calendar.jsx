import { useState } from 'react';
import { site } from '../data/site.js';

export default function Calendar({
  embedUrl = site.calendarEmbedUrl,
  title = 'Calendario de disponibilidad de Espacio Raku',
}) {
  const [isLoading, setIsLoading] = useState(Boolean(embedUrl));
  const [hasError, setHasError] = useState(false);

  if (!embedUrl || hasError) {
    return (
      <div className="cal cal-fallback" role="status">
        <h3>Calendario temporalmente no disponible</h3>
        <p>
          Escribinos por WhatsApp con las fechas que tenés en mente y te confirmamos la
          disponibilidad.
        </p>
      </div>
    );
  }

  return (
    <div
      className="cal"
      role="region"
      aria-label="Calendario de disponibilidad"
      aria-busy={isLoading}
    >
      <div className="cal-frame">
        {isLoading && (
          <div className="cal-loading" role="status">
            <span className="cal-spinner" aria-hidden="true" />
            <span>Cargando calendario…</span>
          </div>
        )}

        <iframe
          className="cal-embed"
          src={embedUrl}
          title={title}
          loading="lazy"
          frameBorder="0"
          scrolling="no"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      </div>

      <p className="cal-note">
        El calendario es informativo. Consultanos por WhatsApp para confirmar tu reserva.
      </p>
    </div>
  );
}
