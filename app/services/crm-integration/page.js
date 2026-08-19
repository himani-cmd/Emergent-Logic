import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Link2, Database, Phone, Mail, Calendar, FileText, Globe, Zap, RefreshCw, Clock, DollarSign, Check, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'CRM Integration Services | Zapier & Make',
  description: 'CRM integration services for HubSpot, Salesforce, and Zoho using native connectors, Zapier, Make, n8n, webhooks, and APIs.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/crm-integration' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Integration | Emergent Logic',
    description: 'CRM-first integrations: connect HubSpot, Salesforce, or Zoho to the rest of your stack so data flows cleanly between systems.',
    url: 'https://www.emergent-logic.ca/services/crm-integration',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: 'Do I need a CRM in place before an integration project?', a: 'The integration needs a defined CRM or system of record, usable data, and clear ownership rules. If those foundations are not ready, the first scope may focus on CRM implementation or cleanup.' },
  { q: 'Should we use a native integration, Zapier, Make, n8n, or custom code?', a: 'The choice depends on connector coverage, data volume, transformation logic, latency, monitoring, security, and internal support capacity. Technical discovery is used to confirm the smallest maintainable approach that meets the requirement.' },
  { q: 'Can you review an existing CRM integration?', a: 'Yes. A review can inventory current connectors, triggers, field mappings, credentials, failure paths, duplicate controls, and documentation before a repair or replacement is proposed.' },
  { q: 'How are errors and sync failures handled?', a: 'The agreed design can include validation, retries, logging, alerts, exception ownership, and a recovery runbook. The exact controls depend on the platform and the operational impact of a failed sync.' },
  { q: 'What CRMs and tools can be integrated?', a: 'Work can involve HubSpot, Salesforce, Zoho, supported native connectors, Zapier, Make, n8n, webhooks, or REST APIs. Exact platform and connector fit is confirmed during discovery rather than assumed.' },
  { q: 'Is ongoing monitoring included?', a: 'Monitoring and support are defined in the written scope. The proposal states the included stabilization period, ownership after handoff, and any optional ongoing support before work begins.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/services/crm-integration#service',
      name: 'CRM Integration Services',
      serviceType: 'CRM integration architecture, implementation, testing, error handling, and documented handoff',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/services/crm-integration',
      areaServed: { '@type': 'Country', name: 'Canada' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/services/crm-integration#faq',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function CRMIntegration() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-pink-900 via-rose-900 to-fuchsia-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-pink-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">CRM Integration</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            CRM Integration Services for a Connected Operating Stack
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            Your CRM should not be an island. We connect HubSpot, Salesforce, and Zoho to your accounting software, phone system, website, calendar, email, and marketing tools &mdash; so data flows where it needs to and your team stops copying records between tabs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a CRM Consultation" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-pink-900 hover:bg-pink-100 font-semibold px-8">
                  Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/ai-crm-audit">
              <Button size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8">
                Try Our AI CRM Audit
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-300" /> Scope-based delivery plan</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-300" /> Written proposal after discovery</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-300" /> Native, Zapier, Make, or custom API</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-300" /> Documentation included</div>
          </div>
        </div>
      </section>

      {/* CRM-first callout */}
      <section className="py-12 bg-pink-50 border-b border-pink-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4">
            <Database className="w-8 h-8 text-pink-700 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-pink-900 mb-2">Integrations are only as good as the CRM behind them.</h2>
              <p className="text-pink-900/80">
                If your CRM data is messy, your integrations will just spread that mess to other systems faster. We build integrations on top of properly configured CRMs &mdash; if yours needs work first, we will say so and recommend a <Link href="/services/crm-cleanup" className="underline font-medium">CRM Cleanup</Link> or <Link href="/services/crm-implementation" className="underline font-medium">CRM Implementation</Link> before we wire anything together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is CRM Integration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What CRM Integration Actually Means</h2>
          <p className="text-lg text-gray-600 mb-4">
            CRM integration is the work of getting your CRM to talk to every other system your business runs on. Your accounting software, your phone system, your scheduling tools, your email, your marketing platforms, your customer-facing website. Done well, you and your team stop noticing the seams &mdash; data shows up where it should, automatically.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Done poorly, integrations create more work than they save. Records duplicate across systems. Fields map incorrectly. Updates do not sync in the right direction. Reps lose trust in the data and start keeping personal spreadsheets again. The integration becomes the new bottleneck.
          </p>
          <p className="text-lg text-gray-600">
            We build integrations the boring way: clear data flows, documented field mapping, controlled error handling, and a written runbook your team can use when something breaks at 4 PM on a Friday. That is what makes the difference between a connected stack and a Zapier graveyard.
          </p>
        </div>
      </section>

      {/* Common Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Integrations We Build</h2>
          <p className="text-lg text-gray-600 mb-8">
            These are representative integration categories. Exact connector, API, security, and licensing fit is confirmed during discovery.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: FileText, title: 'Accounting & Invoicing', desc: 'QuickBooks, Xero, Sage, FreshBooks, and Wave. Sync customers, invoices, and payment status into the CRM so sales sees what finance sees and forecasts match billing reality.' },
              { icon: Phone, title: 'Phone & VoIP Systems', desc: 'Aircall, JustCall, RingCentral, Dialpad, and 8x8. Click-to-dial, automatic call logging, recording links on contact records, and call disposition workflows.' },
              { icon: Calendar, title: 'Calendar & Scheduling', desc: 'Google Calendar, Outlook, Calendly, HubSpot Meetings, and Chili Piper. Two-way sync, automated meeting prep, and CRM activity logging on every booked call.' },
              { icon: Mail, title: 'Email & Productivity', desc: 'Gmail, Outlook 365, Slack, and Microsoft Teams. Email tracking, send-from-CRM workflows, internal notifications, and shared inbox visibility for sales teams.' },
              { icon: Globe, title: 'Website & Forms', desc: 'WordPress, Webflow, Next.js, Shopify, and HubSpot CMS. Form submissions, lead source tracking, UTM capture, and identity resolution against existing CRM records.' },
              { icon: Zap, title: 'Marketing & Ads', desc: 'Mailchimp, ActiveCampaign, Klaviyo, Google Ads, Facebook Ads, and LinkedIn Ads. Audience sync, conversion event tracking, and closed-loop attribution back to revenue.' },
              { icon: RefreshCw, title: 'Operations & Data', desc: 'Airtable, Monday.com, Notion, Google Sheets, and your data warehouse. Two-way sync where appropriate, scheduled exports, and reporting pipelines.' },
              { icon: Link2, title: 'Custom & Internal Systems', desc: 'Your in-house apps, partner portals, ERPs, or industry-specific software. We build via REST APIs, webhooks, and middleware platforms when there is no native connector.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <item.icon className="w-8 h-8 text-pink-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Three Ways We Build Integrations</h2>
          <p className="text-lg text-gray-600 mb-8">
            We pick the right tool for the job. Cheaper is not always better, and custom is not always the answer.
          </p>
          <div className="space-y-6">
            {[
              { title: 'Native Integrations', desc: 'A native connector can be appropriate when it covers the required objects, fields, sync direction, error visibility, and access controls. Connector limits and ownership are reviewed before selection.' },
              { title: 'Middleware (Zapier, Make, n8n, Tray)', desc: 'Middleware can support multi-step workflows and transformations without a custom application. The design still needs validation, duplicate controls, retries, logging, alerts, and a named owner.' },
              { title: 'Custom API Integrations', desc: 'When neither native nor middleware fits &mdash; usually because of complex business logic, high data volume, or real-time requirements &mdash; we build custom integrations against the CRM API directly. These are scoped carefully and documented so they survive team changes.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Where Integrations Go Wrong</h2>
          <p className="text-lg text-gray-600 mb-8">
            Broken integration stacks tend to share a few patterns: unclear ownership, inconsistent identifiers, conflicting updates, and missing exception handling.
          </p>
          <div className="space-y-4">
            {[
              { title: 'No source-of-truth decision', desc: 'When two systems both think they own the same record, you get duplicate updates and circular sync conflicts. Every integration needs an explicit answer to: which system is authoritative for this field?' },
              { title: 'Mapping too many fields', desc: 'Just because a field exists in both systems does not mean it should sync. We map the minimum set of fields that serve a real workflow and leave the rest alone. Less syncing means fewer errors.' },
              { title: 'No error handling', desc: 'When a sync fails, what happens? In bad setups: silently nothing. In our setups: a logged error, a notification to the right person, and a clear recovery path. Sync failures should be visible, not invisible.' },
              { title: 'No documentation', desc: 'Six months later, nobody remembers why a Zap was built or what triggers it. We hand over a written architecture document with every integration so the next admin can pick up where we left off.' },
              { title: 'Integration without process', desc: 'Connecting two systems is technical work, but knowing what should sync and when is operational work. We always start with the workflow, not the wire.' },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 mb-8">
            Three controlled phases, with timing confirmed after the systems and dependencies are reviewed.
          </p>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Discovery & Architecture', desc: 'Map the systems, required data flow, sync direction, system of record, dependencies, access requirements, and exception ownership before selecting the implementation path.' },
              { step: '02', title: 'Build & Test', desc: 'Configure the approved native, middleware, or custom path and test representative records, field mappings, duplicate handling, retries, alerts, permissions, and recovery steps.' },
              { step: '03', title: 'Release & Document', desc: 'Release only after the agreed acceptance checks pass. Document the integration, monitoring route, known limits, recovery procedure, and ownership after handoff.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-white">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scope and Delivery Plan</h2>
          <p className="text-lg text-gray-600 mb-8">
            The plan is based on the systems involved, field mapping, authentication, failure handling, testing, and ownership requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <Clock className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Timing After Technical Review</h3>
              <p className="text-gray-600">The delivery plan is confirmed after connector limits, API access, data volume, retries, monitoring, and acceptance checks are understood.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <DollarSign className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Written Commercial Proposal</h3>
              <p className="text-gray-600">The proposal confirms the scope, exclusions, dependencies, approval points, commercial terms, and change-control process before work begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Emergent Logic for Integrations</h2>
          <p className="text-lg text-gray-600 mb-8">
            We treat integrations as part of the CRM operating design, with field mapping, error handling, ownership, and runbook requirements included in the scope.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            U.S. teams can review the broader <Link href="/services/remote-crm-implementation" className="font-medium text-pink-700 underline underline-offset-4 hover:text-pink-900">remote CRM implementation and integration</Link> delivery path, including lead routing, migration controls, validation, and documented handoff from Canada.
          </p>
          <div className="space-y-3">
            {[
              'CRM-native thinking: every integration designed around the CRM as the source of truth',
              'Right tool for the job: native, middleware, or custom &mdash; we pick what fits, not what we sell',
              'Error handling, retries, logging, and alerting defined according to operational risk',
              'Architecture and runbook deliverables defined in the written scope',
              'Platform fit confirmed across HubSpot, Salesforce, Zoho, and supported connected systems',
              'Scope and commercial terms confirmed before work starts',
              'Based in Surrey, BC — serving Greater Vancouver and businesses across Canada',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Reading</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/marketing-automation-needs-crm-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Why Marketing Automation Fails Without Cleanup First</p>
              <p className="text-gray-600 text-sm">How broken source data and inconsistent fields sink even well-built integrations.</p>
            </Link>
            <Link href="/blog/crm-consultant-vs-implementation-partner-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Consultant vs Implementation Partner</p>
              <p className="text-gray-600 text-sm">When you need strategy, when you need execution, and when you need both.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services and Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/crm-implementation" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Implementation</p>
              <p className="text-gray-600 text-sm">The system every integration should feed</p>
            </Link>
            <Link href="/services/crm-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Cleanup</p>
              <p className="text-gray-600 text-sm">Fix data issues before integrating</p>
            </Link>
            <Link href="/services/marketing-automation" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Marketing Automation</p>
              <p className="text-gray-600 text-sm">Automation built on a connected CRM</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-rose-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Your Stack Working Together</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a 30-minute consultation to review the systems involved, the operating problem, and the information needed to confirm a responsible integration scope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTA ctaName="Book a CRM Consultation - Integration Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-pink-900 hover:bg-pink-100 font-semibold px-8">
                  Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/ai-crm-audit">
              <Button size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8">
                Try Our AI CRM Audit
              </Button>
            </Link>
          </div>
          <p className="text-white/60 text-sm mt-6">Prefer email? <Link href="/contact" className="underline hover:text-white">Send us a message</Link>. Requests are reviewed on business days.</p>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
