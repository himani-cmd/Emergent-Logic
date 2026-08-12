import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, CheckCircle2, Database, FileText, LifeBuoy, Route, Workflow } from 'lucide-react';

const pageUrl = 'https://www.emergent-logic.ca/hubspot-admin-support-canada-us';

export const metadata = {
  title: 'HubSpot Admin Support Canada & US',
  description: 'Remote HubSpot admin support for Canada and US teams: CRM cleanup, properties, lifecycle stages, workflows, reports, forms, routing, and documentation.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'HubSpot Admin Support Canada & US | Emergent Logic',
    description: 'Ongoing HubSpot CRM administration, cleanup, workflows, reporting, forms, routing, and documentation for small and growing teams.',
    url: pageUrl,
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const supportAreas = [
  { icon: LifeBuoy, title: 'Admin request backlog', text: 'Prioritize user, property, view, permission, pipeline, list, and small configuration requests against business impact.' },
  { icon: Database, title: 'CRM data health', text: 'Review duplicates, stale properties, missing owners, inconsistent stages, imports, associations, and records that weaken reporting.' },
  { icon: Workflow, title: 'Workflow controls', text: 'Audit enrollment, exclusions, re-enrollment, suppression, ownership, notifications, and the evidence needed to change automation safely.' },
  { icon: Route, title: 'Forms and lead routing', text: 'Connect form intake to records, acknowledgement, ownership, alerts, tasks, exceptions, and a visible follow-up path.' },
  { icon: BarChart3, title: 'Reports and dashboards', text: 'Define lifecycle, pipeline, source, activity, owner, and conversion reporting that leadership and operators interpret consistently.' },
  { icon: FileText, title: 'Documentation and handoff', text: 'Maintain property, workflow, report, integration, and change notes so the portal remains understandable and transferable.' },
];

const fitSignals = [
  'HubSpot is live, but nobody consistently owns administration.',
  'Users create workarounds because properties, stages, or views are confusing.',
  'Website inquiries enter HubSpot, but acknowledgement or ownership is unreliable.',
  'Workflows exist, but exclusions, re-enrollment, and failure paths are unclear.',
  'Reports disagree because lifecycle, lead status, source, or pipeline definitions drifted.',
  'The team needs recurring senior help, not another full implementation.',
];

const boundaries = [
  ['Repair before more automation', 'If data, lifecycle stages, ownership, or routing are unclear, fix the foundation before adding workflows.'],
  ['Subscription-aware recommendations', 'Capabilities depend on the HubSpot products and tiers in the portal. Recommendations must fit the licensed tools.'],
  ['Controlled production changes', 'Configuration, workflow, form, integration, and routing changes require documented testing and approval.'],
  ['No hidden dependency', 'Access, decision records, documentation, and operating ownership remain visible to the client.'],
];

const faqs = [
  {
    q: 'Does a small business need a full-time HubSpot administrator?',
    a: 'Not always. Many teams need recurring cleanup, workflow updates, reports, forms, routing, user support, and documentation, but not enough work to justify a full-time hire.',
  },
  {
    q: 'Can HubSpot admin support be delivered remotely?',
    a: 'Yes. Discovery, configuration, testing, documentation, training, and recurring review can usually be delivered remotely for Canadian and US businesses through approved access and working sessions.',
  },
  {
    q: 'Should we start with cleanup or ongoing support?',
    a: 'If the portal has duplicate data, unclear lifecycle stages, weak ownership, or unreliable workflows, start with a bounded cleanup or relaunch. Ongoing support works better after the foundation is understandable.',
  },
  {
    q: 'Can you support HubSpot and Salesforce together?',
    a: 'Yes, when the coexistence and integration scope is approved. The source of truth, inclusion rules, field mappings, ownership, sync behaviour, and exception handling should be documented before changes are made.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'HubSpot Admin Support Canada and US',
      serviceType: 'Remote HubSpot admin support, CRM cleanup, workflows, reports, dashboards, forms, lead routing, and documentation',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: pageUrl,
      areaServed: [{ '@type': 'Country', name: 'Canada' }, { '@type': 'Country', name: 'United States' }],
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
    },
  ],
};

