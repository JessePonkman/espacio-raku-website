# Backlog de optimización SEO — Espacio Raku

**Sitio objetivo:** https://espacio-raku.com  
**Keyword principal:** `alojamiento en chacras de coria`  
**Objetivo:** mejorar posicionamiento orgánico y captar consultas directas por WhatsApp, compitiendo contra OTAs y directorios grandes desde una estrategia local, long-tail y de confianza.

---

## 0. Diagnóstico general

La página ya tiene una base fuerte para SEO local:

- El sitio comunica claramente que es un alojamiento en Chacras de Coria, Mendoza.
- El H1 actual ya contiene “cabañas” y “alojamiento en Chacras de Coria”.
- El contenido incluye alojamiento temporario, lofts, departamento, piscina, jardín, pet friendly, ubicación, experiencias y WhatsApp.
- El HTML incluye metadatos básicos, `robots index, follow` y JSON-LD de tipo `LodgingBusiness` + `FAQPage`.
- Las imágenes principales parecen estar optimizadas en formatos modernos como AVIF/WebP.

El problema principal no es que la página esté mal, sino que todavía está muy concentrada en una sola landing. Para competir por “alojamiento en Chacras de Coria” contra Booking, Airbnb, TripAdvisor, Expedia y directorios turísticos, hay que reforzar cuatro frentes:

1. **Indexación y SEO técnico.**
2. **Relevancia semántica para la keyword principal.**
3. **Contenido local profundo y long-tail.**
4. **Autoridad local: Google Business Profile, reseñas, directorios y backlinks.**

---

# P0 — Acciones críticas

## 1. Indexación y rastreo

### 1.1 Verificar que Google pueda indexar el sitio

**Acción:** configurar y revisar Google Search Console para `https://espacio-raku.com`.

**Tareas:**

- Agregar propiedad de dominio o prefijo URL en Google Search Console.
- Verificar propiedad por DNS o archivo HTML.
- Enviar sitemap.
- Usar “Inspección de URL” para la home.
- Solicitar indexación manual de la home.
- Revisar que no existan errores de rastreo, `noindex`, bloqueos por robots o problemas de canonical.

**Criterio de aceptación:**

- La URL principal aparece como “URL disponible para Google”.
- La home queda enviada a indexación.
- Search Console no muestra bloqueos por robots ni `noindex`.

---

### 1.2 Crear o validar `robots.txt`

**URL esperada:**

```txt
https://espacio-raku.com/robots.txt
```

**Contenido recomendado:**

```txt
User-agent: *
Allow: /

Sitemap: https://espacio-raku.com/sitemap.xml
```

**Criterio de aceptación:**

- `robots.txt` devuelve HTTP 200.
- No bloquea `/`, `/assets/`, imágenes ni futuras páginas SEO.
- Incluye referencia al sitemap.

---

### 1.3 Crear o validar `sitemap.xml`

**URL esperada:**

```txt
https://espacio-raku.com/sitemap.xml
```

**Versión inicial si solo existe la home:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://espacio-raku.com/</loc>
    <lastmod>2026-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Cuando se agreguen páginas nuevas**, incluirlas todas en el sitemap.

**Criterio de aceptación:**

- `sitemap.xml` devuelve HTTP 200.
- Está cargado en Search Console.
- Incluye home, páginas de alojamientos, páginas SEO y posts/guías futuras.

---

### 1.4 Validar redirects y dominio canónico

**Acción:** definir una sola versión oficial del sitio.

**Versión recomendada:**

```txt
https://espacio-raku.com/
```

**Tareas:**

- `http://espacio-raku.com` debe redirigir a `https://espacio-raku.com/`.
- `https://www.espacio-raku.com` debe redirigir a `https://espacio-raku.com/` o viceversa, pero elegir una sola versión.
- No debe haber cadenas de redirects innecesarias.

**Criterio de aceptación:**

- Todas las variantes resuelven en una única URL final.
- La URL final usa HTTPS.
- El canonical de la home apunta a esa misma URL.

---

## 2. Metadatos principales

## 2.1 Cambiar el title de la home

**Estado actual observado:**

```html
<title>Cabañas en Chacras de Coria, Mendoza | Espacio Raku</title>
```

