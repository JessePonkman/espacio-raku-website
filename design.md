# design.md — Espacio Raku Landing Page Visual Guidelines

> Base de conocimiento para agentes de implementación de código.  
> Objetivo: construir una landing page estática, visualmente coherente con la marca Espacio Raku, orientada a consultas directas por WhatsApp y a mostrar alojamientos, servicios, experiencias, ubicación, disponibilidad y testimonios.

---

## 1. Principio rector de diseño

La landing debe sentirse como un alojamiento cálido, personal y singular, no como una plantilla genérica de hotelería.

La marca debe transmitir:

- **Calma y descanso**: espacio sereno, visualmente aireado, con ritmo lento y buen uso de blancos.
- **Calidez humana**: contacto directo, simple y cercano por WhatsApp.
- **Naturaleza y entorno mendocino**: uso de fotografías reales, luz natural, vegetación, piscina, interiores y detalles del lugar.
- **Identidad artesanal/propia**: respetar el logo, las tipografías decorativas y la paleta naranja + aguamarina/turquesa.
- **Confianza sin fricción**: disponibilidad visible, preguntas frecuentes, testimonios y CTA claros.

La página no debe parecer un sistema complejo de reservas. Debe ser una presentación informativa que facilite la consulta directa.

---

## 2. Objetivo funcional de la landing

### Objetivo principal

Impulsar reservas o consultas directas sin redirigir a Booking.com.

### Comportamiento esperado

- Mostrar información suficiente para que el huésped entienda el lugar.
- Permitir consultar disponibilidad o precio por WhatsApp.
- Mostrar disponibilidad mediante Google Calendar o un calendario embebido sin marca de Booking, siempre que sea posible.
- Evitar precios fijos visibles, porque pueden variar por temporada, acuerdos o disponibilidad.
- Mantener WhatsApp como canal principal y preferente de contacto.

### CTA principal global

Usar siempre una llamada clara:

```text
Consultar disponibilidad por WhatsApp
```

Variantes permitidas:

```text
Consultar por este alojamiento
Consultar disponibilidad
Escribir por WhatsApp
Consultar experiencias
```

Mensaje sugerido para links `wa.me`:

```text
Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad.
```

Para tarjetas de alojamiento:

```text
Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad para [NOMBRE_DEL_ALOJAMIENTO].
```

Para experiencias:

```text
Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar por las experiencias disponibles.
```

---

## 3. Arquitectura de información recomendada

La landing debe seguir este orden base:

1. **Header / navegación**
   - Logo principal.
   - Links ancla: Alojamientos, Servicios, Experiencias, Ubicación, Preguntas frecuentes.
   - CTA WhatsApp visible en desktop.

2. **Hero principal**
   - Fotografía real del lugar.
   - Overlay cálido y sutil para legibilidad.
   - Logo o isologo en versión blanca si el fondo es oscuro.
   - Título emocional, claro y no exagerado.
   - CTA principal a WhatsApp.
   - CTA secundario hacia Alojamientos o Disponibilidad.

3. **Introducción / Sobre Espacio Raku**
   - Breve historia o propuesta del lugar.
   - Tono humano, local, sereno.
   - No usar lenguaje técnico.

4. **Alojamientos**
   - Cards para cada unidad.
   - Incluir capacidad, amenities principales, fotos y CTA por unidad.
   - Evitar resolver ahora el debate de naming con términos rígidos. Usar una estructura flexible: `Alojamiento 1`, `Loft frente a la piscina`, `Loft deluxe`, `Departamento`, etc., según contenido final.

5. **Disponibilidad**
   - Calendario embebido en card visualmente limpia.
   - Debajo del calendario, CTA directo a WhatsApp.
   - No enviar al usuario a Booking salvo que el cliente lo autorice explícitamente.

6. **Servicios / comodidades**
   - Piscina, WiFi, limpieza, desayuno/vouchers, pet friendly, estacionamiento, aire/calefacción u otros cuando estén confirmados.
   - Usar íconos simples lineales, no ilustraciones pesadas.

7. **Experiencias**
   - Sección estática inicial.
   - Cards para catas/degustaciones, yoga/stretching, masajes u otras experiencias que Judit confirme.
   - No mostrar precios si no están confirmados.
   - Permitir estado visual: `Disponible`, `Consultar disponibilidad`, `Temporalmente no disponible`.

