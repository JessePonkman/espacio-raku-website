import { CheckIcon, MoonIcon, UsersIcon, HeartIcon, ArrowRight } from './icons/Icons.jsx';

const items = [
  { Icon: MoonIcon, title: 'Descanso profundo', text: 'Alejáte de las pantallas y el ruido. Encontrá tu ritmo natural.' },
  { Icon: UsersIcon, title: 'Momentos para compartir', text: 'Creá recuerdos únicos con quienes más querés.' },
  { Icon: HeartIcon, title: 'Conexión contigo', text: 'Un espacio para resetear y encontrar claridad.' }
];

export default function Experience() {
  return (
    <section className="section experience" id="experiencia">
      <div className="container exp-grid">
        <div className="exp-media">
          <div className="exp-image" role="img" aria-label="Cabaña a la orilla de un lago" />
          <div className="exp-badge">
            <div className="check"><CheckIcon /></div>
            <div>
              <strong>100%</strong>
              <span>Experiencia inmersiva<br />en la naturaleza</span>
            </div>
          </div>
        </div>

        <div className="exp-text">
          <span className="eyebrow">VIVÍ EL MOMENTO</span>
          <h2>Desconectá,<br /><span className="accent">bajá el ritmo</span>,<br />disfrutá.</h2>
          <p>
            En <strong>ESPACIO RAKU</strong> cada momento se vive de forma distinta.
            Es un entorno que te invita a soltar lo que ya no necesitás y encontrar
            paz en lo simple.
          </p>

          <ul className="exp-list">
            {items.map(({ Icon, title, text }) => (
              <li key={title}>
                <span className="ico"><Icon /></span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="#espacios" className="link-arrow">
            Conocé más sobre la experiencia <ArrowRight width="16" height="16" />
          </a>
        </div>
      </div>
    </section>
  );
}
