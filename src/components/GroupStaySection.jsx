import { groupStay } from '../data/groupStay.js';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';

export default function GroupStaySection() {
  return (
    <section className="section group-stay" id="grupos" aria-labelledby="group-stay-title">
      <div className="container">
        <div className="group-stay-panel">
          <span className="eyebrow">{groupStay.eyebrow}</span>
          <h2 id="group-stay-title">{groupStay.title}</h2>
          <p className="group-stay-description">{groupStay.description}</p>
          <p className="group-stay-capacity-note">{groupStay.capacityNote}</p>
          <a
            href={buildWhatsAppUrl(messages.group)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary group-stay-cta"
            aria-label="Consultar para un grupo por WhatsApp (se abre en una nueva pestaña)"
          >
            {groupStay.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
