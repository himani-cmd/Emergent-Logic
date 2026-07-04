import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  FileSearch,
  Gauge,
  HandCoins,
  ShieldCheck,
  SlidersHorizontal,
} from 'lucide-react';

export const metadata = {
  title: 'CRM Consulting Pricing | HubSpot & Salesforce',
  description:
    'How Emergent Logic scopes CRM consulting work for HubSpot, Salesforce, CRM cleanup, automation, and website leads to CRM implementation.',
  alternates: { canonical: 'https://www.emergent-logic.ca/pricing' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Consulting Pricing Approach | Emergent Logic',
    description:
      'How Emergent Logic scopes CRM cleanup, implementation, HubSpot, Salesforce, automation, and lead capture work.',
    url: 'https://www.emergent-logic.ca/pricing',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const pricingModels = [
  {
    icon: FileSearch,
    name: 'Free Strategy Call',
    price: 'No-cost fit check',
    bestFor: 'Quick fit check before any paid work',
    description:
      'A short call to understand your CRM, lead capture, automation, or cleanup problem and decide whether there is a practical next step.',
    includes: ['Current problem review', 'Fit check', 'Recommended next step', 'No obligation'],
  },
  {
    icon: SlidersHorizontal,
    name: 'Fixed-Scope Sprint',
    price: 'Scoped after review',
    bestFor: 'Clear, contained work',
    description:
      'Best when the outcome is specific: clean a list, fix a workflow, connect a form, build a dashboard, or repair one lead handoff.',
    includes: ['Defined scope', 'Known deliverables', 'Clear timeline', 'No surprise changes without approval'],
  },
  {
    icon: Clock,
    name: 'Implementation Hours',
    price: 'Hourly when scope is variable',
    bestFor: 'Variable CRM implementation work',
    description:
      'Best when the project needs discovery, data review, workflow decisions, stakeholder feedback, or phased implementation.',
    includes: ['Time and material delivery', 'Weekly progress updates', 'Approved priorities', 'Flexible scope as the system becomes clearer'],
  },
];

const typicalRanges = [
  {
    service: 'CRM cleanup or deduplication',
    range: 'Small to medium scope',
    detail: 'Depends on record volume, duplicate rules, field quality, and how much human review is needed.',
    href: '/services/crm-cleanup',
  },
  {
    service: 'HubSpot or Salesforce implementation',
    range: 'Scoped after discovery',
    detail: 'Pipelines, properties, migration, automation, dashboards, forms, reporting, and team training vary by scope.',
    href: '/services/crm-implementation',
  },
  {
    service: 'HubSpot workflow cleanup',
    range: 'Fixed sprint or phased',
    detail: 'Good fit when workflows exist but are breaking, duplicating tasks, or creating confusing lifecycle changes.',
    href: '/hubspot-workflow-cleanup',
  },
  {
    service: 'Website leads to CRM implementation',
    range: 'Usually fixed-scope',
    detail: 'Forms, booking flows, source tracking, routing, owner assignment, alerts, tasks, and reporting.',
    href: '/website-leads-to-crm-implementation',
  },
  {
    service: 'Marketing automation buildout',
    range: 'Phased by complexity',
    detail: 'Email sequences, nurture logic, segmentation, lead scoring, campaign reporting, and CRM handoff.',
    href: '/services/marketing-automation',
  },
  {
    service: 'Monthly CRM and automation support',
    range: 'Ongoing support plan',
    detail: 'Ongoing improvements, cleanup, reporting, workflow support, and practical RevOps help without a full-time hire.',
    href: '/contact',
  },
];

const pricingRules = [
  'If the scope is clear, we can quote a fixed price.',
  'If the CRM is messy or the outcome is still being discovered, phased or hourly work is safer and more honest.',
  'We do not run hours without visibility. You know what we are working on and why.',
  'We can start small, prove value, then expand only if the next phase makes sense.',
];

const faqs = [
  {
    q: 'Do you charge hourly or fixed price?',
    a: 'Both. Clear, contained work can be fixed-scope. Messier CRM implementation, cleanup, migration, and automation work is often better as hourly or phased delivery because the real scope becomes clear after reviewing the system.',
  },
  {
    q: 'Why not show one public hourly rate?',
    a: 'Because the right model depends on the work. Some projects are best quoted as a fixed sprint. Some are safer as phased or hourly work after we review the system. We prefer giving a realistic estimate instead of publishing a rate that may not fit the problem.',
  },
  {
    q: 'Can we start with a smaller project first?',
    a: 'Yes. Many clients should start with one workflow, one lead source, one cleanup sprint, or one CRM audit before committing to a full implementation.',
  },
  {
    q: 'Why not publish one exact price for every implementation?',
    a: 'Because every CRM has different data quality, users, integrations, pipelines, automations, and reporting needs. We explain the pricing approach publicly, then scope the work properly before giving a practical estimate.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/pricing#service',
      name: 'CRM Consulting Pricing',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      serviceType:
        'CRM implementation pricing, HubSpot consulting pricing, Salesforce consulting pricing, CRM cleanup pricing, marketing automation pricing',
      url: 'https://www.emergent-logic.ca/pricing',
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/pricing#faq',
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

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="bg-gradient-to-br from-[#1E3A5F] via-slate-900 to-indigo-950 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Badge className="mb-5 border-white/20 bg-white/10 text-white hover:bg-white/10">Pricing</Badge>
          <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            CRM Consulting Pricing Without the Guesswork
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
            We do not believe every CRM project should be forced into a public package. Some work is clean and fixed-scope. Some work needs discovery first. The right model depends on your data, workflows, integrations, and how clear the outcome is.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <TrackedCTA ctaName="Book a Free Strategy Call - Pricing Hero" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white text-[#1E3A5F] hover:bg-indigo-50 sm:w-auto">
                  Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/lead-follow-up-audit" className="w-full sm:w-auto">
              <Button size="lg" className="w-full border border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto">
                Try the Lead Follow-Up Audit
              </Button>
            </Link>
          </div>
          <div className="mt-10 grid gap-4 text-sm text-white/75 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Fixed scope when the outcome is clear</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Hourly only when scope is genuinely variable</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Start small, prove value, expand carefully</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">How We Scope CRM Work</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              We keep pricing practical because CRM projects are not all the same. A clean HubSpot form routing fix is not the same as a Salesforce cleanup with years of duplicate data and broken automation.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3">
            {pricingModels.map((model) => (
              <div key={model.name} className="rounded-3xl border bg-white p-7 shadow-sm">
                <model.icon className="mb-5 h-9 w-9 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">{model.name}</h3>
                <p className="mt-2 text-sm text-gray-500">Best for: {model.bestFor}</p>
                <div className="mt-5 text-4xl font-bold text-[#1E3A5F]">{model.price}</div>
                <p className="mt-5 text-gray-600">{model.description}</p>
                <ul className="mt-6 space-y-3">
                  {model.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <Badge className="mb-4 bg-indigo-50 text-indigo-700 hover:bg-indigo-50">Scope guide</Badge>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">How Different CRM Projects Are Usually Scoped</h2>
              </div>
              <p className="max-w-xl text-gray-600">
                We use this as a scoping guide, not a public price menu. Final recommendations come after we understand your data, systems, workflow complexity, and business priority.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border bg-white shadow-sm">
              {typicalRanges.map((item, index) => (
                <Link
                  key={item.service}
                  href={item.href}
                  className={`grid gap-3 p-6 transition-colors hover:bg-indigo-50 md:grid-cols-[1.2fr_0.7fr_1.5fr] ${
                    index !== typicalRanges.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <div className="font-semibold text-gray-900">{item.service}</div>
                  <div className="font-bold text-indigo-700">{item.range}</div>
                  <div className="text-gray-600">{item.detail}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-[#1E3A5F] p-8 text-white">
              <HandCoins className="mb-5 h-10 w-10 text-indigo-200" />
              <h2 className="text-3xl font-bold">Our Recommendation</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80">
                For most new conversations, start with a free call. If the problem is obvious, we quote a small fixed-scope sprint. If the CRM needs deeper investigation, we recommend a phased approach and cap the first phase.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Pricing Rules We Follow</h2>
              <div className="mt-7 space-y-4">
                {pricingRules.map((rule) => (
                  <div key={rule} className="flex gap-3 rounded-2xl border bg-slate-50 p-5">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600" />
                    <p className="text-gray-700">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Good First Projects</h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-600">
              If you are not ready for a full implementation, these are practical starting points that can show value quickly.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Link href="/services/crm-cleanup" className="rounded-2xl border bg-white p-6 transition-shadow hover:shadow-md">
                <Gauge className="mb-4 h-7 w-7 text-indigo-600" />
                <h3 className="font-bold text-gray-900">CRM health audit</h3>
                <p className="mt-2 text-sm text-gray-600">Find duplicates, broken fields, lifecycle gaps, and automation risks before rebuilding anything.</p>
              </Link>
              <Link href="/website-leads-to-crm-implementation" className="rounded-2xl border bg-white p-6 transition-shadow hover:shadow-md">
                <SlidersHorizontal className="mb-4 h-7 w-7 text-indigo-600" />
                <h3 className="font-bold text-gray-900">One lead source into CRM</h3>
                <p className="mt-2 text-sm text-gray-600">Connect one form, booking flow, or lead path into clean routing, tasks, and reporting.</p>
              </Link>
              <Link href="/hubspot-workflow-cleanup" className="rounded-2xl border bg-white p-6 transition-shadow hover:shadow-md">
                <Clock className="mb-4 h-7 w-7 text-indigo-600" />
                <h3 className="font-bold text-gray-900">Workflow cleanup sprint</h3>
                <p className="mt-2 text-sm text-gray-600">Fix one workflow area that is creating confusion, missed handoffs, or unreliable follow-up.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Pricing FAQ</h2>
            <div className="mt-8 space-y-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border bg-slate-50 p-6">
                  <h3 className="font-bold text-gray-900">{faq.q}</h3>
                  <p className="mt-2 text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-indigo-700 to-[#1E3A5F] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Want a realistic estimate for your CRM project?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Send us the situation or book a call. We will tell you whether it should be fixed-scope, phased, or broken into a small first sprint.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedCTA ctaName="Book a Free Strategy Call - Pricing Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-[#1E3A5F] hover:bg-indigo-50">
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
