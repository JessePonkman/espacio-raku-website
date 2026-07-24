import { WhatsAppIcon } from './icons/Icons.jsx';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp.js';
import { trackWhatsAppClick } from '../utils/analytics.js';

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl(messages.general)}
      className="wa-float"
      aria-label="Consultar disponibilidad por WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('whatsapp_click_float')}
    >
      <WhatsAppIcon />
    </a>
  );
}
