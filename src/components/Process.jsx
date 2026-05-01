const steps = [
  { n: 1, title: 'Consultás', text: 'Contactanos y preguntá por disponibilidad' },
  { n: 2, title: 'Elegís fecha', text: 'Seleccioná el mejor momento para vos' },
  { n: 3, title: 'Reservás', text: 'Confirmá tu reserva fácilmente' },
  { n: 4, title: 'Disfrutás', text: 'Viví la experiencia ESPACIO RAKU' }
];

export default function Process() {
  return (
    <section className="section process" id="proceso">
      <div className="proc-bg" aria-hidden="true" />
      <div className="proc-overlay" aria-hidden="true" />
      <div className="container proc-inner">
        <span className="eyebrow light">RESERVAR ES SIMPLE</span>
        <h2 className="light">Descubrí un lugar pensado<br />para disfrutar de verdad</h2>

        <ol className="steps">
          {steps.map((s) => (
            <li key={s.n}>
              <span className="num">{s.n}</span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="proc-ctas">
          <a href="#disponibilidad" className="btn btn-primary">Consultar disponibilidad</a>
          <a href="#espacios" className="btn btn-outline-light">Ver espacios</a>
        </div>

        <ul className="proc-checks">
          <li>Reservas seguras</li>
          <li>Confirmación rápida</li>
          <li>Atención personalizada</li>
        </ul>
      </div>
    </section>
  );
}
