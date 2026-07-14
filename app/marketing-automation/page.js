import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

export const metadata = {
  title: 'Marketing Automation Services',
  description: 'HubSpot, Marketo, Pardot, ActiveCampaign automation. Turn your marketing into a revenue machine. AI-accelerated delivery.',
  alternates: { canonical: 'https://www.emergent-logic.ca/marketing-automation' },
  openGraph: {
    title: 'Marketing Automation Services | Emergent Logic',
    description: 'HubSpot, Marketo, Pardot, ActiveCampaign automation. Turn your marketing into a revenue machine.',
    url: 'https://www.emergent-logic.ca/marketing-automation',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const platforms = ['HubSpot Marketing Hub', 'Salesforce Marketing Cloud', 'Marketo Engage', 'Pardot', 'ActiveCampaign', 'Klaviyo', 'Mailchimp', 'Brevo', 'Customer.io', 'Iterable', 'Eloqua', 'Drip'];

const features = [
  'Marketing automation platform setup',
  'Email nurture sequence design',
  'Lead scoring and segmentation',
  'Landing page and form creation',
  'Campaign automation workflows',
  'Analytics and reporting dashboards',
];

export default function MarketingAutomation() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Marketing Automation', href: '/marketing-automation' }]} />
          <div className="flex items-center gap-4 mb-6"><div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center"><Zap className="w-8 h-8 text-white" /></div></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Marketing Automation Services</h1>
          <p className="text-xl text-white/70 max-w-3xl mb-8">Turn your marketing into a machine that runs while you sleep. We design and implement marketing automation systems using HubSpot, Marketo, Pardot, and more. Nurture leads, score prospects, and close deals — automatically.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Marketing automation platforms we master</h2>
          <div className="flex flex-wrap gap-4">
            {platforms.map((p, i) => (<div key={i} className="px-6 py-3 bg-white rounded-xl shadow-sm border font-medium text-gray-700">{p}</div>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to automate your marketing?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free strategy call to discuss your automation needs.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>
      <Footer />
      <CookieConsent />
    </main>
  );
}
