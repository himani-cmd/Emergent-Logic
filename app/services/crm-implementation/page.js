import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Database, Clock, DollarSign, Users, Zap, ShieldCheck, TrendingUp, Building2, Briefcase, Stethoscope, Hammer, GraduationCap, ShoppingBag, X, Check } from 'lucide-react';

export const metadata = {
  title: 'CRM Implementation Services Canada | HubSpot, Salesforce & Zoho Setup',
  description: 'Full CRM implementation for Canadian businesses. Pipelines, automation, dashboards, data migration, and training for HubSpot, Salesforce, or Zoho. AI-accelerated delivery in 2 to 4 weeks. From $1,500.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/crm-implementation' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Implementation Services | Emergent Logic',
    description: 'AI-accelerated CRM implementation for Canadian businesses. HubSpot, Salesforce, and Zoho — set up properly in 2 to 4 weeks.',
    url: 'https://www.emergent-logic.ca/services/crm-implementation',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function CRMImplementation() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-violet-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">CRM Implementation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            CRM Implementation That Works From Week One
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            We set up HubSpot, Salesforce, and Zoho CRM systems for Canadian businesses in 2 to 4 weeks. Not 6 months. Pipelines, automation, dashboards, data migration, and team training — all included, all fixed-priced, and all built around how your team actually sells.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a Free Strategy Call" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 font-semibold px-8">
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
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-violet-300" /> 2 to 4 week delivery</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-violet-300" /> Fixed pricing from $1,500</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-violet-300" /> HubSpot, Salesforce, or Zoho</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-violet-300" /> Senior consultants only</div>
          </div>
        </div>
      </section>

      {/* What Is CRM Implementation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Is CRM Implementation?</h2>
          <p className="text-lg text-gray-600 mb-4">
            CRM implementation is the process of setting up a customer relationship management system so it actually works for your business. It is not just installing software — it is configuring pipelines to match your sales process, building automation that saves your team hours every week, creating dashboards that show real numbers, and migrating your data without losing anything.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            The difference between a CRM that generates revenue and a CRM that collects dust is how it is implemented. Most businesses buy a CRM, configure it generically, and wonder six months later why nobody on the sales team is logging deals. A proper implementation starts with understanding your business and ends with a system your team actually wants to use.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            We implement HubSpot, Salesforce, and Zoho for businesses with 10 to 200 employees across Canada. Every implementation is customized to your sales process, your team structure, and your growth goals — and every implementation is delivered with a fixed price and a fixed timeline before we start.
          </p>
          <p className="text-lg text-gray-600">
            What makes our approach different is that we build the strategy first and the software second. Anyone can drag fields around in HubSpot. Far fewer people can sit down with your sales leader, map out the way your business actually wins deals, and translate that into a CRM that mirrors reality. That is the work that makes a CRM stick.
          </p>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Needs CRM Implementation?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We typically work with founders, sales leaders, and operations leads at growing Canadian companies. If you recognize yourself in any of these scenarios, a proper implementation is the right next step.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'New CRM buyers', desc: 'You just purchased HubSpot, Salesforce, or Zoho and want it set up properly from day one. You do not want to spend three months figuring it out yourself, and you do not want to waste your subscription paying for software your team is not actually using.' },
              { title: 'Scaling sales teams', desc: 'Your team is growing past five reps and spreadsheets are no longer cutting it. You need a system that gives every rep the same playbook, lets your sales leader forecast accurately, and shows leadership where revenue is actually coming from.' },
              { title: 'Failed or stalled implementations', desc: 'You already tried setting up your CRM — maybe in-house, maybe with a freelancer — and it stalled. Your data is messy, your team is frustrated, half the workflows are broken. You need someone to take it from where it is and finish the job.' },
              { title: 'CRM migrations and switches', desc: 'You are moving from one CRM to another, or consolidating multiple tools into one. You need the transition handled cleanly with no lost contacts, no broken integrations, no downtime, and no disruption to active deals.' },
              { title: 'Teams stuck in spreadsheets', desc: 'Your sales process lives in Excel, Google Sheets, and a dozen email threads. You know it is slowing you down, but you have not had time to build the alternative. We build it for you.' },
              { title: 'Founders who want one source of truth', desc: 'You want to open one tool and see exactly where every deal is, who owns it, what is stuck, and what is forecasted to close this quarter. That is what a properly implemented CRM gives you.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-violet-600 flex-shrink-0 mt-0.5" />
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

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 mb-8">
            We have implemented CRMs across many of the sectors active in the Canadian SMB economy. Every industry has its own pipeline shape, compliance requirements, and reporting needs — and we have seen most of them.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Briefcase, name: 'Professional Services', desc: 'Consultancies, agencies, accounting and legal firms.' },
              { icon: Building2, name: 'B2B SaaS & Tech', desc: 'Software companies with subscription and renewal motions.' },
              { icon: Hammer, name: 'Construction & Trades', desc: 'Project-based pipelines with long sales cycles.' },
              { icon: Stethoscope, name: 'Healthcare & MedTech', desc: 'PIPEDA-compliant patient and provider workflows.' },
              { icon: GraduationCap, name: 'Education & EdTech', desc: 'Enrolment funnels, B2B partnerships, and renewals.' },
              { icon: ShoppingBag, name: 'eCommerce & D2C', desc: 'Wholesale, B2B accounts, and high-value customer ops.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-xl border">
                <item.icon className="w-7 h-7 text-violet-600 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common CRM Implementation Mistakes</h2>
          <p className="text-lg text-gray-600 mb-8">
            Most failed CRM rollouts share the same root causes. We design every project to avoid these from day one.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Starting with features instead of process', desc: 'Most implementations fail because they start by configuring software features instead of mapping the actual sales process. If your CRM does not match how your team sells, they will not use it. Process first, software second — every time.' },
              { title: 'Skipping data cleanup before migration', desc: 'Migrating dirty data into a new CRM just moves the problem. Duplicates, missing fields, outdated contacts, dead leads — they all need to be cleaned before migration, not after. Otherwise, the new system inherits the same issues within weeks.' },
              { title: 'No training plan or weak adoption strategy', desc: 'Installing a CRM is not the same as implementing it. If your team does not know how to use the system efficiently, adoption drops to zero within the first month and never recovers. Training is not optional.' },
              { title: 'Generic configuration', desc: 'Using default templates and out-of-the-box pipeline stages means your CRM does not reflect your business. Every company has a unique sales process — your CRM should match it exactly, not the other way around.' },
              { title: 'No automation strategy', desc: 'A CRM without automation is just a database with extra steps. Lead assignment, follow-up reminders, email sequences, deal stage updates, internal notifications — these should be automated from day one, not added six months later.' },
              { title: 'No reporting plan', desc: 'If your team cannot answer the question "what should we do this week?" by looking at the CRM, the implementation is incomplete. Reports and dashboards are part of the build, not an afterthought.' },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
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

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Is Included in Our CRM Implementation</h2>
          <p className="text-lg text-gray-600 mb-8">
            Every implementation is customized to your business, but here is what you can expect in every engagement. Nothing on this list is an upsell or an add-on — it is all included in the fixed price.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Database, title: 'Pipeline Configuration', desc: 'Custom deal stages, pipeline views, and deal properties that match your exact sales process. Multiple pipelines for different products or services if needed. Win probability, forecasting, and stage entry/exit criteria built in.' },
              { icon: Users, title: 'Contact & Company Setup', desc: 'Custom properties, lifecycle stages, lead status definitions, and segmentation logic. Account hierarchies for businesses that sell into multi-location or parent-subsidiary structures. Contacts organized the way your team actually thinks about them.' },
              { icon: Zap, title: 'Workflow Automation', desc: 'Lead assignment rules, follow-up sequences, deal stage automation, internal notification triggers, and task creation. We automate every repetitive process so your reps spend their time selling, not updating records.' },
              { icon: TrendingUp, title: 'Dashboards & Reports', desc: 'Revenue dashboards, pipeline reports, activity tracking, and forecasting views built on your real numbers. Sales leaders get a single view of the team. Reps get a personal dashboard that tells them what to do today.' },
              { icon: ShieldCheck, title: 'Data Migration', desc: 'Clean migration from spreadsheets, another CRM, or multiple sources. Deduplication, field mapping, association preservation, and validation included. Activity history is preserved where the source system supports it.' },
              { icon: Clock, title: 'Team Training', desc: 'Role-based training for sales reps, managers, and admins. Not a generic webinar — hands-on sessions with your actual data, your actual workflows, and your actual deals. Recorded and documented for new hires.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <item.icon className="w-8 h-8 text-violet-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process: Audit, Build, Launch</h2>
          <p className="text-lg text-gray-600 mb-8">
            We use the same three-phase methodology on every project. It is the reason we can deliver in 2 to 4 weeks instead of 3 to 6 months.
          </p>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Audit (Week 1)', desc: 'We map your sales process, audit your existing data, assess your tech stack, and identify every bottleneck. We use AI to scan your contact and deal data for patterns and quality issues that would take a human days to find. You receive a written audit report with prioritized recommendations and a clear implementation plan. No guessing, no assumptions, no scope changes once we start the build.' },
              { step: '02', title: 'Build (Week 2-3)', desc: 'We configure your CRM from scratch — pipelines, properties, automation, dashboards, email templates, integrations. Data migration happens here with full deduplication and validation. Everything is built automation-first, so the moment a contact enters the system the right next action is already triggered. You get a working CRM at the end of week three.' },
              { step: '03', title: 'Launch (Week 3-4)', desc: 'Your team gets hands-on training tailored to their roles. Reps learn the daily workflow, managers learn forecasting and dashboards, admins learn ongoing maintenance. We launch together, monitor adoption for two weeks, and make adjustments based on real usage. Post-launch support is included in every engagement.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
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

      {/* Pricing + Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Timeline and Investment</h2>
          <p className="text-lg text-gray-600 mb-8">
            Most CRM implementations are quoted in months and billed by the hour. Ours are quoted in weeks and billed at a fixed price.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm">
              <Clock className="w-10 h-10 text-violet-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2 to 4 Weeks</h3>
              <p className="text-gray-600">From kickoff to launch. Our AI-accelerated methodology compresses timelines that traditional agencies typically deliver in 3 to 6 months. Most clients see a working pipeline by the end of week two.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm">
              <DollarSign className="w-10 h-10 text-violet-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">From $1,500 CAD</h3>
              <p className="text-gray-600">Fixed pricing agreed before we start. No hourly billing, no change orders, no surprises. The scope, timeline, and investment are locked in from day one — you know exactly what you are paying.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Emergent Logic vs. The Alternatives</h2>
          <div className="bg-white rounded-2xl border overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-sm font-semibold text-gray-700">&nbsp;</th>
                  <th className="p-4 text-sm font-semibold text-violet-700">Emergent Logic</th>
                  <th className="p-4 text-sm font-semibold text-gray-700">Freelancer</th>
                  <th className="p-4 text-sm font-semibold text-gray-700">Big Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { feature: 'Timeline', us: '2 to 4 weeks', f: '6 to 12 weeks', a: '3 to 6 months' },
                  { feature: 'Pricing model', us: 'Fixed price', f: 'Hourly', a: 'Hourly + retainer' },
                  { feature: 'Senior consultant on the build', us: 'Yes', f: 'Often', a: 'Rarely' },
                  { feature: 'Vendor-neutral advice', us: 'Yes', f: 'Sometimes', a: 'No (partner-driven)' },
                  { feature: 'Training included', us: 'Yes', f: 'Sometimes', a: 'Usually extra' },
                  { feature: 'Post-launch support', us: '2 weeks included', f: 'Hourly', a: 'Hourly retainer' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-4 font-medium text-gray-800">{row.feature}</td>
                    <td className="p-4 text-violet-700 font-medium">{row.us}</td>
                    <td className="p-4 text-gray-600">{row.f}</td>
                    <td className="p-4 text-gray-600">{row.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Emergent Logic</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are a CRM-first consulting firm, not a generalist marketing agency. Implementation is what we do all day, every day.
          </p>
          <div className="space-y-3">
            {[
              'Multi-platform expertise: HubSpot, Salesforce, and Zoho — we recommend based on your business, not our vendor partnerships',
              'AI-accelerated delivery: faster audits, tighter configuration, and substantially shorter timelines than traditional agencies',
              'Senior consultants only: the person on your strategy call is the person building your CRM',
              'Fixed pricing: no hourly rates, no scope creep, no surprise invoices',
              'Training built in: we do not consider an implementation complete until your team is using the system unprompted',
              'Vendor-neutral: we have no kickback deals with any CRM platform — we recommend what fits your business',
              'Based in Surrey, BC — serving Greater Vancouver and businesses across Canada',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
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
              { q: 'Which CRM should I choose — HubSpot, Salesforce, or Zoho?', a: 'It depends on your business size, complexity, and budget. HubSpot is excellent for growing SMBs that need marketing and sales in one place. Salesforce is built for complex enterprise sales motions and heavy customization. Zoho is a strong, lower-cost alternative for cost-conscious teams. We do not earn referral fees from any of them, so the recommendation we give you is the honest one. We help you make the call during the first audit.' },
              { q: 'How long does CRM implementation actually take?', a: 'Most of our implementations are delivered in 2 to 4 weeks from kickoff to launch. Larger or more complex projects (multiple pipelines, heavy integrations, large data migrations) can take up to 6 weeks. The timeline is locked in writing before the project starts, so you know exactly when launch day is.' },
              { q: 'What does CRM implementation cost in Canada?', a: 'Our fixed-price implementations start at $1,500 CAD for straightforward HubSpot or Zoho setups. Salesforce or complex multi-pipeline projects typically range between $4,000 and $12,000. We provide a fixed quote after the initial discovery call so there are no surprises.' },
              { q: 'Will my team actually use the CRM after launch?', a: 'Adoption is the entire point. We design every implementation around the daily workflow of the people who will use it, run hands-on training with their real deals and contacts, and monitor usage for the first two weeks after launch. If a rep is not logging activity, we know within days and fix the cause.' },
              { q: 'Do you migrate data from our old CRM or spreadsheets?', a: 'Yes. Data migration is included in every implementation. We deduplicate, standardize, and validate your data before it lands in the new system. We have migrated from Salesforce, HubSpot, Zoho, Pipedrive, Monday, Excel, Google Sheets, and dozens of legacy systems.' },
              { q: 'What happens after launch?', a: 'Two weeks of post-launch support is included in every project. After that, you can either run the CRM yourself with the documentation we leave behind, or move into a monthly support plan if you want us to handle ongoing optimization, new workflows, and reporting changes.' },
              { q: 'Do you work with companies outside of British Columbia?', a: 'Yes. We are based in Surrey, BC, and we work with clients across Canada and select clients in the US. All of our work is delivered remotely, so location is not a constraint.' },
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
            <Link href="/blog/crm-consultant-vs-implementation-partner-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Consultant vs Implementation Partner</p>
              <p className="text-gray-600 text-sm">What Canadian SMBs should look for when choosing how to staff a CRM project.</p>
            </Link>
            <Link href="/blog/marketing-automation-needs-crm-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Why Marketing Automation Fails Without Cleanup First</p>
              <p className="text-gray-600 text-sm">Why most automation rollouts go sideways, and how to plan the right sequence.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services and Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/crm-implementation-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Implementation Canada</p>
              <p className="text-gray-600 text-sm">National CRM setup page for Canadian SMBs</p>
            </Link>
            <Link href="/services/hubspot-consulting" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">HubSpot Consulting</p>
              <p className="text-gray-600 text-sm">Expert HubSpot setup and optimization</p>
            </Link>
            <Link href="/services/crm-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Cleanup</p>
              <p className="text-gray-600 text-sm">Fix messy data and broken workflows</p>
            </Link>
            <Link href="/blog/salesforce-vs-hubspot-vs-zoho-canada-2026" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Comparison Guide</p>
              <p className="text-gray-600 text-sm">Salesforce vs HubSpot vs Zoho (2026)</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your CRM Working?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We will assess your current situation and tell you exactly what a proper implementation would look like for your business — no pitch, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTA ctaName="Book Free Strategy Call - Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 font-semibold px-8">
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
