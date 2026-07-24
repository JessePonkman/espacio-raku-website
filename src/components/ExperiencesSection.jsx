import { Fragment, useEffect, useState } from 'react';
import { experiences } from '../data/experiences.js';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';
import { trackWhatsAppClick } from '../utils/analytics.js';
import ImageCarousel from './ImageCarousel.jsx';
import OptimizedImage, { PHOTO_WIDTHS } from './OptimizedImage.jsx';

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

function ExperienceDetails({
  experience,
  detailsPanelId,
  labelledBy,
  onClose,
}) {
  const hasDirectContact = Boolean(experience.contactPhone);
  const contactLabel = hasDirectContact
    ? `Contactar a ${experience.contactName ?? 'la persona encargada'} por WhatsApp`
    : 'Consultar por WhatsApp';

  return (
    <div
      id={detailsPanelId}
      className="exp-details"
      role="region"
      aria-labelledby={labelledBy}
    >
      <div key={experience.id} className="exp-details-layout">
        <button
          type="button"
          className="exp-details-close"
          onClick={onClose}
          aria-label={`Cerrar detalles de ${experience.title}`}
        >
          ×
        </button>

        <div className="exp-details-copy">
          <span className="eyebrow">DETALLES DE LA EXPERIENCIA</span>
          <h3>{experience.title}</h3>
          <p className="exp-details-provider">{experience.provider}</p>
          <p>{experience.introduction}</p>

          <div className="exp-detail-sections">
            {experience.sections.map((section) => (
              <section key={section.title}>
                <h4>{section.title}</h4>
                <p>{section.description}</p>
              </section>
            ))}
          </div>

          {experience.closingText && (
            <p className="exp-details-closing">{experience.closingText}</p>
          )}

          <a
            href={buildWhatsAppUrl(
              messages.experience(experience.title),
              experience.contactPhone,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary wide"
            aria-label={`${contactLabel} para ${experience.title}`}
            onClick={() =>
              trackWhatsAppClick(
                `whatsapp_click_experience_${experience.id.replaceAll('-', '_')}`,
              )
            }
          >
            {contactLabel}
          </a>
        </div>

        <ImageCarousel
          ariaLabel={`Galería de ${experience.title}`}
          images={[experience.image, ...experience.gallery].map((src, index) => ({
            src,
            alt: `${experience.title}, vista ${index + 1}`,
          }))}
        />
      </div>
    </div>
  );
}

export default function ExperiencesSection() {
  const [openExperience, setOpenExperience] = useState(null);
  const [isCompactLayout, setIsCompactLayout] = useState(false);
  const selectedIndex = experiences.findIndex(
    (experience) => experience.id === openExperience,
  );
  const selectedExperience =
    selectedIndex >= 0 ? experiences[selectedIndex] : null;
  const detailsPanelId = 'experience-details-panel';
  const detailsInsertIndex =
    selectedIndex < 0
      ? -1
      : isCompactLayout
        ? selectedIndex
        : Math.min(
            experiences.length - 1,
            selectedIndex + (selectedIndex % 2 === 0 ? 1 : 0),
          );

  useEffect(() => {
    const media = window.matchMedia('(max-width: 760px)');
    const updateLayout = () => setIsCompactLayout(media.matches);

    updateLayout();

    if (media.addEventListener) {
      media.addEventListener('change', updateLayout);
      return () => media.removeEventListener('change', updateLayout);
    }

    media.addListener(updateLayout);
    return () => media.removeListener(updateLayout);
  }, []);

  function toggleExperience(id) {
    setOpenExperience((currentId) => (currentId === id ? null : id));
  }

  return (
    <section className="section experiences" id="experiencias">
      <div className="container experiences-head">
        <span className="eyebrow">EXPERIENCIAS DE TEMPORADA</span>
        <h2>
          Experiencias para <span className="accent">disfrutar Mendoza</span>
        </h2>
        <p className="lead">
          Te acompañaremos a sumar algo especial a tu estadía con propuestas para
          disfrutar Mendoza a otro ritmo. Todas se coordinan con anticipación y están
          sujetas a disponibilidad.
        </p>
      </div>

      <div
        className={`section-carousel${selectedExperience ? ' has-open-experience' : ''}`}
      >
        <p className="carousel-hint" aria-hidden="true">Deslizá para ver más →</p>
        <div className="exp-cards-grid">
          {experiences.map((experience, index) => {
            const isOpen = openExperience === experience.id;
            const toggleId = `experience-toggle-${experience.id}`;

            return (
              <Fragment key={experience.id}>
                <article
                  className={`exp-card${isOpen ? ' is-open' : ''}`}
                >
                  <div className="exp-summary">
                    <div className="exp-card-img">
                      <OptimizedImage
                        src={experience.image}
                        alt={experience.imageAlt ?? experience.title}
                        widths={PHOTO_WIDTHS}
                        sizes="(max-width: 760px) 82vw, 50vw"
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

                {selectedExperience && index === detailsInsertIndex && (
                  <ExperienceDetails
                    experience={selectedExperience}
                    detailsPanelId={detailsPanelId}
                    labelledBy={`experience-toggle-${selectedExperience.id}`}
                    onClose={() => setOpenExperience(null)}
                  />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
