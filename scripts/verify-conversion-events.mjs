import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const analyticsPath = path.join(root, 'lib', 'analytics.js');
const providerPath = path.join(root, 'components', 'AnalyticsProvider.jsx');
const contactPath = path.join(root, 'app', 'contact', 'page.js');
const workbookPath = path.join(root, 'components', 'WorkbookDownload.jsx');
const hubspotFormPath = path.join(root, 'components', 'HubSpotImplementationLeadForm.jsx');
const apiPath = path.join(root, 'app', 'api', '[[...path]]', 'route.js');

const analytics = fs.readFileSync(analyticsPath, 'utf8');
const provider = fs.readFileSync(providerPath, 'utf8');
const contact = fs.readFileSync(contactPath, 'utf8');
const workbookDownload = fs.readFileSync(workbookPath, 'utf8');
const hubspotForm = fs.readFileSync(hubspotFormPath, 'utf8');
const api = fs.readFileSync(apiPath, 'utf8');

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
    passed:
      provider.includes('window.dataLayer = window.dataLayer || []') &&
      provider.includes('window.gtag =') &&
      provider.includes('window.__emergentGa4Initialized') &&
      !provider.includes('<Script id="ga4-init"'),
    message: 'Consent must initialize the GA4 queue in client code before conversion events fire.',
  },
  {
    passed:
      analytics.includes("'consultation_booking_completed'") &&
      contact.includes("'calendly.event_scheduled': 'consultation_booking_completed'") &&
      contact.includes("event.origin !== 'https://calendly.com'") &&
      contact.includes('trackedCalendlyEvents'),
    message: 'A verified, deduplicated Calendly embed completion must emit consultation_booking_completed.',
  },
  {
    passed: !analytics.includes("trackEvent('appointment_booked'") && !provider.includes('appointment_booked'),
    message: 'An external Calendly click must not be recorded as a confirmed appointment.',
  },
  {
    passed:
      hubspotForm.includes("formName: 'hubspot_implementation_form'") &&
      hubspotForm.includes('trackLeadGeneration'),
    message: 'The HubSpot paid landing form must emit generate_lead only after an accepted response.',
  },
  {
    passed:
      ['gclid', 'gbraid', 'wbraid'].every((field) =>
        hubspotForm.includes(field) && api.includes(`${field}: cleanCampaignValue`)
      ),
    message: 'The HubSpot landing page must preserve Google click identifiers through the server receipt.',
  },
  {
    passed:
      !analytics.includes('transcript:') &&
      !analytics.includes('email_address:') &&
      !analytics.includes('phone_number:') &&
      !contact.includes('event.data?.payload'),
    message: 'Analytics helpers must not include consultation content or contact details.',
  },
  {
    passed:
      analytics.includes("trackEvent('resource_download'") &&
      workbookDownload.includes('trackResourceDownload') &&
      workbookDownload.includes("resourceType: 'xlsx'") &&
      !workbookDownload.includes('email_address') &&
      !workbookDownload.includes('phone_number'),
    message: 'Workbook downloads must emit a non-PII resource_download event.',
  },
];

const failures = checks.filter((check) => !check.passed);

if (failures.length > 0) {
  failures.forEach((failure) => console.error(`- ${failure.message}`));
  process.exit(1);
}

console.log('Conversion-event audit passed.');
