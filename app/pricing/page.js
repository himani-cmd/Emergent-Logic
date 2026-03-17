import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Pricing — CRM & Marketing Automation Packages | Emergent Logic | Surrey BC',
  description: 'Transparent fixed-price CRM implementation packages for Surrey and Vancouver businesses. Starting at $1,500. Book a free strategy call today.',
  alternates: { canonical: 'https://www.emergent-logic.ca/pricing' },
  openGraph: {
    title: 'Pricing — CRM & Marketing Automation Packages | Emergent Logic',
    description: 'Transparent fixed-price CRM implementation packages for Surrey and Vancouver businesses. Starting at $1,500.',
    type: 'website',
  },
};

const packages = [
  {
    name: 'CRM Starter',
    price: '$1,500',
    description: 'Perfect for small businesses getting started with CRM',
    features: [
      'HubSpot CRM setup',
      'Up to 500 contacts imported',
      '1 sales pipeline configured',
      '5 email templates',
      '1 hour team training',
      '30 day email support',
    ],
  },
  {
    name: 'CRM Growth',
    price: '$3,500',
    popular: true,
    description: 'For growing businesses ready to scale their sales process',
    features: [
      'Full CRM setup (HubSpot or Salesforce)',
      'Complete data migration',
      '3 automated workflows',
      'Lead scoring configured',
      'Reports and dashboards',
      '2 hour team training',
      '60 day email support',
    ],
  },
  {
    name: 'Website + CRM Bundle',
    price: '$4,500',
    description: 'Complete digital presence with integrated CRM',
    features: [
      '5 page HubSpot CMS website',
      'HubSpot CRM connected',
      'Contact form to CRM',
      '2 email automation sequences',
      'Basic SEO setup',
      '1 month support',
    ],
  },
];

const retainer = {
  name: 'Monthly Retainer',
  price: '$1,500',
  period: '/month',
  description: 'Ongoing CRM management and optimization',
  features: [
    '8 hours CRM management',
    'Monthly reporting',
    'Ongoing automation improvements',
    'Priority email support',
  ],
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Pricing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Transparent Pricing. No Surprises.</h1>
            <p className="text-xl text-white/70">
              Fixed price packages designed for growing businesses in Surrey and Vancouver. Know exactly what you're paying before we start.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <Card key={i} className={`relative border-0 shadow-lg ${pkg.popular ? 'ring-2 ring-violet-500 scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-violet-600">
                      <Star className="w-3 h-3 mr-1" /> Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-5xl font-bold text-violet-600 mt-4">{pkg.price}</div>
                  <CardDescription className="mt-2">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full ${pkg.popular ? 'bg-violet-600 hover:bg-violet-700' : ''}`} variant={pkg.popular ? 'default' : 'outline'}>
                      Book Free Strategy Call
                    </Button>
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
                <div className="text-5xl font-bold text-violet-600 mt-4">
                  {retainer.price}<span className="text-xl text-gray-500">{retainer.period}</span>
                </div>
                <CardDescription className="mt-2">{retainer.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 max-w-md mx-auto">
                  {retainer.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                      Book Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing FAQ</h2>
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader><CardTitle className="text-lg">What's included in the fixed price?</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">Everything listed in the package. No hidden fees, no surprise charges. The price you see is the price you pay.</p></CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader><CardTitle className="text-lg">What if I need something custom?</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">Book a free strategy call and we'll create a custom quote based on your specific needs. Most custom projects fall within 20% of our standard packages.</p></CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader><CardTitle className="text-lg">Do you offer payment plans?</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">Yes. For projects over $3,000, we offer 50% upfront and 50% on completion. Monthly retainers are billed at the start of each month.</p></CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free 30-minute strategy call. No obligation, no sales pressure.</p>
          <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button>
          </a>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
