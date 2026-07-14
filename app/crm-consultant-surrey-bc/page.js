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
  title: 'CRM Consultant Surrey BC',
  description: 'CRM consulting in Surrey BC. Salesforce, HubSpot, NetSuite, Odoo implementation. AI-accelerated delivery. Free strategy call.',
  alternates: { canonical: 'https://www.emergent-logic.ca/crm-consultant-surrey-bc' },
  openGraph: {
    title: 'CRM Consultant Surrey BC | Emergent Logic',
    description: 'CRM consulting in Surrey BC. Salesforce, HubSpot, NetSuite, Odoo implementation. AI-accelerated delivery.',
    url: 'https://www.emergent-logic.ca/crm-consultant-surrey-bc',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const platforms = ['Salesforce', 'HubSpot', 'NetSuite', 'Odoo', 'Microsoft Dynamics', 'Zoho CRM', 'Pipedrive', 'Freshsales', 'Monday CRM', 'Copper', 'Insightly', 'Close CRM'];

const process = [
  { step: '01', title: 'Discovery', description: 'We map your sales process, identify gaps, and understand your team\'s workflow before touching any software.' },
  { step: '02', title: 'Platform Selection', description: 'We recommend the CRM that fits your business size, complexity, and budget — with a clear explanation of why.' },
  { step: '03', title: 'Configuration', description: 'Pipelines, deal stages, custom fields, dashboards, and automations configured to match your exact process.' },
  { step: '04', title: 'Data Migration', description: 'Controlled migration from supported sources with backups, field mapping, test imports, validation, rollback, and approval.' },
  { step: '05', title: 'Integration', description: 'Connect your CRM to email, website, marketing automation, accounting, and every other tool in your stack.' },
  { step: '06', title: 'Training & Launch', description: 'Hands-on, role-specific training for your team. We make sure your CRM gets adopted — not ignored.' },
];

const reasons = [
  'Local CRM consultant based right here in Surrey, BC',
  'Platform-aware recommendations based on your process, team, and budget',
  'Focused delivery plans with scope, milestones, and ownership defined before work begins',
  'Practical support for data cleanup, migration, workflows, reporting, and integrations',
  'Role-specific training and clear documentation for the people using the CRM',
  'Post-launch support available when the team needs additional optimization',
];

const faqs = [
  { q: 'Which CRM is best for small businesses in Surrey, BC?', a: 'The right CRM depends on your sales process, number of users, reporting needs, integrations, and internal capacity. HubSpot can suit teams that want an approachable sales and marketing platform, while Salesforce is often considered when deeper customization and governance are required.' },
  { q: 'How much does CRM consulting cost in Surrey?', a: 'Cost depends on the number of users, data condition, workflows, integrations, and training required. We first identify the specific backlog or implementation scope, then provide a clear estimate before work begins.' },
  { q: 'Do you offer CRM training?', a: 'Yes. Every CRM implementation includes role-specific training for your team. We are local in Surrey, so we can provide in-person training sessions when needed.' },
  { q: 'Can you help us switch from one CRM to another?', a: 'Yes. We can assess data sources, clean and map records, run a controlled migration, and reconcile the result before launch. The migration plan and validation steps are agreed before records are moved.' },
];

export default function CrmConsultantSurrey() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="overflow-hidden pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/#services' },
            { label: 'CRM Consultant Surrey', href: '/crm-consultant-surrey-bc' },
          ]} />
          <div className="flex items-center gap-2 text-violet-300 mb-4"><MapPin className="w-5 h-5" /><span>Surrey, BC</span></div>
          <h1 className="max-w-4xl break-words text-4xl md:text-5xl font-bold leading-tight text-white mb-4">CRM Consultant in Surrey, BC</h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/75 max-w-3xl mb-8">
            Practical CRM consulting for Surrey businesses that need cleaner data, clearer pipelines, reliable follow-up, useful reporting, or a better implementation plan. We work across leading CRM platforms and define the scope, migration, workflows, integrations, and training before delivery begins.
          </p>
          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="w-full sm:w-auto"><Button size="lg" className="w-full bg-white text-violet-900 hover:bg-violet-100 sm:w-auto">Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            <Link href="/services/crm-implementation" className="w-full sm:w-auto"><Button size="lg" variant="outline" className="w-full !border-white/40 !bg-transparent !text-white hover:!bg-white/10 hover:!text-white sm:w-auto">Full CRM Services</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CRM platforms we implement in Surrey</h2>
          <p className="text-gray-600 mb-8">We compare platforms against your process, team capacity, integration needs, and budget before recommending a direction.</p>
          <div className="flex flex-wrap gap-4">
            {platforms.map((platform, i) => (<div key={i} className="px-6 py-3 bg-gray-50 rounded-xl border font-medium text-gray-700">{platform}</div>))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our CRM consulting process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="text-4xl font-bold text-violet-200 mb-2">{item.step}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-gray-600">{item.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Surrey businesses choose a focused CRM partner</h2>
          <ul className="space-y-4 max-w-3xl">
            {reasons.map((reason, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-violet-500 flex-shrink-0" /><span className="text-gray-700">{reason}</span></li>))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related resources</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
            <Link href="/hubspot-consultant-surrey-bc"><Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardHeader><CardTitle className="text-lg">HubSpot Consultant Surrey BC</CardTitle></CardHeader></Card></Link>
            <Link href="/blog/what-is-crm-implementation-canada"><Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardHeader><CardTitle className="text-lg">What is CRM Implementation? A Step-by-Step Guide</CardTitle></CardHeader></Card></Link>
            <Link href="/blog/hubspot-vs-salesforce-canada"><Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardHeader><CardTitle className="text-lg">HubSpot vs Salesforce: Which CRM is Right?</CardTitle></CardHeader></Card></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">CRM Consulting FAQ — Surrey, BC</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq, i) => (<Card key={i} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{faq.a}</p></CardContent></Card>))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to find the right CRM for your Surrey business?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free 30-minute strategy call. We will assess your needs and recommend the right CRM platform — no obligation, no sales pitch.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
