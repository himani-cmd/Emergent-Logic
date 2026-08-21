import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  GitBranch,
  Globe2,
  Phone,
  RefreshCw,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import CRMImplementationAutomationLeadForm from '@/components/CRMImplementationAutomationLeadForm';
import TrackedCTA from '@/components/TrackedCTA';

const pageUrl = 'https://www.emergent-logic.ca/crm-implementation-automation';

export const metadata = {
  title: 'CRM Implementation & Marketing Automation Services Canada',
  description: 'Implement CRM, connect marketing automation, migrate data, integrate systems, test workflows, and document handoff for Canadian growing teams.',
  alternates: { canonical: pageUrl },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'CRM Implementation & Marketing Automation | Emergent Logic',
    description: 'Plan, implement, connect, test, and document the CRM and automation your team needs to operate.',
    url: pageUrl,
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const controlPath = [
  { icon: Globe2, label: 'Lead capture', detail: 'Forms, source data, consent, and routing' },
  { icon: Database, label: 'CRM', detail: 'Lifecycle, pipelines, ownership, and records' },
  { icon: Workflow, label: 'Automation', detail: 'Scoring, nurture, tasks, and exceptions' },
  { icon: GitBranch, label: 'Sales handoff', detail: 'Next actions, alerts, and accountability' },
  { icon: BarChart3, label: 'Reporting', detail: 'Pipeline, attribution, and operating decisions' },
];

const servicePaths = [
  {
    title: 'CRM implementation',
    text: 'Configure HubSpot, Salesforce, or Zoho around the approved sales process, lifecycle, ownership, permissions, reporting, and adoption requirements.',
  },
  {
    title: 'Marketing automation',
    text: 'Connect forms, lead scoring, nurture, campaign attribution, and sales handoff to CRM data with clear triggers and human review where it matters.',
  },
  {
    title: 'Integrations and data flows',
    text: 'Connect websites and business systems using supported native tools, middleware, APIs, or webhooks with documented ownership and exception handling.',
  },
  {
    title: 'Migration, testing, and handoff',
    text: 'Map and validate data, test representative scenarios, train the operating team, and document what runs, who owns it, and what remains open.',
  },
];

const phases = [
  ['01', 'Diagnose', 'Business process, users, systems, data, pain points, and the decisions the operating system must support'],
  ['02', 'Design', 'CRM model, lifecycle, ownership, automation boundaries, integration rules, reporting, and acceptance checks'],
  ['03', 'Build', 'Approved configuration, workflows, data mappings, forms, reports, and integrations with dependencies recorded'],
  ['04', 'Validate', 'Representative scenarios, failure handling, reconciliation, user testing, and decision-ready evidence'],
  ['05', 'Transfer', 'Training, documentation, access ownership, backlog, and the boundaries of any follow-on support'],
];

const warningSignals = [
  'Leads arrive through several forms and inboxes, but ownership is not visible.',
  'The CRM exists, but sales stages, fields, and reports do not match how the team works.',
  'Marketing automation runs without reliable lifecycle, consent, suppression, or handoff rules.',
  'Systems exchange data without a documented source of truth or clear recovery process.',
  'The team cannot explain which workflows run, who maintains them, or how changes are accepted.',
];

const faqs = [
  {
    q: 'Can Emergent Logic implement a new CRM?',
    a: 'Yes. A written scope can cover process mapping, CRM configuration, pipelines, lifecycle stages, properties, permissions, automation, reports, testing, training, and handoff. The selected platform and final scope depend on the confirmed requirements.',
  },
  {
    q: 'Which CRM platforms can be considered?',
    a: 'HubSpot, Salesforce, and Zoho are the primary platforms in the current service scope. The review begins with the operating requirements, users, data, integrations, subscription constraints, and ownership model before a platform decision is confirmed.',
  },
  {
    q: 'What can marketing automation include?',
    a: 'Depending on the approved scope, it can include forms, lifecycle rules, lead scoring, segmentation, nurture, task creation, alerts, campaign attribution, sales handoff, suppression, testing, and reporting. Available features depend on the licensed platform.',
  },
  {
    q: 'Can you connect the CRM to our website and other systems?',
    a: 'Integration work can use supported native connections, middleware, APIs, and webhooks. The systems, authentication, field ownership, sync direction, error handling, reconciliation, and testing requirements are confirmed before production work.',
  },
  {
    q: 'Can you migrate spreadsheet or legacy CRM data?',
    a: 'Migration can be scoped after the source systems, data quality, owners, associations, history, automation, and reporting requirements are understood. A controlled sample and reconciliation checks should precede final cutover.',
  },
  {
    q: 'How are cost and timing determined?',
    a: 'They depend on the platform, users, data, pipelines, workflows, integrations, stakeholders, testing, training, and release risk. Emergent Logic confirms price and timing only in a written proposal after discovery.',
  },
];

export default function CRMImplementationAutomationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="border-b border-white/10 bg-[#0D1A2B] text-white">
        <div className="container mx-auto flex min-h-16 max-w-6xl flex-col items-stretch justify-between gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/" className="flex flex-col leading-tight" aria-label="Emergent Logic home">
            <span className="text-lg font-bold">Emergent Logic</span>
            <span className="max-w-full text-[11px] font-medium leading-4 text-[#A9B8FF]">CRM Implementation, Integration &amp; Automation</span>
          </Link>
          <TrackedCTA ctaName="CRM Automation Landing Page Header Call" destination="phone">
            <a href="tel:+17784862331" className="inline-flex min-h-10 w-full items-center justify-center border border-white/35 px-4 text-sm font-semibold text-white hover:bg-white/10 sm:w-auto">
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" /> Call 778-486-2331
            </a>
          </TrackedCTA>
        </div>
      </div>

      <header className="overflow-hidden bg-[#0D1A2B] pb-16 pt-12 text-white sm:pb-20 sm:pt-16">
        <div className="container mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.06fr_0.94fr]">
          <div>
            <p className="text-xs font-semibold leading-5 text-[#A9B8FF] sm:text-sm">CRM IMPLEMENTATION, MARKETING AUTOMATION AND INTEGRATION</p>
            <h1 className="mt-4 max-w-3xl break-words text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Implement the CRM. Connect the automation. Keep every handoff visible.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Emergent Logic plans and implements CRM, marketing automation, data migration, reporting, and system integrations around the way your team captures, qualifies, follows up, and hands off leads.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedCTA ctaName="CRM Automation Landing Page Review" destination="#crm-automation-review">
                <a href="#crm-automation-review" className="inline-flex min-h-12 items-center justify-center bg-[#4B37C8] px-6 py-3 font-semibold text-white hover:bg-[#38289F]">
                  Request a CRM and automation review <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </TrackedCTA>
              <TrackedCTA ctaName="CRM Automation Landing Page Book Consultation" destination="calendly">
                <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10">
                  Book a 30-minute consultation
                </a>
              </TrackedCTA>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {['HubSpot, Salesforce, or Zoho', 'CRM-first marketing automation', 'Website and system integrations', 'Testing, training, and handoff'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />{item}</span>
              ))}
            </div>
          </div>

          <div className="border border-white/15 bg-[#14263E] p-5 shadow-2xl sm:p-7" aria-label="Lead-to-customer operating path">
            <div className="border-b border-white/10 pb-5">
              <p className="text-xs font-semibold text-[#A9B8FF]">ONE CONTROLLED OPERATING PATH</p>
              <h2 className="mt-2 text-xl font-bold">Lead capture, CRM, automation, and reporting designed together</h2>
            </div>
            <div className="mt-5">
              {controlPath.map((item, index) => (
                <div key={item.label} className="relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-x border-t border-white/10 bg-[#0D1A2B] p-3 last:border-b">
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
              Every trigger, owner, exception, and acceptance check should be visible before launch.
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-[#FBFBFF]">
        <div className="container mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[10rem_1fr] md:items-center">
          <Image src="/brand/emergent-logic-primary-logo-dark-500.png" alt="Emergent Logic" width={160} height={160} className="h-40 w-40" />
          <div>
            <p className="text-sm font-semibold text-indigo-700">ONE CONNECTED DELIVERY SCOPE</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">The CRM and the automation around it should operate as one system</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              A reliable build connects the sales process, customer data, forms, follow-up, marketing workflows, business systems, reporting, testing, and handoff. Treating each part as a separate project creates gaps that people must reconcile manually.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-700">FOUR DELIVERY PATHS</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Start with the operating outcome, then choose the tools</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">The review separates what must be implemented, automated, connected, migrated, tested, and transferred before production work begins.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {servicePaths.map((item, index) => (
              <article key={item.title} className="border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-indigo-700">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#EEF2FF] py-16 sm:py-20">
        <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <p className="text-sm font-semibold text-indigo-700">WHEN THE SYSTEM NEEDS ATTENTION</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The leak is usually between tools, teams, and ownership</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">Software can be configured correctly and still fail operationally when the handoffs and exceptions are invisible.</p>
          </div>
          <div className="divide-y divide-indigo-200 border-y border-indigo-200">
            {warningSignals.map((signal, index) => (
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
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The team should know what runs, who owns it, and what happens when it fails</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [Database, 'Data ownership', 'Authoritative systems, fields, identities, associations, and reconciliation rules'],
                [Workflow, 'Automation boundaries', 'Triggers, suppression, human review, exceptions, owners, and recovery paths'],
                [RefreshCw, 'Integration control', 'Sync direction, retries, alerts, logs, dependencies, and change procedures'],
                [ShieldCheck, 'Client control', 'Named access owners, documentation, training, backlog, and support boundaries'],
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
                'Which sales and marketing processes must the system support?',
                'What must happen after a form, email, call, meeting, or campaign response?',
                'Which system owns each record, field, status, and decision?',
                'What testing, training, monitoring, and evidence define acceptance?',
              ].map((item, index) => (
                <li key={item} className="grid grid-cols-[2rem_1fr] gap-3"><span className="font-bold text-[#A9B8FF]">{index + 1}</span><span className="leading-7">{item}</span></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="crm-automation-review" className="scroll-mt-8 bg-[#FBFBFF] py-16 sm:py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <p className="text-sm font-semibold text-indigo-700">NEXT STEP</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Request a CRM and automation review</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Tell us about the CRM, marketing workflows, website forms, data, integrations, reporting, and operating process that need to work together.</p>
            <div className="mt-8 border-l-4 border-[#0F766E] pl-5">
              <p className="font-semibold text-slate-950">No scope is implied by the form.</p>
              <p className="mt-2 leading-7 text-slate-600">Price, timing, access, dependencies, platform decisions, and included services are confirmed only in a written proposal.</p>
            </div>
          </div>
          <CRMImplementationAutomationLeadForm />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-semibold text-indigo-700">CRM AND AUTOMATION FAQ</p>
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
            <p className="mt-2 max-w-2xl text-xl font-bold">CRM implementation, integration, and automation from Surrey, BC, serving Canadian growing teams.</p>
          </div>
          <TrackedCTA ctaName="CRM Automation Landing Page Final Review" destination="#crm-automation-review">
            <a href="#crm-automation-review" className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 font-semibold text-[#1E3A5F] hover:bg-[#EEF2FF]">
              Request a CRM and automation review <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </TrackedCTA>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="container mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Emergent Logic. Surrey, BC, Canada.</p>
          <div className="flex flex-wrap gap-5">
            <a href="mailto:info@emergent-logic.ca" className="hover:text-slate-950">info@emergent-logic.ca</a>
            <Link href="/privacy" className="hover:text-slate-950">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-950">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
