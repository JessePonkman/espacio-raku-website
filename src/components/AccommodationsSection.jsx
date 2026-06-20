import { useState } from 'react';
import { accommodations } from '../data/accommodations.js';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';
import ImageCarousel from './ImageCarousel.jsx';

export default function AccommodationsSection() {
  const [openAccommodation, setOpenAccommodation] = useState(null);
  const selectedAccommodation = accommodations.find(
    (accommodation) => accommodation.id === openAccommodation,
  );
  const detailsPanelId = 'accommodation-details-panel';

  function toggleAccommodation(id) {
    setOpenAccommodation((currentId) => (currentId === id ? null : id));
  }

  return (
    <section className="section accommodations" id="alojamientos">
      <div className="container accommodations-head">
        <span className="eyebrow">ALOJAMIENTOS</span>
        <h2>
          Los <span className="accent">espacios</span>
        </h2>
        <p className="lead">
          Cada alojamiento está pensado para que te sientas como en casa, con la calidez de
          un lugar cuidado y el entorno de Chacras de Coria.
        </p>
      </div>

      <div className="section-carousel">
        <p className="carousel-hint" aria-hidden="true">Deslizá para ver más →</p>
        <div className="accom-grid">
          {accommodations.map((accommodation) => {
            const isOpen = openAccommodation === accommodation.id;
            const toggleId = `accommodation-toggle-${accommodation.id}`;

            return (
              <article
                key={accommodation.id}
                className={`accom-card${isOpen ? ' is-open' : ''}`}
              >
                <div className="accom-summary">
                  <div className="accom-img">
                    <img src={accommodation.image} alt={accommodation.name} loading="lazy" />
                  </div>
                  <div className="accom-body">
                    <h3>{accommodation.name}</h3>
                    <p className="accom-capacity">{accommodation.capacity}</p>
                    <p className="accom-desc">{accommodation.shortDescription}</p>
                    <div className="accom-chips" aria-label="Comodidades principales">
                      {accommodation.summaryAmenities.map((amenity) => (
                        <span key={amenity} className="chip">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <span className="accom-more" aria-hidden="true">
                      {isOpen ? 'Cerrar detalles' : 'Ver alojamiento'}
                      <span className="accom-chevron">⌄</span>
                    </span>
                  </div>
                  <button
                    id={toggleId}
                    type="button"
                    className="accom-toggle"
                    aria-expanded={isOpen}
                    aria-controls={detailsPanelId}
                    onClick={() => toggleAccommodation(accommodation.id)}
                  >
                    <span className="sr-only">
                      {isOpen ? 'Cerrar detalles de' : 'Ver detalles de'} {accommodation.name}
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
        className="container accom-details"
        role="region"
        aria-labelledby={
          selectedAccommodation
            ? `accommodation-toggle-${selectedAccommodation.id}`
            : undefined
        }
        hidden={!selectedAccommodation}
      >
        {selectedAccommodation && (
          <div key={selectedAccommodation.id} className="accom-details-layout">
            <button
              type="button"
              className="accom-details-close"
              onClick={() => setOpenAccommodation(null)}
              aria-label={`Cerrar detalles de ${selectedAccommodation.name}`}
            >
              ×
            </button>

            <div className="accom-details-copy">
              <span className="eyebrow">DETALLES DEL ALOJAMIENTO</span>
              <h3>{selectedAccommodation.name}</h3>
              <p className="accom-details-capacity">{selectedAccommodation.capacity}</p>
              <p>{selectedAccommodation.fullDescription}</p>

              <h4>Todo lo que incluye</h4>
              <ul className="accom-amenities">
                {selectedAccommodation.amenities.map((amenity) => (
                  <li key={amenity}>{amenity}</li>
                ))}
              </ul>

              <a
                href={buildWhatsAppUrl(messages.accommodation(selectedAccommodation.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary wide"
                aria-label={`Consultar disponibilidad para ${selectedAccommodation.name}`}
              >
                Consultar por este alojamiento
              </a>
            </div>

            <ImageCarousel
              ariaLabel={`Galería de ${selectedAccommodation.name}`}
              images={[selectedAccommodation.image, ...selectedAccommodation.gallery].map(
                (src, index) => ({
                  src,
                  alt: `${selectedAccommodation.name}, vista ${index + 1}`,
                }),
              )}
            />
          </div>
        )}
      </div>
    </section>
  );
}
