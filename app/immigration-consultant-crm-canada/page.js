import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, FileText, Languages, MessageSquare, CalendarCheck, Workflow, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'CRM for Immigration Consultants Canada | Intake & Follow-Up Systems',
  description: 'CRM consulting for immigration consultants in Canada. Consultation intake, form routing, WhatsApp and email follow-up, HubSpot setup, automation, and reporting.',
  alternates: { canonical: 'https://www.emergent-logic.ca/immigration-consultant-crm-canada' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM for Immigration Consultants Canada | Emergent Logic',
    description: 'CRM systems for immigration consultants who need cleaner consultation intake, faster follow-up, and better lead visibility.',
    url: 'https://www.emergent-logic.ca/immigration-consultant-crm-canada',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const intakeIssues = [
  'Website assessment forms do not become tracked CRM records',
  'WhatsApp, email, phone, and referrals are handled in separate places',
  'Study permit, visitor visa, PR, LMIA, and sponsorship leads are not categorized clearly',
  'Follow-up depends on memory instead of tasks and next follow-up dates',
  'New consultations are mixed with active client document requests',
  'No report shows which lead sources create qualified consultations',
];

const services = [
  { icon: FileText, title: 'Consultation Intake', desc: 'Capture service interest, source, language preference, urgency, and qualification notes from each inquiry.' },
  { icon: MessageSquare, title: 'Channel Routing', desc: 'Organize website forms, email, phone, WhatsApp, and referrals into one CRM process with clear ownership.' },
  { icon: CalendarCheck, title: 'Booking Follow-Up', desc: 'Track inquiry, consultation booked, attended, qualified, proposal, retained, and not-fit stages.' },
  { icon: Workflow, title: 'Automation', desc: 'Create simple task reminders, owner assignment, internal alerts, and follow-up sequences once the intake process is clean.' },
  { icon: Languages, title: 'Multilingual Context', desc: 'Track language preference and service category so the right person follows up with the right context.' },
  { icon: BarChart3, title: 'Reporting', desc: 'See which inquiry sources, services, and follow-up stages create booked consultations and retained clients.' },
];

const faqs = [
  { q: 'Do immigration consultants need a CRM?', a: 'If inquiries arrive through forms, WhatsApp, phone, email, referrals, or social channels, a CRM helps separate new consultation opportunities from active client operations. It gives the team one place to track source, service interest, owner, status, and next follow-up.' },
  { q: 'Can this work with WhatsApp and email?', a: 'Yes. Depending on the tools you use, we can design a workflow that captures context from WhatsApp, email, forms, and calls, then creates a clear CRM record or task for follow-up.' },
  { q: 'Which CRM is best for immigration consultants?', a: 'HubSpot is often a practical starting point for small and growing firms because forms, email, tasks, pipelines, and reporting can be set up quickly. Salesforce or Zoho may fit better if you need deeper customization or already use those systems.' },
  { q: 'Do you handle legal case management?', a: 'No. We focus on consultation intake, lead follow-up, CRM visibility, automation, and reporting. We do not replace legal case management software or give immigration/legal advice.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/immigration-consultant-crm-canada#service',
      name: 'CRM for Immigration Consultants',
      serviceType: 'CRM consulting, consultation intake, lead routing, follow-up automation, and reporting for immigration consultants',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/immigration-consultant-crm-canada',
      areaServed: [{ '@type': 'Country', name: 'Canada' }, { '@type': 'Country', name: 'United States' }],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/immigration-consultant-crm-canada#faq',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function ImmigrationConsultantCrmCanada() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services/crm-implementation' },
            { label: 'CRM for Immigration Consultants', href: '/immigration-consultant-crm-canada' },
          ]} />
          <div className="text-emerald-200 text-sm mb-4">Immigration consultant CRM systems</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            CRM Systems for Immigration Consultants
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            We help immigration consultants organize consultation intake, website forms, WhatsApp, email, and follow-up into one CRM workflow. The goal is simple: fewer missed inquiries, clearer ownership, and better visibility from first message to retained client.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a Free Strategy Call" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-100 font-semibold px-8">
                  Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/contact">
              <Button size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation intake breaks when every channel is separate</h2>
          <p className="text-lg text-gray-600 mb-4">
            Immigration firms often receive inquiries through forms, WhatsApp, phone, email, referrals, and social messages. At the same time, the team is handling active client questions, document requests, deadline updates, and internal admin work.
          </p>
          <p className="text-lg text-gray-600">
            A CRM should separate new consultation opportunities from active case operations. It should show what service the prospect asked about, who owns the next action, when follow-up is due, and whether the inquiry became a booked consultation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common intake gaps we fix</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {intakeIssues.map((issue) => (
              <div key={issue} className="flex items-start gap-3 bg-white border rounded-xl p-5">
                <CheckCircle className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{issue}</p>
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
                  <item.icon className="w-8 h-8 text-emerald-700 mb-2" />
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
            <Link href="/blog/immigration-consultation-follow-up-crm" className="block bg-white border rounded-xl p-5 hover:shadow-md transition-shadow"><p className="font-semibold text-emerald-800">Immigration intake guide</p><p className="text-sm text-gray-600 mt-1">Why consultation follow-up needs CRM structure.</p></Link>
            <Link href="/services/crm-implementation" className="block bg-white border rounded-xl p-5 hover:shadow-md transition-shadow"><p className="font-semibold text-emerald-800">CRM implementation</p><p className="text-sm text-gray-600 mt-1">Set up HubSpot, Salesforce, or Zoho properly.</p></Link>
            <Link href="/services/lead-capture-websites" className="block bg-white border rounded-xl p-5 hover:shadow-md transition-shadow"><p className="font-semibold text-emerald-800">Lead capture websites</p><p className="text-sm text-gray-600 mt-1">Forms and landing pages connected to CRM follow-up.</p></Link>
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

      <section className="py-16 bg-gradient-to-br from-emerald-900 to-teal-950 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Want cleaner consultation intake?</h2>
          <p className="text-white/75 mb-8">We can review your forms, WhatsApp/email workflow, CRM routing, and reporting in one focused strategy call.</p>
          <TrackedCTA ctaName="Book a Free Strategy Call" destination="calendly">
            <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </a>
          </TrackedCTA>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
