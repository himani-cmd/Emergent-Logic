import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Link2, Database, Phone, Mail, Calendar, FileText, Globe, Zap, RefreshCw, Clock, DollarSign, Check, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'CRM Integration Services Canada | HubSpot, Salesforce & Zoho Connectors',
  description: 'Connect your CRM to your accounting software, phone system, website, email, and marketing tools. Native integrations, Zapier, Make, and custom API connections. From $500.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/crm-integration' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Integration | Emergent Logic',
    description: 'CRM-first integrations: connect HubSpot, Salesforce, or Zoho to the rest of your stack so data flows cleanly between systems.',
    url: 'https://www.emergent-logic.ca/services/crm-integration',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function CRMIntegration() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-pink-900 via-rose-900 to-fuchsia-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-pink-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">CRM Integration</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Connect Your CRM to the Rest of Your Stack
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            Your CRM should not be an island. We connect HubSpot, Salesforce, and Zoho to your accounting software, phone system, website, calendar, email, and marketing tools &mdash; so data flows where it needs to and your team stops copying records between tabs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a Free Strategy Call" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-pink-900 hover:bg-pink-100 font-semibold px-8">
                  Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
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
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-300" /> 1 to 3 week delivery</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-300" /> Fixed pricing from $500</div>
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
            These are the systems we connect most often. If yours is not on this list, we likely still know how to wire it &mdash; ask us during the discovery call.
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
              { title: 'Native Integrations', desc: 'When the CRM has a native connector to the target system, we use it. Native integrations are usually faster, cheaper to maintain, and easier for your team to manage. HubSpot, Salesforce, and Zoho all have strong native marketplaces &mdash; we know which connectors are reliable and which are not.' },
              { title: 'Middleware (Zapier, Make, n8n, Tray)', desc: 'For most SMB use cases, middleware platforms hit the sweet spot of speed, flexibility, and cost. We build production-grade automations with proper error handling, retry logic, and logging &mdash; not the fragile Zaps that break the moment something changes upstream.' },
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
            We have rebuilt enough broken integration stacks to know the patterns.
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
            Three phases. Same methodology we use for every CRM project, applied to integrations.
          </p>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Discovery & Architecture (Week 1)', desc: 'We map the systems involved, the data that should flow between them, the direction of sync, and the source of truth for each field. You get a written architecture document showing exactly how the integration will behave before any code or Zaps are built.' },
              { step: '02', title: 'Build & Test (Week 1-2)', desc: 'We build the integration using the right approach (native, middleware, or custom). Every flow is tested against real records, with edge cases like duplicate handling, error retries, and rollback. Nothing goes live until it has passed against live data.' },
              { step: '03', title: 'Launch & Document (Week 2-3)', desc: 'We launch with monitoring in place. You receive a written runbook covering what each integration does, how to monitor it, and what to do when something breaks. Your team gets a walkthrough so they can self-serve common issues.' },
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

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Timeline and Investment</h2>
          <p className="text-lg text-gray-600 mb-8">
            Fixed pricing per integration. Bundle pricing available when you need several.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <Clock className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1 to 3 Weeks</h3>
              <p className="text-gray-600">A single native or middleware integration usually launches in 5 to 10 business days. Custom API work and multi-system integrations typically run 2 to 3 weeks.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <DollarSign className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">From $500 CAD</h3>
              <p className="text-gray-600">Single native connector setups start at $500. Middleware automations typically range $1,000 to $3,000. Custom API integrations are scoped individually.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Emergent Logic for Integrations</h2>
          <p className="text-lg text-gray-600 mb-8">
            Most agencies treat integrations as glue work. We treat them as part of the CRM build &mdash; because that is what they are.
          </p>
          <div className="space-y-3">
            {[
              'CRM-native thinking: every integration designed around the CRM as the source of truth',
              'Right tool for the job: native, middleware, or custom &mdash; we pick what fits, not what we sell',
              'Production-grade automations with error handling, retries, and logging &mdash; not fragile Zaps',
              'Written architecture and runbook documents handed over with every integration',
              'Multi-platform: HubSpot, Salesforce, Zoho, plus the dozens of systems they connect to',
              'Fixed pricing, no hourly billing, scope confirmed before we start',
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
            {[
              { q: 'Do I need a CRM in place to work with you on integrations?', a: 'Yes. We build integrations as an extension of CRM strategy, not as standalone wiring projects. If your CRM is not implemented or has serious data issues, we will recommend a CRM Implementation or Cleanup first.' },
              { q: 'Should we use native integrations, Zapier, or custom code?', a: 'It depends. Native is best when the connector is reliable and covers your needs. Middleware (Zapier, Make, n8n) is best for most SMB workflows. Custom is best when you have high data volumes, complex transformations, or real-time requirements. We recommend the right approach during discovery, not before.' },
              { q: 'Can you fix integrations someone else built?', a: 'Yes. We audit existing Zaps, native connectors, and custom code, identify what is broken or fragile, and rebuild only what needs rebuilding. We do not start over unless the existing setup is structurally beyond repair.' },
              { q: 'How do you handle errors and sync failures?', a: 'Every integration we build includes error handling, retry logic where appropriate, and logging. When a sync fails, the right person gets notified, and the runbook tells them what to check. Sync failures should never be silent.' },
              { q: 'Do you provide ongoing support?', a: 'Two weeks of post-launch support is included. After that, you can either run the integrations yourself with the runbook we leave behind, or engage us monthly for ongoing monitoring, updates, and new connections.' },
              { q: 'What CRMs and tools do you support?', a: 'HubSpot, Salesforce, and Zoho are our primary CRMs. We work with most major SaaS tools through native connectors, Zapier, Make, n8n, or REST APIs. If you have a system we have not integrated before, we will tell you on the discovery call rather than guess.' },
              { q: 'Will the integrations break when CRM platforms update their APIs?', a: 'Native and well-built middleware integrations generally survive vendor updates with minor adjustments. Custom integrations may need maintenance when an API version is deprecated. We document API versions and dependencies in the runbook so you know what to watch for.' },
            ].map((item, i) => (
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
            Book a free 30-minute strategy call. We will look at your current stack, identify the integration gaps, and tell you exactly what it would take to close them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTA ctaName="Book a Free Strategy Call - Integration Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-pink-900 hover:bg-pink-100 font-semibold px-8">
                  Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/ai-crm-audit">
              <Button size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8">
                Try Our AI CRM Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
