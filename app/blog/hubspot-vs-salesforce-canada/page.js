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
  title: 'HubSpot vs Salesforce: Which CRM is Right for Your Canadian Business?',
  description: 'Comparing HubSpot and Salesforce for Canadian SMBs? This guide breaks down cost, features, and implementation time so you can choose the right CRM for your business.',
  alternates: {
    canonical: 'https://www.emergent-logic.ca/blog/hubspot-vs-salesforce-canada',
  },
  openGraph: {
    title: 'HubSpot vs Salesforce: Which CRM is Right for Your Canadian Business?',
    description: 'Comparing HubSpot and Salesforce for Canadian SMBs? This guide breaks down cost, features, and implementation time.',
    type: 'article',
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
                Choosing a CRM is one of the most important technology decisions a growing business can make. Get it right and your sales team closes more deals with less effort. Get it wrong and you have an expensive system nobody uses.
              </p>
              
              <p>
                HubSpot and Salesforce are the two most popular CRM platforms in Canada — and for good reason. Both are powerful, well-supported, and built for scale. But they are very different products designed for very different businesses.
              </p>
              
              <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-violet-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" /> Key Takeaway
                </h4>
                <p className="text-violet-800 mb-0">
                  Bottom line up front: HubSpot is the better fit for most Canadian SMBs (under 200 employees). Salesforce is better for complex enterprise sales processes or businesses that need deep custom development.
                </p>
              </div>
              
              <h2>The Core Difference</h2>
              <p>
                <strong>HubSpot</strong> was built for growing businesses. It is designed to be used out of the box with minimal technical setup. The free tier is genuinely useful, and the paid tiers scale predictably.
              </p>
              <p>
                <strong>Salesforce</strong> was built for enterprise. It is the most customizable CRM on the planet — which also makes it the most complex. It can do almost anything, but it often requires a certified Salesforce developer to configure and maintain it.
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
                    <tr><td className="p-3 border">Ease of setup</td><td className="p-3 border">Fast (days–weeks)</td><td className="p-3 border">Complex (weeks–months)</td></tr>
                    <tr><td className="p-3 border">Starting price (CAD)</td><td className="p-3 border">Free – $65/mo</td><td className="p-3 border">~$40/user/mo (no free tier)</td></tr>
                    <tr><td className="p-3 border">Built-in marketing tools</td><td className="p-3 border">Yes — fully integrated</td><td className="p-3 border">Requires add-ons</td></tr>
                    <tr><td className="p-3 border">Customization</td><td className="p-3 border">Good for most needs</td><td className="p-3 border">Virtually unlimited</td></tr>
                    <tr><td className="p-3 border">Best for</td><td className="p-3 border">SMBs, startups, agencies</td><td className="p-3 border">Enterprise, complex sales</td></tr>
                    <tr><td className="p-3 border">Implementation time</td><td className="p-3 border">2–4 weeks</td><td className="p-3 border">2–6 months</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h2>When to Choose HubSpot</h2>
              <ul>
                <li>You are a small to mid-sized business (under 200 employees)</li>
                <li>You want marketing and sales in one platform without additional integrations</li>
                <li>You need to be up and running quickly — within weeks, not months</li>
                <li>Your team is not highly technical and you want something intuitive</li>
                <li>You want predictable, transparent pricing</li>
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
                <h4 className="font-bold text-amber-900 mb-2">Cost Reality Check</h4>
                <p className="text-amber-800 mb-0">
                  For most Canadian SMBs, the total cost of a HubSpot implementation is 40 to 70 percent lower than an equivalent Salesforce implementation — when you factor in setup, training, and ongoing administration.
                </p>
              </div>
              
              <h2>Our Recommendation for Canadian Businesses</h2>
              <p>
                If you are a growing Canadian business with a sales team of 2 to 50 people, HubSpot is almost certainly the right choice. It is faster to implement, easier to use, and the integrated marketing tools mean you can build your entire revenue system in one platform.
              </p>
              <p>
                Not sure which one is right for your business? Emergent Logic offers free 30-minute strategy calls to help you decide — with no pressure and no sales pitch.
              </p>
              <p>
                Need help with <Link href="/crm-implementation" className="text-violet-600 hover:underline">CRM implementation in Surrey, BC</Link>? We handle the entire process from selection to training.
              </p>
            </div>
            
            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-white/80 mb-6">
                Not sure which CRM is right for your business? Book a free 30-minute strategy call with Emergent Logic and we will give you a straight answer.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">
                  Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
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
