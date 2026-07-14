import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing & SEO Services',
  description: 'Data-driven digital marketing in Surrey BC. SEO, AEO, Google Ads, and social media marketing. Be found everywhere.',
  alternates: { canonical: 'https://www.emergent-logic.ca/digital-marketing' },
  openGraph: {
    title: 'Digital Marketing & SEO Services | Emergent Logic',
    description: 'Data-driven digital marketing in Surrey BC. SEO, AEO, Google Ads, and social media marketing.',
    url: 'https://www.emergent-logic.ca/digital-marketing',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const services = ['SEO (Search Engine Optimization)', 'AEO (Answer Engine Optimization)', 'GEO (Generative Engine Optimization)', 'Google Ads Management', 'Social Media Marketing', 'Content Strategy', 'Email Marketing', 'Analytics & Reporting'];

const features = [
  'Comprehensive SEO audit and strategy',
  'AI search optimization (AEO/GEO)',
  'Google Ads campaign management',
  'Content marketing strategy',
  'Conversion rate optimization',
  'Monthly reporting and insights',
];

export default function DigitalMarketing() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Digital Marketing', href: '/digital-marketing' }]} />
          <div className="flex items-center gap-4 mb-6"><div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center"><TrendingUp className="w-8 h-8 text-white" /></div></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Digital Marketing Services</h1>
          <p className="text-xl text-white/70 max-w-3xl mb-8">Support discoverability across search and AI-assisted research with measurement, content planning, and channel-specific execution defined around the agreed scope.</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Digital marketing services</h2>
          <div className="flex flex-wrap gap-4">
            {services.map((s, i) => (<div key={i} className="px-6 py-3 bg-white rounded-xl shadow-sm border font-medium text-gray-700">{s}</div>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to grow your digital presence?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free strategy call to discuss your marketing goals.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>
      <Footer />
      <CookieConsent />
    </main>
  );
}
