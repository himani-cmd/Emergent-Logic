import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Code } from 'lucide-react';

export const metadata = {
  title: 'Web Development Services Surrey BC',
  description: 'AI-accelerated web development in Surrey BC. Custom websites, web apps, landing pages, and e-commerce. Built to convert, delivered in weeks.',
  alternates: { canonical: 'https://www.emergent-logic.ca/web-development' },
  openGraph: {
    title: 'Web Development Services Surrey BC | Emergent Logic',
    description: 'AI-accelerated web development in Surrey BC. Custom websites, web apps, and e-commerce. Delivered in weeks.',
    url: 'https://www.emergent-logic.ca/web-development',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const technologies = ['Next.js', 'React', 'HubSpot CMS', 'WordPress', 'Shopify', 'Node.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Vercel', 'AWS', 'Cloudflare'];

const features = [
  'Custom website design and development',
  'Web application development',
  'Landing page optimization',
  'E-commerce solutions',
  'CRM integration',
  'SEO-optimized architecture',
];

export default function WebDevelopment() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Web Development', href: '/web-development' }]} />
          <div className="flex items-center gap-4 mb-6"><div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center"><Code className="w-8 h-8 text-white" /></div></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Web Development Services</h1>
          <p className="text-xl text-white/70 max-w-3xl mb-8">A website that generates revenue, not just traffic. We build custom websites and web applications using AI-accelerated development — delivered in weeks, not months. Every site is a lead generation asset connected to your CRM.</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies we use</h2>
          <div className="flex flex-wrap gap-4">
            {technologies.map((t, i) => (<div key={i} className="px-6 py-3 bg-white rounded-xl shadow-sm border font-medium text-gray-700">{t}</div>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to build your website?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free strategy call to discuss your project.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>
      <Footer />
      <CookieConsent />
    </main>
  );
}
