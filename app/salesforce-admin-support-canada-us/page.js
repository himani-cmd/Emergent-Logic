import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ClipboardCheck, Database, Gauge, LifeBuoy, ShieldCheck, Workflow } from 'lucide-react';

export const metadata = {
  title: 'Salesforce Admin Support Canada & US',
  description: 'Remote Salesforce admin support for Canada and US teams: cleanup, reports, Flow updates, user support, CRM hygiene, and administration.',
  alternates: { canonical: 'https://www.emergent-logic.ca/salesforce-admin-support-canada-us' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Salesforce Admin Support Canada & US | Emergent Logic',
    description: 'Remote Salesforce admin support for cleanup, reporting, Flow updates, user support, CRM hygiene, and ongoing administration.',
    url: 'https://www.emergent-logic.ca/salesforce-admin-support-canada-us',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const supportAreas = [
  {
    icon: LifeBuoy,
    title: 'Ongoing admin requests',
    text: 'User updates, permissions, page layouts, fields, list views, small fixes, and recurring Salesforce support without hiring a full-time admin.',
  },
  {
    icon: Database,
    title: 'CRM data cleanup',
    text: 'Duplicate review, stale fields, missing lead sources, inconsistent stages, old owners, and record hygiene that makes reports easier to trust.',
  },
  {
    icon: Workflow,
    title: 'Flow and automation updates',
    text: 'Record-triggered Flows, task creation, assignment logic, alerts, approvals, and safe updates to workflows that affect sales follow-up.',
  },
  {
    icon: Gauge,
    title: 'Reports and dashboards',
    text: 'Pipeline, source, activity, owner, and conversion reporting built on definitions your team understands and can maintain.',
  },
  {
    icon: ClipboardCheck,
    title: 'Admin backlog triage',
    text: 'A practical review of open Salesforce requests so the highest-impact revenue and adoption issues get handled first.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance and documentation',
    text: 'Change notes, admin runbooks, process definitions, and lightweight controls so Salesforce does not drift back into confusion.',
  },
];

const fitSignals = [
  'Salesforce is important to the business, but there is no dedicated admin.',
  'A sales manager, founder, or operations person is handling Salesforce requests on the side.',
  'Reports are debated because fields, stages, or ownership rules are unclear.',
  'Flow automation exists, but nobody is confident changing it.',
  'The admin backlog keeps growing and small CRM issues are slowing follow-up.',
  'You need senior help for a few hours per week or month, not a full-time hire.',
];

const faqs = [
  {
    q: 'Do small businesses need a full-time Salesforce admin?',
    a: 'Not always. Many small and mid-sized teams need recurring admin support, cleanup, reports, automation updates, and documentation, but not enough work to justify a full-time Salesforce administrator.',
  },
  {
    q: 'Can Salesforce admin support be delivered remotely?',
    a: 'Yes. Most Salesforce admin support can be delivered remotely for Canadian and US businesses. Discovery, implementation, testing, documentation, and training can all happen through secure shared access and scheduled working sessions.',
  },
  {
    q: 'Should we start with cleanup or ongoing support?',
    a: 'If the org is messy, start with a short cleanup audit. Ongoing admin support works better after duplicates, fields, stages, ownership rules, and reports are easier to trust.',
  },
  {
    q: 'Do you only work in Salesforce?',
    a: 'No. Emergent Logic also works with HubSpot and Zoho. That matters because we can be honest about whether Salesforce admin support, Salesforce cleanup, HubSpot cleanup, or a lighter CRM path is the better fit.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/salesforce-admin-support-canada-us#service',
      name: 'Salesforce Admin Support Canada and US',
      serviceType: 'Remote Salesforce admin support, CRM cleanup, Flow updates, reports, dashboards, and Salesforce administration',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/salesforce-admin-support-canada-us',
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
      '@id': 'https://www.emergent-logic.ca/salesforce-admin-support-canada-us#faq',
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

export default function SalesforceAdminSupportCanadaUs() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'Salesforce Admin Support', href: '/salesforce-admin-support-canada-us' },
          ]} />
          <Badge className="mb-5 bg-white/10 text-white hover:bg-white/10">Canada and US remote support</Badge>
          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Salesforce Admin Support Without Hiring Full-Time
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
            Emergent Logic helps Canadian and US businesses keep Salesforce clean, useful, and trusted through remote admin support, CRM cleanup, Flow updates, reporting, and practical documentation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <TrackedCTA ctaName="Book a Free Strategy Call - Salesforce Admin Support Hero" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white text-blue-950 hover:bg-blue-100 sm:w-auto">
                  Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/case-studies/salesforce-cleanup-before-automation" className="w-full sm:w-auto">
              <Button size="lg" className="w-full border border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto">
                View Salesforce Cleanup Pattern
              </Button>
            </Link>
          </div>
          <div className="mt-10 grid gap-4 text-sm text-white/75 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Remote admin support for Canada and the US</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Cleanup-first approach before more automation</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Vendor-neutral CRM advice across Salesforce, HubSpot, and Zoho</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What Salesforce Admin Support Means</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Salesforce admin support is the recurring work that keeps the CRM usable after implementation: user changes, field updates, report fixes, Flow adjustments, duplicate cleanup, permissions, documentation, and small improvements that prevent the org from drifting into confusion.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              For many small and mid-sized teams, the issue is not that Salesforce is the wrong tool. The issue is that nobody owns the admin layer consistently. Requests pile up, reporting gets patched, users create workarounds, and leadership slowly loses trust in the system.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Where We Help</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {supportAreas.map((area) => (
                <div key={area.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                  <area.icon className="mb-4 h-8 w-8 text-blue-700" />
                  <h3 className="text-lg font-bold text-gray-900">{area.title}</h3>
                  <p className="mt-3 text-gray-600">{area.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">When This Is a Good Fit</h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Remote Salesforce admin support is most useful when Salesforce matters to the business, but the amount of work is not large enough for a full-time administrator. The goal is to keep requests moving without creating another heavy agency engagement.
              </p>
              <div className="mt-8 space-y-4">
                {fitSignals.map((signal) => (
                  <div key={signal} className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                    <p className="text-gray-700">{signal}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-blue-950 p-8 text-white">
              <h3 className="text-2xl font-bold">A practical first month</h3>
              <ol className="mt-6 space-y-5 text-white/80">
                <li><strong className="text-white">Week 1:</strong> audit users, reports, fields, automations, duplicate patterns, and admin backlog.</li>
                <li><strong className="text-white">Week 2:</strong> prioritize fixes tied to lead follow-up, pipeline visibility, and reporting trust.</li>
                <li><strong className="text-white">Week 3:</strong> clean the highest-impact issues and document the decisions.</li>
                <li><strong className="text-white">Week 4:</strong> set a recurring rhythm for requests, training, and quarterly health checks.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What We Do Not Do</h2>
            <div className="mt-6 rounded-2xl border bg-white p-8">
              <p className="text-lg leading-relaxed text-gray-600">
                We do not turn every Salesforce request into a giant rebuild. We do not add fields, reports, or Flow logic without checking whether the change supports the sales process. And we do not pretend Salesforce is always the right answer: if HubSpot, Zoho, or a simpler workflow is a better fit, we will say that clearly.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                If the org needs deeper cleanup before ongoing support, we will recommend that first. A steady admin rhythm works best when the foundation is clean enough to maintain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Related Salesforce Resources</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Link href="/services/salesforce-consulting" className="rounded-2xl border bg-gray-50 p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold text-blue-700">Salesforce Consulting</p>
                <p className="mt-2 text-sm text-gray-600">Implementation, cleanup, Flow automation, reports, and managed admin support.</p>
              </Link>
              <Link href="/blog/salesforce-admin-support-small-business" className="rounded-2xl border bg-gray-50 p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold text-blue-700">Salesforce Admin Support for Small Businesses</p>
                <p className="mt-2 text-sm text-gray-600">What to outsource first and when cleanup should come before support.</p>
              </Link>
              <Link href="/blog/salesforce-admin-vs-consultant-small-business" className="rounded-2xl border bg-gray-50 p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold text-blue-700">Salesforce Admin vs Consultant</p>
                <p className="mt-2 text-sm text-gray-600">How to decide which kind of help your team actually needs.</p>
              </Link>
              <Link href="/case-studies/salesforce-cleanup-before-automation" className="rounded-2xl border bg-gray-50 p-5 transition-shadow hover:shadow-md">
                <p className="font-semibold text-blue-700">Salesforce Cleanup Before Automation</p>
                <p className="mt-2 text-sm text-gray-600">A representative cleanup-first pattern before building more Flow automation.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Salesforce Admin Support FAQ</h2>
            <div className="mt-8 space-y-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border bg-white p-6">
                  <h3 className="font-bold text-gray-900">{faq.q}</h3>
                  <p className="mt-2 text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Need Salesforce admin help without another full-time hire?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Book a free strategy call. We will look at your current Salesforce pain, identify the right first admin or cleanup path, and tell you whether ongoing support makes sense.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedCTA ctaName="Book a Free Strategy Call - Salesforce Admin Support Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
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
