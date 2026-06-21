import { site } from '../data/site.js';

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${site.whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  general: 'Hola Judit, estoy viendo la web de Espacio Raku y quisiera hacer una consulta.',
  availability: 'Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad.',
  accommodation: (name) =>
    `Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad para ${name}.`,
  group:
    'Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad para un grupo. Somos [cantidad] personas y viajaríamos del [fecha de llegada] al [fecha de salida].',
  experience: (name) =>
    `Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar por la experiencia ${name}.`,
  location:
    'Hola Judit, estoy viendo la web de Espacio Raku y quisiera pedir indicaciones para llegar.',
};
