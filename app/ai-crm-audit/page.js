import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Search, Database, Zap, BarChart3, ShieldCheck, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Free AI-Powered CRM Audit | Emergent Logic',
  description: 'Get a free AI-powered CRM audit for pipelines, workflows, data quality, reporting, automation gaps, and a prioritized action plan.',
  alternates: { canonical: 'https://www.emergent-logic.ca/ai-crm-audit' },
};

export default function AICRMAudit() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/20 text-violet-200 border border-violet-400/30 px-4 py-2 rounded-full text-sm mb-6">
            <Search className="w-4 h-4" />
            Free for Qualified Businesses
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Free AI-Powered CRM Audit
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            We use AI to analyze your CRM in hours — not weeks. Get a detailed report showing exactly what is working, what is broken, and what you are missing. HubSpot, Salesforce, or Zoho.
          </p>
          <TrackedCTA ctaName="Book Your Free CRM Audit" destination="calendly">
            <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 px-8 py-6 text-lg font-semibold">
                Book Your Free CRM Audit <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </TrackedCTA>
        </div>
      </section>

      {/* Why Most CRMs Fail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Most CRMs Are Not Working</h2>
          <p className="text-lg text-gray-600 mb-4">
            We have audited hundreds of CRM systems across Canada. The same problems show up again and again:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              'Pipelines that do not match the actual sales process',
              'Automation that is either broken or nonexistent',
              'Duplicate contacts inflating metrics and confusing reps',
              'Custom fields that nobody uses or understands',
              'Reports that show numbers nobody trusts',
              'Data imported from multiple sources without cleanup',
              'No lead scoring or qualification system',
              'Integrations that are disconnected or misconfigured',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-lg p-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-600">
            The good news: every one of these problems is fixable. The first step is knowing exactly what you are dealing with. That is what the audit gives you.
          </p>
        </div>
      </section>

      {/* What the Audit Includes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What the Audit Analyzes</h2>
          <p className="text-lg text-gray-600 mb-8">
            This is not a surface-level checklist. Our AI-powered audit goes deep into six critical areas of your CRM:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Database, title: 'Data Quality', desc: 'Duplicate detection, missing field analysis, data freshness, invalid emails, orphaned records, and overall database health scoring.' },
              { icon: BarChart3, title: 'Pipeline Structure', desc: 'Pipeline stages mapped against your sales process, deal velocity analysis, stage conversion rates, and bottleneck identification.' },
              { icon: Zap, title: 'Automation & Workflows', desc: 'Every active and inactive workflow audited. Broken triggers, redundant automations, missing sequences, and automation coverage gaps.' },
              { icon: Search, title: 'Reporting Accuracy', desc: 'Dashboard reliability check, forecast accuracy assessment, attribution model review, and metric trustworthiness scoring.' },
              { icon: ShieldCheck, title: 'Integration Health', desc: 'Connected apps reviewed, data sync verification, API connection status, and integration gap analysis.' },
              { icon: CheckCircle, title: 'Adoption & Usage', desc: 'User activity analysis, feature utilization rates, data entry consistency, and team-by-team adoption scoring.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <item.icon className="w-8 h-8 text-violet-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What You Receive</h2>
          <p className="text-lg text-gray-600 mb-8">After the audit, you receive a detailed report that includes:</p>
          <div className="space-y-4">
            {[
              { title: 'CRM Health Score', desc: 'An overall score (out of 100) showing how well your CRM is configured and being used. Broken down by data quality, automation, reporting, and adoption.' },
              { title: 'Issue Inventory', desc: 'Every problem identified — duplicates, broken workflows, missing automation, data gaps, integration failures. Each issue categorized by severity and business impact.' },
              { title: 'Prioritized Action Plan', desc: 'A step-by-step plan showing what to fix first based on business impact. Quick wins identified separately from larger projects.' },
              { title: 'Cost and Timeline Estimate', desc: 'If you choose to work with us, you get a fixed-price quote for the recommended fixes. No obligation — the audit and recommendations are yours to keep regardless.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-violet-50 border border-violet-200 rounded-xl p-5">
                <CheckCircle className="w-6 h-6 text-violet-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How the Audit Works</h2>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Book a Call', desc: 'Schedule a free 30-minute strategy call. We will discuss your current CRM situation, your goals, and what is not working. This helps us focus the audit on what matters most to your business.' },
              { step: '02', title: 'We Run the Audit', desc: 'We connect to your CRM (read-only access) and run our AI-powered analysis. This typically takes 24 to 48 hours depending on database size. We do not modify any data.' },
              { step: '03', title: 'Review the Report', desc: 'We walk you through the findings on a follow-up call. Every issue explained, every recommendation justified. You receive the full report in PDF format — it is yours to keep.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-white">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Your Free CRM Audit</h2>
          <p className="text-xl text-white/80 mb-4 max-w-2xl mx-auto">
            Book a free 30-minute call. We will assess your CRM, identify the biggest problems, and deliver a prioritized action plan. No obligation. No sales pressure.
          </p>
          <p className="text-white/60 mb-8 max-w-xl mx-auto text-sm">
            Available for businesses using HubSpot, Salesforce, or Zoho with 10 or more employees.
          </p>
          <TrackedCTA ctaName="Book Your Free CRM Audit" destination="calendly">
            <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 px-8 py-6 text-lg font-semibold">
                Book Your Free CRM Audit <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </TrackedCTA>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