8. **Ubicación**
   - Mapa embebido o bloque de mapa.
   - Texto de referencia: zona, accesos, cercanía a puntos relevantes.
   - CTA para pedir indicaciones por WhatsApp.

9. **Testimonios**
   - Carrusel o grilla de reseñas.
   - Usar 3 a 6 reseñas destacadas.
   - Mostrar nombre o iniciales si se desea preservar privacidad.

10. **Preguntas frecuentes**
    - Acordeón estático.
    - Preguntas sugeridas: mascotas, check-in/check-out, disponibilidad, formas de consulta, desayuno, piscina, ubicación, si se puede reservar directo.

11. **Footer**
    - Logo en versión monocromática o blanca según fondo.
    - Links a Instagram y Facebook.
    - CTA WhatsApp.
    - Información legal mínima si aplica.

---

## 4. Identidad visual

### 4.1 Logo

Usar el logo como elemento central de identidad. La marca tiene valor diferencial; no debe quedar reducida a un simple texto.

#### Assets disponibles recomendados

Usar estos nombres como referencia para organizar `/assets/brand/`:

```text
Marca Final-Raku_color.png
Marca Final-Raku_color iso.png
Marca Final-Raku_blanco.png
Marca Final-Raku_negro.png
Marca Final-Raku_a un color.png
Marca Final-Raku_a un color iso.png
Marca Final-Raku_escala de grises.png
Marca Final-Raku_escala de grises iso.png
Marca Final-Raku solo palabras.png
imagen pequeña.png
imagen pequeña solo palabras.png
```

#### Uso recomendado

| Contexto | Asset recomendado | Regla |
|---|---|---|
| Header claro | `Marca Final-Raku_color.png` | Uso principal. Fondo blanco, crema o arena. |
| Hero con foto oscura | `Marca Final-Raku_blanco.png` | Usar sobre overlay oscuro. |
| Favicon / ícono pequeño | `Marca Final-Raku_color iso.png` | Usar solo isologo. |
| Footer oscuro | `Marca Final-Raku_blanco.png` | Evitar baja legibilidad. |
| Impresión o fallback monocromo | `Marca Final-Raku_negro.png` | Solo cuando no haya color. |
| Espacios muy angostos | `Marca Final-Raku solo palabras.png` | Usar solo si el isologo no entra. |

#### Reglas de aplicación

- Mantener proporción original; nunca estirar ni comprimir.
- No recortar.
- No tapar partes del logo.
- No cambiar los colores internos del logo.
- No aplicar sombras duras, bordes, glow ni efectos 3D.
- Respetar un área libre mínima alrededor del logo.
- En web, usar al menos `24px` de aire alrededor del logo en header desktop y `16px` en mobile.

#### Tamaños mínimos web

| Caso | Tamaño mínimo recomendado |
|---|---:|
| Logo completo en header desktop | `160px` de ancho |
| Logo completo en header mobile | `120px` de ancho |
| Logo completo en footer | `140px` de ancho |
| Isologo solo | `40px` de ancho |
| Favicon | `32px` / `48px` |

El manual indica un tamaño mínimo impreso de 4 cm. En web, no usar el logo completo tan chico que el texto `espacio Raku` deje de leerse.

---

## 5. Paleta cromática

La paleta base combina naranja cálido y aguamarina/turquesa. El naranja debe dominar como color de marca y CTA. El aguamarina debe funcionar como acento asociado al isologo, detalles, chips y estados tranquilos.

### 5.1 Tokens de color

```css
:root {
  /* Brand core */
  --raku-orange: #EC813D;
  --raku-orange-logo-sampled: #F58237;
  --raku-teal: #4FB5AF;
  --raku-teal-soft: #DFF3F1;
  --raku-olive: #9CA273;

  /* Neutrals */
  --raku-ink: #2B2A28;
  --raku-muted: #5C5B5F;
  --raku-stone: #8C8A86;
  --raku-border: #E8DED3;
  --raku-sand: #F8F2EA;
  --raku-cream: #FFF8F2;
  --raku-white: #FFFFFF;

  /* Semantic */
  --raku-success: #4FB5AF;
  --raku-warning: #EC813D;
  --raku-surface: #FFF8F2;
  --raku-surface-alt: #F8F2EA;
}
```

### 5.2 Nota importante sobre el color turquesa

