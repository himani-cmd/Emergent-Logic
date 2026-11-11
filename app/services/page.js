import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { ArrowRight } from 'lucide-react';

const canonical = 'https://www.emergent-logic.ca/services';
const title = 'CRM Consulting Services: Selection, Setup & Admin';
const description = 'CRM selection, implementation, migration, integration, cleanup and monthly admin for HubSpot, Salesforce, Zoho, Odoo and GoHighLevel. Book a free call.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonical, type: 'website', images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title, description },
};

const callUrl = 'https://calendly.com/emergent-logic/30min';

const groups = [
  {
    title: 'CRM selection & fit assessment',
    text: 'Before you buy or switch, we review how leads, deals and follow-up move today and recommend the platform and plan that fit. You get a plain answer on the next step, not a sales pitch for one tool.',
    links: [['What the fit assessment covers', '#fit-assessment']],
  },
  {
    title: 'Implementation & migration',
    text: 'New CRM setups, migrations from spreadsheets or another CRM, and relaunches of a CRM the team stopped using. Pipelines, fields, automation, dashboards and training are built in reviewable stages.',
    links: [
      ['CRM implementation', '/services/crm-implementation'],
      ['CRM relaunch', '/services/crm-relaunch'],
      ['CRM & RevOps transition sprint', '/services/crm-revops-transition-sprint'],
      ['Remote CRM implementation', '/services/remote-crm-implementation'],
    ],
  },
  {
    title: 'Integrations & automation',
    text: 'Connect the CRM to forms, email, ERP and other tools with native connectors, middleware or APIs, mapped and tested with failure handling. Marketing automation links lead capture, scoring, nurture and sales follow-up.',
    links: [
      ['CRM integration', '/services/crm-integration'],
      ['Marketing automation', '/services/marketing-automation'],
    ],
  },
  {
    title: 'CRM cleanup',
    text: 'Duplicates, unused fields, broken workflows and unreliable reports reviewed first, then fixed through approved, controlled changes. Useful before new automation or a migration.',
    links: [
      ['CRM cleanup', '/services/crm-cleanup'],
      ['HubSpot workflow cleanup', '/hubspot-workflow-cleanup'],
    ],
  },
  {
    title: 'Managed CRM admin (monthly)',
    text: 'Ongoing remote admin support for HubSpot or Salesforce: properties, workflows, reports, forms, routing and user requests. For teams that need a CRM admin without a full-time hire.',
    links: [
      ['HubSpot admin support', '/hubspot-admin-support-canada-us'],
      ['Salesforce admin support', '/salesforce-admin-support-canada-us'],
    ],
  },
  {
    title: 'AI automation',
    text: 'Practical AI and business automation connected to your CRM, such as chatbots that qualify and route enquiries. Scoped around a defined workflow, with a person reviewing the work.',
    links: [
      ['AI automation consulting', '/services/ai-automation-consulting'],
      ['AI chatbot automation', '/services/ai-chatbot-automation'],
    ],
  },
];

const fitAssessment = [
  ['Current-state review', 'How enquiries, deals, follow-up and reporting work today, which tools are involved and where things get lost.'],
  ['Platform recommendation', 'Which CRM fits your team, process and budget, or whether the CRM you already have can be fixed instead.'],
  ['Implementation plan', 'The stages, data to move, integrations and decisions needed, in an order your team can review.'],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'CRM consulting services',
  url: canonical,
  itemListElement: groups.flatMap((g) => g.links.filter(([, href]) => href.startsWith('/'))).map(([name, href], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    url: `https://www.emergent-logic.ca${href}`,
  })),
};

function CallButton({ location }) {
  return (
    <TrackedCTA ctaName={`Services hub - Book a call - ${location}`} destination="calendly">
      <a href={callUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-700">
        Book a call <ArrowRight className="h-5 w-5" />
      </a>
    </TrackedCTA>
  );
}

export default function ServicesHub() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <section className="pt-28 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CRM services, from choosing a platform to running it</h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-6">
            Emergent Logic helps small and medium businesses in Canada and the US choose, set up, connect, clean up and run their CRM. Start with the group that matches the job you need done.
          </p>
          <CallButton location="hero" />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{g.title}</h2>
              <p className="text-gray-600 mb-4">{g.text}</p>
              <ul className="space-y-1">
                {g.links.map(([name, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-violet-700 font-medium hover:underline">{name} →</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="fit-assessment" className="py-12 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">CRM fit assessment</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">The fit assessment is where most projects start. It covers three things:</p>
          <div className="grid gap-4 md:grid-cols-3">
            {fitAssessment.map(([t, d]) => (
              <div key={t} className="rounded-xl bg-white border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-1">{t}</h3>
                <p className="text-sm text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How we work: human-led, AI-assisted</h2>
          <p className="text-gray-600 max-w-3xl">
            Projects are scoped, built and checked by people. AI is used for drafting, documentation and QA. A person reviews the work before anything reaches a client&apos;s CRM.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Platforms we work with</h2>
          <p className="text-gray-700">HubSpot · Salesforce · Zoho · Odoo · GoHighLevel · Zapier · Make · Celigo · Boomi</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Not sure which service you need?</h2>
          <p className="text-gray-600 mb-6">Book a call and describe what is going wrong. We will tell you plainly what the right next step is.</p>
          <CallButton location="bottom" />
        </div>
      </section>
      <Footer />
      <CookieConsent />
    </main>
  );
}
