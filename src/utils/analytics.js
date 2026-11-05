export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  if (window.gtag) {
    window.gtag('event', eventName, params);
  }

  if (window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...params });
  }
};

export const trackPageView = (pageTitle = 'Portfolio') => {
  if (typeof window === 'undefined') return;

  const pagePath = window.location.pathname + window.location.search;

  if (window.gtag) {
    window.gtag('config', 'G-ZC2GRKTHR9', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};
