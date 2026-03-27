// GA4 Analytics Helper Functions
// Measurement ID: G-X9XYP3H4E5

export const GA_MEASUREMENT_ID = 'G-X9XYP3H4E5';

// Safe gtag wrapper — never breaks the site if GA is unavailable
function gtag() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag.apply(null, arguments);
  }
}

// Generic event tracker
export function trackEvent(eventName, params = {}) {
  gtag('event', eventName, params);
}

// CTA click tracking
export function trackCTAClick({ ctaName, location, destination }) {
  trackEvent('cta_click', {
    cta_name: ctaName,
    location: location,
    destination: destination,
  });
}

// Lead generation tracking (contact form success)
export function trackLeadGeneration({ formName, location, leadSource }) {
  trackEvent('generate_lead', {
    form_name: formName,
    location: location,
    lead_source: leadSource,
  });
}

// Phone click tracking
export function trackPhoneClick({ location, phoneNumber }) {
  trackEvent('phone_click', {
    location: location,
    phone_number: phoneNumber,
  });
}

// Email click tracking
export function trackEmailClick({ location, email }) {
  trackEvent('email_click', {
    location: location,
    email: email,
  });
}
