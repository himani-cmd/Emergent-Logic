import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Database } from 'lucide-react';

export const metadata = {
  title: 'CRM Implementation Services | Salesforce, HubSpot, Odoo | Emergent Logic',
  description: 'Expert CRM implementation services in Surrey, BC. We implement Salesforce, HubSpot, Odoo, Microsoft Dynamics, and 12+ CRM platforms. AI-accelerated delivery.',
  alternates: { canonical: 'https://www.emergent-logic.ca/crm-implementation' },
};

const platforms = ['Salesforce', 'HubSpot', 'Odoo', 'Microsoft Dynamics', 'Zoho CRM', 'NetSuite', 'Pipedrive', 'Freshsales', 'Monday CRM', 'Copper', 'Insightly', 'Close CRM'];

const features = [
  'Complete CRM setup and configuration',
  'Custom pipeline and workflow design',
  'Data migration from any source',
  'Third-party integrations',
  'Team training and adoption support',
  'Ongoing optimization and support',
];

export default function CrmImplementation() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'CRM Implementation', href: '/crm-implementation' }]} />
          <div className="flex items-center gap-4 mb-6"><div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"><Database className="w-8 h-8 text-white" /></div></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CRM Implementation Services</h1>
          <p className="text-xl text-white/70 max-w-3xl mb-8">Stop losing leads in spreadsheets. We implement and optimize the CRM that fits your team — Salesforce, HubSpot, Odoo, Microsoft Dynamics, Zoho, and more. AI-accelerated delivery means results in weeks, not months.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What's included</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {features.map((feature, i) => (<div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-violet-500" /><span className="text-gray-700">{feature}</span></div>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">CRM platforms we implement</h2>
          <div className="flex flex-wrap gap-4">
            {platforms.map((p, i) => (<div key={i} className="px-6 py-3 bg-white rounded-xl shadow-sm border font-medium text-gray-700">{p}</div>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to implement your CRM?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free strategy call to discuss your needs.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>
      <Footer />
      <CookieConsent />
    </main>
  );
}
