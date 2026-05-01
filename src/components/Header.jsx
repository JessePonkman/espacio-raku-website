import { useState } from 'react';
import { Logo } from './icons/Icons.jsx';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#espacios', label: 'Espacios' },
  { href: '#disponibilidad', label: 'Disponibilidad' },
  { href: '#proceso', label: 'Reservar' },
  { href: '#faq', label: 'FAQ' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a href="#top" className="logo" aria-label="Espacio Raku, inicio">
          <Logo className="logo-mark" style={{ color: '#8a9b6f' }} />
          <span className="logo-text">
            <span className="logo-pre">espacio</span>
            <span className="logo-name">Raku</span>
          </span>
        </a>

        <nav className={`nav ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href="#contacto" className="nav-cta" onClick={close}>Consultar</a>
        </nav>

        <button
          className="menu-btn"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
