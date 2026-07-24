export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

export function trackWhatsAppClick(eventName) {
  trackEvent(eventName, {
    event_category: 'whatsapp',
    event_label: eventName.replace(/^whatsapp_click_/, '').replaceAll('_', '-'),
  });
}
