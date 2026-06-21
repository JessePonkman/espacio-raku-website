import { useEffect, useRef, useState } from 'react';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';

const links = [
  { href: '#alojamientos', label: 'Alojamientos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#faq', label: 'Preguntas' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a href="#top" aria-label="Espacio Raku, volver al inicio">
          <img src="/assets/brand/logo-color.png" alt="Espacio Raku" className="logo-img" />
        </a>

        <nav id="primary-navigation" className={`nav ${open ? 'open' : ''}`} aria-label="Navegación principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a
            href={buildWhatsAppUrl(messages.availability)}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={close}
            aria-label="Consultar disponibilidad por WhatsApp"
          >
            Consultar
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          className="menu-btn"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-backdrop" onClick={close} aria-hidden="true" />
      )}
    </header>
  );
}