export default function HubSpotAdminSupportCanadaUs() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <header className="bg-[#0F1B2D] pb-20 pt-32 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/#services' },
            { label: 'HubSpot Admin Support', href: '/hubspot-admin-support-canada-us' },
          ]} />
          <p className="mt-5 text-sm font-semibold text-[#9FB4FF]">REMOTE SUPPORT ACROSS CANADA AND THE US</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            HubSpot admin support without another full-time hire
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            Keep HubSpot useful after implementation with cleanup, lifecycle and property governance, workflow controls, forms, lead routing, reporting, documentation, and recurring administration.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedCTA ctaName="Book a CRM Consultation - HubSpot Admin Support Hero" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-[#4F46E5] text-white hover:bg-[#4338CA] sm:w-auto">Discuss HubSpot support <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </a>
            </TrackedCTA>
            <Link href="/services/crm-relaunch" className="w-full sm:w-auto">
              <Button size="lg" className="w-full border border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto">Review CRM relaunch services</Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">What ongoing HubSpot administration covers</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Admin support is the recurring operating work that prevents a portal from drifting after launch. The priority is not the number of tickets closed; it is whether lead follow-up, user adoption, automation, and management reporting remain trustworthy.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supportAreas.map((area) => (
              <section key={area.title} className="rounded-lg border border-slate-200 p-6">
                <area.icon className="h-8 w-8 text-indigo-700" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold text-slate-950">{area.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{area.text}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">When recurring support is a good fit</h2>
            <div className="mt-7 space-y-4">
              {fitSignals.map((signal) => (
                <div key={signal} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-700" aria-hidden="true" />
                  <p className="leading-7 text-slate-700">{signal}</p>
                </div>
              ))}
            </div>
          </div>
          <section className="bg-white p-7 sm:p-9">
            <h3 className="text-2xl font-bold text-slate-950">A controlled first cycle</h3>
            <ol className="mt-6 space-y-5 text-slate-600">
              <li><strong className="text-slate-950">1. Triage:</strong> review the portal, open requests, lead path, data health, workflows, and reports.</li>
              <li><strong className="text-slate-950">2. Prioritize:</strong> separate urgent revenue or access issues from routine improvements and larger projects.</li>
              <li><strong className="text-slate-950">3. Deliver:</strong> implement approved changes with test evidence, notes, and rollback awareness.</li>
              <li><strong className="text-slate-950">4. Operate:</strong> establish request, review, documentation, and health-check rhythms.</li>
            </ol>
          </section>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">Support boundaries that protect the portal</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {boundaries.map(([name, detail]) => (
              <div key={name} className="grid gap-2 py-5 md:grid-cols-[15rem_1fr] md:gap-6">
                <h3 className="font-bold text-slate-950">{name}</h3>
                <p className="leading-7 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">HubSpot admin support FAQ</h2>
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

      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-slate-950">Related HubSpot resources</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              ['/services/hubspot-consulting', 'HubSpot consulting', 'Implementation, cleanup, automation, reporting, and integration support.'],
              ['/blog/why-hubspot-workflows-break', 'Why HubSpot workflows break', 'Audit lifecycle, ownership, source data, properties, and enrollment before rebuilding.'],
              ['/blog/hubspot-salesforce-sync-cleanup', 'HubSpot and Salesforce sync cleanup', 'Define source-of-truth, mapping, ownership, and exception rules for coexistence.'],
            ].map(([href, title, text]) => (
              <Link key={href} href={href} className="rounded-lg border border-slate-200 p-5 hover:border-indigo-300">
                <h3 className="font-bold text-indigo-800">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-700 py-16 text-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Turn the HubSpot backlog into a controlled operating rhythm</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-indigo-100">Start with the current portal, the lead path, and the requests the team no longer trusts.</p>
          <TrackedCTA ctaName="Book a CRM Consultation - HubSpot Admin Support Footer" destination="calendly">
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
