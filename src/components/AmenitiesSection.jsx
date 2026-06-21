import { amenities } from '../data/amenities.js';
import {
  WifiIcon,
  HeartIcon,
  SparkleIcon,
  CarIcon,
  WindIcon,
  LeafIcon,
} from './icons/Icons.jsx';

const iconMap = {
  wifi: WifiIcon,
  paw: HeartIcon,
  sparkle: SparkleIcon,
  car: CarIcon,
  wind: WindIcon,
  leaf: LeafIcon,
};

export default function AmenitiesSection() {
  const highlights = amenities.filter(({ variant }) => variant === 'highlight');
  const standardAmenities = amenities.filter(({ variant }) => variant === 'standard');

  return (
    <section className="section amenities" id="servicios">
      <div className="container amenities-head">
        <span className="eyebrow">COMODIDADES</span>
        <h2>
          Servicios e <span className="accent">instalaciones</span>
        </h2>
        <p className="lead">
          Comodidades para una estadía tranquila y espacios para disfrutar el aire libre.
        </p>
      </div>

      <div className="container facility-highlights">
        {highlights.map(({ id, label, description, image, imageAlt }) => (
          <article key={id} className="facility-highlight">
            <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
            <div className="facility-highlight-body">
              <h3>{label}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="container amenity-grid">
        {standardAmenities.map(({ id, label, description, icon }) => {
          const Icon = iconMap[icon] ?? LeafIcon;
          return (
            <article key={id} className="amenity-item">
              <div className="amenity-ico" aria-hidden="true">
                <Icon />
              </div>
              <h3>{label}</h3>
              <p>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
