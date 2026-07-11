import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart3, CheckCircle, ClipboardCheck, Database, GitBranch, MapPin, Workflow } from 'lucide-react';

export const metadata = {
  title: 'CRM Consultant Vancouver | Setup, Cleanup & Integration',
  description: 'CRM consultant in Vancouver for HubSpot, Salesforce, CRM cleanup, lead routing, reporting, integrations, and practical team adoption.',
  alternates: { canonical: 'https://www.emergent-logic.ca/crm-consultant-vancouver' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Consultant Vancouver | Emergent Logic',
    description: 'Vancouver CRM consulting for setup, cleanup, lead routing, reporting, integrations, and team adoption.',
    url: 'https://www.emergent-logic.ca/crm-consultant-vancouver',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM Consultant Vancouver | Emergent Logic',
    description: 'CRM consulting in Vancouver for setup, cleanup, lead routing, reporting, integrations, and team adoption.',
    images: ['https://www.emergent-logic.ca/og-image.png'],
  },
};

const serviceAreas = [
  { icon: Database, title: 'CRM setup and cleanup', description: 'Pipelines, lifecycle stages, properties, duplicate records, stale fields, and admin settings cleaned up before more automation is added.' },
  { icon: Workflow, title: 'Lead routing and follow-up', description: 'Website forms, inboxes, assignment rules, tasks, reminders, and owner visibility connected so qualified leads do not sit untouched.' },
  { icon: BarChart3, title: 'Reporting and dashboards', description: 'Dashboards that show source quality, pipeline movement, follow-up gaps, owner accountability, and the next action sales needs to take.' },
  { icon: GitBranch, title: 'CRM integrations', description: 'HubSpot, Salesforce, forms, email, calendars, spreadsheets, marketing tools, and operational systems connected with practical sync rules.' },
];

const platforms = ['HubSpot', 'Salesforce', 'Zoho CRM', 'Pipedrive', 'Microsoft Dynamics', 'Monday CRM', 'Odoo', 'Close CRM'];

const signals = [
  'Leads arrive from forms, referrals, ads, inboxes, and calls, but ownership is not clear.',
  'The CRM has fields and workflows nobody fully trusts anymore.',
  'Reports show activity, but not which opportunities are stuck or who owns the next step.',
  'A migration, integration, or new automation project is blocked by messy data.',
  'Sales, marketing, and operations use different definitions for lead, MQL, SQL, opportunity, and customer.',
];

const process = [
  { step: '01', title: 'Audit the current state', description: 'We review your pipeline, fields, records, workflows, forms, integrations, reports, and team habits before recommending changes.' },
  { step: '02', title: 'Define the operating model', description: 'We document lifecycle rules, ownership, lead sources, follow-up expectations, required fields, and what each dashboard must answer.' },
  { step: '03', title: 'Clean and configure', description: 'We update the CRM structure, cleanup plan, routing rules, automations, integrations, and reports in controlled, reviewable steps.' },
  { step: '04', title: 'Train and hand over', description: 'We leave your team with the workflow, documentation, and admin guidance needed to keep the system usable after launch.' },
];

const faqs = [
  {
    q: 'What does a CRM consultant in Vancouver help with?',
    a: 'A CRM consultant helps map your sales and service process into a usable system. That can include CRM selection, HubSpot or Salesforce setup, data cleanup, pipeline design, lead routing, reporting, integrations, migration planning, and team training.',
  },
  {
    q: 'Do you work only in Vancouver?',
    a: 'Emergent Logic is based in Surrey and supports Vancouver, Metro Vancouver, Canadian, and selected US teams. Most CRM work is delivered through calls, shared screens, and documented implementation sprints.',
  },
  {
    q: 'Should we clean up our CRM before adding automation?',
    a: 'Usually, yes. If lifecycle stages, owners, duplicate records, lead sources, and required fields are unreliable, new automation can amplify the mess. We typically audit and stabilize the CRM foundation before adding more workflow logic.',
  },
  {
    q: 'Which CRM platforms do you support?',
    a: 'We work most often with HubSpot and Salesforce, and can support teams using tools such as Zoho CRM, Pipedrive, Microsoft Dynamics, Monday CRM, Odoo, and Close when the fit is right.',
  },
];

