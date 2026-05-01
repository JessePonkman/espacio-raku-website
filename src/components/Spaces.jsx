import { ArrowRight } from './icons/Icons.jsx';

const spaces = [
  {
    title: 'CABAÑA PARA 2/4 PERSONAS',
    desc: 'Ideal para grupos pequeños o familias, con espacio cómodo para disfrutar la estadía.',
    img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80&auto=format&fit=crop',
    big: true,
    tag: 'Popular',
    cta: true
  },
  {
    title: 'JARDÍN Y PILETA',
    desc: 'Un entorno al aire libre para relajarse y compartir.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80&auto=format&fit=crop'
  },
  {
    title: 'CABAÑAS PARA 2',
    desc: 'Ideales para descansar y desconectar en pareja.',
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80&auto=format&fit=crop'
  },
  {
    title: 'INTERIOR',
    desc: 'Espacios cálidos y diseñados para tu confort.',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80&auto=format&fit=crop'
  },
  {
    title: 'ESPACIO RAKU',
    desc: 'Un entorno pensado para disfrutar y vivir una experiencia diferente.',
    img: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&q=80&auto=format&fit=crop'
  }
];

export default function Spaces() {
  return (
    <section className="section spaces" id="espacios">
      <div className="container spaces-head">
        <span className="eyebrow">NUESTROS ESPACIOS</span>
        <h2>Espacios en <span className="accent">ESPACIO RAKU</span></h2>
        <p className="lead">Descubrí todo lo que el lugar tiene para ofrecer.</p>
      </div>

      <div className="container spaces-grid">
        {spaces.map((s) => (
          <article
            key={s.title}
            className={`space-card${s.big ? ' big' : ''}`}
            style={{ '--img': `url('${s.img}')` }}
          >
            {s.tag && <span className="tag">{s.tag}</span>}
            <div className="space-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {s.cta && (
                <a href="#disponibilidad" className="btn btn-pill">
                  Ver más <ArrowRight width="16" height="16" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="container spaces-cta">
        <a href="#disponibilidad" className="btn btn-primary wide">
          Ver disponibilidad <ArrowRight width="18" height="18" />
        </a>
      </div>
    </section>
  );
}
