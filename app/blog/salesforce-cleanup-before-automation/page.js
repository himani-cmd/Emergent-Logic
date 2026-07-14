import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, AlertTriangle, CheckCircle, Clock, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Salesforce Cleanup Before Automation',
  description: 'Before adding Salesforce Flow automation, clean up duplicate data, fields, stages, ownership rules, and reporting. A practical guide for small businesses.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/salesforce-cleanup-before-automation' },
  openGraph: {
    title: 'Why Salesforce Cleanup Matters Before Automation | Emergent Logic',
    description: 'Before adding Salesforce Flow automation, clean up duplicate data, fields, stages, ownership rules, and reporting.',
    url: 'https://www.emergent-logic.ca/blog/salesforce-cleanup-before-automation',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const cleanupItems = [
  'Duplicate leads, contacts, accounts, and opportunities',
  'Old fields nobody owns or understands',
  'Pipeline stages that do not match the real sales process',
  'Lead ownership rules that leave records sitting untouched',
  'Reports built on inconsistent data',
  'Legacy Workflow Rules or Process Builder logic that should be reviewed before moving to Flow',
];

const relatedPosts = [
  { title: 'When Small Businesses Need a Salesforce Consultant', href: '/blog/salesforce-consultant-small-business' },
  { title: 'Marketing Automation Needs CRM Cleanup First', href: '/blog/marketing-automation-needs-crm-cleanup' },
];

export default function SalesforceCleanupBeforeAutomation() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'Salesforce Cleanup Before Automation', href: '/blog/salesforce-cleanup-before-automation' },
            ]} />

            <Badge className="mb-4">CRM Cleanup</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Salesforce Cleanup Matters Before Automation
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 flex-wrap">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Canada and US remote
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 8 min read
              </span>
            </div>

            <ShareButtons
              url="https://www.emergent-logic.ca/blog/salesforce-cleanup-before-automation"
              title="Why Salesforce Cleanup Matters Before Automation"
            />

            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                Salesforce automation is powerful, but it does not fix a messy CRM. It usually makes the mess move faster.
              </p>

              <p>
                This is one of the most common patterns we see in CRM projects. A business wants better follow-up, automatic task creation, lead routing, renewal reminders, or sales alerts. The request sounds like an automation project. But once you look inside the org, the real issue is cleanup.
              </p>

              <p>
                Duplicate records, vague ownership, inconsistent stages, missing required fields, old automations, and unreliable reports all create risk. If you build Salesforce Flow automation on top of that foundation, the automation can trigger at the wrong time, assign work to the wrong person, or produce reporting nobody trusts.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> The practical rule
                </h4>
                <p className="text-red-800 mb-0">
                  If your Salesforce data is inconsistent, your automation will be inconsistent. Cleanup first, automate second.
                </p>
              </div>

              <h2>Why Automation Exposes CRM Problems</h2>
              <p>
                Manual work hides data problems because people adjust around the mess. A sales rep sees an old lead source and ignores it. A manager knows a report is imperfect and exports a spreadsheet. Someone remembers who should own a lead because the team is small.
              </p>
              <p>
                Automation removes that human workaround. Salesforce will follow the rules you give it. If those rules are based on bad fields, unclear ownership, or inconsistent stages, the result can look like a technology failure even when the platform is doing exactly what it was told to do.
              </p>

              <h2>What to Clean Before Building Salesforce Flow</h2>
              <p>
                Before building new Flow automation, review the parts of Salesforce that the automation will depend on. In most small business orgs, that means these areas:
              </p>

              <div className="space-y-4 my-8">
                {cleanupItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-gray-50 border rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h2>Lead Routing Is a Good Example</h2>
              <p>
                A small business may ask for an automation that assigns every new website lead to a sales rep. That sounds simple. But the quality of the routing depends on the quality of the underlying CRM logic.
              </p>
              <p>
                Does every lead have a source? Are territories defined clearly? Are duplicate contacts merged before assignment? Is there a fallback owner if a field is missing? Should old customers route differently from net-new prospects? Should high-value inquiries get a faster SLA?
              </p>
              <p>
                These are process questions before they are Salesforce questions. A good <Link href="/services/salesforce-consulting" className="text-blue-700 hover:underline">Salesforce consultant</Link> should help answer them before building the Flow.
              </p>
              <p>
                We also documented this approach as a <Link href="/case-studies/salesforce-cleanup-before-automation" className="text-blue-700 hover:underline">representative Salesforce cleanup pattern</Link>, showing how objects, fields, ownership, reports, permissions, and Flow readiness fit together before automation work starts.
              </p>

              <h2>Reporting Cleanup Comes Before Dashboard Automation</h2>
              <p>
                The same principle applies to dashboards. You can automate reporting, but you cannot automate trust. If opportunity stages are inconsistent or close dates are not maintained, a dashboard can become a more polished version of bad information.
              </p>
              <p>
                Before building executive reporting, clean the inputs: lifecycle stages, lead status, source fields, opportunity stages, owner fields, conversion points, and required data rules.
              </p>

              <h2>When Cleanup Becomes a Revenue Project</h2>
              <p>
                Cleanup is not just admin hygiene. It affects revenue when it improves speed-to-lead, follow-up consistency, pipeline visibility, and rep accountability.
              </p>
              <p>
                That is why our <Link href="/services/crm-cleanup" className="text-blue-700 hover:underline">CRM cleanup work</Link> is tied to outcomes like cleaner data, better follow-up, clearer reporting, and faster time-to-value. The goal is not a prettier database. The goal is a sales system your team can run.
              </p>

              <h2>How to Approach Salesforce Cleanup</h2>
              <ol>
                <li><strong>Audit the current org:</strong> review objects, fields, duplicates, reports, automations, users, and ownership rules.</li>
                <li><strong>Prioritize revenue-facing issues:</strong> focus first on leads, opportunities, follow-up, and reporting.</li>
                <li><strong>Document the target process:</strong> define what should happen before rebuilding automation.</li>
                <li><strong>Clean records and fields:</strong> merge duplicates, retire old fields, normalize values, and protect critical fields.</li>
                <li><strong>Build automation last:</strong> create Flow automation only after the inputs are reliable.</li>
              </ol>

              <h2>Bottom Line</h2>
              <p>
                Salesforce automation works best when the CRM foundation is clean. If your team is asking for more automation but your data, ownership, or reporting is already messy, pause before building another Flow.
              </p>
              <p>
                Clean the system first. Then automate the process you actually want to run.
              </p>
              <p>
                If you need to explain this sequence to a team, use our free <Link href="/resources/crm-automation-diagrams" className="text-blue-700 hover:underline">Salesforce cleanup before automation diagram</Link>.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Not sure whether to clean up or automate?</h3>
              <p className="text-white/80 mb-6">
                We can audit your CRM and give you a practical sequence: what to clean, what to automate, and what to leave alone.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                  Contact Emergent Logic <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedPosts.map((post) => (
                  <Link key={post.href} href={post.href}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
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
