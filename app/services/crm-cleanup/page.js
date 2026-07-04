import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Wrench, AlertTriangle, Database, Zap, BarChart3, Users, Trash2, Clock, DollarSign, Check, X, Search, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'CRM Cleanup Services Canada',
  description: 'Fix duplicate contacts, broken workflows, and unreliable CRM reports across HubSpot, Salesforce, and Zoho. Book a CRM cleanup review.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/crm-cleanup' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Cleanup & Data Recovery | Emergent Logic',
    description: 'AI-accelerated CRM cleanup for HubSpot, Salesforce, and Zoho. Deduplicate, restructure, and rebuild a CRM your team can actually trust.',
    url: 'https://www.emergent-logic.ca/services/crm-cleanup',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function CRMCleanup() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-emerald-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">CRM Cleanup</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your CRM Is a Mess. We Fix That.
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            Duplicate contacts, broken workflows, unreliable reports, and fields nobody uses. We audit your CRM, clean the data, rebuild the structure, and turn it back into a system your team trusts and actually uses. HubSpot, Salesforce, and Zoho — delivered in 1 to 2 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a Free Strategy Call" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100 font-semibold px-8">
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
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-300" /> 1 to 2 week delivery</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-300" /> Fixed pricing from $1,000</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-300" /> Full audit report included</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-300" /> Maintenance playbook delivered</div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Messy CRM Problem</h2>
          <p className="text-lg text-gray-600 mb-4">
            Your CRM started clean. Contacts were organized, pipelines made sense, and reports showed real numbers. Then reality happened. Contacts were imported from multiple sources without deduplication. Fields were created and abandoned. Workflows were built on top of broken logic. New reps added properties their manager never approved. Data got stale.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Now your sales team does not trust the data. Your reports show numbers that do not match reality. Your marketing campaigns go to the wrong segments. The same person gets emailed three times because they exist three times. Your CRM admin spends half their week fixing things and the other half answering "why does this report say that?"
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Every time someone suggests "just cleaning it up," the task feels so overwhelming that nothing gets done. So the data keeps getting worse, and the gap between what your CRM says and what is actually true keeps widening.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We have seen this pattern many times. It is fixable. And it is faster than you think — because we use AI to identify and resolve issues that would take a human weeks to find manually.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: AlertTriangle, title: 'Duplicate Contacts', desc: 'The same person appears 3, 5, or 10 times with slight variations. Every duplicate inflates your metrics, confuses your sales team, and wastes your email credits — and HubSpot charges you per contact.', color: 'red' },
              { icon: Database, title: 'Bad Data Quality', desc: 'Missing fields, outdated information, wrong formats, incomplete records, invalid emails. Your CRM is only as useful as the data inside it — and right now, your data is unreliable.', color: 'orange' },
              { icon: Zap, title: 'Broken Workflows', desc: 'Automations that trigger at the wrong time, send to the wrong people, or do not fire at all. Workflows built on outdated logic that nobody remembers creating, layered on top of each other.', color: 'yellow' },
              { icon: BarChart3, title: 'Unreliable Reports', desc: 'Dashboards that show numbers nobody trusts. Pipeline forecasts that are well off the mark. Revenue reports that do not match your accounting. If you cannot trust the data, you cannot make decisions.', color: 'purple' },
            ].map((item, i) => {
              const colorMap = {
                red: 'bg-red-50 border-red-200 text-red-600',
                orange: 'bg-orange-50 border-orange-200 text-orange-600',
                yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600',
                purple: 'bg-purple-50 border-purple-200 text-purple-600',
              };
              return (
                <div key={i} className={`${colorMap[item.color].split(' ').slice(0,2).join(' ')} border rounded-xl p-6`}>
                  <item.icon className={`w-8 h-8 ${colorMap[item.color].split(' ')[2]} mb-3`} />
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Symptoms checklist */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Does This Sound Like Your CRM?</h2>
          <p className="text-lg text-gray-600 mb-8">
            If you can tick three or more of these boxes, your CRM is overdue for a cleanup.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Sales reps maintain their own spreadsheet because they do not trust the CRM',
              'You have more custom properties than active deals',
              'Reports show different numbers depending on who runs them',
              'You email the same contact twice because they exist twice',
              'Workflows fire and you cannot remember why or who built them',
              'Pipeline forecasts are off by 30 percent or more',
              'New hires are confused on day one because nothing is documented',
              'Your contact count is suspiciously high for the size of your business',
              'Lifecycle stages do not match what is actually happening',
              'Marketing emails go to bad addresses, costing you sender reputation',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What CRM Cleanup Includes</h2>
          <p className="text-lg text-gray-600 mb-8">
            This is not a surface-level cleanup. We go deep into your CRM and fix everything — data, structure, automation, and reporting — so the system is trustworthy again.
          </p>
          <div className="space-y-4">
            {[
              { icon: Search, title: 'Comprehensive Data Audit', desc: 'We analyze every contact, company, and deal in your CRM using AI. Duplicates, missing fields, outdated records, invalid emails, orphaned contacts, broken associations — we identify everything before touching a single record. You see the audit report before any cleanup begins.' },
              { icon: Users, title: 'Deduplication & Merge', desc: 'We identify and merge duplicate records using fuzzy matching that catches variations like "John Smith" at jsmith@acme.com and "J. Smith" at john@acme.com. Activity history, notes, deals, files, and associations are preserved on the surviving record.' },
              { icon: RefreshCw, title: 'Data Standardization', desc: 'Phone number formats, address formatting, name capitalization, company name consistency, country codes, lifecycle stage alignment, and deal stage alignment. Every field standardized to a clean, consistent format that reports can actually rely on.' },
              { icon: Trash2, title: 'Property Cleanup', desc: 'Remove unused custom properties, consolidate overlapping fields, fix dropdown values, retire abandoned fields, and reorganize property groups. Your CRM should only have fields that serve a purpose, organized in a way that makes sense to whoever uses it next.' },
              { icon: Wrench, title: 'Workflow Repair', desc: 'Audit every active and inactive workflow. Fix broken triggers, update outdated conditions, remove conflicting automations, document what each workflow does, and rebuild the ones that no longer align with your sales process. We turn a tangled mess into a clean automation map.' },
              { icon: BarChart3, title: 'Report Rebuilding', desc: 'Replace unreliable reports with dashboards built on clean data. Pipeline accuracy, revenue forecasting, rep activity, marketing attribution, and conversion funnels — rebuilt from scratch where needed and verified against your accounting and sales numbers.' },
              { icon: CheckCircle, title: 'Maintenance Playbook', desc: 'You receive a written playbook covering data hygiene rules, deduplication routines, property review cadences, and admin responsibilities. The goal is that your CRM stays clean for the long term, not just for the week we hand it back.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border shadow-sm">
                <div className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
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

      {/* AI Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The AI Cleanup Advantage</h2>
          <p className="text-lg text-gray-600 mb-4">
            Traditional CRM cleanup is manual, tedious, and error-prone. A human reviewing 10,000 contacts one by one takes weeks. By the time they finish, the data they cleaned at the beginning is already drifting again. Our AI-powered approach does the same work in hours, not weeks.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We use AI to scan your entire database, identify patterns, flag duplicates with fuzzy matching (catching variations like "John Smith" and "J. Smith" at the same company), detect invalid data, surface broken workflow logic, and prioritize issues by business impact. The result is a cleanup that is faster, more thorough, and more accurate than manual methods — and you get a written audit report you can share with leadership before any changes are made.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { value: 'Hours', label: 'Not weeks of manual review' },
              { value: 'High', label: 'Fidelity duplicate detection with fuzzy matching' },
              { value: 'Logged', label: 'Every change tracked and reversible' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center border border-emerald-200">
                <div className="text-3xl font-bold text-emerald-700 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Cleanup Process</h2>
          <p className="text-lg text-gray-600 mb-8">
            Three phases, fully documented. You see the audit before any changes happen. Nothing is deleted without confirmation.
          </p>
          <div className="space-y-8">
            {[
              { step: '01', title: 'AI-Powered Audit', desc: 'We run a comprehensive AI audit on your entire CRM. Every contact, deal, workflow, property, and report is analyzed. You receive a written report showing exactly what is broken and what needs to be fixed, prioritized by business impact. Nothing changes in your CRM until you approve the cleanup plan.' },
              { step: '02', title: 'Clean & Restructure', desc: 'We deduplicate, standardize, and clean your data. Properties are reorganized and deprecated where needed. Workflows are repaired or rebuilt. Pipelines are restructured to match your current sales process. Every change is logged so you can see exactly what happened.' },
              { step: '03', title: 'Verify & Train', desc: 'We verify data integrity post-cleanup, rebuild dashboards on clean data, and train your team on data hygiene best practices. You get a written maintenance playbook to keep your CRM clean going forward — including admin responsibilities, review cadences, and import standards.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
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
            CRM cleanup is one of the highest-ROI projects we run. The investment usually pays back within the first month through reduced CRM seat costs, fewer wasted email sends, and a sales team that trusts its own pipeline again.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <Clock className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1 to 2 Weeks</h3>
              <p className="text-gray-600">Most CRM cleanups are completed in 1 to 2 weeks, depending on database size, complexity, and how many workflows need rebuilding.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <DollarSign className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">From $1,000 CAD</h3>
              <p className="text-gray-600">Fixed pricing based on database size and scope of work. Most cleanups land between $1,500 and $5,000. No hourly billing, no surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Emergent Logic for CRM Cleanup</h2>
          <p className="text-lg text-gray-600 mb-8">
            Cleanup is not glamorous, but it is the highest-leverage thing most teams can do for their CRM. We treat it that way.
          </p>
          <div className="space-y-3">
            {[
              'AI-accelerated audit catches issues that manual reviews miss',
              'Full audit report delivered before any changes are made',
              'Every change logged and reversible',
              'Multi-platform: HubSpot, Salesforce, Zoho — same rigorous process',
              'Maintenance playbook included so your CRM stays clean',
              'Fixed pricing, no hourly billing',
              'Senior consultants only — no junior offshoring of your data',
              'Based in Surrey, BC — serving Greater Vancouver and businesses across Canada',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
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
              { q: 'Will I lose any data during cleanup?', a: 'No. Every change is logged, and merges preserve activity history, notes, deals, files, and associations on the surviving record. We also create a backup before the cleanup begins. We have never lost a record on a cleanup project.' },
              { q: 'How big does my database need to be?', a: 'Cleanup makes sense for any database with more than a few thousand records, or any database where the data quality has eroded enough that the team has stopped trusting it. We have run cleanups on databases ranging from 5,000 to 500,000 records.' },
              { q: 'Can you do a cleanup without rebuilding my workflows?', a: 'Yes. If you only want a data cleanup (deduplication and standardization) without touching workflows or reporting, we offer a stripped-down scope at a lower fixed price. Most teams choose the full cleanup because the workflow and reporting issues are usually the root cause of the data drift in the first place.' },
              { q: 'How often should we do a CRM cleanup?', a: 'A full cleanup once every 18 to 24 months is reasonable for most teams. Between cleanups, the maintenance playbook we deliver should keep your data healthy with weekly admin checks and quarterly reviews.' },
              { q: 'Do you train our team to maintain the CRM?', a: 'Yes. The maintenance playbook includes a training session for your CRM admin and a written guide for ongoing data hygiene. The goal is that you do not need to call us back in 12 months for the same problem.' },
              { q: 'What CRMs do you clean up?', a: 'HubSpot, Salesforce, and Zoho — these are our primary platforms. We have also done cleanups on Pipedrive and Monday CRM. If you are on another platform, ask us during the discovery call.' },
              { q: 'How is this different from just hiring a freelancer to dedupe my contacts?', a: 'A freelancer can dedupe contacts. We do that and also fix the workflows, properties, pipelines, and reports that caused the data to get messy in the first place. Without addressing the root causes, the data drifts back within months. Our scope is structural cleanup, not surface-level cleanup.' },
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/blog/marketing-automation-needs-crm-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Why Marketing Automation Fails Without Cleanup First</p>
              <p className="text-gray-600 text-sm">The five cleanup gaps that sink automation, and how to know if your data is ready.</p>
            </Link>
            <Link href="/blog/why-hubspot-workflows-break" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Why HubSpot Workflows Break</p>
              <p className="text-gray-600 text-sm">Why workflow issues often trace back to CRM data, lifecycle stages, and ownership rules.</p>
            </Link>
            <Link href="/blog/salesforce-cleanup-before-automation" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Why Salesforce Cleanup Matters Before Automation</p>
              <p className="text-gray-600 text-sm">Why Flow automation works better after records, stages, ownership, and reporting are cleaned up.</p>
            </Link>
            <Link href="/blog/property-management-lead-follow-up-crm" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Property Management Lead Follow-Up</p>
              <p className="text-gray-600 text-sm">How owner inquiries leak when CRM routing, ownership, and follow-up are unclear.</p>
            </Link>
            <Link href="/blog/crm-automation-for-immigration-consultants" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Automation for Immigration Consultants</p>
              <p className="text-gray-600 text-sm">How intake gaps appear when forms, inboxes, calls, and WhatsApp are not routed clearly.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services and Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/crm-cleanup-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Cleanup Canada</p>
              <p className="text-gray-600 text-sm">National cleanup page for HubSpot, Salesforce, and Zoho</p>
            </Link>
            <Link href="/services/crm-implementation" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Implementation</p>
              <p className="text-gray-600 text-sm">Full CRM setup from scratch</p>
            </Link>
            <Link href="/services/hubspot-consulting" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">HubSpot Consulting</p>
              <p className="text-gray-600 text-sm">Expert HubSpot setup and optimization</p>
            </Link>
            <Link href="/blog/crm-pipeda-data-privacy-canada" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM and PIPEDA</p>
              <p className="text-gray-600 text-sm">Privacy compliance for Canadian CRMs</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stop Working Around a Broken CRM</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free CRM audit. We will scan your database, identify every issue, and tell you exactly what it would take to fix it. No obligation, no pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTA ctaName="Book a Free Strategy Call - Cleanup Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100 font-semibold px-8">
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
