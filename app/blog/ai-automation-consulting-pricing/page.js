import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, CheckCircle, Clock, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'AI Automation Consulting Pricing | Small Business Guide',
  description: 'Learn what AI automation consulting costs for small businesses, from simple workflows to CRM-connected systems, and what changes project price.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/ai-automation-consulting-pricing' },
  openGraph: {
    title: 'AI Automation Consulting Pricing | Small Business Guide',
    description: 'A practical pricing guide for small businesses comparing simple AI workflows, CRM-connected automations, retainers, and fixed-scope projects.',
    url: 'https://www.emergent-logic.ca/blog/ai-automation-consulting-pricing',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const priceRanges = [
  {
    tier: 'Starter automation',
    range: '$300-$750',
    fit: 'One narrow workflow, such as form capture, notification, spreadsheet logging, or a simple approval step.',
  },
  {
    tier: 'Workflow build',
    range: '$1,000-$2,500',
    fit: 'A multi-step process across email, forms, calendar, CRM, Slack, Google Sheets, or n8n.',
  },
  {
    tier: 'CRM-connected automation',
    range: '$1,500-$5,000+',
    fit: 'Lead routing, CRM updates, tasks, deduplication, reporting, and follow-up workflows.',
  },
  {
    tier: 'Managed support',
    range: '$300-$1,500/mo',
    fit: 'Monitoring, fixes, prompt improvements, reporting updates, and workflow changes after launch.',
  },
];

const costDrivers = [
  'How many tools need to connect',
  'Whether CRM data is already clean',
  'How many edge cases the workflow must handle',
  'Whether a human approval step is required',
  'Whether reporting, dashboards, or attribution are included',
  'Whether the system needs ongoing monitoring after launch',
];

const examples = [
  {
    title: 'Website lead to CRM workflow',
    body: 'A website inquiry creates a CRM contact, assigns an owner, sends an alert, creates a follow-up task, and logs the source.',
  },
  {
    title: 'Email draft and approval workflow',
    body: 'An incoming inquiry is summarized, categorized, and turned into a draft response for a human to review before sending.',
  },
  {
    title: 'Appointment reminder system',
    body: 'A booking triggers reminder emails or SMS messages so leads do not forget the call, consultation, or appointment.',
  },
  {
    title: 'CRM cleanup plus automation rebuild',
    body: 'Duplicates, stages, properties, and owner fields are cleaned before workflows are rebuilt on a safer foundation.',
  },
];

export default function AiAutomationConsultingPricing() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'AI Automation Consulting Pricing', href: '/blog/ai-automation-consulting-pricing' },
            ]} />

            <Badge className="mb-4">AI Automation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Automation Consulting Pricing: What Small Businesses Pay
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 flex-wrap">
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> Pricing guide
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 9 min read
              </span>
              <span className="flex items-center gap-2">
                <Bot className="w-4 h-4" /> Small business automation
              </span>
            </div>

            <ShareButtons
              url="https://www.emergent-logic.ca/blog/ai-automation-consulting-pricing"
              title="AI Automation Consulting Pricing: What Small Businesses Pay"
            />

            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                Most small business AI automation projects fall between $300 and $5,000+, depending on whether the work is a simple workflow, a multi-step system, or a CRM-connected process.
              </p>

              <p>
                The important question is not "how much does AI cost?" The better question is: what manual work is being removed, what revenue leakage is being fixed, and how risky is the workflow if it breaks?
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-blue-900 mb-2">Short answer</h4>
                <p className="text-blue-900 mb-0">
                  A narrow automation can be a few hundred dollars. A serious lead follow-up, CRM routing, or revenue operations workflow usually needs a fixed-scope build in the $1,000-$2,500+ range.
                </p>
              </div>

              <h2>Typical AI Automation Consulting Price Ranges</h2>
              <div className="not-prose grid gap-4 my-8">
                {priceRanges.map((item) => (
                  <Card key={item.tier} className="border-gray-200">
                    <CardHeader className="pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl">{item.tier}</CardTitle>
                        <span className="text-2xl font-bold text-blue-700">{item.range}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-0">{item.fit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2>What Changes the Price?</h2>
              <p>
                The same "AI automation" label can describe very different work. A simple Google Sheets workflow is not the same as a CRM-connected automation that updates lifecycle stages, assigns sales owners, prevents duplicates, and reports on lead source.
              </p>

              <div className="space-y-4 my-8">
                {costDrivers.map((driver) => (
                  <div key={driver} className="flex items-start gap-3 bg-gray-50 border rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{driver}</span>
                  </div>
                ))}
              </div>

              <h2>Examples of Small Business Automation Projects</h2>
              <p>
                These are the kinds of workflows small teams usually ask for first because they connect directly to response time, admin work, and follow-up discipline.
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
                {examples.map((example) => (
                  <Card key={example.title} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{example.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{example.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2>Fixed Price or Hourly?</h2>
              <p>
                For small businesses, fixed-scope pricing is usually easier to approve. It gives the buyer a clear outcome, timeline, and cost. Hourly work is better when the system is unclear, the CRM is messy, or the project includes ongoing changes.
              </p>
              <p>
                A practical structure is to start with a fixed discovery or audit, then quote the build once the workflow is clear. This protects the client from open-ended billing and protects the consultant from hidden complexity.
              </p>

              <h2>Where CRM Fits Into AI Automation</h2>
              <p>
                AI automation becomes much more useful when it is connected to the customer system of record. If leads, tasks, sources, and outcomes do not reach the CRM, the automation may save time but still fail to improve sales visibility.
              </p>
              <p>
                That is why many projects eventually touch <Link href="/services/crm-integration" className="text-blue-700 hover:underline">CRM integration</Link>, <Link href="/services/lead-capture-websites" className="text-blue-700 hover:underline">lead capture websites</Link>, or <Link href="/services/ai-automation-consulting" className="text-blue-700 hover:underline">AI automation consulting</Link>. The goal is not to add more tools. The goal is to make the handoff cleaner.
              </p>

              <h2>When a Cheap Automation Is Enough</h2>
              <p>
                A low-cost automation can make sense when the process is simple, the data is clean, and the downside of a mistake is low. Examples include internal notifications, spreadsheet logging, simple reminders, and basic lead intake alerts.
              </p>
              <p>
                If the workflow touches customer communication, quoting, compliance, CRM ownership, or revenue reporting, it usually needs more careful design.
              </p>

              <h2>What to Avoid</h2>
              <ul>
                <li>Buying a chatbot before fixing lead routing</li>
                <li>Automating a broken CRM process without cleaning the data first</li>
                <li>Letting AI send customer-facing replies without review when stakes are high</li>
                <li>Building ten workflows before proving one useful workflow works</li>
                <li>Choosing tools before defining ownership, handoff, and reporting</li>
              </ul>

              <h2>How Emergent Logic Prices This Work</h2>
              <p>
                We usually recommend starting with one high-leverage workflow: a lead capture path, follow-up process, CRM update, appointment reminder, or reporting handoff. Once that is working, additional automations become easier to scope.
              </p>
              <p>
                If you are not sure where to start, our <Link href="/lead-follow-up-audit" className="text-blue-700 hover:underline">lead follow-up audit</Link> is designed to find the highest-leakage point before building anything.
              </p>

              <h2>FAQ</h2>
              <h3>Can AI automation be built without a CRM?</h3>
              <p>
                Yes. A simple workflow can use email, Google Sheets, forms, calendars, or Slack. But if the business has a sales process, a CRM usually becomes the better long-term home for leads and reporting.
              </p>

              <h3>Is n8n cheaper than Zapier?</h3>
              <p>
                It can be, especially for more complex or higher-volume workflows. The best choice depends on the tools involved, reliability needs, and who will maintain the automation after launch.
              </p>

              <h3>How long does a small automation project take?</h3>
              <p>
                A focused workflow can often be built in a few days. CRM-connected workflows usually take longer because fields, owners, stages, and edge cases need to be checked carefully.
              </p>

              <h2>Bottom Line</h2>
              <p>
                AI automation pricing depends less on the model and more on the workflow. The best projects are narrow, measurable, and tied to a real business process: faster response, cleaner routing, fewer missed leads, better reporting, or less admin work.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-blue-700 to-slate-900 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Want a practical automation estimate?</h3>
              <p className="text-white/80 mb-6">
                Tell us what manual process you want to remove. We will give you an honest read on whether it should be automated, simplified, or left alone for now.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Ask About an Automation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Related Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'AI Automation Consulting', href: '/services/ai-automation-consulting' },
                  { title: 'AI Chatbot Automation', href: '/services/ai-chatbot-automation' },
                  { title: 'Why Website Leads Need CRM Routing', href: '/blog/website-leads-to-crm' },
                  { title: 'Lead Follow-Up Audit Checklist', href: '/blog/lead-follow-up-audit-checklist' },
                ].map((post) => (
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
