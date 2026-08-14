import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  FileCheck2,
  GitBranch,
  LayoutDashboard,
  Phone,
  Route,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react';
import HubSpotImplementationLeadForm from '@/components/HubSpotImplementationLeadForm';
import TrackedCTA from '@/components/TrackedCTA';

const pageUrl = 'https://www.emergent-logic.ca/hubspot-implementation';

export const metadata = {
  title: 'HubSpot Rollout Completion & Implementation Canada',
  description: 'Finish an in-progress HubSpot rollout or start a controlled implementation with documented decisions, pilot testing, reporting validation, training, and handoff.',
  alternates: { canonical: pageUrl },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'HubSpot Rollout Completion | Emergent Logic',
    description: 'Review what is built, close the open decisions, validate the pilot, and prepare a controlled HubSpot production rollout.',
    url: pageUrl,
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const operatingLayers = [
  { icon: Route, label: 'Lead capture', detail: 'Source and request context' },
  { icon: Users, label: 'Ownership', detail: 'Lifecycle, routing and next action' },
  { icon: Workflow, label: 'Automation', detail: 'Rules, suppression and exceptions' },
  { icon: BarChart3, label: 'Reporting', detail: 'Definitions leaders can trust' },
];

const paths = [
  {
    title: 'Finish an in-progress rollout',
    text: 'Review the current build, close open decisions, prepare representative pilot scenarios, resolve blockers, and document the production acceptance path.',
  },
  {
    title: 'New HubSpot implementation',
    text: 'Translate the actual sales and follow-up process into pipelines, properties, permissions, routing, reporting, and an acceptance plan.',
  },
  {
    title: 'Portal cleanup and relaunch',
    text: 'Inventory old fields and workflows, resolve conflicting definitions, simplify automation, and relaunch the portal with documented ownership.',
  },
  {
    title: 'Migration or integration',
    text: 'Map source data and system boundaries, test imports and sync logic, reconcile results, and record the approved cutover path.',
  },
];

const phases = [
  ['01', 'Diagnose', 'Process, users, data, current portal, connected systems, and the decisions the CRM must support'],
  ['02', 'Design', 'Lifecycle definitions, pipelines, ownership, permissions, reporting, automation boundaries, and tests'],
  ['03', 'Build', 'Approved HubSpot configuration with assumptions, dependencies, and exceptions recorded'],
  ['04', 'Validate', 'Representative scenarios, issue disposition, data reconciliation, and decision-ready reports'],
  ['05', 'Transfer', 'Training, documentation, client-controlled access, backlog, and support boundaries'],
];

const failureSignals = [
  'Website inquiries arrive, but the CRM does not show a clear owner or next action.',
  'Lifecycle stages and deal stages mean different things to different people.',
  'Old workflows still run, duplicate one another, or have unclear suppression rules.',
  'Dashboards show activity, but leaders do not trust the pipeline or source data.',
  'The portal depends on one person because administration and exceptions are undocumented.',
];

const faqs = [
  {
    q: 'Can you finish a HubSpot implementation that is already underway?',
    a: 'Yes. The first review can inventory what is built, identify unresolved operating decisions, check pilot readiness, and document the next bounded work package. A restart is not assumed.',
  },
  {
    q: 'Is Emergent Logic a HubSpot Solutions Partner?',
    a: 'Yes. Emergent Logic is listed in HubSpot’s public Solutions Directory as a Solutions Partner. The specific HubSpot tier, features, and services required for an engagement are still confirmed during discovery.',
  },
  {
    q: 'Can you implement a new HubSpot portal?',
    a: 'A written scope can cover process mapping, pipelines, lifecycle stages, properties, permissions, workflows, reporting, data migration, integrations, testing, training, and handoff. The licensed HubSpot tier and confirmed requirements determine the final scope.',
  },
  {
    q: 'Can you clean up an underused HubSpot portal?',
    a: 'Yes. Discovery can identify unused or conflicting fields, lifecycle gaps, unreliable routing, duplicate workflows, reporting issues, and unclear ownership before a controlled cleanup or relaunch is proposed.',
  },
  {
    q: 'Can you migrate from Salesforce or spreadsheets into HubSpot?',
    a: 'Migration can be scoped after the source systems, data quality, record ownership, associations, history, automation, and reconciliation requirements are understood. A test import and acceptance checks should precede the final cutover.',
  },
  {
    q: 'How are cost and timing determined?',
    a: 'They depend on the portal tier, users, data, pipelines, workflows, integrations, stakeholders, testing, training, and release risk. Emergent Logic provides price and timing in a written proposal after discovery.',
  },
];

export default function HubSpotImplementationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="border-b border-white/10 bg-[#0D1A2B] text-white">
        <div className="container mx-auto flex min-h-16 max-w-6xl flex-col items-stretch justify-between gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/" className="flex flex-col leading-tight" aria-label="Emergent Logic home">
            <span className="text-lg font-bold">Emergent Logic</span>
            <span className="max-w-full text-[11px] font-medium leading-4 text-[#A9B8FF]">CRM Implementation, Integration &amp; Automation</span>
          </Link>
          <TrackedCTA ctaName="HubSpot Landing Page Header Call" destination="phone">
            <a href="tel:+17786526271" className="inline-flex min-h-10 w-full items-center justify-center border border-white/35 px-4 text-sm font-semibold text-white hover:bg-white/10 sm:w-auto">
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" /> Call 778-652-6271
            </a>
          </TrackedCTA>
        </div>
      </div>

      <header className="overflow-hidden bg-[#0D1A2B] pb-16 pt-12 text-white sm:pb-20 sm:pt-16">
        <div className="container mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-xs font-semibold leading-5 text-[#A9B8FF] sm:text-sm">HUBSPOT ROLLOUT COMPLETION AND IMPLEMENTATION</p>
            <h1 className="mt-4 max-w-3xl break-words text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Finish the HubSpot rollout with the decisions, testing and handoff documented
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Emergent Logic reviews what is already built, closes operating gaps, supports a representative pilot, validates reporting and automation, and records what must pass before production release.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedCTA ctaName="HubSpot Landing Page Rollout Review" destination="#implementation-review">
                <a href="#implementation-review" className="inline-flex min-h-12 items-center justify-center bg-[#4B37C8] px-6 py-3 font-semibold text-white hover:bg-[#38289F]">
                  Request a rollout review <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </TrackedCTA>
              <TrackedCTA ctaName="HubSpot Landing Page Book Consultation" destination="calendly">
                <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10">
                  Book a 30-minute consultation
                </a>
              </TrackedCTA>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {['Listed HubSpot Solutions Partner', 'In-progress or new implementations', 'Pilot and acceptance checks', 'Client-controlled documentation'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />{item}</span>
              ))}
            </div>
          </div>

          <div className="border border-white/15 bg-[#14263E] p-5 shadow-2xl sm:p-7" aria-label="HubSpot operating system map">
            <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold text-[#A9B8FF]">ROLLOUT CONTROL LINE</p>
                <h2 className="mt-2 text-xl font-bold">One operating line from current build to accepted release</h2>
              </div>
              <LayoutDashboard className="h-8 w-8 flex-shrink-0 text-[#A9B8FF]" aria-hidden="true" />
            </div>
            <div className="mt-5 space-y-3">
              {operatingLayers.map((item, index) => (
                <div key={item.label} className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border border-white/10 bg-[#0D1A2B] p-3">
                  <span className="flex h-10 w-10 items-center justify-center bg-[#EEF2FF] text-[#4B37C8]"><item.icon className="h-5 w-5" aria-hidden="true" /></span>
                  <span>
                    <span className="block font-semibold">{item.label}</span>
                    <span className="mt-0.5 block text-sm text-slate-400">{item.detail}</span>
                  </span>
                  <span className="text-xs font-bold text-[#A9B8FF]">0{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 border border-emerald-400/30 bg-emerald-950/40 p-3 text-sm text-emerald-100">
              Exceptions stay visible so the team knows what needs human review.
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-[#FBFBFF]">
        <div className="container mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[10rem_1fr] md:items-center">
          <Image src="/brand/emergent-logic-primary-logo-dark-500.png" alt="Emergent Logic" width={160} height={160} className="h-40 w-40" />
          <div>
            <p className="text-sm font-semibold text-indigo-700">A CONTROLLED HUBSPOT IMPLEMENTATION</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Implementation should leave your team with a system it can operate</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Emergent Logic is listed in HubSpot’s public Solutions Directory as a Solutions Partner. We connect process design, portal configuration, data, workflows, reporting, testing, and documented handoff in one controlled implementation path.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-700">THREE IMPLEMENTATION PATHS</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Start with the portal you actually have</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">A partly built portal is not assumed to need a restart. The review identifies which decisions, tests, fixes, or integrations are required for the next responsible release.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {paths.map((item, index) => (
              <article key={item.title} className="border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-indigo-700">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#FBFBFF] py-16 sm:py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-indigo-700">USEFUL REVIEW INPUTS</p>
            <h2 className="mt-3 text-3xl font-bold">Bring the evidence your team already has</h2>
            <ul className="mt-7 space-y-4 text-slate-700">
              {[
                'Current build register, configuration inventory, or project notes',
                'Open decisions, blockers, dependencies, and known defects',
                'The pilot users, scenarios, reports, and integrations that matter most',
                'The production outcome and internal ownership model the team needs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-700" aria-hidden="true" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-l-4 border-[#0F766E] pl-6 sm:pl-8">
            <p className="text-sm font-semibold text-[#0F766E]">REVIEW OUTPUT</p>
            <h2 className="mt-3 text-3xl font-bold">Leave with a bounded next decision</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">A useful review separates complete work from open work and records the safest next package before configuration continues.</p>
            <ul className="mt-7 space-y-3 text-slate-700">
              {[
                'Confirmed current-state inventory',
                'Prioritized decisions and dependencies',
                'Pilot and acceptance evidence requirements',
                'A written next work package for separate approval',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FileCheck2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0F766E]" aria-hidden="true" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF2FF] py-16 sm:py-20">
        <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm font-semibold text-indigo-700">COMMON FAILURE SIGNALS</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The portal is live. The operating system is not.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">These are not reasons to buy more software. They are reasons to inspect the process, ownership, data, and automation already in place.</p>
          </div>
          <div className="divide-y divide-indigo-200 border-y border-indigo-200">
            {failureSignals.map((signal, index) => (
              <div key={signal} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5">
                <span className="flex h-9 w-9 items-center justify-center bg-white text-sm font-bold text-indigo-700">0{index + 1}</span>
                <p className="pt-1 leading-7 text-slate-800">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-700">THE IMPLEMENTATION CONTROL LINE</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Every phase ends with a decision or evidence</h2>
          </div>
          <div className="mt-10 border-y border-slate-200">
            {phases.map(([number, name, detail]) => (
              <div key={number} className="grid gap-3 border-b border-slate-200 py-6 last:border-b-0 sm:grid-cols-[4rem_9rem_1fr] sm:items-start">
                <span className="text-sm font-bold text-indigo-700">{number}</span>
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="leading-7 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D1A2B] py-16 text-white sm:py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-[#A9B8FF]">WHAT THE HANDOFF SHOULD MAKE CLEAR</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The team should know what runs, who owns it, and what still needs attention</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [Database, 'Data ownership', 'Authoritative systems, fields, associations, and reconciliation rules'],
                [GitBranch, 'Automation boundaries', 'Triggers, suppression, exceptions, owners, and failure handling'],
                [FileCheck2, 'Acceptance evidence', 'Representative scenarios, results, open issues, and approvals'],
                [ShieldCheck, 'Client control', 'Named access owners, documentation, training, and support boundaries'],
              ].map(([Icon, title, text]) => (
                <div key={title} className="border border-white/15 p-5">
                  <Icon className="h-6 w-6 text-[#A9B8FF]" aria-hidden="true" />
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-white/15 bg-[#14263E] p-6 sm:p-8">
            <p className="text-sm font-semibold text-[#A9B8FF]">FIT CHECK</p>
            <h3 className="mt-3 text-2xl font-bold">A useful first conversation answers four questions</h3>
            <ol className="mt-6 space-y-4 text-slate-200">
              {[
                'What business decision or follow-up problem must HubSpot support?',
                'Which data and systems are authoritative today?',
                'Which people own configuration, testing, exceptions, and adoption?',
                'What evidence would make the implementation safe to accept?',
              ].map((item, index) => (
                <li key={item} className="grid grid-cols-[2rem_1fr] gap-3"><span className="font-bold text-[#A9B8FF]">{index + 1}</span><span className="leading-7">{item}</span></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="implementation-review" className="scroll-mt-8 bg-[#FBFBFF] py-16 sm:py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <p className="text-sm font-semibold text-indigo-700">NEXT STEP</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Request a HubSpot rollout review</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Tell us what is built, what remains uncertain, and what the next release needs to accomplish. Emergent Logic will confirm whether a focused review is the right next step.</p>
            <div className="mt-8 border-l-4 border-[#0F766E] pl-5">
              <p className="font-semibold text-slate-950">No scope is implied by the form.</p>
              <p className="mt-2 leading-7 text-slate-600">Price, timing, access, dependencies, and included services are confirmed only in a written proposal.</p>
            </div>
          </div>
          <HubSpotImplementationLeadForm />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-semibold text-indigo-700">HUBSPOT IMPLEMENTATION FAQ</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Questions before the first conversation</h2>
          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <article key={faq.q} className="py-6">
                <h3 className="text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E3A5F] py-14 text-white">
        <div className="container mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-[#A9B8FF]">EMERGENT LOGIC</p>
            <p className="mt-2 max-w-xl text-lg text-slate-200">CRM implementation, integration, and automation from Surrey, BC, serving Canadian growing teams.</p>
          </div>
          <TrackedCTA ctaName="HubSpot Landing Page Final Rollout Review" destination="#implementation-review">
            <a href="#implementation-review" className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-semibold text-[#1E3A5F] hover:bg-[#EEF2FF]">
              Request a rollout review <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </TrackedCTA>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center">
          <p>© 2026 Emergent Logic. Surrey, BC, Canada.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="mailto:info@emergent-logic.ca" className="hover:text-indigo-700">info@emergent-logic.ca</a>
            <Link href="/privacy" className="hover:text-indigo-700">Privacy</Link>
            <Link href="/terms" className="hover:text-indigo-700">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
