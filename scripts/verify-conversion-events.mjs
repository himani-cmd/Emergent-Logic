import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const analyticsPath = path.join(root, 'lib', 'analytics.js');
const providerPath = path.join(root, 'components', 'AnalyticsProvider.jsx');
const contactPath = path.join(root, 'app', 'contact', 'page.js');

const analytics = fs.readFileSync(analyticsPath, 'utf8');
const provider = fs.readFileSync(providerPath, 'utf8');
const contact = fs.readFileSync(contactPath, 'utf8');

const checks = [
  {
    passed: analytics.includes("trackEvent('generate_lead'") && contact.includes('trackLeadGeneration'),
    message: 'Confirmed contact-form leads must emit generate_lead.',
  },
  {
    passed:
      analytics.includes("trackEvent('consultation_booking_started'") &&
      provider.includes('trackConsultationBookingStarted'),
    message: 'Calendly links must emit consultation_booking_started.',
  },
  {
    passed: !analytics.includes("trackEvent('appointment_booked'") && !provider.includes('appointment_booked'),
    message: 'An external Calendly click must not be recorded as a confirmed appointment.',
  },
  {
    passed:
      !analytics.includes('transcript:') &&
      !analytics.includes('email_address:') &&
      !analytics.includes('phone_number:'),
    message: 'Analytics helpers must not include consultation content or contact details.',
  },
];

const failures = checks.filter((check) => !check.passed);

if (failures.length > 0) {
  failures.forEach((failure) => console.error(`- ${failure.message}`));
  process.exit(1);
}

console.log('Conversion-event audit passed.');
