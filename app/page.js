'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Sparkles, Zap, Database, Code, TrendingUp, 
  ArrowRight, CheckCircle, Clock, Award, MapPin,
  ChevronDown, Settings, Star, Link2
} from 'lucide-react';

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-6 bg-violet-500/20 text-violet-200 border-violet-400/30 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered CRM Implementation
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            CRM Implementation in 2 Weeks.
            <span className="block bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Not 6 Months.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl">
            We help businesses across Greater Vancouver implement Salesforce, HubSpot, Zoho, and more — faster than traditional agencies. AI-accelerated delivery. Fixed pricing. Results guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 px-8 py-6 text-lg font-semibold">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Link href="/services">
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                View Our Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Certifications', value: '15+', icon: Award },
              { label: 'Salesforce Certified', value: '6x', icon: Star },
              { label: 'Years Experience', value: '10+', icon: Clock },
              { label: 'Greater Vancouver, BC', value: '', icon: MapPin, isLocation: true },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-violet-400" />
                </div>
                {stat.isLocation ? (
                  <>
                    <div className="text-xl font-bold text-white">Greater Vancouver</div>
                    <div className="text-white/60 text-sm">BC, Canada</div>
                  </>
                ) : (
                  <>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    { icon: Database, title: 'CRM Implementation', description: 'We implement and configure the right CRM for your business — fast. From initial setup and data migration to workflows, pipelines, and team training. Delivered in 2-4 weeks.', href: '/services', color: 'from-blue-500 to-cyan-500', price: 'From $1,500' },
    { icon: Zap, title: 'Marketing Automation', description: 'We design and build marketing automation workflows that nurture leads, follow up automatically, and convert prospects into customers — without manual effort.', href: '/services', color: 'from-violet-500 to-purple-500', price: 'From $1,500' },
    { icon: Link2, title: 'Integrations & Automation', description: 'We connect your CRM to every tool your business uses — so data flows automatically and your team stops doing manual data entry forever.', href: '/services', color: 'from-emerald-500 to-teal-500', price: 'From $500' },
    { icon: Code, title: 'Website + CRM Bundle', description: 'We build your website and connect it to your CRM from day one — so every visitor, form submission, and lead is automatically tracked and followed up.', href: '/services', color: 'from-pink-500 to-rose-500', price: 'From $3,500' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700">What We Do</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CRM & Automation Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to turn your CRM into a revenue-generating machine.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-violet-600 font-semibold">{service.price}</span>
                  <Link href={service.href} className="text-violet-600 font-medium hover:text-violet-700 inline-flex items-center">Learn more <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services"><Button size="lg" className="bg-violet-600 hover:bg-violet-700">View All Services <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </div>
    </section>
  );
}

// Pricing Preview Section
function PricingPreviewSection() {
  const packages = [
    { name: 'CRM Starter', price: '$1,500', features: ['HubSpot, Zoho, or Odoo CRM setup', 'Up to 500 contacts imported', '1 sales pipeline configured', '5 email templates', '30 day email support'] },
    { name: 'CRM Growth', price: '$3,500', popular: true, features: ['Salesforce or HubSpot full setup', 'Complete data migration', '3 automated workflows', 'Lead scoring configured', 'Custom reports and dashboards'] },
    { name: 'Website + CRM Bundle', price: '$3,500', features: ['HubSpot CMS or WordPress website', 'Up to 5 pages built', 'CRM fully connected', 'Contact form feeds CRM', '1 month post-launch support'] },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700">Pricing</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Transparent Pricing. No Surprises.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Fixed price packages designed for growing businesses across Greater Vancouver — Surrey, Abbotsford, Langley, Coquitlam, Port Coquitlam, Burnaby, Richmond, and beyond. No hidden fees.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <Card key={i} className={`relative border-0 shadow-lg ${pkg.popular ? 'ring-2 ring-violet-500' : ''}`}>
              {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge className="bg-violet-600"><Star className="w-3 h-3 mr-1" /> Most Popular</Badge></div>}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <div className="text-sm text-gray-500 mb-2">Starting from</div>
                <div className="text-4xl font-bold text-violet-600">{pkg.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/pricing"><Button size="lg" className="bg-violet-600 hover:bg-violet-700">View All Packages <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    { question: 'What is Emergent Logic?', answer: 'Emergent Logic is an AI-powered CRM consulting firm based in Surrey, BC. We help businesses across Greater Vancouver implement Salesforce, HubSpot, Zoho, and other CRM platforms — faster and more affordably than traditional agencies.' },
    { question: 'How fast can you implement a CRM?', answer: 'Most CRM implementations are completed in 2-4 weeks. Using AI-accelerated delivery, we implement in weeks what traditional agencies take months to complete.' },
    { question: 'What CRM platforms do you support?', answer: 'We implement Salesforce, HubSpot, Zoho CRM, Pipedrive, Odoo, Monday.com CRM, ActiveCampaign, and more. We recommend the right platform based on your business needs.' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700">FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Common Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// Local Services Section
function LocalServicesSection() {
  const locations = [
    { city: 'Surrey, BC', title: 'Salesforce & HubSpot Consultant', href: '/salesforce-consultant-surrey-bc' },
    { city: 'Vancouver, BC', title: 'HubSpot CRM Expert', href: '/hubspot-consultant-vancouver' },
    { city: 'Abbotsford, BC', title: 'CRM Consultant', href: '/crm-consultant-abbotsford' },
    { city: 'Langley, BC', title: 'CRM Consultant', href: '/crm-consultant-langley' },
    { city: 'Coquitlam, BC', title: 'CRM Consultant', href: '/crm-consultant-coquitlam' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Greater Vancouver</h2>
          <p className="text-xl text-gray-600">Local CRM expertise — Surrey, Abbotsford, Langley, Coquitlam, Burnaby, Richmond, and beyond.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <Link key={index} href={location.href}>
              <Card className="h-full hover:shadow-lg hover:border-violet-200 transition-all cursor-pointer text-center">
                <CardHeader className="py-4">
                  <div className="flex items-center justify-center gap-1 text-violet-600 mb-1"><MapPin className="w-4 h-4" /></div>
                  <CardTitle className="text-sm">{location.city}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-violet-600 to-indigo-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to implement your CRM in 2 weeks?</h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Book a free 30-minute strategy call. No obligation. No sales pressure. Just a straight conversation about your goals.</p>
        <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 px-8 py-6 text-lg font-semibold">Book Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button>
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingPreviewSection />
      <FAQSection />
      <LocalServicesSection />
      <CTASection />
      <Footer />
      <CookieConsent />
    </main>
  );
}
