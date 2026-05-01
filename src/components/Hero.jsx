export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <span className="pill"><span className="dot" /> Un lugar diferente</span>
        <h1>
          Viví una experiencia<br />
          diferente en <span className="accent">ESPACIO RAKU</span>
        </h1>
        <p className="hero-sub">
          Un lugar pensado para descansar, disfrutar y conectar con lo esencial.
          Chacras de Coria, Mendoza.
        </p>

        <div className="hero-ctas">
          <a href="#disponibilidad" className="btn btn-primary">Consultar disponibilidad</a>
          <a href="#contacto" className="btn btn-ghost">Solicitar información</a>
        </div>

        <div className="hero-stats">
          <div><strong>4</strong><span>Espacios<br />únicos</span></div>
          <div className="sep" aria-hidden="true" />
          <div><strong>100%</strong><span>Naturaleza</span></div>
          <div className="sep" aria-hidden="true" />
          <div><strong>Raku</strong><span>Calma y diseño</span></div>
        </div>
      </div>
    </section>
  );
}
