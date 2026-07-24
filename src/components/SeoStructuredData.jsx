import { accommodations } from '../data/accommodations.js';
import { amenities } from '../data/amenities.js';
import { faq } from '../data/faq.js';
import { site } from '../data/site.js';
import { CANONICAL_ORIGIN, homeMeta, pageUrl } from '../data/seo.js';

function occupancyFor(page) {
  if (page.path === '/departamento-chacras-de-coria/') return 4;
  if (page.type === 'unit') return 2;
  return undefined;
}

function faqEntities(items) {
  return items.map((item) => {
    if (Array.isArray(item)) {
      return {
        '@type': 'Question',
        name: item[0],
        acceptedAnswer: {
          '@type': 'Answer',
          text: item[1],
        },
      };
    }

    return {
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    };
  });
}

export default function SeoStructuredData({ page = homeMeta }) {
  const currentUrl = pageUrl(CANONICAL_ORIGIN, page);
  const graph = [
    {
      '@type': 'LodgingBusiness',
      '@id': `${CANONICAL_ORIGIN}/#lodgingbusiness`,
      name: site.name,
      url: site.url,
      description:
        'Alojamiento en Chacras de Coria, Luján de Cuyo, Mendoza. Lofts y departamento con piscina, jardín, WiFi, estacionamiento y atención directa por WhatsApp.',
      telephone: `+${site.whatsappPhone}`,
      priceRange: 'Consultar',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chacras de Coria',
        addressRegion: 'Mendoza',
        addressCountry: 'AR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -32.9802987,
        longitude: -68.8649629,
      },
      hasMap: site.googleMapsUrl,
      sameAs: [site.instagramUrl, site.facebookUrl],
      numberOfRooms: accommodations.length,
      petsAllowed: true,
      checkinTime: '14:00',
      checkoutTime: '11:00',
      amenityFeature: amenities.map((amenity) => ({
        '@type': 'LocationFeatureSpecification',
        name: amenity.label,
        value: true,
      })),
      containsPlace: accommodations.map((accommodation) => ({
        '@type': 'Accommodation',
        name: accommodation.name,
        description: accommodation.fullDescription,
        occupancy: {
          '@type': 'QuantitativeValue',
          value: accommodation.id === 'departamento' ? 4 : 2,
        },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${CANONICAL_ORIGIN}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: page.lang ?? 'es-AR',
    },
    {
      '@type': 'WebPage',
      '@id': `${currentUrl}#webpage`,
      url: currentUrl,
      name: page.title,
      description: page.description,
      inLanguage: page.lang ?? 'es-AR',
      isPartOf: { '@id': `${CANONICAL_ORIGIN}/#website` },
      about: { '@id': `${CANONICAL_ORIGIN}/#lodgingbusiness` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: `${CANONICAL_ORIGIN}/`,
        },
        ...(page.path === '/'
          ? []
          : [
              {
                '@type': 'ListItem',
                position: 2,
                name: page.h1,
                item: currentUrl,
              },
            ]),
      ],
    },
  ];

  if (page.type === 'unit') {
    graph.push({
      '@type': 'Accommodation',
      '@id': `${currentUrl}#accommodation`,
      name: page.h1,
      url: currentUrl,
      description: page.description,
      containedInPlace: { '@id': `${CANONICAL_ORIGIN}/#lodgingbusiness` },
      occupancy: {
        '@type': 'QuantitativeValue',
        value: occupancyFor(page),
      },
      amenityFeature: page.highlights.map((highlight) => ({
        '@type': 'LocationFeatureSpecification',
        name: highlight,
        value: true,
      })),
    });
  }

  if (page.path === '/' || page.faqs?.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqEntities(page.faqs?.length ? page.faqs : faq),
    });
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
