import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Zap, Code, TrendingUp, ArrowRight, CheckCircle, Settings, Link2, Target, Globe, Smartphone, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'CRM & Marketing Automation Services | Surrey BC',
  description: 'Expert CRM implementation, marketing automation, and web development services in Surrey, BC. Salesforce, HubSpot, Odoo, NetSuite and more.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services' },
};

const services = [
  { icon: Database, title: 'CRM Implementation & Optimization', description: 'We implement, customize, and optimize CRM systems that become the backbone of your revenue operations.', features: ['Salesforce implementation & customization', 'HubSpot CRM setup & optimization', 'Data migration & cleansing', 'Custom workflows & automation', 'Team training & adoption', 'Ongoing support & optimization'], href: '/crm-implementation' },
  { icon: Zap, title: 'Marketing Automation (MAS)', description: 'Transform your marketing with intelligent automation. We implement platforms that nurture leads 24/7.', features: ['HubSpot Marketing Hub', 'Salesforce Marketing Cloud & Pardot', 'Adobe Marketo Engage', 'Email sequences & nurture campaigns', 'Lead scoring & segmentation', 'Multi-channel automation'], href: '/marketing-automation' },
  { icon: Link2, title: 'System Integration', description: 'Connect your entire tech stack. We build seamless integrations so data flows automatically.', features: ['CRM ↔ Website integration', 'MAS ↔ CRM sync', 'API development & webhooks', 'Zapier & Make automation', 'Custom middleware solutions', 'Data pipeline architecture'], href: '/services' },
  { icon: Target, title: 'Lead Generation Systems', description: 'We build complete lead generation machines. Every piece works together to fill your pipeline.', features: ['High-converting landing pages', 'Lead magnets & funnels', 'Form optimization & A/B testing', 'Chatbot & live chat setup', 'Lead scoring implementation', 'Pipeline automation'], href: '/services' },
  { icon: Code, title: 'Web & App Development', description: 'AI-accelerated websites and applications that are built to convert. Every site is a lead generation asset.', features: ['Custom website development', 'Web application development', 'Landing page design', 'E-commerce solutions', 'Mobile app development', 'API & backend development'], href: '/web-development' },
  { icon: TrendingUp, title: 'Digital Marketing & SEO', description: 'Data-driven marketing strategies that put you in front of the right audience.', features: ['SEO & AEO optimization', 'Google Ads management', 'Social media marketing', 'Content strategy', 'Analytics & reporting', 'Conversion rate optimization'], href: '/digital-marketing' },
];

const crmPlatforms = ['Salesforce', 'HubSpot', 'Odoo', 'Microsoft Dynamics', 'Zoho CRM', 'Pipedrive', 'Monday CRM', 'Freshsales', 'Copper', 'Insightly', 'Keap', 'Close'];
const masPlatforms = ['HubSpot Marketing Hub', 'Salesforce Marketing Cloud', 'Marketo Engage', 'Adobe Campaign', 'ActiveCampaign', 'Klaviyo', 'Mailchimp', 'Brevo', 'Customer.io', 'Iterable', 'Eloqua', 'Drip'];

const engagementModels = [
  { name: 'Foundation', subtitle: 'Launch & Establish', description: 'Perfect for startups and small businesses ready to establish their digital presence.', features: ['Professional website', 'Basic CRM setup', 'Contact forms & lead capture', 'Google Analytics setup', 'SEO foundation'], ideal: 'Startups, Local Businesses' },
  { name: 'Growth', subtitle: 'Scale & Automate', description: 'For businesses ready to automate their marketing and scale their lead generation.', features: ['Everything in Foundation', 'Marketing automation setup', 'Email nurture sequences', 'CRM customization', 'Lead scoring', 'Landing page funnels'], ideal: 'Growing SMBs, B2B Companies', popular: true },
  { name: 'Scale', subtitle: 'Dominate & Optimize', description: 'Enterprise-level systems for companies serious about market domination.', features: ['Everything in Growth', 'Enterprise CRM (Salesforce/HubSpot)', 'Advanced MAS (Marketo/Pardot)', 'Custom integrations', 'Multi-channel campaigns', 'Dedicated support'], ideal: 'Mid-Market, Enterprise' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Revenue Systems, Not Just Websites</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">We build revenue engines</h1>
            <p className="text-xl text-white/70">
              Emergent Logic Consulting offers CRM implementation, marketing automation, web development, and digital marketing services. We implement 12+ CRM platforms, 12+ marketing automation systems, and 12+ CMS platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="text-violet-600 font-medium hover:text-violet-700 inline-flex items-center">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">CRM Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">CRM platforms we implement</h2>
            <p className="text-gray-600 mt-2">Certified experts in the world's leading CRM platforms</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {crmPlatforms.map((platform, i) => (
              <div key={i} className="px-6 py-3 bg-white rounded-xl shadow-sm border font-medium text-gray-700">{platform}</div>
            ))}
          </div>
        </div>
      </section>

      {/* MAS Platforms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">Marketing Automation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">MAS platforms we master</h2>
            <p className="text-gray-600 mt-2">From startup-friendly tools to enterprise powerhouses</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {masPlatforms.map((platform, i) => (
              <div key={i} className="px-6 py-3 bg-gray-50 rounded-xl border font-medium text-gray-700">{platform}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">Engagement Models</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Choose your growth path</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementModels.map((model, i) => (
              <Card key={i} className={`relative border-0 shadow-lg ${model.popular ? 'ring-2 ring-violet-500' : ''}`}>
                {model.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge className="bg-violet-600">Most Popular</Badge></div>}
                <CardHeader>
                  <CardTitle className="text-2xl">{model.name}</CardTitle>
                  <CardDescription className="text-violet-600 font-medium">{model.subtitle}</CardDescription>
                  <p className="text-gray-600 mt-2">{model.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {model.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mb-4">Ideal for: {model.ideal}</p>
                  <Link href="/contact">
                    <Button className={`w-full ${model.popular ? 'bg-violet-600 hover:bg-violet-700' : ''}`} variant={model.popular ? 'default' : 'outline'}>
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to build your revenue engine?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Let's discuss your goals and design a system that generates leads, nurtures prospects, and closes deals—on autopilot.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button>
          </Link>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
