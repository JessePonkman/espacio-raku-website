import { useState } from 'react';
import { PinIcon, MailIcon, MessageIcon } from './icons/Icons.jsx';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section contact" id="contacto">
      <div className="container contact-grid">
        <div className="contact-text">
          <span className="eyebrow">CONTACTO</span>
          <h2>Reservá tu <span className="accent">escape</span></h2>
          <p>
            Estamos en Chacras de Coria, Mendoza. Escribinos por WhatsApp o dejanos
            tus datos y te respondemos a la brevedad.
          </p>

          <ul className="contact-info">
            <li><PinIcon /> Chacras de Coria, Luján de Cuyo, Mendoza</li>
            <li><MailIcon /> consultas@espacioraku.com</li>
            <li><MessageIcon /> Consultar por WhatsApp</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <label>
            Nombre
            <input type="text" required placeholder="Tu nombre" />
          </label>
          <label>
            Email
            <input type="email" required placeholder="tucorreo@ejemplo.com" />
          </label>
          <label>
            Fechas tentativas
            <input type="text" placeholder="Ej: 12 al 15 de enero" />
          </label>
          <label>
            Mensaje
            <textarea rows="4" placeholder="Contanos sobre tu escapada" />
          </label>
          <button type="submit" className="btn btn-primary wide">Enviar consulta</button>
          {sent && <p className="ok">¡Gracias! Te respondemos a la brevedad.</p>}
        </form>
      </div>
    </section>
  );
}
