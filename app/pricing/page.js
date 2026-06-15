import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'CRM Implementation Pricing & Packages',
  description: 'Fixed pricing for CRM implementation. Starting from $1,500. Salesforce, HubSpot, Zoho and more. Book a free strategy call.',
  alternates: { canonical: 'https://www.emergent-logic.ca/pricing' },
  openGraph: {
    title: 'CRM Implementation Pricing & Packages | Emergent Logic',
    description: 'Fixed pricing for CRM implementation. Starting from $1,500. Salesforce, HubSpot, Zoho and more.',
    url: 'https://www.emergent-logic.ca/pricing',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const packages = [
  {
    name: 'CRM Starter',
    price: '$1,500',
    bestFor: 'Small businesses new to CRM',
    features: ['HubSpot, Zoho, or Odoo CRM setup', 'Up to 500 contacts imported', '1 sales pipeline configured', '5 email templates created', '1 hour team training session', '30 day email support'],
  },
  {
    name: 'CRM Growth',
    price: '$3,500',
    popular: true,
    bestFor: 'Growing teams ready to scale',
    features: ['Salesforce or HubSpot full setup', 'Complete data migration', '3 automated workflows built', 'Lead scoring configured', 'Custom reports and dashboards', '2 hour team training session', '60 day email support'],
  },
  {
    name: 'Website + CRM Bundle',
    price: '$3,500',
    bestFor: 'Businesses needing website + CRM',
    features: ['HubSpot CMS or WordPress website', 'Up to 5 pages built', 'CRM fully connected to website', 'Contact form feeds CRM automatically', '2 email automation sequences', 'Basic SEO setup', '1 month post-launch support'],
  },
  {
    name: 'Marketing Automation',
    price: '$1,500',
    bestFor: 'Businesses with CRM needing automation',
    features: ['3 automated email sequences', 'Lead nurturing workflow', 'Lead scoring setup', 'Campaign reporting dashboard', '1 hour training session', '30 day support'],
  },
];

const retainer = {
  name: 'Monthly Retainer',
  price: '$1,000',
  period: '/month',
  bestFor: 'Businesses wanting ongoing expert support',
  features: ['Monthly CRM management', 'Automation improvements', 'Data quality monitoring', 'Monthly performance report', 'Priority support', 'Quarterly strategy review', 'No long contracts — cancel anytime'],
};

const addons = [
  { name: 'Zapier/Make Integration', price: 'from $500' },
  { name: 'QuickBooks/Xero Integration', price: 'from $800' },
  { name: 'Shopify + CRM Integration', price: 'from $1,500' },
  { name: 'SMS Automation (Twilio)', price: 'from $800' },
  { name: 'CRM Data Migration', price: 'from $1,500' },
  { name: 'Team Training Session', price: 'from $500' },
  { name: 'CRM Health Audit', price: 'from $500' },
  { name: 'Custom Dashboard Build', price: 'from $800' },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing.<br/>No Surprises. No Hidden Fees.</h1>
          <p className="text-xl text-white/70 max-w-3xl">Every project starts with a free 30-minute strategy call so we can scope your exact needs and confirm the right package for your business.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {packages.map((pkg, i) => (
              <Card key={i} className={`relative border-0 shadow-lg ${pkg.popular ? 'ring-2 ring-violet-500 scale-105' : ''}`}>
                {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge className="bg-violet-600"><Star className="w-3 h-3 mr-1" /> Most Popular</Badge></div>}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-sm text-gray-500">Starting from</div>
                  <div className="text-4xl font-bold text-violet-600">{pkg.price}</div>
                  <CardDescription className="text-sm">Best for: {pkg.bestFor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />{feature}
                      </li>
                    ))}
                  </ul>
                  <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full ${pkg.popular ? 'bg-violet-600 hover:bg-violet-700' : ''}`} variant={pkg.popular ? 'default' : 'outline'}>Book a Free Strategy Call</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Retainer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-violet-100 text-violet-700">Ongoing Support</Badge>
                <CardTitle className="text-2xl">{retainer.name}</CardTitle>
                <div className="text-sm text-gray-500">Starting from</div>
                <div className="text-5xl font-bold text-violet-600">{retainer.price}<span className="text-xl text-gray-500">{retainer.period}</span></div>
                <CardDescription>Best for: {retainer.bestFor}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 max-w-md mx-auto">
                  {retainer.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />{feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-violet-600 hover:bg-violet-700">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">Add-Ons</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Popular Add-Ons</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {addons.map((addon, i) => (
              <Card key={i} className="border-0 shadow-md text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{addon.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-violet-600 font-semibold">{addon.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6">Not sure which package is right for you? Book a free 30-minute strategy call. We'll recommend exactly what your business needs — no pressure, no obligation.</p>
            <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
