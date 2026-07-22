import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Target, Mail, BarChart3, Workflow, Filter, Send, Clock, DollarSign, Check, AlertTriangle, Zap, Database } from 'lucide-react';

export const metadata = {
  title: 'Marketing Automation Services Canada',
  description: 'CRM-first marketing automation: lead scoring, nurture sequences, attribution, and sales handoff for HubSpot, Salesforce, and Zoho.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/marketing-automation' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Marketing Automation | Emergent Logic',
    description: 'CRM-first marketing automation: lead scoring, nurture sequences, and attribution that actually closes the loop on revenue.',
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

export default function MarketingAutomation() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-purple-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">Marketing Automation</span>
          </div>
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-medium mb-4">Supporting service</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Marketing Automation That Closes the Loop on Revenue
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            Lead scoring, nurture sequences, campaign attribution, and lead handoff built directly on top of your CRM, with clear ownership, testing, and human review for high-impact actions.
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
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-300" /> Attribution included</div>
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
                If your contacts are duplicated, your lifecycle stages are inconsistent, and your sales process is not mapped in your CRM, then automating on top of it just speeds up the chaos. That is why we always start with the CRM. If your CRM is not in good shape, we will tell you that during the discovery call — and we will recommend a <Link href="/services/crm-cleanup" className="underline font-medium">CRM Cleanup</Link> or <Link href="/services/crm-implementation" className="underline font-medium">CRM Implementation</Link> first.
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Marketing Automation Actually Means</h2>
          <p className="text-lg text-gray-600 mb-4">
            Marketing automation is not a tool. It is a system of rules, sequences, and triggers that move people from "interested" to "customer" without your team having to remember every follow-up. Done well, it scales your sales motion. Done poorly, it spams your list and erodes trust.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            For most growing Canadian businesses, automation lives inside the CRM — HubSpot, Salesforce, or Zoho — not in a separate marketing tool. That is intentional. When automation lives in the same system as your deals, your reps see the full context, marketing sees what closes, and leadership sees the actual ROI of every campaign.
          </p>
          <p className="text-lg text-gray-600">
            We design and build that system. The lead scoring model that surfaces the right leads. The nurture sequences that keep deals warm between conversations. The attribution that finally answers "which campaigns made us money?" And the handoff workflows that stop leads from falling through the cracks between marketing and sales.
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
              { icon: Target, title: 'Lead Scoring', desc: 'A fit-and-engagement model that surfaces the right leads at the right time. Demographics, firmographics, page visits, email engagement, and intent signals — weighted by what actually correlates with closed deals in your business.' },
              { icon: Mail, title: 'Email Nurture Sequences', desc: 'Multi-step, branching email flows that warm leads between calls. Educational content, social proof, objection handling, and re-engagement — all triggered by behaviour and timed around your sales cycle.' },
              { icon: BarChart3, title: 'Campaign Attribution', desc: 'First-touch, last-touch, and multi-touch models that answer "which campaigns drove revenue?" UTM strategy, deal source tracking, and dashboards that connect marketing spend to closed-won.' },
              { icon: Workflow, title: 'Lead Handoff Workflows', desc: 'Automated lead routing, ownership rules, SLA enforcement, and stage transitions. Marketing-qualified leads land on the right rep within minutes — not days — with full context.' },
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
            A typical marketing automation engagement covers the full system from data into deals.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Filter, title: 'Lead Scoring Model', desc: 'Fit and engagement scoring tied to your ideal customer profile, with thresholds for marketing-qualified and sales-qualified leads. Built natively in HubSpot, Salesforce, or Zoho.' },
              { icon: Send, title: 'Nurture Sequences', desc: 'Three to five core sequences: welcome, educational nurture, sales-assist, re-engagement, and customer onboarding. Each fully written, segmented, and tested before launch.' },
              { icon: Workflow, title: 'Routing & Handoff Workflows', desc: 'Lead assignment by territory, account size, or product interest. SLA timers, escalation paths, and notifications so MQL handoff happens in minutes, not days.' },
              { icon: BarChart3, title: 'Attribution Setup', desc: 'UTM strategy, source tracking, attribution model selection, and reporting dashboards. We close the loop between marketing and revenue once and for all.' },
              { icon: Mail, title: 'Email Templates & Sequences', desc: 'Sales-assist email templates and meeting booking flows for reps. Every touchpoint branded, tested for deliverability, and tracked.' },
              { icon: Target, title: 'Segmentation & Lists', desc: 'Smart list architecture, suppression rules, and re-engagement segments. Your list stays clean and your sender reputation stays high.' },
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
              { step: '01', title: 'CRM Health Check & Strategy (Week 1)', desc: 'We audit your CRM data, review your existing automation, and map your funnel from first touch to closed-won. If the CRM foundation is not solid, we flag it before we build. You receive a written automation strategy with prioritized workflows and KPIs.' },
              { step: '02', title: 'Build (Week 2-3)', desc: 'We build the lead scoring model, write and configure the nurture sequences, set up routing and SLA workflows, and wire up attribution reporting. Everything is tested with real contact data before it goes live.' },
              { step: '03', title: 'Launch & Tune (Week 3-4)', desc: 'We go live with sales and marketing aligned on the new playbook. For the first two weeks, we monitor scoring accuracy, sequence performance, and handoff timing — then tune based on real data. Documentation and admin training included.' },
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
            We are CRM consultants who do automation, not a marketing agency that dabbles in CRM. The difference shows in every workflow we build.
          </p>
          <div className="space-y-3">
            {[
              'Automation built natively in your CRM — no separate marketing tool that drifts out of sync',
              'Lead scoring designed around approved lifecycle definitions and available evidence, not a generic template',
              'Sales and marketing alignment built in: shared dashboards, agreed handoff thresholds, SLA tracking',
              'Attribution reporting with documented sources, definitions, and known limitations',
              'Multi-platform: HubSpot, Salesforce, Zoho — we recommend the right tool for your business',
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
            {[
              { q: 'Do I need a CRM in place before we start?', a: 'Yes. Marketing automation only works on a properly configured CRM. If your CRM is not implemented or has serious data issues, we will recommend a CRM Cleanup or Implementation first — otherwise the automation will inherit and amplify those problems.' },
              { q: 'What CRMs do you build automation in?', a: 'HubSpot, Salesforce, and Zoho are the primary platforms offered. The exact approach depends on the products and permissions in your stack, including HubSpot workflows, Salesforce Flow or Account Engagement, and Zoho CRM workflows.' },
              { q: 'How is this different from hiring a marketing agency?', a: 'A traditional marketing agency runs campaigns. We build the system underneath the campaigns — the scoring, sequences, attribution, and handoff workflows that turn campaigns into closed deals. We work alongside your existing agency or in-house marketing team, not as a replacement.' },
              { q: 'Do you write the email copy?', a: 'Yes. Email copy for nurture sequences and sales templates is included. We work with your subject matter experts to capture voice and positioning, then write, format, and test every email before launch.' },
              { q: 'What about ad campaigns and SEO?', a: 'We do not run paid media or SEO campaigns ourselves. We build the infrastructure that makes those campaigns measurable: UTM strategy, attribution, conversion tracking, and lead routing. Our work makes your existing marketing investment substantially more measurable and easier to optimize.' },
              { q: 'How quickly do you see results?', a: 'Operational results (faster lead handoff, higher engagement rates) usually start to show in the first month. Revenue impact (higher conversion to closed-won) typically becomes visible over the following quarter as the scoring model and sequences accumulate data and the sales cycle plays out.' },
              { q: 'Is this a substitute for hiring a marketer?', a: 'No. We build the automation system. Someone in your business still needs to plan campaigns, create content, and review performance. We can recommend marketers and content partners we trust if you do not have those resources in-house.' },
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Automation That Closes Deals</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We will look at your CRM, your funnel, and your current automation, and walk you through exactly where the highest-leverage improvements are.
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
