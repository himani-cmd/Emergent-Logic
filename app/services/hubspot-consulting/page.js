import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Settings, Zap, BarChart3, Mail, Link2, Users, Layers, Clock, DollarSign, Check, X, AlertTriangle, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'HubSpot Consulting Canada',
  description: 'HubSpot consulting for setup, pipelines, workflow automation, reporting, integrations, and cleanup for Canadian businesses.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/hubspot-consulting' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'HubSpot Consulting | Emergent Logic',
    description: 'HubSpot consulting for Canadian businesses. Portal setup, workflows, reporting, integrations — done right in 2 to 4 weeks.',
    url: 'https://www.emergent-logic.ca/services/hubspot-consulting',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function HubSpotConsulting() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-900 via-orange-800 to-amber-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-orange-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">HubSpot Consulting</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            HubSpot Consulting for Canadian Businesses
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            We set up HubSpot the way it should have been set up from day one. Portal configuration, pipeline design, workflow automation, custom reporting, and integrations — delivered by senior CRM consultants in 2 to 4 weeks. Fixed price, no hourly billing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a Free Strategy Call" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-100 font-semibold px-8">
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
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-300" /> 2 to 4 week delivery</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-300" /> Fixed pricing from $1,500</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-300" /> All Hubs (Sales, Marketing, Service)</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-300" /> Free 14-day post-launch support</div>
          </div>
        </div>
      </section>

      {/* The HubSpot Problem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">HubSpot Is Powerful. But Only If It Is Set Up Right.</h2>
          <p className="text-lg text-gray-600 mb-4">
            HubSpot markets itself as an easy-to-use CRM. And it is — for basic contact storage. But the moment you need custom pipelines, multi-stage workflows, lead scoring, email automation, account-based selling, or reporting that goes beyond defaults, HubSpot becomes complex. Fast.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Most businesses sign up for HubSpot, add a few contacts, maybe create a deal or two, and then plateau. The workflows sit empty. The reporting shows vanity metrics. The sales team goes back to spreadsheets because the CRM feels like extra work instead of a tool that helps them sell. The marketing team uses it to send the occasional newsletter and nothing more.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            That is not a HubSpot problem. That is an implementation problem. HubSpot can automate your entire sales and marketing process — if someone configures it to do so. The platform has lead scoring, sequences, workflows, custom objects, predictive analytics, and dozens of integrations. Most teams use a small fraction of what they are paying for.
          </p>
          <p className="text-lg text-gray-600">
            Our HubSpot consulting service is built around one outcome: we turn your portal from a contact database into a revenue system. Whether you have just signed up, you have been on HubSpot for years, or you have inherited a portal someone else built and abandoned, we know how to get it working.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Help</h2>
          <p className="text-lg text-gray-600 mb-8">
            HubSpot is the platform we work with most often. Here is who typically calls us in.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'New HubSpot subscribers', desc: 'You just signed up for HubSpot Sales Hub, Marketing Hub, or Service Hub and want it set up properly. You do not want to figure out the portal yourself or sit through HubSpot Academy for three weeks.' },
              { title: 'HubSpot users stuck at 20% adoption', desc: 'You bought HubSpot a year ago. Your team uses it for contact storage but nothing else. You know there is more value in there but you have not had time to unlock it.' },
              { title: 'Teams migrating to HubSpot', desc: 'You are moving from Salesforce, Pipedrive, Zoho, or spreadsheets to HubSpot. You need clean migration, fresh configuration, and a launch plan that does not disrupt active deals.' },
              { title: 'Inherited portals', desc: 'Someone else built your HubSpot portal — a former employee, a freelancer, an old agency. It is a mess of half-built workflows, abandoned properties, and reports nobody trusts. We rebuild and document.' },
              { title: 'Sales and Marketing alignment', desc: 'Your sales team is in HubSpot. Your marketing team is somewhere else. Lead handoff is broken. We bring everything into one HubSpot portal with clean attribution and shared dashboards.' },
              { title: 'HubSpot + integrations', desc: 'You need HubSpot connected to your accounting software, your phone system, your scheduling tool, your website, or your custom platform. We handle native integrations, Zapier, and custom API work.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our HubSpot Consulting Includes</h2>
          <p className="text-lg text-gray-600 mb-8">
            We cover every aspect of HubSpot — from initial portal setup to advanced automation and reporting. The list below is the standard scope of a full implementation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Settings, title: 'Portal Setup & Onboarding', desc: 'Account configuration, user roles and permissions, team structure, default properties, currency settings, email sending domains, branding, and security. Everything configured properly from day one — including the dozens of small settings most teams never touch.' },
              { icon: Layers, title: 'Pipeline Design', desc: 'Custom deal pipelines with stages that match your actual sales process. Multiple pipelines for different products, services, or sales channels. Win probability, deal stage entry/exit criteria, required fields per stage, and forecasting categories all built in.' },
              { icon: Zap, title: 'Workflow Automation', desc: 'Lead assignment, follow-up sequences, deal stage automation, internal notifications, task creation, lifecycle stage transitions, and lead nurturing. We build the workflows that eliminate manual work for sales reps and marketing operators.' },
              { icon: BarChart3, title: 'Custom Reporting', desc: 'Revenue dashboards, pipeline velocity reports, rep activity tracking, marketing attribution, conversion funnels, and forecasting. Reports that show real business metrics, not HubSpot defaults that sound impressive but mean nothing.' },
              { icon: Mail, title: 'Email & Sequences', desc: 'Sales email templates, multi-step nurture sequences, re-engagement campaigns, meeting booking flows, and marketing email setup. Every touchpoint automated, branded, and tracked back to revenue.' },
              { icon: Link2, title: 'Integrations', desc: 'Connect HubSpot to your website, accounting software (QuickBooks, Xero), phone system (Aircall, JustCall), email (Gmail, Outlook), calendar, scheduling tools, and marketing platforms. Native integrations, Zapier, and custom API connections.' },
              { icon: Users, title: 'Lead Scoring', desc: 'Fit and engagement scoring models that surface the right leads at the right time. Predictive lead scoring (in higher tiers) configured properly so sales reps work the leads most likely to close.' },
              { icon: RefreshCw, title: 'Data Migration', desc: 'Clean migration from Salesforce, Pipedrive, Zoho, spreadsheets, or any other source. Deduplication, field mapping, association preservation, and historical activity import where the source supports it.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <item.icon className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HubSpot Hubs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Every Hub. Every Tier.</h2>
          <p className="text-lg text-gray-600 mb-8">
            HubSpot has multiple Hubs and tiers, and each one has its own configuration quirks. We work across all of them.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Sales Hub', desc: 'Pipelines, deal automation, sequences, meeting links, quotes, forecasting, and rep performance dashboards. Starter through Enterprise.' },
              { name: 'Marketing Hub', desc: 'Forms, landing pages, email campaigns, workflows, lead scoring, attribution reporting, and ABM. Starter through Enterprise.' },
              { name: 'Service Hub', desc: 'Tickets, SLAs, knowledge base, customer feedback surveys, and service automation. Starter through Enterprise.' },
              { name: 'Operations Hub', desc: 'Data sync, programmable automation, custom code workflows, and data quality automation. Starter through Enterprise.' },
              { name: 'CMS Hub', desc: 'Website themes, smart content, dynamic pages, and CRM-powered web experiences. Starter through Enterprise.' },
              { name: 'Commerce Hub', desc: 'Invoicing, payments, subscriptions, and B2B commerce workflows. Setup, configuration, and reporting.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
          <p className="text-lg text-gray-600 mb-8">
            We use a three-phase process for every HubSpot engagement. It is structured, predictable, and fast.
          </p>
          <div className="space-y-8">
            {[
              { step: '01', title: 'HubSpot Audit (Week 1)', desc: 'We review your current HubSpot setup — portal settings, pipelines, workflows, data quality, properties, integrations, and reports. Using AI, we scan your entire database for quality issues and your workflows for logic conflicts. You receive a detailed audit report showing what is working, what is broken, and what is missing, with prioritized recommendations.' },
              { step: '02', title: 'Strategy & Configuration (Week 2-3)', desc: 'Based on the audit and your business goals, we design and build the optimal HubSpot configuration. Pipelines, properties, automation, templates, dashboards, integrations, and lead scoring — all customized to your process. Migration and deduplication happen here. You see incremental progress every few days, not just at the end.' },
              { step: '03', title: 'Training & Launch (Week 3-4)', desc: 'Your team gets role-based training with their actual data. Sales reps learn deal management, sequences, and meeting links. Marketers learn workflows and lists. Managers learn dashboards and forecasting. Admins learn ongoing maintenance. We monitor adoption for two weeks post-launch and adjust based on real usage.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0">
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
            All projects are priced before we start. No hourly billing, no scope changes mid-project.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <Clock className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2 to 4 Weeks</h3>
              <p className="text-gray-600">From audit to launch. AI-accelerated delivery means you are not waiting months to see results. Most teams have a working pipeline by the end of week two.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <DollarSign className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">From $1,500 CAD</h3>
              <p className="text-gray-600">Fixed pricing. No hourly billing, no change orders. The investment is agreed in writing before we start. Most full implementations land between $2,500 and $8,000.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Emergent Logic for HubSpot</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are HubSpot specialists, but we are also platform-agnostic — which means our advice is built around your business, not a partnership tier.
          </p>
          <div className="space-y-3">
            {[
              'Senior HubSpot consultants with deep CRM experience',
              'We also work with Salesforce and Zoho — so we give honest recommendations, not vendor-locked advice',
              'AI-powered audit identifies every issue in your portal before we touch anything',
              'Training is built into every engagement — not an upsell',
              'Fixed pricing with no surprises and no hourly billing',
              'Two weeks of post-launch support included in every project',
              'Based in Surrey, BC — serving Greater Vancouver and businesses across Canada',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
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
              { q: 'How long does a HubSpot implementation take?', a: 'Most of our HubSpot projects are delivered in 2 to 4 weeks from kickoff to launch. Larger or multi-Hub builds can take 5 to 6 weeks. The timeline is committed in writing before the project starts.' },
              { q: 'Which HubSpot tier do I need?', a: 'It depends on what you are trying to accomplish. Sales Hub Starter works for small teams that need a basic pipeline and sequences. Sales Hub Professional is the sweet spot for most growing teams that need workflows and custom reporting. Enterprise is required for predictive scoring, advanced permissions, and large-scale ABM. We help you make the call during the discovery audit so you do not overpay or underbuy.' },
              { q: 'Can you fix a portal someone else built?', a: 'Yes — and we do this often. We audit the existing setup, document what is there, identify what is broken or unused, and rebuild what needs rebuilding. We do not start from scratch unless absolutely necessary.' },
              { q: 'Do you handle data migrations into HubSpot?', a: 'Yes. We migrate from Salesforce, Pipedrive, Zoho, Monday, Excel, Google Sheets, and most legacy CRMs. Migration includes deduplication, field mapping, association preservation, and validation. We do not move dirty data into a clean system.' },
              { q: 'Do you train our team on HubSpot?', a: 'Yes. Training is included in every engagement. We deliver role-based sessions for sales, marketing, service, and admin users using your real data. We record the sessions and leave behind written documentation for new hires.' },
              { q: 'What if our needs change after launch?', a: 'Two weeks of post-launch support is included. After that, you can either run HubSpot yourself with the documentation we leave behind, or work with us on a monthly basis for ongoing optimization, new workflows, and reporting changes.' },
              { q: 'Are you a HubSpot Solutions Partner?', a: 'We work closely with the HubSpot ecosystem and have the technical depth of a partner-tier agency, but we deliberately stay vendor-neutral so we can also recommend Salesforce or Zoho when those are a better fit. You get senior expertise without the vendor bias.' },
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
            <Link href="/blog/hubspot-admin-support-small-business" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">HubSpot Admin Support for Small Businesses</p>
              <p className="text-gray-600 text-sm">What to outsource first when HubSpot needs ownership, cleanup, and a steady admin rhythm.</p>
            </Link>
            <Link href="/blog/why-hubspot-workflows-break" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Why HubSpot Workflows Break</p>
              <p className="text-gray-600 text-sm">What to audit before rebuilding workflow automation, lifecycle stages, and owner rules.</p>
            </Link>
            <Link href="/hubspot-workflow-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">HubSpot Workflow Cleanup</p>
              <p className="text-gray-600 text-sm">Workflow repair, enrollment logic, owner routing, lifecycle stages, and forms.</p>
            </Link>
            <Link href="/blog/hubspot-consultant-vancouver" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Why Businesses Search for a HubSpot Consultant in Vancouver</p>
              <p className="text-gray-600 text-sm">What a consultant should actually help with, and how to avoid a messy setup.</p>
            </Link>
            <Link href="/blog/crm-consultant-vs-implementation-partner-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Consultant vs Implementation Partner</p>
              <p className="text-gray-600 text-sm">When each role makes sense, and why most SMBs need both from the same team.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services and Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/services/crm-implementation" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Implementation</p>
              <p className="text-gray-600 text-sm">Full CRM setup from scratch</p>
            </Link>
            <Link href="/hubspot-consultant-surrey-bc" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">HubSpot Consultant Surrey</p>
              <p className="text-gray-600 text-sm">Local HubSpot help for Surrey and Greater Vancouver</p>
            </Link>
            <Link href="/services/crm-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Cleanup</p>
              <p className="text-gray-600 text-sm">Fix messy data and broken workflows</p>
            </Link>
            <Link href="/blog/hubspot-vs-salesforce-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">HubSpot vs Salesforce</p>
              <p className="text-gray-600 text-sm">Which CRM is right for your business</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get More Out of HubSpot</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free HubSpot audit. We will review your portal, identify what is working and what is not, and tell you exactly what it would take to fix it. No obligation, no pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTA ctaName="Book a Free Strategy Call - HubSpot Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-100 font-semibold px-8">
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
          <p className="text-white/60 text-sm mt-6">Prefer email? <Link href="/contact" className="underline hover:text-white">Send us a message</Link> and we will get back to you within 24 hours.</p>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
