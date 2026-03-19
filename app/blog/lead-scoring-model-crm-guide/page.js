import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Target, TrendingUp, TrendingDown } from 'lucide-react';

export const metadata = {
  title: 'Build a Lead Scoring Model in Your CRM',
  description: 'Stop guessing which leads to call first. Build a lead scoring model in Salesforce, HubSpot, or Zoho with our step-by-step framework.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/lead-scoring-model-crm-guide' },
  openGraph: {
    title: 'Build a Lead Scoring Model in Your CRM | Emergent Logic',
    description: 'Stop guessing which leads to call first. Build a lead scoring model in Salesforce, HubSpot, or Zoho.',
    url: 'https://www.emergent-logic.ca/blog/lead-scoring-model-crm-guide',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function LeadScoringGuide() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1E3A5F] via-indigo-900 to-[#6366F1]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Part 1 of 3 — Marketing Automation Playbook</div>
          <div className="flex items-center gap-2 text-indigo-300 text-sm mb-4"><Link href="/blog" className="hover:text-white">Blog</Link><span>/</span><span>Lead Scoring</span></div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">How to Build a Lead Scoring Model in Your CRM (Step-by-Step Guide)</h1>
          <div className="flex items-center gap-4 text-indigo-200 text-sm"><span>By Emergent Logic Team</span><span>•</span><span>June 2026</span><span>•</span><span>9 min read</span></div>
        </div>
      </section>

      <article className="container mx-auto px-4 max-w-4xl py-12">
        <p className="text-xl text-gray-700 leading-relaxed mb-8">Your sales team spends 65% of their time on leads that never convert. Lead scoring fixes this by telling reps exactly which leads deserve attention and which need more nurturing.</p>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">What Lead Scoring Does (And Does Not Do)</h2>
        <p className="text-gray-600 mb-4">Lead scoring uses two dimensions:</p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
            <h3 className="font-bold text-indigo-900 mb-2">Fit Score (Explicit)</h3>
            <p className="text-sm text-gray-600">Who they are — company size, industry, job title, geography. Answers: "Is this our ideal customer?"</p>
          </div>
          <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6">
            <h3 className="font-bold text-teal-900 mb-2">Engagement Score (Implicit)</h3>
            <p className="text-sm text-gray-600">What they do — page visits, email clicks, form fills, content downloads. Answers: "Are they interested right now?"</p>
          </div>
        </div>
        <p className="text-gray-600 mb-12">Think of lead scoring as a GPS, not autopilot. It shows the best route — it does not replace the driver.</p>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Step 1 — Define Your Ideal Customer Profile</h2>
        <p className="text-gray-600 mb-8">Analyze your last 30-50 closed-won deals. What did those customers have in common? Company characteristics (size, industry, revenue, geography) and contact characteristics (title, seniority, department). Write it down as a concrete ICP — not a vague idea in your head.</p>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Step 2 — Build Your Fit Score Criteria</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
            <thead><tr className="bg-[#6366F1] text-white"><th className="px-4 py-3 text-left">Criteria</th><th className="px-4 py-3 text-center">Strong Match</th><th className="px-4 py-3 text-center">Partial Match</th><th className="px-4 py-3 text-center">Poor Match</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">Company size (20-150 employees)</td><td className="px-4 py-3 text-center font-bold text-green-700">+20</td><td className="px-4 py-3 text-center text-yellow-700">+10</td><td className="px-4 py-3 text-center text-gray-400">+0</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-4 py-3">Revenue ($2M-$25M)</td><td className="px-4 py-3 text-center font-bold text-green-700">+20</td><td className="px-4 py-3 text-center text-yellow-700">+10</td><td className="px-4 py-3 text-center text-gray-400">+0</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Industry (target industries)</td><td className="px-4 py-3 text-center font-bold text-green-700">+15</td><td className="px-4 py-3 text-center text-yellow-700">+8</td><td className="px-4 py-3 text-center text-gray-400">+0</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-4 py-3">Job title (VP/Director)</td><td className="px-4 py-3 text-center font-bold text-green-700">+15</td><td className="px-4 py-3 text-center text-yellow-700">+8</td><td className="px-4 py-3 text-center text-gray-400">+3</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Geography (Western Canada)</td><td className="px-4 py-3 text-center font-bold text-green-700">+10</td><td className="px-4 py-3 text-center text-yellow-700">+5</td><td className="px-4 py-3 text-center text-gray-400">+2</td></tr>
              <tr className="bg-indigo-50"><td className="px-4 py-3 font-bold" colSpan={4}>Max Fit Score: 80 points</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl mb-12">
          <p className="text-sm text-gray-700"><strong>Negative scores matter too:</strong> Competitor: -50 | Student/Academic: -30 | Personal email domain: -5</p>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Step 3 — Build Your Engagement Score Criteria</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
            <thead><tr className="bg-teal-600 text-white"><th className="px-4 py-3 text-left">Action</th><th className="px-4 py-3 text-center">Points</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">Submits contact form</td><td className="px-4 py-3 text-center font-bold text-green-700">+25</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-4 py-3">Visits pricing page</td><td className="px-4 py-3 text-center font-bold text-green-700">+20</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Downloads case study</td><td className="px-4 py-3 text-center text-green-700">+15</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-4 py-3">Opens 3+ emails in a week</td><td className="px-4 py-3 text-center text-green-700">+10</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Clicks email CTA</td><td className="px-4 py-3 text-center text-green-700">+8</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-4 py-3">Visits blog post</td><td className="px-4 py-3 text-center text-green-600">+3</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Unsubscribes from email</td><td className="px-4 py-3 text-center font-bold text-red-600">-15</td></tr>
              <tr><td className="px-4 py-3">No activity for 30 days</td><td className="px-4 py-3 text-center font-bold text-red-600">-10</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 mb-12"><strong>Time decay is critical.</strong> A lead who visited your pricing page yesterday is far more valuable than one who visited 6 months ago. Implement score decay — reduce engagement points by 10-20% every 30 days of inactivity.</p>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Step 4 — Set Scoring Thresholds</h2>
        <div className="bg-gray-50 rounded-2xl p-8 mb-12 border">
          <div className="space-y-4">
            {[
              { label: 'Hot', range: '80+', pct: '~5% of leads', action: 'Route to sales immediately, call within 24 hours', color: 'bg-red-500', width: '100%' },
              { label: 'Warm', range: '50-79', pct: '~15% of leads', action: 'Accelerated nurture, soft sales outreach', color: 'bg-orange-400', width: '75%' },
              { label: 'Cool', range: '25-49', pct: '~20% of leads', action: 'Standard nurture, monitor for engagement spikes', color: 'bg-blue-400', width: '50%' },
              { label: 'Cold', range: '0-24', pct: '~60% of leads', action: 'Awareness content only, do not assign to sales', color: 'bg-gray-300', width: '30%' },
            ].map((tier, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-gray-800">{tier.label} ({tier.range})</span>
                  <span className="text-sm text-gray-500">{tier.pct}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-8 mb-1">
                  <div className={`${tier.color} h-8 rounded-full flex items-center pl-4 text-white text-sm font-medium`} style={{width: tier.width}}>{tier.action}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Step 5 — Platform-Specific Setup</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">Salesforce</h3>
            <p className="text-sm text-gray-600">Einstein Lead Scoring on Enterprise+. For manual scoring: custom fields + Flow automation to calculate scores based on criteria.</p>
          </div>
          <div className="bg-orange-50 border rounded-xl p-6">
            <h3 className="font-bold text-orange-900 mb-2">HubSpot</h3>
            <p className="text-sm text-gray-600">Built-in scoring in Professional+. Settings → Properties → HubSpot Score. Add positive and negative attributes.</p>
          </div>
          <div className="bg-green-50 border rounded-xl p-6">
            <h3 className="font-bold text-green-900 mb-2">Zoho</h3>
            <p className="text-sm text-gray-600">Scoring Rules in Standard+. Setup → Automation → Scoring Rules. Supports both profile and engagement scoring.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Step 6 — Calibrate Monthly</h2>
        <p className="text-gray-600 mb-12">Review your closed-won deals every month. Check their scores at the time of conversion. If high-scoring leads are not converting, adjust your criteria. If low-scoring leads are converting, you are missing something in your model. Lead scoring is not set-and-forget — it is a living system.</p>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#1E3A5F] to-[#6366F1] rounded-2xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need help building a lead scoring model?</h2>
          <p className="text-indigo-200 mb-8">Book a free 30-minute strategy call and we will help you design a scoring framework for your CRM.</p>
          <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-[#1E3A5F] hover:bg-indigo-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button>
          </a>
        </div>

        {/* Series Nav */}
        <div className="bg-indigo-50 rounded-xl p-6 mb-12 border border-indigo-200">
          <h3 className="font-bold text-indigo-900 mb-3">Marketing Automation Playbook Series</h3>
          <div className="space-y-2">
            <p className="text-indigo-700 font-medium">Part 1: Lead Scoring (You are here)</p>
            <p><Link href="/blog/email-nurture-sequences-crm-automation" className="text-[#6366F1] hover:underline">Part 2: Email Nurture Sequences That Convert →</Link></p>
            <p><Link href="/blog/campaign-attribution-crm-marketing-roi" className="text-[#6366F1] hover:underline">Part 3: Campaign Attribution — Prove Marketing ROI →</Link></p>
          </div>
        </div>

        <div className="border-t pt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Reading</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/ai-crm-strategy-guide-2026" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-[#6366F1]">Related</p><p className="text-gray-800">AI CRM Strategy: Accelerate Your Team</p></Link>
            <Link href="/blog/email-nurture-sequences-crm-automation" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-[#6366F1]">Next in Series →</p><p className="text-gray-800">Email Nurture Sequences That Convert</p></Link>
          </div>
        </div>
      </article>
      <Footer />
      <CookieConsent />
    </main>
  );
}
