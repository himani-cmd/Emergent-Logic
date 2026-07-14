import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Database, Clock, DollarSign, Users, Zap, ShieldCheck, TrendingUp, Building2, Briefcase, Stethoscope, Hammer, GraduationCap, ShoppingBag, X, Check, MapPin } from 'lucide-react';

export const metadata = {
  title: 'CRM Implementation Services Canada',
  description: 'CRM implementation for HubSpot, Salesforce, and Zoho: pipelines, automation, dashboards, migration, and training for growing teams.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/crm-implementation' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Implementation Services | Emergent Logic',
    description: 'CRM implementation planning for Canadian businesses using HubSpot, Salesforce, and Zoho, with written scope and controlled delivery.',
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
            CRM Implementation Built Around Your Sales Process
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            We scope HubSpot, Salesforce, and Zoho implementations for Canadian businesses around the sales process, data, reporting, automation, and training requirements. Timing is confirmed after discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a CRM Consultation" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 font-semibold px-8">
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
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-violet-300" /> Scope-based delivery plan</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-violet-300" /> Clear scope before build</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-violet-300" /> HubSpot, Salesforce, or Zoho</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-violet-300" /> Direct delivery, no hidden handoff</div>
          </div>
        </div>
      </section>

      {/* What Is CRM Implementation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Is CRM Implementation?</h2>
          <p className="text-lg text-gray-600 mb-4">
            CRM implementation is the process of configuring a customer relationship management system around the way a business sells and follows up. It can include pipelines, controlled automation, useful dashboards, and migration procedures with backups, test imports, validation, rollback, and approval.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            CRM implementation affects whether ownership, follow-up, reporting, and exceptions are visible to the team. The work starts by documenting the operating process, then configuring and testing the approved system against that process.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            We offer HubSpot, Salesforce, and Zoho implementation for growing businesses across Canada. Each proposal maps the CRM to the sales process, team structure, scope, price, and delivery plan before work starts.
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
            The service is designed for founders, sales leaders, and operations leads at growing Canadian companies. If you recognize these scenarios, an implementation review is a practical next step.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'New CRM buyers', desc: 'You just purchased HubSpot, Salesforce, or Zoho and want it set up properly from day one. You do not want to spend three months figuring it out yourself, and you do not want to waste your subscription paying for software your team is not actually using.' },
              { title: 'Scaling sales teams', desc: 'Your team is growing past five reps and spreadsheets are no longer cutting it. You need a system that gives every rep the same playbook, lets your sales leader forecast accurately, and shows leadership where revenue is actually coming from.' },
              { title: 'Failed or stalled implementations', desc: 'You already tried setting up your CRM — maybe in-house, maybe with a freelancer — and it stalled. Your data is messy, your team is frustrated, half the workflows are broken. You need someone to take it from where it is and finish the job.' },
              { title: 'CRM migrations and switches', desc: 'You are moving from one CRM to another or consolidating multiple tools. You need a controlled plan for backups, field mapping, test imports, integration dependencies, validation, rollback, and final approval.' },
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

      {/* Local buyer intent */}
      <section className="py-20 bg-white border-y border-violet-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" /> Local and remote CRM consulting
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Searching for a CRM Consultant Near You?
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            When a business searches for a <Link href="/blog/crm-consultant-near-me" className="text-violet-700 hover:underline font-medium">CRM consultant near me</Link>, the real need is usually not geography. It is trust, direct access, and someone who can understand the sales process without turning discovery into an open-ended software exercise.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We are based in Surrey, BC and support businesses across Greater Vancouver, Canada, and remote North American teams. For local companies in <Link href="/crm-consultant-langley" className="text-violet-700 hover:underline font-medium">Langley</Link>, <Link href="/crm-consultant-coquitlam" className="text-violet-700 hover:underline font-medium">Coquitlam</Link>, Abbotsford, <Link href="/crm-consultant-vancouver" className="text-violet-700 hover:underline font-medium">Vancouver</Link>, Burnaby, and Surrey, most CRM work can be delivered quickly over calls and shared screens while still keeping local context.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Local context', desc: 'Canadian SMB workflows, service-area sales motions, PIPEDA-aware data handling, and Greater Vancouver operating realities.' },
              { title: 'Remote delivery', desc: 'CRM audits, pipeline design, workflow setup, dashboards, migration, and training can all happen without slowing your team down.' },
              { title: 'Direct execution', desc: 'The people diagnosing the system remain accountable through configuration, testing, and handoff.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border bg-violet-50/50 p-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry-Specific CRM Requirements</h2>
          <p className="text-lg text-gray-600 mb-8">
            Each sector has a different pipeline shape, compliance context, and reporting need. The implementation starts by mapping those requirements instead of forcing every business into one template.
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
            Common CRM rollout risks include weak process mapping, dirty source data, unclear ownership, limited training, and reporting added too late. The delivery plan addresses these risks before build work starts.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Starting with features instead of process', desc: 'Configuring software before mapping the sales process can produce a CRM that does not match daily work. Process definitions should come before fields, stages, and automation.' },
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
            The modules below can be included in a CRM implementation. The written proposal confirms exactly which modules, dependencies, and acceptance criteria are in scope.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Database, title: 'Pipeline Configuration', desc: 'Custom deal stages, pipeline views, and deal properties that match your exact sales process. Multiple pipelines for different products or services if needed. Win probability, forecasting, and stage entry/exit criteria built in.' },
              { icon: Users, title: 'Contact & Company Setup', desc: 'Custom properties, lifecycle stages, lead status definitions, and segmentation logic. Account hierarchies for businesses that sell into multi-location or parent-subsidiary structures. Contacts organized the way your team actually thinks about them.' },
              { icon: Zap, title: 'Workflow Automation', desc: 'Lead assignment rules, follow-up sequences, deal-stage automation, internal notifications, and task creation. High-impact workflows remain subject to testing and approval.' },
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
            The standard proposal uses three controlled phases. The delivery plan is confirmed after data, integrations, stakeholder availability, testing, and acceptance criteria are clear.
          </p>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Audit & Scope', desc: 'We map the sales process, inspect the available data, assess the stack, and use AI-assisted checks to surface patterns and quality risks. You receive prioritized recommendations, dependencies, approval boundaries, and a written implementation plan.' },
              { step: '02', title: 'Build & Test', desc: 'Approved pipelines, properties, automation, dashboards, templates, integrations, and migration steps are configured and tested. Production changes follow the agreed validation and acceptance process.' },
              { step: '03', title: 'Launch & Handoff', desc: 'Role-based training, documentation, launch support, and any post-launch monitoring included in the proposal are completed before handoff.' },
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

      {/* Scope and delivery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scope and Delivery Plan</h2>
          <p className="text-lg text-gray-600 mb-8">
            Timing and commercial terms depend on the agreed scope. The proposal documents phases, dependencies, approval points, acceptance checks, and change control.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm">
              <Clock className="w-10 h-10 text-violet-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Timing After Discovery</h3>
              <p className="text-gray-600">The delivery plan is confirmed after the data, integrations, stakeholder availability, testing, migration risk, and acceptance requirements are understood.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm">
              <DollarSign className="w-10 h-10 text-violet-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Written Commercial Proposal</h3>
              <p className="text-gray-600">The proposal defines the commercial terms, scope, exclusions, dependencies, and acceptance criteria. Requested changes are discussed and approved before related work begins.</p>
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
                  { feature: 'Timeline', us: 'Written delivery plan', f: 'Varies by provider', a: 'Varies by scope' },
                  { feature: 'Pricing model', us: 'Scope-based fixed price', f: 'Often hourly or fixed', a: 'Often project + retainer' },
                  { feature: 'Delivery access', us: 'Direct team access', f: 'Usually direct', a: 'Often account-team model' },
                  { feature: 'Platform stance', us: 'Cross-platform fit review', f: 'Varies', a: 'May reflect partnerships' },
                  { feature: 'Training', us: 'Included in written scope', f: 'Varies', a: 'May be separate scope' },
                  { feature: 'Post-launch support', us: 'Defined in proposal', f: 'Varies', a: 'Often contracted support' },
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
            Emergent Logic is focused on CRM implementation, cleanup, reporting, and guarded automation rather than general marketing services.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            For local teams comparing options, we also support nearby businesses looking for a <Link href="/crm-consultant-langley" className="text-violet-700 font-medium hover:text-violet-900 underline underline-offset-4">CRM consultant in Langley</Link>, Surrey, Coquitlam, Abbotsford, and the wider Greater Vancouver region.
          </p>
          <div className="space-y-3">
            {[
              'Multi-platform expertise: HubSpot, Salesforce, and Zoho — we recommend based on your business, not our vendor partnerships',
              'AI-assisted delivery: structured audits, documentation, and QA with human approval for business decisions and production changes',
              'Direct delivery: the people diagnosing the system stay accountable through build and handoff',
              'Clear commercial terms: the proposal lists scope, exclusions, acceptance criteria, and price',
              'Training and documented handoff are included in the agreed implementation scope',
              'Cross-platform fit review with relevant partner relationships disclosed',
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
              { q: 'Which CRM should I choose — HubSpot, Salesforce, or Zoho?', a: 'It depends on process complexity, administration capacity, data, integrations, reporting, and budget. Discovery compares the supported options and discloses relevant partner relationships before a recommendation is made.' },
              { q: 'How long does CRM implementation actually take?', a: 'Timing depends on the number of pipelines, integrations, migration complexity, stakeholder availability, testing, and acceptance criteria. The proposed delivery plan and dependencies are documented before work starts.' },
              { q: 'What does CRM implementation cost in Canada?', a: 'Pricing is confirmed after discovery. The written proposal defines the deliverables, exclusions, dependencies, approval points, and commercial terms before work begins.' },
              { q: 'Will my team actually use the CRM after launch?', a: 'No consultant can guarantee adoption. The implementation is designed around daily user workflows and can include role-based training, usage checks, and a documented adoption plan to reduce avoidable friction.' },
              { q: 'Do you migrate data from our old CRM or spreadsheets?', a: 'Data migration can be included when scoped. The plan covers export, field mapping, deduplication, validation, test imports, rollback, and final approval before production migration.' },
              { q: 'What happens after launch?', a: 'The proposal defines any post-launch support, monitoring, documentation, and training included in the engagement. Ongoing administration or additional changes are scoped separately when needed.' },
              { q: 'Do you work with companies outside of British Columbia?', a: 'Yes. Emergent Logic is based in Surrey, BC, and offers remote delivery across Canada and for selected US engagements when platform, scope, and compliance requirements fit.' },
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
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Link href="/blog/crm-consultant-vs-implementation-partner-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Consultant vs Implementation Partner</p>
              <p className="text-gray-600 text-sm">What Canadian SMBs should look for when choosing how to staff a CRM project.</p>
            </Link>
            <Link href="/blog/marketing-automation-needs-crm-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Why Marketing Automation Fails Without Cleanup First</p>
              <p className="text-gray-600 text-sm">Why most automation rollouts go sideways, and how to plan the right sequence.</p>
            </Link>
            <Link href="/blog/property-management-lead-follow-up-crm" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Property Management Lead Follow-Up</p>
              <p className="text-gray-600 text-sm">A vertical-specific example of how CRM routing protects new revenue opportunities.</p>
            </Link>
            <Link href="/blog/real-estate-lead-follow-up-crm" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Real Estate Lead Follow-Up</p>
              <p className="text-gray-600 text-sm">How buyer and seller inquiries need clear CRM routing and ownership.</p>
            </Link>
            <Link href="/case-studies/real-estate-lead-routing-long-cycle-nurture" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Real Estate Routing Implementation Pattern</p>
              <p className="text-gray-600 text-sm">A practical pattern for buyer, seller, valuation, referral, and long-cycle nurture workflows.</p>
            </Link>
            <Link href="/blog/crm-automation-for-immigration-consultants" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Automation for Immigration Consultants</p>
              <p className="text-gray-600 text-sm">A vertical-specific example of how CRM intake protects consultation opportunities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services and Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Link href="/crm-implementation-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Implementation Canada</p>
              <p className="text-gray-600 text-sm">National CRM setup page for Canadian SMBs</p>
            </Link>
            <Link href="/crm-consultant-langley" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Consultant Langley</p>
              <p className="text-gray-600 text-sm">Local CRM setup and cleanup support for Langley teams</p>
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
            <TrackedCTA ctaName="Book a CRM Consultation - Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 font-semibold px-8">
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
