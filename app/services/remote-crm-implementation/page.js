import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Check,
  CircleDot,
  Database,
  FileCheck2,
  GitBranch,
  Link2,
  MapPin,
  Route,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

const canonicalUrl = 'https://www.emergent-logic.ca/services/remote-crm-implementation';

const fitSignals = [
  'Lead and customer information is split across spreadsheets, inboxes, and disconnected tools.',
  'A CRM exists, but ownership, stages, fields, or reports do not match the operating process.',
  'Website forms and approved lead sources do not route reliably into the CRM.',
  'Teams re-enter data between the CRM, email, calendar, accounting, phone, or marketing systems.',
  'A migration needs field mapping, duplicate rules, reconciliation, and rollback criteria.',
  'Automation exists, but exceptions, monitoring, and human approval points are unclear.',
];

const services = [
  {
    icon: Route,
    title: 'CRM selection and implementation',
    text: 'Translate requirements into a practical configuration plan for HubSpot, Salesforce, Zoho CRM, or another platform that fits the documented need. Scope can include objects, properties, stages, permissions, views, reports, and training.',
  },
  {
    icon: GitBranch,
    title: 'Lead capture and routing',
    text: 'Connect forms and approved lead sources to the CRM, preserve useful source information, define duplicate handling, assign an accountable owner, and test the path from submission to visible next step.',
  },
  {
    icon: Link2,
    title: 'CRM integrations',
    text: 'Connect approved systems through native integrations, middleware such as Zapier, Make, or n8n, or a scoped API integration. Each flow needs a source-of-truth decision, field map, failure path, and owner.',
  },
  {
    icon: Database,
    title: 'Data migration',
    text: 'Inventory the source, preserve an unchanged export, decide what will migrate or remain archived, map fields and relationships, and reconcile a representative pilot before cutover.',
  },
  {
    icon: Workflow,
    title: 'Workflow automation',
    text: 'Automate defined handoffs and follow-up while keeping consequential actions under human control. Enrollment, exclusions, retries, alerts, and ownership are documented before release.',
  },
  {
    icon: FileCheck2,
    title: 'Reporting and handoff',
    text: 'Build reporting around unowned inquiries, stalled opportunities, overdue follow-up, migration exceptions, and source performance. Deliver configuration notes, acceptance evidence, and a runbook.',
  },
];

const deliverySteps = [
  {
    number: '01',
    title: 'Fit check and discovery',
    text: 'Confirm the business process, users, data, integrations, access boundaries, decision owners, and required outcomes. If the work does not fit the available capability or access, that is identified before a proposal.',
  },
  {
    number: '02',
    title: 'Written implementation design',
    text: 'Document the proposed data model, lifecycle or pipeline, ownership rules, integrations, migration approach, tests, exclusions, dependencies, and approval points before build work begins.',
  },
  {
    number: '03',
    title: 'Controlled build and validation',
    text: 'Configure the approved scope in a suitable test or controlled environment. Validate normal paths and exceptions against written acceptance criteria before changing production routing.',
  },
  {
    number: '04',
    title: 'Launch and documented handoff',
    text: 'Release the approved scope, monitor agreed signals, train responsible users, and deliver the runbook. The goal is a system the business can operate, not undocumented dependence.',
  },
];

