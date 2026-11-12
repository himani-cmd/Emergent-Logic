import PlatformServicePage, { buildPlatformJsonLd } from '@/components/PlatformServicePage';

const canonical = 'https://www.emergent-logic.ca/services/zoho-crm-implementation';
const title = 'Zoho CRM Implementation & Consulting | Emergent Logic';
const description = 'Zoho CRM implementation, cleanup and integration for small and medium businesses in Canada and the US: pipelines, web forms, workflows, quotes and reports.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonical, type: 'website', images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }] },
};

const faqs = [
  ['Are you a Zoho partner?', 'No. Emergent Logic is an independent CRM consultancy. We set up, clean up and integrate Zoho CRM for clients. Your Zoho subscription and billing stay directly with Zoho.'],
  ["Can you fix a Zoho CRM that's already set up?", 'Yes. Cleanup of fields, duplicates, workflows and assignment rules is a common starting point.'],
  ['Can Zoho CRM connect to our website forms and other tools?', 'Usually, through Zoho web forms, native integrations, or middleware such as Zapier or Make. We confirm what your edition supports first.'],
  ['Do you work outside BC?', "Yes. We're based in Surrey, BC and work remotely across Canada and the US."],
  ['What does it cost?', 'It depends on scope. The fit assessment ends with a written plan and quote.'],
];

const areas = [
  { title: 'Modules, fields and pipelines', text: ['We shape the core modules for leads, contacts, accounts and deals around how your team actually sells. That means the fields people need (and removing the ones nobody fills in), picklist values that mean the same thing to everyone, and deal stages that match real buying steps. Each stage gets a clear definition so the pipeline report reflects reality instead of guesswork.'] },
  { title: 'Web forms and lead capture', text: ['Zoho web forms can send enquiries from your website straight into the CRM. We map each form field to the right CRM field, record the lead source, and decide how duplicates are handled, so a returning visitor updates an existing record instead of creating a second one. Every form is tested end to end before it goes live.'] },
  { title: 'Assignment rules and follow-up tasks', text: ['Assignment rules decide who owns a new lead: by territory, product line, source or round robin. We pair them with follow-up tasks so every new lead has a named owner and a next step with a due date. Leads that match no rule go to a fallback owner rather than sitting unassigned.'] },
  { title: 'Workflow rules and Blueprint processes', text: ['Workflow rules handle routine actions such as field updates, email alerts and task creation when a record changes. For steps that must happen in a set order, such as qualification before a quote, Blueprint can guide users through each transition and require the right information at each step. We keep automation readable so your team knows why it fires.'] },
  { title: 'Quotes and sales orders', text: ['When your team quotes from the CRM, we set up Quotes and Sales Orders with your products and terms, and connect them to the related deal. That keeps the quote history, the deal value and the customer record in one place, instead of in separate spreadsheets.'] },
  { title: 'Reports and dashboards', text: ['We build the handful of reports your managers will actually open: new leads by source, pipeline by stage and owner, stalled deals, and follow-up tasks that are overdue. Dashboards are agreed up front, so the fields and stages behind them are captured correctly from day one.'] },
  { title: 'Integrations with Zoho apps, Zapier or Make', text: ['Zoho CRM often needs to share data with other Zoho apps, your email and calendar, accounting or an ERP. We use native integrations where they fit and middleware such as Zapier or Make where they do not, with a clear owner for each data flow. See our ', ['CRM integration service', '/services/crm-integration'], ' for how we plan and test connections.'] },
];

const fit = {
  heading: 'Is Zoho CRM the right fit?',
  intro: ["There is no wrong answer here. We would rather help you choose the CRM that suits your team than set up one that doesn't. Here is how we usually think about it."],
  good: [
    ['Cost-conscious teams that want a capable sales CRM without a large subscription bill.'],
    ['Teams already using other Zoho apps, where keeping data in one family of tools reduces re-entry.'],
    ['Businesses with a clear sales process that want structure, assignment and follow-up rather than heavy marketing automation.'],
  ],
  alt: [
    ['Marketing-heavy teams that live in email campaigns, landing pages and lead nurturing often do better with HubSpot.'],
    ['Complex enterprise processes with many teams, approval layers and custom objects are often a better match for Salesforce.'],
  ],
  outro: ['For a side-by-side view, read our ', ['Salesforce vs HubSpot vs Zoho comparison for Canadian businesses', '/blog/salesforce-vs-hubspot-vs-zoho-canada-2026'], '.'],
};

const migration = {
  heading: 'Moving to Zoho CRM from spreadsheets or another CRM',
  paragraphs: [
    ['Most Zoho projects start with data that lives somewhere else: spreadsheets, an inbox, an older CRM or a mix of all three. Moving it is less about the import button and more about deciding what to keep. We map old columns to Zoho fields, standardise values, remove duplicates and agree which history matters before anything is loaded.'],
    ['We run a test import first, check record counts and spot-check records with your team, then run the final import and reconcile the totals. If your business runs on repeat orders, our guide to ', ['moving from Excel to a CRM for repeat-order businesses', '/blog/excel-to-crm-migration-repeat-order-businesses'], ' walks through the same steps in more detail.'],
  ],
};

const method = [
  ['Fit assessment', 'We review how leads arrive, how your team sells and what is already in Zoho (or what you are moving from). It ends with a written plan and quote.'],
  ['Design', 'We agree modules, fields, stages, ownership rules, automation and reports before building, so there are no surprises later.'],
  ['Configure and migrate', 'We build in stages, load test data, then migrate and reconcile your real records.'],
  ['Test the full lead path', 'We submit real test enquiries and check capture, assignment, tasks, alerts and reporting from start to finish.'],
  ['Launch and hand over', 'Your team gets role-based training and a short written record of how the setup works and who owns what.'],
];

const related = [
  ['CRM implementation', '/services/crm-implementation'],
  ['CRM integration', '/services/crm-integration'],
  ['CRM cleanup', '/services/crm-cleanup'],
  ['Salesforce vs HubSpot vs Zoho', '/blog/salesforce-vs-hubspot-vs-zoho-canada-2026'],
  ['CRM implementation method', '/crm-implementation-method'],
  ['Contact Emergent Logic', '/contact'],
];

const jsonLd = buildPlatformJsonLd({ canonical, name: 'Zoho CRM implementation, cleanup and integration', serviceType: 'Zoho CRM implementation', description, faqs });

export default function ZohoCrmImplementation() {
  return (
    <PlatformServicePage
      jsonLd={jsonLd}
      crumb={{ label: 'Zoho CRM', href: '/services/zoho-crm-implementation' }}
      eyebrow="Zoho CRM setup, cleanup and integration"
      h1="Zoho CRM implementation, cleanup and integration"
      quickAnswer="Emergent Logic sets up, cleans up and connects Zoho CRM for small and medium businesses in Canada and the US. We configure modules, pipelines, web forms, assignment rules, workflows, quotes and reports around the way your team sells, then test the whole lead path before launch."
      ctaLabel="Zoho CRM"
      setupHeading="What we can set up in Zoho CRM"
      setupIntro="Every project is scoped to what your team needs. These are the areas we most often configure, clean up or connect."
      areas={areas}
      fit={fit}
      migration={migration}
      method={method}
      faqHeading="Zoho CRM implementation questions"
      faqs={faqs}
      related={related}
    />
  );
}
