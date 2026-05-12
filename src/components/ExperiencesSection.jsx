import { experiences } from '../data/experiences.js';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';

const statusLabel = {
  available: 'Disponible',
  ask: 'Consultar disponibilidad',
  unavailable: 'Temporalmente no disponible',
};

const statusClass = {
  available: 'status-available',
  ask: 'status-ask',
  unavailable: 'status-unavailable',
};

export default function ExperiencesSection() {
  return (
    <section className="section experiences" id="experiencias">
      <div className="container experiences-head">
        <span className="eyebrow">EXPERIENCIAS</span>
        <h2>
          Más que un lugar <span className="accent">para dormir</span>
        </h2>
        <p className="lead">
          Sumá algo especial a tu estadía con experiencias pensadas para disfrutar Mendoza
          a otro ritmo.
        </p>
      </div>

      <div className="container exp-cards-grid">
        {experiences.map((exp) => (
          <article key={exp.id} className="exp-card">
            <div className="exp-card-img">
              <img src={exp.image} alt={exp.title} loading="lazy" />
              <span className={`exp-status ${statusClass[exp.status]}`}>
                {statusLabel[exp.status]}
              </span>
            </div>
            <div className="exp-card-body">
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              <a
                href={buildWhatsAppUrl(messages.experience(exp.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label={`Consultar por la experiencia ${exp.title}`}
              >
                Consultar experiencia
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
