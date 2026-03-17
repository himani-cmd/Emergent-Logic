import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';

export const metadata = {
  title: 'CRM Consultant Langley BC | Salesforce HubSpot Zoho',
  description: 'Professional CRM consulting in Langley, BC. Salesforce, HubSpot, Zoho, and Odoo implementation. AI-accelerated delivery in 2-4 weeks. Book a free strategy call today.',
  alternates: { canonical: 'https://www.emergent-logic.ca/crm-consultant-langley' },
};

const platforms = ['Salesforce', 'HubSpot', 'Zoho CRM', 'Odoo', 'Pipedrive', 'Monday CRM', 'ActiveCampaign', 'Freshsales', 'Copper', 'Close CRM'];

const services = [
  { title: 'CRM Implementation', description: 'Full CRM setup including pipelines, custom fields, automations, dashboards, and team training. Tailored for Langley businesses.' },
  { title: 'Data Migration', description: 'Clean migration from spreadsheets, legacy CRMs, or any other source into your new platform. We validate every record.' },
  { title: 'Marketing Automation', description: 'Email sequences, lead nurturing workflows, and campaign automation connected directly to your CRM.' },
  { title: 'Integrations', description: 'Connect your CRM to QuickBooks, Shopify, email, website forms, and every other tool your business uses.' },
  { title: 'Training & Adoption', description: 'Hands-on, role-specific training so your team actually uses the CRM. We make sure adoption sticks.' },
  { title: 'Ongoing Support', description: 'Monthly retainer options to keep your CRM healthy, your automations running, and your data clean.' },
];

const reasons = [
  'Local CRM consulting firm serving Langley and the Greater Vancouver region',
  'Platform-agnostic: we implement 10+ CRM platforms and recommend what fits your business',
  'AI-accelerated delivery: results in 2-4 weeks, not 3-6 months',
  '40-60% lower cost than enterprise consulting firms',
  'Every implementation includes data migration, integration, and hands-on training',
  'No long contracts — cancel anytime',
];

const faqs = [
  { q: 'Which CRM is best for Langley businesses?', a: 'For most Langley SMBs, HubSpot or Zoho CRM are great starting points — they are fast to implement, intuitive, and affordable. Larger or more complex businesses often benefit from Salesforce. We recommend based on your needs.' },
  { q: 'How much does CRM consulting cost in Langley?', a: "Emergent Logic's CRM implementations start from $1,500 for basic setups. Our AI-accelerated methodology costs 40-60% less than traditional consulting firms. Fixed pricing, no surprises." },
  { q: 'How long does a CRM implementation take?', a: 'Most small business CRM implementations are completed in 2-4 weeks using our AI-accelerated approach. Mid-market implementations take 4-8 weeks — significantly faster than the 3-6 month industry average.' },
  { q: 'Can you migrate data from our old CRM?', a: 'Yes. We handle CRM migrations regularly — from spreadsheets, legacy systems, or competing platforms. We clean, map, and migrate your data with zero loss.' },
];

export default function CrmConsultantLangley() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'CRM Consultant Langley', href: '/crm-consultant-langley' },
          ]} />
          <div className="flex items-center gap-2 text-violet-300 mb-4"><MapPin className="w-5 h-5" /><span>Langley, BC</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CRM Consultant in Langley, BC</h1>
          <p className="text-xl text-white/70 max-w-3xl mb-8">
            Professional CRM consulting for Langley businesses. We implement Salesforce, HubSpot, Zoho, and more using AI-accelerated delivery — so your CRM is live in weeks, not months. Fixed pricing. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
            <Link href="/services"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">View All Services</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CRM platforms we implement in Langley</h2>
          <p className="text-gray-600 mb-8">We recommend the right platform for your business — not the one that pays us the highest commission.</p>
          <div className="flex flex-wrap gap-4">
            {platforms.map((platform, i) => (<div key={i} className="px-6 py-3 bg-gray-50 rounded-xl border font-medium text-gray-700">{platform}</div>))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What we do for Langley businesses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader><CardTitle className="text-lg">{service.title}</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">{service.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Langley businesses choose Emergent Logic</h2>
          <ul className="space-y-4 max-w-3xl">
            {reasons.map((reason, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-violet-500 flex-shrink-0" /><span className="text-gray-700">{reason}</span></li>))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">CRM Consulting FAQ — Langley, BC</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq, i) => (<Card key={i} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{faq.a}</p></CardContent></Card>))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to find the right CRM for your Langley business?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free 30-minute strategy call. We will assess your needs and recommend the right CRM platform — no obligation, no sales pitch.</p>
          <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
