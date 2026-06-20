import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from './icons/Icons.jsx';

export default function ImageCarousel({
  images,
  ariaLabel = 'Galería de fotos',
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const slides = images ?? [];
  const imageSet = slides.map((slide) => slide.src).join('|');

  useEffect(() => {
    setCurrentIndex(0);
  }, [imageSet]);

  if (slides.length === 0) return null;

  const currentSlide = slides[currentIndex] ?? slides[0];
  const hasMultipleSlides = slides.length > 1;

  function showRelativeSlide(offset) {
    setCurrentIndex((index) => (index + offset + slides.length) % slides.length);
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 40) return;
    showRelativeSlide(distance > 0 ? -1 : 1);
  }

  return (
    <div
      className={`image-carousel${className ? ` ${className}` : ''}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => {
        touchStartX.current = null;
      }}
    >
      <div className="image-carousel-viewport" aria-live="polite">
        <img
          key={currentSlide.src}
          className="image-carousel-photo"
          src={currentSlide.src}
          alt={currentSlide.alt ?? ''}
          loading="lazy"
        />
      </div>

      {hasMultipleSlides && (
        <>
          <button
            type="button"
            className="image-carousel-control is-previous"
            onClick={() => showRelativeSlide(-1)}
            aria-label="Mostrar foto anterior"
          >
            <ArrowRight />
          </button>
          <button
            type="button"
            className="image-carousel-control is-next"
            onClick={() => showRelativeSlide(1)}
            aria-label="Mostrar foto siguiente"
          >
            <ArrowRight />
          </button>
        </>
      )}
    </div>
  );
}
