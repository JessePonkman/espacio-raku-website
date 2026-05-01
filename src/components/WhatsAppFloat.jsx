import { WhatsAppIcon } from './icons/Icons.jsx';

export default function WhatsAppFloat({ phone = '5492610000000', message = 'Hola! Quiero consultar disponibilidad en Espacio Raku.' }) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a href={href} className="wa-float" aria-label="Consultar por WhatsApp" target="_blank" rel="noopener">
      <WhatsAppIcon />
    </a>
  );
}