El manual de marca muestra una inconsistencia: el color aguamarina/turquesa aparece con `R 79 G 181 B 175`, pero el hexadecimal impreso se ve como `#5C5B5F`, que corresponde a un gris y no al color del swatch. Para implementación web, usar:

```css
--raku-teal: #4FB5AF; /* RGB 79, 181, 175 */
```

Usar `#5C5B5F` solo como gris/muted, no como turquesa principal.

### 5.3 Uso de color por componente

| Elemento | Color recomendado |
|---|---|
| CTA principal | Fondo `--raku-orange`, texto `--raku-ink` |
| CTA secundario | Borde `--raku-orange`, texto `--raku-orange` |
| Links | `--raku-orange`; hover `--raku-ink` o subrayado |
| Chips de amenities | Fondo `--raku-teal-soft`, texto `--raku-ink` |
| Separadores decorativos | Gradiente `--raku-teal` → `--raku-orange` |
| Fondo principal | `--raku-cream` o blanco |
| Secciones alternas | `--raku-sand` |
| Footer | `--raku-ink` con logo blanco |

### 5.4 Accesibilidad cromática

- Evitar texto blanco sobre `--raku-orange` para texto normal: no alcanza contraste suficiente.
- Preferir texto oscuro `--raku-ink` sobre naranja.
- Para botones con texto blanco, oscurecer el naranja a un tono funcional, por ejemplo `#B95822`, pero solo si se necesita cumplir contraste.
- No usar turquesa como texto pequeño sobre blanco; funciona mejor como fondo suave, borde o acento.

---

## 6. Tipografía

La marca utiliza tipografías con carácter editorial y gestual. Para web, combinarlas con una fuente de lectura clara.

### 6.1 Fuentes de marca

- Principal de marca: `High Tower Text`.
- Secundarias de marca: `Courgette` y `TodayShop Italic`.

### 6.2 Reglas para implementación web

No asumir que las fuentes propietarias estarán disponibles. No incluir archivos de fuente si no fueron provistos/licenciados.

Usar este stack recomendado:

