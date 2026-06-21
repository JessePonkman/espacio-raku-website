import { useEffect, useState } from 'react';
import { testimonials } from '../data/testimonials.js';

const AUTOPLAY_DELAY = 7000;

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (
      testimonials.length < 2 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex]);

  if (!testimonials.length) return null;

  return (
    <section className="section testimonials" id="testimonios">
      <div className="container testimonials-head">
        <span className="eyebrow">TESTIMONIOS</span>
        <h2>
          Lo que dicen <span className="accent">nuestros huéspedes</span>
        </h2>
        <p>
          Experiencias reales de quienes eligieron Espacio Raku para descansar y
          disfrutar Mendoza.
        </p>
      </div>

      <div
        className="container test-carousel"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Testimonios de huéspedes"
      >
        <div className="test-carousel-window" aria-live="off">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={testimonial.id}
                className={`test-card${isActive ? ' is-active' : ''}`}
                aria-hidden={!isActive}
              >
                <header className="test-meta">
                  <span className="test-source">{testimonial.source}</span>
                  {testimonial.rating && (
                    <span
                      className="test-rating"
                      aria-label={`${testimonial.rating} de 5 estrellas`}
                    >
                      <span aria-hidden="true">{'★'.repeat(testimonial.rating)}</span>
                    </span>
                  )}
                </header>
                <span className="test-quote" aria-hidden="true">“</span>
                <blockquote className="test-text">
                  <p>{testimonial.quote}</p>
                </blockquote>
                <footer className="test-footer">
                  <cite className="test-author">{testimonial.author}</cite>
                </footer>
              </article>
            );
          })}
        </div>
        <div className="test-carousel-dots" aria-label="Elegir testimonio">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              className={`test-carousel-dot${index === activeIndex ? ' is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver testimonio ${index + 1} de ${testimonials.length}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
