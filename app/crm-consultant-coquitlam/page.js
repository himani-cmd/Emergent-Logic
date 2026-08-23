import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';

export const metadata = {
  title: 'CRM Consultant Coquitlam BC',
  description: 'CRM consulting in Coquitlam BC for Salesforce, HubSpot, and Zoho implementation, cleanup, reporting, and automation planning.',
  alternates: { canonical: 'https://www.emergent-logic.ca/crm-consultant-coquitlam' },
  openGraph: {
    title: 'CRM Consultant Coquitlam BC | Emergent Logic',
    description: 'CRM consulting in Coquitlam BC for Salesforce, HubSpot, and Zoho implementation, cleanup, reporting, and automation planning.',
    url: 'https://www.emergent-logic.ca/crm-consultant-coquitlam',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const platforms = ['Salesforce', 'HubSpot', 'Zoho CRM', 'Odoo', 'Pipedrive', 'Monday CRM', 'ActiveCampaign', 'Freshsales', 'Copper', 'Close CRM'];

const services = [
  { title: 'CRM Implementation', description: 'Full CRM setup including pipelines, custom fields, automations, dashboards, and team training. Tailored for Coquitlam businesses.' },
  { title: 'Data Migration', description: 'Controlled migration from spreadsheets, legacy CRMs, or other supported sources with mapping, test imports, validation, and approval.' },
  { title: 'Marketing Automation', description: 'Email sequences, lead nurturing workflows, and campaign automation connected directly to your CRM.' },
  { title: 'Integrations', description: 'Connect supported accounting, commerce, email, website, and scheduling tools to the CRM after technical fit is confirmed.' },
  { title: 'Training & Adoption', description: 'Hands-on, role-specific training and a documented handoff for the team.' },
  { title: 'Ongoing Support', description: 'Monthly retainer options to keep your CRM healthy, your automations running, and your data clean.' },
];

const reasons = [
  'CRM consulting available for Coquitlam, Port Coquitlam, Port Moody and the Tri-Cities',
  'Multi-platform planning across HubSpot, Salesforce, and Zoho',
  'AI-assisted audits and documentation with human approval for production changes',
  'Written scope, price, dependencies, and acceptance criteria before work starts',
  'Data migration, integration, and training available when included in the scope',
  'Project delivery with optional ongoing support',
];

const faqs = [
  { q: 'Which CRM is best for a Coquitlam business?', a: 'The responsible choice depends on the sales and service process, users, data, reporting, integrations, permissions, budget and internal administration. HubSpot, Salesforce, Zoho and other supported options should be compared against written requirements rather than a generic local ranking.' },
  { q: 'How much does CRM consulting cost in Coquitlam?', a: 'Pricing is confirmed after discovery. The written proposal defines deliverables, exclusions, dependencies, approval points, and the commercial terms before work begins.' },
  { q: 'Do you serve Port Coquitlam and Port Moody as well?', a: 'Yes. We serve the entire Tri-Cities area — Coquitlam, Port Coquitlam, and Port Moody — as well as the broader Greater Vancouver region including Surrey, Burnaby, and Richmond.' },
  { q: 'How long does a CRM implementation take?', a: 'Timing depends on data volume, integrations, stakeholder availability, testing, and acceptance criteria. The delivery plan and dependencies are documented before work begins.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.emergent-logic.ca/crm-consultant-coquitlam#webpage',
      url: 'https://www.emergent-logic.ca/crm-consultant-coquitlam',
      name: 'CRM Consultant Coquitlam BC',
      description: metadata.description,
      dateModified: '2026-08-22',
      isPartOf: { '@id': 'https://www.emergent-logic.ca/#website' },
      about: { '@id': 'https://www.emergent-logic.ca/crm-consultant-coquitlam#service' },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/crm-consultant-coquitlam#service',
      name: 'CRM Consulting in Coquitlam and the Tri-Cities',
      serviceType: 'Local CRM implementation, cleanup, reporting, integration and automation planning',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Coquitlam' },
        { '@type': 'City', name: 'Port Coquitlam' },
        { '@type': 'City', name: 'Port Moody' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/crm-consultant-coquitlam#faq',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

export default function CrmConsultantCoquitlam() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      
      <section className="overflow-hidden pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/#services' },
            { label: 'CRM Consultant Coquitlam', href: '/crm-consultant-coquitlam' },
          ]} tone="dark" />
          <div className="flex items-center gap-2 text-violet-300 mb-4"><MapPin className="w-5 h-5" /><span>Coquitlam, BC</span></div>
          <h1 className="max-w-4xl break-words text-4xl md:text-5xl font-bold leading-tight text-white mb-4">CRM Consultant in Coquitlam, BC</h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/75 max-w-3xl mb-8">
            CRM implementation, cleanup, and automation planning for Coquitlam and Tri-Cities businesses using HubSpot, Salesforce, or Zoho. Each proposal defines the scope, price, delivery plan, dependencies, and approval boundaries.
          </p>
          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap">
            <TrackedCTA ctaName="Coquitlam CRM Consultation" destination="calendly">
              <Button asChild size="lg" className="w-full bg-white text-violet-900 hover:bg-violet-100 sm:w-auto">
                <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">Book a CRM Consultation <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </TrackedCTA>
            <Button asChild size="lg" variant="outline" className="w-full !border-white/40 !bg-transparent !text-white hover:!bg-white/10 hover:!text-white sm:w-auto">
              <Link href="/#services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="mb-3 text-sm font-semibold text-violet-700">Last reviewed August 22, 2026</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What does a CRM consultant help a Coquitlam business fix?</h2>
          <p className="text-lg text-gray-700 mb-4">A Coquitlam CRM engagement can address unclear lead ownership, inconsistent follow-up, unreliable pipeline data, disconnected forms, weak reporting, migration risk and workflows the team no longer trusts. The work should begin with the operating process and evidence, then define which configuration, cleanup, integration or training changes are justified.</p>
          <p className="text-gray-600 mb-8">For a national implementation-partner comparison, use the <Link href="/crm-implementation-canada" className="font-medium text-violet-700 hover:underline">CRM implementation Canada guide</Link>. For broader Vancouver and Metro Vancouver guidance, use the <Link href="/crm-consultant-vancouver" className="font-medium text-violet-700 hover:underline">CRM consultant Vancouver page</Link>. This page is specifically for Coquitlam, Port Coquitlam and Port Moody service intent.</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">CRM platforms assessed for Tri-Cities projects</h3>
          <p className="text-gray-600 mb-8">We compare platforms against the operating process, data, reporting, administration, budget, and integration requirements discussed during discovery.</p>
          <div className="flex flex-wrap gap-4">
            {platforms.map((platform, i) => (<div key={i} className="px-6 py-3 bg-gray-50 rounded-xl border font-medium text-gray-700">{platform}</div>))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What we do for Coquitlam businesses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader><CardTitle className="text-lg">{service.title}</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">{service.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Emergent Logic may fit a Coquitlam CRM project</h2>
          <ul className="space-y-4 max-w-3xl">
            {reasons.map((reason, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-violet-500 flex-shrink-0" /><span className="text-gray-700">{reason}</span></li>))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">CRM Consulting FAQ — Coquitlam, BC</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (<Card key={faq.q} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{faq.a}</p></CardContent></Card>))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/crm-implementation" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Implementation</p>
              <p className="text-gray-600 text-sm">How controlled delivery works</p>
            </Link>
            <Link href="/blog/marketing-automation-needs-crm-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Marketing Automation Needs Cleanup First</p>
              <p className="text-gray-600 text-sm">Why automation fails without a clean CRM underneath</p>
            </Link>
            <Link href="/contact" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Get in Touch</p>
              <p className="text-gray-600 text-sm">Prefer email? Send us a message.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to find the right CRM for your Coquitlam business?</h2>
          <p className="text-xl text-white/80 mb-8">Use a 30-minute consultation to discuss the current CRM, operating problem, affected users and the evidence needed before a responsible scope can be proposed.</p>
          <TrackedCTA ctaName="Coquitlam CRM Final Consultation" destination="calendly">
            <Button asChild size="lg" className="bg-white text-violet-900 hover:bg-violet-100">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">Book a CRM Consultation <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </TrackedCTA>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
