import { testimonials } from '../data/testimonials.js';

export default function TestimonialsSection() {
  if (!testimonials.length) return null;

  return (
    <section className="section testimonials" id="testimonios">
      <div className="container testimonials-head">
        <span className="eyebrow">TESTIMONIOS</span>
        <h2>
          Lo que dicen <span className="accent">nuestros huéspedes</span>
        </h2>
      </div>

      <div className="section-carousel">
        <p className="carousel-hint" aria-hidden="true">Deslizá para ver más →</p>
        <div className="test-grid">
          {testimonials.map((t) => (
            <article key={t.id} className="test-card">
              <span className="test-quote" aria-hidden="true">"</span>
              <p className="test-text">{t.quote}</p>
              <footer className="test-footer">
                {t.author && <span className="test-author">{t.author}</span>}
                {t.source && <span className="test-source">{t.source}</span>}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
