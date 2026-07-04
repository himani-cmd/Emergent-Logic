import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle, CheckCircle, Database, RefreshCw, BarChart3, Wrench } from 'lucide-react';

export const metadata = {
  title: 'CRM Cleanup Canada | Fix Duplicates & Bad Data',
  description: 'CRM cleanup for HubSpot, Salesforce, and Zoho: deduplication, data quality audits, workflow repair, reporting cleanup, and hygiene rules.',
  alternates: { canonical: 'https://www.emergent-logic.ca/crm-cleanup-canada' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Cleanup Canada | Emergent Logic',
    description: 'Fix duplicate records, bad CRM data, broken workflows, and unreliable reporting across HubSpot, Salesforce, and Zoho.',
    url: 'https://www.emergent-logic.ca/crm-cleanup-canada',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const cleanupAreas = [
  { icon: Database, title: 'Duplicate Records', desc: 'Find and merge duplicate contacts, companies, and deals while preserving notes, activity, associations, and history.' },
  { icon: RefreshCw, title: 'Data Standardization', desc: 'Clean phone numbers, names, companies, lifecycle stages, dropdown values, required fields, and formatting.' },
  { icon: Wrench, title: 'Workflow Repair', desc: 'Audit broken automations, conflicting triggers, stale workflows, and unclear handoff logic.' },
  { icon: BarChart3, title: 'Reporting Cleanup', desc: 'Rebuild dashboards and pipeline reports so leadership can trust the numbers again.' },
];

const faqs = [
  { q: 'Which CRMs do you clean up?', a: 'We clean up HubSpot, Salesforce, Zoho, and spreadsheet-based CRM systems. We also help teams prepare data before migrating into a new CRM.' },
  { q: 'How long does CRM cleanup take?', a: 'Most focused cleanup projects take 1 to 2 weeks. Larger databases or workflow-heavy systems may take longer, but we scope the timeline before work starts.' },
  { q: 'Will records be deleted?', a: 'No records are deleted without approval. We start with an audit, show what we found, then clean using a logged and reversible process wherever the platform allows it.' },
  { q: 'Can CRM cleanup improve marketing results?', a: 'Yes. Cleaner data improves segmentation, email deliverability, lead scoring, campaign attribution, and sales handoff. Many automation problems are really data problems first.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/crm-cleanup-canada#service',
      name: 'CRM Cleanup Canada',
      serviceType: 'CRM cleanup, data deduplication, workflow repair, CRM audit, and reporting cleanup',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/crm-cleanup-canada',
      areaServed: { '@type': 'Country', name: 'Canada' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/crm-cleanup-canada#faq',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function CRMCleanupCanada() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'CRM Cleanup Canada', href: '/crm-cleanup-canada' },
          ]} />
          <div className="flex items-center gap-2 text-emerald-200 mb-4"><AlertTriangle className="w-5 h-5" /><span>HubSpot, Salesforce, Zoho</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CRM Cleanup Services for Canadian Businesses</h1>
          <p className="text-xl text-white/75 max-w-3xl mb-8">
            Duplicate records, stale contacts, broken workflows, unreliable reports, and fields nobody understands. We clean up HubSpot, Salesforce, and Zoho CRMs so sales and marketing teams can trust the system again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
            <Link href="/ai-crm-audit"><Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">Try Our AI CRM Audit</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Most CRM problems are data problems first</h2>
          <p className="text-lg text-gray-600 mb-4">
            When reports are wrong, follow-ups are missed, or automation sends the wrong message, the root cause is often messy data. Duplicate records inflate contact counts. Missing fields break segmentation. Old workflows fire on records that should have been archived months ago.
          </p>
          <p className="text-lg text-gray-600">
            Our cleanup process starts with an audit, not random editing. We identify the mess, prioritize what affects revenue, clean the data, repair the logic, and leave your team with a maintenance playbook so the CRM does not drift back into chaos.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What CRM cleanup includes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cleanupAreas.map((area, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader><area.icon className="w-8 h-8 text-emerald-600 mb-2" /><CardTitle className="text-lg">{area.title}</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">{area.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Signs your CRM needs cleanup</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Sales reps maintain private spreadsheets because they do not trust the CRM',
              'The same contact exists multiple times under different emails or companies',
              'Lifecycle stages do not match the real buying journey',
              'Marketing emails go to bad segments or stale contacts',
              'Deal reports disagree with what the team says is actually happening',
              'Workflows exist, but nobody knows why they fire or who built them',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-emerald-50 border border-emerald-100 p-4 rounded-xl"><CheckCircle className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" /><p className="text-gray-700">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">CRM Cleanup FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <Card key={i} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{faq.a}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/crm-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-emerald-700">CRM Cleanup Service</p><p className="text-sm text-gray-600">Detailed cleanup scope and pricing</p></Link>
            <Link href="/blog/marketing-automation-needs-crm-cleanup" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-emerald-700">Automation Needs Clean Data</p><p className="text-sm text-gray-600">Why cleanup comes before workflows</p></Link>
            <Link href="/contact" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow"><p className="font-medium text-emerald-700">Contact Emergent Logic</p><p className="text-sm text-gray-600">Ask about your CRM cleanup</p></Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
