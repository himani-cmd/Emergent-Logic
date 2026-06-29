import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Award, Clock, Percent } from 'lucide-react';

export const metadata = {
  title: 'Salesforce Consultant Surrey BC',
  description: "Salesforce consultant in Surrey, BC. CRM implementation, cleanup, workflow automation, reporting, and optimization for Canadian and US small businesses.",
  alternates: { canonical: 'https://www.emergent-logic.ca/salesforce-consultant-surrey-bc' },
  openGraph: {
    title: 'Salesforce Consultant Surrey BC | Emergent Logic',
    description: 'Salesforce consulting in Surrey, BC: implementation, cleanup, workflow automation, reporting, and optimization.',
    url: 'https://www.emergent-logic.ca/salesforce-consultant-surrey-bc',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const services = [
  { title: 'Salesforce Sales Cloud', description: 'Pipeline management, lead tracking, opportunity forecasting, and custom dashboards for your Surrey-based sales team.' },
  { title: 'Salesforce Service Cloud', description: 'Case management, knowledge base, and customer portal setup for service-oriented businesses in the Surrey area.' },
  { title: 'HubSpot CRM Implementation', description: 'Full CRM setup including pipelines, automation, email sequences, and reporting. Ideal for growing Surrey SMBs.' },
  { title: 'HubSpot Marketing Hub', description: 'Marketing automation, lead nurturing, landing pages, and email campaigns — all connected to your CRM.' },
  { title: 'Data Migration', description: 'Clean migration from spreadsheets, legacy CRMs, or other systems into Salesforce or HubSpot. No data left behind.' },
  { title: 'Training & Adoption', description: 'Hands-on, role-specific training so your team actually uses the CRM. We are local in Surrey for in-person sessions.' },
];

const reasons = [
  'We are based in Surrey — with remote delivery for Canadian and US teams',
  'Senior CRM implementation experience across Salesforce, HubSpot, and Zoho',
  'AI-accelerated delivery helps shorten implementation and cleanup timelines',
  'We implement both Salesforce AND HubSpot — we recommend what fits, not what pays us more',
  'Clear fixed-scope projects instead of open-ended agency retainers',
  'Free 30-minute strategy call with no obligation or sales pressure',
];

const faqs = [
  { q: 'How much does a Salesforce consultant cost in Surrey, BC?', a: 'Salesforce consulting costs depend on whether you need cleanup, optimization, migration, or a new implementation. Emergent Logic scopes projects up front so you understand the likely budget before work begins.' },
  { q: 'How long does Salesforce implementation take?', a: 'Focused Salesforce cleanup and optimization projects can often move in weeks. New implementations usually take longer depending on data migration, custom objects, automation, and integrations.' },
  { q: 'Do you also implement HubSpot?', a: 'Yes. Emergent Logic implements both Salesforce and HubSpot. We recommend the right platform based on your business needs, not our preferences. Many Surrey businesses choose HubSpot for its ease of use and integrated marketing tools.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/salesforce-consultant-surrey-bc#service',
      name: 'Salesforce Consultant Surrey BC',
      serviceType: 'Salesforce consulting, CRM implementation, CRM cleanup, workflow automation, reporting, and training',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/salesforce-consultant-surrey-bc',
      areaServed: [
        { '@type': 'City', name: 'Surrey' },
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'AdministrativeArea', name: 'British Columbia' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/salesforce-consultant-surrey-bc#faq',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
};

export default function SalesforceConsultantSurrey() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      
      {/* Hero */}
      <section className="overflow-hidden pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'Salesforce Consultant Surrey', href: '/salesforce-consultant-surrey-bc' },
          ]} />
          <div className="flex items-center gap-2 text-violet-300 mb-4">
            <MapPin className="w-5 h-5" />
            <span>Surrey, BC</span>
          </div>
          <h1 className="max-w-4xl break-words text-4xl font-bold leading-tight tracking-tight text-white mb-4 md:text-5xl">
            Salesforce & HubSpot Consultant in Surrey, BC
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/75 mb-8 md:text-xl">
            Looking for a Salesforce consultant in Surrey, BC? Emergent Logic helps growing teams clean up, implement, and improve CRM systems across Salesforce, HubSpot, and Zoho. We use AI-assisted delivery to move faster while keeping the strategy and quality control human-led.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <TrackedCTA ctaName="Book a Free Strategy Call" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"><Button size="lg" className="w-full bg-white text-violet-900 hover:bg-violet-100 sm:w-auto">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
            </TrackedCTA>
            <Link href="/services/crm-implementation" className="w-full sm:w-auto"><Button size="lg" variant="outline" className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto">View CRM Services</Button></Link>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center"><div className="flex items-center justify-center gap-2 text-white mb-1"><Award className="w-5 h-5 text-violet-400" /><span className="text-3xl font-bold">3</span></div><div className="text-white/60 text-sm">CRM Platforms</div></div>
            <div className="text-center"><div className="flex items-center justify-center gap-2 text-white mb-1"><Clock className="w-5 h-5 text-violet-400" /><span className="text-3xl font-bold">Weeks</span></div><div className="text-white/60 text-sm">Focused Sprints</div></div>
            <div className="text-center"><div className="flex items-center justify-center gap-2 text-white mb-1"><Percent className="w-5 h-5 text-violet-400" /><span className="text-3xl font-bold">Fixed</span></div><div className="text-white/60 text-sm">Scope Options</div></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What we do for Surrey businesses</h2>
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Surrey businesses choose Emergent Logic</h2>
          <ul className="space-y-4 max-w-3xl">
            {reasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-violet-500 flex-shrink-0" /><span className="text-gray-700">{reason}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Not sure which CRM is right?</h2>
          <p className="text-gray-600 mb-4">Read our detailed comparison to help you decide: <Link href="/blog/hubspot-vs-salesforce-canada" className="text-violet-600 hover:underline">HubSpot vs Salesforce: Which CRM is Right for Your Canadian Business?</Link></p>
          <p className="text-gray-600">Or learn more about our full <Link href="/services/salesforce-consulting" className="text-violet-600 hover:underline">Salesforce consulting service</Link> and <Link href="/services/crm-implementation" className="text-violet-600 hover:underline">CRM implementation services</Link>.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Salesforce Consulting FAQ — Surrey, BC</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">{faq.a}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to talk Salesforce or HubSpot?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free 30-minute strategy call. We will assess your CRM needs and recommend the right path — no obligation, no sales pitch.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
