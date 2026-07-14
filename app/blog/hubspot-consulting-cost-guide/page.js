import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, DollarSign, Settings } from 'lucide-react';

export const metadata = {
  title: 'HubSpot Consulting Cost Guide',
  description: 'Learn how HubSpot consulting is scoped for small businesses, from cleanup and setup to workflows, reporting, migration, and ongoing support.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/hubspot-consulting-cost-guide' },
  openGraph: {
    title: 'HubSpot Consulting Cost Guide | Small Business Pricing',
    description: 'A practical guide to the factors that shape HubSpot consulting cost for cleanup, implementation, automation, reporting, migration, and support.',
    url: 'https://www.emergent-logic.ca/blog/hubspot-consulting-cost-guide',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const engagementShapes = [
  {
    item: 'HubSpot audit or cleanup review',
    scope: 'Diagnostic scope',
    notes: 'Useful when the business needs a clear list of data, pipeline, workflow, and reporting issues before rebuilding.',
  },
  {
    item: 'Small HubSpot cleanup',
    scope: 'Bounded remediation',
    notes: 'Useful for duplicates, lifecycle stages, properties, owners, lists, simple reporting, and basic workflow fixes.',
  },
  {
    item: 'HubSpot implementation',
    scope: 'Configured system',
    notes: 'Covers pipeline setup, forms, lead routing, properties, reporting, workflows, and team handoff.',
  },
  {
    item: 'Ongoing HubSpot admin support',
    scope: 'Operating support',
    notes: 'For teams that need workflow changes, reporting support, cleanup, training, and monthly optimization.',
  },
];

const hiddenCosts = [
  'Messy lifecycle stages that make automation unreliable',
  'Duplicate contacts and companies from old imports',
  'Disconnected forms, calendars, ads, or inboxes',
  'Reports that do not match how the sales team actually works',
  'Workflows that were built quickly but never documented',
  'Users who do not trust the CRM because the data feels wrong',
];

export default function HubSpotConsultingCostGuide() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'HubSpot Consulting Cost Guide', href: '/blog/hubspot-consulting-cost-guide' },
            ]} />

            <Badge className="mb-4">HubSpot Consulting</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              HubSpot Consulting Cost Guide for Small Businesses
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 flex-wrap">
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> Cost guide
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 8 min read
              </span>
              <span className="flex items-center gap-2">
                <Settings className="w-4 h-4" /> HubSpot setup
              </span>
            </div>

            <ShareButtons
              url="https://www.emergent-logic.ca/blog/hubspot-consulting-cost-guide"
              title="HubSpot Consulting Cost Guide for Small Businesses"
            />

            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                HubSpot consulting cost depends on the condition of the portal, the business process being changed, and the amount of cleanup, configuration, testing, and handoff required.
              </p>

              <p>
                The cost depends less on the HubSpot subscription and more on the condition of the portal. A clean portal with clear stages is easier to improve. A messy portal with old imports, duplicate records, unclear ownership, and broken workflows takes more care.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-orange-900 mb-2">Short answer</h4>
                <p className="text-orange-900 mb-0">
                  A responsible quote follows a portal review or discovery. Cleanup, implementation, and ongoing administration have different risk, access, testing, and documentation requirements.
                </p>
              </div>

              <h2>Common HubSpot Consulting Engagement Shapes</h2>
              <div className="not-prose grid gap-4 my-8">
                {engagementShapes.map((row) => (
                  <Card key={row.item}>
                    <CardHeader className="pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl">{row.item}</CardTitle>
                        <span className="text-lg font-bold text-orange-700">{row.scope}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-0">{row.notes}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2>Why HubSpot Projects Cost Different Amounts</h2>
              <p>
                Two businesses can both ask for "HubSpot setup" and need very different work. One may need a simple pipeline and form connection. Another may need cleanup, migration, automation, reporting, sales process design, and training.
              </p>

              <div className="space-y-4 my-8">
                {hiddenCosts.map((cost) => (
                  <div key={cost} className="flex items-start gap-3 bg-gray-50 border rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{cost}</span>
                  </div>
                ))}
              </div>

              <h2>When to Start With Cleanup First</h2>
              <p>
                If HubSpot has been used for months or years without a clear operating owner, cleanup should usually come before new automation. Otherwise, new workflows will use the same broken properties, messy owners, and unclear lifecycle stages.
              </p>
              <p>
                Our <Link href="/services/crm-cleanup" className="text-orange-700 hover:underline">CRM cleanup service</Link> focuses on making the data, stages, and ownership reliable before heavier automation is added.
              </p>

              <h2>When Implementation Is the Better Scope</h2>
              <p>
                Implementation is the right path when a business is moving into HubSpot for the first time, replacing spreadsheets, connecting website forms, or rebuilding the sales process from scratch.
              </p>
              <p>
                A good <Link href="/services/hubspot-consulting" className="text-orange-700 hover:underline">HubSpot consulting</Link> project should define pipeline stages, required fields, lead sources, routing rules, reporting, and what the team needs to do every day.
              </p>
              <p>
                If you are comparing local options, our <Link href="/hubspot-consultant-vancouver" className="text-orange-700 hover:underline">HubSpot consultant Vancouver page</Link> explains the scope we provide for Metro Vancouver teams.
              </p>

              <h2>Hourly or Fixed Price?</h2>
              <p>
                Fixed pricing works well when the scope is clear. Hourly or time-and-material work is better when the portal needs investigation, the data quality is unknown, or the project is likely to change as issues are discovered.
              </p>
              <p>
                For a small business, the safest path is often a short audit first, then a fixed-scope cleanup or implementation proposal.
              </p>

              <h2>Questions to Ask Before Hiring a HubSpot Consultant</h2>
              <ul>
                <li>Will you review existing data before building new workflows?</li>
                <li>How will you document pipeline stages and properties?</li>
                <li>Will website forms and lead sources be connected properly?</li>
                <li>Will the sales team know what to do after launch?</li>
                <li>What happens if a workflow breaks or data is imported incorrectly?</li>
                <li>Will reporting show source, owner, stage, and follow-up status?</li>
              </ul>

              <h2>Bottom Line</h2>
              <p>
                HubSpot consulting cost depends on the state of the portal and the outcome you need. If the goal is cleaner data, better follow-up, and clearer reporting, start with the smallest scope that fixes the highest-leverage problem.
              </p>
              <p>
                For many small businesses, that means cleanup first, implementation second, and automation only after the foundation is reliable.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Not sure what your HubSpot portal needs?</h3>
              <p className="text-white/80 mb-6">
                We can review your setup and give you a practical recommendation: cleanup, implementation, automation, or leave it alone for now.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-100">
                  Ask About HubSpot Help <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Related Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'HubSpot Consulting', href: '/services/hubspot-consulting' },
                  { title: 'CRM Cleanup', href: '/services/crm-cleanup' },
                  { title: 'Why HubSpot Workflows Break', href: '/blog/why-hubspot-workflows-break' },
                  { title: 'HubSpot Admin Support for Small Businesses', href: '/blog/hubspot-admin-support-small-business' },
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
