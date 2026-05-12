# structure.md — Espacio Raku Landing Page Structure

> Documento para agentes implementadores de código.  
> Objetivo: definir la estructura funcional y de contenido de la landing page de Espacio Raku en React.js, separando claramente qué secciones deben implementarse, qué contenido debe soportar cada una y qué elementos no deben formar parte de esta primera versión.

---

## 1. Contexto del proyecto

Espacio Raku necesita una landing page principalmente informativa, estática y orientada a generar consultas directas por WhatsApp.

El objetivo comercial principal no es crear un sistema de reservas completo, sino presentar el lugar, mostrar los alojamientos, comunicar servicios, ofrecer experiencias como diferencial y facilitar que el potencial huésped consulte disponibilidad directamente.

La página debe ayudar a reducir la dependencia de Booking.com, evitando que el usuario sea redirigido a una plataforma externa donde puedan aparecer descuentos, promociones o condiciones que compitan contra la reserva directa.

---

## 2. Principios estructurales

### 2.1 Tipo de sitio

Implementar como:

```txt
Static informational landing page
```

No implementar como:

```txt
Reservation web app
Booking engine
Admin panel
CMS
Marketplace de experiencias
```

### 2.2 Canal principal de conversión

El canal principal y preferente debe ser WhatsApp.

La página debe conducir al usuario hacia una conversación directa con Judit, con mensajes prearmados según el contexto:

- consulta general;
- consulta por alojamiento específico;
- consulta por disponibilidad;
- consulta por experiencias.

### 2.3 Comportamiento esperado

La landing debe permitir que un visitante pueda:

1. Entender rápidamente qué es Espacio Raku.
2. Ver qué tipos de alojamientos hay.
3. Consultar características generales de cada espacio.
4. Revisar disponibilidad mediante calendario embebido o bloque equivalente.
5. Consultar por WhatsApp sin fricción.
6. Conocer servicios/comodidades generales.
7. Descubrir experiencias ofrecidas a huéspedes.
8. Ver ubicación aproximada o mapa.
9. Leer testimonios/reseñas.
10. Resolver dudas frecuentes.

---

## 3. Orden recomendado de secciones

La landing debe respetar este orden base:

```txt
1. Header / Navigation
2. Hero
3. Intro / Sobre Espacio Raku
4. Alojamientos
5. Disponibilidad
6. Servicios / Comodidades
7. Experiencias
8. Ubicación
9. Testimonios
10. Preguntas frecuentes
11. Footer
12. Floating WhatsApp Button
```

El botón flotante de WhatsApp no es una sección visual tradicional, pero debe estar presente durante toda la navegación.

---

## 4. Secciones obligatorias

## 4.1 Header / Navigation

### Objetivo

Permitir navegación rápida por anclas internas y mantener la marca visible.

### Debe incluir

- Logo de Espacio Raku.
- Navegación por anclas:
  - Alojamientos
  - Servicios
  - Experiencias
  - Ubicación
  - Preguntas frecuentes
- CTA visible a WhatsApp en desktop.
- Menú simplificado en mobile.

### IDs sugeridos

```txt
#alojamientos
#servicios
#experiencias
#ubicacion
#faq
```

### Componente sugerido

```txt
Header
```

### Criterios de aceptación

- El logo debe verse en desktop y mobile.
- La navegación debe usar scroll interno, no rutas separadas.
- El CTA de WhatsApp debe estar visible sin competir visualmente con el logo.
- En mobile no debe ocupar demasiado alto de pantalla.

---

## 4.2 Hero

### Objetivo

Comunicar en pocos segundos la propuesta del lugar y activar la consulta directa.

### Debe incluir

- Imagen real destacada de Espacio Raku.
- Título breve y emocional.
- Subtítulo descriptivo.
- CTA principal a WhatsApp.
- CTA secundario hacia Alojamientos o Disponibilidad.

### Copy sugerido

```txt
Un lugar para bajar el ritmo en Chacras de Coria
```

```txt
Alojamientos cálidos, piscina, tranquilidad y experiencias para disfrutar Mendoza de otra manera.
```

### CTAs sugeridos

```txt
Consultar disponibilidad por WhatsApp
Ver alojamientos
```

### Componente sugerido

```txt
HeroSection
```

### Criterios de aceptación

- El CTA principal debe verse antes del primer scroll.
- El hero no debe ocupar tanto alto en mobile que oculte completamente la acción principal.
- No usar frases exageradas como “el mejor alojamiento de Mendoza”.

