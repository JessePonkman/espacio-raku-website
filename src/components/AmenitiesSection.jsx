import { amenities } from '../data/amenities.js';
import {
  PoolIcon,
  WifiIcon,
  HeartIcon,
  SparkleIcon,
  CarIcon,
  WindIcon,
  LeafIcon,
} from './icons/Icons.jsx';

const iconMap = {
  pool: PoolIcon,
  wifi: WifiIcon,
  paw: HeartIcon,
  sparkle: SparkleIcon,
  car: CarIcon,
  wind: WindIcon,
  leaf: LeafIcon,
};

export default function AmenitiesSection() {
  return (
    <section className="section amenities" id="servicios">
      <div className="container amenities-head">
        <span className="eyebrow">COMODIDADES</span>
        <h2>
          Servicios e <span className="accent">instalaciones</span>
        </h2>
        <p className="lead">
          Todo lo que necesitás para una estadía cómoda, sin preocupaciones.
        </p>
      </div>

      <div className="container amenity-grid">
        {amenities.map(({ id, label, description, icon }) => {
          const Icon = iconMap[icon] ?? LeafIcon;
          return (
            <div key={id} className="amenity-item">
              <div className="amenity-ico" aria-hidden="true">
                <Icon />
              </div>
              <h4>{label}</h4>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