Es bueno, pero para la keyword objetivo conviene poner “alojamiento” primero.

**Nuevo title recomendado:**

```html
<title>Alojamiento en Chacras de Coria | Espacio Raku Mendoza</title>
```

**Alternativa más comercial:**

```html
<title>Alojamiento en Chacras de Coria con piscina | Espacio Raku</title>
```

**Criterio de aceptación:**

- El title contiene la keyword exacta `Alojamiento en Chacras de Coria`.
- Tiene menos de 60–65 caracteres aproximados.
- Incluye la marca `Espacio Raku`.

---

## 2.2 Ajustar meta description

**Estado actual observado:**

```html
<meta name="description" content="Cabañas, lofts y departamento para alojamiento temporario en Chacras de Coria, Luján de Cuyo, Mendoza. Piscina y reserva directa por WhatsApp.">
```

Está bien, pero puede reforzar mejor la búsqueda exacta y la conversión.

**Meta description recomendada:**

```html
<meta name="description" content="Alojamiento en Chacras de Coria, Mendoza: lofts y departamento con piscina, jardín, WiFi, estacionamiento y consulta directa por WhatsApp.">
```

**Criterio de aceptación:**

- Contiene `Alojamiento en Chacras de Coria`.
- Menciona beneficios concretos: piscina, jardín, WiFi, estacionamiento, WhatsApp.
- No supera aproximadamente 155–160 caracteres.

---

## 2.3 Agregar canonical

**Acción:** agregar canonical explícito en la home.

```html
<link rel="canonical" href="https://espacio-raku.com/">
```

**Criterio de aceptación:**

- La home tiene canonical.
- El canonical coincide con la URL final después de redirects.

---

## 2.4 Agregar Open Graph completo

**Estado actual observado:** hay `og:title` y `og:description`, pero se debe asegurar imagen y URL.

**Agregar o validar:**

```html
<meta property="og:locale" content="es_AR">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Espacio Raku">
<meta property="og:title" content="Alojamiento en Chacras de Coria | Espacio Raku">
<meta property="og:description" content="Lofts y departamento con piscina y jardín en Chacras de Coria, Mendoza. Consulta disponibilidad por WhatsApp.">
<meta property="og:url" content="https://espacio-raku.com/">
<meta property="og:image" content="https://espacio-raku.com/assets/og/espacio-raku-chacras-de-coria.jpg">
<meta property="og:image:alt" content="Piscina y jardín de Espacio Raku en Chacras de Coria, Mendoza">
```

**Crear imagen OG:**

- Tamaño: `1200x630`.
- Foto real del jardín/piscina.
- Logo visible.
- Texto corto: “Alojamiento en Chacras de Coria”.

**Criterio de aceptación:**

- Compartir el sitio por WhatsApp/Instagram/Facebook muestra imagen, título y descripción correctos.

---

## 2.5 Agregar Twitter Card

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Alojamiento en Chacras de Coria | Espacio Raku">
<meta name="twitter:description" content="Lofts y departamento con piscina, jardín y consulta directa por WhatsApp en Chacras de Coria.">
<meta name="twitter:image" content="https://espacio-raku.com/assets/og/espacio-raku-chacras-de-coria.jpg">
```

---

## 3. H1, encabezados y estructura semántica

## 3.1 Ajustar H1

**Estado actual observado:**

```html
<h1>Cabañas y alojamiento en Chacras de Coria, Mendoza</h1>
```

Es bueno, pero para la keyword principal conviene usar la frase exacta primero.

**Nuevo H1 recomendado:**

```html
<h1>Alojamiento en Chacras de Coria, Mendoza</h1>
```

**Subtítulo recomendado debajo del H1:**

```txt
Lofts y departamento cálidos con piscina, jardín, estacionamiento y atención directa por WhatsApp, en una zona tranquila de Luján de Cuyo.
```

**Criterio de aceptación:**

- Hay un solo H1 en la página.
- El H1 contiene la keyword exacta.
- Las variantes “cabañas”, “hospedaje”, “alojamiento temporario”, “Luján de Cuyo” y “Mendoza” aparecen naturalmente en H2, H3 y textos.

---

## 3.2 Reordenar H2 para SEO local

**H2 recomendados:**

```txt
Un refugio cálido en Chacras de Coria
Lofts y departamento para alojarte en Mendoza
Alojamiento para parejas y grupos de hasta 8–9 personas
Disponibilidad y reserva directa por WhatsApp
Servicios del alojamiento
Experiencias para disfrutar Mendoza
Dónde estamos en Chacras de Coria, Luján de Cuyo
Preguntas frecuentes sobre alojamiento en Chacras de Coria
```

**Criterio de aceptación:**

- Cada sección importante tiene H2.
- Los H2 no son genéricos; refuerzan ubicación, alojamiento y propuesta comercial.

---

## 4. Contenido SEO en la home

## 4.1 Agregar bloque SEO local bajo la introducción

**Objetivo:** aumentar relevancia para la keyword sin romper el tono cálido de la marca.

**Agregar sección después de “Sobre el lugar” o antes de “Alojamientos”:**

```md
## Alojamiento en Chacras de Coria para descansar y recorrer Mendoza

