import { useState } from 'react';
import Calendar from './Calendar.jsx';
import { CalendarIcon, MessageIcon } from './icons/Icons.jsx';

export default function Availability() {
  const [date, setDate] = useState(null);

  const formatted = date
    ? new Date(date + 'T00:00:00').toLocaleDateString('es-AR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
      })
    : null;

  const waLink = date
    ? `https://wa.me/5492610000000?text=${encodeURIComponent(`Hola! Me interesa consultar disponibilidad para el ${formatted} en Espacio Raku.`)}`
    : 'https://wa.me/5492610000000';

  return (
    <section className="section availability" id="disponibilidad">
      <div className="container avail-head">
        <span className="eyebrow">DISPONIBILIDAD</span>
        <h2>Elegí tu <span className="accent">fecha ideal</span></h2>
        <p className="lead">
          Mirá los días disponibles y reservá el momento perfecto para tu escapada.
        </p>
      </div>

      <div className="container avail-grid">
        <Calendar onSelect={setDate} />

        <aside className="avail-panel">
          <span className="panel-ico"><CalendarIcon /></span>
          <h3>Tu fecha</h3>
          {date ? (
            <>
              <p className="picked">{formatted}</p>
              <p className="muted">Confirmá tu reserva por WhatsApp y nuestro equipo te responde a la brevedad.</p>
              <a href={waLink} target="_blank" rel="noopener" className="btn btn-primary wide">
                <MessageIcon width="18" height="18" /> Consultar esta fecha
              </a>
            </>
          ) : (
            <>
              <p className="muted">Tocá un día disponible en el calendario para empezar.</p>
              <a href="#contacto" className="btn btn-ghost-dark wide">Solicitar información</a>
            </>
          )}

          <ul className="avail-points">
            <li>Disponibilidad actualizada en tiempo real</li>
            <li>Confirmación rápida por WhatsApp</li>
            <li>Atención personalizada</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