const faqItems = [
  {
    q: 'Can a CRM implementation be delivered remotely across the United States?',
    a: 'Yes, when discovery, access, stakeholder availability, testing, and approval can be handled securely online. Emergent Logic supports selected U.S. engagements remotely from Surrey, British Columbia, Canada and does not claim a U.S. office or onsite team.',
  },
  {
    q: 'Which CRM platforms do you support?',
    a: 'Scope can include HubSpot, Salesforce, and Zoho CRM, along with connected forms, marketing, calendar, email, accounting, phone, and automation systems. The recommendation depends on the documented process and platform fit.',
  },
  {
    q: 'Can you move us from spreadsheets into a CRM?',
    a: 'Yes, where the scope fits. The work should define the source inventory, identifiers, duplicate rules, field mapping, ownership, pilot import, reconciliation, and cutover plan before the full migration.',
  },
  {
    q: 'Can you connect lead-capture pages to our CRM?',
    a: 'Yes. Scope can cover field mapping, source tracking, duplicate handling, consent fields, ownership, alerts, and acceptance tests from submission through CRM arrival. A click or form start is not treated as a completed lead without the required evidence.',
  },
  {
    q: 'Do you provide ongoing CRM support?',
    a: 'Ongoing support can be considered after the system, access, request process, response expectations, and approval boundaries are documented. Support terms are confirmed in a written proposal.',
  },
  {
    q: 'How long does implementation take and what does it cost?',
    a: 'Timing and price depend on users, data, objects, automation, integrations, migration, training, and acceptance requirements. Emergent Logic confirms these after discovery in a written scope with dependencies, exclusions, timing, and commercial terms.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: 'Remote CRM Implementation for U.S. Businesses',
      description: 'Remote CRM implementation and integration for U.S. businesses, delivered from Canada with written scope, controlled testing, and documented handoff.',
      isPartOf: { '@id': 'https://www.emergent-logic.ca/#website' },
      about: { '@id': `${canonicalUrl}#service` },
    },
    {
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: 'Remote CRM Implementation and Integration',
      serviceType: 'Remote CRM implementation, integration, migration planning, lead routing, workflow automation, and documented handoff',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      areaServed: { '@type': 'Country', name: 'United States' },
      url: canonicalUrl,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.emergent-logic.ca/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.emergent-logic.ca/#services' },
        { '@type': 'ListItem', position: 3, name: 'Remote CRM Implementation', item: canonicalUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export const metadata = {
  title: 'Remote CRM Implementation for U.S. Businesses',
  description: 'Remote CRM implementation and integration for U.S. businesses. Plan data, lead routing, automation, testing, and handoff with a Canada-based consultancy.',
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Remote CRM Implementation for U.S. Businesses | Emergent Logic',
    description: 'Implementation, integration, migration planning, lead routing, and documented handoff delivered remotely from Canada.',
    url: canonicalUrl,
    images: [{ url: 'https://www.emergent-logic.ca/images/remote-crm-implementation-hero.png', width: 1983, height: 793 }],
  },
};

export default function RemoteCRMImplementationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FBFBFF]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <section
        className="relative flex min-h-[72vh] items-end overflow-hidden bg-[#1E3A5F] pt-32 pb-14 md:pb-20"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(16,24,40,0.98) 0%, rgba(30,58,95,0.93) 46%, rgba(30,58,95,0.46) 76%, rgba(30,58,95,0.2) 100%), url('/images/remote-crm-implementation-hero.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container relative mx-auto min-w-0 max-w-6xl px-4">
          <div className="mb-5 break-words text-sm font-medium text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/#services" className="hover:text-white">Services</Link>
            <span aria-hidden="true"> / Remote CRM Implementation</span>
          </div>
          <div className="min-w-0 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase text-[#A7F3D0]">Remote delivery from Surrey, BC</p>
            <h1 className="mb-6 break-words text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Remote CRM Implementation for U.S. Businesses
            </h1>
            <p className="mb-8 max-w-2xl break-words text-lg leading-8 text-white/85 md:text-xl">
              Plan and implement a CRM with clear requirements, controlled data work, tested automation, and documented handoff. Emergent Logic supports selected U.S. engagements remotely from Canada.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <TrackedCTA ctaName="Request a Remote CRM Implementation Fit Check" destination="calendly">
                <Button asChild size="lg" className="h-12 w-full whitespace-normal bg-white px-5 text-center font-semibold text-[#1E3A5F] hover:bg-[#EEF2FF] sm:w-auto">
                  <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                    Request a fit check <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </TrackedCTA>
              <Button asChild size="lg" variant="outline" className="h-12 w-full whitespace-normal border-white/60 bg-transparent px-5 text-center text-white hover:bg-white/10 hover:text-white sm:w-auto">
                <Link href="/blog/excel-to-crm-migration-repeat-order-businesses">Use the migration workbook</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/70">Discovery first. Written scope before build. Acceptance checks before handoff.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DFE3F5] bg-white py-14">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#0F766E]">Direct answer</p>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-[#101828] md:text-4xl">Start with the operating process, not the software menu.</h2>
            <p className="text-lg leading-8 text-[#475467]">
              Define who owns each inquiry, what information must be captured, when follow-up is due, which systems exchange data, and what must pass testing before launch. Then configure the platform around those decisions and leave a runbook the team can maintain.
            </p>
          </div>
          <div className="border-l-4 border-[#6366F1] bg-[#EEF2FF] p-6">
            <div className="mb-3 flex items-center gap-2 text-[#1E3A5F]">
              <MapPin className="h-5 w-5" />
              <h3 className="font-bold">The location truth</h3>
            </div>
            <p className="leading-7 text-[#475467]">Emergent Logic operates from Surrey, British Columbia and serves selected U.S. businesses remotely. This page does not imply a U.S. office, local staff, or onsite presence.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FBFBFF] py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold text-[#4B37C8]">Fit signals</p>
            <h2 className="mb-4 text-3xl font-bold text-[#101828] md:text-4xl">When remote CRM implementation is worth discussing</h2>
            <p className="text-lg leading-8 text-[#667085]">The useful signal is operational friction, not a platform logo.</p>
          </div>
          <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
            {fitSignals.map((signal) => (
              <div key={signal} className="flex items-start gap-3 border-b border-[#DFE3F5] pb-5">
                <CircleDot className="mt-1 h-5 w-5 shrink-0 text-[#D95D39]" />
                <p className="leading-7 text-[#344054]">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold text-[#0F766E]">Engagement scope</p>
            <h2 className="mb-4 text-3xl font-bold text-[#101828] md:text-4xl">What the work can include</h2>
            <p className="text-lg leading-8 text-[#667085]">The written proposal confirms which modules, dependencies, access, and acceptance checks are in scope.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg border border-[#DFE3F5] bg-[#FBFBFF] p-6">
                <service.icon className="mb-5 h-8 w-8 text-[#4B37C8]" />
                <h3 className="mb-3 text-xl font-bold text-[#101828]">{service.title}</h3>
                <p className="leading-7 text-[#667085]">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E3A5F] py-20 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold text-[#A7F3D0]">Delivery path</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Four controlled stages from fit to handoff</h2>
            <p className="text-lg leading-8 text-white/70">Timing and commercial terms are confirmed after the systems, data, stakeholders, access, and testing requirements are understood.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            {deliverySteps.map((step) => (
              <div key={step.number} className="border-t border-white/25 pt-5">
                <p className="mb-8 text-sm font-bold text-[#A7F3D0]">{step.number}</p>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="leading-7 text-white/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#4B37C8]">Platform fit</p>
            <h2 className="mb-5 text-3xl font-bold text-[#101828] md:text-4xl">Choose against the process and operating cost.</h2>
            <p className="mb-6 text-lg leading-8 text-[#667085]">HubSpot, Salesforce, and Zoho CRM can each fit different requirements. Selection should account for users, data model, reporting, automation, permissions, integration limits, administration capacity, and total operating cost.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" className="border-[#4B37C8] text-[#4B37C8] hover:bg-[#EEF2FF]">
                <Link href="/services/salesforce-consulting">Salesforce consulting</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#0F766E] text-[#0F766E] hover:bg-emerald-50">
                <Link href="/services/crm-integration">CRM integration</Link>
              </Button>
            </div>
          </div>
          <div className="bg-[#EEF2FF] p-7 md:p-9">
            <h3 className="mb-6 text-2xl font-bold text-[#101828]">What the fit check should establish</h3>
            <ol className="space-y-4">
              {[
                'What happens from first inquiry to a closed or disqualified outcome?',
                'Which system owns customer, company, deal, and consent information?',
                'Who owns new records and overdue follow-up?',
                'Which data and history should migrate, remain archived, or be retired?',
                'Which integrations are required at launch, and which can wait?',
                'What evidence must pass before users and lead sources move to the new process?',
                'Who can approve production, access, data, and automation changes?',
              ].map((item, index) => (
                <li key={item} className="flex gap-3 text-[#344054]">
                  <span className="font-bold text-[#4B37C8]">{index + 1}.</span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-[#DFE3F5] bg-[#FBFBFF] py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold text-[#0F766E]">Answers before scope</p>
            <h2 className="text-3xl font-bold text-[#101828] md:text-4xl">Frequently asked questions</h2>
          </div>
          <div className="divide-y divide-[#DFE3F5] border-y border-[#DFE3F5]">
            {faqItems.map((item) => (
              <article key={item.q} className="grid gap-3 py-7 md:grid-cols-[0.85fr_1.15fr] md:gap-10">
                <h3 className="text-lg font-bold leading-7 text-[#101828]">{item.q}</h3>
                <p className="leading-7 text-[#667085]">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <ShieldCheck className="mx-auto mb-6 h-10 w-10 text-[#0F766E]" />
          <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-bold text-[#101828] md:text-4xl">Make the implementation path visible before the build begins.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-[#667085]">Bring the current spreadsheet, CRM, form flow, or integration problem to a remote fit check. No platform purchase, production change, or implementation commitment is made during the conversation.</p>
          <TrackedCTA ctaName="Request a Remote CRM Implementation Fit Check" destination="calendly">
            <Button asChild size="lg" className="h-12 bg-[#4B37C8] px-7 font-semibold text-white hover:bg-[#37279B]">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                Request a fit check <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </TrackedCTA>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-[#667085]">
            {['Canada-based remote delivery', 'Written scope before build', 'Documented handoff'].map((item) => (
              <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0F766E]" />{item}</span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