Espacio Raku está pensado para quienes buscan alojamiento en Chacras de Coria con tranquilidad, privacidad y contacto directo. Estamos en Luján de Cuyo, una de las zonas más elegidas de Mendoza por su cercanía a bodegas, restaurantes, viñedos y paseos de montaña.

A diferencia de un hotel tradicional, ofrecemos espacios independientes: dos lofts para dos personas y un departamento para hasta cuatro personas. También podemos recibir grupos coordinando varios alojamientos dentro del mismo complejo.

La estadía se consulta directamente por WhatsApp para confirmar fechas, disponibilidad y la mejor opción según la cantidad de personas.
```

**Criterio de aceptación:**

- Incluye “alojamiento en Chacras de Coria” al menos una vez exacta.
- Incluye “Luján de Cuyo”, “Mendoza”, “bodegas”, “restaurantes”, “lofts”, “departamento”.
- No suena artificial ni sobreoptimizado.

---

## 4.2 Agregar bloque “Por qué elegir Chacras de Coria”

**Agregar sección cerca de ubicación:**

```md
## Por qué alojarte en Chacras de Coria

Chacras de Coria es una zona residencial tranquila de Luján de Cuyo, ideal para quienes quieren descansar sin alejarse de los principales atractivos de Mendoza. Desde Espacio Raku es posible moverse con facilidad hacia bodegas, restaurantes, supermercados, centros comerciales y salidas hacia la montaña.
```

**Bullet points:**

```txt
- Zona tranquila y residencial.
- Cerca de bodegas y experiencias de vino.
- Buen acceso hacia Ciudad de Mendoza, Luján de Cuyo y montaña.
- Restaurantes, cafés, supermercados y comercios cercanos.
- Ideal para parejas, escapadas y grupos pequeños.
```

**Criterio de aceptación:**

- Refuerza la intención local.
- Responde preguntas reales de huéspedes: ubicación, cercanía a comercios, accesibilidad.

---

## 4.3 Agregar variantes semánticas de la keyword

Distribuir naturalmente en el contenido:

```txt
alojamiento en Chacras de Coria
alojamientos en Chacras de Coria
hospedaje en Chacras de Coria
cabañas en Chacras de Coria
alquiler temporario en Chacras de Coria
alojamiento temporario en Luján de Cuyo
alojamiento en Mendoza
lofts en Chacras de Coria
alojamiento con piscina en Chacras de Coria
alojamiento pet friendly en Chacras de Coria
alojamiento para grupos en Chacras de Coria
```

**Regla:** no repetir la keyword principal de forma forzada. Usar 1–2 veces exacta en la home y luego variaciones.

---

## 5. Datos estructurados / JSON-LD

## 5.1 Mejorar `LodgingBusiness`

**Estado actual observado:** ya existe JSON-LD con `@type: LodgingBusiness`, `name`, `description`, `telephone`, `address`, `geo`, `hasMap`, `sameAs`, `numberOfRooms`, `amenityFeature`, `containsPlace` y `FAQPage`.

**Acción:** mantenerlo y ampliarlo.

**JSON-LD recomendado:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": "https://espacio-raku.com/#lodgingbusiness",
      "name": "Espacio Raku",
      "url": "https://espacio-raku.com/",
      "description": "Alojamiento en Chacras de Coria, Luján de Cuyo, Mendoza. Lofts y departamento con piscina, jardín, WiFi, estacionamiento y atención directa por WhatsApp.",
      "telephone": "+5492615780242",
      "priceRange": "Consultar",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chacras de Coria",
        "addressRegion": "Mendoza",
        "addressCountry": "AR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -32.9802987,
        "longitude": -68.8649629
      },
      "hasMap": "https://maps.app.goo.gl/miKiE43C238r3zgD7",
      "sameAs": [
        "https://www.instagram.com/espacio_raku/",
        "https://www.facebook.com/juditraku/"
      ],
      "numberOfRooms": 3,
      "petsAllowed": true,
      "checkinTime": "14:00",
      "checkoutTime": "11:00",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Piscina de temporada", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Jardín", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Estacionamiento", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Pet friendly", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Asador", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Fogonero", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Aire acondicionado y calefacción", "value": true }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://espacio-raku.com/#website",
      "url": "https://espacio-raku.com/",
      "name": "Espacio Raku",
      "inLanguage": "es-AR"
    }
  ]
}
</script>
```

