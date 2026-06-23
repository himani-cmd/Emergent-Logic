import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Database, Zap, BarChart3, Users, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'CRM Implementation Canada | HubSpot, Salesforce & Zoho Setup',
  description: 'CRM implementation for Canadian businesses. HubSpot, Salesforce, and Zoho setup with pipelines, automation, dashboards, data migration, training, and fixed-scope delivery.',
  alternates: { canonical: 'https://www.emergent-logic.ca/crm-implementation-canada' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Implementation Canada | Emergent Logic',
    description: 'AI-accelerated CRM implementation for Canadian SMBs using HubSpot, Salesforce, or Zoho.',
    url: 'https://www.emergent-logic.ca/crm-implementation-canada',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const included = [
  { icon: Database, title: 'Pipeline & Data Model', desc: 'Deal stages, contact/company properties, lifecycle definitions, required fields, and clean ownership rules.' },
  { icon: Zap, title: 'Automation', desc: 'Lead routing, task creation, follow-up reminders, internal notifications, nurture workflows, and stage automation.' },
  { icon: BarChart3, title: 'Dashboards', desc: 'Revenue, pipeline, activity, attribution, forecast, and owner-level reporting built around decisions your team actually makes.' },
  { icon: Users, title: 'Training & Adoption', desc: 'Role-specific training for founders, sales reps, marketers, admins, and managers so the CRM becomes a daily system.' },
  { icon: ShieldCheck, title: 'Migration & QA', desc: 'Deduplication, field mapping, test imports, validation, rollback planning, and post-launch support.' },
];

const faqs = [
  { q: 'Which CRM should we implement?', a: 'For many Canadian SMBs, HubSpot is the fastest path to value. Salesforce is better for deeper customization, larger teams, or complex governance. Zoho can be a strong budget-conscious option. We recommend based on fit, not vendor preference.' },
  { q: 'How long does CRM implementation take?', a: 'Focused SMB implementations usually take 2 to 4 weeks. More complex migrations, integrations, and multi-team rollouts can take longer, but we define the timeline before starting.' },
  { q: 'Do you migrate data from spreadsheets or an old CRM?', a: 'Yes. We migrate from spreadsheets, HubSpot, Salesforce, Zoho, Pipedrive, Monday, and other tools. Cleanup and field mapping are part of the implementation plan.' },
  { q: 'Do you support businesses outside BC?', a: 'Yes. Emergent Logic is based in Surrey, BC and supports businesses across Canada. CRM implementation can be delivered remotely with working sessions, screen shares, and documented handoff.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/crm-implementation-canada#service',
      name: 'CRM Implementation Canada',
      serviceType: 'CRM implementation, HubSpot setup, Salesforce setup, Zoho setup, data migration, automation, dashboards, and training',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/crm-implementation-canada',
      areaServed: { '@type': 'Country', name: 'Canada' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/crm-implementation-canada#faq',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function CRMImplementationCanada() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'CRM Implementation Canada', href: '/crm-implementation-canada' },
          ]} />
          <div className="flex items-center gap-2 text-violet-200 mb-4"><CheckCircle className="w-5 h-5" /><span>HubSpot, Salesforce, Zoho</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CRM Implementation for Canadian Businesses</h1>
          <p className="text-xl text-white/75 max-w-3xl mb-8">
            We implement HubSpot, Salesforce, and Zoho for Canadian SMBs that need cleaner follow-up, better pipeline visibility, and a system their team will actually use. Strategy, setup, migration, automation, reporting, and training are handled in one fixed-scope project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
            <Link href="/services/crm-implementation"><Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">View CRM Service</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation is not just installing software</h2>
          <p className="text-lg text-gray-600 mb-4">
            A CRM only works when it reflects how your team sells, follows up, reports, and hands work between people. Default pipelines and generic templates usually create extra admin work instead of clarity.
          </p>
          <p className="text-lg text-gray-600">
            Our implementation process starts with the operating model: what counts as a lead, who owns it, when follow-up happens, what stages matter, what leadership needs to see, and which manual steps should disappear. Then we configure the software.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {included.map((item, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader><item.icon className="w-8 h-8 text-violet-600 mb-2" /><CardTitle className="text-lg">{item.title}</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who this is for</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Founders moving from spreadsheets to a real sales system',
              'Sales teams that need pipeline visibility and consistent follow-up',
              'Marketing teams that need forms, campaigns, and CRM handoff connected',
              'Businesses switching from one CRM to another',
              'Teams with a stalled implementation that needs to be finished properly',
              'Companies that want fixed-scope delivery instead of open-ended hourly consulting',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-violet-50 border border-violet-100 p-4 rounded-xl"><CheckCircle className="w-5 h-5 text-violet-700 flex-shrink-0 mt-0.5" /><p className="text-gray-700">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">CRM Implementation FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <Card key={i} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{faq.a}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/crm-implementation" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-violet-700">CRM Implementation Service</p><p className="text-sm text-gray-600">Detailed scope, timeline, and pricing</p></Link>
            <Link href="/blog/what-is-crm-implementation-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-violet-700">CRM Implementation Guide</p><p className="text-sm text-gray-600">Step-by-step explanation for Canada</p></Link>
            <Link href="/contact" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-violet-700">Contact Emergent Logic</p><p className="text-sm text-gray-600">Ask about your implementation</p></Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
