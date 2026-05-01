import { HeartIcon, SparkleIcon, LeafIcon } from './icons/Icons.jsx';

const values = [
  { Icon: HeartIcon, title: 'Calma', text: 'Un espacio diseñado para desconectar del estrés y conectar con lo esencial.' },
  { Icon: SparkleIcon, title: 'Diseño', text: 'Cada rincón pensado con estética minimalista y materiales naturales.' },
  { Icon: LeafIcon, title: 'Naturaleza', text: 'Rodeado de viñedos y montañas en pleno corazón de Chacras de Coria.' }
];

export default function Values() {
  return (
    <section className="section values">
      <div className="container values-head">
        <span className="eyebrow">NUESTRA ESENCIA</span>
        <h2>Un refugio pensado para <span className="accent">vos</span></h2>
        <p className="lead">
          Un refugio pensado para quienes buscan escapar de lo cotidiano y encontrar
          momentos de paz en un entorno único.
        </p>
      </div>

      <div className="container values-grid">
        {values.map(({ Icon, title, text }) => (
          <article key={title} className="value-card">
            <span className="value-ico"><Icon /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