**Criterio de aceptación:**

- Validar en Rich Results Test.
- Validar en Schema Markup Validator.
- No incluir datos falsos ni reviews inventadas.

---

## 5.2 Agregar `BreadcrumbList`

Para la home es simple, pero en futuras páginas es importante.

**Ejemplo para una página de alojamiento:**

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://espacio-raku.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Alojamiento en Chacras de Coria",
      "item": "https://espacio-raku.com/alojamiento-en-chacras-de-coria/"
    }
  ]
}
```

---

# P1 — Acciones de alto impacto

## 6. Crear páginas específicas para capturar keywords long-tail

La home sola difícilmente alcance para competir contra OTAs. Crear páginas estáticas adicionales.

## 6.1 Página: `/alojamiento-en-chacras-de-coria/`

**Keyword principal:** `alojamiento en chacras de coria`

**Title:**

```txt
Alojamiento en Chacras de Coria | Espacio Raku Mendoza
```

**H1:**

```txt
Alojamiento en Chacras de Coria
```

**Contenido mínimo:** 900–1400 palabras.

**Secciones:**

```txt
- Introducción: por qué alojarse en Chacras de Coria.
- Opciones de Espacio Raku: lofts y departamento.
- Servicios: piscina, jardín, WiFi, estacionamiento, pet friendly, asador, fogonero.
- Ubicación: Luján de Cuyo, Rodríguez Viñedo, comercios cercanos, bodegas.
- Ideal para: parejas, escapadas, grupos de hasta 8–9 personas.
- Cómo consultar disponibilidad por WhatsApp.
- FAQ específica.
```

**CTA:**

```txt
Consultar disponibilidad por WhatsApp
```

**Criterio de aceptación:**

- Página indexable.
- Enlazada desde la home.
- Incluida en sitemap.
- Tiene canonical propio.
- No canibaliza la home: la home puede quedar más institucional y esta página atacar la keyword exacta.

---

## 6.2 Página: `/cabanas-en-chacras-de-coria/`

**Motivo:** aunque el proyecto prefiera “alojamientos”, la gente busca “cabañas”.

**Title:**

```txt
Cabañas en Chacras de Coria | Espacio Raku Mendoza
```

**H1:**

```txt
Cabañas y alojamientos en Chacras de Coria
```

**Nota de copy:** usar “cabañas” para SEO, pero aclarar que Espacio Raku ofrece lofts y departamento dentro de un complejo cálido.

---

## 6.3 Página: `/alojamiento-con-piscina-chacras-de-coria/`

**Keyword:** `alojamiento con piscina en chacras de coria`

**Importante:** aclarar siempre que es piscina de temporada, no climatizada.

---

## 6.4 Página: `/alojamiento-pet-friendly-chacras-de-coria/`

**Keyword:** `alojamiento pet friendly en chacras de coria`

**Contenido:** reglas, consulta previa, entorno, cuidado del espacio, WhatsApp.

---

## 6.5 Página: `/alojamiento-para-grupos-chacras-de-coria/`

**Keyword:** `alojamiento para grupos en chacras de coria`

**Contenido:** capacidad total 8–9 personas coordinando unidades, independencia de espacios, experiencias grupales, asador/fogonero.

---

## 7. Crear páginas de detalle para cada unidad

## 7.1 Página: `/loft-frente-a-la-piscina/`

**Debe incluir:**

- Galería completa.
- Capacidad: 2 personas.
- Kitchenette.
- Baño privado.
- Aire/calefacción.
- WiFi.
- Acceso a piscina de temporada y jardín.
- CTA específico por WhatsApp.

**Title sugerido:**

```txt
Loft frente a la piscina en Chacras de Coria | Espacio Raku
```

---

## 7.2 Página: `/loft-deluxe-chacras-de-coria/`

**Title sugerido:**

```txt
Loft deluxe en Chacras de Coria | Espacio Raku
```

---

## 7.3 Página: `/departamento-chacras-de-coria/`

**Debe corregir/reforzar:**

- Capacidad: hasta 4 personas.
- Living propio.
- Cocina equipada.
- Baño privado.
- Aire/calefacción.
- WiFi.

**Title sugerido:**

```txt
Departamento en Chacras de Coria para 4 personas | Espacio Raku
```

---

## 7.4 Reglas comunes para páginas de unidades

Cada página debe tener:

- URL amigable.
- Title único.
- Meta description única.
- H1 único.
- Galería con imágenes optimizadas.
- Alt text descriptivo.
- CTA WhatsApp con mensaje prellenado según unidad.
- FAQ corta específica.
- Schema `Accommodation` o `LodgingBusiness` asociado.
- Link de vuelta a la página de alojamientos.

**Ejemplo de WhatsApp:**

```txt
Hola, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad para el Loft frente a la piscina.
```

---

## 8. Imágenes y performance visual

## 8.1 Nombres de archivo SEO

Renombrar archivos genéricos o demasiado técnicos.

**Ejemplos recomendados:**

```txt
piscina-jardin-espacio-raku-chacras-de-coria.webp
loft-frente-piscina-chacras-de-coria.webp
loft-deluxe-espacio-raku-mendoza.webp
departamento-cocina-equipada-chacras-de-coria.webp
asador-fogonero-espacio-raku.webp
```

---

## 8.2 Alt text

**Ejemplos:**

```html
<img alt="Piscina y jardín de Espacio Raku en Chacras de Coria, Mendoza">
<img alt="Loft frente a la piscina para dos personas en Chacras de Coria">
<img alt="Departamento con living propio y cocina equipada en Espacio Raku">
<img alt="Fogonero exterior en el jardín de Espacio Raku">
```

**Regla:** describir la imagen y, cuando sea natural, incluir ubicación o nombre del alojamiento.

---

## 8.3 Optimización técnica de imágenes

**Tareas:**

- Servir AVIF/WebP.
- Mantener JPG/PNG como fallback si corresponde.
- Definir `width` y `height` en imágenes para evitar CLS.
- Usar `loading="lazy"` en imágenes bajo el fold.
- Usar `fetchpriority="high"` solo para la imagen hero.
- No precargar más de una imagen pesada.

**Criterio de aceptación:**

- Lighthouse Performance > 90 en mobile si es posible.
- LCP bajo 2.5s.
- CLS menor a 0.1.

---

## 9. Disponibilidad y WhatsApp

## 9.1 Mantener reserva directa como flujo principal

**Regla:** no mostrar enlaces visibles a Booking ni componentes con branding de Booking.

**Disponibilidad recomendada:**

- Google Calendar embebido.
- Texto claro: “El calendario es informativo. Consultanos por WhatsApp para confirmar tu reserva.”
- CTA directo debajo.

**CTA:**

```txt
Consultar disponibilidad por WhatsApp
```

---

## 9.2 Medir clicks de WhatsApp

Agregar tracking con GA4 o similar.

**Eventos sugeridos:**

```txt
whatsapp_click_header
whatsapp_click_hero
whatsapp_click_availability
whatsapp_click_loft_piscina
whatsapp_click_loft_deluxe
whatsapp_click_departamento
whatsapp_click_experiences
```

**Criterio de aceptación:**

- Cada CTA importante dispara evento.
- Se puede medir qué sección genera más consultas.

---

## 10. Ubicación

## 10.1 Reforzar texto local

Agregar menciones naturales a:

```txt
Chacras de Coria
Luján de Cuyo
Mendoza
Rodríguez Viñedo
bodegas
restaurantes
supermercados
centros comerciales
acceso a montaña
Ciudad de Mendoza
Aeropuerto El Plumerillo
```

**Texto sugerido:**

```md
Espacio Raku está en Chacras de Coria, dentro de Luján de Cuyo, una zona residencial tranquila de Mendoza. Estamos cerca de Rodríguez Viñedo, con acceso a restaurantes, supermercados y centros comerciales, y a pocos minutos de bodegas y recorridos por la Ruta del Vino.
```

---

## 10.2 Agregar mapa embebido

**Tareas:**

- Insertar Google Map o bloque de mapa liviano.
- Usar `loading="lazy"` si es iframe.
- Agregar título accesible.

**Ejemplo:**

```html
<iframe
  title="Ubicación de Espacio Raku en Chacras de Coria, Mendoza"
  loading="lazy"
  src="[GOOGLE_MAPS_EMBED_URL]">
