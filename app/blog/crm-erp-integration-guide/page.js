import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Clock, Link2 } from 'lucide-react';

const url = 'https://www.emergent-logic.ca/blog/crm-erp-integration-guide';
const articleTitle = 'CRM ERP Integration: A Practical Guide for Manufacturers and Distributors';
const articleDescription = 'A plain-English guide to CRM ERP integration for manufacturers and distributors: what to sync, native connectors vs middleware, and a step-by-step plan.';
const publishedDate = '2026-10-22';

export const metadata = {
  title: 'CRM ERP Integration: A Practical Guide for Manufacturers',
  description: articleDescription,
  alternates: { canonical: url },
  openGraph: {
    title: 'CRM ERP Integration: A Practical Guide for Manufacturers | Emergent Logic',
    description: articleDescription,
    url,
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM ERP Integration: A Practical Guide for Manufacturers',
    description: articleDescription,
    images: ['https://www.emergent-logic.ca/og-image.png'],
  },
};

const faqs = [
  ['What are the best CRM ERP integration solutions for a small manufacturer?', "There's no single best tool. Start with the native connector for your two systems; if it covers your must-have records, it's usually the simplest to run. Add middleware only for gaps."],
  ['How does a Zoho CRM ERP integration usually work?', 'If you use Zoho Books, the Zoho-to-Zoho integration covers customers and items, with transactions handled through the Zoho Finance module. For other ERPs, middleware or the APIs are the usual route.'],
  ['Is a Salesforce CRM ERP integration different?', 'The planning steps are the same. Salesforce has a large ecosystem of connectors and middleware options, so the decision is mostly about which route fits your ERP and budget.'],
  ['How long does an integration take?', 'It depends on the number of objects, data quality and testing. Cleanup and testing often take longer than the connection itself.'],
];

const jsonLdFaqs = [
  [faqs[0][0], "There's no single best tool. Start with the native connector for your two systems; add middleware only for gaps."],
  [faqs[1][0], 'With Zoho Books, the Zoho-to-Zoho integration covers customers and items, with transactions handled through the Zoho Finance module. For other ERPs, middleware or the APIs are the usual route.'],
  [faqs[2][0], 'The planning steps are the same. The decision is mostly about which connector or middleware route fits your ERP and budget.'],
  [faqs[3][0], faqs[3][1]],
];

const sources = [
  ['HubSpot Knowledge Base, "Use HubSpot\'s integration with NetSuite", updated 2026-03-18', 'https://knowledge.hubspot.com/integrations/use-hubspots-integration-with-netsuite'],
  ['Zoho Books Help, "Zoho CRM integration" (read 2026-10-12)', 'https://www.zoho.com/books/help/integrations/crm-integration.html'],
  ['Odoo 18 documentation, CRM (read 2026-10-12)', 'https://www.odoo.com/documentation/18.0/applications/sales/crm.html'],
  ['Celigo documentation, Salesforce – NetSuite integration app (read 2026-10-12)', 'https://docs.celigo.com/hc/en-us/sections/29936826650267-Salesforce-NetSuite-IO'],
];

const relatedPosts = [
  { title: 'CRM Integration Services', href: '/services/crm-integration' },
  { title: 'CRM Integration Platform Selection Workbook', href: '/resources/crm-integration-platform-selection-workbook' },
  { title: 'Excel-to-CRM Migration Checklist for Repeat-Order Businesses', href: '/blog/excel-to-crm-migration-repeat-order-businesses' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: articleTitle,
      description: 'What to sync between a CRM and an ERP, native connectors vs middleware, and a step-by-step integration plan.',
      datePublished: publishedDate,
      dateModified: publishedDate,
      inLanguage: 'en-CA',
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: 'Emergent Logic Consulting', url: 'https://www.emergent-logic.ca/' },
      publisher: { '@type': 'Organization', name: 'Emergent Logic Consulting', url: 'https://www.emergent-logic.ca/' },
      about: ['CRM ERP integration', 'Manufacturing CRM', 'Distribution CRM'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: jsonLdFaqs.map(([name, text]) => ({
        '@type': 'Question',
        name,
        acceptedAnswer: { '@type': 'Answer', text },
      })),
    },
  ],
};

