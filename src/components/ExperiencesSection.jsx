import { useState } from 'react';
import { experiences } from '../data/experiences.js';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';
import ImageCarousel from './ImageCarousel.jsx';

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
  const [openExperience, setOpenExperience] = useState(null);
  const selectedExperience = experiences.find(
    (experience) => experience.id === openExperience,
  );
  const detailsPanelId = 'experience-details-panel';

  function toggleExperience(id) {
    setOpenExperience((currentId) => (currentId === id ? null : id));
  }

  return (
    <section className="section experiences" id="experiencias">
      <div className="container experiences-head">
        <span className="eyebrow">EXPERIENCIAS DE TEMPORADA</span>
        <h2>
          Más que un lugar <span className="accent">para dormir</span>
        </h2>
        <p className="lead">
          Te acompañaremos a sumar algo especial a tu estadía con propuestas para
          disfrutar Mendoza a otro ritmo. Todas se coordinan con anticipación y están
          sujetas a disponibilidad.
        </p>
      </div>

      <div className="section-carousel">
        <p className="carousel-hint" aria-hidden="true">Deslizá para ver más →</p>
        <div className="exp-cards-grid">
          {experiences.map((experience) => {
            const isOpen = openExperience === experience.id;
            const toggleId = `experience-toggle-${experience.id}`;

            return (
              <article
                key={experience.id}
                className={`exp-card${isOpen ? ' is-open' : ''}`}
              >
                <div className="exp-summary">
                  <div className="exp-card-img">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      loading="lazy"
                    />
                    <span className={`exp-status ${statusClass[experience.status]}`}>
                      {statusLabel[experience.status]}
                    </span>
                  </div>
                  <div className="exp-card-body">
                    <h3>{experience.title}</h3>
                    <p className="exp-provider">{experience.provider}</p>
                    <p className="exp-description">{experience.shortDescription}</p>
                    <span className="exp-more" aria-hidden="true">
                      {isOpen ? 'Cerrar detalles' : 'Ver experiencia'}
                      <span className="exp-chevron">⌄</span>
                    </span>
                  </div>
                  <button
                    id={toggleId}
                    type="button"
                    className="exp-toggle"
                    aria-expanded={isOpen}
                    aria-controls={detailsPanelId}
                    onClick={() => toggleExperience(experience.id)}
                  >
                    <span className="sr-only">
                      {isOpen ? 'Cerrar detalles de' : 'Ver detalles de'} {experience.title}
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div
        id={detailsPanelId}
        className="container exp-details"
        role="region"
        aria-labelledby={
          selectedExperience ? `experience-toggle-${selectedExperience.id}` : undefined
        }
        hidden={!selectedExperience}
      >
        {selectedExperience && (
          <div key={selectedExperience.id} className="exp-details-layout">
            <button
              type="button"
              className="exp-details-close"
              onClick={() => setOpenExperience(null)}
              aria-label={`Cerrar detalles de ${selectedExperience.title}`}
            >
              ×
            </button>

            <div className="exp-details-copy">
              <span className="eyebrow">DETALLES DE LA EXPERIENCIA</span>
              <h3>{selectedExperience.title}</h3>
              <p className="exp-details-provider">{selectedExperience.provider}</p>
              <p>{selectedExperience.introduction}</p>

              <div className="exp-detail-sections">
                {selectedExperience.sections.map((section) => (
                  <section key={section.title}>
                    <h4>{section.title}</h4>
                    <p>{section.description}</p>
                  </section>
                ))}
              </div>

              {selectedExperience.closingText && (
                <p className="exp-details-closing">{selectedExperience.closingText}</p>
              )}

              <a
                href={buildWhatsAppUrl(messages.experience(selectedExperience.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary wide"
                aria-label={`Consultar disponibilidad para ${selectedExperience.title}`}
              >
                Consultar esta experiencia
              </a>
            </div>

            <ImageCarousel
              ariaLabel={`Galería de ${selectedExperience.title}`}
              images={[selectedExperience.image, ...selectedExperience.gallery].map(
                (src, index) => ({
                  src,
                  alt: `${selectedExperience.title}, vista ${index + 1}`,
                }),
              )}
            />
          </div>
        )}
      </div>
    </section>
  );
}