</iframe>
```

---

# P2 — Contenido y autoridad

## 11. Blog / guías locales

Crear contenido informativo para captar búsquedas previas a la reserva.

## 11.1 Artículo: “Qué hacer en Chacras de Coria”

**URL:**

```txt
/que-hacer-en-chacras-de-coria/
```

**Keyword:** `qué hacer en Chacras de Coria`

**Enlaces internos:**

- Link a `/alojamiento-en-chacras-de-coria/`.
- Link a home.
- Link a experiencias.

---

## 11.2 Artículo: “Bodegas cerca de Chacras de Coria”

**URL:**

```txt
/bodegas-cerca-de-chacras-de-coria/
```

**Keyword:** `bodegas cerca de Chacras de Coria`

---

## 11.3 Artículo: “Dónde alojarse en Mendoza: Chacras de Coria vs Ciudad”

**URL:**

```txt
/donde-alojarse-en-mendoza-chacras-de-coria/
```

**Keyword:** `dónde alojarse en Mendoza`

---

## 11.4 Artículo: “Escapada a Chacras de Coria en pareja”

**URL:**

```txt
/escapada-en-pareja-chacras-de-coria/
```

---

## 11.5 Artículo: “Alojamiento para grupos en Mendoza”

**URL:**

```txt
/alojamiento-para-grupos-en-mendoza/
```

**Objetivo:** captar grupos de amigas, viajes de vino, escapadas de fin de semana.

---

## 12. Testimonios y confianza

## 12.1 Agregar testimonios visibles

**Tareas:**

- Agregar 3–6 testimonios representativos.
- Indicar nombre o iniciales.
- Indicar plataforma solo si corresponde: Google, WhatsApp, Airbnb, Booking.
- No inventar reviews.
- No usar review schema salvo que las reseñas sean reales, públicas y verificables.

**Formato recomendado:**

```txt
“Un lugar tranquilo, cuidado y con una atención muy cálida. Ideal para descansar y moverse por Chacras.”
— M., Argentina
```

---

## 12.2 Agregar bloque de confianza

**Texto sugerido:**

```txt
Reserva directa y atención personalizada por WhatsApp. Te acompañamos para elegir el alojamiento que mejor se ajuste a tus fechas y cantidad de personas.
```

**Evitar:** “mejor precio garantizado”, “reserva inmediata”, claims agresivos.

---

## 13. SEO local fuera de la página

Estas tareas no son estrictamente de código, pero impactan directamente en el ranking.

## 13.1 Google Business Profile

**Tareas:**

- Verificar ficha de Google Business Profile.
- Nombre consistente: `Espacio Raku`.
- Categoría principal: alojamiento / cabañas / alojamiento turístico, según disponibilidad real en Google.
- Agregar descripción con keywords naturales.
- Agregar servicios: WiFi, piscina de temporada, pet friendly, estacionamiento, asador, fogonero.
- Subir fotos profesionales y reales.
- Agregar link a `https://espacio-raku.com/`.
- Agregar WhatsApp/teléfono.
- Publicar novedades 1–2 veces por mes.
- Pedir reseñas a huéspedes.

