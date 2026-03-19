import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Target, TrendingUp, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Campaign Attribution: Prove Marketing ROI',
  description: 'Stop guessing which channels drive revenue. Set up campaign attribution in your CRM with first-touch, last-touch, and multi-touch models.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/campaign-attribution-crm-marketing-roi' },
  openGraph: {
    title: 'Campaign Attribution: Prove Marketing ROI | Emergent Logic',
    description: 'Stop guessing which channels drive revenue. Set up campaign attribution in your CRM.',
    url: 'https://www.emergent-logic.ca/blog/campaign-attribution-crm-marketing-roi',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function CampaignAttribution() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1E3A5F] via-indigo-900 to-[#6366F1]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Part 3 of 3 — Marketing Automation Playbook</div>
          <div className="flex items-center gap-2 text-indigo-300 text-sm mb-4"><Link href="/blog" className="hover:text-white">Blog</Link><span>/</span><span>Attribution</span></div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Campaign Attribution in Your CRM: How to Prove Marketing ROI</h1>
          <div className="flex items-center gap-4 text-indigo-200 text-sm"><span>By Emergent Logic Team</span><span>•</span><span>July 2026</span><span>•</span><span>9 min read</span></div>
        </div>
      </section>

      <article className="container mx-auto px-4 max-w-4xl py-12">
        <p className="text-xl text-gray-700 leading-relaxed mb-4">"Marketing is spending $15,000 a month. What are we getting for it?"</p>
        <p className="text-lg text-gray-600 mb-12">If you cannot answer with a specific revenue number, you have an attribution problem. Most businesses track vanity metrics — traffic, open rates, followers. Attribution connects marketing activities to closed deals and actual revenue.</p>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Attribution Models Explained Simply</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
            <Target className="w-8 h-8 text-indigo-600 mb-3" />
            <h3 className="font-bold text-indigo-900 mb-2">First-Touch</h3>
            <p className="text-sm text-gray-600 mb-2">Credits the first interaction — where customers come from.</p>
            <p className="text-xs text-indigo-700 font-medium">Best for: Understanding lead generation channels</p>
          </div>
          <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6">
            <TrendingUp className="w-8 h-8 text-teal-600 mb-3" />
            <h3 className="font-bold text-teal-900 mb-2">Last-Touch</h3>
            <p className="text-sm text-gray-600 mb-2">Credits the last interaction before conversion — what triggers action.</p>
            <p className="text-xs text-teal-700 font-medium">Best for: Understanding conversion triggers</p>
          </div>
          <div className="bg-violet-50 border-2 border-violet-200 rounded-xl p-6">
            <BarChart3 className="w-8 h-8 text-violet-600 mb-3" />
            <h3 className="font-bold text-violet-900 mb-2">Multi-Touch</h3>
            <p className="text-sm text-gray-600 mb-2">Distributes credit across the whole customer journey.</p>
            <p className="text-xs text-violet-700 font-medium">Best for: Understanding the complete picture</p>
          </div>
        </div>
        <div className="bg-indigo-50 border-l-4 border-[#6366F1] p-4 rounded-r-xl mb-12">
          <p className="text-gray-700"><strong>Our recommendation:</strong> Start with first-touch (easiest to implement). Add last-touch. Graduate to multi-touch after 6+ months of clean data.</p>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">How to Set Up Attribution</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Minimum Viable Setup (Any CRM)</h3>
            <p className="text-gray-600 mb-3">Create an "Original Source" field on all leads and contacts. Use a standardized dropdown:</p>
            <div className="flex flex-wrap gap-2">
              {['Organic Search', 'Paid Ads', 'Social Media', 'Referral', 'Email Campaign', 'Event', 'Direct', 'Partner'].map((s, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border">{s}</span>
              ))}
            </div>
          </div>
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Intermediate: Campaign Tracking</h3>
            <p className="text-gray-600">Use your CRM's built-in campaign objects — Salesforce Campaign Influence, HubSpot Campaigns tool, Zoho Campaigns module. These connect marketing activities to pipeline and revenue.</p>
          </div>
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Advanced: UTM Parameters</h3>
            <p className="text-gray-600 mb-3">Tag every URL with UTM parameters. Example:</p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <code className="text-green-400 text-sm">emergent-logic.ca/blog/crm-comparison<br/>?utm_source=linkedin<br/>&utm_medium=social<br/>&utm_campaign=crm-awareness-q1<br/>&utm_content=comparison-post</code>
            </div>
            <p className="text-sm text-gray-500 mt-3">Create a UTM naming convention and stick to it. Always lowercase, use hyphens, standardize source names.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Building Your Attribution Dashboard</h2>
        <p className="text-gray-600 mb-4">The metrics that actually matter:</p>
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
            <thead><tr className="bg-[#6366F1] text-white"><th className="px-4 py-3 text-left">Metric</th><th className="px-4 py-3 text-left">What It Tells You</th><th className="px-4 py-3 text-left">Why It Matters</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3 font-medium">Customer Acquisition Cost (CAC)</td><td className="px-4 py-3 text-sm">Cost to acquire one customer</td><td className="px-4 py-3 text-sm">Marketing efficiency</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">CAC by Channel</td><td className="px-4 py-3 text-sm">Most cost-effective channels</td><td className="px-4 py-3 text-sm">Budget allocation decisions</td></tr>
              <tr className="border-b"><td className="px-4 py-3 font-medium">Marketing-Sourced Revenue</td><td className="px-4 py-3 text-sm">Revenue from marketing-generated leads</td><td className="px-4 py-3 text-sm">Proves marketing contribution</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Marketing-Influenced Revenue</td><td className="px-4 py-3 text-sm">Revenue where marketing played any role</td><td className="px-4 py-3 text-sm">Shows full marketing impact</td></tr>
              <tr className="border-b"><td className="px-4 py-3 font-medium">Time to Revenue by Channel</td><td className="px-4 py-3 text-sm">First touch to closed deal duration</td><td className="px-4 py-3 text-sm">Identifies fastest channels</td></tr>
              <tr><td className="px-4 py-3 font-medium">Content-Attributed Pipeline</td><td className="px-4 py-3 text-sm">Pipeline influenced by specific content</td><td className="px-4 py-3 text-sm">Guides content investment</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Platform Setup</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 border rounded-xl p-6"><h3 className="font-bold text-blue-900 mb-2">Salesforce</h3><p className="text-sm text-gray-600">Campaign objects with Campaign Influence on opportunities. Use Customizable Campaign Influence for multi-touch attribution models.</p></div>
          <div className="bg-orange-50 border rounded-xl p-6"><h3 className="font-bold text-orange-900 mb-2">HubSpot</h3><p className="text-sm text-gray-600">Campaigns tool groups all assets together. Automatic attribution reporting. Revenue attribution in Professional+ with multi-touch models.</p></div>
          <div className="bg-green-50 border rounded-xl p-6"><h3 className="font-bold text-green-900 mb-2">Zoho</h3><p className="text-sm text-gray-600">Campaigns module for campaign tracking. Zoho Analytics for cross-campaign ROI dashboards with drill-down capabilities.</p></div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#1E3A5F] to-[#6366F1] rounded-2xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to prove your marketing ROI?</h2>
          <p className="text-indigo-200 mb-8">Book a free 30-minute strategy call and we will help you set up attribution in your CRM.</p>
          <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-white text-[#1E3A5F] hover:bg-indigo-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
        </div>

        {/* Series Nav */}
        <div className="bg-indigo-50 rounded-xl p-6 mb-12 border border-indigo-200">
          <h3 className="font-bold text-indigo-900 mb-3">Marketing Automation Playbook Series</h3>
          <div className="space-y-2">
            <p><Link href="/blog/lead-scoring-model-crm-guide" className="text-[#6366F1] hover:underline">← Part 1: Lead Scoring Guide</Link></p>
            <p><Link href="/blog/email-nurture-sequences-crm-automation" className="text-[#6366F1] hover:underline">← Part 2: Email Nurture Sequences</Link></p>
            <p className="text-indigo-700 font-medium">Part 3: Campaign Attribution (You are here)</p>
          </div>
        </div>

        <div className="border-t pt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Reading</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/salesforce-vs-hubspot-vs-zoho-canada-2026" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-[#6366F1]">Related</p><p className="text-gray-800">Salesforce vs HubSpot vs Zoho: Canada 2026</p></Link>
            <Link href="/blog/crm-roi-calculator-business-case-2026" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-[#6366F1]">Related</p><p className="text-gray-800">CRM ROI Calculator & Business Case</p></Link>
          </div>
        </div>
      </article>
      <Footer />
      <CookieConsent />
    </main>
  );
}