---

## 4.3 Intro / Sobre Espacio Raku

### Objetivo

Explicar brevemente qué es Espacio Raku, su tono, su historia y su diferencial humano.

### Debe incluir

- Texto corto de presentación.
- Referencia al espíritu del lugar: descanso, calidez, tranquilidad, Chacras, espacio cuidado.
- Imagen secundaria o detalle visual del lugar.

### No debe incluir

- Texto institucional excesivamente largo.
- Lenguaje técnico.
- Historia demasiado abstracta o difícil de entender.

### Componente sugerido

```txt
AboutSection
```

### Criterios de aceptación

- La sección debe funcionar como transición entre el hero y la oferta concreta de alojamientos.
- El texto debe ser simple y orientado al huésped.

---

## 4.4 Alojamientos

### Objetivo

Mostrar los espacios disponibles y permitir consultar por cada uno de ellos.

### Debe incluir

Una card por alojamiento/unidad.

Cada card debe soportar:

- Nombre del alojamiento.
- Imagen principal.
- Breve descripción.
- Capacidad.
- Amenities principales.
- CTA específico a WhatsApp.

### Naming recomendado

Usar nombres flexibles y entendibles. Todavía no debe fijarse una nomenclatura rígida si Judit no la definió.

Ejemplos posibles:

```txt
Loft frente a la piscina
Loft deluxe
Departamento
Alojamiento 1
Alojamiento 2
Alojamiento 3
```

Para UI visible, preferir:

```txt
Alojamientos
Espacios
Lofts
Departamento
```

Evitar usar “cabañas” como etiqueta principal visible, porque Judit indicó que no le gusta del todo ese término para describir el lugar. Puede considerarse solo en SEO o metadata porque es una palabra frecuente de búsqueda.

### CTA por alojamiento

```txt
Consultar por este alojamiento
```

### Mensaje WhatsApp sugerido

```txt
Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad para [NOMBRE_DEL_ALOJAMIENTO].
```

### Data model sugerido

```ts
type Accommodation = {
  id: string;
  name: string;
  shortDescription: string;
  capacity?: string;
  amenities: string[];
  image: string;
  gallery?: string[];
  whatsappMessage: string;
};
```

### Componente sugerido

```txt
AccommodationsSection
AccommodationCard
```

### Criterios de aceptación

- Debe ser posible agregar, quitar o editar alojamientos desde una estructura de datos estática.
- No debe haber precios fijos.
- Cada alojamiento debe tener CTA propio.
- Las cards deben funcionar en una columna en mobile.

---

## 4.5 Disponibilidad

### Objetivo

Mostrar disponibilidad o guiar al usuario a consultar fechas sin enviarlo a Booking.com.

### Debe incluir

- Título claro.
- Texto breve explicando que puede consultar fechas.
- Calendario embebido si está disponible.
- CTA directo a WhatsApp debajo del calendario.

### Implementación preferida

```txt
Google Calendar embed sincronizado con calendarios externos
```

### Fallback permitido

Si el calendario real todavía no está disponible:

```txt
Placeholder visual de calendario + CTA a WhatsApp
```

### Copy sugerido

```txt
Consultá disponibilidad
```

```txt
Revisá las fechas disponibles y escribinos por WhatsApp para coordinar tu estadía.
```

### CTA sugerido

```txt
Consultar disponibilidad por WhatsApp
```

### Componente sugerido

```txt
AvailabilitySection
CalendarEmbed
CalendarPlaceholder
```

### Criterios de aceptación

- No debe haber redirección principal a Booking.
- No debe aparecer branding de Booking dentro de la UI propia.
- Si el calendario embebido no es usable en mobile, debe mostrarse un fallback simple con CTA.
- El calendario debe estar encapsulado para poder reemplazar el placeholder por el embed real sin modificar toda la sección.

---

## 4.6 Servicios / Comodidades

### Objetivo

Comunicar rápidamente qué incluye o puede incluir la estadía.

### Debe incluir

Servicios confirmados o pendientes de confirmar, cargados como contenido editable desde código.

Ejemplos mencionados o relevantes:

- Piscina.
- WiFi / internet.
- Limpieza.
- Desayuno o vouchers de cafetería si se confirma el acuerdo.
- Pet friendly.
- Ubicación tranquila.
- Aire acondicionado / calefacción si aplica.
- Estacionamiento si aplica.

