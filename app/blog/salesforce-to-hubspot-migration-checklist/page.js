import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import WorkbookDownload from '@/components/WorkbookDownload';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Database, GitBranch, RotateCcw, ShieldCheck } from 'lucide-react';

const pageUrl = 'https://www.emergent-logic.ca/blog/salesforce-to-hubspot-migration-checklist';
const workbookUrl = 'https://www.emergent-logic.ca/resources/emergent_logic_salesforce_to_hubspot_migration_workbook.xlsx';

export const metadata = {
  title: 'Salesforce to HubSpot Migration Checklist',
  description: 'Plan a controlled Salesforce-to-HubSpot migration: map objects and fields, protect history, test ownership and automation, and define rollback.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Salesforce to HubSpot Migration Checklist',
    description: 'A decision and QA guide with a free workbook for controlled Salesforce-to-HubSpot migrations.',
    url: pageUrl,
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const decisionPaths = [
  ['Migrate', 'A smaller team needs simpler sales execution and marketing visibility, and the required Salesforce capabilities can be rebuilt or retired.'],
  ['Coexist', 'Another team still requires Salesforce, or the transition needs a controlled validation period with an explicit source of truth.'],
  ['Repair first', 'Duplicates, unclear ownership, inconsistent stages, or weak process would otherwise follow the team into the new CRM.'],
];

const inventoryItems = [
  'Record counts, business owners, required fields, custom fields, and picklist values',
  'Relationships among leads, contacts, accounts, opportunities, and custom objects',
  'Files, notes, emails, tasks, events, and the history users still need',
  'Flows, workflow rules, assignment rules, reports, dashboards, and integrations',
  'Permissions, retention, audit, consent, and access requirements',
];

const acceptanceControls = [
  ['Counts', 'Did the expected number of eligible records import, fail, or skip?'],
  ['Owners', 'Do active records have the correct current owner?'],
  ['Associations', 'Are contacts, companies, and deals connected correctly?'],
  ['Dates and values', 'Did dates, currencies, booleans, and picklists retain their intended meaning?'],
  ['History', 'Are the required activities and files accessible where users expect them?'],
  ['Exceptions', 'Is every failure visible with an owner and next action?'],
];

const checklist = [
  'Document whether the right path is migration, coexistence, or repair.',
  'Name the source-of-truth owner for every critical data area.',
  'Preserve an unchanged Salesforce export with date, owner, and checksum.',
  'Approve the object, field, automation, report, and integration inventory.',
  'Approve destination mapping, including associations, owners, and transformations.',
  'Handle consent and subscription values only from an approved source.',
  'Document cleanup and duplicate rules before importing.',
  'Import and reconcile a representative pilot.',
  'Rebuild and test only approved automation.',
  'Test decision-critical reports, permissions, and user workflows.',
  'Approve cutover, rollback, and post-launch QA criteria.',
];

const faqs = [
  {
    q: 'Can Salesforce data be imported directly into HubSpot?',
    a: 'HubSpot supports record imports and provides a Salesforce integration for supported coexistence scenarios. The right path depends on the objects, fields, associations, files, activities, and history in scope. Reconcile a representative test before full cutover.',
  },
  {
    q: 'Should every Salesforce field move to HubSpot?',
    a: 'No. Every field should have a business owner and a documented decision: migrate, transform, archive, or retire. Moving unused fields creates reporting and adoption debt in the destination.',
  },
  {
    q: 'Should Salesforce and HubSpot coexist before migration?',
    a: 'Sometimes. Coexistence can reduce cutover risk, but it also creates sync and source-of-truth risks. Define which system owns each record and field before both systems are active.',
  },
  {
    q: 'How long does a Salesforce-to-HubSpot migration take?',
    a: 'There is no responsible fixed answer without discovery. Record volume, custom objects, data quality, activities, files, automation, integrations, reporting, permissions, testing, and stakeholder availability all affect timing.',
  },
  {
    q: 'What should be tested before cutover?',
    a: 'At minimum: counts, required fields, owners, associations, dates, picklist values, files and history, duplicates, workflow outcomes, permissions, and decision-critical reports. Every exception needs an owner and disposition.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: 'Salesforce to HubSpot Migration: A Decision and QA Checklist',
      description: metadata.description,
      datePublished: '2026-08-11',
      dateModified: '2026-08-11',
      author: { '@type': 'Organization', '@id': 'https://www.emergent-logic.ca/#organization', name: 'Emergent Logic' },
      publisher: { '@id': 'https://www.emergent-logic.ca/#organization' },
      mainEntityOfPage: pageUrl,
      hasPart: { '@id': `${pageUrl}#workbook` },
    },
    {
      '@type': 'DigitalDocument',
      '@id': `${pageUrl}#workbook`,
      name: 'Salesforce-to-HubSpot Migration Workbook',
      description: 'An eleven-sheet XLSX template for object inventory, field and owner mapping, activities, automation, test cases, reconciliation, issues, and cutover or rollback decisions.',
      encodingFormat: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      contentUrl: workbookUrl,
      isAccessibleForFree: true,
      inLanguage: 'en-CA',
      datePublished: '2026-08-11',
      author: { '@id': 'https://www.emergent-logic.ca/#organization' },
      publisher: { '@id': 'https://www.emergent-logic.ca/#organization' },
      learningResourceType: 'Migration planning template',
      about: ['Salesforce migration', 'HubSpot migration', 'CRM field mapping', 'Data reconciliation', 'Cutover planning'],
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

export default function SalesforceToHubSpotMigrationChecklist() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <header className="bg-[#0F1B2D] pb-16 pt-32 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <Breadcrumbs items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Salesforce to HubSpot Migration', href: '/blog/salesforce-to-hubspot-migration-checklist' },
          ]} />
          <p className="mt-5 text-sm font-semibold text-[#9FB4FF]">CRM MIGRATION GUIDE + WORKBOOK</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Salesforce to HubSpot migration: a decision and QA checklist
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            A Salesforce-to-HubSpot migration is not a CSV transfer. It is a controlled decision about which records, fields, activities, owners, associations, automations, files, and reporting logic must survive in the new system.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span>By Emergent Logic</span>
            <span aria-hidden="true">|</span>
            <time dateTime="2026-08-11">Published August 11, 2026</time>
            <span aria-hidden="true">|</span>
            <span>13 min read</span>
          </div>
          <div className="mt-7">
            <ShareButtons url={pageUrl} title="Salesforce to HubSpot Migration Checklist" />
          </div>
        </div>
      </header>

      <article className="py-14">
        <div className="container mx-auto max-w-5xl px-4">
          <section className="border-l-4 border-indigo-700 bg-indigo-50 p-6" aria-labelledby="direct-answer">
            <h2 id="direct-answer" className="text-xl font-bold text-slate-950">The short answer</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Start with a complete source backup, an object-and-field inventory, and a small test import. Do not change production routing until record counts, ownership, associations, required history, and critical workflows pass written acceptance checks.
            </p>
          </section>

          <div className="prose prose-lg mt-12 max-w-none prose-headings:text-slate-950 prose-a:text-indigo-700">
            <h2>First decide: migrate, coexist, or repair</h2>
            <p>Moving platforms may be the right choice, but the first useful deliverable is a decision record, not an import file.</p>
          </div>

          <div className="my-8 grid gap-5 md:grid-cols-3">
            {decisionPaths.map(([title, detail], index) => {
              const Icon = [GitBranch, Database, RotateCcw][index];
              return (
                <section key={title} className="border border-slate-200 bg-slate-50 p-5">
                  <Icon className="h-7 w-7 text-indigo-700" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </section>
              );
            })}
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-slate-950 prose-a:text-indigo-700">
            <h2>1. Name the source of truth</h2>
            <p>
              During a migration, people often update both systems. For contacts, companies, open opportunities, consent, and closed history, document which system is authoritative before and after cutover, who can freeze changes, and which value wins when records differ.
            </p>
            <p>
              Do not infer consent, lawful basis, or subscription status from activity alone. Preserve the original evidence and map only approved values.
            </p>

            <h2>2. Inventory what Salesforce actually contains</h2>
            <p>Start with objects rather than exports. The inventory should distinguish four outcomes: migrate, archive, rebuild, or retire.</p>
          </div>

          <div className="my-8 grid gap-3 md:grid-cols-2">
            {inventoryItems.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-slate-200 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-700" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-slate-950 prose-a:text-indigo-700">
            <h2>3. Preserve the unchanged source</h2>
            <ol>
              <li>Generate an approved Salesforce export.</li>
              <li>Store an unchanged copy with a date, owner, and checksum.</li>
              <li>Record which objects and attachments are included.</li>
              <li>Restrict access to the people who need it.</li>
              <li>Create a separate working copy for cleanup and mapping.</li>
            </ol>
            <p>The unchanged export is the evidence baseline. Never clean the only copy.</p>

            <h2>4. Map objects, fields, owners, and associations</h2>
            <p>
              A useful mapping row records the source object and field, source type and values, destination object and property, transformation and association rules, required or default behaviour, owner, approval status, test result, and evidence.
            </p>
            <p>
              Give extra attention to leads versus contacts, accounts versus companies, opportunities versus deals, inactive owners, multiple pipelines, custom objects, multi-select picklists, time zones, currencies, and activities or files attached to different parent records.
            </p>

            <h2>5. Decide how Salesforce leads become HubSpot contacts</h2>
            <p>
              Define when a person becomes a contact, how the former lead state is preserved, how company associations are created, how converted leads are de-duplicated, which lifecycle stage and lead status apply, and who owns the record. Do not let import order make this business decision accidentally.
            </p>

            <h2>6. Clean before the destination</h2>
            <p>
              Document deterministic rules for duplicate detection, email and phone normalization, company domains, geographic formats, picklist translation, invalid owners, test records, former employees, retention, and archive decisions. Keep raw values beside cleaned values so each transformation remains explainable and reversible.
            </p>

            <h2>7. Test with a representative sample</h2>
            <p>
              A useful pilot is small enough to reverse and varied enough to expose mapping problems. Include multiple contacts, open and closed deals, current and inactive owners, custom values, missing optional fields, activities, files, known duplicates, and different currencies or time zones when applicable.
            </p>
          </div>

          <div className="my-8 overflow-x-auto border border-slate-200">
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <thead className="bg-slate-950 text-white">
                <tr><th className="p-4">Control</th><th className="p-4">Acceptance question</th></tr>
              </thead>
              <tbody>
                {acceptanceControls.map(([control, question]) => (
                  <tr key={control} className="border-t border-slate-200">
                    <th scope="row" className="p-4 font-semibold text-slate-950">{control}</th>
                    <td className="p-4 text-slate-600">{question}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <WorkbookDownload workbook={{
            href: '/resources/emergent_logic_salesforce_to_hubspot_migration_workbook.xlsx',
            resourceName: 'salesforce_to_hubspot_migration_workbook',
            location: 'salesforce_to_hubspot_migration_guide',
            eyebrow: 'FREE 11-SHEET MIGRATION WORKBOOK',
            title: 'Make every migration decision visible before cutover',
            description: 'Inventory objects and automation, map fields and owners, document lifecycle and pipeline decisions, test a pilot, reconcile counts, log issues, and control cutover or rollback.',
            note: 'XLSX template. Example rows are illustrative and contain no client data.',
            cta: 'Download migration workbook',
          }} />

          <div className="prose prose-lg max-w-none prose-headings:text-slate-950 prose-a:text-indigo-700">
            <h2>8. Rebuild only approved automation</h2>
            <p>
              For every rule, document the business event, exclusions, owner, failure path, risk-sensitive actions, test evidence, and monitoring plan. Do not copy a legacy automation merely because it exists. HubSpot workflow availability also depends on subscription.
            </p>

            <h2>9. Treat reporting as acceptance</h2>
            <p>
              List the decision each required report supports, then verify that its properties, stages, associations, and dates exist in HubSpot. A dashboard cannot repair missing definitions; it can only expose them.
            </p>

            <h2>10. Plan cutover and rollback together</h2>
            <p>
              Record the source freeze, final export owner, go-live authority, form and integration change order, inbound-lead protection, validation window, rollback trigger and owner, issue log, and the conditions for changing Salesforce access. Do not disable the source until retention and acceptance conditions are met.
            </p>

            <h2>Migration acceptance checklist</h2>
          </div>

          <div className="my-8 grid gap-3 md:grid-cols-2">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-slate-200 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-700" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-slate-950 prose-a:text-indigo-700">
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
            <h2 className="text-2xl font-bold">Scope the migration before changing production</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-200">
              Emergent Logic can help Canadian and US businesses assess whether to migrate, coexist, or repair; map the data and automation; and define test, cutover, rollback, and handoff controls.
            </p>
            <p className="mt-3 max-w-3xl leading-7 text-slate-200">
              Before selecting outside help, use the <Link href="/crm-implementation-method" className="font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white">CRM implementation partner evaluation framework</Link> to compare delivery boundaries, data controls, testing, change control, and handoff.
            </p>
            <Link href="/contact#booking" className="mt-6 inline-flex">
              <Button size="lg" className="bg-[#4F46E5] text-white hover:bg-[#4338CA]">
                Scope a controlled CRM migration <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-950">Related implementation resources</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                ['/services/crm-implementation', 'CRM implementation services', 'Scope data, process, permissions, integrations, testing, adoption, and handoff.'],
                ['/services/crm-relaunch', 'CRM relaunch services', 'Repair an underused or unreliable CRM before assuming replacement is necessary.'],
                ['/blog/hubspot-salesforce-sync-cleanup', 'HubSpot and Salesforce sync cleanup', 'Find the lifecycle, ownership, duplicate, source, and workflow rules that break coexistence.'],
              ].map(([href, title, detail]) => (
                <Link key={href} href={href} className="border border-slate-200 bg-slate-50 p-5 hover:border-indigo-300">
                  <h3 className="font-bold text-indigo-800">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10 border-t border-slate-200 pt-8 text-sm leading-6 text-slate-600">
            <h2 className="font-bold text-slate-950">Primary platform references</h2>
            <ul className="mt-3 space-y-2">
              <li><a className="text-indigo-700 hover:underline" href="https://help.salesforce.com/s/articleView?id=xcloud.admin_exportdata.htm">Salesforce data export guidance</a></li>
              <li><a className="text-indigo-700 hover:underline" href="https://help.salesforce.com/s/articleView?id=sf.data_loader_about.htm">Salesforce Data Loader guidance</a></li>
              <li><a className="text-indigo-700 hover:underline" href="https://knowledge.hubspot.com/salesforce/install-the-hubspot-salesforce-integration">HubSpot Salesforce integration guidance</a></li>
              <li><a className="text-indigo-700 hover:underline" href="https://knowledge.hubspot.com/workflows/create-workflows">HubSpot workflow guidance</a></li>
            </ul>
          </section>
        </div>
      </article>

      <Footer />
      <CookieConsent />
    </main>
  );
}