export default function CrmErpIntegrationGuide() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'CRM ERP Integration Guide', href: '/blog/crm-erp-integration-guide' },
            ]} />

            <Badge className="mb-4 bg-cyan-100 text-cyan-800 border-cyan-200">CRM Integration</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{articleTitle}</h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 flex-wrap">
              <span>By Emergent Logic</span>
              <span>Updated October 22, 2026</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 7 min read</span>
            </div>

            <ShareButtons url={url} title={articleTitle} />

            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                <strong>Quick answer:</strong> CRM ERP integration connects the system your sales team uses (the CRM) with the system that runs orders, inventory and invoicing (the ERP), so customer, product and order data stays in step without retyping. Start by deciding which system owns each record, sync only the fields people actually use, and pick the simplest connection that works: a native connector, a middleware tool, or a custom build.
              </p>

              <p>
                For manufacturers and distributors, a CRM ERP integration is often the difference between a CRM people trust and one they quietly ignore. If you&apos;re planning <Link href="/industries/manufacturing-distribution" className="text-cyan-700 hover:underline">CRM for manufacturers and distributors</Link> (see also our <Link href="/services/crm-implementation" className="text-cyan-700 hover:underline">CRM implementation service</Link>), the ERP connection should be part of the plan from day one, not an afterthought.
              </p>

              <h2>What is CRM ERP integration?</h2>
              <p>Your CRM (for example HubSpot, Salesforce, Zoho CRM, Odoo or GoHighLevel) tracks leads, accounts, deals and follow-up. Your ERP or accounting system (for example NetSuite, Zoho Books, Odoo or another platform) holds the commercial truth: price lists, stock, sales orders, invoices and payment status.</p>
              <p>Integration means the two exchange data automatically. A rep can see open orders and overdue invoices without asking accounting; a won deal can create a customer and sales order in the ERP; new products and prices flow back to the CRM so quotes are accurate.</p>

              <h2>Why do manufacturers and distributors need it?</h2>
              <p>The common symptoms are familiar:</p>
              <ul>
                <li>Reps keep their own spreadsheets of customers and reorder dates because the CRM doesn&apos;t show order history.</li>
                <li>The same customer exists three times with different spellings across systems.</li>
                <li>Quotes go out with old prices because the product list in the CRM was last updated months ago.</li>
                <li>Nobody knows which dealer or rep a reorder came from.</li>
              </ul>
              <p>None of these are software problems alone. They come from two systems that each hold half the story. If you&apos;re still moving from spreadsheets, our guide to <Link href="/blog/excel-to-crm-migration-repeat-order-businesses" className="text-cyan-700 hover:underline">Excel-to-CRM migration for repeat-order businesses</Link> covers that first step.</p>

              <h2>Which data should sync between a CRM and an ERP?</h2>
              <p>Decide ownership first: for each record type, one system is the source of truth and the other receives updates.</p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr><th>Record</th><th>Usual owner</th><th>Typical direction</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Leads and deals / opportunities</td><td>CRM</td><td>CRM only, or to ERP when won</td></tr>
                    <tr><td>Customers / accounts and contacts</td><td>Shared: created in CRM, financial fields in ERP</td><td>Two-way, with clear field rules</td></tr>
                    <tr><td>Products, price lists, stock</td><td>ERP</td><td>ERP → CRM</td></tr>
                    <tr><td>Quotes and sales orders</td><td>Depends on where quoting happens</td><td>Usually CRM → ERP on approval</td></tr>
                    <tr><td>Invoices and payment status</td><td>ERP</td><td>ERP → CRM (read-only)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Keep the first version small. Syncing every field &quot;just in case&quot; creates more conflicts, not more value.</p>

              <h2>What are the CRM ERP integration options?</h2>
              <p>There are three broad routes, and the right one depends on your systems, volume and how much custom logic you need.</p>
              <p><strong>1. Native connectors from the vendors.</strong> Some pairings have a built-in or vendor-published integration. HubSpot&apos;s NetSuite integration, for example, can sync contacts, companies, deals/opportunities, products, orders, invoices and tickets one-way or two-way, and is available on all HubSpot tiers; custom field mappings need a Data Hub subscription (HubSpot Knowledge Base, updated March 18, 2026). Zoho CRM and Zoho Books sync accounts, contacts and items, with quotes, sales orders and invoices handled through CRM&apos;s Zoho Finance module (Zoho Books Help). In Odoo, CRM and Sales sit in the same database, so an opportunity can become a quotation without a separate integration (Odoo documentation).</p>
              <p><strong>2. Middleware (integration platforms).</strong> Tools such as Zapier, Make, Celigo and Boomi sit between systems and run the sync logic. Celigo, for example, publishes a Salesforce–NetSuite integration app covering customers, contacts, items, opportunities and orders, and financial data (Celigo documentation). Middleware suits teams that need rules the native connector doesn&apos;t support, or connections between more than two systems.</p>
              <p><strong>3. Custom integration through the APIs.</strong> Best when volumes are high or the logic is unusual. It gives full control but needs ongoing maintenance and documentation.</p>
              <p>The <Link href="/resources/crm-integration-platform-selection-workbook" className="text-cyan-700 hover:underline">CRM integration platform selection workbook</Link> helps you compare these routes against your own requirements.</p>

              <h2>How do I plan a CRM ERP integration, step by step?</h2>
              <ol>
                <li><strong>Map the process, not the software.</strong> Follow one order from first enquiry to paid invoice and note where data is retyped.</li>
                <li><strong>Name an owner per field.</strong> For example, &quot;credit terms: ERP owns, CRM shows read-only.&quot;</li>
                <li><strong>Clean before you connect.</strong> Merge duplicate customers and agree on a matching key (account number, email domain or ERP customer ID).</li>
                <li><strong>Choose the route.</strong> Check the native connector first; move to middleware or custom only for real gaps.</li>
                <li><strong>Build in a sandbox and test with real scenarios:</strong> a new customer, a price change, a cancelled order, a partial shipment.</li>
                <li><strong>Set up error alerts.</strong> Someone must hear about failed syncs the same day.</li>
                <li><strong>Document it.</strong> Your team should know what syncs, when, and who to call when it doesn&apos;t.</li>
              </ol>
              <p>Duplicate handling deserves extra care. In one of our own builds, a Zapier flow sent partnership forms into Salesforce, checked Leads and Contacts for duplicates first, and logged repeat submissions as Tasks rather than creating new records. The same principle applies to ERP syncs: match first, create second.</p>

              <h2>Frequently asked questions</h2>
              {faqs.map(([question, answer]) => (
                <div key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}

              <h2>Get a second opinion before you connect</h2>
              <p>
                Emergent Logic designs and builds CRM ERP integrations across HubSpot, Salesforce, Zoho CRM, Odoo, GoHighLevel and other CRMs, using native connectors, Zapier, Make, Celigo or Boomi. See our <Link href="/services/crm-integration" className="text-cyan-700 hover:underline">CRM integration service</Link>, or start with a <Link href="/lead-follow-up-audit" className="text-cyan-700 hover:underline">free lead follow-up audit</Link>. Scope and price are confirmed in a written quote after a free 30-minute call.
              </p>

              <h3>Sources (checked October 12, 2026)</h3>
              <ul>
                {sources.map(([label, href]) => (
                  <li key={href}>{label}: <a href={href} target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline break-all">{href}</a></li>
                ))}
              </ul>

              <p><em>All product names and trademarks are the property of their respective owners. Emergent Logic is not affiliated with, endorsed or sponsored by them.</em></p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-cyan-700 to-blue-800 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Planning to connect your CRM and ERP?</h3>
              <p className="text-white/80 mb-6">
                Talk through which system owns which record and which connection route fits, before you build anything.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-100">
                  Talk to Emergent Logic <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Related Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedPosts.map((post) => (
                  <Link key={post.href} href={post.href}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Link2 className="w-4 h-4 text-cyan-600" />
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <CookieConsent />
    </main>
  );
}
