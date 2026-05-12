import { accommodations } from '../data/accommodations.js';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';

export default function AccommodationsSection() {
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
          {accommodations.map((a) => (
            <article key={a.id} className="accom-card">
              <div className="accom-img">
                <img src={a.image} alt={a.name} loading="lazy" />
              </div>
              <div className="accom-body">
                <h3>{a.name}</h3>
                <p className="accom-capacity">{a.capacity}</p>
                <p className="accom-desc">{a.shortDescription}</p>
                <div className="accom-chips" aria-label="Comodidades">
                  {a.amenities.map((am) => (
                    <span key={am} className="chip">
                      {am}
                    </span>
                  ))}
                </div>
                <a
                  href={buildWhatsAppUrl(messages.accommodation(a.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  aria-label={`Consultar disponibilidad para ${a.name}`}
                >
                  Consultar por este alojamiento
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
