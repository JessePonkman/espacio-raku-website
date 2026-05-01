import { useState } from 'react';
import { ChevronDown, ArrowRight } from './icons/Icons.jsx';

const items = [
  { q: '¿Cómo reservar en ESPACIO RAKU?', a: 'Contactanos por WhatsApp o por el formulario, te confirmamos disponibilidad y te enviamos los datos para asegurar tu fecha.' },
  { q: '¿Cómo consulto disponibilidad?', a: 'Mirá el calendario en la sección Disponibilidad o escribinos por WhatsApp indicando las fechas que tenés en mente y la cantidad de personas.' },
  { q: '¿Qué incluye la estadía?', a: 'Alojamiento en cabaña, acceso a jardín y pileta, ropa de cama, parrilla y wifi. Algunos espacios incluyen desayuno opcional.' },
  { q: '¿Cuál es el horario de check-in y check-out?', a: 'Check-in desde las 15:00 hs y check-out hasta las 11:00 hs. Si necesitás flexibilidad, avisanos antes y vemos cómo acomodarnos.' },
  { q: '¿Aceptan mascotas?', a: 'Algunas de nuestras cabañas son pet-friendly. Consultanos antes de reservar para confirmar disponibilidad y condiciones.' }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="container faq-head">
        <span className="eyebrow">PREGUNTAS FRECUENTES</span>
        <h2>¿Tenés dudas?</h2>
        <p className="lead">Respondemos las preguntas más comunes sobre ESPACIO RAKU.</p>
      </div>

      <div className="container faq-list">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button
                className="faq-summary"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{it.q}</span>
                <ChevronDown className="chev" />
              </button>
              <div className="faq-body" hidden={!isOpen}>
                <p>{it.a}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container faq-foot">
        <a href="#contacto" className="link-arrow">
          Ver todas las preguntas <ArrowRight width="16" height="16" />
        </a>
      </div>
    </section>
  );
}
