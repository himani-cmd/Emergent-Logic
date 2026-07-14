import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Shield, AlertTriangle, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'CRM + PIPEDA: Data Privacy Guide 2026',
  description: 'Is your CRM PIPEDA compliant? Consent, data residency, cross-border transfers, and how Salesforce, HubSpot, and Zoho handle Canadian privacy.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/crm-pipeda-data-privacy-canada' },
  openGraph: {
    title: 'CRM + PIPEDA: Data Privacy Guide 2026 | Emergent Logic',
    description: 'Is your CRM PIPEDA compliant? Consent, data residency, and how Salesforce, HubSpot, and Zoho handle Canadian privacy.',
    url: 'https://www.emergent-logic.ca/blog/crm-pipeda-data-privacy-canada',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function CrmPipedaPrivacy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1E3A5F] via-indigo-900 to-[#6366F1]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-indigo-300 text-sm mb-4"><Link href="/blog" className="hover:text-white">Blog</Link><span>/</span><span>Compliance</span></div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">CRM and PIPEDA: What Canadian Businesses Need to Know About Data Privacy in 2026</h1>
          <div className="flex items-center gap-4 text-indigo-200 text-sm"><span>By Himani Kharbanda</span><span>•</span><span>May 2026</span><span>•</span><span>10 min read</span></div>
        </div>
      </section>

      <article className="container mx-auto px-4 max-w-4xl py-12">
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">Your CRM holds the most sensitive information in your business — names, emails, phone numbers, purchase history, behavioural data. For Canadian businesses, all of this falls under PIPEDA. If you are in BC, also PIPA.</p>
          <p className="text-lg text-gray-600">Yet data privacy is almost never part of the CRM vendor conversation. This guide fixes that gap.</p>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl mb-12">
          <p className="text-sm text-yellow-800"><strong>Disclaimer:</strong> This article provides general information about PIPEDA and CRM data privacy, not legal advice. Consult a privacy lawyer for your specific situation.</p>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">PIPEDA Basics for CRM Users</h2>
        <p className="text-gray-600 mb-6">Five core principles and what they mean for your CRM:</p>
        <div className="space-y-4 mb-12">
          {[
            { title: 'Consent', desc: 'Implied consent vs. express consent. Marketing emails require express consent. Track consent type in dedicated CRM fields — do not assume opt-in.' },
            { title: 'Purpose Limitation', desc: 'An invoice email does not equal newsletter consent. Segment your contacts by consent type and purpose. Just because someone bought from you does not mean they opted into marketing.' },
            { title: 'Data Minimization', desc: 'Only collect what you actually need. Audit your CRM fields annually — if a field is never used, consider removing it. Every field you collect is a field you must protect.' },
            { title: 'Accuracy', desc: 'Regular data hygiene is not optional. Flag contacts inactive for 12+ months. Provide mechanisms for individuals to update or correct their information.' },
            { title: 'Retention Limits', desc: 'Do not keep data forever. Create automated archival and deletion rules in your CRM. Define retention periods for each data type and automate enforcement.' },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-[#6366F1] mt-0.5 flex-shrink-0" />
                <div><h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Where Does Your CRM Data Actually Live?</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
            <thead><tr className="bg-[#1E3A5F] text-white"><th className="px-4 py-3 text-left">Platform</th><th className="px-4 py-3 text-center">Primary Hosting</th><th className="px-4 py-3 text-center">Canadian Option</th><th className="px-4 py-3 text-center">DPA Available</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3 font-medium">Salesforce</td><td className="px-4 py-3 text-center">Multi-region</td><td className="px-4 py-3 text-center text-green-700 font-medium">Yes (Hyperforce)</td><td className="px-4 py-3 text-center text-green-700">Yes</td></tr>
              <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">HubSpot</td><td className="px-4 py-3 text-center">US (AWS)</td><td className="px-4 py-3 text-center text-yellow-700 font-medium">Verify with sales</td><td className="px-4 py-3 text-center text-green-700">Yes</td></tr>
              <tr><td className="px-4 py-3 font-medium">Zoho</td><td className="px-4 py-3 text-center">Multi-region</td><td className="px-4 py-3 text-center text-yellow-700 font-medium">Request specifics</td><td className="px-4 py-3 text-center text-green-700">Yes</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 mb-12">Even "Canadian hosted" CRM may process data through other countries for AI processing, email sending, and analytics. <strong>Cross-border data transfers</strong> are a reality for most cloud CRMs. Always verify the complete data flow in writing before signing.</p>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">AI Features and Privacy Implications</h2>
        <div className="space-y-4 mb-12">
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">Predictive Scoring</h3>
            <p className="text-gray-600">Automated decisions about individuals require transparency under PIPEDA. If AI determines a lead is "high value" or "low priority," the individual has a right to understand how that decision was made.</p>
          </div>
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">Data Enrichment</h3>
            <p className="text-gray-600">Pulling public data (LinkedIn, company websites) into your CRM changes the usage context. Just because data is publicly available does not mean you can use it for any purpose without consent.</p>
          </div>
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">Call Recording</h3>
            <p className="text-gray-600">If your CRM records or analyzes calls, notice, consent, telemarketing, privacy, and contractual requirements may apply. Confirm the intended workflow with qualified Canadian privacy counsel and provide clear notice before recording or analysis begins.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">BC-Specific Considerations (PIPA)</h2>
        <p className="text-gray-600 mb-12">British Columbia has its own Personal Information Protection Act (PIPA), which is substantially similar to PIPEDA but has differences in breach notification requirements and specific consent provisions. If your business is based in BC, assess which federal and provincial privacy requirements apply to your CRM practices and obtain qualified legal advice for your specific situation.</p>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Your CRM Data Privacy Audit Checklist</h2>
        <div className="bg-gray-50 rounded-2xl p-8 mb-12 border">
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Consent tracking fields exist in CRM',
              'Marketing consent verified for all contacts',
              'Privacy policy matches actual CRM data usage',
              'Data residency documented in writing with vendor',
              'Data retention policies automated in CRM',
              'Data access request process exists and is documented',
              'Breach notification plan is ready and tested',
              'Third-party integrations reviewed for data sharing',
              'AI features disclosed in privacy policy',
              'Employee privacy training completed annually',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border">
                <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-12 border">
          <h3 className="font-bold text-gray-800 mb-3">Official Resources</h3>
          <ul className="space-y-2">
            <li><a href="https://laws-lois.justice.gc.ca/eng/acts/p-8.6/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline flex items-center gap-1">PIPEDA Legislation <ExternalLink className="w-3 h-3" /></a></li>
            <li><a href="https://www.priv.gc.ca/en/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline flex items-center gap-1">Office of the Privacy Commissioner of Canada <ExternalLink className="w-3 h-3" /></a></li>
            <li><a href="https://www.oipc.bc.ca/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline flex items-center gap-1">BC Office of the Information and Privacy Commissioner <ExternalLink className="w-3 h-3" /></a></li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#1E3A5F] to-[#6366F1] rounded-2xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need help making your CRM PIPEDA compliant?</h2>
          <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">Book a free 30-minute strategy call. We will review your current CRM setup and identify privacy gaps.</p>
          <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-[#1E3A5F] hover:bg-indigo-100">Book a Free Privacy Review <ArrowRight className="w-5 h-5 ml-2" /></Button>
          </a>
        </div>

        <div className="border-t pt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Continue Reading</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/ai-crm-strategy-guide-2026" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-[#6366F1]">← Previous</p><p className="text-gray-800">AI CRM Strategy: Accelerate Your Team</p></Link>
            <Link href="/blog/lead-scoring-model-crm-guide" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-[#6366F1]">Next →</p><p className="text-gray-800">Build a Lead Scoring Model in Your CRM</p></Link>
          </div>
        </div>
      </article>
      <Footer />
      <CookieConsent />
    </main>
  );
}
