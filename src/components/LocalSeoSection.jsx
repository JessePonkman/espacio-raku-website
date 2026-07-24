import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';
import { trackWhatsAppClick } from '../utils/analytics.js';

export default function LocalSeoSection() {
  return (
    <section className="section local-seo" id="alojamiento-chacras">
      <div className="container local-seo-grid">
        <div>
          <span className="eyebrow">ALOJAMIENTO EN CHACRAS DE CORIA</span>
          <h2>Alojamiento en Chacras de Coria para descansar y recorrer Mendoza</h2>
        </div>
        <div className="local-seo-copy">
          <p>
            Espacio Raku está pensado para quienes buscan alojamiento en Chacras de Coria
            con tranquilidad, privacidad y contacto directo. Estamos en Luján de Cuyo, una
            de las zonas más elegidas de Mendoza por su cercanía a bodegas, restaurantes,
            viñedos y paseos de montaña.
          </p>
          <p>
            A diferencia de un hotel tradicional, ofrecemos espacios independientes: dos
            lofts para dos personas y un departamento para hasta cuatro personas. También
            podemos recibir grupos coordinando varios alojamientos dentro del mismo complejo.
          </p>
          <p>
            La estadía se consulta directamente por WhatsApp para confirmar fechas,
            disponibilidad y la mejor opción según la cantidad de personas.
          </p>
          <a
            href={buildWhatsAppUrl(messages.availability)}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
            onClick={() => trackWhatsAppClick('whatsapp_click_local_seo')}
          >
            Consultar disponibilidad por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
