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
  CheckCircle,
  ClipboardCheck,
  Database,
  Download,
  FileCheck2,
  GitBranch,
  LockKeyhole,
  Map,
  ShieldCheck,
  UserRoundCheck,
  Workflow,
  XCircle,
} from 'lucide-react';

const pageUrl = 'https://www.emergent-logic.ca/services/crm-revops-transition-sprint';

export const metadata = {
  title: 'CRM & RevOps Transition Backlog Sprint',
  description: 'A bounded, read-only CRM and RevOps review for teams hiring an operator, clarifying ownership, or working through one defined systems backlog.',
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM & RevOps Transition Backlog Sprint',
    description: 'Map one system boundary, make ownership visible, and leave a prioritized operating backlog.',
    url: pageUrl,
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM & RevOps Transition Backlog Sprint',
    description: 'A bounded, read-only review for one CRM or RevOps system boundary.',
    images: ['https://www.emergent-logic.ca/og-image.png'],
  },
};

const fitSignals = [
  'A permanent CRM or RevOps hire is still being recruited or onboarded.',
  'Ownership of routing, lifecycle, reporting, data, or integrations is unclear.',
  'One workflow produces manual work, visible exceptions, or reporting uncertainty.',
  'The incoming operator needs a controlled backlog instead of undocumented logic.',
];

const nonFitSignals = [
  'An open-ended transformation with no decision owner or system boundary.',
  'A request for guaranteed revenue, adoption, rankings, or implementation results.',
  'Free production configuration, migration, workflow building, or data cleanup.',
  'Work that requires passwords or sensitive customer records before scope and access controls are agreed.',
];

const deliverables = [
  { icon: Map, title: 'Current-state map', description: 'One agreed workflow or system boundary documented from entry point through owner, next action, exception, and management visibility.' },
  { icon: UserRoundCheck, title: 'Ownership matrix', description: 'Decision owner, operating owner, approval points, exception queue, and the people responsible for reviewing changes.' },
  { icon: ClipboardCheck, title: 'Prioritized backlog', description: 'Defined work items with dependencies, acceptance checks, and a clear distinction between diagnostic and implementation scope.' },
  { icon: FileCheck2, title: 'Control checklist', description: 'Practical checks for routing, data, reporting, integrations, or automation, followed by a human handoff walkthrough.' },
];

const process = [
  { number: '01', title: 'Fit check', description: 'Confirm the business problem, system boundary, evidence, decision owner, and desired timing.' },
  { number: '02', title: 'Read-only review', description: 'Examine the agreed process and available evidence without changing production systems.' },
  { number: '03', title: 'Backlog build', description: 'Document gaps, dependencies, ownership, controls, and testable next steps.' },
  { number: '04', title: 'Human handoff', description: 'Review the findings and decide whether a separate implementation scope is appropriate.' },
];

