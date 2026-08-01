import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import CRMReadinessAssessment from '@/components/CRMReadinessAssessment';
import { Button } from '@/components/ui/button';
import { ArrowRight, Boxes, CalendarClock, CheckCircle2, Database, Repeat2, Users } from 'lucide-react';

const pageUrl = 'https://www.emergent-logic.ca/blog/excel-to-crm-migration-repeat-order-businesses';

export const metadata = {
  title: 'Excel-to-CRM Migration Checklist',
  description: 'A practical Excel-to-CRM migration checklist for distributors and repeat-order businesses: customer data, products, reorder timing, ownership, reports, and platform fit.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Excel-to-CRM Migration Checklist for Repeat-Order Businesses',
    description: 'Plan customer, product, reorder, ownership, and follow-up data before moving a repeat-order sales process from spreadsheets into a CRM.',
    url: pageUrl,
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const migrationSteps = [
  ['Define the customer operating model', 'Separate companies, locations, buyers, bill-to contacts, ship-to contacts, and former customers before choosing CRM objects or fields.'],
  ['Inventory every spreadsheet', 'Record the owner, purpose, row count, update frequency, sensitive fields, duplicate risk, and whether each source is still active.'],
  ['Map products and order history', 'Decide whether the CRM needs products, product families, order summaries, last-order dates, or links to the commerce or accounting system.'],
  ['Define reorder logic', 'Document whether follow-up is based on a fixed interval, product usage, customer segment, salesperson judgment, or an order-system signal.'],
  ['Create a field-mapping workbook', 'For every source column, choose the target field, format, allowed values, merge rule, owner, and validation check.'],
  ['Clean and deduplicate before import', 'Standardize names, domains, phone formats, status values, owners, and inactive records before the CRM becomes the new source of truth.'],
  ['Run a representative test import', 'Use a small sample that includes normal records, duplicates, multiple contacts, multiple locations, missing data, and unusual order patterns.'],
  ['Validate reports and daily work', 'Confirm that users can see who needs attention, why follow-up is due, what happened last, and what should happen next.'],
];

const platformChecklist = [
  {
    name: 'HubSpot',
    prompt: 'Validate the required data model, licensed automation, reporting, association, and integration capabilities before treating a simple contact-and-deal setup as enough.',
  },
  {
    name: 'Salesforce',
    prompt: 'Validate administration capacity, object design, automation ownership, reporting governance, and the integrations needed to keep order context current.',
  },
  {
    name: 'Zoho CRM',
    prompt: 'Validate module design, workflow limits, reporting needs, user permissions, and how order or inventory context will enter the CRM.',
  },
];

const faqs = [
  {
    q: 'Should every historical order be imported into the CRM?',
    a: 'Not automatically. Import the history needed for segmentation, reorder planning, service context, and reporting. Keep detailed transaction records in the source system when the CRM only needs a useful summary or link.',
  },
  {
    q: 'Can a CRM predict when a customer will reorder?',
    a: 'A CRM can support reorder reminders when the business defines a reliable signal, such as last order date, expected usage interval, product category, or an order-system event. The rule should be tested against real customer behaviour before it drives automated outreach.',
  },
  {
    q: 'Which CRM is best for a small repeat-order business?',
    a: 'The answer depends on the data model, number of users, administration capacity, workflow complexity, reporting, integrations, and budget. Compare the operating requirements before comparing vendor feature lists.',
  },
  {
    q: 'How do we avoid losing spreadsheet data during migration?',
    a: 'Preserve read-only source copies, document field mapping, clean duplicates, run a representative test import, reconcile counts and key fields, and obtain approval before the final production import.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: 'Excel-to-CRM Migration Checklist for Repeat-Order Businesses',
      description: metadata.description,
      datePublished: '2026-07-31',
      dateModified: '2026-07-31',
      author: { '@type': 'Organization', '@id': 'https://www.emergent-logic.ca/#organization', name: 'Emergent Logic' },
      publisher: { '@id': 'https://www.emergent-logic.ca/#organization' },
      mainEntityOfPage: pageUrl,
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function ExcelToCRMMigrationGuide() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <header className="bg-[#0F1B2D] pt-32 pb-16 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <Breadcrumbs items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Excel-to-CRM Migration', href: '/blog/excel-to-crm-migration-repeat-order-businesses' },
          ]} />
          <p className="mt-5 text-sm font-semibold text-[#9FB4FF]">CRM MIGRATION GUIDE</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Excel-to-CRM migration checklist for repeat-order businesses
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            A CRM should help a distributor or repeat-order business see who buys what, when follow-up is due, who owns the relationship, and what happened next. This guide maps the decisions that should be made before spreadsheet data is imported or reminders are automated.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span>By Emergent Logic</span>
            <span aria-hidden="true">|</span>
            <span>Updated July 31, 2026</span>
            <span aria-hidden="true">|</span>
            <span>11 min read</span>
          </div>
          <div className="mt-7">
            <ShareButtons url={pageUrl} title="Excel-to-CRM Migration Checklist for Repeat-Order Businesses" />
          </div>
        </div>
      </header>

      <article className="py-14">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, label: 'Customer structure', text: 'Companies, locations, buyers, owners, and relationship status.' },
              { icon: Boxes, label: 'Product context', text: 'What was ordered, when, and which detail belongs outside the CRM.' },
              { icon: CalendarClock, label: 'Reorder timing', text: 'A documented signal for when a useful follow-up becomes due.' },
              { icon: Repeat2, label: 'Repeatable work', text: 'Tasks, reminders, exceptions, and reports the team can operate.' },
            ].map((item) => (
              <div key={item.label} className="border border-slate-200 bg-slate-50 p-5">
                <item.icon className="h-7 w-7 text-indigo-700" aria-hidden="true" />
                <h2 className="mt-4 text-base font-bold text-slate-950">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg mt-12 max-w-none prose-headings:text-slate-950 prose-a:text-indigo-700">
            <h2>Why repeat-order businesses outgrow spreadsheets differently</h2>
            <p>
              A spreadsheet can list customers and orders, but it rarely manages the next action. In a repeat-order business, the operating question is not only <em>who bought?</em> It is <em>what did they buy, when might they need it again, who should contact them, and what happened after that contact?</em>
            </p>
            <p>
              That means an Excel-to-CRM migration should not begin with a bulk import. It should begin with a customer model, a reorder signal, ownership rules, and the reports needed to manage the work. Otherwise the CRM becomes a cleaner-looking spreadsheet with the same blind spots.
            </p>

            <h2>The minimum useful CRM record</h2>
            <p>For a distributor, wholesaler, supply business, or another repeat-order model, a useful customer record often needs:</p>
          </div>

          <div className="my-8 grid gap-3 md:grid-cols-2">
            {[
              'Company and location identity',
              'Primary buyer and other relevant contacts',
              'Customer segment, territory, or account type',
              'Assigned relationship owner',
              'Products or product families purchased',
              'Last order date and relevant order summary',
              'Expected reorder date or review date',
              'Last correspondence and next follow-up action',
              'Status, risk, and reason when an opportunity is lost',
              'Consent and communication preferences where required',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border border-slate-200 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-700" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-slate-950 prose-a:text-indigo-700">
            <p>
              Detailed invoices, inventory, payments, and fulfilment may still belong in an ecommerce, accounting, ERP, or order-management system. The CRM should receive enough context to guide the relationship without becoming a second, conflicting transaction database.
            </p>

            <h2>The eight-step Excel-to-CRM migration checklist</h2>
          </div>

          <ol className="my-8 space-y-4">
            {migrationSteps.map(([title, detail], index) => (
              <li key={title} className="grid gap-4 border border-slate-200 p-5 sm:grid-cols-[3rem_1fr]">
                <span className="flex h-10 w-10 items-center justify-center bg-indigo-700 font-bold text-white" aria-hidden="true">{index + 1}</span>
                <div>
                  <h3 className="font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <CRMReadinessAssessment />

          <div className="prose prose-lg max-w-none prose-headings:text-slate-950 prose-a:text-indigo-700">
            <h2>Platform implementation checklist</h2>
            <p>
              Platform selection should follow the operating model. Use the same requirements to evaluate each candidate rather than comparing unrelated feature lists.
            </p>
          </div>

          <div className="my-8 grid gap-5 md:grid-cols-3">
            {platformChecklist.map((platform) => (
              <div key={platform.name} className="border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-slate-950">{platform.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{platform.prompt}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-slate-950 prose-a:text-indigo-700">
            <h2>Acceptance checks before the final import</h2>
            <ul>
              <li>Source files are preserved as read-only backups.</li>
              <li>Record counts and duplicate rules are documented.</li>
              <li>Required fields, formats, owners, and allowed values are validated.</li>
              <li>A representative sample passed test import and reconciliation.</li>
              <li>Users can find the next follow-up without opening the old spreadsheet.</li>
              <li>Reports show overdue follow-up, upcoming reorder reviews, and records with missing ownership or dates.</li>
              <li>The business owner approved the mapping and production import boundary.</li>
            </ul>

            <h2>Frequently asked questions</h2>
          </div>

          <div className="my-8 space-y-4">
            {faqs.map((item) => (
              <section key={item.q} className="border border-slate-200 p-5">
                <h3 className="font-bold text-slate-950">{item.q}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.a}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 bg-[#0F1B2D] p-7 text-white sm:p-9">
            <h2 className="text-2xl font-bold">Map the migration before choosing the build</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-200">
              Emergent Logic can review the spreadsheet sources, customer model, reorder logic, platform constraints, and acceptance checks needed for a bounded CRM migration scope.
            </p>
            <Link href="/contact#booking" className="mt-6 inline-flex">
              <Button size="lg" className="bg-[#4F46E5] text-white hover:bg-[#4338CA]">
                Book a CRM consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-950">Related implementation resources</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                ['/services/crm-implementation', 'CRM implementation services', 'Scope the data, process, permissions, integration, testing, and adoption work.'],
                ['/blog/salesforce-vs-hubspot-vs-zoho-canada-2026', 'HubSpot, Salesforce and Zoho comparison', 'Compare platform fit against the operating requirements.'],
                ['/services/marketing-automation', 'CRM marketing automation', 'Connect follow-up, scoring, routing, and reporting after the foundation is ready.'],
              ].map(([href, title, detail]) => (
                <Link key={href} href={href} className="border border-slate-200 bg-slate-50 p-5 hover:border-indigo-300">
                  <h3 className="font-bold text-indigo-800">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <Footer />
      <CookieConsent />
    </main>
  );
}