const auditChecks = [
  'Where the inquiry enters and whether the source is preserved',
  'Who should own the lead and what status it should create',
  'What follow-up should happen next and when',
  'Where a handoff, inbox, form, or CRM field can break',
  'What the team should be able to see seven days later',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/crm-consultant-vancouver#service',
      name: 'CRM Consulting in Vancouver',
      serviceType: 'CRM implementation, cleanup, lead routing, reporting, integration, and team adoption consulting',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/crm-consultant-vancouver',
      areaServed: [
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'AdministrativeArea', name: 'Metro Vancouver' },
        { '@type': 'AdministrativeArea', name: 'British Columbia' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/crm-consultant-vancouver#faq',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function CrmConsultantVancouver() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-900 pb-10 pt-28 md:pb-16 md:pt-32">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'CRM Consultant Vancouver', href: '/crm-consultant-vancouver' },
          ]} tone="dark" />
          <div className="mb-4 flex items-center gap-2 text-violet-300">
            <MapPin className="h-5 w-5 flex-shrink-0" />
            <span>Vancouver & Metro Vancouver</span>
          </div>
          <h1 className="mb-4 max-w-4xl break-words text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            CRM consultant in Vancouver for cleaner revenue operations
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
            Emergent Logic helps Vancouver teams clean up, implement, and connect CRM systems so leads, follow-up, reporting, and handoffs are easier to trust. We focus on practical HubSpot, Salesforce, and CRM operations work rather than generic marketing services.
          </p>
          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap">
            <TrackedCTA ctaName="Vancouver CRM Free Follow-Up Audit" destination="/lead-follow-up-audit">
              <Link href="/lead-follow-up-audit" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white text-violet-900 hover:bg-violet-100 sm:w-auto">
                  Get a Free 5-Point Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </TrackedCTA>
            <TrackedCTA ctaName="Vancouver CRM Review Call" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full border border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto">
                  Book a CRM Review
                </Button>
              </a>
            </TrackedCTA>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-4xl">
            <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">Commercial CRM support</Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">CRM consulting for the messy middle</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Many Vancouver companies already have a CRM. The problem is that the system no longer matches how the team sells, services, and follows up. We help identify what is broken, decide what should stay, and rebuild the pieces that create day-to-day operating clarity.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((item) => (
              <Card key={item.title} className="border border-violet-100 shadow-sm">
                <CardHeader>
                  <item.icon className="mb-2 h-7 w-7 text-violet-600" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-violet-100 bg-violet-50 py-16">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge className="mb-4 border-violet-200 bg-white text-violet-700 hover:bg-white">Free diagnostic</Badge>
            <ClipboardCheck className="mb-4 h-10 w-10 text-violet-700" />
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Start with one lead path, not a large CRM project</h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Send us one contact form, consultation request, demo flow, or inquiry page. We will review the visible follow-up path and return a practical five-point note. No CRM access is needed for the first review.
            </p>
            <TrackedCTA ctaName="Vancouver CRM Audit Section" destination="/lead-follow-up-audit">
              <Link href="/lead-follow-up-audit">
                <Button size="lg" className="bg-violet-700 text-white hover:bg-violet-800">
                  See the Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </TrackedCTA>
          </div>
          <div className="border-l-4 border-violet-600 bg-white px-6 py-7 shadow-sm">
            <h3 className="mb-5 text-xl font-bold text-gray-900">The five questions we answer</h3>
            <ul className="space-y-4">
              {auditChecks.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">When a CRM project needs senior attention</h2>
              <p className="mb-6 text-lg text-gray-600">
                A CRM project is not only a software configuration task. It touches ownership, sales process, lead source quality, reporting definitions, handoff rules, and team adoption. These are the signs we usually look for first:
              </p>
              <ul className="space-y-4">
                {signals.map((signal) => (
                  <li key={signal} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-violet-600" />
                    <span className="text-gray-700">{signal}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Platforms we can support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((platform) => (
                    <span key={platform} className="rounded-lg border bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                      {platform}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm text-gray-600">
                  We recommend tools based on the process, reporting needs, integration load, and admin capacity, not a generic platform preference.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">How the Vancouver CRM consulting sprint works</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <Card key={item.step} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="mb-2 text-4xl font-bold text-violet-200">{item.step}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Related CRM services and resources</h2>
            <p className="text-lg text-gray-600">
              If you already know the platform or problem area, these pages go deeper into the specific work.
            </p>
          </div>
          <div className="grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/hubspot-consultant-vancouver" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-semibold text-violet-700">HubSpot Consultant Vancouver</p>
              <p className="mt-2 text-sm text-gray-600">HubSpot setup, cleanup, workflows, and reporting.</p>
            </Link>
            <Link href="/services/salesforce-consulting" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-semibold text-violet-700">Salesforce Consulting</p>
              <p className="mt-2 text-sm text-gray-600">Salesforce admin support, cleanup, and implementation.</p>
            </Link>
            <Link href="/website-leads-to-crm-implementation" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-semibold text-violet-700">Website Leads to CRM</p>
              <p className="mt-2 text-sm text-gray-600">Lead capture, routing, ownership, and follow-up workflows.</p>
            </Link>
            <Link href="/research/2026-crm-cleanup-demand-report" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-semibold text-violet-700">2026 CRM Cleanup Demand Report</p>
              <p className="mt-2 text-sm text-gray-600">What 100 public HubSpot and Salesforce postings reveal.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">CRM Consultant Vancouver FAQ</h2>
          <div className="max-w-3xl space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.q} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-violet-600 to-indigo-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Need a practical CRM consultant for a Vancouver team?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/80">
            Book a short CRM review. We will identify the likely cleanup, implementation, integration, or reporting sprint before recommending next steps.
          </p>
          <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">
              Book a CRM Review <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