---

## 13.2 Directorios y citaciones locales

Registrar o actualizar Espacio Raku en:

```txt
Google Business Profile
Google Maps
Tripadvisor
Welcome Argentina
Alquiler Argentina
Turismo Mendoza / directorios turísticos locales
Páginas Amarillas
Guía Mendoza / directorios locales confiables
Facebook
Instagram
```

**Regla NAP:** el nombre, teléfono y ubicación deben ser consistentes en todos lados.

---

## 13.3 Backlinks locales

Conseguir enlaces desde:

```txt
Bodegas cercanas
Restaurantes de Chacras de Coria
Agencias de turismo
Blogs de viaje de Mendoza
Medios locales
Proveedores de experiencias
Cafetería o partners, por ejemplo vouchers de desayuno si se confirma
```

**Anchor text recomendado:**

```txt
Espacio Raku
alojamiento en Chacras de Coria
alojamiento en Mendoza
lofts en Chacras de Coria
```

**Evitar:** comprar enlaces, directorios spam, anchors repetidos exactos en exceso.

---

# P3 — Mejoras adicionales

## 14. Versión en inglés

Crear versión resumida en inglés para extranjeros.

**Opciones:**

```txt
/en/
```

**Agregar hreflang:**

```html
<link rel="alternate" hreflang="es-AR" href="https://espacio-raku.com/">
<link rel="alternate" hreflang="en" href="https://espacio-raku.com/en/">
<link rel="alternate" hreflang="x-default" href="https://espacio-raku.com/">
```

