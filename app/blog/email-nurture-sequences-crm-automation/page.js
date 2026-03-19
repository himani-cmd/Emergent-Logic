import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Clock, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Email Nurture Sequences That Convert',
  description: 'Build email nurture sequences that turn leads into customers. Templates, timing, and setup for Salesforce, HubSpot, and Zoho.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/email-nurture-sequences-crm-automation' },
  openGraph: {
    title: 'Email Nurture Sequences That Convert | Emergent Logic',
    description: 'Build email nurture sequences that turn leads into customers. Templates, timing, and CRM setup.',
    url: 'https://www.emergent-logic.ca/blog/email-nurture-sequences-crm-automation',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function NurtureSequences() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1E3A5F] via-indigo-900 to-[#6366F1]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Part 2 of 3 — Marketing Automation Playbook</div>
          <div className="flex items-center gap-2 text-indigo-300 text-sm mb-4"><Link href="/blog" className="hover:text-white">Blog</Link><span>/</span><span>Email Nurture</span></div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Email Nurture Sequences That Convert: CRM Automation Playbook</h1>
          <div className="flex items-center gap-4 text-indigo-200 text-sm"><span>By Emergent Logic Team</span><span>•</span><span>July 2026</span><span>•</span><span>8 min read</span></div>
        </div>
      </section>

      <article className="container mx-auto px-4 max-w-4xl py-12">
        <p className="text-xl text-gray-700 leading-relaxed mb-12">You have <Link href="/blog/lead-scoring-model-crm-guide" className="text-[#6366F1] hover:underline">scored your leads</Link>. The 80% not ready to buy still represent future revenue — if you stay in front of them. Most nurture sequences are terrible: too salesy, too generic, or too infrequent. Here is how to build sequences that actually convert.</p>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">The Nurture Sequence Framework</h2>
        <p className="text-gray-600 mb-6">A 3-phase, 8-email structure over 6 weeks:</p>

        {/* Timeline Visual */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12 border">
          <div className="space-y-8">
            {/* Phase 1 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <h3 className="text-xl font-bold text-indigo-900">Phase 1 — Educate (Emails 1-3)</h3>
              </div>
              <div className="ml-5 border-l-2 border-indigo-200 pl-8 space-y-4">
                <div className="bg-white rounded-lg p-4 border shadow-sm"><p className="text-sm"><strong className="text-indigo-700">Email 1 (Day 0):</strong> Welcome + the resource they requested. Deliver value immediately.</p></div>
                <div className="bg-white rounded-lg p-4 border shadow-sm"><p className="text-sm"><strong className="text-indigo-700">Email 2 (Day 3):</strong> Address their primary pain point. Show you understand their problem.</p></div>
                <div className="bg-white rounded-lg p-4 border shadow-sm"><p className="text-sm"><strong className="text-indigo-700">Email 3 (Day 7):</strong> Share relevant data or insight. Position yourself as the expert.</p></div>
              </div>
            </div>
            {/* Phase 2 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <h3 className="text-xl font-bold text-teal-900">Phase 2 — Build Trust (Emails 4-6)</h3>
              </div>
              <div className="ml-5 border-l-2 border-teal-200 pl-8 space-y-4">
                <div className="bg-white rounded-lg p-4 border shadow-sm"><p className="text-sm"><strong className="text-teal-700">Email 4 (Day 14):</strong> Case study or success story. Social proof from a similar business.</p></div>
                <div className="bg-white rounded-lg p-4 border shadow-sm"><p className="text-sm"><strong className="text-teal-700">Email 5 (Day 21):</strong> Your framework or methodology. Teach something actionable.</p></div>
                <div className="bg-white rounded-lg p-4 border shadow-sm"><p className="text-sm"><strong className="text-teal-700">Email 6 (Day 28):</strong> Address common objections. Handle "but what about..." proactively.</p></div>
              </div>
            </div>
            {/* Phase 3 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <h3 className="text-xl font-bold text-violet-900">Phase 3 — Convert (Emails 7-8)</h3>
              </div>
              <div className="ml-5 border-l-2 border-violet-200 pl-8 space-y-4">
                <div className="bg-white rounded-lg p-4 border shadow-sm"><p className="text-sm"><strong className="text-violet-700">Email 7 (Day 35):</strong> Soft ask — offer a free consultation or assessment. No hard sell.</p></div>
                <div className="bg-white rounded-lg p-4 border shadow-sm"><p className="text-sm"><strong className="text-violet-700">Email 8 (Day 42):</strong> Final value + direct CTA. Clear next step, clear deadline if applicable.</p></div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Timing and Frequency by Business Type</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
            <thead><tr className="bg-[#1E3A5F] text-white"><th className="px-4 py-3 text-left">Business Type</th><th className="px-4 py-3 text-center">Frequency</th><th className="px-4 py-3 text-center">Total Duration</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">B2B Services</td><td className="px-4 py-3 text-center">Every 3-7 days</td><td className="px-4 py-3 text-center">8 emails / 6 weeks</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-4 py-3">B2B SaaS</td><td className="px-4 py-3 text-center">Every 2-4 days</td><td className="px-4 py-3 text-center">8 emails / 3-4 weeks</td></tr>
              <tr><td className="px-4 py-3">High-Ticket Consulting</td><td className="px-4 py-3 text-center">Every 5-7 days</td><td className="px-4 py-3 text-center">8 emails / 8 weeks</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-indigo-50 border-l-4 border-[#6366F1] p-4 rounded-r-xl mb-12">
          <p className="text-gray-700"><strong>Golden rule:</strong> If open rates drop below 15% or unsubscribes exceed 1%, adjust your timing and content immediately.</p>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Subject Line Framework</h2>
        <p className="text-gray-600 mb-4">Four patterns that drive opens:</p>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {[
            { type: 'Question', example: '"Is your CRM actually helping your sales team?"', rate: '25-35% open rate' },
            { type: 'Number/Data', example: '"3 reasons your CRM implementation might fail"', rate: '20-30% open rate' },
            { type: 'Curiosity Gap', example: '"The CRM mistake that cost one company $200K"', rate: '25-35% open rate' },
            { type: 'Direct Value', example: '"Free template: CRM ROI calculator"', rate: '20-30% open rate' },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-xl p-5 shadow-sm">
              <h4 className="font-bold text-gray-800 mb-1">{item.type}</h4>
              <p className="text-sm text-gray-600 italic mb-2">{item.example}</p>
              <p className="text-xs text-[#6366F1] font-medium">{item.rate}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Platform Setup</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 border rounded-xl p-6"><h3 className="font-bold text-blue-900 mb-2">Salesforce</h3><p className="text-sm text-gray-600">Engagement Studio programs with wait steps and completion actions. Use Journey Builder for advanced branching logic.</p></div>
          <div className="bg-orange-50 border rounded-xl p-6"><h3 className="font-bold text-orange-900 mb-2">HubSpot</h3><p className="text-sm text-gray-600">Sequences for 1-to-1 sales outreach. Workflows for marketing nurture with branching logic based on engagement.</p></div>
          <div className="bg-green-50 border rounded-xl p-6"><h3 className="font-bold text-green-900 mb-2">Zoho</h3><p className="text-sm text-gray-600">Marketing Automation autoresponders + Blueprint conditional paths for sophisticated multi-step sequences.</p></div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#1E3A5F] to-[#6366F1] rounded-2xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need help building nurture sequences in your CRM?</h2>
          <p className="text-indigo-200 mb-8">Book a free 30-minute strategy call and we will map out your ideal nurture flow.</p>
          <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-white text-[#1E3A5F] hover:bg-indigo-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
        </div>

        {/* Series Nav */}
        <div className="bg-indigo-50 rounded-xl p-6 mb-12 border border-indigo-200">
          <h3 className="font-bold text-indigo-900 mb-3">Marketing Automation Playbook Series</h3>
          <div className="space-y-2">
            <p><Link href="/blog/lead-scoring-model-crm-guide" className="text-[#6366F1] hover:underline">← Part 1: Lead Scoring Guide</Link></p>
            <p className="text-indigo-700 font-medium">Part 2: Email Nurture Sequences (You are here)</p>
            <p><Link href="/blog/campaign-attribution-crm-marketing-roi" className="text-[#6366F1] hover:underline">Part 3: Campaign Attribution — Prove Marketing ROI →</Link></p>
          </div>
        </div>
      </article>
      <Footer />
      <CookieConsent />
    </main>
  );
}
