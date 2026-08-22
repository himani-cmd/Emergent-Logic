import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ClipboardCheck,
  Database,
  FileSearch,
  GitBranch,
  MapPin,
  Route,
  Users,
  Workflow,
} from 'lucide-react';

const canonicalUrl = 'https://www.emergent-logic.ca/crm-consultant-vancouver';

export const metadata = {
  title: 'CRM Consultant Vancouver | Implementation',
  description: 'Vancouver CRM consultant for HubSpot, Salesforce and Zoho implementation, cleanup, migration, lead routing, reporting and team adoption.',
  alternates: {
    canonical: canonicalUrl,
    languages: { 'en-CA': canonicalUrl },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    title: 'CRM Consultant Vancouver | Emergent Logic',
    description: 'CRM implementation, cleanup, migration, lead routing and reporting support for Vancouver businesses.',
    url: canonicalUrl,
    siteName: 'Emergent Logic',
    images: [{
      url: 'https://www.emergent-logic.ca/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Emergent Logic CRM consulting for Vancouver businesses',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM Consultant Vancouver | Emergent Logic',
    description: 'CRM implementation, cleanup, migration, lead routing and reporting support for Vancouver businesses.',
    images: ['https://www.emergent-logic.ca/og-image.png'],
  },
};

const serviceAreas = [
  { icon: Database, title: 'CRM implementation and cleanup', description: 'Pipelines, lifecycle stages, fields, duplicate records, permissions and admin settings organized around the way the team actually works.' },
  { icon: Route, title: 'Lead routing and follow-up', description: 'Forms, inboxes, assignment rules, tasks and reminders connected so each qualified inquiry has an owner and a visible next step.' },
  { icon: BarChart3, title: 'Reporting and dashboards', description: 'Reports designed to show source quality, pipeline movement, stalled opportunities, follow-up status and the decisions managers need to make.' },
  { icon: GitBranch, title: 'Migration and integrations', description: 'Controlled data mapping, test imports and supported connections between the CRM, website, email, calendars, spreadsheets and operating tools.' },
];

const platformGuide = [
  {
    platform: 'HubSpot',
    bestWhen: 'Marketing, sales and service teams want an approachable platform with strong native forms, email and automation.',
    focus: 'Lifecycle design, properties, pipelines, routing, workflows, reporting and adoption.',
    href: '/hubspot-consultant-vancouver',
  },
  {
    platform: 'Salesforce',
    bestWhen: 'The business needs deeper configuration, permissions, reporting, integrations or more complex operating rules.',
    focus: 'Admin support, objects and fields, access, reports, dashboards, automation and integration planning.',
    href: '/services/salesforce-consulting',
  },
  {
    platform: 'Zoho CRM',
    bestWhen: 'A lean team needs practical CRM structure and automation while keeping licensing and administration manageable.',
    focus: 'CRM selection, setup, pipeline design, fields, workflow planning, migration and training.',
    href: '/services/crm-implementation',
  },
];

const signals = [
  'Leads arrive from forms, referrals, ads, inboxes, and calls, but ownership is not clear.',
  'The CRM has fields and workflows nobody fully trusts anymore.',
  'Reports show activity, but not which opportunities are stuck or who owns the next step.',
  'A migration, integration, or new automation project is blocked by messy data.',
  'Sales, marketing, and operations use different definitions for lead, MQL, SQL, opportunity, and customer.',
];

const process = [
  { step: '01', title: 'Audit the current state', description: 'We review your pipeline, fields, records, workflows, forms, integrations, reports, and team habits before recommending changes.' },
  { step: '02', title: 'Define the operating model', description: 'We document lifecycle rules, ownership, lead sources, follow-up expectations, required fields, and what each dashboard must answer.' },
  { step: '03', title: 'Clean and configure', description: 'We update the CRM structure, cleanup plan, routing rules, automations, integrations, and reports in controlled, reviewable steps.' },
  { step: '04', title: 'Train and hand over', description: 'We leave your team with the workflow, documentation, and admin guidance needed to keep the system usable after launch.' },
];

const faqs = [
  {
    q: 'What does a CRM consultant in Vancouver help with?',
    a: 'A CRM consultant helps map your sales and service process into a usable system. That can include CRM selection, HubSpot or Salesforce setup, data cleanup, pipeline design, lead routing, reporting, integrations, migration planning, and team training.',
  },
  {
    q: 'Do you work only in Vancouver?',
    a: 'Emergent Logic is based in Surrey and offers local or remote CRM support across Vancouver, Metro Vancouver, Canada, and selected North American engagements. Delivery can use calls, shared screens, and documented implementation sprints.',
  },
  {
    q: 'Should we clean up our CRM before adding automation?',
    a: 'Usually, yes. If lifecycle stages, owners, duplicate records, lead sources, and required fields are unreliable, new automation can amplify the mess. We typically audit and stabilize the CRM foundation before adding more workflow logic.',
  },
  {
    q: 'Which CRM platforms do you support?',
    a: 'HubSpot and Salesforce are the primary platforms offered. Zoho CRM and other tools can be assessed for fit before a scope is proposed. Platform selection depends on the workflow, data model, reporting, integrations, budget and internal administration capacity.',
  },
  {
    q: 'Which CRM is best for a Vancouver small business?',
    a: 'There is no single best CRM for every small business. HubSpot can fit teams that want connected marketing and sales tools, Salesforce can support more complex data and permissions, and Zoho can suit leaner requirements. The operating process and administration model should be defined before a platform is selected.',
  },
  {
    q: 'Can you migrate customer data from Excel or another CRM?',
    a: 'Data migration can be included when the source and destination are supported. A controlled plan covers source backups, field mapping, deduplication rules, representative test imports, validation, exception handling and approval before the production migration.',
  },
  {
    q: 'How much does CRM consulting cost in Vancouver?',
    a: 'Pricing is confirmed after discovery because the effort depends on data quality, users, platforms, integrations, testing and training. The written proposal defines the included deliverables, dependencies, exclusions, acceptance checks and commercial terms before work begins.',
  },
  {
    q: 'How long does CRM implementation take?',
    a: 'Timing depends on scope, data volume, integration complexity, stakeholder availability and acceptance criteria. Emergent Logic documents the delivery plan and dependencies in the proposal rather than promising a generic timeline before discovery.',
  },
];

const auditChecks = [
  'Where the inquiry enters and whether the source is preserved',
  'Who should own the lead and what status it should create',
  'What follow-up should happen next and when',
  'Where a handoff, inbox, form, or CRM field can break',
  'What the team should be able to see seven days later',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: 'CRM Consultant Vancouver | Implementation & Cleanup',
      description: metadata.description,
      inLanguage: 'en-CA',
      dateModified: '2026-08-22',
      isPartOf: { '@id': 'https://www.emergent-logic.ca/#website' },
      about: { '@id': `${canonicalUrl}#service` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://www.emergent-logic.ca/og-image.png',
        width: 1200,
        height: 630,
      },
    },
    {
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: 'CRM Consulting in Vancouver, BC',
      serviceType: 'CRM implementation, cleanup, migration planning, lead routing, reporting, integration and team adoption consulting',
      description: 'CRM consulting for Vancouver and Metro Vancouver businesses using HubSpot, Salesforce, Zoho CRM and other supported platforms.',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: canonicalUrl,
      areaServed: [
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'AdministrativeArea', name: 'Metro Vancouver' },
        { '@type': 'AdministrativeArea', name: 'British Columbia' },
      ],
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Small and growing businesses',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function CrmConsultantVancouver() {
  return (
    <main className="min-h-screen bg-[#FBFBFF]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="overflow-hidden bg-[#1E3A5F] pb-12 pt-28 md:pb-16 md:pt-32">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services/crm-implementation' },
            { label: 'CRM Consultant Vancouver', href: '/crm-consultant-vancouver' },
          ]} tone="dark" />
          <div className="mb-4 flex items-center gap-2 text-[#C7D7FE]">
            <MapPin className="h-5 w-5 flex-shrink-0" />
            <span>Vancouver & Metro Vancouver</span>
          </div>
          <h1 className="mb-4 max-w-4xl break-words text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            CRM consultant in Vancouver for implementation, cleanup and follow-up
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            Emergent Logic helps Vancouver businesses select, implement and clean up CRM systems so lead ownership, follow-up, reporting and handoffs are easier to trust. Work can include HubSpot, Salesforce, Zoho CRM and supported integrations after technical fit is confirmed.
          </p>
          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap">
            <TrackedCTA ctaName="Vancouver CRM Consultation" destination="calendly">
              <Button asChild size="lg" className="w-full bg-white text-[#1E3A5F] hover:bg-[#EEF2FF] sm:w-auto">
                <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                  Book a CRM Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </TrackedCTA>
            <TrackedCTA ctaName="Vancouver CRM Lead Follow-Up Audit" destination="/lead-follow-up-audit">
              <Button asChild size="lg" className="w-full border border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto">
                <Link href="/lead-follow-up-audit">Get a Free 5-Point Audit</Link>
              </Button>
            </TrackedCTA>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16" aria-labelledby="vancouver-crm-answer">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[#EEF2FF] text-[#4B37C8] hover:bg-[#EEF2FF]">Direct answer</Badge>
            <h2 id="vancouver-crm-answer" className="mb-4 text-3xl font-bold text-[#101828]">What does a CRM consultant in Vancouver do?</h2>
            <p className="text-lg leading-relaxed text-[#475467]">
              A CRM consultant turns a business's sales, service and follow-up process into a system the team can operate consistently. That can mean selecting a CRM, cleaning unreliable data, configuring pipelines and fields, routing new leads, connecting supported tools, building useful reports and training the people responsible for the next action.
            </p>
          </div>
          <div className="border-l-4 border-[#6366F1] bg-[#EEF2FF] px-6 py-7">
            <h3 className="mb-5 text-xl font-bold text-[#101828]">A useful CRM should answer five questions</h3>
            <ul className="space-y-4">
              {[
                'Where did this lead or customer inquiry come from?',
                'Who owns the relationship and the next action?',
                'What has already happened across email, calls and forms?',
                'Which opportunity or service request is stalled?',
                'What should the team do next, and by when?',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4B37C8]" />
                  <span className="text-[#344054]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D0D5DD] bg-[#FBFBFF] py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold text-[#101828]">CRM consulting services for Vancouver businesses</h2>
            <p className="text-lg leading-relaxed text-[#475467]">
              The work starts with the operating problem, not a generic software package. These four areas are most likely to affect follow-up visibility, reporting and CRM adoption.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((item) => (
              <Card key={item.title} className="rounded-lg border border-[#D0D5DD] bg-white shadow-sm">
                <CardHeader>
                  <item.icon className="mb-2 h-7 w-7 text-[#4B37C8]" />
                  <CardTitle className="text-lg text-[#101828]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475467]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#101828]">Signs the CRM needs attention</h2>
            <p className="mb-6 text-lg leading-relaxed text-[#475467]">
              Many Vancouver teams do not need a brand-new platform. They need the current process, data and ownership rules made visible before more automation is added.
            </p>
            <ul className="space-y-4">
              {signals.map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#177E89]" />
                  <span className="text-[#344054]">{signal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-[#D0D5DD] bg-[#FBFBFF] p-6 md:p-8">
            <Badge className="mb-4 bg-white text-[#4B37C8] hover:bg-white">Free diagnostic</Badge>
            <ClipboardCheck className="mb-4 h-10 w-10 text-[#4B37C8]" />
            <h3 className="mb-3 text-2xl font-bold text-[#101828]">Start with one lead path</h3>
            <p className="mb-5 leading-relaxed text-[#475467]">
              Send one public contact form, consultation page, demo request or inquiry flow. Emergent Logic will review the visible path and return a practical five-point note. No CRM credentials are needed for this first review.
            </p>
            <ul className="mb-6 space-y-3">
              {auditChecks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#4B37C8]" />
                  <span className="text-[#475467]">{item}</span>
                </li>
              ))}
            </ul>
            <TrackedCTA ctaName="Vancouver CRM Diagnostic Section" destination="/lead-follow-up-audit">
              <Button asChild className="bg-[#4B37C8] text-white hover:bg-[#3925A8]">
                <Link href="/lead-follow-up-audit">
                  Review the Free Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </TrackedCTA>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D0D5DD] bg-[#FBFBFF] py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-4xl">
            <Badge className="mb-4 bg-white text-[#4B37C8] hover:bg-white">Platform decision guide</Badge>
            <h2 className="mb-4 text-3xl font-bold text-[#101828]">HubSpot, Salesforce or Zoho CRM?</h2>
            <p className="text-lg leading-relaxed text-[#475467]">
              If the platform is not decided, compare the workflow, data model, reporting, integrations, budget and internal administration needs first. If HubSpot is already required, use the dedicated HubSpot option below for platform-specific setup, cleanup and automation guidance.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-[#D0D5DD] bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="bg-[#1E3A5F] text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">Platform</th>
                  <th className="px-5 py-4 font-semibold">Often fits when</th>
                  <th className="px-5 py-4 font-semibold">Consulting focus</th>
                </tr>
              </thead>
              <tbody>
                {platformGuide.map((item) => (
                  <tr key={item.platform} className="border-t border-[#D0D5DD] align-top">
                    <td className="px-5 py-5">
                      <Link href={item.href} className="font-semibold text-[#4B37C8] hover:underline">{item.platform}</Link>
                    </td>
                    <td className="px-5 py-5 text-[#475467]">{item.bestWhen}</td>
                    <td className="px-5 py-5 text-[#475467]">{item.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-[#667085]">
            This guide is directional. A platform recommendation is made only after the required workflow, data, integrations and administration model are understood.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold text-[#101828]">How the Vancouver CRM consulting process works</h2>
            <p className="text-lg leading-relaxed text-[#475467]">
              The delivery path is designed to make decisions, approvals and acceptance evidence clear before production systems are changed.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="border-t-4 border-[#6366F1] pt-5">
                <div className="mb-3 text-sm font-bold text-[#4B37C8]">STEP {item.step}</div>
                <h3 className="mb-3 text-xl font-bold text-[#101828]">{item.title}</h3>
                <p className="leading-relaxed text-[#475467]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E3A5F] py-14 text-white">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <MapPin className="mb-4 h-9 w-9 text-[#C7D7FE]" />
            <h2 className="mb-3 text-3xl font-bold">Local context, practical delivery</h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-white/80">
            <p>
              Emergent Logic is based in Surrey and serves Vancouver, Metro Vancouver and businesses across Canada. Most CRM discovery, configuration, testing and training can happen through calls, shared screens and documented review cycles.
            </p>
            <p>
              Local does not mean claiming a Vancouver office. It means working in the same time zone, understanding the constraints of Canadian small and growing businesses, and defining when an in-person session is actually useful.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FBFBFF] py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold text-[#101828]">Related CRM services and buyer resources</h2>
            <p className="text-lg text-[#475467]">Use these pages when the platform or immediate operating problem is already clear.</p>
          </div>
          <div className="grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: '/services/crm-implementation',
                icon: Workflow,
                title: 'CRM Implementation',
                description: 'How requirements, configuration, testing and handoff are controlled.',
              },
              {
                href: '/services/crm-cleanup',
                icon: FileSearch,
                title: 'CRM Cleanup',
                description: 'Data hygiene, lifecycle rules, fields, workflows and reporting foundations.',
              },
              {
                href: '/services/crm-integration',
                icon: GitBranch,
                title: 'CRM Integration',
                description: 'Supported system connections, field mapping, sync rules and exception handling.',
              },
              {
                href: '/blog/excel-to-crm-migration-repeat-order-businesses',
                icon: Database,
                title: 'Excel-to-CRM Migration Guide and Workbook',
                description: 'A practical checklist and free seven-sheet workbook for repeat-order businesses planning a controlled move.',
              },
              {
                href: '/blog/crm-consultant-near-me',
                icon: MapPin,
                title: 'CRM Consultant Near Me Guide',
                description: 'Questions to ask before choosing local CRM support.',
              },
              {
                href: '/contact',
                icon: Users,
                title: 'Contact Emergent Logic',
                description: 'Describe the CRM, data, integration or follow-up problem you need to solve.',
              },
            ].map((resource) => (
              <Link key={resource.href} href={resource.href} className="block rounded-lg border border-[#D0D5DD] bg-white p-6 transition-shadow hover:shadow-md">
                <resource.icon className="mb-4 h-7 w-7 text-[#4B37C8]" />
                <h3 className="mb-2 text-lg font-bold text-[#101828]">{resource.title}</h3>
                <p className="text-sm leading-relaxed text-[#475467]">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#D0D5DD] bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-[#101828]">CRM Consultant Vancouver FAQ</h2>
            <div className="divide-y divide-[#D0D5DD] border-y border-[#D0D5DD]">
              {faqs.map((faq) => (
                <article key={faq.q} className="py-6">
                  <h3 className="mb-3 text-xl font-bold text-[#101828]">{faq.q}</h3>
                  <p className="leading-relaxed text-[#475467]">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1E3A5F] py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-3xl font-bold">Make the next CRM decision clear</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/80">
            Use a 30-minute consultation to describe the current process, affected system and business priority. Access, scope, timing and commercial terms are handled only after fit is established and a written proposal is agreed.
          </p>
          <TrackedCTA ctaName="Vancouver CRM Final Consultation" destination="calendly">
            <Button asChild size="lg" className="bg-white text-[#1E3A5F] hover:bg-[#EEF2FF]">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                Book a CRM Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </TrackedCTA>
          <p className="mt-5 text-sm text-white/60">Page reviewed August 2026.</p>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
