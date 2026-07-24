export const CANONICAL_ORIGIN = 'https://espacio-raku.com';
export const SOCIAL_IMAGE_PATH = '/assets/og/espacio-raku-chacras-de-coria.jpg';
export const SOCIAL_IMAGE_ALT = 'Piscina y jardín de Espacio Raku en Chacras de Coria, Mendoza';

export function normalizePath(pathname = '/') {
  const path = pathname.split('?')[0].split('#')[0] || '/';
  if (path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

export const homeMeta = {
  path: '/',
  type: 'home',
  title: 'Alojamiento en Chacras de Coria | Espacio Raku Mendoza',
  description:
    'Alojamiento en Chacras de Coria, Mendoza: lofts y departamento con piscina, jardín, WiFi, estacionamiento y consulta directa por WhatsApp.',
  h1: 'Alojamiento en Chacras de Coria, Mendoza',
  ogTitle: 'Alojamiento en Chacras de Coria | Espacio Raku',
  ogDescription:
    'Lofts y departamento con piscina y jardín en Chacras de Coria, Mendoza. Consulta disponibilidad por WhatsApp.',
  twitterTitle: 'Alojamiento en Chacras de Coria | Espacio Raku',
  twitterDescription:
    'Lofts y departamento con piscina, jardín y consulta directa por WhatsApp en Chacras de Coria.',
  changefreq: 'monthly',
  lastmod: '2026-07-01',
  priority: '1.0',
};

export const seoPages = [
  {
    path: '/alojamiento-en-chacras-de-coria/',
    type: 'landing',
    title: 'Alojamiento en Chacras de Coria | Espacio Raku Mendoza',
    description:
      'Alojamiento en Chacras de Coria: lofts y departamento con piscina, jardín, WiFi, estacionamiento y reserva directa por WhatsApp.',
    h1: 'Alojamiento en Chacras de Coria',
    eyebrow: 'ALOJAMIENTO EN CHACRAS DE CORIA',
    intro:
      'Espacio Raku es una alternativa cálida para quienes buscan alojamiento en Chacras de Coria con tranquilidad, privacidad y atención directa. Estamos en Luján de Cuyo, Mendoza, una zona elegida por su cercanía a bodegas, restaurantes, viñedos y salidas hacia la montaña.',
    highlights: ['Lofts para dos personas', 'Departamento hasta 4 personas', 'Piscina de temporada', 'Jardín, WiFi y estacionamiento', 'Consulta directa por WhatsApp'],
    sections: [
      {
        title: 'Por qué elegir Chacras de Coria para alojarte',
        paragraphs: [
          'Chacras de Coria combina vida residencial, gastronomía, bodegas y buenos accesos. Es una base práctica para recorrer Mendoza sin alojarse en una zona ruidosa o demasiado urbana.',
          'Desde Espacio Raku podés consultar recomendaciones para moverte hacia restaurantes, supermercados, centros comerciales, bodegas y recorridos de montaña.',
        ],
      },
      {
        title: 'Lofts y departamento dentro del mismo complejo',
        paragraphs: [
          'El alojamiento se organiza en espacios independientes: dos lofts para dos personas y un departamento para hasta cuatro personas. Cada unidad cuenta con baño privado, climatización, WiFi y acceso a los espacios exteriores.',
          'También es posible coordinar varios alojamientos para parejas, amigos o grupos pequeños que viajan juntos y quieren mantener independencia.',
        ],
      },
      {
        title: 'Reserva directa y disponibilidad por WhatsApp',
        paragraphs: [
          'La estadía se consulta directamente por WhatsApp. Podés contar fechas, cantidad de personas y preferencias, y te respondemos con la opción más adecuada según disponibilidad real.',
        ],
      },
    ],
    faqs: [
      ['¿Dónde está Espacio Raku?', 'Estamos en Chacras de Coria, dentro de Luján de Cuyo, Mendoza.'],
      ['¿Qué tipo de alojamiento ofrecen?', 'Dos lofts para dos personas y un departamento para hasta cuatro personas.'],
      ['¿Cómo consulto disponibilidad?', 'La forma principal es escribir por WhatsApp con las fechas y cantidad de personas.'],
    ],
    ctaLabel: 'Consultar alojamiento por WhatsApp',
    ctaMessage: 'Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar alojamiento en Chacras de Coria.',
    related: ['/cabanas-en-chacras-de-coria/', '/alojamiento-con-piscina-chacras-de-coria/', '/departamento-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/cabanas-en-chacras-de-coria/',
    type: 'landing',
    title: 'Cabañas en Chacras de Coria | Espacio Raku Mendoza',
    description:
      'Cabañas y alojamientos en Chacras de Coria: lofts y departamento con piscina, jardín y consulta directa por WhatsApp.',
    h1: 'Cabañas y alojamientos en Chacras de Coria',
    eyebrow: 'CABAÑAS Y ALOJAMIENTOS',
    intro:
      'Aunque Espacio Raku ofrece lofts y un departamento, muchas personas buscan “cabañas en Chacras de Coria” cuando quieren una estadía cálida, independiente y con contacto con el jardín. Por eso reunimos la información principal para quienes buscan ese tipo de experiencia en Mendoza.',
    highlights: ['Ambiente cálido e independiente', 'Piscina y jardín', 'WiFi y climatización', 'Pet friendly', 'Reserva directa'],
    sections: [
      {
        title: 'Una experiencia más personal que un hotel tradicional',
        paragraphs: [
          'La propuesta es alojarte en un espacio cuidado, tranquilo y con atención cercana. Cada unidad mantiene independencia, pero comparte el entorno verde, la piscina de temporada y la calma de Chacras de Coria.',
        ],
      },
      {
        title: 'Opciones para parejas y familias chicas',
        paragraphs: [
          'Los lofts están pensados para dos personas. El departamento suma living propio y cocina equipada, por lo que funciona mejor para quienes necesitan más espacio o viajan hasta cuatro personas.',
        ],
      },
      {
        title: 'Consulta simple por WhatsApp',
        paragraphs: [
          'Si querés saber qué opción se adapta mejor a tus fechas, escribinos por WhatsApp. Te confirmamos disponibilidad, comodidades y próximos pasos de forma directa.',
        ],
      },
    ],
    ctaLabel: 'Consultar cabañas y alojamientos',
    ctaMessage: 'Hola Judit, estoy viendo las cabañas y alojamientos de Espacio Raku y quisiera consultar disponibilidad.',
    related: ['/alojamiento-en-chacras-de-coria/', '/loft-frente-a-la-piscina/', '/loft-deluxe-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/alojamiento-con-piscina-chacras-de-coria/',
    type: 'landing',
    title: 'Alojamiento con piscina en Chacras de Coria | Espacio Raku',
    description:
      'Alojamiento con piscina de temporada en Chacras de Coria, Mendoza. Lofts y departamento con jardín y consulta directa por WhatsApp.',
    h1: 'Alojamiento con piscina en Chacras de Coria',
    eyebrow: 'PISCINA Y JARDÍN',
    intro:
      'Si buscás alojamiento con piscina en Chacras de Coria, Espacio Raku ofrece una estadía tranquila con jardín, espacios al aire libre y piscina de temporada para disfrutar durante los meses cálidos.',
    highlights: ['Piscina de temporada', 'Jardín y reposo al aire libre', 'Alojamiento temporario', 'Zona residencial tranquila', 'WhatsApp directo'],
    sections: [
      {
        title: 'Piscina de temporada para descansar en Mendoza',
        paragraphs: [
          'La piscina acompaña la experiencia de descanso y se disfruta especialmente en verano. Siempre comunicamos la disponibilidad real de temporada antes de confirmar una estadía.',
        ],
      },
      {
        title: 'Lofts y departamento con acceso al jardín',
        paragraphs: [
          'Los alojamientos combinan comodidad interior con espacios exteriores compartidos. Podés elegir entre lofts para dos personas o el departamento para hasta cuatro personas.',
        ],
      },
    ],
    ctaLabel: 'Consultar disponibilidad con piscina',
    ctaMessage: 'Hola Judit, estoy buscando alojamiento con piscina en Chacras de Coria y quisiera consultar disponibilidad en Espacio Raku.',
    related: ['/alojamiento-en-chacras-de-coria/', '/cabanas-en-chacras-de-coria/', '/que-hacer-en-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/alojamiento-pet-friendly-chacras-de-coria/',
    type: 'landing',
    title: 'Alojamiento pet friendly en Chacras de Coria | Espacio Raku',
    description:
      'Alojamiento pet friendly en Chacras de Coria, Mendoza. Consultá por WhatsApp para viajar con tu mascota a Espacio Raku.',
    h1: 'Alojamiento pet friendly en Chacras de Coria',
    eyebrow: 'PET FRIENDLY',
    intro:
      'En Espacio Raku tu mascota es bienvenida. Si buscás alojamiento pet friendly en Chacras de Coria, podés consultarnos por WhatsApp para coordinar la estadía y cuidar juntos el espacio.',
    highlights: ['Mascotas bienvenidas', 'Jardín y zona tranquila', 'Consulta previa por WhatsApp', 'Lofts y departamento', 'Estadías en Mendoza'],
    sections: [
      {
        title: 'Viajar con mascota de forma simple',
        paragraphs: [
          'Cada estadía se coordina de manera directa para confirmar fechas, cantidad de personas y necesidades particulares. Si viajás con mascota, contanos al escribirnos para orientarte mejor.',
        ],
      },
      {
        title: 'Un entorno tranquilo en Chacras de Coria',
        paragraphs: [
          'La zona residencial y el jardín hacen que la experiencia sea más amable para quienes viajan con animales, siempre respetando el descanso de otros huéspedes y el cuidado del lugar.',
        ],
      },
    ],
    ctaLabel: 'Consultar estadía pet friendly',
    ctaMessage: 'Hola Judit, estoy buscando alojamiento pet friendly en Chacras de Coria y quisiera consultar disponibilidad en Espacio Raku.',
    related: ['/alojamiento-en-chacras-de-coria/', '/departamento-chacras-de-coria/', '/escapada-en-pareja-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.78',
  },
  {
    path: '/alojamiento-para-grupos-chacras-de-coria/',
    type: 'landing',
    title: 'Alojamiento para grupos en Chacras de Coria | Espacio Raku',
    description:
      'Alojamiento para grupos en Chacras de Coria: coordiná varios espacios en Espacio Raku para hasta 8–9 personas.',
    h1: 'Alojamiento para grupos en Chacras de Coria',
    eyebrow: 'ESTADÍAS EN GRUPO',
    intro:
      'Espacio Raku puede recibir grupos pequeños coordinando varios alojamientos dentro del mismo complejo. Es una opción práctica para amigos, parejas o familias que quieren viajar juntos a Mendoza manteniendo independencia.',
    highlights: ['Hasta 8–9 personas coordinando unidades', 'Espacios independientes', 'Asador y fogonero con coordinación previa', 'Experiencias en Mendoza', 'WhatsApp directo'],
    sections: [
      {
        title: 'Juntos, pero con espacio propio',
        paragraphs: [
          'La capacidad total se coordina combinando los dos lofts y el departamento. Esto permite compartir el viaje sin perder comodidad ni independencia durante la estadía.',
        ],
      },
      {
        title: 'Ideal para escapadas de vino y descanso',
        paragraphs: [
          'Chacras de Coria es una buena base para grupos que quieren recorrer bodegas, disfrutar restaurantes y descansar en una zona tranquila de Luján de Cuyo.',
        ],
      },
    ],
    ctaLabel: 'Consultar para un grupo',
    ctaMessage: 'Hola Judit, estoy viendo Espacio Raku y quisiera consultar alojamiento para un grupo en Chacras de Coria. Somos [cantidad] personas y viajaríamos del [fecha] al [fecha].',
    related: ['/alojamiento-para-grupos-en-mendoza/', '/alojamiento-en-chacras-de-coria/', '/departamento-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.82',
  },
  {
    path: '/loft-frente-a-la-piscina/',
    type: 'unit',
    title: 'Loft frente a la piscina en Chacras de Coria | Espacio Raku',
    description:
      'Loft frente a la piscina para dos personas en Chacras de Coria, Mendoza. Kitchenette, baño privado, WiFi y jardín.',
    h1: 'Loft frente a la piscina en Chacras de Coria',
    eyebrow: 'LOFT PARA DOS PERSONAS',
    intro:
      'Un loft íntimo para dos personas, con vista al jardín y la piscina de temporada. Es una opción cómoda para quienes buscan alojamiento tranquilo en Chacras de Coria.',
    image: '/assets/photos/cabana3-exterior.jpg',
    highlights: ['2 personas', 'Kitchenette', 'Baño privado', 'WiFi', 'Aire acondicionado', 'Acceso a piscina'],
    sections: [
      { title: 'Comodidades del loft', paragraphs: ['El espacio cuenta con kitchenette, baño privado, climatización y WiFi. Su ubicación frente al jardín permite disfrutar el exterior durante la estadía.'] },
      { title: 'Consulta específica por WhatsApp', paragraphs: ['Podés escribirnos con tus fechas para confirmar disponibilidad de este loft y recibir orientación directa.'] },
    ],
    ctaLabel: 'Consultar por el Loft frente a la piscina',
    ctaMessage: 'Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad para el Loft frente a la piscina.',
    related: ['/loft-deluxe-chacras-de-coria/', '/alojamiento-con-piscina-chacras-de-coria/', '/alojamiento-en-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.75',
  },
  {
    path: '/loft-deluxe-chacras-de-coria/',
    type: 'unit',
    title: 'Loft deluxe en Chacras de Coria | Espacio Raku',
    description:
      'Loft deluxe para dos personas en Chacras de Coria, Mendoza. Kitchenette, baño privado, WiFi, aire y piscina de temporada.',
    h1: 'Loft deluxe en Chacras de Coria',
    eyebrow: 'LOFT DELUXE',
    intro:
      'El Loft deluxe es una opción luminosa y tranquila para dos personas, pensada para una estadía independiente en Chacras de Coria, Mendoza.',
    image: '/assets/photos/cabana2-cama.jpg',
    highlights: ['2 personas', 'Kitchenette', 'Baño privado', 'WiFi', 'Aire acondicionado', 'Piscina de temporada'],
    sections: [
      { title: 'Un espacio cómodo para descansar', paragraphs: ['El loft combina dormitorio, kitchenette, baño privado y climatización. Es ideal para parejas o viajeros que buscan una base calma para recorrer Mendoza.'] },
      { title: 'Reserva directa', paragraphs: ['La disponibilidad se confirma por WhatsApp para que puedas consultar fechas, condiciones y detalles antes de reservar.'] },
    ],
    ctaLabel: 'Consultar por el Loft deluxe',
    ctaMessage: 'Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad para el Loft deluxe.',
    related: ['/loft-frente-a-la-piscina/', '/cabanas-en-chacras-de-coria/', '/escapada-en-pareja-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.75',
  },
  {
    path: '/departamento-chacras-de-coria/',
    type: 'unit',
    title: 'Departamento en Chacras de Coria para 4 personas | Espacio Raku',
    description:
      'Departamento en Chacras de Coria para hasta 4 personas, con living propio, cocina equipada, baño privado, WiFi y piscina.',
    h1: 'Departamento en Chacras de Coria para 4 personas',
    eyebrow: 'DEPARTAMENTO',
    intro:
      'El departamento es la opción con mayor capacidad de Espacio Raku. Está pensado para hasta cuatro personas y suma living propio y cocina equipada para una estadía con más autonomía.',
    image: '/assets/photos/cabana1-sala.jpg',
    highlights: ['Hasta 4 personas', 'Living propio', 'Cocina equipada', 'Baño privado', 'WiFi', 'Piscina de temporada'],
    sections: [
      { title: 'Más espacio para una estadía cómoda', paragraphs: ['El departamento funciona bien para quienes necesitan mayor independencia, cocina equipada y un ambiente de estar propio durante su viaje a Chacras de Coria.'] },
      { title: 'Ideal para familias chicas o grupos pequeños', paragraphs: ['También puede combinarse con los lofts cuando viajan grupos que quieren alojarse dentro del mismo complejo.'] },
    ],
    ctaLabel: 'Consultar por el departamento',
    ctaMessage: 'Hola Judit, estoy viendo la web de Espacio Raku y quisiera consultar disponibilidad para el Departamento.',
    related: ['/alojamiento-para-grupos-chacras-de-coria/', '/alojamiento-en-chacras-de-coria/', '/cabanas-en-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.75',
  },
  {
    path: '/que-hacer-en-chacras-de-coria/',
    type: 'guide',
    title: 'Qué hacer en Chacras de Coria | Guía de Espacio Raku',
    description:
      'Ideas sobre qué hacer en Chacras de Coria: bodegas, restaurantes, paseos tranquilos y experiencias cerca de Espacio Raku.',
    h1: 'Qué hacer en Chacras de Coria',
    eyebrow: 'GUÍA LOCAL',
    intro:
      'Chacras de Coria es una de las zonas más elegidas de Mendoza para combinar descanso, gastronomía, vino y recorridos tranquilos. Desde Espacio Raku podés usarla como base para explorar Luján de Cuyo y alrededores.',
    highlights: ['Bodegas y vino', 'Restaurantes y cafés', 'Zona residencial tranquila', 'Acceso a montaña', 'Alojamiento cercano'],
    sections: [
      { title: 'Recorrer bodegas y experiencias de vino', paragraphs: ['La zona de Luján de Cuyo es ideal para quienes quieren visitar bodegas, hacer degustaciones y conocer más sobre el vino mendocino.'] },
      { title: 'Disfrutar restaurantes, cafés y paseos', paragraphs: ['Chacras de Coria ofrece una vida local tranquila, con opciones gastronómicas y comercios cercanos para resolver la estadía sin moverse demasiado.'] },
      { title: 'Descansar en una base tranquila', paragraphs: ['Después de recorrer, volver a un alojamiento con jardín y piscina de temporada ayuda a bajar el ritmo y disfrutar otra cara de Mendoza.'] },
    ],
    ctaLabel: 'Consultar alojamiento para recorrer Chacras',
    ctaMessage: 'Hola Judit, estoy viendo qué hacer en Chacras de Coria y quisiera consultar alojamiento en Espacio Raku.',
    related: ['/alojamiento-en-chacras-de-coria/', '/bodegas-cerca-de-chacras-de-coria/', '/alojamiento-con-piscina-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.65',
  },
  {
    path: '/bodegas-cerca-de-chacras-de-coria/',
    type: 'guide',
    title: 'Bodegas cerca de Chacras de Coria | Espacio Raku Mendoza',
    description:
      'Alojate en Chacras de Coria para recorrer bodegas de Luján de Cuyo y disfrutar Mendoza con una base tranquila.',
    h1: 'Bodegas cerca de Chacras de Coria',
    eyebrow: 'VINO Y MENDOZA',
    intro:
      'Una de las razones para alojarse en Chacras de Coria es la cercanía con zonas de vino, restaurantes y experiencias vinculadas a bodegas. Espacio Raku funciona como base tranquila para ese tipo de viaje.',
    highlights: ['Base en Luján de Cuyo', 'Cerca de experiencias de vino', 'Reserva directa', 'Jardín y descanso', 'Recomendaciones por WhatsApp'],
    sections: [
      { title: 'Una zona práctica para viajes de vino', paragraphs: ['Chacras de Coria permite combinar descanso con salidas hacia bodegas y recorridos gastronómicos. Es una alternativa más calma que alojarse en pleno centro urbano.'] },
      { title: 'Experiencias coordinadas', paragraphs: ['Espacio Raku también comparte propuestas de temporada, como degustaciones y experiencias vinculadas a Mendoza, siempre sujetas a disponibilidad.'] },
    ],
    ctaLabel: 'Consultar alojamiento cerca de bodegas',
    ctaMessage: 'Hola Judit, estoy buscando alojamiento cerca de bodegas en Chacras de Coria y quisiera consultar disponibilidad.',
    related: ['/que-hacer-en-chacras-de-coria/', '/alojamiento-en-chacras-de-coria/', '/escapada-en-pareja-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.62',
  },
  {
    path: '/donde-alojarse-en-mendoza-chacras-de-coria/',
    type: 'guide',
    title: 'Dónde alojarse en Mendoza: Chacras de Coria | Espacio Raku',
    description:
      'Dónde alojarse en Mendoza: por qué elegir Chacras de Coria si buscás descanso, bodegas, restaurantes y buena conexión.',
    h1: 'Dónde alojarse en Mendoza: Chacras de Coria',
    eyebrow: 'DÓNDE ALOJARSE EN MENDOZA',
    intro:
      'Si estás evaluando dónde alojarte en Mendoza, Chacras de Coria es una buena alternativa para quienes priorizan descanso, cercanía a bodegas y una experiencia más local.',
    highlights: ['Más tranquilidad que zonas céntricas', 'Acceso a bodegas', 'Restaurantes y comercios', 'Alojamiento independiente', 'WhatsApp directo'],
    sections: [
      { title: 'Chacras de Coria vs Ciudad de Mendoza', paragraphs: ['La Ciudad de Mendoza puede ser práctica para moverse a pie por zonas céntricas. Chacras de Coria, en cambio, suele elegirse para descansar, estar cerca de bodegas y vivir un ritmo más tranquilo.'] },
      { title: 'Para qué viajeros funciona mejor', paragraphs: ['Funciona especialmente bien para parejas, escapadas, grupos pequeños y personas que viajan en auto o se manejan con traslados privados.'] },
    ],
    ctaLabel: 'Consultar alojamiento en Mendoza',
    ctaMessage: 'Hola Judit, estoy decidiendo dónde alojarme en Mendoza y quisiera consultar disponibilidad en Espacio Raku.',
    related: ['/alojamiento-en-chacras-de-coria/', '/cabanas-en-chacras-de-coria/', '/que-hacer-en-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.62',
  },
  {
    path: '/escapada-en-pareja-chacras-de-coria/',
    type: 'guide',
    title: 'Escapada en pareja a Chacras de Coria | Espacio Raku',
    description:
      'Ideas para una escapada en pareja a Chacras de Coria: alojamiento tranquilo, bodegas, restaurantes y descanso en Mendoza.',
    h1: 'Escapada en pareja a Chacras de Coria',
    eyebrow: 'ESCAPADA EN PAREJA',
    intro:
      'Chacras de Coria es una zona ideal para una escapada en pareja a Mendoza: combina tranquilidad, gastronomía, vino y alojamientos independientes para descansar.',
    highlights: ['Lofts para dos personas', 'Jardín y piscina', 'Bodegas y restaurantes', 'Zona tranquila', 'Consulta directa'],
    sections: [
      { title: 'Lofts para descansar de a dos', paragraphs: ['Los lofts de Espacio Raku están pensados para dos personas y ofrecen una base cálida para recorrer durante el día y descansar al volver.'] },
      { title: 'Planes cerca de Chacras', paragraphs: ['Podés combinar la estadía con bodegas, degustaciones, restaurantes, paseos por la zona o simplemente descansar en el jardín.'] },
    ],
    ctaLabel: 'Consultar escapada en pareja',
    ctaMessage: 'Hola Judit, estoy pensando una escapada en pareja a Chacras de Coria y quisiera consultar disponibilidad en Espacio Raku.',
    related: ['/loft-frente-a-la-piscina/', '/loft-deluxe-chacras-de-coria/', '/bodegas-cerca-de-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/alojamiento-para-grupos-en-mendoza/',
    type: 'guide',
    title: 'Alojamiento para grupos en Mendoza | Espacio Raku',
    description:
      'Alojamiento para grupos pequeños en Mendoza: Espacio Raku recibe hasta 8–9 personas coordinando lofts y departamento.',
    h1: 'Alojamiento para grupos en Mendoza',
    eyebrow: 'GRUPOS EN MENDOZA',
    intro:
      'Para grupos pequeños que viajan a Mendoza, Espacio Raku permite coordinar varios alojamientos dentro del mismo complejo en Chacras de Coria.',
    highlights: ['Hasta 8–9 personas', 'Unidades independientes', 'Chacras de Coria', 'Experiencias y bodegas', 'Consulta por WhatsApp'],
    sections: [
      { title: 'Unidades combinadas para viajar juntos', paragraphs: ['Los grupos pueden consultar la combinación de dos lofts y un departamento. La capacidad final se confirma según fechas, disponibilidad y configuración de camas.'] },
      { title: 'Buena base para viajes de amigas, vino o descanso', paragraphs: ['La ubicación en Luján de Cuyo es útil para organizar recorridos de vino, salidas gastronómicas y descanso al aire libre.'] },
    ],
    ctaLabel: 'Consultar alojamiento para grupos',
    ctaMessage: 'Hola Judit, estoy buscando alojamiento para grupos en Mendoza y quisiera consultar disponibilidad en Espacio Raku.',
    related: ['/alojamiento-para-grupos-chacras-de-coria/', '/departamento-chacras-de-coria/', '/que-hacer-en-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.62',
  },
  {
    path: '/en/',
    type: 'english',
    lang: 'en',
    title: 'Accommodation in Chacras de Coria | Espacio Raku Mendoza',
    description:
      'Accommodation in Chacras de Coria, Mendoza: lofts and apartment with seasonal pool, garden, WiFi and direct WhatsApp contact.',
    h1: 'Accommodation in Chacras de Coria, Mendoza',
    eyebrow: 'STAY IN MENDOZA',
    intro:
      'Espacio Raku offers warm, independent accommodation in Chacras de Coria, Luján de Cuyo, Mendoza. It is a quiet base for wine trips, restaurants, mountain outings and slow days by the garden and seasonal pool.',
    highlights: ['Two-person lofts', 'Apartment for up to four guests', 'Seasonal pool and garden', 'WiFi and parking', 'Direct WhatsApp contact'],
    sections: [
      { title: 'A quiet base near wineries and restaurants', paragraphs: ['Chacras de Coria is a residential area in Luján de Cuyo, chosen by travelers who want a calmer stay while staying close to wineries, restaurants and local services.'] },
      { title: 'Direct booking by WhatsApp', paragraphs: ['Send your dates, number of guests and preferred unit by WhatsApp. We will confirm availability and help you choose the best option.'] },
    ],
    ctaLabel: 'Ask availability by WhatsApp',
    ctaMessage: 'Hello Judit, I am visiting the Espacio Raku website and would like to ask about availability.',
    related: ['/alojamiento-en-chacras-de-coria/', '/loft-frente-a-la-piscina/', '/departamento-chacras-de-coria/'],
    changefreq: 'monthly',
    priority: '0.5',
  },
];

export const allPageMeta = [homeMeta, ...seoPages];

export function getPageByPath(pathname = '/') {
  const normalizedPath = normalizePath(pathname);
  if (normalizedPath === '/') return homeMeta;
  return seoPages.find((page) => page.path === normalizedPath) ?? null;
}

export function absoluteUrl(origin, path = '/') {
  const cleanOrigin = origin.replace(/\/$/, '');
  return `${cleanOrigin}${path}`;
}

export function pageUrl(origin, page) {
  return absoluteUrl(origin, page.path);
}
