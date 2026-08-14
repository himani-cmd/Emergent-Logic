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

const voiceEventNames = new Set([
  'voice_prompt_shown',
  'voice_panel_opened',
  'voice_start_clicked',
  'voice_connected',
  'voice_consultation_prepared',
  'voice_contact_handoff',
  'voice_ended',
  'voice_error',
]);

// Voice analytics allow only operational metadata. Never send transcript,
// contact details, names, or business-specific consultation content.
export function trackVoiceEvent(eventName, params = {}) {
  if (!voiceEventNames.has(eventName)) return;

  const allowedKeys = ['location', 'trigger', 'reason', 'state', 'phase'];
  const safeParams = {};

  allowedKeys.forEach((key) => {
    if (typeof params[key] === 'string' && params[key].length <= 80) {
      safeParams[key] = params[key];
    }
  });

  trackEvent(eventName, safeParams);
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

const leadFormEventNames = new Set([
  'lead_form_started',
  'lead_form_submit_attempted',
  'lead_form_error',
]);

// Lead-form events contain funnel metadata only. Never include field values or PII.
export function trackLeadFormEvent(eventName, { formName, location, leadSource, reason = '' }) {
  if (!leadFormEventNames.has(eventName)) return;

  const safeParams = {
    form_name: String(formName || '').slice(0, 80),
    location: String(location || '').slice(0, 120),
    lead_source: String(leadSource || '').slice(0, 80),
  };

  if (reason) {
    safeParams.reason = String(reason).slice(0, 80);
  }

  trackEvent(eventName, safeParams);
}

// Tracks booking intent only. A Calendly click is not a confirmed appointment.
export function trackConsultationBookingStarted({ location }) {
  trackEvent('consultation_booking_started', {
    location: location,
    destination: 'calendly',
  });
}

const calendlyEventNames = new Set([
  'consultation_booking_widget_viewed',
  'consultation_booking_time_selected',
  'consultation_booking_completed',
]);

// Calendly embed messages contain scheduling state, not invitee details.
// Keep GA4 parameters limited to operational metadata.
export function trackCalendlyEvent(eventName, { location }) {
  if (!calendlyEventNames.has(eventName)) return;

  trackEvent(eventName, {
    location,
    booking_provider: 'calendly',
    booking_type: '30_minute_meeting',
  });
}

// Phone click tracking
export function trackPhoneClick({ location }) {
  trackEvent('phone_click', {
    location: location,
  });
}

// Email click tracking
export function trackEmailClick({ location }) {
  trackEvent('email_click', {
    location: location,
  });
}

// Resource downloads contain operational metadata only, never form values or PII.
export function trackResourceDownload({ resourceName, resourceType, location }) {
  trackEvent('resource_download', {
    resource_name: resourceName,
    resource_type: resourceType,
    location,
  });
}
