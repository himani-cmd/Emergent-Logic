import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle,
  Database,
  FileCheck2,
  GitBranch,
  LockKeyhole,
  ShieldCheck,
  Shuffle,
  Workflow,
} from 'lucide-react';

export const metadata = {
  title: 'Representative Case Study: Salesforce Cleanup Before Automation',
  description:
    'A representative implementation showing how Emergent Logic audits Salesforce data, ownership, reporting, permissions, and automation before building more Flow automation.',
  alternates: {
    canonical: 'https://www.emergent-logic.ca/case-studies/salesforce-cleanup-before-automation',
  },
  openGraph: {
    title: 'Representative Case Study: Salesforce Cleanup Before Automation | Emergent Logic',
    description:
      'Salesforce automation should not be built on messy data. See the cleanup-first approach for fields, ownership, reports, duplicates, permissions, and Flow design.',
    url: 'https://www.emergent-logic.ca/case-studies/salesforce-cleanup-before-automation',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const auditAreas = [
  {
    icon: Database,
    title: 'Objects, fields, and duplicates',
    description:
      'Review leads, contacts, accounts, opportunities, custom objects, duplicate rules, required fields, retired fields, and values that no longer match the sales process.',
  },
  {
    icon: Shuffle,
    title: 'Ownership and assignment logic',
    description:
      'Check lead assignment rules, queues, territory logic, fallback owners, inactive users, account ownership, and routing exceptions before automating handoffs.',
  },
  {
    icon: Workflow,
    title: 'Automation and Flow inventory',
    description:
      'Map active Flows, legacy Workflow Rules, Process Builder logic, validation rules, approval processes, and integrations so new automation does not collide with old logic.',
  },
  {
    icon: BarChart3,
    title: 'Reports and dashboard trust',
    description:
      'Audit report types, stage definitions, close date hygiene, source fields, conversion points, and dashboard assumptions before leadership relies on automated reporting.',
  },
];

const cleanupSequence = [
  'Export and document the current Salesforce org structure before making changes',
  'Separate revenue-facing cleanup from cosmetic admin cleanup',
  'Identify risky automations, legacy rules, validation rules, and integrations',
  'Normalize lead source, status, owner, opportunity stage, and required field logic',
  'Clean duplicate records and stale fields in controlled batches',
  'Test changes in sandbox before production deployment where practical',
  'Rebuild or simplify Flow automation only after inputs are reliable',
  'Update reports and dashboards after field values and process definitions are consistent',
];

const safeguards = [
  'Sandbox-first changes where practical',
  'No new Flow automation until object and field logic is understood',
  'No blind delete of fields or values used by reports, integrations, or automations',
  'Documented change notes for every cleanup batch',
  'Fallback owner and exception handling before routing automation goes live',
  'Report validation after cleanup so dashboards do not make bad data look official',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Representative Case Study: Salesforce Cleanup Before Automation',
  description: metadata.description,
  image: 'https://www.emergent-logic.ca/og-image.png',
  author: {
    '@type': 'Organization',
    name: 'Emergent Logic',
    url: 'https://www.emergent-logic.ca/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Emergent Logic',
    url: 'https://www.emergent-logic.ca/',
  },
  mainEntityOfPage: 'https://www.emergent-logic.ca/case-studies/salesforce-cleanup-before-automation',
  datePublished: '2026-06-29',
  dateModified: '2026-06-29',
};

export default function SalesforceCleanupBeforeAutomationCaseStudy() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[
                { label: 'Case Studies', href: '/case-studies' },
                {
                  label: 'Salesforce Cleanup Before Automation',
                  href: '/case-studies/salesforce-cleanup-before-automation',
                },
              ]}
            />

            <Badge className="mb-4 bg-sky-100 text-sky-800 hover:bg-sky-100">
              Representative Implementation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Salesforce Cleanup Before Automation
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Salesforce automation is powerful, but it can make a messy org harder to manage if the foundation is not clean. This representative case study shows how we would audit and clean Salesforce before building more Flow automation.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Note: this is a method-based implementation example, not a fabricated client result. It reflects the cleanup-first approach Emergent Logic uses when evaluating Salesforce consulting and automation work.
            </p>

            <ShareButtons
              url="https://www.emergent-logic.ca/case-studies/salesforce-cleanup-before-automation"
              title="Representative Case Study: Salesforce Cleanup Before Automation"
            />

            <div className="grid md:grid-cols-3 gap-4 my-10">
              {[
                { label: 'System type', value: 'Salesforce cleanup and Flow readiness' },
                { label: 'Best fit', value: 'Teams with messy data or unreliable reporting' },
                { label: 'Core principle', value: 'Clean the inputs before automating the process' },
              ].map((item) => (
                <Card key={item.label} className="bg-gray-50">
                  <CardHeader>
                    <p className="text-sm uppercase tracking-wide text-gray-500">{item.label}</p>
                    <CardTitle className="text-lg">{item.value}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The situation</h2>
              <p>
                A sales team asks for more Salesforce automation. They want leads assigned faster, tasks created automatically, alerts sent to managers, dashboards refreshed, and handoffs made cleaner. On the surface, this sounds like a Flow project.
              </p>
              <p>
                But when the org is reviewed, the foundation is not ready. Lead status values are inconsistent, duplicate contacts exist, old fields are still used in reports, inactive users own important records, opportunity stages are interpreted differently by each rep, and existing automation is only partly documented.
              </p>

              <h2>The risk</h2>
              <p>
                Building more Flow automation on top of that foundation can make the org look more advanced while making the process less reliable. Bad inputs become faster bad outputs. A messy ownership model becomes faster misrouting. Weak reporting becomes prettier dashboards that leadership still cannot trust.
              </p>
            </div>

            <Card className="my-8 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The automation trap</h2>
                    <p className="text-gray-700">
                      If the Salesforce data model, ownership logic, and reporting definitions are already unclear, automation does not fix the problem. It usually scales the confusion.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>What we audit first</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 my-8">
              {auditAreas.map((area) => (
                <Card key={area.title} className="border shadow-sm">
                  <CardContent className="p-6">
                    <area.icon className="w-8 h-8 text-sky-700 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The cleanup-first implementation sequence</h2>
              <p>
                The right sequence is not "build the Flow first." It is audit, prioritize, clean, validate, then automate. Salesforce gives teams a lot of power, but that power needs governance before it creates leverage.
              </p>
            </div>

            <Card className="my-8 border-sky-100 bg-sky-50">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {cleanupSequence.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-800 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>What gets automated after cleanup</h2>
              <p>
                Once the data and process definitions are reliable, Salesforce Flow becomes much easier to maintain. The team can automate lead assignment, task creation, SLA reminders, quote follow-up, approval steps, lifecycle movement, renewal reminders, and reporting updates with more confidence.
              </p>
              <p>
                The key is to automate the process the business actually wants to run, not the accidental process that grew inside the org over time.
              </p>

              <h2>What we would not automate yet</h2>
              <p>
                Some requests should wait until the foundation is cleaner. For example, automated lead scoring is weak if source, industry, company size, and lifecycle status are inconsistent. Automated manager alerts are noisy if ownership and priority rules are unclear. Renewal reminders are unreliable if close dates, contract terms, and account ownership are not maintained.
              </p>
              <p>
                This is where restraint matters. A good Salesforce project should be willing to say, "not yet." The right first milestone may be field cleanup, duplicate strategy, report validation, or owner assignment rules before the team spends money on more sophisticated automation.
              </p>

              <h2>Safeguards we would include</h2>
            </div>

            <Card className="my-8 border-emerald-100 bg-emerald-50">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {safeguards.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>Why this matters for small and mid-market teams</h2>
              <p>
                Many small businesses do not need more Salesforce complexity. They need fewer unclear fields, cleaner ownership, simpler stages, better reporting definitions, and automation that a future admin can understand.
              </p>
              <p>
                This is why our <Link href="/services/salesforce-consulting" className="text-sky-700 hover:underline">Salesforce consulting</Link>, <Link href="/services/crm-cleanup" className="text-sky-700 hover:underline">CRM cleanup</Link>, and <Link href="/blog/salesforce-cleanup-before-automation" className="text-sky-700 hover:underline">Salesforce cleanup before automation</Link> guidance all point to the same principle: clean the revenue workflow before adding more automation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              {[
                { icon: FileCheck2, title: 'Cleaner admin handoff', desc: 'Future admins can understand what changed and why.' },
                { icon: GitBranch, title: 'Safer Flow design', desc: 'Automation is built against stable objects, fields, and routing rules.' },
                { icon: LockKeyhole, title: 'Better governance', desc: 'Permissions, validation, and reporting definitions are not treated as afterthoughts.' },
              ].map((item) => (
                <Card key={item.title} className="border">
                  <CardContent className="p-5">
                    <item.icon className="w-7 h-7 text-sky-700 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-sky-700 via-blue-800 to-slate-950 rounded-2xl text-white">
              <ShieldCheck className="w-10 h-10 mb-4 text-sky-100" />
              <h2 className="text-3xl font-bold mb-4">Want to automate Salesforce without scaling the mess?</h2>
              <p className="text-white/80 mb-6 max-w-2xl">
                We can audit your org, identify what needs cleanup first, and sequence the Salesforce work so automation supports the revenue process instead of complicating it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/services/salesforce-consulting">
                  <Button size="lg" className="bg-white text-sky-950 hover:bg-sky-100">
                    View Salesforce Consulting <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="bg-transparent border border-white/40 text-white hover:bg-white/10">
                    Contact Emergent Logic
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <CookieConsent />
    </main>
  );
}
