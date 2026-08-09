import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Target, Mail, BarChart3, Workflow, Filter, Send, Clock, DollarSign, Check, AlertTriangle, Zap, Database } from 'lucide-react';

export const metadata = {
  title: 'CRM Marketing Automation Services in Canada',
  description: 'Marketing automation services for HubSpot, Salesforce, and Zoho: lead scoring, nurture, attribution, and sales handoff built on a trusted CRM foundation.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/marketing-automation' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Marketing Automation Services in Canada | Emergent Logic',
    description: 'CRM-first marketing automation services for lead scoring, nurture, attribution, and sales handoff across HubSpot, Salesforce, and Zoho.',
    url: 'https://www.emergent-logic.ca/services/marketing-automation',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const readinessSignals = [
  {
    title: 'Lifecycle stages are trustworthy',
    desc: 'Leads, MQLs, SQLs, opportunities, and customers are clearly defined and consistently updated. If this field is messy, nurture logic and handoff rules will misfire.',
  },
  {
    title: 'Owners and routing rules are current',
    desc: 'Every meaningful lead has the right owner, territory, segment, and next step. Automation should route work to a person, not a dead queue or inactive user.',
  },
  {
    title: 'Source and campaign data is captured',
    desc: 'UTMs, original source, campaign attribution, and form context are preserved before automation starts. Without this, reports show activity without revenue clarity.',
  },
  {
    title: 'Sales agrees with the handoff rules',
    desc: 'Marketing and sales need the same definition of “ready.” Otherwise automation creates alerts that reps ignore and reports leadership cannot trust.',
  },
];

const faqs = [
  {
    q: 'Do I need a CRM in place before we start?',
    a: 'This service assumes a CRM with usable contact data, lifecycle definitions, ownership, and consent rules. If the foundation is not ready, the first scope may be a focused CRM cleanup or implementation instead.',
  },
  {
    q: 'Which CRMs can you build automation in?',
    a: 'HubSpot, Salesforce, and Zoho are the primary platforms offered. The approach depends on the licensed products, permissions, data model, and confirmed workflow requirements.',
  },
  {
    q: 'How is this different from hiring a marketing agency?',
    a: 'This service focuses on the operating system underneath campaigns: segmentation, scoring, attribution, routing, and CRM workflow logic. Campaign execution can be scoped separately or handled by an existing marketing team.',
  },
  {
    q: 'Can email copy be included?',
    a: 'Yes. Nurture and sales-assist copy can be included when subject-matter input, consent rules, review ownership, and the approval process are defined in the written scope.',
  },
  {
    q: 'What about paid ads and SEO?',
    a: 'This engagement focuses on the CRM and measurement infrastructure underneath campaigns, including UTM capture, attribution, conversion tracking, and lead routing. Campaign management is a separate scope.',
  },
  {
    q: 'When should we expect measurable results?',
    a: 'Lead-response time and workflow completion can be measured soon after launch. Pipeline and revenue impact depends on traffic quality, sales-cycle length, list size, offer, and team adoption, so baselines and review windows are agreed before claims are made.',
  },
  {
    q: 'Is this a substitute for hiring a marketer?',
    a: 'No. The service builds and improves the automation system. The business still needs an owner for campaign planning, content, offers, and performance decisions.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/services/marketing-automation#service',
      name: 'CRM Marketing Automation Services',
      serviceType: 'Marketing automation strategy, CRM workflows, lead scoring, nurture, attribution, and sales handoff consulting',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/services/marketing-automation',
      areaServed: { '@type': 'Country', name: 'Canada' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/services/marketing-automation#faq',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function MarketingAutomation() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-purple-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">Marketing Automation</span>
          </div>
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-medium mb-4">Supporting service</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            CRM Marketing Automation Services for Canadian Teams
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            Connect lead scoring, nurture sequences, campaign attribution, and sales handoff to your CRM with clear ownership, documented testing, and human review for high-impact actions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a CRM Consultation" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100 font-semibold px-8">
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
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-300" /> Scope-based delivery plan</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-300" /> Clear scope before build</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-300" /> CRM-native automation</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-300" /> Attribution requirements mapped</div>
          </div>
        </div>
      </section>

      {/* CRM-first positioning callout */}
      <section className="py-12 bg-purple-50 border-b border-purple-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4">
            <Database className="w-8 h-8 text-purple-700 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-purple-900 mb-2">Marketing automation is only as good as the CRM beneath it.</h2>
              <p className="text-purple-900/80">
                If your contacts are duplicated, lifecycle stages are inconsistent, or the sales process is not mapped, automating on top of the CRM can amplify the problem. We start by checking that foundation and may recommend a <Link href="/services/crm-cleanup" className="underline font-medium">CRM Cleanup</Link> or <Link href="/services/crm-implementation" className="underline font-medium">CRM Implementation</Link> before workflow buildout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation readiness */}
      <section className="py-20 bg-white border-y border-purple-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" /> Automation readiness
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Before You Automate, Make Sure the CRM Can Be Trusted
          </h2>
          <p className="text-lg text-gray-600 mb-5">
            Most marketing automation problems are not email problems. They are CRM problems wearing an email costume. A workflow can only make good decisions if the contact data, lifecycle stages, owners, sources, and deal context underneath it are reliable.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            This is why our marketing automation projects start with a practical readiness check. If the foundation is clean, we build. If it is not, we recommend a focused <Link href="/services/crm-cleanup" className="text-purple-700 hover:underline font-medium">CRM cleanup</Link> first, or a cleaner <Link href="/services/crm-implementation" className="text-purple-700 hover:underline font-medium">CRM implementation</Link> if the existing setup cannot support the funnel.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {readinessSignals.map((item, i) => (
              <div key={i} className="rounded-2xl border border-purple-100 bg-gradient-to-br from-white to-purple-50 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Is Marketing Automation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What CRM Marketing Automation Services Include</h2>
          <p className="text-lg text-gray-600 mb-4">
            Marketing automation is a system of rules, sequences, and triggers that helps a team manage follow-up consistently. It should support the sales process without hiding ownership, consent, exceptions, or decisions that still need human review.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            For many growing Canadian businesses, the CRM is the source of truth while HubSpot, Salesforce, Zoho, and approved integrations carry out the automation. That keeps contact history, deal context, campaign sources, and handoff status connected.
          </p>
          <p className="text-lg text-gray-600">
            A written scope can cover lead scoring, nurture sequences, source capture, attribution definitions, routing, handoff, exception reporting, and documentation. The exact build depends on the CRM, licensed features, data quality, consent requirements, and the operating process your team approves.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Four Pillars of Marketing Automation</h2>
          <p className="text-lg text-gray-600 mb-8">
            The automation framework covers four foundational systems. A scope may include all four or focus on the one or two creating the largest operational gap.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Target, title: 'Lead Scoring', desc: 'A fit-and-engagement model based on approved lifecycle definitions and available evidence. Demographics, firmographics, page visits, email engagement, and intent signals can be weighted when the underlying data supports them.' },
              { icon: Mail, title: 'Email Nurture Sequences', desc: 'Multi-step, branching email flows that warm leads between calls. Educational content, social proof, objection handling, and re-engagement — all triggered by behaviour and timed around your sales cycle.' },
              { icon: BarChart3, title: 'Campaign Attribution', desc: 'First-touch, last-touch, and multi-touch models that answer "which campaigns drove revenue?" UTM strategy, deal source tracking, and dashboards that connect marketing spend to closed-won.' },
              { icon: Workflow, title: 'Lead Handoff Workflows', desc: 'Lead routing, ownership rules, SLA monitoring, stage transitions, and exception views help time-sensitive leads reach the right owner with the agreed context.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <item.icon className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Most Marketing Automation Fails</h2>
          <p className="text-lg text-gray-600 mb-8">
            Self-built automation often fails in predictable ways when lifecycle stages, ownership, source data, and exception paths are not defined first.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Automation built on a broken CRM', desc: 'Lifecycle stages are inconsistent, contacts are duplicated, lead sources are missing. Automation built on this foundation just amplifies the noise. Fix the CRM first, then automate.' },
              { title: 'Volume over relevance', desc: 'Sending more emails to more contacts is not a strategy. Tight segmentation, behaviour-based triggers, and ruthless list hygiene beat blast emails every time.' },
              { title: 'No scoring threshold for handoff', desc: 'Leads either go to sales the moment they fill a form (too early, low close rate) or never (lost in the funnel). A scored handoff threshold solves both problems.' },
              { title: 'No attribution model', desc: 'Marketing reports clicks. Sales reports closed deals. Nobody connects the two. Without attribution, every campaign decision is a guess.' },
              { title: 'No re-engagement plan', desc: 'Most leads are not ready when they first opt in. If you do not have a re-engagement workflow that brings them back at the right moment, a large share of pipeline goes quiet by default.' },
              { title: 'Set and forget', desc: 'Automation is not a one-time build. Sequences need to be tested, scoring needs to be tuned, and workflows need to evolve as the business does. Without ongoing review, automation rots.' },
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

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Is Included</h2>
          <p className="text-lg text-gray-600 mb-8">
            A marketing automation engagement can cover the full path from contact data to sales handoff, or focus on the highest-priority system boundary first.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Filter, title: 'Lead Scoring Model', desc: 'Fit and engagement scoring tied to your ideal customer profile, with thresholds for marketing-qualified and sales-qualified leads. Built natively in HubSpot, Salesforce, or Zoho.' },
              { icon: Send, title: 'Nurture Sequences', desc: 'Welcome, educational nurture, sales-assist, re-engagement, or onboarding sequences can be written, segmented, reviewed, and tested when included in the scope.' },
              { icon: Workflow, title: 'Routing & Handoff Workflows', desc: 'Lead assignment by territory, account size, or product interest, with agreed SLA timers, escalation paths, notifications, and exception handling.' },
              { icon: BarChart3, title: 'Attribution Setup', desc: 'UTM strategy, source tracking, attribution definitions, and reporting dashboards with documented sources, assumptions, and known limitations.' },
              { icon: Mail, title: 'Email Templates & Sequences', desc: 'Sales-assist email templates and meeting-booking flows configured for the approved brand, consent model, review process, and measurement plan.' },
              { icon: Target, title: 'Segmentation & Lists', desc: 'List architecture, suppression rules, consent handling, and re-engagement segments designed to support relevance and sender-reputation controls.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <item.icon className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
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
            Three phases. Same methodology we use for every CRM project, applied to the automation layer.
          </p>
          <div className="space-y-8">
            {[
              { step: '01', title: 'CRM Health Check & Strategy', desc: 'We review the agreed CRM data, existing automation, and funnel from first touch to closed-won. If the foundation is not ready, we flag it before build work. The output is a prioritized workflow and measurement plan.' },
              { step: '02', title: 'Controlled Build', desc: 'Approved scoring, nurture, routing, handoff, and attribution components are configured in reviewable steps. Test records and agreed acceptance checks are used before production activation.' },
              { step: '03', title: 'Launch, Verify & Hand Over', desc: 'Approved workflows are launched with monitoring, exception checks, documentation, and training defined in the proposal. Any ongoing tuning period is confirmed in the written scope.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
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
            Scope, dependencies, approval boundaries, and commercial terms are confirmed in writing before work starts.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <Clock className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Timing After Discovery</h3>
              <p className="text-gray-600">The delivery plan is confirmed after lifecycle rules, data, copy, consent, platform access, testing, and approval requirements are understood.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <DollarSign className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Written Commercial Proposal</h3>
              <p className="text-gray-600">The proposal confirms which workflows, reports, copy, integrations, testing, handoff, and support are included before work begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Emergent Logic for Marketing Automation</h2>
          <p className="text-lg text-gray-600 mb-8">
            We approach marketing automation as a CRM operating-system project: define the data, ownership, consent, handoff, measurement, and exception rules before activating workflows.
          </p>
          <div className="space-y-3">
            {[
              'CRM treated as the source of truth, with each approved integration and system boundary documented',
              'Lead scoring designed around approved lifecycle definitions and available evidence, not a generic template',
              'Sales and marketing alignment supported by agreed handoff thresholds, ownership, and SLA reporting',
              'Attribution reporting with documented sources, definitions, and known limitations',
              'HubSpot, Salesforce, and Zoho options assessed against licensed features and operating requirements',
              'Post-launch tuning included only when defined in the written scope',
              'Based in Surrey, BC — serving Greater Vancouver and businesses across Canada',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
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
            <Link href="/blog/excel-to-crm-migration-repeat-order-businesses" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-purple-700">Excel-to-CRM Migration Checklist and Workbook</p>
              <p className="text-gray-600 text-sm">Use the free seven-sheet workbook to map customer, field, duplicate, test-import, reorder, ownership, and acceptance rules before automating the next action.</p>
            </Link>
            <Link href="/blog/marketing-automation-needs-crm-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Why Marketing Automation Fails Without Cleanup First</p>
              <p className="text-gray-600 text-sm">Automation multiplies whatever is already there. How to know whether your CRM is automation-ready.</p>
            </Link>
            <Link href="/case-studies/lead-routing-mql-sql-handoff-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Lead Routing Implementation Pattern</p>
              <p className="text-gray-600 text-sm">A practical MQL-to-SQL handoff pattern for lifecycle stages, owners, and exception dashboards.</p>
            </Link>
            <Link href="/solutions/email-and-call-notes-to-crm" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Email and Call Notes to CRM</p>
              <p className="text-gray-600 text-sm">A small-business workflow for creating contacts and preserving approved conversation notes.</p>
            </Link>
            <Link href="/blog/why-hubspot-workflows-break" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Why HubSpot Workflows Break</p>
              <p className="text-gray-600 text-sm">Workflow automation usually fails when lifecycle stages, owners, and enrollment rules are unclear.</p>
            </Link>
            <Link href="/blog/crm-consultant-vs-implementation-partner-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Consultant vs Implementation Partner</p>
              <p className="text-gray-600 text-sm">The two roles explained, and why the cleanest engagements combine both.</p>
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
              <p className="text-gray-600 text-sm">The foundation underneath every automation</p>
            </Link>
            <Link href="/blog/lead-scoring-model-crm-guide" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Lead Scoring Guide</p>
              <p className="text-gray-600 text-sm">Step-by-step playbook (Part 1)</p>
            </Link>
            <Link href="/blog/email-nurture-sequences-crm-automation" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Nurture Sequences</p>
              <p className="text-gray-600 text-sm">3-phase, 8-email framework (Part 2)</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-fuchsia-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Marketing Automation Your Team Can Operate</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute strategy call to review your CRM, funnel, current automation, and the system boundary that deserves attention first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTA ctaName="Book Free Strategy Call - Marketing Automation Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100 font-semibold px-8">
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
