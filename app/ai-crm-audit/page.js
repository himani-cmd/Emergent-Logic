import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Database,
  Route,
  Search,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const metadata = {
  title: 'AI-Ready CRM Audit | HubSpot, Salesforce, Zoho',
  description:
    'Assess CRM data, routing, workflows, reporting, and integration risks before adding AI automation in HubSpot, Salesforce, or Zoho.',
  alternates: { canonical: 'https://www.emergent-logic.ca/ai-crm-audit' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI-Ready CRM Audit | Emergent Logic',
    description:
      'A discovery-first CRM review for data quality, lead routing, workflows, reporting, integrations, and AI automation readiness.',
    url: 'https://www.emergent-logic.ca/ai-crm-audit',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const auditAreas = [
  {
    icon: Database,
    title: 'Data quality',
    description:
      'Review duplicates, missing fields, stale records, lifecycle stages, lead status, source tracking, and the properties used by sales and marketing.',
  },
  {
    icon: Route,
    title: 'Lead capture and routing',
    description:
      'Trace forms, booking tools, imports, owner rules, notifications, response expectations, and the path from a new inquiry to its next action.',
  },
  {
    icon: Zap,
    title: 'Workflow controls',
    description:
      'Inspect agreed workflow areas for enrollment logic, re-enrollment, branches, delays, tasks, suppression rules, and conflicting updates.',
  },
  {
    icon: BarChart3,
    title: 'Reporting trust',
    description:
      'Review pipeline stages, dashboard definitions, source fields, ownership data, and the dependencies behind management reporting.',
  },
  {
    icon: ShieldCheck,
    title: 'Integration risk',
    description:
      'Document connected forms, marketing tools, middleware, APIs, and sync rules that can create, update, or overwrite CRM records.',
  },
  {
    icon: Search,
    title: 'AI use-case readiness',
    description:
      'Separate AI-assisted scoring, routing, summaries, reporting, and follow-up ideas that are supportable now from those that need cleanup first.',
  },
];

const deliverables = [
  {
    title: 'Current-state findings',
    description:
      'A documented view of the records, fields, workflows, reports, forms, and connections reviewed within the agreed scope.',
  },
  {
    title: 'Risk and dependency inventory',
    description:
      'Issues grouped by business impact, technical dependency, access requirement, and the approvals needed before any change.',
  },
  {
    title: 'Prioritized action plan',
    description:
      'A sequence for cleanup, workflow repair, reporting, integration, or AI-assisted automation based on the evidence available.',
  },
  {
    title: 'Implementation options',
    description:
      'A recommendation to repair, simplify, integrate, or replace parts of the system, with separate implementation scope where appropriate.',
  },
];

const faqs = [
  {
    q: 'What is an AI-ready CRM audit?',
    a: 'It is a scoped review of the data, lifecycle stages, lead status, owner rules, source tracking, workflows, reports, and integrations that AI-assisted CRM features depend on.',
  },
  {
    q: 'Why review the CRM before adding AI automation?',
    a: 'AI automation depends on its inputs. Duplicate records, missing ownership, unclear stages, broken workflows, or unreliable source fields can make automated recommendations and actions less dependable.',
  },
  {
    q: 'Which CRM platforms can be reviewed?',
    a: 'Emergent Logic can scope reviews involving HubSpot, Salesforce, or Zoho and the connected forms, reporting, marketing automation, and integration workflows relevant to the business problem.',
  },
  {
    q: 'Does the review change our production CRM?',
    a: 'The diagnostic phase is designed to document the current state first. Cleanup, configuration, workflow, reporting, or integration changes require a separate written scope and approval.',
  },
  {
    q: 'Is every workflow, record, and integration included?',
    a: 'Not automatically. Coverage depends on the agreed review boundary, available access, CRM tier, data volume, connected systems, and the questions the business needs answered.',
  },
  {
    q: 'What happens after the review?',
    a: 'The findings can support a repair, cleanup, integration, relaunch, or replacement decision. Any implementation work is scoped separately with dependencies, acceptance checks, and change control.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/ai-crm-audit#service',
      name: 'AI-Ready CRM Audit',
      description:
        'A scoped CRM readiness review covering data quality, lead routing, workflow controls, reporting, integrations, and AI automation dependencies.',
      serviceType: 'CRM audit and AI automation readiness assessment',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/ai-crm-audit',
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'AdministrativeArea', name: 'British Columbia' },
        { '@type': 'City', name: 'Surrey' },
        { '@type': 'City', name: 'Vancouver' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/ai-crm-audit#faq',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

export default function AICRMAudit() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950 pb-20 pt-32">
        <div className="container mx-auto max-w-5xl px-4">
          <Breadcrumbs
            tone="dark"
            items={[{ label: 'AI-Ready CRM Audit', href: '/ai-crm-audit' }]}
          />
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-violet-300/20 bg-white/10 px-3 py-2 text-sm text-violet-100">
                <Search className="h-4 w-4" />
                CRM data, routing, reporting, and AI readiness
              </div>
              <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
                Audit the CRM before AI scales the wrong process
              </h1>
              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
                An AI-ready CRM audit reviews whether the data, ownership rules, workflows, reporting, and integrations inside HubSpot, Salesforce, or Zoho can support reliable automation. The diagnostic boundary is agreed before access or implementation work begins.
              </p>
              <TrackedCTA ctaName="Request an AI-Ready CRM Review" destination="calendly">
                <Button asChild size="lg" className="bg-white px-8 text-violet-950 hover:bg-violet-100">
                  <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                    Request a CRM Review <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </TrackedCTA>
            </div>
            <div className="border-l border-white/15 pl-6 text-white/75 lg:pl-8">
              <p className="mb-4 text-sm font-semibold uppercase text-violet-200">A practical answer to three questions</p>
              <ul className="space-y-4">
                {[
                  'Which CRM inputs can the team trust today?',
                  'What must be repaired before adding automation?',
                  'Should the current system be simplified, integrated, or replaced?',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-gray-950 md:text-4xl">What the CRM review can cover</h2>
          <p className="mb-10 max-w-3xl text-lg text-gray-600">
            Coverage is selected around the operating problem. It does not assume every record, workflow, integration, or business unit belongs in the first review.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {auditAreas.map((area) => (
              <article key={area.title} className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <area.icon className="mb-4 h-7 w-7 text-violet-700" />
                <h3 className="mb-2 text-lg font-semibold text-gray-950">{area.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-violet-700">Evidence before implementation</p>
              <h2 className="mb-5 text-3xl font-bold text-gray-950 md:text-4xl">What you can receive</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                The exact deliverables are confirmed in the review scope. The purpose is to create a decision record the business can use, not to make unreviewed production changes.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <article key={item.title} className="rounded-lg border border-violet-100 bg-white p-5">
                  <h3 className="mb-2 font-semibold text-gray-950">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-3xl font-bold text-gray-950 md:text-4xl">A controlled review process</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Define the question',
                description: 'Identify the business decision, affected CRM areas, available access, connected systems, and evidence needed.',
              },
              {
                step: '02',
                title: 'Inspect the agreed scope',
                description: 'Review the relevant configuration, data, workflows, reporting, and integration dependencies without assuming production-change approval.',
              },
              {
                step: '03',
                title: 'Choose the next intervention',
                description: 'Use the findings to decide what to retain, repair, simplify, integrate, or replace and what requires a separate implementation plan.',
              },
            ].map((item) => (
              <article key={item.step} className="border-t-2 border-violet-600 pt-5">
                <span className="text-sm font-semibold text-violet-700">{item.step}</span>
                <h3 className="mb-2 mt-3 text-xl font-semibold text-gray-950">{item.title}</h3>
                <p className="leading-relaxed text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-gray-950 md:text-4xl">AI-ready CRM audit questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-950">{faq.q}</h3>
                <p className="leading-relaxed text-gray-600">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-violet-100 bg-white py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-gray-950">Related CRM decision paths</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/services/crm-relaunch" className="rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md">
              <p className="font-semibold text-violet-700">Repair or relaunch an underused CRM</p>
              <p className="mt-2 text-sm text-gray-600">Choose what to retain, simplify, integrate, or replace.</p>
            </Link>
            <Link href="/services/crm-cleanup" className="rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md">
              <p className="font-semibold text-violet-700">CRM cleanup</p>
              <p className="mt-2 text-sm text-gray-600">Address data, stages, ownership, workflows, and reporting dependencies.</p>
            </Link>
            <Link href="/blog/excel-to-crm-migration-repeat-order-businesses" className="rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md">
              <p className="font-semibold text-violet-700">Excel-to-CRM migration workbook</p>
              <p className="mt-2 text-sm text-gray-600">Plan field mapping, cleanup, test imports, validation, and handoff.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-violet-700 to-indigo-800 py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Start with the decision your CRM needs to support</h2>
          <p className="mb-8 text-lg text-white/75">
            Use a consultation to explain the current system, the unreliable process, and the decision you need to make. We will determine whether a bounded review is the right next step.
          </p>
          <TrackedCTA ctaName="AI Audit Final CRM Review" destination="calendly">
            <Button asChild size="lg" className="bg-white text-violet-950 hover:bg-violet-100">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                Request a CRM Review <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </TrackedCTA>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
