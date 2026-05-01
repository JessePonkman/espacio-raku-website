import { GlobeIcon, SparkleIcon, HeartIcon, FamilyIcon } from './icons/Icons.jsx';

const items = [
  { Icon: GlobeIcon, title: 'Escapadas', text: 'Un break perfecto de la rutina' },
  { Icon: SparkleIcon, title: 'Descanso', text: 'Paz y tranquilidad total' },
  { Icon: HeartIcon, title: 'Parejas', text: 'Romance y conexión' },
  { Icon: FamilyIcon, title: 'Familias', text: 'Tiempo de calidad juntos' }
];

export default function Audience() {
  return (
    <section className="section audience" id="para-quien">
      <div className="container audience-head">
        <span className="eyebrow">PARA QUIÉN ES</span>
        <h2>Ideal para <span className="accent">ESPACIO RAKU</span></h2>
      </div>

      <div className="container audience-grid">
        {items.map(({ Icon, title, text }) => (
          <article key={title} className="aud-card">
            <span className="aud-ico"><Icon /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
