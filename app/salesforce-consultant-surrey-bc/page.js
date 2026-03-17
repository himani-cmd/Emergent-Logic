import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Award, Clock, Percent } from 'lucide-react';

export const metadata = {
  title: 'Salesforce Consultant Surrey BC',
  description: "Surrey's dedicated Salesforce consultant. 6x Certified. CRM implementation and optimization. Results in weeks, not months.",
  alternates: { canonical: 'https://www.emergent-logic.ca/salesforce-consultant-surrey-bc' },
  openGraph: {
    title: 'Salesforce Consultant Surrey BC | Emergent Logic',
    description: "Surrey's dedicated Salesforce consultant. 6x Certified. CRM implementation and optimization.",
    url: 'https://www.emergent-logic.ca/salesforce-consultant-surrey-bc',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const services = [
  { title: 'Salesforce Sales Cloud', description: 'Pipeline management, lead tracking, opportunity forecasting, and custom dashboards for your Surrey-based sales team.' },
  { title: 'Salesforce Service Cloud', description: 'Case management, knowledge base, and customer portal setup for service-oriented businesses in the Surrey area.' },
  { title: 'HubSpot CRM Implementation', description: 'Full CRM setup including pipelines, automation, email sequences, and reporting. Ideal for growing Surrey SMBs.' },
  { title: 'HubSpot Marketing Hub', description: 'Marketing automation, lead nurturing, landing pages, and email campaigns — all connected to your CRM.' },
  { title: 'Data Migration', description: 'Clean migration from spreadsheets, legacy CRMs, or other systems into Salesforce or HubSpot. No data left behind.' },
  { title: 'Training & Adoption', description: 'Hands-on, role-specific training so your team actually uses the CRM. We are local in Surrey for in-person sessions.' },
];

const reasons = [
  'We are based in Surrey — not a remote agency on the other side of the country',
  '6x Salesforce Certified with real implementation experience',
  'AI-accelerated methodology delivers in weeks, not months',
  'We implement both Salesforce AND HubSpot — we recommend what fits, not what pays us more',
  '40-60% lower cost than traditional Salesforce consulting partners',
  'Free 30-minute strategy call with no obligation or sales pressure',
];

const faqs = [
  { q: 'How much does a Salesforce consultant cost in Surrey, BC?', a: "Emergent Logic's AI-accelerated Salesforce implementations cost 40-60% less than traditional consultants. We offer free 30-minute strategy calls to scope your project and provide a transparent quote." },
  { q: 'How long does Salesforce implementation take?', a: 'With our AI-accelerated approach, small business Salesforce implementations take 2-4 weeks. Mid-market implementations take 4-8 weeks — significantly faster than the industry average of 3-6 months.' },
  { q: 'Do you also implement HubSpot?', a: 'Yes. Emergent Logic implements both Salesforce and HubSpot. We recommend the right platform based on your business needs, not our preferences. Many Surrey businesses choose HubSpot for its ease of use and integrated marketing tools.' },
];

export default function SalesforceConsultantSurrey() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'Salesforce Consultant Surrey', href: '/salesforce-consultant-surrey-bc' },
          ]} />
          <div className="flex items-center gap-2 text-violet-300 mb-4">
            <MapPin className="w-5 h-5" />
            <span>Surrey, BC</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Surrey's Dedicated Salesforce & HubSpot Consultant</h1>
          <p className="text-xl text-white/70 max-w-3xl mb-8">
            Looking for a Salesforce consultant in Surrey, BC? Emergent Logic is Surrey's only dedicated Salesforce and HubSpot consulting firm. We are 6x Salesforce Certified and deliver results in weeks, not months — using AI-accelerated implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            <Link href="/crm-implementation"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">View CRM Services</Button></Link>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center"><div className="flex items-center justify-center gap-2 text-white mb-1"><Award className="w-5 h-5 text-violet-400" /><span className="text-3xl font-bold">6x</span></div><div className="text-white/60 text-sm">Salesforce Certified</div></div>
            <div className="text-center"><div className="flex items-center justify-center gap-2 text-white mb-1"><Clock className="w-5 h-5 text-violet-400" /><span className="text-3xl font-bold">2-4 wk</span></div><div className="text-white/60 text-sm">Avg. Implementation</div></div>
            <div className="text-center"><div className="flex items-center justify-center gap-2 text-white mb-1"><Percent className="w-5 h-5 text-violet-400" /><span className="text-3xl font-bold">40-60%</span></div><div className="text-white/60 text-sm">Less Than Agencies</div></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What we do for Surrey businesses</h2>
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Surrey businesses choose Emergent Logic</h2>
          <ul className="space-y-4 max-w-3xl">
            {reasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-violet-500 flex-shrink-0" /><span className="text-gray-700">{reason}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Not sure which CRM is right?</h2>
          <p className="text-gray-600 mb-4">Read our detailed comparison to help you decide: <Link href="/blog/hubspot-vs-salesforce-canada" className="text-violet-600 hover:underline">HubSpot vs Salesforce: Which CRM is Right for Your Canadian Business?</Link></p>
          <p className="text-gray-600">Or learn more about our full <Link href="/crm-implementation" className="text-violet-600 hover:underline">CRM implementation services</Link>.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Salesforce Consulting FAQ — Surrey, BC</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">{faq.a}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to talk Salesforce or HubSpot?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free 30-minute strategy call. We will assess your CRM needs and recommend the right path — no obligation, no sales pitch.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
