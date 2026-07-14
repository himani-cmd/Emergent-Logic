import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'HubSpot vs Salesforce for Canadian SMBs',
  description: 'Comparing HubSpot and Salesforce for Canadian SMBs. Cost, features, and implementation time to help you choose the right CRM.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/hubspot-vs-salesforce-canada' },
  openGraph: {
    title: 'HubSpot vs Salesforce for Canadian SMBs | Emergent Logic',
    description: 'Comparing HubSpot and Salesforce for Canadian SMBs. Cost, features, and implementation time.',
    url: 'https://www.emergent-logic.ca/blog/hubspot-vs-salesforce-canada',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const relatedPosts = [
  { title: 'What is CRM Implementation?', href: '/blog/what-is-crm-implementation-canada' },
  { title: 'What is Marketing Automation?', href: '/blog/what-is-marketing-automation-small-business' },
];

export default function HubspotVsSalesforce() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'HubSpot vs Salesforce', href: '/blog/hubspot-vs-salesforce-canada' },
            ]} />
            
            <Badge className="mb-4">CRM</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              HubSpot vs Salesforce: Which CRM is Right for Your Canadian Business?
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Surrey, BC
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 8 min read
              </span>
            </div>
            
            <ShareButtons 
              url="https://www.emergent-logic.ca/blog/hubspot-vs-salesforce-canada"
              title="HubSpot vs Salesforce: Which CRM is Right for Your Canadian Business?"
            />
            
            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                A CRM decision shapes how a growing business captures leads, assigns work, records activity, and reports on the sales process. Platform fit matters, but implementation and ownership matter too.
              </p>
              
              <p>
                HubSpot and Salesforce are widely considered CRM options in Canada. They use different product, configuration, and administration models, so the right shortlist depends on operating requirements.
              </p>
              
              <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-violet-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" /> Key Takeaway
                </h4>
                <p className="text-violet-800 mb-0">
                  Bottom line up front: evaluate HubSpot when the process is relatively standardized and marketing-sales coordination matters. Evaluate Salesforce when the operating model requires deeper customization, architecture, or governance.
                </p>
              </div>
              
              <h2>The Core Difference</h2>
              <p>
                <strong>HubSpot</strong> offers a comparatively approachable starting experience for common marketing, sales, and service workflows. Verify which current products, seats, contacts, limits, and onboarding requirements your scope needs.
              </p>
              <p>
                <strong>Salesforce</strong> supports deeply customized sales and service operations. That flexibility can also increase configuration, governance, testing, and administration requirements.
              </p>
              
              <h2>Feature Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left border">Feature</th>
                      <th className="p-3 text-left border">HubSpot</th>
                      <th className="p-3 text-left border">Salesforce</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-3 border">Ease of setup</td><td className="p-3 border">Often lighter for standard processes</td><td className="p-3 border">Often heavier for customized processes</td></tr>
                    <tr><td className="p-3 border">Commercial model</td><td className="p-3 border">Product, seat, and contact tiers; verify current quote</td><td className="p-3 border">Edition, seat, cloud, and add-on costs; verify current quote</td></tr>
                    <tr><td className="p-3 border">Marketing scope</td><td className="p-3 border">Connected product family; required hubs vary</td><td className="p-3 border">Products and integrations vary by scope</td></tr>
                    <tr><td className="p-3 border">Customization</td><td className="p-3 border">Strong fit for standardized processes</td><td className="p-3 border">Supports deeper custom architecture</td></tr>
                    <tr><td className="p-3 border">Evaluate when</td><td className="p-3 border">Usability and marketing-sales coordination lead</td><td className="p-3 border">Complex process and governance lead</td></tr>
                    <tr><td className="p-3 border">Implementation timing</td><td className="p-3 border">Depends on migration, automation, integrations, and adoption</td><td className="p-3 border">Depends on architecture, migration, integrations, and governance</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h2>When to Choose HubSpot</h2>
              <ul>
                <li>Your sales process is reasonably standardized</li>
                <li>You want marketing and sales in one platform without additional integrations</li>
                <li>You want a relatively approachable starting experience</li>
                <li>Your team is not highly technical and you want something intuitive</li>
                <li>You are prepared to verify how product, seat, contact, and onboarding costs change with scope</li>
              </ul>
              
              <h2>When to Choose Salesforce</h2>
              <ul>
                <li>You have a large, complex sales organization with multi-stage pipelines</li>
                <li>You need deep custom development and third-party integrations</li>
                <li>You have a dedicated IT or RevOps team to manage the platform</li>
                <li>You are in a regulated industry that requires advanced compliance features</li>
                <li>You are already using other Salesforce products</li>
              </ul>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-amber-900 mb-2">Total-Cost Check</h4>
                <p className="text-amber-800 mb-0">
                  Compare the current vendor quote plus implementation, migration, integrations, training, administration, governance, and expected change. Licence price alone is not a reliable total-cost comparison.
                </p>
              </div>
              
              <h2>A Practical Recommendation Process</h2>
              <p>
                Test the shortlist against one real lead-to-revenue workflow. Include users, data, permissions, integrations, reporting, exception handling, administration, and the full commercial package.
              </p>
              <p>
                Not sure which one fits your operating requirements? Use a CRM consultation to compare the process, data, integration, administration, and governance requirements before selecting a platform.
              </p>
              <p>
                Need help defining a <Link href="/services/crm-implementation" className="text-violet-600 hover:underline">CRM implementation scope in Surrey, BC</Link>? Start with the process and evidence needed for a responsible decision.
              </p>
            </div>
            
            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-white/80 mb-6">
                Describe the process and constraints the CRM needs to support. We will use the consultation to identify the decision that needs evidence next.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">
                  Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            {/* Related Posts */}
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
