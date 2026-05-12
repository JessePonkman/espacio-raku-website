import { useState } from 'react';
import Calendar from './Calendar.jsx';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';

export default function Availability() {
  const [date, setDate] = useState(null);

  const formatted = date
    ? new Date(date + 'T00:00:00').toLocaleDateString('es-AR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  const waUrl = date
    ? buildWhatsAppUrl(
        `Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad. Me interesa el ${formatted}.`
      )
    : buildWhatsAppUrl(messages.availability);

  return (
    <section className="section availability" id="disponibilidad">
      <div className="container avail-head">
        <span className="eyebrow">DISPONIBILIDAD</span>
        <h2>
          Consultá <span className="accent">disponibilidad</span>
        </h2>
        <p className="lead">
          Revisá las fechas disponibles y escribinos por WhatsApp para coordinar tu estadía.
        </p>
      </div>

      <div className="container avail-inner">
        <Calendar onSelect={setDate} />

        {date && (
          <p className="avail-date-hint">
            Seleccionaste:{' '}
            <strong>{formatted}</strong>
          </p>
        )}

        <div className="avail-cta">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label="Consultar disponibilidad por WhatsApp"
          >
            Consultar disponibilidad por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
