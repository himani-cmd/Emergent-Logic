import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  GitCompareArrows,
  RefreshCw,
  Route,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

export const metadata = {
  title: 'CRM Relaunch Services Canada | Repair or Replace',
  description:
    'Assess, repair, simplify, integrate, or replace an underused HubSpot, Salesforce, or Zoho CRM with a controlled relaunch plan.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/crm-relaunch' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Relaunch Services Canada | Emergent Logic',
    description:
      'A repair-versus-replace path for Canadian teams with an underused CRM, unreliable pipeline, broken workflows, or weak reporting.',
    url: 'https://www.emergent-logic.ca/services/crm-relaunch',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const decisions = [
  {
    icon: CheckCircle,
    title: 'Retain',
    description: 'Keep the current platform and the parts of the configuration that remain useful, understood, and supportable.',
  },
  {
    icon: Wrench,
    title: 'Repair',
    description: 'Correct data, stages, permissions, routing, workflows, reports, or integrations that are blocking reliable use.',
  },
  {
    icon: RefreshCw,
    title: 'Simplify',
    description: 'Remove unused fields, duplicate automation, unnecessary stages, and process complexity that the team avoids.',
  },
  {
    icon: GitCompareArrows,
    title: 'Replace',
    description: 'Plan a controlled migration only when the current platform cannot support the required process, governance, or integration needs.',
  },
];

const diagnosticRows = [
  ['Reps work outside the CRM', 'The system adds friction or does not match daily work', 'Observe the real process and simplify the required steps'],
  ['Pipeline reports are not trusted', 'Stages, ownership, close dates, or required fields are inconsistent', 'Define reporting inputs before rebuilding dashboards'],
  ['Leads wait without an owner', 'Forms, routing, notifications, or handoff rules are incomplete', 'Trace the full intake path and assign exception ownership'],
  ['Automation creates bad updates', 'Enrollment, re-enrollment, branches, or sync rules conflict', 'Pause risky logic where approved and rebuild from written rules'],
  ['Duplicate records keep returning', 'Imports, forms, integrations, or user practices recreate the issue', 'Fix the source and merge rules, not only the current duplicates'],
  ['The team asks for a new CRM', 'The current tool may be the visible symptom, not the root problem', 'Compare repair and replacement against the same requirements'],
];

const faqs = [
  {
    q: 'Can an underused CRM be fixed without replacing it?',
    a: 'Often, yes. The first step is to identify whether the problem comes from process design, data quality, ownership, workflows, reporting, integration limits, licensing, or the platform itself.',
  },
  {
    q: 'How do we decide whether to repair or replace the CRM?',
    a: 'Compare both paths against the required process, administration capacity, data model, integrations, reporting, licensing, migration risk, and change-management effort. A platform recommendation should follow that comparison.',
  },
  {
    q: 'What can a CRM relaunch include?',
    a: 'A written scope can include data cleanup, pipeline redesign, ownership rules, workflow repair, reporting, integration changes, migration, testing, training, documentation, and post-launch monitoring.',
  },
  {
    q: 'Can you relaunch HubSpot, Salesforce, or Zoho?',
    a: 'Emergent Logic can scope CRM relaunch work involving HubSpot, Salesforce, or Zoho. The recommended path depends on the platform tier, configuration, access, integrations, and business requirements discovered.',
  },
  {
    q: 'Will a relaunch disrupt the sales team?',
    a: 'Disruption cannot be eliminated, but it can be controlled. A relaunch plan should define backups, test environments or test records, validation, change windows, training, acceptance, rollback, and ownership.',
  },
  {
    q: 'How long does a CRM relaunch take?',
    a: 'Timing depends on the agreed scope, data condition, integrations, licensing, stakeholder availability, testing, training, and approval requirements. These dependencies are documented before implementation begins.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.emergent-logic.ca/services/crm-relaunch#webpage',
      url: 'https://www.emergent-logic.ca/services/crm-relaunch',
      name: 'CRM Relaunch Services Canada',
      description: metadata.description,
      dateModified: '2026-08-19',
      isPartOf: { '@id': 'https://www.emergent-logic.ca/#website' },
      about: { '@id': 'https://www.emergent-logic.ca/services/crm-relaunch#service' },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/services/crm-relaunch#service',
      name: 'CRM Relaunch Services Canada',
      description:
        'Assessment and controlled relaunch planning for underused HubSpot, Salesforce, and Zoho CRM systems, including repair-versus-replace decisions.',
      serviceType: 'CRM relaunch, CRM repair, CRM optimization, and CRM replacement planning',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/services/crm-relaunch',
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'AdministrativeArea', name: 'British Columbia' },
        { '@type': 'City', name: 'Surrey' },
        { '@type': 'City', name: 'Vancouver' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/services/crm-relaunch#faq',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

export default function CRMRelaunch() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 pb-20 pt-32">
        <div className="container mx-auto max-w-5xl px-4">
          <Breadcrumbs
            tone="dark"
            items={[
              { label: 'Services', href: '/#services' },
              { label: 'CRM Relaunch', href: '/services/crm-relaunch' },
            ]}
          />
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase text-violet-200">Repair before replacement</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Relaunch an underused CRM around the way your team actually works
            </h1>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
              A CRM relaunch is a controlled decision to retain, repair, simplify, integrate, or replace parts of an existing system. Emergent Logic helps Canadian teams assess HubSpot, Salesforce, or Zoho before committing to another implementation.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedCTA ctaName="CRM Relaunch Consultation" destination="calendly">
                <Button asChild size="lg" className="bg-white text-violet-950 hover:bg-violet-100">
                  <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                    Discuss the Current CRM <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </TrackedCTA>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/ai-crm-audit">Review CRM Readiness</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <p className="mb-3 text-sm font-semibold text-violet-700">Last reviewed August 19, 2026</p>
          <h2 className="mb-4 text-3xl font-bold text-gray-950 md:text-4xl">Can an underused CRM be relaunched instead of replaced?</h2>
          <p className="mb-10 max-w-3xl text-lg text-gray-600">
            Often, yes. The responsible first step is a diagnostic that separates platform limitations from configuration, data, ownership, workflow, reporting, integration and adoption problems. Replacement is not the default; retain, repair, simplify, integrate and replace options should be compared against the same requirements and implementation risks.
          </p>
          <h3 className="mb-6 text-2xl font-bold text-gray-950">Four possible decisions from the same evidence base</h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {decisions.map((decision) => (
              <article key={decision.title} className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <decision.icon className="mb-4 h-7 w-7 text-violet-700" />
                <h3 className="mb-2 text-xl font-semibold text-gray-950">{decision.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{decision.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center gap-3">
            <Route className="h-7 w-7 text-violet-700" />
            <h2 className="text-3xl font-bold text-gray-950 md:text-4xl">CRM relaunch diagnostic</h2>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="min-w-[860px] w-full text-left">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="p-4 text-sm font-semibold">Visible symptom</th>
                  <th className="p-4 text-sm font-semibold">Possible underlying issue</th>
                  <th className="p-4 text-sm font-semibold">First diagnostic step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {diagnosticRows.map(([symptom, issue, step]) => (
                  <tr key={symptom}>
                    <td className="p-4 font-medium text-gray-950">{symptom}</td>
                    <td className="p-4 text-gray-600">{issue}</td>
                    <td className="p-4 text-gray-600">{step}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-3xl font-bold text-gray-950 md:text-4xl">A controlled CRM relaunch path</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              ['01', 'Inventory the current system', 'Document users, licences, fields, pipelines, workflows, reports, integrations, data sources, permissions, and known workarounds.'],
              ['02', 'Map the operating process', 'Define how leads enter, who owns them, what changes a stage, what the team must record, and which reports guide decisions.'],
              ['03', 'Choose the intervention', 'Compare retain, repair, simplify, integrate, and replace options against the requirements and implementation risk.'],
              ['04', 'Build and validate the approved scope', 'Use test records or environments where available, reconcile results, document exceptions, and require approval before sensitive production changes.'],
              ['05', 'Train and hand off', 'Provide the role-specific instructions, ownership, operating checks, and documentation included in the written scope.'],
              ['06', 'Monitor the relaunch', 'Review the agreed adoption, routing, data-quality, workflow, and reporting signals during the defined post-launch period.'],
            ].map(([step, title, description]) => (
              <article key={step} className="grid grid-cols-[48px_1fr] gap-4 border-t border-gray-200 pt-5">
                <span className="font-semibold text-violet-700">{step}</span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-950">{title}</h3>
                  <p className="leading-relaxed text-gray-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <ShieldCheck className="mb-4 h-8 w-8 text-emerald-300" />
            <h2 className="text-3xl font-bold">What a relaunch plan should make explicit</h2>
          </div>
          <ul className="grid gap-3 text-white/75 sm:grid-cols-2">
            {[
              'Scope and exclusions',
              'Source-data ownership',
              'Backups and rollback',
              'Test and validation method',
              'Integration dependencies',
              'Acceptance criteria',
              'Training and documentation',
              'Post-launch ownership',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-white/10 pb-3">
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-gray-950 md:text-4xl">CRM relaunch questions</h2>
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

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-gray-950">Plan the next step</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/services/crm-cleanup" className="rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md">
              <p className="font-semibold text-violet-700">CRM cleanup</p>
              <p className="mt-2 text-sm text-gray-600">Address data, pipeline, workflow, and reporting issues.</p>
            </Link>
            <Link href="/services/crm-implementation" className="rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md">
              <p className="font-semibold text-violet-700">CRM implementation method</p>
              <p className="mt-2 text-sm text-gray-600">Review scope, testing, training, and handoff expectations.</p>
            </Link>
            <Link href="/blog/excel-to-crm-migration-repeat-order-businesses" className="rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md">
              <p className="font-semibold text-violet-700">Migration workbook</p>
              <p className="mt-2 text-sm text-gray-600">Prepare fields, cleanup rules, test imports, and acceptance checks.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-violet-700 to-indigo-800 py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Do not buy another CRM before diagnosing the current one</h2>
          <p className="mb-8 text-lg text-white/75">
            Bring the current symptoms, affected systems, and business priorities. We will determine whether a bounded assessment is the right next step.
          </p>
          <TrackedCTA ctaName="CRM Relaunch Final Consultation" destination="calendly">
            <Button asChild size="lg" className="bg-white text-violet-950 hover:bg-violet-100">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                Discuss the CRM <ArrowRight className="ml-2 h-5 w-5" />
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
