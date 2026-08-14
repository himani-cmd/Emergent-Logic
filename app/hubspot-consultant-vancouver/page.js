import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Zap, BarChart3, Globe, Settings } from 'lucide-react';

export const metadata = {
  title: 'HubSpot Consultant Vancouver | Rollout Help',
  description: 'HubSpot consulting in Vancouver for setup, cleanup, migration, workflows, reporting, integrations, and finishing an in-progress rollout.',
  alternates: { canonical: 'https://www.emergent-logic.ca/hubspot-consultant-vancouver' },
  openGraph: {
    title: 'HubSpot Consultant Vancouver | Emergent Logic',
    description: 'HubSpot consulting in Vancouver for setup, cleanup, migration, workflows, reporting, integrations, and finishing an in-progress rollout.',
    url: 'https://www.emergent-logic.ca/hubspot-consultant-vancouver',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const services = [
  { title: 'HubSpot CRM Setup', description: 'A written scope can cover pipelines, deal stages, contact properties, templates, permissions, and decision-ready dashboards.' },
  { title: 'Marketing Hub Automation', description: 'Workflow design for lead nurturing, email sequences, scoring, testing, suppression, and campaign attribution.' },
  { title: 'Sales Hub Configuration', description: 'Configuration can cover meetings, email tracking, deal pipelines, quotes, ownership, tasks, and sales reporting.' },
  { title: 'HubSpot CMS Development', description: 'Landing pages, blog templates, forms, and CRM-connected website components can be scoped where the HubSpot tier supports them.' },
  { title: 'Service Hub Setup', description: 'Ticketing, knowledge-base, customer-portal, feedback, and service-automation requirements can be assessed and configured by scope.' },
  { title: 'Migration & Integration', description: 'Migration starts with source inventory, field mapping, test imports, validation, rollback planning, and approval before production changes.' },
];

const hubs = [
  { icon: Zap, name: 'Marketing Hub', desc: 'Automation & nurturing' },
  { icon: BarChart3, name: 'Sales Hub', desc: 'Pipeline & forecasting' },
  { icon: Globe, name: 'CMS Hub', desc: 'Websites & landing pages' },
  { icon: Settings, name: 'Operations Hub', desc: 'Data sync & workflows' },
];

const reasons = [
  'Local presence — we serve Metro Vancouver from our Surrey, BC office',
  'Listed in HubSpot’s public Solutions Directory as a Solutions Partner',
  'AI-assisted analysis with human review before high-impact changes',
  'Process, ownership, and reporting rules are defined before automation',
  'Practical scope and transparent estimates before work starts',
  'Testing, training, and post-launch support are defined in the proposal',
];

const leakSignals = [
  {
    title: 'Lifecycle stages are unclear',
    description: 'Leads, subscribers, MQLs, SQLs, opportunities, and customers should mean something specific. If each person on the team interprets them differently, reporting becomes unreliable.'
  },
  {
    title: 'Website leads do not create clear next steps',
    description: 'A form submission should capture source, request type, owner, priority, and next follow-up. If that information stays in email, the CRM is already behind.'
  },
  {
    title: 'Workflows exist, but nobody fully trusts them',
    description: 'Many HubSpot portals have old workflows still running, duplicated rules, missing suppression logic, or automation that was built around a process the team no longer follows.'
  },
  {
    title: 'Reports show activity, not useful decisions',
    description: 'Dashboards should answer what is stuck, who owns it, what needs follow-up, and which channel is producing qualified pipeline. Otherwise the CRM becomes a data display, not an operating system.'
  },
];

const rolloutGates = [
  {
    step: '01',
    title: 'Confirm what is already built',
    description: 'Inventory pipelines, properties, workflows, reports, integrations, permissions, documentation, and unresolved decisions before recommending more configuration.'
  },
  {
    step: '02',
    title: 'Close the operating decisions',
    description: 'Define stage entry and exit rules, ownership, exceptions, required fields, lifecycle definitions, and reporting logic so the portal reflects how the team actually works.'
  },
  {
    step: '03',
    title: 'Test with representative users',
    description: 'Use controlled records and realistic scenarios to test data entry, automation, alerts, handoffs, permissions, dashboards, and exception paths before a wider release.'
  },
  {
    step: '04',
    title: 'Set production acceptance gates',
    description: 'Document what must pass, who approves it, which dependencies remain, and how affected processes will be restored if a production change behaves unexpectedly.'
  },
  {
    step: '05',
    title: 'Release, train, and stabilize',
    description: 'Move approved configuration into production, train users around their roles, record open issues, and leave the internal owner with usable documentation and a support path.'
  },
];

const faqs = [
  { q: 'How much does HubSpot implementation cost in Vancouver?', a: 'Implementation cost depends on the confirmed scope: pipelines, properties, workflows, reporting, migration, integrations, testing, training, and support. The current portal and requirements are reviewed first, then the work and estimate are documented before delivery starts.' },
  { q: 'Which HubSpot Hubs can a scope cover?', a: 'A scope may involve CRM, Sales Hub, Marketing Hub, Service Hub, Content Hub, or Operations Hub, subject to the licensed tier and confirmed requirements. We document platform fit before proposing implementation.' },
  { q: 'Can you migrate us from Salesforce to HubSpot?', a: 'A Salesforce-to-HubSpot migration can be scoped when the source data and target requirements are understood. The plan covers backups, field mapping, test imports, validation, rollback, approval, and role-based training.' },
  { q: 'Can a consultant finish an existing HubSpot implementation?', a: 'Yes. An existing HubSpot build can be reviewed without automatically starting over. The first step is to inventory what is live, what is incomplete, which decisions remain open, and which risks could affect a pilot or production release. The next work package is then agreed in writing.' },
  { q: 'What should a HubSpot pilot test before production?', a: 'A useful pilot tests realistic records, user permissions, required fields, automation, alerts, ownership, handoffs, reports, integrations, exception paths, and acceptance criteria with representative users. Production release should follow recorded approval rather than a configuration-only check.' },
  { q: 'Can HubSpot support be divided into smaller work packages?', a: 'Where the work can be separated safely, it can be proposed as bounded work packages with the objective, dependencies, estimate, acceptance criteria, and approval boundary written before delivery. The engagement model is confirmed during discovery.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/hubspot-consultant-vancouver#service',
      name: 'HubSpot Consulting in Vancouver',
      serviceType: 'HubSpot CRM setup, cleanup, migration, automation, integration, reporting, and training consulting',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/hubspot-consultant-vancouver',
      areaServed: [
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'AdministrativeArea', name: 'Metro Vancouver' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/hubspot-consultant-vancouver#faq',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function HubspotConsultantVancouver() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      
      <section className="overflow-hidden pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/#services' },
            { label: 'HubSpot Consultant Vancouver', href: '/hubspot-consultant-vancouver' },
          ]} tone="dark" />
          <div className="flex items-center gap-2 text-violet-300 mb-4"><MapPin className="w-5 h-5 flex-shrink-0" /><span>Vancouver & Metro Vancouver</span></div>
          <h1 className="max-w-4xl break-words text-4xl font-bold leading-tight tracking-tight text-white mb-4 md:text-5xl lg:text-6xl">
            HubSpot consultant in Vancouver for setup, cleanup and automation
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/75 mb-8 md:text-xl">
            A HubSpot consultant can help a Vancouver team start a clean implementation or finish one that is already underway. Emergent Logic reviews the current portal, closes operating gaps, tests the agreed configuration, and documents the path from pilot to production.
          </p>
          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap">
            <TrackedCTA ctaName="Vancouver HubSpot Rollout Review" destination="/hubspot-implementation#implementation-review">
              <Button asChild size="lg" className="w-full bg-white text-violet-900 hover:bg-violet-100 sm:w-auto">
                <Link href="/hubspot-implementation#implementation-review">Request a HubSpot Rollout Review <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </TrackedCTA>
            <TrackedCTA ctaName="Vancouver HubSpot Consultation" destination="calendly">
              <Button asChild size="lg" className="w-full border border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto">
                <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">Book a 30-Minute Consultation</a>
              </Button>
            </TrackedCTA>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">HubSpot services for Vancouver businesses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{service.title}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{service.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Vancouver teams consider Emergent Logic for HubSpot</h2>
          <ul className="space-y-4 max-w-3xl mb-12">
            {reasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-violet-500 flex-shrink-0" /><span className="text-gray-700">{reason}</span></li>
            ))}
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {hubs.map((hub, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm border text-center">
                <hub.icon className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{hub.name}</div>
                <div className="text-sm text-gray-500">{hub.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="finish-hubspot-rollout" className="border-y border-violet-100 bg-violet-50/60 py-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white text-violet-700 hover:bg-white">Pilot-to-production framework</Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Already partway through a HubSpot rollout? Finish it without restarting by default.</h2>
            <p className="mb-4 text-lg text-gray-700">
              A partially built HubSpot portal needs a controlled review before it needs more configuration. The useful question is not “what else can HubSpot do?” It is “what must be true for this team to test, approve, and operate the system with confidence?”
            </p>
            <p className="text-sm font-medium text-violet-800">Last reviewed August 13, 2026 · Added pilot-to-production guidance based on current buyer questions.</p>
          </div>

          <ol className="mt-10 grid gap-0 border border-violet-200 bg-white lg:grid-cols-5">
            {rolloutGates.map((gate, index) => (
              <li key={gate.step} className={`p-6 ${index < rolloutGates.length - 1 ? 'border-b border-violet-100 lg:border-b-0 lg:border-r' : ''}`}>
                <span className="text-sm font-bold text-violet-600">{gate.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{gate.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{gate.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">What a useful first review should produce</h3>
              <ul className="mt-5 space-y-3">
                {[
                  'A confirmed inventory of what is live, incomplete, duplicated, or undocumented',
                  'An open-decision and dependency register with clear owners',
                  'Pilot scenarios, acceptance criteria, and evidence requirements',
                  'A prioritized next work package with scope boundaries and an estimate',
                  'Production risks, rollback considerations, training needs, and handoff requirements',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-4 border-violet-500 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Need a second set of eyes on the build?</h3>
              <p className="mt-3 text-gray-600">Bring the current build register, unresolved decisions, and the outcome you need from the next release. Discovery is used to confirm fit and the information required for a responsible scope.</p>
              <TrackedCTA ctaName="Vancouver HubSpot Rollout Review Detail" destination="/hubspot-implementation#implementation-review">
                <Button asChild className="mt-6 bg-violet-700 text-white hover:bg-violet-800">
                  <Link href="/hubspot-implementation#implementation-review">Request a Rollout Review <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-10">
            <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">HubSpot cleanup signals</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When HubSpot looks set up, but still leaks revenue</h2>
            <p className="text-lg text-gray-600 mb-4">
              Most Vancouver teams do not need HubSpot rebuilt from scratch. They need the messy middle cleaned up: lifecycle rules, lead ownership, workflow logic, source tracking, and reporting. That is where the lost follow-up usually hides.
            </p>
            <p className="text-lg text-gray-600">
              Before we add more automation, we look for the points where the system stops giving the team a clear next step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {leakSignals.map((item, i) => (
              <Card key={i} className="border border-violet-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Not sure if HubSpot is right?</h2>
          <p className="text-gray-600 mb-4">Need broader CRM help before choosing a platform? See our <Link href="/crm-consultant-vancouver" className="text-violet-600 hover:underline">CRM consultant Vancouver</Link> page for cleanup, routing, reporting, and integration support.</p>
          <p className="text-gray-600 mb-4">Start here: <Link href="/blog/hubspot-consultant-vancouver" className="text-violet-600 hover:underline">how to evaluate a HubSpot consultant in Vancouver</Link>, including what to review before changing a live portal.</p>
          <p className="text-gray-600 mb-4">For a reusable implementation control model, review the <Link href="/crm-implementation-method" className="text-violet-600 hover:underline">CRM implementation method</Link> covering decisions, testing, acceptance, release, and handoff.</p>
          <p className="text-gray-600 mb-4">Moving from spreadsheets? Use the <Link href="/blog/excel-to-crm-migration-repeat-order-businesses" className="text-violet-600 hover:underline">Excel-to-CRM migration checklist and free workbook</Link> to map customers, products, order cadence, ownership, and follow-up before choosing a platform.</p>
          <p className="text-gray-600 mb-4">Read our comparison: <Link href="/blog/hubspot-vs-salesforce-canada" className="text-violet-600 hover:underline">HubSpot vs Salesforce: Which CRM is Right for Your Canadian Business?</Link></p>
          <p className="text-gray-600 mb-4">Learn how automation transforms your pipeline: <Link href="/blog/what-is-marketing-automation-small-business" className="text-violet-600 hover:underline">What is Marketing Automation and Does Your Business Need It?</Link></p>
          <p className="text-gray-600">For the work areas, controls, and discovery approach, see our <Link href="/services/hubspot-consulting" className="text-violet-600 hover:underline">HubSpot consulting service page</Link>. Scope, price, and timing are confirmed after discovery.</p>
          <p className="mt-4 text-gray-600">Need email and call notes connected to the CRM? See the <Link href="/solutions/email-and-call-notes-to-crm" className="text-violet-600 hover:underline">email and call notes workflow</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">HubSpot Consulting FAQ — Vancouver, BC</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (<Card key={faq.q} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{faq.a}</p></CardContent></Card>))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started with HubSpot?</h2>
          <p className="text-xl text-white/80 mb-8">Book a 30-minute CRM consultation to review the current portal, the operating problem, and the information needed for a practical scope.</p>
          <TrackedCTA ctaName="Vancouver HubSpot Final Rollout Review" destination="/hubspot-implementation#implementation-review">
            <Button asChild size="lg" className="bg-white text-violet-900 hover:bg-violet-100">
              <Link href="/hubspot-implementation#implementation-review">Request a HubSpot Rollout Review <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </TrackedCTA>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