**Criterio de aceptación:**

- Versión inglesa no debe ser automática de baja calidad.
- Debe tener title, description y canonical propios.

---

## 15. Accesibilidad

**Tareas:**

- Todos los CTAs deben ser links o botones accesibles.
- Agregar `aria-label` a WhatsApp flotante.
- Asegurar contraste AA.
- El calendario debe tener `title` si es iframe.
- Los accordions de FAQ deben ser navegables por teclado.
- No depender solo del color para estados.
- Agregar `:focus-visible` claro.

**Ejemplo:**

```html
<a
  href="https://wa.me/5492615780242?text=Hola%2C%20estoy%20viendo%20la%20web%20de%20Espacio%20Raku%20y%20quisiera%20consultar%20disponibilidad."
  aria-label="Consultar disponibilidad por WhatsApp"
>
  Consultar disponibilidad por WhatsApp
</a>
```

---

## 16. Performance

**Tareas técnicas:**

- Minificar CSS/JS.
- Evitar JS innecesario para contenido estático.
- Renderizar contenido principal en HTML, no depender solo de JS cliente.
- Preload de fuente crítica, pero no demasiadas.
- `font-display: swap` en fuentes.
- Lazy loading en imágenes y mapa.
- Reducir peso de carruseles.
- Evitar librerías pesadas para animaciones simples.

**Métricas objetivo:**

```txt
LCP < 2.5s
CLS < 0.1
INP < 200ms
Performance Lighthouse mobile > 90
Accessibility Lighthouse > 95
SEO Lighthouse > 95
```

---

## 17. Checklist final para el agente

### SEO técnico

- [ ] Agregar/validar `robots.txt`.
- [ ] Agregar/validar `sitemap.xml`.
- [ ] Configurar canonical.
- [ ] Validar redirects HTTP/HTTPS y www/non-www.
- [ ] Agregar Search Console.
- [ ] Enviar sitemap a Search Console.
- [ ] Solicitar indexación de home y nuevas páginas.

### Metadatos

- [ ] Cambiar title de home a keyword principal.
- [ ] Ajustar meta description.
- [ ] Agregar `og:url`.
- [ ] Agregar `og:image`.
- [ ] Agregar Twitter Card completa.
- [ ] Confirmar `lang="es-AR"` en HTML.

### Contenido home

