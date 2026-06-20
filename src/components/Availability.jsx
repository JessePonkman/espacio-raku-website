import Calendar from './Calendar.jsx';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';

export default function Availability() {
  const waUrl = buildWhatsAppUrl(messages.availability);

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
        <Calendar />

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
