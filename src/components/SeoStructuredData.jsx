import { accommodations } from '../data/accommodations.js';
import { amenities } from '../data/amenities.js';
import { faq } from '../data/faq.js';
import { site } from '../data/site.js';

export default function SeoStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LodgingBusiness',
        name: site.name,
        description:
          'Cabañas, lofts y departamento para alojamiento temporario en Chacras de Coria, Luján de Cuyo, Mendoza.',
        telephone: `+${site.whatsappPhone}`,
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
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