- [ ] Cambiar H1 a `Alojamiento en Chacras de Coria, Mendoza`.
- [ ] Agregar bloque SEO local de 250–400 palabras.
- [ ] Agregar bloque “Por qué alojarte en Chacras de Coria”.
- [ ] Incluir variantes: hospedaje, cabañas, alquiler temporario, Luján de Cuyo, Mendoza.
- [ ] Agregar mensaje de grupos hasta 8–9 personas.
- [ ] Reforzar ubicación con Rodríguez Viñedo, comercios, supermercados y bodegas.

### Alojamientos

- [ ] Crear páginas individuales para cada unidad.
- [ ] Agregar galería por unidad.
- [ ] Verificar capacidad del departamento: hasta 4 personas.
- [ ] Verificar cabañas/lofts: kitchenette.
- [ ] Verificar departamento: living propio y cocina equipada.
- [ ] Agregar CTA WhatsApp específico por unidad.

### Servicios

- [ ] Piscina debe decir “piscina de temporada”.
- [ ] Limpieza debe aclarar “en estadías prolongadas” o no mostrarse como servicio diario.
- [ ] Agregar asador.
- [ ] Agregar fogonero.
- [ ] Mantener WiFi, pet friendly, estacionamiento, aire/calefacción.

### Disponibilidad

- [ ] Insertar Google Calendar embebido.
- [ ] No mostrar marca Booking.
- [ ] No enlazar a Booking desde la UI.
- [ ] Agregar texto: calendario informativo, confirmar por WhatsApp.
- [ ] Agregar CTA debajo del calendario.

### Imágenes

- [ ] Renombrar imágenes con keywords descriptivas.
- [ ] Optimizar a WebP/AVIF.
- [ ] Agregar `alt` descriptivo.
- [ ] Definir `width` y `height`.
- [ ] Usar lazy loading bajo el fold.
- [ ] Crear imagen OG 1200x630.

### Schema

- [ ] Ampliar `LodgingBusiness` con `url`, `priceRange`, `petsAllowed`, `checkinTime`, `checkoutTime`, `image`.
- [ ] Mantener `FAQPage` real.
- [ ] Agregar `WebSite`.
- [ ] Agregar `BreadcrumbList` en páginas nuevas.
- [ ] Validar con herramientas de schema.

### Autoridad local

- [ ] Optimizar Google Business Profile.
- [ ] Alinear NAP en web, Google, redes y directorios.
- [ ] Conseguir reseñas nuevas.
- [ ] Registrar/actualizar directorios turísticos.
- [ ] Conseguir backlinks de partners locales.

### Medición

- [ ] Instalar GA4 o analítica liviana.
- [ ] Medir clicks a WhatsApp.
- [ ] Medir eventos por sección.
- [ ] Revisar queries en Search Console cada 2–4 semanas.
- [ ] Ajustar titles/content según impresiones y CTR.

---

# Orden recomendado de implementación

## Sprint 1 — Indexación + metadatos + home

1. Robots + sitemap + canonical.
2. Search Console.
3. Title, description, OG, Twitter.
4. H1 y bloque SEO local.
5. Ajustes de contenido en servicios, ubicación y grupos.
6. Validar JSON-LD.

## Sprint 2 — Páginas SEO y alojamientos

1. Crear `/alojamiento-en-chacras-de-coria/`.
2. Crear páginas de cada unidad.
3. Crear páginas long-tail de piscina, pet friendly y grupos.
4. Actualizar sitemap.
5. Enlazar desde home.

## Sprint 3 — Contenido local + autoridad

1. Crear 3–5 guías locales.
2. Optimizar Google Business Profile.
3. Registrar directorios.
4. Conseguir backlinks locales.
5. Medir Search Console y ajustar.

---

# Notas importantes

- No prometer “mejor alojamiento” ni “mejor precio garantizado”.
- No mostrar precios fijos si varían por temporada.
- No llevar al usuario a Booking desde el sitio.
- No usar reviews inventadas.
- No repetir la keyword de forma artificial.
- No sacrificar el tono cálido de marca por SEO agresivo.
- Para competir con gigantes, la mejor estrategia es dominar búsquedas específicas: ubicación + atributo + intención, por ejemplo `alojamiento con piscina en Chacras de Coria` o `alojamiento para grupos en Chacras de Coria`.
