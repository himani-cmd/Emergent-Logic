import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Building2, CheckCircle, ClipboardList, MailCheck, Route, BarChart3, Wrench } from 'lucide-react';

export const metadata = {
  title: 'Property Management CRM Consulting Canada',
  description: 'CRM consulting for property managers in Canada: owner inquiry routing, rental evaluation follow-up, HubSpot setup, automation, and reporting.',
  alternates: { canonical: 'https://www.emergent-logic.ca/property-management-crm-consulting-canada' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Property Management CRM Consulting Canada | Emergent Logic',
    description: 'CRM consulting for property management companies that need cleaner owner inquiry routing, faster follow-up, and better pipeline visibility.',
    url: 'https://www.emergent-logic.ca/property-management-crm-consulting-canada',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const problems = [
  'Rental evaluation forms land in a shared inbox with no clear owner',
  'Owner leads, tenant messages, and maintenance requests get mixed together',
  'Follow-up depends on memory instead of tasks, stages, and next dates',
  'Website leads are captured, but not routed into a usable CRM pipeline',
  'Reports show activity, but not which owner opportunities are still warm',
];

const services = [
  { icon: Route, title: 'Lead Routing', desc: 'Route owner inquiries, referral leads, rental evaluations, and website forms into the right CRM pipeline with clear ownership.' },
  { icon: MailCheck, title: 'Follow-Up Workflows', desc: 'Create task-based follow-up so high-intent inquiries do not disappear in email, voicemail, or team chat.' },
  { icon: ClipboardList, title: 'Pipeline Design', desc: 'Define practical stages for new owner acquisition, proposal follow-up, onboarding, and lost/no-fit opportunities.' },
  { icon: BarChart3, title: 'Reporting', desc: 'Build dashboards that show inquiry source, response status, active opportunities, and follow-up gaps.' },
  { icon: Wrench, title: 'CRM Cleanup', desc: 'Clean duplicate contacts, old owner records, inconsistent source fields, and broken workflow logic before adding automation.' },
  { icon: Building2, title: 'Lead Capture Support', desc: 'Connect website forms and landing pages to the CRM so every inquiry has context, source, owner, and next step.' },
];

const faqs = [
  { q: 'Which CRM works best for property management companies?', a: 'For many property management teams, HubSpot is a strong fit because forms, email, tasks, pipelines, and reporting can be connected quickly. Salesforce or Zoho can also work when the team needs more customization or already has those systems in place.' },
  { q: 'Can you connect rental evaluation forms to HubSpot?', a: 'Yes. We can route rental evaluation forms, contact forms, and consultation requests into HubSpot or another CRM with source tracking, owner assignment, tasks, and follow-up stages.' },
  { q: 'Do you replace property management software?', a: 'No. We do not replace operational tools used for tenants, maintenance, or accounting. We focus on the sales and intake side: owner acquisition, lead routing, follow-up, CRM visibility, and reporting.' },
  { q: 'Can this be done remotely?', a: 'Yes. We are based in Surrey, BC and work remotely with property management companies across Canada and the US.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/property-management-crm-consulting-canada#service',
      name: 'Property Management CRM Consulting',
      serviceType: 'CRM consulting, lead routing, CRM cleanup, automation, and reporting for property management companies',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/property-management-crm-consulting-canada',
      areaServed: [{ '@type': 'Country', name: 'Canada' }, { '@type': 'Country', name: 'United States' }],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/property-management-crm-consulting-canada#faq',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function PropertyManagementCrmConsultingCanada() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services/crm-implementation' },
            { label: 'Property Management CRM Consulting', href: '/property-management-crm-consulting-canada' },
          ]} />
          <div className="text-blue-200 text-sm mb-4">Property management CRM consulting</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            CRM Consulting for Property Management Companies
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            We help property management companies route owner inquiries, rental evaluation forms, referrals, and website leads into a CRM workflow your team can actually follow. Cleaner intake, faster follow-up, clearer reporting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a CRM Consultation" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-950 hover:bg-blue-100 font-semibold px-8">
                  Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/contact">
              <Button size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8">
                Contact Us
              </Button>
            </Link>
            <Link href="/lead-follow-up-audit">
              <Button size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8">
                Get a 5-Point Follow-Up Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The lead problem is usually a routing problem</h2>
          <p className="text-lg text-gray-600 mb-4">
            Property management teams are busy by nature. New owner inquiries arrive beside tenant requests, maintenance updates, vendor messages, phone calls, referrals, and email threads. When those channels are not connected to one CRM process, high-value owner opportunities are easy to miss.
          </p>
          <p className="text-lg text-gray-600">
            Our work is focused on the revenue side of the operation. We help define how owner inquiries are captured, assigned, followed up, reported, and eventually converted into managed properties.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common CRM gaps we fix</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem) => (
              <div key={problem} className="flex items-start gap-3 bg-white border rounded-xl p-5">
                <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What we build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
              <Card key={item.title} className="border-0 shadow-lg">
                <CardHeader>
                  <item.icon className="w-8 h-8 text-blue-700 mb-2" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-gray-600">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/property-management-lead-follow-up-crm" className="block bg-white border rounded-xl p-5 hover:shadow-md transition-shadow"><p className="font-semibold text-blue-800">Property management follow-up guide</p><p className="text-sm text-gray-600 mt-1">Why CRM routing matters after the inquiry.</p></Link>
            <Link href="/case-studies/property-management-rental-inquiry-routing" className="block bg-white border rounded-xl p-5 hover:shadow-md transition-shadow"><p className="font-semibold text-blue-800">Property management routing implementation pattern</p><p className="text-sm text-gray-600 mt-1">A practical implementation pattern for owner inquiries, rental evaluations, and referrals.</p></Link>
            <Link href="/services/crm-implementation" className="block bg-white border rounded-xl p-5 hover:shadow-md transition-shadow"><p className="font-semibold text-blue-800">CRM implementation</p><p className="text-sm text-gray-600 mt-1">Pipelines, automation, dashboards, and training.</p></Link>
            <Link href="/lead-follow-up-audit" className="block bg-white border rounded-xl p-5 hover:shadow-md transition-shadow"><p className="font-semibold text-blue-800">5-point lead follow-up audit</p><p className="text-sm text-gray-600 mt-1">A practical review of one owner inquiry path.</p></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.q} className="border-0 shadow-lg">
                <CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">{faq.a}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-950 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Want cleaner owner inquiry follow-up?</h2>
          <p className="text-white/75 mb-8">We can review your website forms, inbox flow, CRM routing, and reporting in one focused strategy call.</p>
          <TrackedCTA ctaName="Book a CRM Consultation" destination="calendly">
            <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-950 hover:bg-blue-100">Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </a>
          </TrackedCTA>
          <Link href="/lead-follow-up-audit" className="inline-flex mt-4 text-blue-100 hover:text-white underline underline-offset-4">
            Or request a free 5-point lead follow-up audit
          </Link>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
