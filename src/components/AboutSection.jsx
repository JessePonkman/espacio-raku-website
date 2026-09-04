import { LeafIcon, MoonIcon, UsersIcon } from './icons/Icons.jsx';
import AboutMediaCarousel from './AboutMediaCarousel.jsx';

const aboutMediaSlides = [
  { src: '/assets/photos/jardin-pileta.jpg' },
  { src: '/assets/photos/pileta-panoramica.jpg' },
  { src: '/assets/photos/jardin-cochera.jpg' },
];

const highlights = [
  {
    Icon: MoonIcon,
    text: 'Un espacio para descansar y bajar el ritmo de verdad, lejos del ruido cotidiano.',
  },
  {
    Icon: LeafIcon,
    text: 'Naturaleza y tranquilidad en Chacras de Coria, a minutos de los mejores viñedos.',
  },
  {
    Icon: UsersIcon,
    text: 'Atención directa y personalizada de los anfitriones que te acompañan en todo el proceso.',
  },
];

export default function AboutSection() {
  return (
    <section className="section about" id="sobre">
      <div className="container about-grid">
        <div className="about-media">
          <AboutMediaCarousel
            images={aboutMediaSlides}
            ariaLabel="Jardín, piscina y estacionamiento de Espacio Raku en Chacras de Coria"
          />
          <div className="about-badge" aria-hidden="true">
            <div className="badge-ico">
              <LeafIcon />
            </div>
            <div>
              <strong>Chacras de Coria</strong>
              <span>Mendoza, Argentina</span>
            </div>
          </div>
        </div>

        <div className="about-text">
          <span className="eyebrow">SOBRE EL LUGAR</span>
          <h2>
            Un refugio cálido en <span className="accent">Chacras de Coria</span>
          </h2>
          <p>
            Espacio Raku nació de las ganas de crear algo distinto: un lugar en el que cada
            detalle invite a bajar el ritmo. Este alojamiento temporario está en Chacras de
            Coria, Luján de Cuyo, rodeado de viñedos y tranquilidad. Es un espacio pensado
            para quienes buscan una estadía cálida, personal y lejos de lo genérico.
          </p>
          <ul className="about-list">
            {highlights.map(({ Icon, text }) => (
              <li key={text}>
                <span className="ico" aria-hidden="true">
                  <Icon />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <a href="#alojamientos" className="link-arrow">
            Ver los alojamientos →
          </a>
        </div>
      </div>
    </section>
  );
}
