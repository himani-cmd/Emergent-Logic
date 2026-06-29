import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowRight, CheckCircle, ClipboardList, Filter, GitBranch, MailCheck, RefreshCw, Settings2, Workflow } from 'lucide-react';

export const metadata = {
  title: 'HubSpot Workflow Cleanup & Repair',
  description: 'HubSpot workflow cleanup and repair for broken automation, lifecycle stage issues, owner routing, forms, lists, source tracking, and reporting problems.',
  alternates: { canonical: 'https://www.emergent-logic.ca/hubspot-workflow-cleanup' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'HubSpot Workflow Cleanup & Repair | Emergent Logic',
    description: 'Fix broken HubSpot workflows, lifecycle stage logic, owner routing, forms, lists, and reporting issues before building more automation.',
    url: 'https://www.emergent-logic.ca/hubspot-workflow-cleanup',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const cleanupAreas = [
  {
    icon: Workflow,
    title: 'Workflow logic review',
    text: 'Enrollment triggers, re-enrollment rules, suppression lists, if/then branches, delays, and exit criteria mapped against the actual business process.',
  },
  {
    icon: GitBranch,
    title: 'Lifecycle stage repair',
    text: 'Lead, MQL, SQL, Opportunity, Customer, and custom stage logic cleaned up so marketing and sales are not using different definitions.',
  },
  {
    icon: MailCheck,
    title: 'Owner and task routing',
    text: 'Contact owner, deal owner, lead status, task creation, sales notifications, and handoff rules reviewed for gaps and conflicts.',
  },
  {
    icon: Filter,
    title: 'Forms, lists, and segments',
    text: 'Website forms, active lists, static lists, source fields, and campaign segments checked so the right contacts enter the right workflow.',
  },
  {
    icon: RefreshCw,
    title: 'Duplicate and property cleanup',
    text: 'Duplicate properties, retired fields, overwritten values, stale lists, and conflicting automation rules identified before rebuilding.',
  },
  {
    icon: ClipboardList,
    title: 'Documentation and handoff',
    text: 'Workflow purpose, owner, dependencies, testing notes, and safe-change instructions documented so the portal is easier to maintain.',
  },
];

const warningSigns = [
  'Leads are assigned to the wrong person or no one at all.',
  'Lifecycle stage changes happen manually or inconsistently.',
  'Multiple workflows update the same property.',
  'Sales receives too many alerts or misses important alerts.',
  'Marketing lists enroll contacts who should be excluded.',
  'Reports do not match what sales or marketing sees in the CRM.',
  'Nobody is confident editing existing workflows.',
];

const faqs = [
  {
    q: 'What is HubSpot workflow cleanup?',
    a: 'HubSpot workflow cleanup is the process of auditing and repairing workflow logic, enrollment rules, lifecycle stage updates, owner assignment, lists, forms, source fields, and reporting dependencies so automation matches the current business process.',
  },
  {
    q: 'Should we rebuild broken HubSpot workflows from scratch?',
    a: 'Sometimes, but not always. Most teams should first audit the properties, lists, forms, owner rules, and lifecycle stage definitions the workflow depends on. Rebuilding on top of unclear data often recreates the same problem.',
  },
  {
    q: 'Can you clean up HubSpot workflows without disrupting active leads?',
    a: 'Yes. The safer approach is to map dependencies, test changes carefully, use controlled enrollment, document what changes, and avoid editing high-risk workflows without understanding downstream reports and sales notifications.',
  },
  {
    q: 'Do you also help with broader HubSpot portal cleanup?',
    a: 'Yes. Workflow cleanup often connects to broader HubSpot cleanup: properties, pipelines, lifecycle stages, forms, lists, reports, duplicate records, and user adoption.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/hubspot-workflow-cleanup#service',
      name: 'HubSpot Workflow Cleanup and Repair',
      serviceType: 'HubSpot workflow cleanup, HubSpot automation repair, lifecycle stage cleanup, CRM workflow audit',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/hubspot-workflow-cleanup',
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
      '@id': 'https://www.emergent-logic.ca/hubspot-workflow-cleanup#faq',
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

export default function HubSpotWorkflowCleanup() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="overflow-hidden bg-gradient-to-br from-orange-950 via-slate-900 to-amber-950 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'HubSpot Workflow Cleanup', href: '/hubspot-workflow-cleanup' },
          ]} />
          <Badge className="mb-5 bg-white/10 text-white hover:bg-white/10">HubSpot automation repair</Badge>
          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            HubSpot Workflow Cleanup and Repair
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
            We help teams fix broken HubSpot workflows, unclear lifecycle stage logic, owner routing, forms, lists, source tracking, and reporting dependencies before building more automation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <TrackedCTA ctaName="Book a Free Strategy Call - HubSpot Workflow Cleanup Hero" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white text-orange-950 hover:bg-orange-100 sm:w-auto">
                  Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/blog/why-hubspot-workflows-break" className="w-full sm:w-auto">
              <Button size="lg" className="w-full border border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto">
                Read Why Workflows Break
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">When HubSpot Workflows Need Cleanup</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              HubSpot workflows usually break because the CRM rules underneath them are unclear. A workflow can only act on the data, stages, owners, forms, lists, and source fields it is given. If those inputs are messy, automation turns a messy process into a faster messy process.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Our workflow cleanup work starts by mapping what each workflow is supposed to do, what it depends on, and what downstream reports, tasks, owners, and lifecycle stages it changes. Then we repair the system carefully instead of adding another patch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-orange-200 bg-white p-8">
            <div className="flex gap-4">
              <AlertTriangle className="mt-1 h-7 w-7 flex-shrink-0 text-orange-700" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">The practical rule</h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-600">
                  Do not rebuild HubSpot automation until you understand the properties, lists, lifecycle stages, owner rules, forms, and reports the workflow touches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What We Clean Up</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cleanupAreas.map((area) => (
                <div key={area.title} className="rounded-2xl border bg-gray-50 p-6">
                  <area.icon className="mb-4 h-8 w-8 text-orange-700" />
                  <h3 className="text-lg font-bold text-gray-900">{area.title}</h3>
                  <p className="mt-3 text-gray-600">{area.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Common Warning Signs</h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                These are signs the workflow problem is probably bigger than one broken automation.
              </p>
            </div>
            <div className="space-y-4">
              {warningSigns.map((sign) => (
                <div key={sign} className="flex gap-3 rounded-2xl border bg-white p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-700" />
                  <p className="text-gray-700">{sign}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Repair Before Rebuild</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Sometimes workflows should be rebuilt. But rebuilding should happen after the data model, lifecycle definitions, owner rules, forms, and reporting dependencies are clear. Otherwise, the rebuild can recreate the same operational problem with cleaner-looking workflow branches.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              If the issue is broader than workflows, we connect the cleanup to <Link href="/services/crm-cleanup" className="text-orange-700 hover:underline">CRM cleanup</Link>, <Link href="/services/hubspot-consulting" className="text-orange-700 hover:underline">HubSpot consulting</Link>, and <Link href="/services/marketing-automation" className="text-orange-700 hover:underline">marketing automation</Link> so the portal becomes easier to run after the first fix.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Related HubSpot Resources</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Link href="/services/hubspot-consulting" className="rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold text-orange-700">HubSpot Consulting</p>
                <p className="mt-2 text-sm text-gray-600">Portal setup, workflow repair, reporting, integrations, and cleanup.</p>
              </Link>
              <Link href="/blog/why-hubspot-workflows-break" className="rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold text-orange-700">Why HubSpot Workflows Break</p>
                <p className="mt-2 text-sm text-gray-600">A practical guide to auditing automation before rebuilding it.</p>
              </Link>
              <Link href="/blog/hubspot-salesforce-sync-cleanup" className="rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold text-orange-700">HubSpot Salesforce Sync Cleanup</p>
                <p className="mt-2 text-sm text-gray-600">What to clean before syncing two CRMs or revenue systems.</p>
              </Link>
              <Link href="/blog/marketing-automation-needs-crm-cleanup" className="rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold text-orange-700">Marketing Automation Needs CRM Cleanup</p>
                <p className="mt-2 text-sm text-gray-600">Why workflows should be built on clean CRM foundations.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">HubSpot Workflow Cleanup FAQ</h2>
            <div className="mt-8 space-y-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border bg-gray-50 p-6">
                  <h3 className="font-bold text-gray-900">{faq.q}</h3>
                  <p className="mt-2 text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-700 to-amber-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <Settings2 className="mx-auto mb-5 h-10 w-10 text-white/80" />
          <h2 className="text-3xl font-bold text-white md:text-4xl">Need to fix HubSpot workflows without breaking active follow-up?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Book a free strategy call. We will review the workflow problem, identify the likely dependencies, and recommend whether to repair, rebuild, or clean the portal first.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedCTA ctaName="Book a Free Strategy Call - HubSpot Workflow Cleanup Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-100">
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
