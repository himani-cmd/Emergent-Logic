import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Database, Zap, BarChart3, Users, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'CRM Implementation Canada',
  description: 'CRM implementation for Canadian businesses: HubSpot, Salesforce, Zoho, pipelines, automation, dashboards, migration, and training.',
  alternates: { canonical: 'https://www.emergent-logic.ca/crm-implementation-canada' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Implementation Canada | Emergent Logic',
    description: 'CRM implementation, integration, and automation for Canadian SMBs using HubSpot, Salesforce, or Zoho.',
    url: 'https://www.emergent-logic.ca/crm-implementation-canada',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const included = [
  { icon: Database, title: 'Pipeline & Data Model', desc: 'Deal stages, contact/company properties, lifecycle definitions, required fields, and clean ownership rules.' },
  { icon: Zap, title: 'Automation', desc: 'Lead routing, task creation, follow-up reminders, internal notifications, nurture workflows, and stage automation.' },
  { icon: BarChart3, title: 'Dashboards', desc: 'Revenue, pipeline, activity, attribution, forecast, and owner-level reporting built around decisions your team actually makes.' },
  { icon: Users, title: 'Training & Adoption', desc: 'Role-specific training for founders, sales reps, marketers, admins, and managers so the CRM becomes a daily system.' },
  { icon: ShieldCheck, title: 'Migration & QA', desc: 'Deduplication, field mapping, test imports, validation, rollback planning, and post-launch support.' },
];

const faqs = [
  { q: 'Which CRM should we implement?', a: 'The right CRM depends on the sales process, users, permissions, reporting, integrations, data, governance, budget, and internal ownership. HubSpot, Salesforce, Zoho, and other supported platforms should be compared against written requirements rather than selected from a generic ranking.' },
  { q: 'How long does CRM implementation take?', a: 'Timing depends on data volume, integrations, stakeholder availability, testing, and acceptance criteria. The delivery plan and dependencies are documented before work begins.' },
  { q: 'Do you migrate data from spreadsheets or an old CRM?', a: 'Migration can be scoped after the source data, associations, history, ownership, quality, and target requirements are understood. Field mapping, test imports, reconciliation, rollback considerations, and acceptance checks should be agreed before the final cutover.' },
  { q: 'Do you support businesses outside BC?', a: 'Yes. Emergent Logic is based in Surrey, BC and supports businesses across Canada. CRM implementation can be delivered remotely with working sessions, screen shares, and documented handoff.' },
  { q: 'What should a growing company look for in a CRM implementation partner?', a: 'Look for a partner who starts with the operating process, defines data and ownership rules, documents scope and dependencies, tests representative scenarios, plans migration and rollback, trains the people who will use the system, and leaves a clear handoff. Platform familiarity matters, but accountable delivery controls matter too.' },
  { q: 'Can one CRM implementation scope include setup, migration, automation, reporting, and training?', a: 'Yes, when those workstreams can be bounded responsibly. A written scope can connect CRM configuration, data migration, integrations, workflow automation, dashboards, testing, role-specific training, and documented handoff. The confirmed systems, licences, data, stakeholders, and acceptance criteria determine what is included.' },
  { q: 'Can an underused CRM be customized and relaunched instead of replaced?', a: 'Often the first responsible step is a diagnostic review rather than a replacement. The review can identify useful configuration, data problems, lifecycle gaps, permissions, routing, workflows, reports, integrations, and adoption barriers, then support a retain, repair, simplify, or replace decision.' },
  { q: 'Can you build CRM dashboards around our sales process?', a: 'Dashboard work begins with the decisions each role needs to make and the source fields required to support them. Pipeline, activity, follow-up, source, conversion, forecast, and exception reporting can be scoped after definitions and data quality are confirmed.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/crm-implementation-canada#service',
      name: 'CRM Implementation Canada',
      serviceType: 'CRM implementation, HubSpot setup, Salesforce setup, Zoho setup, data migration, automation, dashboards, and training',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/crm-implementation-canada',
      areaServed: { '@type': 'Country', name: 'Canada' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.emergent-logic.ca/crm-implementation-canada#webpage',
      url: 'https://www.emergent-logic.ca/crm-implementation-canada',
      name: 'CRM Implementation Canada',
      description: metadata.description,
      dateModified: '2026-08-19',
      about: { '@id': 'https://www.emergent-logic.ca/crm-implementation-canada#service' },
      isPartOf: { '@id': 'https://www.emergent-logic.ca/#website' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/crm-implementation-canada#faq',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function CRMImplementationCanada() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/#services' },
            { label: 'CRM Implementation Canada', href: '/crm-implementation-canada' },
          ]} />
          <div className="flex items-center gap-2 text-violet-200 mb-4"><CheckCircle className="w-5 h-5" /><span>HubSpot, Salesforce, Zoho</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CRM Implementation for Canadian Businesses</h1>
          <p className="text-xl text-white/75 max-w-3xl mb-8">
            Emergent Logic helps Canadian small and growing businesses plan and implement supported CRM systems around clear ownership, follow-up, reporting, migration, automation, testing, training, and documented handoff. The written scope reflects the confirmed platform, data, integrations, users, and operating requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
            <Link href="/services/crm-implementation"><Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">View CRM Service</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="mb-3 text-sm font-semibold text-violet-700">Last reviewed August 19, 2026</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What does end-to-end CRM implementation include?</h2>
          <p className="text-lg text-gray-700 mb-4">
            End-to-end CRM implementation connects process design, platform configuration, data migration, integrations, automation, reporting, testing, training, and handoff. The objective is not simply to install software; it is to give each qualified inquiry a clear owner, next action, and reliable place in the operating record.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            A CRM only works when it reflects how your team sells, follows up, reports, and hands work between people. Default pipelines and generic templates usually create extra admin work instead of clarity.
          </p>
          <p className="text-lg text-gray-600">
            Our implementation process starts with the operating model: what counts as a lead, who owns it, when follow-up happens, what stages matter, what leadership needs to see, and which manual steps should disappear. Then we configure the software.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {included.map((item, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader><item.icon className="w-8 h-8 text-violet-600 mb-2" /><CardTitle className="text-lg">{item.title}</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How should a Canadian company choose a CRM implementation partner?</h2>
          <p className="mb-8 text-lg leading-8 text-gray-600">
            Compare partners on how they handle requirements, data ownership, migration, integrations, testing, adoption, documentation, and production approval. A useful proposal should make assumptions, exclusions, dependencies, acceptance checks, and the client&apos;s responsibilities visible before work begins.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Requirements and ownership are documented before configuration',
              'Migration includes mapping, test imports, reconciliation, and acceptance',
              'Integrations define source systems, retries, errors, and recovery ownership',
              'Dashboards are tied to agreed decisions and trustworthy source fields',
              'Representative users test realistic scenarios before production release',
              'Training, documentation, access, open issues, and support boundaries are handed over',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-violet-50 border border-violet-100 p-4 rounded-xl"><CheckCircle className="w-5 h-5 text-violet-700 flex-shrink-0 mt-0.5" /><p className="text-gray-700">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">CRM Implementation FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <Card key={i} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{faq.a}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/crm-implementation" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-violet-700">CRM Implementation Service</p><p className="text-sm text-gray-600">Detailed scope, timeline, and pricing</p></Link>
            <Link href="/blog/what-is-crm-implementation-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-violet-700">CRM Implementation Guide</p><p className="text-sm text-gray-600">Step-by-step explanation for Canada</p></Link>
            <Link href="/crm-implementation-method" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-violet-700">Choose an Implementation Partner</p><p className="text-sm text-gray-600">Evaluation criteria, questions, warning signs, and delivery controls</p></Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
