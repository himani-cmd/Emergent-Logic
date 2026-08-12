import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ClipboardList, Database, FileCheck2, Flag, GitPullRequest, ShieldCheck } from 'lucide-react';

const pageUrl = 'https://www.emergent-logic.ca/crm-implementation-method';

export const metadata = {
  title: 'CRM Implementation Method',
  description: 'A controlled CRM implementation method for discovery, data, configuration, integrations, UAT, cutover, training, and client handoff.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'CRM Implementation Method | Emergent Logic',
    description: 'See how Emergent Logic makes CRM scope, assumptions, testing, exceptions, cutover, and handoff visible.',
    url: pageUrl,
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const phases = [
  {
    icon: ClipboardList,
    name: '1. Diagnose',
    output: 'Decision record and bounded scope',
    detail: 'Map the operating problem, users, systems, data, integrations, constraints, desired decisions, and the smallest viable intervention before recommending a platform or build.',
  },
  {
    icon: Database,
    name: '2. Design',
    output: 'Approved data and process model',
    detail: 'Define records, fields, stages, ownership, permissions, routing, reports, automation boundaries, source-of-truth rules, and acceptance criteria.',
  },
  {
    icon: GitPullRequest,
    name: '3. Configure',
    output: 'Traceable implementation changes',
    detail: 'Build the approved configuration in controlled increments. Record assumptions, dependencies, exceptions, and any decision that changes scope or risk.',
  },
  {
    icon: FileCheck2,
    name: '4. Validate',
    output: 'UAT evidence and issue disposition',
    detail: 'Test representative records and end-to-end paths, including forms, ownership, alerts, workflows, permissions, integrations, reports, and failure handling.',
  },
  {
    icon: Flag,
    name: '5. Release',
    output: 'Approved cutover and rollback record',
    detail: 'Protect live inquiries, define the change sequence, reconcile results, monitor the validation window, and keep a rollback owner and trigger visible.',
  },
  {
    icon: ShieldCheck,
    name: '6. Transfer',
    output: 'Client-controlled operating system',
    detail: 'Deliver documentation, training, admin ownership, support boundaries, unresolved issues, and a practical health-check rhythm so the system remains maintainable.',
  },
];

const gates = [
  ['Scope gate', 'The business problem, users, systems, exclusions, dependencies, and approval owner are documented.'],
  ['Data gate', 'Source backup, mapping, cleanup, consent, duplicate, ownership, and reconciliation rules are approved.'],
  ['Build gate', 'Configuration matches the agreed process and does not add unapproved automation or claims.'],
  ['UAT gate', 'Representative scenarios pass, exceptions have dispositions, and decision-critical reports are trusted.'],
  ['Release gate', 'Cutover sequence, inbound protection, monitoring, rollback, and go-live authority are recorded.'],
  ['Handoff gate', 'Documentation, access, training, backlog, and ongoing ownership are accepted by the client.'],
];

const faqs = [
  {
    q: 'Does every CRM implementation follow the same timeline?',
    a: 'No. Timing depends on the systems, data, integrations, automation, permissions, testing, stakeholders, and operating risk in scope. The method is consistent; the work is sized after discovery.',
  },
  {
    q: 'Can this method be used for HubSpot, Salesforce, or Zoho?',
    a: 'Yes. The control points are platform-neutral. The specific configuration, licensing, data model, testing, and administration requirements vary by platform and subscription.',
  },
  {
    q: 'What if the current CRM only needs repair?',
    a: 'The Diagnose phase can recommend repair, simplification, coexistence, or replacement. A platform migration is not assumed before the evidence supports it.',
  },
  {
    q: 'What does client-controlled handoff mean?',
    a: 'The client receives the access, documentation, decision records, training, known-issue list, and ownership model needed to operate the CRM without hidden vendor dependencies.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Emergent Logic CRM Implementation Method',
      serviceType: 'CRM implementation, migration, integration, automation, user acceptance testing, cutover, training, and handoff',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: pageUrl,
      areaServed: [{ '@type': 'Country', name: 'Canada' }, { '@type': 'Country', name: 'United States' }],
    },
    {
      '@type': 'HowTo',
      '@id': `${pageUrl}#method`,
      name: 'A controlled CRM implementation method',
      description: metadata.description,
      step: phases.map((phase) => ({ '@type': 'HowToStep', name: phase.name, text: phase.detail })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

export default function CRMImplementationMethod() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <header className="bg-[#0F1B2D] pb-20 pt-32 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/#services' },
            { label: 'Implementation Method', href: '/crm-implementation-method' },
          ]} />
          <p className="mt-5 text-sm font-semibold text-[#9FB4FF]">THE EMERGENT LOGIC METHOD</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            CRM implementation with visible decisions, tests, and handoff
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            We make the operating problem, data rules, build decisions, acceptance checks, exceptions, cutover controls, and client ownership visible before production changes are accepted.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedCTA ctaName="Book a CRM Consultation - Implementation Method Hero" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-[#4F46E5] text-white hover:bg-[#4338CA] sm:w-auto">
                  Discuss your CRM implementation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/ai-crm-audit" className="w-full sm:w-auto">
              <Button size="lg" className="w-full border border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto">Start with the CRM audit</Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">Six phases, one evidence trail</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The sequence can scale from a bounded repair to a migration or implementation. Each phase ends with a decision or evidence artifact that the business can review.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {phases.map((phase) => (
              <section key={phase.name} className="rounded-lg border border-slate-200 p-6">
                <phase.icon className="h-8 w-8 text-indigo-700" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">{phase.name}</h3>
                <p className="mt-2 text-sm font-semibold text-indigo-700">{phase.output}</p>
                <p className="mt-3 leading-7 text-slate-600">{phase.detail}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">Acceptance gates before work advances</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {gates.map(([name, detail]) => (
              <div key={name} className="grid gap-2 py-5 md:grid-cols-[12rem_1fr] md:gap-6">
                <h3 className="font-bold text-slate-950">{name}</h3>
                <p className="leading-7 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">What remains under client control</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Access, production authority, pricing and legal decisions, sensitive business rules, and final acceptance remain with the client. Emergent Logic does not make unapproved production changes or hide essential administration behind vendor dependency.
            </p>
            <div className="mt-7 space-y-4">
              {[
                'Named decision owners and escalation routes',
                'Access and credential ownership',
                'Approved data, consent, retention, and security rules',
                'Production release and rollback authority',
                'Documentation, training, backlog, and support boundaries',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-700" aria-hidden="true" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0F1B2D] p-7 text-white sm:p-9">
            <h3 className="text-2xl font-bold">A platform recommendation comes after diagnosis</h3>
            <p className="mt-4 leading-7 text-slate-200">
              HubSpot, Salesforce, and Zoho solve different operating problems at different levels of administration and cost. The method first asks whether the current system should be repaired, simplified, integrated, migrated, or replaced.
            </p>
            <div className="mt-6 grid gap-3">
              <Link href="/services/crm-implementation" className="rounded-md border border-white/20 p-4 font-semibold text-white hover:bg-white/10">CRM implementation services</Link>
              <Link href="/services/crm-relaunch" className="rounded-md border border-white/20 p-4 font-semibold text-white hover:bg-white/10">CRM repair and relaunch</Link>
              <Link href="/blog/salesforce-to-hubspot-migration-checklist" className="rounded-md border border-white/20 p-4 font-semibold text-white hover:bg-white/10">Salesforce-to-HubSpot migration guide</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">CRM implementation method FAQ</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <section key={faq.q} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-2 leading-7 text-slate-600">{faq.a}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-700 py-16 text-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Start with the decision that reduces risk</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-indigo-100">Bring the current CRM, spreadsheet, integration, or lead-routing problem. We will help identify the smallest responsible next step.</p>
          <TrackedCTA ctaName="Book a CRM Consultation - Implementation Method Footer" destination="calendly">
            <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex">
              <Button size="lg" className="bg-white text-indigo-800 hover:bg-indigo-50">Book a CRM consultation <ArrowRight className="ml-2 h-5 w-5" /></Button>
            </a>
          </TrackedCTA>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
