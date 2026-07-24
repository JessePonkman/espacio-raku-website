import { site } from '../data/site.js';

export function buildWhatsAppUrl(message, phone = site.whatsappPhone) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  general: 'Hola Judit, estoy viendo la web de Espacio Raku y quisiera hacer una consulta.',
  availability: 'Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad.',
  accommodation: (name) =>
    `Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad para ${name}.`,
  group:
    'Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad para un grupo. Somos [cantidad] personas y viajaríamos del [fecha de llegada] al [fecha de salida].',
  experience: (name) =>
    `Hola, estoy interesado en hacer ${name} que vi en la pagina de Espacio Raku!`,
  location:
    'Hola Judit, estoy viendo la web de Espacio Raku y quisiera pedir indicaciones para llegar.',
};