### Data model sugerido

```ts
type Amenity = {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  status?: 'confirmed' | 'pending';
};
```

### Componente sugerido

```txt
AmenitiesSection
AmenityItem
```

### Criterios de aceptación

- No afirmar servicios que no estén confirmados.
- Si algo todavía depende de acuerdos externos, marcarlo internamente como `pending` y no publicarlo hasta confirmación.
- No convertir esta sección en un listado largo y pesado.

---

## 4.7 Experiencias

### Objetivo

Presentar las experiencias como diferencial comercial para incentivar la estadía.

La experiencia no debe pensarse como fuente principal de monetización, sino como un gancho para que el huésped elija alojarse en Espacio Raku.

### Debe incluir

Cards de experiencias estáticas.

Cada experiencia debe soportar:

- Nombre.
- Descripción breve.
- Persona/proveedor a cargo, si se confirma.
- Imagen o recurso visual.
- Estado de disponibilidad.
- CTA a WhatsApp.

### Ejemplos de experiencias mencionadas

```txt
Degustaciones
Yoga / stretching
Masajes
Experiencias de temporada
```

### Estados permitidos

```txt
Consultar disponibilidad
Disponible
Temporalmente no disponible
```

### CTA sugerido

```txt
Consultar experiencia
```

### Mensaje WhatsApp sugerido

```txt
Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar por la experiencia [NOMBRE_DE_LA_EXPERIENCIA].
```

### Data model sugerido

```ts
type Experience = {
  id: string;
  title: string;
  description: string;
  providerName?: string;
  image?: string;
  status: 'available' | 'ask' | 'unavailable';
  season?: string;
  whatsappMessage: string;
};
```

### Componente sugerido

```txt
ExperiencesSection
ExperienceCard
```

### Criterios de aceptación

- Implementar como contenido estático en primera fase.
- No implementar CMS para experiencias en esta etapa.
- No mostrar precios salvo confirmación explícita.
- No presentar como catálogo e-commerce.
- Debe ser fácil cambiar el estado de una experiencia desde datos estáticos.

---

## 4.8 Ubicación

### Objetivo

Mostrar dónde está Espacio Raku y reforzar el valor de la zona.

### Debe incluir

- Texto corto sobre ubicación.
- Mapa embebido o placeholder de mapa.
- CTA para pedir indicaciones por WhatsApp.
- Referencia a Chacras de Coria / Mendoza si corresponde.

### Componente sugerido

```txt
LocationSection
MapEmbed
```

### Criterios de aceptación

- El mapa debe ser responsive.
- No debe trabar la performance inicial de la landing.
- Si el embed pesado afecta mobile, cargarlo diferido o usar placeholder con link/CTA.

---

## 4.9 Testimonios

### Objetivo

Generar confianza mostrando reseñas reales.

### Debe incluir

- 3 a 6 testimonios destacados.
- Texto breve.
- Nombre, iniciales o plataforma de origen, si se confirma.
- Formato carrusel o grilla responsive.

### Data model sugerido

```ts
type Testimonial = {
  id: string;
  quote: string;
  author?: string;
  source?: 'whatsapp' | 'booking' | 'airbnb' | 'google' | 'instagram';
  rating?: number;
};
```

### Componente sugerido

```txt
TestimonialsSection
TestimonialCard
```

### Criterios de aceptación

- No inventar testimonios.
- No publicar datos personales sin confirmación.
- No hacer una sección demasiado extensa.
- Puede implementarse primero como grilla simple antes que carrusel.

---

## 4.10 Preguntas frecuentes

### Objetivo

Responder dudas comunes antes de que el usuario escriba por WhatsApp.

### Debe incluir

Acordeón estático con preguntas frecuentes.

Preguntas sugeridas:

```txt
¿Aceptan mascotas?
¿Cómo consulto disponibilidad?
¿Puedo reservar directamente por WhatsApp?
¿Cuáles son los horarios de check-in y check-out?
¿Hay piscina?
¿Ofrecen desayuno?
¿Dónde está ubicado Espacio Raku?
¿Las experiencias están siempre disponibles?
```

### Data model sugerido

```ts
type FAQItem = {
  id: string;
  question: string;
  answer: string;
};
```

### Componente sugerido

```txt
FAQSection
FAQAccordion
```

### Criterios de aceptación

- El acordeón debe ser accesible.
- Las respuestas deben ser cortas y claras.
- No debe reemplazar el contacto por WhatsApp; debe preparar mejor la consulta.