```css
--font-display: "High Tower Text", "Cormorant Garamond", "Libre Baskerville", Georgia, serif;
--font-script: "Courgette", "TodayShop Italic", cursive;
--font-body: "Inter", "Source Sans 3", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### 6.3 Jerarquía tipográfica

| Uso | Fuente | Peso / estilo | Tamaño recomendado |
|---|---|---|---|
| Hero headline | `--font-display` | Regular / italic suave | `clamp(2.4rem, 6vw, 5.5rem)` |
| Subtítulos de sección | `--font-display` | Regular | `clamp(2rem, 4vw, 3.5rem)` |
| Acentos breves | `--font-script` | Regular | `1.1rem` a `1.4rem` |
| Body | `--font-body` | 400 | `1rem` a `1.125rem` |
| Cards / metadata | `--font-body` | 500 / 600 | `0.875rem` a `1rem` |
| Botones | `--font-body` | 600 | `0.95rem` a `1rem` |

### 6.4 Uso correcto

- Usar fuentes decorativas en títulos, frases cortas o detalles de marca.
- No usar `Courgette` o `TodayShop Italic` para párrafos largos.
- Mantener buen interlineado: `1.55` para body y `1.1–1.2` para títulos.
- Evitar mayúsculas sostenidas en títulos grandes; puede perder el tono cálido.

---

## 7. Layout y sistema visual

### 7.1 Grid

Usar un layout amplio y respirado.

```css
.page-section {
  padding-block: clamp(4rem, 8vw, 7rem);
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin-inline: auto;
}
```

Desktop:

- Máximo de contenido: `1120px`.
- Hero full width.
- Cards en grillas de 3 columnas cuando haya espacio.
- Secciones alternas con fondos crema/arena.

Mobile:

- Contenido en una columna.
- CTA sticky/floating de WhatsApp visible.
- Calendario debe ocupar ancho completo y no romper viewport.
- Header puede usar menú simplificado o links mínimos.

### 7.2 Bordes y radios

La identidad debe sentirse orgánica, no demasiado corporativa.

```css
--radius-sm: 12px;
--radius-md: 20px;
--radius-lg: 28px;
--radius-pill: 999px;
```

- Cards: `20px–28px`.
- Imágenes: `24px–32px`.
- Botones: pill o `999px`.
- No usar esquinas totalmente rectas salvo mapas/calendarios embebidos.

### 7.3 Sombras

Sombras suaves y cálidas:

```css
--shadow-soft: 0 18px 45px rgba(43, 42, 40, 0.10);
--shadow-card: 0 12px 30px rgba(43, 42, 40, 0.08);
```

No usar sombras negras intensas ni efectos tipo neumorphism.

---

## 8. Dirección de fotografía

Las fotografías son claves. La web debe vender el espacio visualmente antes que con texto.

### 8.1 Estilo fotográfico

Priorizar:

- Luz natural.
- Espacios reales, ordenados, limpios.
- Piscina, jardín, interiores, detalles de descanso.
- Tomas horizontales para hero y secciones amplias.
- Tomas verticales/cuadradas para cards y carruseles.
- Imágenes con sensación de calma y privacidad.

Evitar:

- Filtros exagerados.
- Saturación excesiva.
- Fotos oscuras sin corrección.
- Collages recargados.
- Imágenes genéricas de stock si hay fotos reales disponibles.

### 8.2 Tratamiento visual

Aplicar una corrección sutil:

```css
.image-treatment {
  filter: saturate(0.96) contrast(1.03) brightness(1.02);
}
```

Para hero con texto encima:

```css
.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(43, 42, 40, 0.62),
    rgba(43, 42, 40, 0.24),
    rgba(43, 42, 40, 0.10)
  );
}
```

### 8.3 Aspect ratios

| Uso | Ratio recomendado |
|---|---|
| Hero | `16 / 9` o full viewport controlado |
| Card alojamiento | `4 / 3` |
| Card experiencia | `3 / 2` |
| Testimonio con foto | `1 / 1` |
| Galería | mix `4 / 3`, `1 / 1`, `3 / 4` |

---

## 9. Componentes principales

### 9.1 Header

Debe ser claro y liviano.

Desktop:

- Fondo transparente sobre hero o `rgba(255, 248, 242, 0.9)` con blur.
- Logo a la izquierda.
- Navegación centrada o derecha.
- CTA WhatsApp a la derecha.

Mobile:

- Logo visible.
- Menú compacto.
- No saturar con todos los links.
- El botón flotante de WhatsApp se encarga de la acción principal.

### 9.2 Hero

Objetivo: captar emocionalmente y ofrecer acción inmediata.

Estructura recomendada:

```text
[Logo o isologo]
Título: Un espacio para descansar en Chacras
Subtítulo: Alojamientos cálidos, piscina, tranquilidad y experiencias para disfrutar Mendoza a otro ritmo.
CTA principal: Consultar disponibilidad por WhatsApp
CTA secundario: Ver alojamientos
```

No usar claims exagerados como “el mejor alojamiento”. Mantener tono realista, humano y cálido.

### 9.3 Alojamientos

Cards con:

- Imagen principal.
- Nombre de unidad.
- Capacidad.
- 3 a 5 amenities clave.
- Breve descripción.
- CTA WhatsApp específico.

Ejemplo de estructura:

```text
Loft frente a la piscina
Ideal para descansar cerca del jardín y la piscina.
[2 personas] [WiFi] [Piscina] [Aire acondicionado]
Consultar por este alojamiento
```

No mostrar precios fijos.

### 9.4 Disponibilidad

La sección debe resolver una inquietud práctica sin derivar a plataformas externas.

Diseño:

- Card ancha con borde suave.
- Título: `Consultá disponibilidad`.
- Texto breve: `Revisá las fechas disponibles y escribinos por WhatsApp para coordinar la reserva.`
- Embed de Google Calendar o placeholder visual.
- CTA debajo: `Consultar disponibilidad por WhatsApp`.

Regla crítica:

- No incluir branding de Booking en la UI propia.
- No incluir links visibles a Booking si el objetivo es reserva directa.

### 9.5 Servicios / amenities

Usar grilla de íconos lineales.

Estilo:

- Ícono en círculo con fondo `--raku-teal-soft`.
- Título corto.
- Texto de una línea.

Ejemplos:

```text
Piscina
WiFi
Pet friendly
Limpieza
Desayuno / vouchers
Ubicación tranquila
```

Solo marcar servicios confirmados.

### 9.6 Experiencias

Sección emocional y de diferenciación.

Objetivo: que el huésped perciba que alojarse en Espacio Raku puede incluir algo más que dormir.

Cards sugeridas:

```text
Degustaciones
Yoga o stretching
Masajes
Experiencias de temporada
```

Cada card debe tener:

- Imagen o ilustración simple.
- Nombre.
- Descripción breve.
- Estado: `Consultar disponibilidad`.
- CTA: `Consultar experiencia`.

No presentar las experiencias como catálogo e-commerce. Son propuestas sujetas a disponibilidad.

### 9.7 Testimonios

Mostrar confianza social sin saturar.

Diseño:

- Carrusel suave o grilla responsive.
- Card blanca/crema.
- Comillas pequeñas decorativas en naranja o turquesa.
- Texto máximo 2–4 líneas.
- Nombre, iniciales o plataforma si se confirma.

### 9.8 FAQ

Usar acordeón simple.

Preguntas sugeridas:

```text
¿Aceptan mascotas?
¿Cómo consulto disponibilidad?
¿Puedo reservar directamente por WhatsApp?
¿Cuáles son los horarios de check-in y check-out?
¿Hay piscina?
¿Ofrecen desayuno?
¿Dónde está ubicado Espacio Raku?
¿Las experiencias están siempre disponibles?
```

### 9.9 Botón flotante de WhatsApp

Debe estar siempre presente.

Desktop:

- Puede estar en header y como floating button inferior derecho.

Mobile:

- Floating button obligatorio.
- Posición: `right: 16px; bottom: 16px`.
- Tamaño mínimo: `56px`.
- Usar movimiento sutil opcional, no invasivo.

Animación permitida:

```css
@keyframes soft-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}
```

No usar animaciones agresivas, rebotes constantes o sonidos.

---

## 10. Motion design

El movimiento debe ser sutil y elegante.

Permitido:

- Fade-in suave al entrar secciones.
- Hover con leve elevación en cards.
- Subrayado animado en links.
- Pulse muy leve en WhatsApp.

Evitar:

- Parallax fuerte.
- Animaciones rápidas.
- Elementos que distraigan de la consulta.
- Transiciones que afecten performance mobile.

Valores sugeridos:

```css
--transition-fast: 160ms ease;
--transition-base: 240ms ease;
--transition-slow: 420ms ease;
```

---

## 11. Responsive y mobile-first

La mayoría de usuarios probablemente llegue desde Instagram, Google o WhatsApp en celular. La experiencia mobile debe ser prioritaria.

### Reglas mobile

- Header compacto.
- Hero no debe ocupar tanto alto que esconda el CTA.
- CTA visible antes del primer scroll.
- Cards en una columna.
- Calendario usable; si el embed no funciona bien, mostrar placeholder + CTA.
- Botón de WhatsApp siempre visible.
- Reducir texto en hero y cards.

Breakpoints sugeridos:

```css
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
```

---

## 12. Accesibilidad y usabilidad

- Todos los botones deben ser navegables por teclado.
- Usar `aria-label` para el botón flotante de WhatsApp.
- Imágenes con `alt` descriptivo.
- Mantener contraste AA en textos principales.
- No depender únicamente del color para estados.
- Acordeón FAQ con estados accesibles.
- Evitar texto pequeño sobre fotos.
- El calendario debe tener título accesible.

Ejemplo:

```html
<a
  href="https://wa.me/[PHONE]?text=[ENCODED_MESSAGE]"
  aria-label="Consultar disponibilidad por WhatsApp"
