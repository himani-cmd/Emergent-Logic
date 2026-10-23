import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { ArrowRight } from 'lucide-react';

const canonical = 'https://www.emergent-logic.ca/industries/manufacturing-distribution';
const description = 'CRM for manufacturers and distributors in Canada and the US: rep and dealer leads, quotes, reorders and ERP sync on HubSpot, Salesforce, Zoho or Odoo.';
export const metadata = {
  title: 'CRM Software for Manufacturing Companies',
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { title: 'CRM Software for Manufacturing Companies | Emergent Logic', description, url: canonical, type: 'website', images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }] },
};

const gaps = [
  ['Leads from reps, dealers and trade shows sit in inboxes', 'An enquiry that arrives by email, a business card or a show-floor scan has no owner until someone forwards it. By then the buyer has often talked to another supplier.'],
  ['Quotes live in email threads and spreadsheets', 'When quotes are attachments, nobody can see which are open, which are stale and which were won. Follow-up depends on whoever remembers to ask.'],
  ['Reorders depend on someone remembering', 'Repeat customers are the core of many manufacturing and distribution businesses. If reorder timing lives in a rep’s head, a quiet account can go unnoticed until it has moved elsewhere.'],
  ['The CRM and the ERP disagree about the customer', 'Sales sees one version of the account and accounting sees another: different names, duplicate records, old price lists. Quotes and invoices then disagree with each other.'],
  ['Field reps update the CRM late, or never', 'If logging a call takes more effort than the call, the CRM falls behind. The fix is usually fewer, better-placed fields and a mobile-friendly routine, not more rules.'],
  ['Nobody can see the pipeline by product line or territory', 'Without consistent product, territory and rep fields, leadership has to ask each person for a number instead of reading a dashboard.'],
];
const setup = [
  ['Pipelines that follow quote → order → reorder', 'Stages that match how you actually sell, including quote follow-up and a reorder stage, with clear entry and exit rules.'],
  ['Accounts with parent companies, locations and distributors', 'A record structure that handles head offices, ship-to locations and the distributors or dealers who sell on your behalf.'],
  ['Lead routing by territory, rep or dealer', 'Rules that send each enquiry to a named owner, with a visible fallback when nothing matches.'],
  ['Reorder and follow-up reminders', 'Tasks and alerts tied to the last order date or quote status, so repeat business is prompted rather than remembered.'],
  ['Trade-show and website leads straight into the CRM', 'Show scans, spreadsheets and website forms land in the CRM with a source value and an owner, instead of waiting in an inbox.'],
  ['CRM ↔ ERP integration', 'Native connectors or middleware (Zapier, Make, Celigo, Boomi) chosen for your systems. See our CRM integration service for how we scope it.'],
  ['Dashboards by product line, territory and rep', 'Reports built on the fields your team actually fills in, so the pipeline can be read by product line, territory or rep.'],
];
const platforms = [
  ['HubSpot', 'Usually a strong choice for marketing-led B2B teams that want a shared inbox and straightforward reporting.'],
  ['Salesforce', 'Usually suits complex territories, large catalogues and custom processes, with more configuration to maintain.'],
  ['Zoho CRM', 'Usually a cost-conscious option, especially for teams that already run other Zoho apps.'],
  ['Odoo', 'Usually suits companies that want CRM, sales, inventory and accounting in one system.'],
  ['GoHighLevel', 'Usually a better fit for appointment- and SMS-led sales than for quote-and-reorder B2B.'],
];
const decisions = [
  ['Which records sync', 'Accounts, contacts, products, price lists, quotes, orders and invoices. Start with the few that people use every day.'],
  ['One-way or two-way', 'Product and price data usually flows from the ERP to the CRM. Customer details may need to flow both ways, with rules for conflicts.'],
  ['Which system owns each field', 'For every shared field, one system is the source of truth and the other displays or receives it.'],
];
const method = [
  ['Fit assessment', 'We look at how enquiries, quotes and reorders move today and tell you plainly what the right next step is.'],
  ['Design', 'Agree the pipeline, record structure, ownership rules and which fields each system owns.'],
  ['Build in stages', 'Configure the CRM and any ERP connection in reviewable steps, keeping testing separate from live data.'],
  ['Test with real scenarios', 'A new customer, a price change, a cancelled order and a repeat order, checked end to end before launch.'],
  ['Hand over', 'Document what was built, train the people who use it and agree who to call when something fails.'],
];
// Add one line per new guide as it goes live: [title, href]
const guides = [
  ['CRM ERP Integration: A Practical Guide for Manufacturers and Distributors', '/blog/crm-erp-integration-guide'],
  ['Excel-to-CRM Migration Checklist for Repeat-Order Businesses', '/blog/excel-to-crm-migration-repeat-order-businesses'],
  ['Why Website Leads Need CRM Routing', '/blog/website-leads-to-crm'],
  ['Speed to Lead: Building a CRM Follow-Up System', '/blog/speed-to-lead-crm-follow-up-system'],
  ['Salesforce vs HubSpot vs Zoho in Canada (2026)', '/blog/salesforce-vs-hubspot-vs-zoho-canada-2026'],
];
const faqs = [
  ['Do you only work with manufacturers?', 'No. We work with small and medium B2B companies in any sector across Canada and the US; manufacturing and distribution is one of our focus areas.'],
  ['Can you connect our CRM to NetSuite or another ERP?', 'Often, yes: through the ERP’s native connector or through middleware such as Celigo, Boomi, Zapier or Make. We check what your ERP edition and the connector actually support during the fit assessment, before anything is built.'],
  ['We run sales from spreadsheets. Is a CRM worth it at our size?', 'Not always. The fit assessment looks at how enquiries, quotes and reorders move today and tells you plainly whether a CRM, a cleaner spreadsheet or a smaller fix is the right next step.'],
  ['Do you work with companies outside BC?', 'Yes. We are based in Surrey, BC and work remotely with teams across Canada and the US.'],
  ['Are you a partner of these software vendors?', 'Emergent Logic is an independent consultancy. We are listed in HubSpot’s Solutions directory, and we don’t claim partner status with any software vendor.'],
  ['How long does a CRM setup take?', 'It depends on the number of teams, data sources and integrations. The fit assessment ends with a written plan and timeline for your situation.'],
  ['What should manufacturers look for in CRM software?', 'Look for accounts that handle parent companies, locations and distributors; pipelines that follow quote, order and reorder; lead routing by territory or rep; and a reliable connection to your ERP. The right choice depends on your process and the systems you already run, which is what a fit assessment checks before anything is built.'],
];
const jsonLd = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'Service', '@id': `${canonical}#service`, name: 'CRM implementation for manufacturers and distributors', serviceType: 'CRM implementation for manufacturers and distributors', url: canonical, provider: { '@id': 'https://www.emergent-logic.ca/#organization' }, areaServed: [{ '@type': 'Country', name: 'Canada' }, { '@type': 'Country', name: 'United States' }] },
  { '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: faqs.map(([q,a])=>({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
] };
const callUrl = 'https://calendly.com/emergent-logic/30min';
function CallCTA({ location }) {
  return <TrackedCTA ctaName={`Manufacturing - Book 30-minute call - ${location}`} destination="calendly"><a href={callUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-md bg-[#4B37C8] px-5 py-3 text-center font-semibold text-white hover:bg-[#38279D]">Book a 30-minute call <ArrowRight className="h-5 w-5 flex-none" /></a></TrackedCTA>;
}
export default function ManufacturingDistribution() {
  return <main className="min-h-screen bg-[#FBFBFF] text-[#101828]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Navbar />
    <section className="bg-[#1E3A5F] pb-16 pt-28 text-white md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="[&_nav]:text-[#DFE3F5] [&_nav_span]:text-white"><Breadcrumbs items={[{label:'Manufacturing & distribution',href:'/industries/manufacturing-distribution'}]} /></div>
        <p className="mt-8 text-sm font-semibold text-[#BFD4FF]">CRM implementation and ERP integration for manufacturers and distributors in Canada and the US</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">CRM for Manufacturers and Distributors</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#E7ECF5]">Manufacturers and distributors lose sales in the gaps between people and systems: rep and dealer leads in inboxes, quotes in spreadsheets, and reorders that depend on memory. Emergent Logic sets up and connects your CRM (HubSpot, Salesforce, Zoho, Odoo or the one you already have) so every enquiry, quote and repeat order has an owner and a next step. We work with manufacturing and distribution teams across Canada and the US.</p>
        <div className="mt-8"><CallCTA location="Hero" /></div>
      </div>
    </section>
    <section className="bg-white py-16"><div className="container mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-bold text-[#1E3A5F]">Where manufacturing and distribution sales get lost</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">{gaps.map(([title,text])=><article key={title} className="min-w-0 border-t-4 border-[#0F766E] bg-white p-6"><h3 className="text-xl font-bold text-[#1E3A5F]">{title}</h3><p className="mt-3 leading-7 text-[#667085]">{text}</p></article>)}</div>
    </div></section>
    <section className="py-16"><div className="container mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-bold text-[#1E3A5F]">What we set up</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">{setup.map(([title,text])=><article key={title} className="min-w-0 border border-[#DFE3F5] bg-white p-6"><h3 className="text-xl font-bold text-[#1E3A5F]">{title}</h3><p className="mt-3 leading-7 text-[#667085]">{text}</p></article>)}</div>
      <p className="mt-6 leading-7 text-[#475467]">Planning an ERP connection? See our <Link href="/services/crm-integration" className="font-semibold text-[#4B37C8] underline">CRM integration service</Link>.</p>
    </div></section>
    <section className="bg-white py-16"><div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-[#1E3A5F]">Which CRM software suits a manufacturing company?</h2>
      <p className="mt-4 leading-8 text-[#667085]">There is no single answer. These are general leanings, not rankings, and the right choice depends on your process, your team and the systems you already run.</p>
      <div className="mt-8 divide-y divide-[#DFE3F5]">{platforms.map(([name,text])=><article key={name} className="py-5"><h3 className="text-xl font-bold text-[#1E3A5F]">{name}</h3><p className="mt-2 leading-7 text-[#667085]">{text}</p></article>)}</div>
      <p className="mt-6 leading-7 text-[#475467]">We recommend the platform that fits your process, including the one you already have. For a side-by-side look, read <Link href="/blog/salesforce-vs-hubspot-vs-zoho-canada-2026" className="font-semibold text-[#4B37C8] underline">Salesforce vs HubSpot vs Zoho in Canada</Link>.</p>
    </div></section>
    <section className="py-16"><div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-[#1E3A5F]">Connecting your CRM to your ERP</h2>
      <p className="mt-4 leading-8 text-[#667085]">A CRM and ERP connection comes down to three decisions, made before anything is built.</p>
      <ol className="mt-6 space-y-4">{decisions.map(([title,text],i)=><li key={title} className="grid min-w-0 grid-cols-[36px_minmax(0,1fr)] gap-4 bg-white p-5"><span className="text-2xl font-bold text-[#4B37C8]">{i+1}</span><div><h3 className="text-xl font-bold text-[#1E3A5F]">{title}</h3><p className="mt-2 leading-7 text-[#667085]">{text}</p></div></li>)}</ol>
      <p className="mt-6 leading-8 text-[#667085]">A native connector usually makes sense when it covers the records you need and your two systems are supported. Middleware makes sense when you need rules the connector does not offer, or more than two systems in the loop. Use the <Link href="/resources/crm-integration-platform-selection-workbook" className="font-semibold text-[#4B37C8] underline">CRM integration platform selection workbook</Link> to compare routes against your own requirements.</p>
    </div></section>
    <section className="bg-white py-16"><div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-[#1E3A5F]">How a project runs</h2>
      <ol className="mt-8 space-y-5">{method.map(([title,text],i)=><li key={title} className="grid min-w-0 grid-cols-[36px_minmax(0,1fr)] gap-4 border border-[#DFE3F5] p-5"><span className="text-2xl font-bold text-[#4B37C8]">{i+1}</span><div><h3 className="text-xl font-bold text-[#1E3A5F]">{title}</h3><p className="mt-2 leading-7 text-[#667085]">{text}</p></div></li>)}</ol>
      <p className="mt-6 leading-7 text-[#475467]">Read the full <Link href="/crm-implementation-method" className="font-semibold text-[#4B37C8] underline">CRM implementation method</Link>.</p>
    </div></section>
    <section className="py-16"><div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-[#1E3A5F]">Guides for manufacturers and distributors</h2>
      <ul className="mt-6 space-y-3">{guides.map(([title,href])=><li key={href}><Link href={href} className="font-semibold text-[#4B37C8] underline">{title}</Link></li>)}</ul>
    </div></section>
    <section className="bg-white py-16"><div className="container mx-auto max-w-4xl px-4"><h2 className="text-3xl font-bold text-[#1E3A5F]">CRM for manufacturers and distributors: questions</h2><div className="mt-8 divide-y divide-[#DFE3F5]">{faqs.map(([q,a])=><article key={q} className="py-6"><h3 className="text-xl font-bold text-[#1E3A5F]">{q}</h3><p className="mt-3 leading-7 text-[#667085]">{a}</p></article>)}</div></div></section>
    <section className="bg-[#1E3A5F] py-16 text-white"><div className="container mx-auto max-w-4xl px-4"><h2 className="text-3xl font-bold">Talk through your sales process</h2><p className="mt-5 text-lg leading-8 text-[#E7ECF5]">Book a short call to walk through how enquiries, quotes and reorders move today, or start with a free review of one website inquiry path.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"><CallCTA location="Final" /><Link href="/lead-follow-up-audit" className="font-semibold text-[#BFD4FF] underline">Free lead follow-up audit</Link></div></div></section>
    <Footer /><CookieConsent />
  </main>;
}
