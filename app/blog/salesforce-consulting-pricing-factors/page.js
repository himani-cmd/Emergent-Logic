import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, DollarSign, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Salesforce Consulting Pricing',
  description: 'Understand what affects Salesforce consulting cost for small businesses, from admin support and cleanup to automation, reporting, and integrations.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/salesforce-consulting-pricing-factors' },
  openGraph: {
    title: 'Salesforce Consulting Pricing Factors | SMB Guide',
    description: 'A practical guide to the factors that affect Salesforce consulting cost: cleanup, admin support, automation, reporting, integrations, and risk.',
    url: 'https://www.emergent-logic.ca/blog/salesforce-consulting-pricing-factors',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const factors = [
  'How much cleanup is needed before new work starts',
  'Whether the project touches Sales Cloud, Service Cloud, Experience Cloud, or third-party apps',
  'How many objects, fields, flows, reports, and users are involved',
  'Whether the business needs admin support, consulting judgment, or both',
  'How much testing and rollback planning is required',
  'Whether integrations or data migration are part of the scope',
];

const projectTypes = [
  {
    title: 'Admin support',
    scope: 'Ongoing operating support',
    body: 'Useful for ongoing changes, user support, reports, permissions, fields, and light automation maintenance.',
  },
  {
    title: 'Cleanup project',
    scope: 'Bounded remediation',
    body: 'Useful when duplicates, old fields, unclear stages, and messy reports are making the org hard to trust.',
  },
  {
    title: 'Automation or Flow rebuild',
    scope: 'Controlled automation change',
    body: 'Needed when old automations are brittle, undocumented, or risky to change without careful testing.',
  },
  {
    title: 'Implementation or integration',
    scope: 'Cross-system delivery',
    body: 'Usually includes process design, fields, objects, permissions, automation, reporting, data, and handoff.',
  },
];

export default function SalesforceConsultingPricingFactors() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'Salesforce Consulting Pricing Factors', href: '/blog/salesforce-consulting-pricing-factors' },
            ]} />

            <Badge className="mb-4">Salesforce Consulting</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Salesforce Consulting Pricing Factors for Small Businesses
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 flex-wrap">
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> Pricing factors
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 8 min read
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Safer Salesforce changes
              </span>
            </div>

            <ShareButtons
              url="https://www.emergent-logic.ca/blog/salesforce-consulting-pricing-factors"
              title="Salesforce Consulting Pricing Factors for Small Businesses"
            />

            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                Salesforce consulting cost depends on risk, complexity, and the state of the org. Small admin tasks may be manageable on a retainer, while cleanup, Flow rebuilds, integrations, and implementations need clearer project scope.
              </p>

              <p>
                The mistake many small businesses make is asking for "a Salesforce expert" without separating admin support from consulting work. Admin support keeps the system running. Consulting work decides how the system should be structured.
              </p>

              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-indigo-900 mb-2">Short answer</h4>
                <p className="text-indigo-900 mb-0">
                  A responsible estimate follows discovery. Ongoing administration, cleanup, automation rebuilds, and integrations carry different access, testing, governance, and handoff requirements.
                </p>
              </div>

              <h2>Common Salesforce Engagement Shapes</h2>
              <div className="not-prose grid gap-4 my-8">
                {projectTypes.map((project) => (
                  <Card key={project.title}>
                    <CardHeader className="pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <span className="text-lg font-bold text-indigo-700">{project.scope}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-0">{project.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2>What Affects Salesforce Consulting Cost?</h2>
              <p>
                Salesforce projects become more expensive when the work touches core data, existing automation, reporting, permissions, or integrations. That is because a small change can affect sales users, service users, dashboards, and connected systems.
              </p>

              <div className="space-y-4 my-8">
                {factors.map((factor) => (
                  <div key={factor} className="flex items-start gap-3 bg-gray-50 border rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>

              <h2>Cleanup Before Automation</h2>
              <p>
                If the org already has messy fields, duplicate records, unclear stages, and old automation, cleanup should usually happen before major new work. Otherwise, the new automation inherits the same issues.
              </p>
              <p>
                We explain this in more detail in <Link href="/blog/salesforce-cleanup-before-automation" className="text-indigo-700 hover:underline">why Salesforce cleanup matters before automation</Link>.
              </p>

              <h2>Admin Support vs Consultant</h2>
              <p>
                A Salesforce admin is usually best for known tasks: user access, reports, fields, page layouts, simple Flow updates, list views, and maintenance. A consultant is useful when the business needs structure, tradeoffs, migration planning, integration decisions, or a safer rebuild.
              </p>
              <p>
                If you are unsure which one you need, start with <Link href="/blog/salesforce-admin-vs-consultant-small-business" className="text-indigo-700 hover:underline">Salesforce admin vs consultant for small businesses</Link>.
              </p>

              <h2>How to Control Cost</h2>
              <ul>
                <li>Start with a narrow audit or admin support review</li>
                <li>Document the current process before changing fields or Flows</li>
                <li>Separate must-have fixes from nice-to-have improvements</li>
                <li>Test risky changes before pushing to production</li>
                <li>Keep scope tied to business outcomes, not platform features</li>
              </ul>

              <h2>Where Emergent Logic Fits</h2>
              <p>
                Emergent Logic helps small businesses with <Link href="/services/salesforce-consulting" className="text-indigo-700 hover:underline">Salesforce consulting</Link>, cleanup, admin support, automation, and CRM-connected workflows. We focus on practical improvements: cleaner data, safer processes, better follow-up, and clearer reporting.
              </p>
              <p>
                If your team needs ongoing help, see our <Link href="/salesforce-admin-support-canada-us" className="text-indigo-700 hover:underline">Salesforce admin support for Canada and US businesses</Link>.
              </p>

              <h2>Bottom Line</h2>
              <p>
                Salesforce consulting pricing is not only about hours. It is about risk, scope, and how much trust the business needs in the system after the work is complete. Start with the smallest scope that makes the org safer and more useful.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-indigo-700 to-slate-900 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Need a practical Salesforce review?</h3>
              <p className="text-white/80 mb-6">
                We can review your org and identify whether you need admin support, cleanup, automation repair, or a larger implementation plan.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
                  Ask About Salesforce Help <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <CookieConsent />
    </main>
  );
}