const faqs = [
  {
    q: 'Does this sprint replace a permanent RevOps or CRM hire?',
    a: 'No. It is designed to make one system boundary and its backlog easier for the responsible operator to inherit. It does not replace ongoing ownership or a permanent hire.',
  },
  {
    q: 'Do you need administrator access to begin?',
    a: 'Not for the fit check. The initial conversation can use the process description and non-sensitive evidence. Any later access is scoped, approved, and kept read-only where possible.',
  },
  {
    q: 'Will production workflows be changed during the review?',
    a: 'No production workflow, permission, forecast, commission, customer communication, or integration logic is changed without written approval and a defined implementation scope.',
  },
  {
    q: 'How are timing and price determined?',
    a: 'Timing and a fixed fee are proposed only after the system boundary, deliverables, access limits, dependencies, and acceptance checks are understood.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'CRM and RevOps Transition Backlog Sprint',
      serviceType: 'Read-only CRM and revenue operations transition backlog review',
      description: 'A bounded review that maps one CRM or RevOps system boundary and produces an ownership matrix, prioritized backlog, control checklist, and human handoff.',
      url: pageUrl,
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      areaServed: { '@type': 'Country', name: 'Canada' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function CrmRevOpsTransitionSprintPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="overflow-hidden bg-[#1E3A5F] pb-14 pt-28 text-white md:pb-20 md:pt-32">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/#services' },
            { label: 'CRM/RevOps Transition Sprint', href: '/services/crm-revops-transition-sprint' },
          ]} tone="dark" />
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <Badge className="mb-5 border-white/20 bg-white/10 text-white hover:bg-white/10">Starts read-only</Badge>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                CRM/RevOps transition backlog sprint
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                Turn one unclear CRM or revenue-operations handoff into a documented, prioritized operating backlog. The work is designed for a hiring transition, an ownership gap, or one defined systems problem that needs a responsible next step.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedCTA ctaName="Transition Sprint Fit Check" destination="/contact#contact-form">
                  <Link href="/contact#contact-form" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full bg-white text-[#1E3A5F] hover:bg-[#EEF2FF] sm:w-auto">
                      Request a fit check <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </TrackedCTA>
                <TrackedCTA ctaName="Download Transition Sprint Overview" destination="transition-sprint-pdf">
                  <a href="/resources/crm-revops-transition-backlog-sprint.pdf" download className="w-full sm:w-auto">
                    <Button size="lg" className="w-full border border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto">
                      Download the overview <Download className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </TrackedCTA>
              </div>
            </div>

            <div className="border-l border-white/20 pl-6 md:pl-8" aria-label="Sprint sequence">
              {[
                { icon: Database, label: 'One system boundary' },
                { icon: GitBranch, label: 'Visible ownership and exceptions' },
                { icon: ClipboardCheck, label: 'Prioritized, testable backlog' },
                { icon: UserRoundCheck, label: 'Human-reviewed handoff' },
              ].map((item, index) => (
                <div key={item.label} className="relative flex min-h-16 items-center gap-4 border-b border-white/15 py-4 last:border-b-0">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <item.icon className="h-5 w-5 text-[#C7D2FE]" />
                  </span>
                  <div>
                    <p className="font-mono text-xs text-[#C7D2FE]">0{index + 1}</p>
                    <p className="font-semibold text-white">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DFE3F5] bg-[#FBFBFF] py-9">
        <div className="container mx-auto grid gap-8 px-4 sm:grid-cols-3">
          {[
            { value: '71', label: 'of 100 public postings named workflow or automation' },
            { value: '57', label: 'named reporting or forecasting' },
            { value: '35', label: 'named data hygiene or governance' },
          ].map((item) => (
            <div key={item.value} className="border-l-4 border-[#6366F1] pl-4">
              <p className="text-4xl font-bold text-[#1E3A5F]">{item.value}</p>
              <p className="mt-1 max-w-xs text-sm leading-relaxed text-[#667085]">{item.label}</p>
            </div>
          ))}
          <p className="sm:col-span-3 text-xs leading-relaxed text-[#667085]">
            Directional demand signals from the source-linked 2026 CRM Cleanup Demand Report, not estimates of CRM failure rates.{' '}
            <Link href="/research/2026-crm-cleanup-demand-report" className="font-semibold text-[#4B37C8] hover:underline">Review the methodology and sources.</Link>
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-4xl">
            <Badge className="mb-4 border-[#DFE3F5] bg-[#EEF2FF] text-[#1E3A5F] hover:bg-[#EEF2FF]">Fit before scope</Badge>
            <h2 className="text-3xl font-bold text-[#101828] md:text-4xl">A bounded offer for the hiring gap</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#667085]">
              The sprint is useful when the problem and decision owner are real, but the team needs a controlled map and backlog before asking a permanent operator to inherit the work.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="border-t-4 border-[#0F766E] pt-6">
              <div className="mb-5 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-[#0F766E]" />
                <h3 className="text-2xl font-bold text-[#101828]">A practical fit</h3>
              </div>
              <ul className="space-y-4">
                {fitSignals.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#344054]">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0F766E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-4 border-[#D95D39] pt-6">
              <div className="mb-5 flex items-center gap-3">
                <XCircle className="h-6 w-6 text-[#D95D39]" />
                <h3 className="text-2xl font-bold text-[#101828]">Not the right scope</h3>
              </div>
              <ul className="space-y-4">
                {nonFitSignals.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#344054]">
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D95D39]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#DFE3F5] bg-[#FBFBFF] py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-4xl">
            <h2 className="text-3xl font-bold text-[#101828] md:text-4xl">What the sprint leaves behind</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#667085]">Each deliverable stays inside the system boundary agreed during discovery.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item) => (
              <article key={item.title} className="rounded-lg border border-[#DFE3F5] bg-white p-6">
                <item.icon className="mb-5 h-7 w-7 text-[#4B37C8]" />
                <h3 className="text-lg font-bold text-[#101828]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#667085]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-3xl font-bold text-[#101828] md:text-4xl">How the review starts</h2>
          <ol className="grid gap-0 border-y border-[#DFE3F5] md:grid-cols-4">
            {process.map((item) => (
              <li key={item.number} className="min-h-52 border-b border-[#DFE3F5] px-5 py-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <p className="font-mono text-sm font-bold text-[#4B37C8]">{item.number}</p>
                <h3 className="mt-5 text-xl font-bold text-[#101828]">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-[#667085]">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#101828] py-14 text-white">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <div>
            <LockKeyhole className="mb-4 h-9 w-9 text-[#A5B4FC]" />
            <p className="font-mono text-xs text-[#A5B4FC]">CONTROL BOUNDARY</p>
            <h2 className="mt-3 text-3xl font-bold text-white">No silent production changes</h2>
          </div>
          <div className="border-l border-white/20 pl-6 md:pl-8">
            <p className="text-lg leading-relaxed text-slate-300">
              No production workflow, permission, forecast, commission, customer communication, or integration logic is changed without written approval. Initial discussions should not include passwords, payment information, or sensitive customer records.
            </p>
            <div className="mt-6 flex items-start gap-3 text-sm text-slate-300">
              <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-300" />
              <span>Access begins read-only where possible and implementation work requires its own agreed scope.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-[#101828] md:text-4xl">Transition sprint FAQ</h2>
          <div className="divide-y border-y border-[#DFE3F5]">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="font-bold text-[#101828]">{faq.q}</h3>
                <p className="mt-2 leading-relaxed text-[#667085]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4B37C8] py-16 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <Workflow className="mx-auto mb-4 h-10 w-10 text-[#C7D2FE]" />
          <h2 className="text-3xl font-bold text-white md:text-4xl">Name the process that needs an owner</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-[#E0E7FF]">
            Send the system, the handoff that is unclear, and what needs to be different. Emergent Logic will confirm whether one bounded transition sprint is a practical fit before proposing scope.
          </p>
          <TrackedCTA ctaName="Transition Sprint Bottom Fit Check" destination="/contact#contact-form">
            <Link href="/contact#contact-form" className="mt-8 inline-block">
              <Button size="lg" className="bg-white text-[#4B37C8] hover:bg-[#EEF2FF]">
                Request a fit check <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </TrackedCTA>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
