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
            Turn a Messy CRM Into a Controlled Cleanup Plan
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            Duplicate contacts, broken workflows, unreliable reports, and fields nobody uses. We audit the CRM, document the risks, and complete approved cleanup work in controlled steps. Timing is confirmed after discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a CRM Consultation" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100 font-semibold px-8">
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
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-300" /> Read-only assessment first</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-300" /> Written proposal after discovery</div>
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
            This pattern is common across public CRM work requests and it is fixable. AI-assisted analysis can surface duplicate, field, workflow, and reporting issues efficiently, while a human still approves every high-impact change.
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
            If several of these signals are present, a structured audit can show whether cleanup is worth prioritizing.
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
            The scope can cover data, structure, automation, and reporting, but only the approved records, fields, workflows, and dashboards are changed.
          </p>
          <div className="space-y-4">
            {[
              { icon: Search, title: 'Structured Data Audit', desc: 'AI-assisted checks review the agreed contact, company, and deal scope for duplicates, missing fields, stale values, invalid emails, orphaned records, and broken associations. Findings and limitations are documented before cleanup begins.' },
              { icon: Users, title: 'Deduplication & Merge', desc: 'Potential duplicates are identified with deterministic and fuzzy rules, reviewed in samples, and merged only after backup and approval. Preservation checks are documented for the fields, activities, deals, files, and associations supported by the platform.' },
              { icon: RefreshCw, title: 'Data Standardization', desc: 'Approved fields can be standardized for phone, address, name, company, country, lifecycle, and deal-stage formats. Validation rules and exceptions are documented before bulk updates.' },
              { icon: Trash2, title: 'Property Cleanup', desc: 'Remove unused custom properties, consolidate overlapping fields, fix dropdown values, retire abandoned fields, and reorganize property groups. Your CRM should only have fields that serve a purpose, organized in a way that makes sense to whoever uses it next.' },
              { icon: Wrench, title: 'Workflow Repair', desc: 'The agreed workflow inventory is mapped for triggers, conditions, suppression, conflicts, ownership, and failure handling. Approved repairs are tested before production activation.' },
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

      {/* AI-assisted review */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">AI-Assisted, Human-Controlled Review</h2>
          <p className="text-lg text-gray-600 mb-4">
            Large datasets are difficult to review record by record. AI-assisted checks can group patterns, propose duplicate candidates, and flag anomalies so a human can review the highest-risk areas first.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            The approved dataset can be checked for duplicate patterns, invalid values, inconsistent fields, and workflow risks. AI output is treated as a review aid, not permission to change production data; findings, samples, limitations, and approval decisions are recorded in the audit.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { value: 'Scoped', label: 'Only approved data and automation reviewed' },
              { value: 'Reviewed', label: 'Human approval before high-impact changes' },
              { value: 'Logged', label: 'Change and rollback approach documented' },
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
              { step: '01', title: 'Audit & Risk Map', desc: 'We review the agreed CRM scope and deliver a written issue map with samples, limitations, priorities, and recommended controls. Nothing changes in production until the cleanup plan is approved.' },
              { step: '02', title: 'Clean & Restructure', desc: 'Approved records, properties, workflows, pipelines, and reports are changed in controlled batches. Each batch follows the documented backup, test, validation, and rollback approach.' },
              { step: '03', title: 'Verify & Train', desc: 'Post-change validation, dashboard checks, role-based training, and any maintenance playbook included in the proposal are completed before handoff.' },
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

      {/* Scope */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scope and Delivery Plan</h2>
          <p className="text-lg text-gray-600 mb-8">
            CRM cleanup can reduce wasted sends, duplicate records, manual reconciliation, and reporting disputes. The business case depends on database size, platform costs, workflow complexity, and the value of missed follow-up.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <Clock className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Timing After Assessment</h3>
              <p className="text-gray-600">The delivery plan is confirmed after database size, data quality, integrations, workflow risk, backups, testing, and approval requirements are understood.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <DollarSign className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Written Commercial Proposal</h3>
              <p className="text-gray-600">The proposal confirms the approved records and workflows, exclusions, dependencies, rollback approach, acceptance checks, and commercial terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Emergent Logic for CRM Cleanup</h2>
          <p className="text-lg text-gray-600 mb-8">
            Cleanup should make the system easier to trust without creating new data, automation, or access risks.
          </p>
          <div className="space-y-3">
            {[
              'AI-assisted checks support pattern finding without replacing human approval',
              'Written findings and limitations delivered before production changes',
              'Changes logged with a platform-appropriate rollback approach',
              'HubSpot, Salesforce, and Zoho fit confirmed before access is requested',
              'Maintenance responsibilities documented when included in scope',
              'Scope and commercial terms confirmed before production changes',
              'Direct access to the people auditing, changing, and verifying your data',
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
              { q: 'Will I lose any data during cleanup?', a: 'Cleanup is designed to minimize that risk. We agree on backup, rollback, merge, test, and approval procedures before changing production data. No deletion or irreversible merge is performed without written confirmation.' },
              { q: 'How big does my database need to be?', a: 'Database size is only one factor. Cleanup is worth considering when duplicate records, missing owners, inconsistent fields, or unreliable reports are affecting follow-up and decision-making.' },
              { q: 'Can you do a cleanup without rebuilding my workflows?', a: 'Yes. A data-only scope can cover approved deduplication and standardization without changing workflows or reports. Discovery determines whether automation is contributing to the data problem, but any additional work requires approval.' },
              { q: 'How often should we do a CRM cleanup?', a: 'The review cadence depends on import volume, integrations, team changes, and governance. The maintenance plan can define weekly admin checks, quarterly reviews, and thresholds for a deeper audit.' },
              { q: 'Do you train our team to maintain the CRM?', a: 'Training and a written data-hygiene guide can be included for the CRM owner or admin. The proposal defines the audience, materials, and maintenance responsibilities.' },
              { q: 'What CRMs do you clean up?', a: 'HubSpot, Salesforce, and Zoho are the primary platforms offered. If you use another CRM, we will confirm fit during discovery rather than claim support we cannot verify.' },
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
            Book a free CRM audit to review the visible symptoms, likely risks, and the information needed for a controlled cleanup plan. No production data is changed during discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTA ctaName="Book a CRM Consultation - Cleanup Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100 font-semibold px-8">
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
