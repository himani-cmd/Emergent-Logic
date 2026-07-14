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
    description: 'HubSpot consulting for Canadian businesses. Portal setup, workflows, reporting, integrations, training, and controlled handoff.',
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
            HubSpot portal configuration, pipeline design, workflow automation, custom reporting, and integrations with direct delivery and written scope. Timing is confirmed after discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a CRM Consultation" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-100 font-semibold px-8">
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
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-300" /> Scope-based delivery plan</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-300" /> Written proposal after discovery</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-300" /> Scope matched to licensed Hubs</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-300" /> Listed HubSpot Solutions Partner</div>
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
            That is usually an implementation and process problem. HubSpot can support lead scoring, sequences, workflows, custom objects, analytics, and integrations, but feature availability depends on the licensed tier and clean operating rules.
          </p>
          <p className="text-lg text-gray-600">
            Our HubSpot consulting service is designed around one outcome: turning a portal from a contact database into a usable revenue system. The scope can cover a new setup, an underused portal, or an inherited configuration that needs to be audited and documented.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who This Service Fits</h2>
          <p className="text-lg text-gray-600 mb-8">
            This service is designed for teams in the following situations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'New HubSpot subscribers', desc: 'You just signed up for HubSpot Sales Hub, Marketing Hub, or Service Hub and want it set up properly. You do not want to figure out the portal yourself or sit through HubSpot Academy for three weeks.' },
              { title: 'HubSpot users with limited adoption', desc: 'You bought HubSpot, but the team mainly uses it for contact storage or basic deal tracking. You know there is more value available, but the next implementation priorities are unclear.' },
              { title: 'Teams migrating to HubSpot', desc: 'You are moving from Salesforce, Pipedrive, Zoho, or spreadsheets to HubSpot. You need clean migration, fresh configuration, and a launch plan that does not disrupt active deals.' },
              { title: 'Inherited portals', desc: 'Someone else built your HubSpot portal — a former employee, a freelancer, an old agency. It is a mess of half-built workflows, abandoned properties, and reports nobody trusts. We rebuild and document.' },
              { title: 'Sales and Marketing alignment', desc: 'Your sales and marketing teams use different definitions or systems. The scope can map shared lifecycle rules, handoff, attribution, ownership, and dashboards inside HubSpot.' },
              { title: 'HubSpot + integrations', desc: 'You need HubSpot connected to accounting, calling, scheduling, website, or internal systems. Native, middleware, and API options are assessed against the documented requirements.' },
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
            A full implementation can cover initial portal setup, automation, reporting, migration, and training. The final scope is written around the team&apos;s actual process and HubSpot tier.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Settings, title: 'Portal Setup & Onboarding', desc: 'A scope can cover account settings, roles, permissions, teams, default properties, currency, sending domains, branding, and security controls.' },
              { icon: Layers, title: 'Pipeline Design', desc: 'Pipeline design can cover stages, entry and exit criteria, required fields, ownership, forecasting categories, and separate motions where the process requires them.' },
              { icon: Zap, title: 'Workflow Automation', desc: 'Approved workflows may cover assignment, notifications, tasks, lifecycle transitions, stage automation, suppression, and lead nurturing.' },
              { icon: BarChart3, title: 'Custom Reporting', desc: 'Dashboard definitions can cover pipeline movement, response time, activity, attribution, conversion, and forecasting where the underlying data supports them.' },
              { icon: Mail, title: 'Email & Sequences', desc: 'A scope may include sales templates, nurture sequences, re-engagement, booking flows, consent rules, and email configuration supported by the licensed tier.' },
              { icon: Link2, title: 'Integrations', desc: 'Website, accounting, calling, email, calendar, scheduling, and marketing connections are assessed using native integrations, middleware, or APIs.' },
              { icon: Users, title: 'Lead Scoring', desc: 'Fit and engagement scoring can be designed around explicit criteria, with predictive features considered only when the HubSpot tier and data support them.' },
              { icon: RefreshCw, title: 'Data Migration', desc: 'Migration can include source inventory, deduplication rules, field mapping, test imports, association checks, validation, and rollback planning.' },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Match the Scope to the Hub and Tier</h2>
          <p className="text-lg text-gray-600 mb-8">
            HubSpot has multiple Hubs and tiers, each with different capabilities and configuration requirements. Platform fit is confirmed during discovery.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Sales Hub', desc: 'Pipelines, automation, sequences, meetings, quotes, forecasting, and sales dashboards. Feature availability depends on tier.' },
              { name: 'Marketing Hub', desc: 'Forms, landing pages, email, workflows, scoring, attribution, and campaign reporting. Feature availability depends on tier.' },
              { name: 'Service Hub', desc: 'Tickets, SLAs, knowledge base, feedback, and service automation. Feature availability depends on tier.' },
              { name: 'Operations Hub', desc: 'Data sync, automation, custom-code workflows, and data-quality tools. Feature availability depends on tier.' },
              { name: 'Content Hub', desc: 'Website themes, landing pages, smart content, and CRM-connected web experiences. Feature availability depends on tier.' },
              { name: 'Commerce Hub', desc: 'Quotes, invoices, payments, subscriptions, and commerce reporting where account and regional availability support them.' },
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
            Our standard proposal uses three controlled phases, with dependencies and acceptance criteria documented before work starts.
          </p>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Audit & Scope', desc: 'We review the agreed portal areas, document current-state risks, and identify the data, workflows, reports, and integrations that need deeper access. No production change is made during discovery.' },
              { step: '02', title: 'Configuration & Validation', desc: 'Approved pipelines, properties, automation, templates, dashboards, integrations, or migration tasks are built in priority order and checked against written acceptance criteria.' },
              { step: '03', title: 'Training & Handoff', desc: 'Role-based training, documentation, launch support, and any post-launch monitoring included in the proposal are completed before handoff.' },
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

      {/* Scope */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scope and Delivery Plan</h2>
          <p className="text-lg text-gray-600 mb-8">
            Projects use written pricing and scope before work starts. Any requested change is documented with its impact before implementation continues.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <Clock className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Timing After Discovery</h3>
              <p className="text-gray-600">The delivery plan is confirmed after data, licensing, integrations, stakeholder availability, testing, and approval dependencies are understood.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <DollarSign className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Written Commercial Proposal</h3>
              <p className="text-gray-600">The proposal confirms the scope, exclusions, dependencies, approval points, commercial terms, and change-control process before work begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Emergent Logic Brings to HubSpot Work</h2>
          <p className="text-lg text-gray-600 mb-8">
            Emergent Logic is listed in HubSpot&apos;s public Solutions Directory while retaining a cross-platform view of CRM fit and scope.
          </p>
          <div className="space-y-3">
            {[
              'Direct delivery with written scope, testing, and acceptance criteria',
              'Cross-platform fit discussions across HubSpot, Salesforce, and Zoho with relevant partner relationships disclosed',
              'AI-assisted checks help surface configuration, data, and workflow risks before approved changes begin',
              'Training, documentation, and support are included when defined in the written scope',
              'Fixed-price options with change control before out-of-scope work begins',
              'HubSpot Solutions Partner status stated without invented tiers, certifications, reviews, or results',
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
              { q: 'How long does a HubSpot implementation take?', a: 'Timing depends on data, licensing, integrations, stakeholder availability, testing, and acceptance criteria. The proposed delivery plan and dependencies are documented before work starts.' },
              { q: 'Which HubSpot tier do I need?', a: 'It depends on what you are trying to accomplish. Sales Hub Starter works for small teams that need a basic pipeline and sequences. Sales Hub Professional is the sweet spot for most growing teams that need workflows and custom reporting. Enterprise is required for predictive scoring, advanced permissions, and large-scale ABM. We help you make the call during the discovery audit so you do not overpay or underbuy.' },
              { q: 'Can you fix a portal someone else built?', a: 'Yes. The first step is an audit of the existing setup, followed by documentation of what is active, broken, unused, or risky. The proposal then identifies what can be retained and what needs controlled rebuilding.' },
              { q: 'Do you handle data migrations into HubSpot?', a: 'A migration scope can cover Salesforce, Pipedrive, Zoho, Monday, spreadsheets, and other exportable sources. The exact plan depends on available fields, associations, activities, API access, and validation requirements.' },
              { q: 'Do you train our team on HubSpot?', a: 'Role-based training and written documentation can be included for sales, marketing, service, and admin users. The audience, data access, recordings, and handoff materials are confirmed in the proposal.' },
              { q: 'What if our needs change after launch?', a: 'The proposal defines the post-launch support window. New workflows, reporting changes, or ongoing administration are scoped separately when they fall outside the agreed work.' },
              { q: 'Are you a HubSpot Solutions Partner?', a: 'Yes. Emergent Logic Consulting is listed in HubSpot’s public Solutions Directory as a Solutions Partner. We do not claim a tier, accreditation, certification, review history, or client result beyond what the directory and our own public evidence support.' },
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
            Request a HubSpot consultation to review the visible symptoms, likely risks, and information needed for a practical audit or implementation scope. No production changes are made during discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTA ctaName="Book a CRM Consultation - HubSpot Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-100 font-semibold px-8">
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
