import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Wrench, AlertTriangle, Database, Zap, BarChart3, Users, Trash2, Clock, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'CRM Cleanup & Data Recovery Services | Fix Your Messy CRM',
  description: 'Your CRM is a mess. Duplicate contacts, broken workflows, unreliable reports. We audit, clean, restructure, and rebuild your CRM so it actually works. HubSpot, Salesforce, Zoho.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/crm-cleanup' },
  robots: { index: true, follow: true },
};

export default function CRMCleanup() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-emerald-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">CRM Cleanup</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your CRM Is a Mess. We Fix That.
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            Duplicate contacts, broken workflows, unreliable reports, and fields nobody uses. We audit your CRM, clean the data, rebuild the structure, and turn it into a system your team trusts and actually uses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Get a Free CRM Audit" destination="calendly">
              <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100 font-semibold px-8">
                  Get a Free CRM Audit <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </TrackedCTA>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Messy CRM Problem</h2>
          <p className="text-lg text-gray-600 mb-4">
            Your CRM started clean. Contacts were organized, pipelines made sense, and reports showed real numbers. Then reality happened. Contacts were imported from multiple sources without deduplication. Fields were created and abandoned. Workflows were built on top of broken logic. Data got stale.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Now your sales team does not trust the data. Your reports show numbers that do not match reality. Your marketing campaigns go to the wrong segments. And every time someone suggests "just cleaning it up," the task feels so overwhelming that nothing gets done.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We have seen this pattern hundreds of times. It is fixable. And it is faster than you think — because we use AI to identify and resolve issues that would take a human weeks to find manually.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: AlertTriangle, title: 'Duplicate Contacts', desc: 'The same person appears 3, 5, or 10 times with slight variations. Every duplicate inflates your metrics, confuses your sales team, and wastes your email credits.', color: 'text-red-600 bg-red-50' },
              { icon: Database, title: 'Bad Data Quality', desc: 'Missing fields, outdated information, wrong formats, incomplete records. Your CRM is only as useful as the data inside it — and right now, your data is unreliable.', color: 'text-orange-600 bg-orange-50' },
              { icon: Zap, title: 'Broken Workflows', desc: 'Automations that trigger at the wrong time, send to the wrong people, or do not fire at all. Workflows built on outdated logic that nobody remembers creating.', color: 'text-yellow-600 bg-yellow-50' },
              { icon: BarChart3, title: 'Unreliable Reports', desc: 'Dashboards that show numbers nobody trusts. Pipeline forecasts that are wildly inaccurate. Revenue reports that do not match your accounting. If you cannot trust the data, you cannot make decisions.', color: 'text-purple-600 bg-purple-50' },
            ].map((item, i) => (
              <div key={i} className={`${item.color.split(' ')[1]} border rounded-xl p-6`}>
                <item.icon className={`w-8 h-8 ${item.color.split(' ')[0]} mb-3`} />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What CRM Cleanup Includes</h2>
          <p className="text-lg text-gray-600 mb-8">
            This is not a surface-level cleanup. We go deep into your CRM and fix everything — data, structure, automation, and reporting.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Comprehensive Data Audit', desc: 'We analyze every contact, company, and deal in your CRM using AI. Duplicates, missing fields, outdated records, invalid emails, orphaned contacts — we identify everything before touching a single record.' },
              { title: 'Deduplication & Merge', desc: 'We identify and merge duplicate records while preserving the most complete data from each version. Activity history, notes, deals, and associations are all maintained.' },
              { title: 'Data Standardization', desc: 'Phone number formats, address formatting, name capitalization, company name consistency, lifecycle stage alignment. Every field standardized to a clean, consistent format.' },
              { title: 'Property Cleanup', desc: 'Remove unused custom properties, consolidate overlapping fields, fix dropdown values, and reorganize property groups. Your CRM should only have fields that serve a purpose.' },
              { title: 'Workflow Repair', desc: 'Audit every active and inactive workflow. Fix broken triggers, update outdated conditions, remove conflicting automations, and rebuild workflows that align with your current sales process.' },
              { title: 'Report Rebuilding', desc: 'Replace unreliable reports with dashboards built on clean data. Pipeline accuracy, revenue forecasting, rep activity, and marketing attribution — all trustworthy after cleanup.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border shadow-sm">
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advantage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The AI Cleanup Advantage</h2>
          <p className="text-lg text-gray-600 mb-4">
            Traditional CRM cleanup is manual, tedious, and error-prone. A human reviewing 10,000 contacts one by one takes weeks. Our AI-powered approach does the same work in hours.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We use AI to scan your entire database, identify patterns, flag duplicates with fuzzy matching (catching variations like "John Smith" and "J. Smith" at the same company), detect invalid data, and prioritize issues by business impact. The result is a cleanup that is faster, more thorough, and more accurate than manual methods.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { value: '10x', label: 'Faster than manual cleanup' },
              { value: '99%', label: 'Duplicate detection accuracy' },
              { value: '0', label: 'Records lost during cleanup' },
            ].map((stat, i) => (
              <div key={i} className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-200">
                <div className="text-4xl font-bold text-emerald-700 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Cleanup Process</h2>
          <div className="space-y-8">
            {[
              { step: '01', title: 'AI-Powered Audit', desc: 'We run a comprehensive AI audit on your entire CRM. Every contact, deal, workflow, and report is analyzed. You receive a detailed report showing exactly what is broken and what needs to be fixed, prioritized by impact.' },
              { step: '02', title: 'Clean & Restructure', desc: 'We deduplicate, standardize, and clean your data. Properties are reorganized. Workflows are repaired or rebuilt. Pipelines are restructured to match your current sales process. All changes are documented.' },
              { step: '03', title: 'Verify & Train', desc: 'We verify data integrity post-cleanup, rebuild dashboards on clean data, and train your team on data hygiene best practices. You also get a maintenance playbook to keep your CRM clean going forward.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
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

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <Clock className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1 to 2 Weeks</h3>
              <p className="text-gray-600">Most CRM cleanups are completed in 1 to 2 weeks, depending on database size and complexity.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <DollarSign className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">From $1,000</h3>
              <p className="text-gray-600">Fixed pricing based on database size and scope of work. No hourly billing, no surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/crm-implementation" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Implementation</p>
              <p className="text-gray-600 text-sm">Full CRM setup from scratch</p>
            </Link>
            <Link href="/services/hubspot-consulting" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">HubSpot Consulting</p>
              <p className="text-gray-600 text-sm">Expert HubSpot setup and optimization</p>
            </Link>
            <Link href="/contact" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Contact Us</p>
              <p className="text-gray-600 text-sm">Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stop Working Around a Broken CRM</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free CRM audit. We will scan your database, identify every issue, and tell you exactly what it would take to fix it. No obligation.
          </p>
          <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100 font-semibold px-8">
              Get a Free CRM Audit <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
