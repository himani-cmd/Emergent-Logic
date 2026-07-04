import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  CheckCircle,
  ClipboardList,
  Database,
  Gauge,
  MousePointerClick,
  Route,
} from 'lucide-react';

export const metadata = {
  title: 'Website Leads to CRM Implementation | Emergent Logic',
  description:
    'Connect website forms, landing pages, booking flows, and inquiries into HubSpot or Salesforce with routing, ownership, tasks, and reporting.',
  alternates: { canonical: 'https://www.emergent-logic.ca/website-leads-to-crm-implementation' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Website Leads to CRM Implementation | Emergent Logic',
    description:
      'Turn website inquiries into CRM records with source tracking, owner assignment, follow-up tasks, and reporting.',
    url: 'https://www.emergent-logic.ca/website-leads-to-crm-implementation',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const implementationSteps = [
  {
    icon: MousePointerClick,
    title: 'Map every inquiry path',
    text: 'We review forms, landing pages, contact pages, booking links, chat widgets, and campaign pages so every lead source is accounted for.',
  },
  {
    icon: Database,
    title: 'Create or update CRM records',
    text: 'Website submissions create or update contacts, companies, deals, tickets, or custom objects depending on how your sales process works.',
  },
  {
    icon: Route,
    title: 'Route to the right owner',
    text: 'Leads can route by service, geography, urgency, source, existing owner, round robin, or manual review queue.',
  },
  {
    icon: ClipboardList,
    title: 'Create the next action',
    text: 'The system creates tasks, follow-up dates, status changes, and internal notes so the lead does not depend on memory.',
  },
  {
    icon: BellRing,
    title: 'Notify without noise',
    text: 'The right person gets the right alert while avoiding the shared-inbox problem where everyone sees the lead and nobody owns it.',
  },
  {
    icon: Gauge,
    title: 'Report on source quality',
    text: 'Track which forms, campaigns, sources, and pages create qualified conversations instead of only measuring raw submissions.',
  },
];

const fitSignals = [
  'Website leads currently go to email, but not reliably into the CRM.',
  'The same lead can submit more than once and create duplicate records.',
  'Sales cannot easily see source, inquiry type, owner, or next follow-up date.',
  'Forms, booking links, and landing pages do not follow the same routing rules.',
  'Marketing reports show leads, but the CRM does not show what happened next.',
  'The team wants better speed-to-lead without adding manual admin work.',
];

const faqs = [
  {
    q: 'What does website leads to CRM implementation mean?',
    a: 'It means connecting website forms, booking flows, landing pages, and contact inquiries into a CRM workflow so each lead is captured, routed, owned, followed up, and reported on.',
  },
  {
    q: 'Can this work with an existing website?',
    a: 'Yes. In many cases, we can keep your existing website and connect the forms, booking links, or landing pages into HubSpot, Salesforce, Zoho, or another CRM. If the form setup is too limited, we recommend the smallest practical rebuild.',
  },
  {
    q: 'Should this be done before or after CRM cleanup?',
    a: 'If your CRM has duplicates, unclear owners, missing lifecycle stages, or unreliable source fields, cleanup should happen first or alongside the integration. Routing website leads into a messy CRM usually creates faster mess.',
  },
  {
    q: 'Do you build the website too?',
    a: 'Sometimes. We build lead capture pages and CRM-connected websites when the goal is inquiry capture, routing, booking, and follow-up. We are not a brand agency or a general design studio.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/website-leads-to-crm-implementation#service',
      name: 'Website Leads to CRM Implementation',
      serviceType: 'Website form to CRM integration, lead routing, booking flow integration, CRM follow-up workflow',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/website-leads-to-crm-implementation',
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'AdministrativeArea', name: 'British Columbia' },
        { '@type': 'City', name: 'Surrey' },
        { '@type': 'City', name: 'Vancouver' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/website-leads-to-crm-implementation#faq',
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

export default function WebsiteLeadsToCrmImplementation() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Website Leads to CRM', href: '/website-leads-to-crm-implementation' },
            ]}
          />
          <Badge className="mb-5 bg-white/10 text-white hover:bg-white/10">Lead capture to CRM workflow</Badge>
          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Website Leads to CRM Implementation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
            A website form is not a sales system by itself. Emergent Logic connects website inquiries, booking flows, landing pages, and contact forms into HubSpot, Salesforce, or your CRM so every lead has a source, owner, next step, and follow-up path.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <TrackedCTA ctaName="Book a Free Strategy Call - Website Leads to CRM Hero" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white text-blue-950 hover:bg-blue-100 sm:w-auto">
                  Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/lead-follow-up-audit" className="w-full sm:w-auto">
              <Button size="lg" className="w-full border border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto">
                Try the Lead Follow-Up Audit
              </Button>
            </Link>
          </div>
          <div className="mt-10 grid gap-4 text-sm text-white/75 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Website forms connected to CRM records</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Owner, task, source, and follow-up visibility</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Works with HubSpot, Salesforce, Zoho, and custom stacks</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What should happen after a website form is submitted?</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              After a website form is submitted, the inquiry should create or update a CRM record, capture the source, tag the request type, assign an owner, create a next action, and make the follow-up status visible. If the lead only lands in an inbox, the business is still relying on memory.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              This is why we treat website lead capture as CRM work, not only web design. The visible form matters, but the handoff after submission is where revenue is usually protected or lost.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What We Implement</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {implementationSteps.map((step) => (
                <div key={step.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                  <step.icon className="mb-4 h-8 w-8 text-blue-700" />
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">When This Is a Good Fit</h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Website leads to CRM implementation is a good fit when the business is already getting inquiries, but the handoff after submission is inconsistent, manual, or hard to report on.
              </p>
              <div className="mt-8 space-y-4">
                {fitSignals.map((signal) => (
                  <div key={signal} className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                    <p className="text-gray-700">{signal}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-blue-950 p-8 text-white">
              <h3 className="text-2xl font-bold">A practical implementation path</h3>
              <ol className="mt-6 space-y-5 text-white/80">
                <li><strong className="text-white">Step 1:</strong> audit forms, booking links, CRM fields, sources, and follow-up views.</li>
                <li><strong className="text-white">Step 2:</strong> define what each inquiry type should create in the CRM.</li>
                <li><strong className="text-white">Step 3:</strong> connect forms, routing, ownership, tasks, and alerts.</li>
                <li><strong className="text-white">Step 4:</strong> test duplicates, failed submissions, notifications, and reporting.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">How website leads should enter HubSpot or Salesforce</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              In HubSpot, website inquiries often become contacts, form submissions, lifecycle updates, tasks, list membership, and workflow enrollment. In Salesforce, they may become leads, contacts, cases, opportunities, tasks, campaign members, or routed records depending on the sales process.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The structure matters less than the rule: the CRM should show who the lead is, where it came from, who owns it, what was promised, and what needs to happen next.
            </p>
            <div className="mt-8 rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold text-gray-900">Helpful platform references</h3>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>
                  HubSpot documents how forms can create and update contact records in its{' '}
                  <a href="https://knowledge.hubspot.com/forms/create-and-edit-forms" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    forms documentation
                  </a>.
                </p>
                <p>
                  Google explains how structured data can help search engines understand page content in its{' '}
                  <a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    structured data guide
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What We Do Not Do</h2>
            <div className="mt-6 rounded-2xl border bg-slate-50 p-8">
              <p className="text-lg leading-relaxed text-gray-600">
                We do not sell disconnected form embeds as a complete lead management system. We do not create workflows before the CRM fields, lifecycle rules, and ownership model are clear. And we do not pretend a new website will fix slow follow-up if the sales process after the form is still manual and invisible.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                If your CRM needs cleanup first, we will recommend <Link href="/services/crm-cleanup" className="text-blue-700 hover:underline">CRM cleanup</Link>. If the visible page is the bigger issue, we may recommend a <Link href="/services/lead-capture-websites" className="text-blue-700 hover:underline">lead capture website</Link> or landing page build alongside the CRM workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Related Resources</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Link href="/services/lead-capture-websites" className="rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold text-blue-700">Lead Capture Websites</p>
                <p className="mt-2 text-sm text-gray-600">Conversion pages and forms built to feed your CRM properly.</p>
              </Link>
              <Link href="/blog/website-leads-to-crm" className="rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold text-blue-700">Why Website Leads Need CRM Routing</p>
                <p className="mt-2 text-sm text-gray-600">The problem-aware guide behind this service page.</p>
              </Link>
              <Link href="/case-studies/website-leads-to-crm-follow-up-system" className="rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold text-blue-700">Website Leads to CRM Case Study</p>
                <p className="mt-2 text-sm text-gray-600">A representative pattern for source tracking, ownership, tasks, and reporting.</p>
              </Link>
              <Link href="/lead-follow-up-audit" className="rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold text-blue-700">Lead Follow-Up Audit</p>
                <p className="mt-2 text-sm text-gray-600">A quick diagnostic for where inquiries are leaking after submission.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Website Leads to CRM FAQ</h2>
            <div className="mt-8 space-y-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border bg-slate-50 p-6">
                  <h3 className="font-bold text-gray-900">{faq.q}</h3>
                  <p className="mt-2 text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <CalendarCheck className="mx-auto mb-5 h-10 w-10 text-white/80" />
          <h2 className="text-3xl font-bold text-white md:text-4xl">Want website leads routed into your CRM properly?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Book a free strategy call. We will review the current lead path, identify where inquiries leak, and recommend the smallest practical CRM-connected fix.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedCTA ctaName="Book a Free Strategy Call - Website Leads to CRM Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                  Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/contact">
              <Button size="lg" className="border border-white/40 bg-transparent text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
