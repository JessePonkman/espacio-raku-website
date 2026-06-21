import { InstagramIcon, FacebookIcon, WhatsAppIcon, PinIcon } from './icons/Icons.jsx';
import { site } from '../data/site.js';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';

const navLinks = [
  { href: '#alojamientos', label: 'Alojamientos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#faq', label: 'Preguntas frecuentes' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="foot-brand">
          <a href="#top" aria-label="Espacio Raku, volver al inicio">
            <img
              src="/assets/brand/logo-blanco.png"
              alt="Espacio Raku"
              className="logo-img-footer"
            />
          </a>
          <p>
            Cabañas y alojamientos temporarios en Chacras de Coria, Luján de Cuyo,
            Mendoza. Piscina, tranquilidad y reserva directa.
          </p>
          <div className="socials">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguinos en Instagram (se abre en una nueva pestaña)"
            >
              <InstagramIcon />
            </a>
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguinos en Facebook (se abre en una nueva pestaña)"
            >
              <FacebookIcon />
            </a>
            <a
              href={buildWhatsAppUrl(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribinos por WhatsApp (se abre en una nueva pestaña)"
            >
              <WhatsAppIcon width="18" height="18" />
            </a>
          </div>
        </div>

        <div className="foot-col">
          <h2>Navegación</h2>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="foot-col">
          <h2>Contacto</h2>
          <a
            href={buildWhatsAppUrl(messages.availability)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar disponibilidad por WhatsApp (se abre en una nueva pestaña)"
          >
            <WhatsAppIcon /> Consultar disponibilidad
          </a>
          <a href="#ubicacion">
            <PinIcon /> Chacras de Coria, Mendoza
          </a>
        </div>
      </div>

      <div className="foot-bottom">
        <div className="container">
          © {new Date().getFullYear()} Espacio Raku · Chacras de Coria, Mendoza
        </div>
      </div>
    </footer>
  );
}
