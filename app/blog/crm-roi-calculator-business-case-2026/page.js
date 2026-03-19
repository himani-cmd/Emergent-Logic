import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign, TrendingUp, Calculator, Users, Clock } from 'lucide-react';

export const metadata = {
  title: 'CRM ROI Calculator & Business Case 2026',
  description: 'Build a compelling business case for CRM. ROI calculator, cost breakdowns, industry benchmarks, and the metrics that matter to decision-makers.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/crm-roi-calculator-business-case-2026' },
  openGraph: {
    title: 'CRM ROI Calculator & Business Case 2026 | Emergent Logic',
    description: 'Build a compelling business case for CRM. ROI calculator, cost breakdowns, and industry benchmarks.',
    url: 'https://www.emergent-logic.ca/blog/crm-roi-calculator-business-case-2026',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function CrmRoiCalculator() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1E3A5F] via-indigo-900 to-[#6366F1]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-indigo-300 text-sm mb-4"><Link href="/blog" className="hover:text-white">Blog</Link><span>/</span><span>Business Case</span></div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">How to Build a Business Case for CRM: ROI Calculator, Cost Breakdown, and the Metrics That Matter</h1>
          <div className="flex items-center gap-4 text-indigo-200 text-sm"><span>By Emergent Logic Team</span><span>•</span><span>August 2026</span><span>•</span><span>11 min read</span></div>
        </div>
      </section>

      <article className="container mx-auto px-4 max-w-4xl py-12">
        <p className="text-xl text-gray-700 leading-relaxed mb-4">You know your business needs a CRM. Your sales team works from spreadsheets, leads fall through cracks, you cannot forecast accurately.</p>
        <p className="text-lg text-gray-600 mb-12">But when you bring the idea to your CFO or board, the first question is always: <em>"What is the ROI?"</em> If you cannot answer with a number, the project stalls. This guide gives you everything to build a business case that gets approved.</p>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">The True Cost of CRM Implementation</h2>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Licensing Costs (CAD per user per month)</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
            <thead><tr className="bg-[#1E3A5F] text-white"><th className="px-4 py-3 text-left">Platform</th><th className="px-4 py-3 text-center">Starter</th><th className="px-4 py-3 text-center">Professional</th><th className="px-4 py-3 text-center">Enterprise</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3 font-medium">Salesforce</td><td className="px-4 py-3 text-center">~$35/user/mo</td><td className="px-4 py-3 text-center">~$110/user/mo</td><td className="px-4 py-3 text-center">~$220/user/mo</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">HubSpot</td><td className="px-4 py-3 text-center">~$20/user/mo</td><td className="px-4 py-3 text-center">~$130/user/mo</td><td className="px-4 py-3 text-center">~$200/user/mo</td></tr>
              <tr><td className="px-4 py-3 font-medium">Zoho CRM</td><td className="px-4 py-3 text-center">~$20/user/mo</td><td className="px-4 py-3 text-center">~$50/user/mo</td><td className="px-4 py-3 text-center font-bold text-green-700">~$55/user/mo</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-4">Implementation Costs by Complexity</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
            <p className="text-2xl font-bold text-green-700 mb-1">$3K – $8K</p>
            <p className="font-medium text-gray-800 mb-2">Basic</p>
            <p className="text-sm text-gray-600">5-10 users, standard config, basic automation, data import</p>
          </div>
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
            <p className="text-2xl font-bold text-yellow-700 mb-1">$8K – $25K</p>
            <p className="font-medium text-gray-800 mb-2">Moderate</p>
            <p className="text-sm text-gray-600">10-30 users, custom workflows, integrations, data migration</p>
          </div>
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
            <p className="text-2xl font-bold text-red-700 mb-1">$25K – $75K+</p>
            <p className="font-medium text-gray-800 mb-2">Complex</p>
            <p className="text-sm text-gray-600">30-100+ users, advanced automation, multi-system integration</p>
          </div>
        </div>

        <p className="text-gray-600 mb-4"><strong>Training:</strong> Budget 10-15% of implementation costs. This is non-negotiable — undertrained teams do not adopt CRM.</p>
        <p className="text-gray-600 mb-8"><strong>Ongoing support options:</strong></p>
        <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-1">
          <li>In-house admin: $15,000-$40,000/year (part-time to full-time)</li>
          <li>Managed services: $2,000-$8,000/month (outsourced CRM management)</li>
          <li>Hybrid: in-house for daily, consulting for quarterly optimization</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mb-4">Total Year 1 Investment Summary</h3>
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
            <thead><tr className="bg-[#6366F1] text-white"><th className="px-4 py-3 text-left">Category</th><th className="px-4 py-3 text-center">Low</th><th className="px-4 py-3 text-center">Mid</th><th className="px-4 py-3 text-center">High</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">Licensing (15 users, Pro)</td><td className="px-4 py-3 text-center">$9,000</td><td className="px-4 py-3 text-center">$19,800</td><td className="px-4 py-3 text-center">$23,400</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-4 py-3">Implementation</td><td className="px-4 py-3 text-center">$5,000</td><td className="px-4 py-3 text-center">$15,000</td><td className="px-4 py-3 text-center">$40,000</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Training</td><td className="px-4 py-3 text-center">$1,000</td><td className="px-4 py-3 text-center">$3,000</td><td className="px-4 py-3 text-center">$6,000</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-4 py-3">Ongoing support</td><td className="px-4 py-3 text-center">$6,000</td><td className="px-4 py-3 text-center">$18,000</td><td className="px-4 py-3 text-center">$48,000</td></tr>
              <tr className="bg-indigo-50"><td className="px-4 py-3 font-bold">Total Year 1</td><td className="px-4 py-3 text-center font-bold">$21,000</td><td className="px-4 py-3 text-center font-bold text-[#6366F1]">$55,800</td><td className="px-4 py-3 text-center font-bold">$117,400</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">The Revenue Side — How CRM Creates ROI</h2>
        <p className="text-gray-600 mb-6">Four revenue drivers with calculation formulas:</p>
        <div className="space-y-6 mb-8">
          {[
            { icon: <TrendingUp className="w-6 h-6" />, title: '1. Increased Conversion Rate (15-30% improvement)', example: '100 leads/mo × 5% → 7% conversion = 2 extra customers × $10K deal = $240K/year', color: 'bg-green-50 border-green-200' },
            { icon: <Clock className="w-6 h-6" />, title: '2. Shortened Sales Cycle (8-14% reduction)', example: '45-day cycle reduced 10% = 4.5 days saved × 50 deals/year = 225 selling days recovered', color: 'bg-blue-50 border-blue-200' },
            { icon: <Users className="w-6 h-6" />, title: '3. Improved Retention (5% improvement = 25-95% profit increase)', example: '15% → 12% churn on $1M recurring = $30K/year saved', color: 'bg-purple-50 border-purple-200' },
            { icon: <Calculator className="w-6 h-6" />, title: '4. Productivity Gains (20-30% admin time reduction)', example: '10 reps × 10 hrs/week admin × $40/hr × 25% reduction = $52K/year recovered', color: 'bg-teal-50 border-teal-200' },
          ].map((item, i) => (
            <div key={i} className={`${item.color} border-2 rounded-xl p-6`}>
              <div className="flex items-start gap-3">
                <div className="text-gray-700 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <div className="bg-white rounded-lg p-3 border"><p className="text-sm text-gray-700 font-mono">{item.example}</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Chart */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12 border">
          <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">Annual Return vs. Year 1 Investment</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1"><span className="font-medium text-green-800">Total Annual Return</span><span className="font-bold text-green-800 text-xl">$322,000</span></div>
              <div className="w-full bg-gray-200 rounded-full h-10"><div className="bg-green-500 h-10 rounded-full flex items-center pl-4 text-white font-medium" style={{width: '100%'}}>Revenue gains + cost savings</div></div>
            </div>
            <div>
              <div className="flex justify-between mb-1"><span className="font-medium text-red-800">Year 1 Investment (Mid)</span><span className="font-bold text-red-800 text-xl">$55,800</span></div>
              <div className="w-full bg-gray-200 rounded-full h-10"><div className="bg-red-400 h-10 rounded-full flex items-center pl-4 text-white font-medium" style={{width: '17%'}}>Cost</div></div>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-4xl font-bold text-[#6366F1]">475% ROI</p>
            <p className="text-gray-500">Payback period: ~2 months</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">The One-Page Business Case Template</h2>
        <div className="bg-white border-2 border-indigo-200 rounded-2xl p-8 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Problem Statement</h3>
              <p className="text-gray-600 bg-gray-50 p-3 rounded-lg italic">"We are currently [managing sales in spreadsheets / losing leads / unable to forecast]. This is costing us approximately $[amount] per year in lost revenue and inefficiency."</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Proposed Solution</h3>
              <p className="text-gray-600 bg-gray-50 p-3 rounded-lg italic">"Implement [CRM platform] for [number] users across [sales / marketing / service]."</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Investment</h3>
              <p className="text-gray-600 bg-gray-50 p-3 rounded-lg italic">"Year 1: $[total]. Year 2+: $[licensing + support only]."</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Projected Returns</h3>
              <p className="text-gray-600 bg-gray-50 p-3 rounded-lg italic">"Conversion lift: $[X]. Retention improvement: $[X]. Productivity gains: $[X]. Total: $[X]."</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Recommendation</h3>
              <p className="text-gray-600 bg-gray-50 p-3 rounded-lg italic">"Approve project start in [month]. Go-live in [month]. First measurable ROI within [X] months."</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Common Objections and How to Handle Them</h2>
        <div className="space-y-4 mb-12">
          {[
            { objection: '"We tried a CRM before and it failed"', response: 'Most failures are implementation and adoption failures, not technology failures. Ask what went wrong — usually insufficient training, poor data migration, or no executive sponsorship. Address those root causes this time.' },
            { objection: '"We can just use spreadsheets"', response: 'Spreadsheets break at 10 users, 1,000 contacts, or any need for automation. Calculate the hidden cost of manual operations — hours spent searching for data, duplicating work, missing follow-ups.' },
            { objection: '"It is too expensive"', response: 'Reframe the investment: $56K Year 1 generating $240K incremental revenue = 380% ROI. The real question: "Can we afford NOT to invest in a CRM while competitors do?"' },
            { objection: '"Our team will not use it"', response: 'Valid concern — and solvable. Executive sponsorship, simple initial workflows, clear value proposition for users (not just management), and ongoing training. Budget for adoption, not just implementation.' },
            { objection: '"We\'ll just hire a freelancer on Upwork"', response: 'This is the most understandable objection — and the most expensive mistake. We scanned over 1,000 active CRM jobs on Upwork and found that 40% were businesses that had already bought a CRM but couldn\'t use it. Many were on their second or third freelancer attempt. A $3,000 freelancer who delivers a CRM your team doesn\'t adopt costs you $3,000 in fees PLUS the ongoing cost of a non-functioning CRM. Multiply that by 2–3 attempts over 12 months, and you\'ve spent $10,000–$25,000 with nothing to show for it. A consulting firm charges more upfront ($13,000–$38,000) but delivers a working system from month 2. The break-even is usually within 6 months, and the ROI compounds from there. Freelancers are excellent for defined, scoped tasks. But if you need strategy, training, adoption, and ongoing optimization — that\'s consulting work.' },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-red-700 mb-2">{item.objection}</h3>
              <p className="text-gray-600">{item.response}</p>
            </div>
          ))}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mt-2">
            <p className="text-gray-700 text-sm">Read our full breakdown: <Link href="/blog/crm-freelancer-vs-consulting-firm" className="text-[#6366F1] font-medium hover:underline">CRM Freelancer vs Consulting Firm →</Link></p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#1E3A5F] to-[#6366F1] rounded-2xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to build your CRM business case?</h2>
          <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">Book a free 30-minute strategy call. We will help you calculate the ROI for your specific business and build a case that gets approved.</p>
          <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-white text-[#1E3A5F] hover:bg-indigo-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 border mb-12">
          <p className="text-sm text-gray-600"><strong>Emergent Logic</strong> is an AI-powered CRM consulting firm in Surrey, BC. We implement Salesforce, HubSpot, and Zoho for Canadian businesses — because the right CRM depends on your business, not our vendor partnership.</p>
        </div>

        <div className="border-t pt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Continue Reading</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/salesforce-vs-hubspot-vs-zoho-canada-2026" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-[#6366F1]">Start Here</p><p className="text-gray-800">Salesforce vs HubSpot vs Zoho: Canada 2026</p></Link>
            <Link href="/blog/ai-crm-strategy-guide-2026" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-[#6366F1]">Related</p><p className="text-gray-800">AI CRM Strategy: Accelerate Your Team</p></Link>
          </div>
        </div>
      </article>
      <Footer />
      <CookieConsent />
    </main>
  );
}