>
  Consultar disponibilidad
</a>
```

---

## 13. SEO básico y metadatos

### Title sugerido

```text
Espacio Raku | Alojamiento en Chacras de Coria, Mendoza
```

### Description sugerida

```text
Alojamientos cálidos en Chacras de Coria, Mendoza. Piscina, tranquilidad, atención directa por WhatsApp y experiencias para disfrutar tu estadía.
```

### Keywords conceptuales

```text
alojamiento en Chacras de Coria, alojamiento Mendoza, cabañas Mendoza, loft con piscina Mendoza, estadía en Chacras, Espacio Raku
```

Aunque a Judit no le guste completamente el término “cabañas”, puede utilizarse estratégicamente en SEO porque es una forma común de búsqueda. En la UI visible, preferir `alojamientos`, `espacios`, `lofts` o nombres específicos.

---

## 14. Microcopy y tono

### Tono

- Cercano.
- Sereno.
- Claro.
- Humano.
- Sin tecnicismos.
- Sin exageraciones comerciales.

### Frases compatibles con la marca

```text
Un lugar para bajar el ritmo.
Descansá en Chacras, con la calidez de un espacio cuidado.
Alojamientos pensados para disfrutar Mendoza con tranquilidad.
Consultá disponibilidad y coordinamos tu estadía por WhatsApp.
Experiencias para sumar algo especial a tu visita.
```

### Evitar

```text
Reserva online inmediata
El mejor precio garantizado
Sistema de reservas
Motor de reservas
Booking integrado
Oferta imperdible
Lujo exclusivo
```

---

## 15. Tailwind / CSS implementation hints

### 15.1 Tailwind theme suggestion

```js
export const theme = {
  extend: {
    colors: {
      raku: {
        orange: '#EC813D',
        teal: '#4FB5AF',
        tealSoft: '#DFF3F1',
        olive: '#9CA273',
        ink: '#2B2A28',
        muted: '#5C5B5F',
        stone: '#8C8A86',
        border: '#E8DED3',
        sand: '#F8F2EA',
        cream: '#FFF8F2',
        white: '#FFFFFF',
      },
    },
    fontFamily: {
      display: ['High Tower Text', 'Cormorant Garamond', 'Libre Baskerville', 'Georgia', 'serif'],
      script: ['Courgette', 'TodayShop Italic', 'cursive'],
      body: ['Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
    },
    borderRadius: {
      raku: '24px',
      rakuLg: '32px',
    },
    boxShadow: {
      raku: '0 18px 45px rgba(43, 42, 40, 0.10)',
      rakuCard: '0 12px 30px rgba(43, 42, 40, 0.08)',
    },
  },
};
```

### 15.2 Button styles

Primary:

```css
.btn-primary {
  background: var(--raku-orange);
  color: var(--raku-ink);
  border-radius: 999px;
  font-weight: 700;
  padding: 0.9rem 1.25rem;
  box-shadow: var(--shadow-card);
}
```

Secondary:

```css
.btn-secondary {
  background: transparent;
  color: var(--raku-orange);
  border: 1px solid var(--raku-orange);
  border-radius: 999px;
  font-weight: 700;
  padding: 0.9rem 1.25rem;
}
```

Card:

```css
.card-raku {
  background: var(--raku-white);
  border: 1px solid var(--raku-border);
  border-radius: 28px;
  box-shadow: var(--shadow-card);
  overflow: hidden;
}
```

---

## 16. Reglas de no implementación

No hacer:

- No convertir la landing en un sistema complejo de reservas en esta fase.
- No agregar panel administrador ni CMS salvo requerimiento futuro.
- No poner precios fijos si no están confirmados.
- No dirigir tráfico a Booking como CTA principal.
- No usar colores fuera de marca como primarios.
- No modificar el logo.
- No usar fotos de stock si existen fotos reales suficientes.
- No sobrecargar con animaciones.
- No esconder WhatsApp al fondo de la página.
- No escribir textos con tono corporativo frío.

---

## 17. Checklist de aceptación visual

Antes de entregar una versión, verificar:

- [ ] El logo se ve proporcionado, legible y sin deformaciones.
- [ ] La paleta usa naranja + turquesa como acentos principales.
- [ ] El sitio se siente cálido, sereno y no genérico.
- [ ] El CTA de WhatsApp aparece en hero, cards relevantes y botón flotante.
- [ ] No hay CTA principal hacia Booking.
- [ ] Alojamientos, servicios, experiencias, ubicación, testimonios y FAQ están contemplados.
- [ ] La sección de experiencias puede funcionar con contenido estático.
- [ ] El calendario no rompe mobile.
- [ ] El texto es claro para usuarios no técnicos.
- [ ] Los botones tienen contraste suficiente.
- [ ] Las imágenes tienen buen recorte y no se ven pixeladas.
- [ ] La versión mobile fue revisada primero.
- [ ] Hay versión/resumen en inglés si se implementa internacionalización básica.

---

## 18. Resumen para agentes de código

Construir una landing estática, mobile-first, cálida y visualmente alineada al manual de marca. La acción principal es WhatsApp, no Booking. La marca debe apoyarse en el logo, naranja `#EC813D`, turquesa `#4FB5AF`, fondos crema/arena, fotografía real, bordes redondeados y tipografía editorial/decorativa usada con moderación. La sección de experiencias es parte importante del diferencial comercial y debe implementarse como contenido estático editable desde código. La interfaz debe ser simple, confiable y orientada a consulta directa.
