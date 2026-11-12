import PlatformServicePage, { buildPlatformJsonLd } from '@/components/PlatformServicePage';

const canonical = 'https://www.emergent-logic.ca/services/odoo-implementation';
const title = 'Odoo CRM Implementation & Integration | Emergent Logic';
const description = 'Odoo CRM implementation for small and medium businesses in Canada and the US: pipelines, website forms, follow-up activities, quotations and clean data.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonical, type: 'website', images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }] },
};

const faqs = [
  ['Are you an Odoo partner?', "No. Emergent Logic is an independent CRM consultancy and is not an Odoo partner. We configure and connect the CRM and sales side of Odoo for clients. Your Odoo subscription, hosting and Odoo's own support stay with Odoo or your Odoo partner."],
  ['Do you set up Odoo accounting or manufacturing apps?', 'Our focus is the CRM and sales side and how it hands off to the rest of Odoo. For other apps we work alongside the people who own them.'],
  ['Can Odoo connect to our website and other tools?', "Usually, through Odoo's website forms, its built-in apps, or middleware. We confirm what your edition and hosting support first."],
  ['Do you work outside BC?', "Yes. We're based in Surrey, BC and work remotely across Canada and the US."],
  ['What does it cost?', 'It depends on scope. The fit assessment ends with a written plan and quote.'],
];

const areas = [
  { title: 'Pipelines, stages and teams', text: ['We set up the Odoo CRM pipeline so each stage means one thing to everyone: what has to be true for an opportunity to move forward, and who is responsible at that point. Where you have more than one sales team, such as direct sales and dealer or distributor sales, each team gets a pipeline view and ownership rules that fit how it works.'] },
  { title: 'Website forms and lead capture', text: ['Odoo website forms can create leads or opportunities directly in the CRM. We map the form fields, record where each enquiry came from, and agree how repeat enquiries from the same company are handled. Enquiries from other sources, such as email or trade shows, get the same treatment so the pipeline shows every lead in one place.'] },
  { title: 'Lead assignment and scheduled activities', text: ['A lead without an owner tends to go cold. We set up assignment so new leads land with the right salesperson or team, and use scheduled activities (calls, emails, meetings and to-dos with due dates) so the next step is always visible. Overdue activities show up for the owner and their manager.'] },
  { title: 'Automation rules for follow-up', text: ['Automation rules can update fields, assign records, schedule activities or send notifications when something changes, such as a stage moving or a lead sitting untouched for too long. We keep the rules few and well named, so your team can see why something happened and switch a rule off safely if the process changes.'] },
  { title: 'Quotations through the Sales app', text: ['Because Odoo CRM and the Sales app share the same database, an opportunity can become a quotation without re-typing customer details. We configure that hand-off, the products and terms your team quotes, and how a confirmed quotation updates the opportunity, so pipeline value and quoted value line up.'] },
  { title: 'Reporting', text: ['We set up the reports your managers will use week to week: new leads by source, pipeline by stage and salesperson, won and lost reasons, and overdue activities. Reports are agreed before the build, so the stages, fields and lost reasons behind them are captured properly from the start.'] },
  { title: 'Connecting Odoo to other tools', text: ['Odoo often needs to talk to your email, calendar, marketing tools or another system your business already relies on. We use built-in apps where they fit and middleware or an API connection where they do not, with clear rules for which system owns each piece of data. See our ', ['CRM integration service', '/services/crm-integration'], ' for how we plan and test connections.'] },
];

const fit = {
  heading: 'Is Odoo the right fit?',
  intro: ["There is no wrong answer here. Odoo is a strong choice for some businesses and a heavy one for others, and we would rather say so up front."],
  good: [
    ['Companies that want CRM, sales, inventory and accounting in one system, so a quote, an order and a stock level are never in separate places.'],
    ['Manufacturers and distributors, where quotes, reorders and stock questions come up in nearly every sales conversation. See our page on ', ['CRM for manufacturers and distributors', '/industries/manufacturing-distribution'], '.'],
    ['Teams already running Odoo for operations that now want the sales side to work as well as the back office.'],
  ],
  alt: [
    ['Teams that only need a sales CRM, with no plans for inventory or accounting in the same system, may find a dedicated CRM simpler.'],
    ['Marketing-heavy teams that depend on email campaigns, landing pages and lead nurturing are often better served by a marketing-led CRM.'],
  ],
  outro: ['Not sure which way to go? Our ', ['Salesforce vs HubSpot vs Zoho comparison', '/blog/salesforce-vs-hubspot-vs-zoho-canada-2026'], ' covers the dedicated-CRM side of the decision, and a free call can cover the rest.'],
};

const migration = {
  heading: 'Moving to Odoo CRM from spreadsheets or another CRM',
  paragraphs: [
    ['Most Odoo CRM projects start with customer and sales data spread across spreadsheets, inboxes and sometimes an older CRM. Before anything is imported, we agree what to keep: which companies and contacts are current, which open opportunities are real, and what history the team actually needs.'],
    ['We map the old columns to Odoo fields, standardise values, remove duplicates and run a test import. Your team spot-checks the results, then we run the final import and reconcile record counts so nothing goes missing. Where the same customers already exist in Odoo for invoicing or inventory, we match records rather than creating duplicates. Our guide to ', ['moving from Excel to a CRM for repeat-order businesses', '/blog/excel-to-crm-migration-repeat-order-businesses'], ' covers the same steps in more detail.'],
  ],
};

const method = [
  ['Fit assessment', 'We review how leads arrive, how your team sells, and how sales hands off to the rest of Odoo. It ends with a written plan and quote.'],
  ['Design', 'We agree pipelines, stages, teams, assignment, activities, automation rules and reports before building.'],
  ['Configure and migrate', 'We build in stages, load test data, then migrate and reconcile your real records.'],
  ['Test the full lead path', 'We submit real test enquiries and check capture, assignment, activities, quotations and reporting from start to finish.'],
  ['Launch and hand over', 'Your team gets role-based training and a short written record of how the setup works and who owns what.'],
];

const related = [
  ['CRM implementation', '/services/crm-implementation'],
  ['CRM integration', '/services/crm-integration'],
  ['CRM for manufacturers and distributors', '/industries/manufacturing-distribution'],
  ['CRM ERP integration guide', '/blog/crm-erp-integration-guide'],
  ['CRM implementation method', '/crm-implementation-method'],
  ['Contact Emergent Logic', '/contact'],
];

const jsonLd = buildPlatformJsonLd({ canonical, name: 'Odoo CRM implementation and integration', serviceType: 'Odoo CRM implementation', description, faqs });

export default function OdooImplementation() {
  return (
    <PlatformServicePage
      jsonLd={jsonLd}
      crumb={{ label: 'Odoo', href: '/services/odoo-implementation' }}
      eyebrow="Odoo CRM setup and integration"
      h1="Odoo CRM implementation and integration"
      quickAnswer="Emergent Logic configures and connects the CRM and sales side of Odoo for small and medium businesses in Canada and the US. We set up pipelines, website forms, lead assignment, scheduled activities, automation rules and quotations so every enquiry has an owner and a next step, then test the whole lead path before launch."
      ctaLabel="Odoo CRM"
      setupHeading="What we can set up in Odoo CRM"
      setupIntro="Every project is scoped to what your team needs. These are the areas we most often configure, clean up or connect."
      areas={areas}
      fit={fit}
      migration={migration}
      method={method}
      faqHeading="Odoo CRM implementation questions"
      faqs={faqs}
      related={related}
    />
  );
}
