import { useState } from 'react';
import { ChevronDown } from './icons/Icons.jsx';
import { faq } from '../data/faq.js';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section faq" id="faq">
      <div className="container faq-head">
        <span className="eyebrow">PREGUNTAS FRECUENTES</span>
        <h2>
          ¿Tenés <span className="accent">dudas</span>?
        </h2>
        <p className="lead">
          Respondemos las consultas más comunes. Si no encontrás lo que buscás, escribinos
          por WhatsApp.
        </p>
      </div>

      <div className="container faq-list">
        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.id} className={`faq-item${isOpen ? ' open' : ''}`}>
              <button
                className="faq-summary"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.question}</span>
                <ChevronDown className="chev" />
              </button>
              <div className="faq-body" hidden={!isOpen}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container faq-foot">
        <p>
          ¿No encontraste lo que buscabas?{' '}
          <a
            href={buildWhatsAppUrl(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            Consultanos por WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}