---

## 4.11 Footer

### Objetivo

Cerrar la página con información esencial y accesos finales.

### Debe incluir

- Logo o nombre Espacio Raku.
- CTA a WhatsApp.
- Links a Instagram y Facebook.
- Links de navegación internos.
- Texto legal mínimo si aplica.

### Redes sociales confirmadas

```txt
Instagram
Facebook
```

No incluir Twitter/X, Pinterest u otras redes salvo confirmación futura.

### Componente sugerido

```txt
Footer
```

### Criterios de aceptación

- El footer debe ser simple.
- No debe agregar canales de contacto que Judit no quiera gestionar.
- WhatsApp debe seguir siendo el canal principal.

---

## 4.12 Floating WhatsApp Button

### Objetivo

Mantener la acción principal siempre disponible.

### Debe incluir

- Botón flotante fijo.
- Link a WhatsApp.
- Mensaje prearmado general.
- `aria-label` descriptivo.

### Posición sugerida

```css
right: 16px;
bottom: 16px;
```

### Componente sugerido

```txt
FloatingWhatsAppButton
```

### Criterios de aceptación

- Debe acompañar al usuario durante el scroll.
- Debe verse especialmente bien en mobile.
- No debe tapar contenido crítico.
- No debe tener animaciones invasivas.

---

## 5. Secciones opcionales o diferibles

## 5.1 Resumen en inglés

### Estado

Opcional recomendado.

### Motivo

Judit mencionó que una síntesis en inglés puede elevar la percepción del sitio, aunque ella no maneje activamente el idioma.

### Implementación sugerida

Primera fase:

```txt
Pequeño bloque en inglés dentro de la landing
```

No implementar todavía:

```txt
Sistema completo de internacionalización
Selector de idioma complejo
Traducción completa de cada sección
```

### Componente sugerido

```txt
EnglishSummarySection
```

---

## 5.2 Galería completa

### Estado

Opcional.

### Recomendación

No crear una galería demasiado pesada en la primera entrega. Priorizar buenas imágenes dentro de Hero, Alojamientos, Sobre y Experiencias.

Si se implementa, debe ser liviana y responsive.

### Componente sugerido

```txt
GallerySection
```

---

## 5.3 Formulario de contacto

### Estado

No recomendado para primera fase.

### Motivo

El canal definido como principal es WhatsApp. El mail no es preferido porque Judit maneja varios correos y puede perder consultas.

Solo implementar formulario si se solicita explícitamente más adelante.

---

## 6. Arquitectura React sugerida

```txt
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
      FloatingWhatsAppButton.tsx
    sections/
      HeroSection.tsx
      AboutSection.tsx
      AccommodationsSection.tsx
      AvailabilitySection.tsx
      AmenitiesSection.tsx
      ExperiencesSection.tsx
      LocationSection.tsx
      TestimonialsSection.tsx
      FAQSection.tsx
      EnglishSummarySection.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      Card.tsx
      Badge.tsx
      Accordion.tsx
  data/
    accommodations.ts
    amenities.ts
    experiences.ts
    testimonials.ts
    faq.ts
    site.ts
  utils/
    whatsapp.ts
```

---

## 7. Data-first implementation

La landing debe poder modificarse principalmente editando archivos dentro de `src/data`, sin tocar la lógica visual de los componentes.

### 7.1 `site.ts`

```ts
export const site = {
  name: 'Espacio Raku',
  location: 'Chacras de Coria, Mendoza',
  whatsappPhone: '',
  instagramUrl: '',
  facebookUrl: '',
  googleMapsUrl: '',
  calendarEmbedUrl: '',
};
```

### 7.2 `whatsapp.ts`

```ts
export function buildWhatsAppUrl(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
```

### 7.3 Mensajes base

```ts
export const whatsappMessages = {
  general: 'Hola Judit, estoy viendo la web de Espacio Raku y quisiera hacer una consulta.',
  availability: 'Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad.',
  accommodation: (name: string) =>
    `Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad para ${name}.`,
  experience: (name: string) =>
    `Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar por la experiencia ${name}.`,
};
```

---

## 8. Qué NO debería tener la página

Esta sección es crítica para evitar sobrealcance y decisiones contrarias a lo charlado.

### 8.1 No debe tener sistema propio de reservas

No implementar:

```txt
selección de fechas + confirmación automática
motor de reservas
bloqueo automático de fechas
checkout
pago online
cuentas de usuario
confirmación por email automática
```

Motivo: la primera versión debe ser informativa y de consulta directa. Un sistema de reservas real agrega complejidad, riesgo de doble reserva, mantenimiento y necesidad de gestión operativa.

---

### 8.2 No debe redirigir a Booking como CTA principal

No implementar:

```txt
Reservar en Booking
Ver en Booking
Botones destacados hacia Booking
Widgets con branding de Booking
```

Motivo: uno de los objetivos centrales es evitar perder reservas directas por comisiones o promociones propias de Booking.

---

### 8.3 No debe mostrar precios fijos

No implementar:

```txt
precio por noche fijo
tabla tarifaria estática
promociones permanentes
comparativas de precio con Booking/Airbnb
```

Motivo: Judit indicó que los precios varían. El flujo correcto es consulta por WhatsApp.

---

### 8.4 No debe tener CMS o panel administrador en primera fase

No implementar:

```txt
login de administrador
panel para editar alojamientos
panel para editar experiencias
carga de imágenes desde backend
base de datos para contenidos
```

Motivo: las experiencias y contenidos pueden comenzar estáticos. Si con el tiempo cambian con mucha frecuencia, se cotiza una aplicación pequeña o CMS como trabajo futuro.

---

### 8.5 No debe dispersar canales de contacto

No priorizar:

```txt
email
formulario largo
DM de Instagram
Facebook Messenger
múltiples teléfonos
```

Motivo: WhatsApp fue definido como canal principal para no perder consultas.

---

### 8.6 No debe usar “cabañas” como categoría principal visible

No usar como navegación principal:

```txt
Cabañas
```

Preferir:

```txt
Alojamientos
Espacios
Lofts
```

Nota: “cabañas” puede considerarse para SEO porque es una búsqueda común, pero no debe dominar la interfaz visible.

---

### 8.7 No debe inventar contenido no confirmado

No inventar:

```txt
servicios no confirmados
nombres definitivos de alojamientos
precios
reseñas
disponibilidad
experiencias activas
proveedores de experiencias
horarios de check-in/check-out
```

Todo contenido dudoso debe quedar como placeholder o pendiente de confirmación.

---

### 8.8 No debe parecer una plataforma hotelera genérica

Evitar:

```txt
plantilla corporativa fría
exceso de botones comerciales
copy agresivo
lenguaje de “oferta imperdible”
look de marketplace
animaciones invasivas
```

La página debe sentirse cálida, tranquila, personal y coherente con Espacio Raku.

---

### 8.9 No debe implementar internacionalización completa en primera fase

No implementar todavía:

```txt
rutas /en y /es
selector complejo de idioma
traducción completa de todos los contenidos
sistema i18n con archivos por locale
```

Preferir una síntesis simple en inglés si se decide incluirla.

---

## 9. Checklist de aceptación funcional

Antes de considerar lista la estructura de la landing, verificar:

- [ ] La página tiene foco claro en consulta directa por WhatsApp.
- [ ] El sitio se entiende como landing informativa, no como aplicación.
- [ ] Hay sección de alojamientos con cards editables desde datos estáticos.
- [ ] Hay sección de disponibilidad con calendario o placeholder reemplazable.
- [ ] No hay CTA principal hacia Booking.
- [ ] No hay precios fijos.
- [ ] Hay sección de servicios/comodidades.
- [ ] Hay sección de experiencias estáticas.
- [ ] Hay sección de ubicación.
- [ ] Hay sección de testimonios.
- [ ] Hay sección de preguntas frecuentes.
- [ ] El botón flotante de WhatsApp está siempre disponible.
- [ ] Instagram y Facebook aparecen en footer si se tienen los links.
- [ ] No se inventó información no confirmada.
- [ ] La estructura permite agregar contenido futuro sin rediseñar toda la página.

---

## 10. Resumen para agente implementador

Construir una landing page estática en React.js, mobile-first y data-driven. El objetivo es mostrar Espacio Raku, sus alojamientos, disponibilidad, servicios, experiencias, ubicación y testimonios, conduciendo siempre a consulta directa por WhatsApp.

La implementación debe evitar sobrealcance: no reservas online, no pagos, no CMS, no panel administrador, no precios fijos y no redirección principal a Booking. La primera versión debe ser simple, clara, mantenible y preparada para que futuras funcionalidades puedan agregarse sin romper la estructura base.
