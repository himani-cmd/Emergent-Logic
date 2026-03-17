import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Zap, Link2, Code, Settings, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'CRM & Marketing Services Vancouver',
  description: 'CRM implementation, marketing automation, integrations, and website bundles for Vancouver businesses. Starting from $1,500.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services' },
  openGraph: {
    title: 'CRM & Marketing Services Vancouver | Emergent Logic',
    description: 'CRM implementation, marketing automation, integrations, and website bundles for Vancouver businesses. Starting from $1,500.',
    url: 'https://www.emergent-logic.ca/services',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const services = [
  {
    icon: Database,
    title: 'CRM Implementation',
    headline: 'CRM That Your Team Actually Uses',
    description: 'We implement and configure the right CRM for your business — fast. From initial setup and data migration to workflows, pipelines, and team training. Delivered in 2-4 weeks.',
    platforms: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Pipedrive', 'Odoo', 'Monday.com CRM', 'ActiveCampaign'],
    price: 'Starting from $1,500',
    timeline: '2-4 weeks',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    headline: 'Turn Your Marketing Into a Machine That Runs While You Sleep',
    description: 'We design and build marketing automation workflows that nurture leads, follow up automatically, and convert prospects into customers — without manual effort from your team.',
    platforms: ['HubSpot Marketing Hub', 'Salesforce Marketing Cloud', 'Pardot', 'ActiveCampaign', 'Klaviyo', 'Mailchimp'],
    price: 'Starting from $1,500',
    timeline: '1-2 weeks',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Link2,
    title: 'Integrations & Automation',
    headline: 'Connect Everything. Automate the Rest.',
    description: 'We connect your CRM to every tool your business uses — so data flows automatically, nothing falls through the cracks, and your team stops doing manual data entry forever.',
    platforms: ['Zapier', 'Make', 'Celigo', 'QuickBooks', 'Xero', 'Shopify', 'Slack', 'Twilio SMS', 'LinkedIn Sales Navigator', 'Calendly', 'Gmail', 'Outlook'],
    price: 'Starting from $500 per integration',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Code,
    title: 'Website + CRM Bundle',
    headline: 'A Website That Feeds Your CRM Automatically',
    description: 'We build your website and connect it to your CRM from day one — so every visitor, form submission, and lead is automatically tracked, scored, and followed up. No separate developer needed. Everything in one place.',
    platforms: ['HubSpot CMS', 'WordPress', 'Webflow'],
    price: 'Starting from $3,500',
    timeline: '2-3 weeks',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Settings,
    title: 'Monthly Retainer',
    headline: 'Your CRM. Managed. Optimized. Always Working.',
    description: 'Keep your CRM healthy, your automations running, and your data clean — with ongoing monthly support from our team. No long contracts. Cancel anytime.',
    features: ['Monthly CRM management', 'Automation improvements', 'Data quality monitoring', 'Monthly performance report', 'Priority email support', 'Quarterly strategy review'],
    price: 'Starting from $1,000/month',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CRM & Automation Services</h1>
          <p className="text-xl text-white/70 max-w-3xl">Everything you need to turn your CRM into a revenue-generating machine. AI-accelerated delivery. Fixed pricing. Results in weeks, not months.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, i) => (
              <Card key={i} className="border-0 shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className={`bg-gradient-to-br ${service.color} p-8 lg:p-12 text-white`}>
                    <service.icon className="w-12 h-12 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                    <div className="text-3xl font-bold mb-2">{service.price}</div>
                    {service.timeline && <div className="text-white/80">Timeline: {service.timeline}</div>}
                  </div>
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.headline}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    {service.platforms && (
                      <div className="mb-6">
                        <div className="text-sm font-medium text-gray-500 mb-3">Platforms:</div>
                        <div className="flex flex-wrap gap-2">
                          {service.platforms.map((platform, j) => (
                            <Badge key={j} variant="secondary" className="bg-gray-100">{platform}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {service.features && (
                      <div className="mb-6">
                        <div className="text-sm font-medium text-gray-500 mb-3">Includes:</div>
                        <ul className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                              <CheckCircle className="w-4 h-4 text-violet-500" />{feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-violet-600 hover:bg-violet-700">Book Free Strategy Call <ArrowRight className="w-4 h-4 ml-2" /></Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Migration Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-xl max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <Badge className="w-fit mx-auto mb-4 bg-violet-100 text-violet-700">CRM Migration</Badge>
              <CardTitle className="text-3xl">Migrating From an Old CRM?</CardTitle>
              <CardDescription className="text-lg">We migrate your contacts, deals, history, and data from any old CRM to your new platform — cleanly, completely, and without losing anything. Keap, ACT!, Zoho, spreadsheets — we have migrated them all.</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-violet-600 mb-4">Starting from $1,500</div>
              <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700">Book Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free 30-minute strategy call. We'll recommend exactly what your business needs.</p>
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
