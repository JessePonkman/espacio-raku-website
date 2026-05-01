import { Logo, InstagramIcon, FacebookIcon, WhatsAppIcon, MailIcon, MessageIcon, PinIcon } from './icons/Icons.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="foot-brand">
          <a href="#top" className="logo logo-light">
            <Logo className="logo-mark" style={{ color: '#a8b88f' }} />
            <span className="logo-text">
              <span className="logo-pre">espacio</span>
              <span className="logo-name">Raku</span>
            </span>
          </a>
          <p>
            Un lugar pensado para descansar, disfrutar y conectar con lo esencial.
            Calma, diseño y naturaleza en un solo espacio.
          </p>
          <div className="socials">
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="WhatsApp"><WhatsAppIcon width="18" height="18" /></a>
          </div>
        </div>

        <div className="foot-col">
          <h4>Navegación</h4>
          <a href="#inicio">Inicio</a>
          <a href="#espacios">Espacios</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#disponibilidad">Disponibilidad</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="foot-col">
          <h4>Contacto</h4>
          <a href="mailto:consultas@espacioraku.com"><MailIcon /> consultas@espacioraku.com</a>
          <a href="#"><MessageIcon /> Consultar por WhatsApp</a>
          <a href="#"><PinIcon /> Chacras de Coria, Mendoza</a>
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
