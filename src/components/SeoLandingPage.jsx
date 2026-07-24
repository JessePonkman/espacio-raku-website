import OptimizedImage, { PHOTO_WIDTHS } from './OptimizedImage.jsx';
import { buildWhatsAppUrl } from '../utils/whatsapp.js';
import { trackWhatsAppClick } from '../utils/analytics.js';
import { seoPages } from '../data/seo.js';

function titleFor(path) {
  return seoPages.find((page) => page.path === path)?.h1 ?? 'Espacio Raku';
}

export default function SeoLandingPage({ page }) {
  const whatsappEvent = `whatsapp_click_${page.path.replace(/^\//, '').replace(/\/$/, '').replaceAll('-', '_') || 'home'}`;

  return (
    <main className="seo-page">
      <section className="seo-hero section">
        <div className="container seo-hero-grid">
          <div>
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>{page.h1}</h1>
            <p className="lead seo-page-intro">{page.intro}</p>
            <div className="seo-hero-actions">
              <a
                href={buildWhatsAppUrl(page.ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label={`${page.ctaLabel}${page.lang === 'en' ? ' via WhatsApp' : ' por WhatsApp'}`}
                onClick={() => trackWhatsAppClick(whatsappEvent)}
              >
                {page.ctaLabel}
              </a>
              <a href="/#alojamientos" className="btn btn-secondary">
                {page.lang === 'en' ? 'See accommodation' : 'Ver alojamientos'}
              </a>
            </div>
          </div>

          <div className="seo-hero-card">
            {page.image ? (
              <OptimizedImage
                src={page.image}
                alt={page.h1}
                widths={PHOTO_WIDTHS}
                sizes="(max-width: 760px) calc(100vw - 32px), 42vw"
                loading="eager"
              />
            ) : (
              <OptimizedImage
                src="/assets/photos/hero-piscina.jpg"
                alt="Piscina y jardín de Espacio Raku en Chacras de Coria, Mendoza"
                widths={PHOTO_WIDTHS}
                sizes="(max-width: 760px) calc(100vw - 32px), 42vw"
                loading="eager"
              />
            )}
          </div>
        </div>
      </section>

      {page.highlights?.length > 0 && (
        <section className="seo-highlights-section">
          <div className="container seo-highlights" aria-label={page.lang === 'en' ? 'Highlights' : 'Puntos destacados'}>
            {page.highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </section>
      )}

      <section className="section seo-content-section">
        <div className="container seo-content-grid">
          <article className="seo-article">
            {page.sections.map((section) => (
              <section key={section.title} className="seo-article-block">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {page.faqs?.length > 0 && (
              <section className="seo-article-block seo-faq-block">
                <h2>Preguntas frecuentes</h2>
                {page.faqs.map(([question, answer]) => (
                  <div key={question} className="seo-faq-item">
                    <h3>{question}</h3>
                    <p>{answer}</p>
                  </div>
                ))}
              </section>
            )}
          </article>

          <aside className="seo-sidebar" aria-label={page.lang === 'en' ? 'Quick enquiry' : 'Consulta rápida'}>
            <div className="seo-sidebar-card">
              <h2>{page.lang === 'en' ? 'Direct enquiry' : 'Consulta directa'}</h2>
              <p>
                {page.lang === 'en'
                  ? 'Send your dates, number of guests and preferred stay. We will reply by WhatsApp to confirm availability.'
                  : 'Contanos tus fechas, cantidad de personas y qué tipo de estadía buscás. Te respondemos por WhatsApp para confirmar disponibilidad.'}
              </p>
              <a
                href={buildWhatsAppUrl(page.ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary wide"
                onClick={() => trackWhatsAppClick(whatsappEvent)}
              >
                {page.lang === 'en' ? 'Write on WhatsApp' : 'Escribir por WhatsApp'}
              </a>
            </div>

            {page.related?.length > 0 && (
              <div className="seo-sidebar-card">
                <h2>{page.lang === 'en' ? 'You may also like' : 'También puede interesarte'}</h2>
                <nav className="seo-related" aria-label={page.lang === 'en' ? 'Related pages' : 'Páginas relacionadas'}>
                  {page.related.map((path) => (
                    <a key={path} href={path}>
                      {titleFor(path)} →
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
