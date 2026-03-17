import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Zap, BarChart3, Globe, Settings } from 'lucide-react';

export const metadata = {
  title: 'HubSpot Consultant Vancouver BC',
  description: 'Expert HubSpot consulting in Vancouver. CRM setup, Marketing Hub automation, and CMS development. Book a free strategy call.',
  alternates: { canonical: 'https://www.emergent-logic.ca/hubspot-consultant-vancouver' },
  openGraph: {
    title: 'HubSpot Consultant Vancouver BC | Emergent Logic',
    description: 'Expert HubSpot consulting in Vancouver. CRM setup, Marketing Hub automation, and CMS development.',
    url: 'https://www.emergent-logic.ca/hubspot-consultant-vancouver',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const services = [
  { title: 'HubSpot CRM Setup', description: 'Complete CRM configuration: pipelines, deal stages, contact properties, email templates, and custom dashboards tailored to your Vancouver business.' },
  { title: 'Marketing Hub Automation', description: 'Lead nurturing workflows, email sequences, lead scoring, A/B testing, and campaign attribution — all automated.' },
  { title: 'Sales Hub Configuration', description: 'Meeting scheduling, email tracking, deal pipelines, quotes, and sales analytics to supercharge your team\'s productivity.' },
  { title: 'HubSpot CMS Development', description: 'Custom website themes, landing pages, and blog templates built on HubSpot CMS — fully integrated with your CRM.' },
  { title: 'Service Hub Setup', description: 'Ticketing, knowledge base, customer portal, and feedback surveys to deliver exceptional customer experience.' },
  { title: 'Migration & Integration', description: 'Seamless migration from Salesforce, Mailchimp, or any CRM. We integrate HubSpot with your entire tech stack.' },
];

const hubs = [
  { icon: Zap, name: 'Marketing Hub', desc: 'Automation & nurturing' },
  { icon: BarChart3, name: 'Sales Hub', desc: 'Pipeline & forecasting' },
  { icon: Globe, name: 'CMS Hub', desc: 'Websites & landing pages' },
  { icon: Settings, name: 'Operations Hub', desc: 'Data sync & workflows' },
];

const reasons = [
  'Local presence — we serve Metro Vancouver from our Surrey, BC office',
  'All-in-one expertise: CRM, Marketing Hub, Sales Hub, CMS, and Service Hub',
  'AI-accelerated delivery: live in 2-4 weeks, not 2-4 months',
  'We build revenue systems, not just databases',
  '40-60% lower cost than traditional HubSpot Solutions Partners',
  'Ongoing support and optimization after launch',
];

const faqs = [
  { q: 'How much does HubSpot implementation cost in Vancouver?', a: 'HubSpot CRM is free to start. Professional implementation with Emergent Logic costs 40-60% less than traditional agencies — with faster delivery. Contact us for a custom quote.' },
  { q: 'What HubSpot Hubs do you implement?', a: 'We implement all HubSpot Hubs: CRM, Sales Hub, Marketing Hub, Service Hub, CMS Hub, and Operations Hub. Most Vancouver businesses start with CRM + Marketing Hub.' },
  { q: 'Can you migrate us from Salesforce to HubSpot?', a: 'Yes. We handle Salesforce-to-HubSpot migrations regularly. We clean, map, and migrate your data with zero loss — and train your team on the new platform.' },
];

export default function HubspotConsultantVancouver() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'HubSpot Consultant Vancouver', href: '/hubspot-consultant-vancouver' },
          ]} />
          <div className="flex items-center gap-2 text-violet-300 mb-4"><MapPin className="w-5 h-5" /><span>Vancouver & Metro Vancouver</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Vancouver's HubSpot CRM & Marketing Automation Expert</h1>
          <p className="text-xl text-white/70 max-w-3xl mb-8">
            Looking for a HubSpot consultant in Vancouver? Emergent Logic is Metro Vancouver's go-to HubSpot implementation partner. We set up your CRM, build your marketing automation, and connect everything into a revenue system that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            <Link href="/marketing-automation"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">Marketing Automation Services</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">HubSpot services for Vancouver businesses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{service.title}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{service.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Vancouver businesses choose us for HubSpot</h2>
          <ul className="space-y-4 max-w-3xl mb-12">
            {reasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-violet-500 flex-shrink-0" /><span className="text-gray-700">{reason}</span></li>
            ))}
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {hubs.map((hub, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm border text-center">
                <hub.icon className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{hub.name}</div>
                <div className="text-sm text-gray-500">{hub.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Not sure if HubSpot is right?</h2>
          <p className="text-gray-600 mb-4">Read our comparison: <Link href="/blog/hubspot-vs-salesforce-canada" className="text-violet-600 hover:underline">HubSpot vs Salesforce: Which CRM is Right for Your Canadian Business?</Link></p>
          <p className="text-gray-600">Learn how automation transforms your pipeline: <Link href="/blog/what-is-marketing-automation-small-business" className="text-violet-600 hover:underline">What is Marketing Automation and Does Your Business Need It?</Link></p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">HubSpot Consulting FAQ — Vancouver, BC</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq, i) => (<Card key={i} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{faq.a}</p></CardContent></Card>))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started with HubSpot?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free 30-minute strategy call. We will map out your HubSpot implementation and show you exactly what is possible.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
