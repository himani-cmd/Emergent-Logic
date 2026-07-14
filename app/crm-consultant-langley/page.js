import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';

export const metadata = {
  title: 'CRM Consultant Langley BC',
  description: 'CRM consulting in Langley BC for Salesforce, HubSpot, and Zoho implementation, cleanup, reporting, and automation planning.',
  alternates: { canonical: 'https://www.emergent-logic.ca/crm-consultant-langley' },
  openGraph: {
    title: 'CRM Consultant Langley BC | Emergent Logic',
    description: 'CRM consulting in Langley BC for Salesforce, HubSpot, and Zoho implementation, cleanup, reporting, and automation planning.',
    url: 'https://www.emergent-logic.ca/crm-consultant-langley',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const platforms = ['Salesforce', 'HubSpot', 'Zoho CRM', 'Odoo', 'Pipedrive', 'Monday CRM', 'ActiveCampaign', 'Freshsales', 'Copper', 'Close CRM'];

const services = [
  { title: 'CRM Implementation', description: 'Full CRM setup including pipelines, custom fields, automations, dashboards, and team training. Tailored for Langley businesses.' },
  { title: 'Data Migration', description: 'Controlled migration from spreadsheets, legacy CRMs, or other supported sources with mapping, test imports, validation, and approval.' },
  { title: 'Marketing Automation', description: 'Email sequences, lead nurturing workflows, and campaign automation connected directly to your CRM.' },
  { title: 'Integrations', description: 'Connect supported accounting, commerce, email, website, and scheduling tools to the CRM after technical fit is confirmed.' },
  { title: 'Training & Adoption', description: 'Hands-on, role-specific training and a documented handoff for the team.' },
  { title: 'Ongoing Support', description: 'Monthly retainer options to keep your CRM healthy, your automations running, and your data clean.' },
];

const reasons = [
  'Local CRM consulting firm serving Langley and the Greater Vancouver region',
  'Multi-platform planning across HubSpot, Salesforce, and Zoho',
  'AI-assisted audits and documentation with human approval for production changes',
  'Written scope, price, dependencies, and acceptance criteria before work starts',
  'Data migration, integration, and training available when included in the scope',
  'Project delivery with optional ongoing support',
];

const faqs = [
  { q: 'Which CRM is best for Langley businesses?', a: 'For most Langley SMBs, HubSpot or Zoho CRM are great starting points — they are fast to implement, intuitive, and affordable. Larger or more complex businesses often benefit from Salesforce. We recommend based on your needs.' },
  { q: 'How much does CRM consulting cost in Langley?', a: 'Pricing is confirmed after discovery. The written proposal defines deliverables, exclusions, dependencies, approval points, and the commercial terms before work begins.' },
  { q: 'How long does a CRM implementation take?', a: 'Timing depends on data volume, integrations, stakeholder availability, testing, and acceptance criteria. The delivery plan and dependencies are documented before work begins.' },
  { q: 'Can you migrate data from our old CRM?', a: 'Data migration can be included when the source is supported. The plan covers backups, field mapping, test imports, validation, rollback, and approval before production migration.' },
];

export default function CrmConsultantLangley() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="overflow-hidden pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/#services' },
            { label: 'CRM Consultant Langley', href: '/crm-consultant-langley' },
          ]} />
          <div className="flex items-center gap-2 text-violet-300 mb-4"><MapPin className="w-5 h-5" /><span>Langley, BC</span></div>
          <h1 className="max-w-4xl break-words text-4xl md:text-5xl font-bold leading-tight text-white mb-4">CRM Consultant in Langley, BC</h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/75 max-w-3xl mb-8">
            CRM implementation, cleanup, and automation planning for Langley businesses using HubSpot, Salesforce, or Zoho. Each proposal defines the scope, price, delivery plan, dependencies, and approval boundaries.
          </p>
          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"><Button size="lg" className="w-full bg-white text-violet-900 hover:bg-violet-100 sm:w-auto">Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
            <Link href="/#services" className="w-full sm:w-auto"><Button size="lg" variant="outline" className="w-full !border-white/40 !bg-transparent !text-white hover:!bg-white/10 hover:!text-white sm:w-auto">View All Services</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CRM platforms we implement in Langley</h2>
          <p className="text-gray-600 mb-8">We compare platforms against the operating process, data, reporting, administration, budget, and integration requirements discussed during discovery.</p>
          <div className="flex flex-wrap gap-4">
            {platforms.map((platform, i) => (<div key={i} className="px-6 py-3 bg-gray-50 rounded-xl border font-medium text-gray-700">{platform}</div>))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What we do for Langley businesses</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Emergent Logic may fit a Langley CRM project</h2>
          <ul className="space-y-4 max-w-3xl">
            {reasons.map((reason, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-violet-500 flex-shrink-0" /><span className="text-gray-700">{reason}</span></li>))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">CRM Consulting FAQ — Langley, BC</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq, i) => (<Card key={i} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{faq.a}</p></CardContent></Card>))}
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
            <Link href="/blog/what-is-crm-implementation-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">What is CRM Implementation?</p>
              <p className="text-gray-600 text-sm">A step-by-step guide for Canadian SMBs</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to find the right CRM for your Langley business?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free 30-minute strategy call. We will assess your needs and recommend the right CRM platform — no obligation, no sales pitch.</p>
          <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
