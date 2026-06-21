import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Zap, BarChart3, Settings, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'HubSpot Consultant Surrey BC | CRM Setup, Workflows & Reporting',
  description: 'HubSpot consultant in Surrey, BC for CRM setup, Sales Hub, Marketing Hub, workflows, reporting, data cleanup, and team training. AI-accelerated delivery for Canadian SMBs.',
  alternates: { canonical: 'https://www.emergent-logic.ca/hubspot-consultant-surrey-bc' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'HubSpot Consultant Surrey BC | Emergent Logic',
    description: 'HubSpot consulting for Surrey and Greater Vancouver businesses. CRM setup, workflows, reporting, integrations, cleanup, and training.',
    url: 'https://www.emergent-logic.ca/hubspot-consultant-surrey-bc',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const services = [
  { icon: Settings, title: 'HubSpot CRM Setup', desc: 'Portal settings, users, permissions, properties, lifecycle stages, pipelines, task queues, and meeting links configured around your actual sales process.' },
  { icon: Zap, title: 'Workflow Automation', desc: 'Lead assignment, follow-up reminders, MQL handoff, internal notifications, deal stage automation, nurture workflows, and re-engagement sequences.' },
  { icon: BarChart3, title: 'Reporting & Dashboards', desc: 'Pipeline, revenue, activity, campaign attribution, and source reporting that your founder, sales lead, and marketing team can trust.' },
  { icon: RefreshCw, title: 'Migration & Cleanup', desc: 'Clean migration from spreadsheets, Salesforce, Pipedrive, Zoho, or legacy tools with deduplication, field mapping, and data quality checks.' },
];

const faqs = [
  { q: 'Do you work with HubSpot businesses in Surrey only?', a: 'We are based in Surrey, BC and work with businesses across Greater Vancouver and Canada. Most HubSpot projects can be delivered remotely, but local teams can also book working sessions when needed.' },
  { q: 'How much does HubSpot consulting cost?', a: 'HubSpot consulting projects typically start around $1,500 CAD for focused setup or cleanup work. Larger CRM, automation, reporting, and migration projects are scoped at a fixed price after discovery.' },
  { q: 'Can you fix an existing HubSpot portal?', a: 'Yes. Many teams come to us after HubSpot was partially set up by an internal team, freelancer, or previous agency. We audit the portal, clean the data, rebuild workflows, and document the system.' },
  { q: 'Do you also support Marketing Hub?', a: 'Yes. We configure Marketing Hub forms, lists, workflows, email campaigns, lead scoring, campaign attribution, and handoff rules so marketing activity connects back to CRM outcomes.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/hubspot-consultant-surrey-bc#service',
      name: 'HubSpot Consultant Surrey BC',
      serviceType: 'HubSpot CRM consulting, setup, workflows, reporting, migration, and cleanup',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/hubspot-consultant-surrey-bc',
      areaServed: [
        { '@type': 'City', name: 'Surrey' },
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'AdministrativeArea', name: 'British Columbia' },
        { '@type': 'Country', name: 'Canada' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/hubspot-consultant-surrey-bc#faq',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function HubSpotConsultantSurrey() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-900 via-amber-900 to-violet-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'HubSpot Consultant Surrey', href: '/hubspot-consultant-surrey-bc' },
          ]} />
          <div className="flex items-center gap-2 text-orange-200 mb-4"><MapPin className="w-5 h-5" /><span>Surrey, BC</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">HubSpot Consultant in Surrey, BC</h1>
          <p className="text-xl text-white/75 max-w-3xl mb-8">
            We help Surrey and Greater Vancouver businesses set up HubSpot properly: CRM structure, Sales Hub, Marketing Hub, workflows, reporting, cleanup, and training. The goal is not more software. The goal is cleaner follow-up, better visibility, and a CRM your team actually uses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-white text-orange-900 hover:bg-orange-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
            <Link href="/services/hubspot-consulting"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">View HubSpot Services</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">HubSpot should make follow-up easier, not messier</h2>
          <p className="text-lg text-gray-600 mb-4">
            HubSpot is simple at the surface, but serious revenue operations need more than contact storage. If pipelines are vague, lifecycle stages are unclear, workflows are half-built, and reporting is not trusted, your team quietly goes back to spreadsheets.
          </p>
          <p className="text-lg text-gray-600">
            Emergent Logic builds HubSpot around the way your business actually sells. We map the process first, then configure the portal so leads are captured, routed, followed up, reported on, and nurtured without everyone guessing what should happen next.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What we configure in HubSpot</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader><service.icon className="w-8 h-8 text-orange-600 mb-2" /><CardTitle className="text-lg">{service.title}</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">{service.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Surrey businesses call us</h2>
          <div className="space-y-4">
            {[
              'You bought HubSpot but are using only a small fraction of it',
              'Your forms, emails, deals, and reports are not connected cleanly',
              'Sales and marketing disagree on lead quality or ownership',
              'You need a local, practical HubSpot consultant without generic agency fluff',
              'You want fixed-scope implementation, cleanup, and training in weeks, not months',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" /><p className="text-gray-700">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">HubSpot Consulting FAQ — Surrey, BC</h2>
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
            <Link href="/services/hubspot-consulting" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-orange-700">HubSpot Consulting</p><p className="text-sm text-gray-600">Full service scope, pricing, and timeline</p></Link>
            <Link href="/blog/hubspot-consultant-vancouver" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-orange-700">HubSpot Consultant Vancouver</p><p className="text-sm text-gray-600">What to look for before hiring</p></Link>
            <Link href="/contact" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-orange-700">Contact Emergent Logic</p><p className="text-sm text-gray-600">Prefer email? Send us a message</p></Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
