import { useEffect, useState } from 'react';
import OptimizedImage, { PHOTO_WIDTHS } from './OptimizedImage.jsx';

export default function AboutMediaCarousel({ images, ariaLabel, intervalMs = 5000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = images ?? [];
  const hasMultipleSlides = slides.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const id = setTimeout(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, intervalMs);

    return () => clearTimeout(id);
  }, [activeIndex, hasMultipleSlides, slides.length, intervalMs]);

  if (slides.length === 0) return null;

  return (
    <>
      <div className="about-media-carousel" role="img" aria-label={ariaLabel}>
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`about-media-carousel-slide${index === activeIndex ? ' is-active' : ''}`}
          >
            <OptimizedImage
              className="about-img"
              src={slide.src}
              alt=""
              widths={PHOTO_WIDTHS}
              sizes="(max-width: 760px) calc(100vw - 32px), 50vw"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : undefined}
            />
          </div>
        ))}
      </div>

      {hasMultipleSlides && (
        <div className="about-media-carousel-dots" role="tablist" aria-label="Seleccionar foto">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Foto ${index + 1} de ${slides.length}`}
              className={`about-media-carousel-dot${index === activeIndex ? ' is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
    </>
  );
}
