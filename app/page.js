'use client';

import { useState } from 'react';
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
  Sparkles, Zap, Target, Database, Code, TrendingUp, 
  ArrowRight, CheckCircle, Clock, Users, Rocket, 
  ChevronDown, BarChart3, MessageSquare, Settings,
  Search, Mic, Bot, MapPin
} from 'lucide-react';

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-6 bg-violet-500/20 text-violet-200 border-violet-400/30 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Digital Solutions
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Powered Revenue Systems
            <span className="block bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              for Growing Businesses
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-white/80 mb-4 font-medium">
            CRM Implementation. Marketing Automation. Web Development. Built Faster with AI.
          </h2>
          
          <p className="text-lg text-white/60 mb-4 max-w-3xl">
            <strong className="text-white/80">Most agencies build websites. We build revenue systems.</strong>
          </p>
          
          <p className="text-lg text-white/60 mb-8 max-w-3xl">
            Emergent Logic combines expert CRM implementation, marketing automation, and AI-accelerated web development to help businesses in Surrey, Vancouver, and across Canada grow faster — with less friction.
          </p>
          
          <p className="text-white/60 mb-10 max-w-3xl">
            What takes traditional agencies months, we deliver in weeks. Because we use AI the right way: as a tool that amplifies human expertise, not replaces it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 px-8 py-6 text-lg font-semibold">
                Book a Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Faster Delivery', value: '10x', icon: Zap },
              { label: 'Projects Delivered', value: '50+', icon: Rocket },
              { label: 'Response Time', value: '24h', icon: Clock },
              { label: 'AI-Enhanced', value: '100%', icon: Sparkles },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-violet-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}

// AI Advantage Section
function AIAdvantageSection() {
  const advantages = [
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'What takes others weeks, we deliver in days using AI-powered development workflows.',
    },
    {
      icon: Settings,
      title: 'Smart Automation',
      description: 'Marketing automation that learns and optimizes continuously for maximum ROI.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'AI-assisted code review and testing ensures bug-free, scalable solutions.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700">The AI Advantage</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why choose AI-powered development?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Traditional agencies take months. We leverage AI to deliver in weeks—without compromising on quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {advantages.map((item, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Database,
      title: 'CRM Implementation',
      description: 'Stop losing leads in spreadsheets. We implement and optimize the CRM that fits your team — Salesforce, HubSpot, Odoo, Microsoft Dynamics, Zoho, and more.',
      href: '/crm-implementation',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Turn your marketing into a machine that runs while you sleep. We design and implement marketing automation systems using HubSpot, Marketo, Pardot, and more.',
      href: '/marketing-automation',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'A website that generates revenue, not just traffic. We build custom websites and web applications using AI-accelerated development — delivered in weeks.',
      href: '/web-development',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Be found everywhere your customers are searching — including AI. SEO, AEO for voice assistants, GEO for ChatGPT and Perplexity, and Google Ads.',
      href: '/digital-marketing',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700">What We Do</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI-enhanced services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to execution, we provide end-to-end digital solutions powered by artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={service.href} className="text-violet-600 font-medium hover:text-violet-700 inline-flex items-center">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Digital Marketing Section
function DigitalMarketingSection() {
  const features = [
    { icon: Search, label: 'SEO & AEO' },
    { icon: MapPin, label: 'GEO Targeting' },
    { icon: Target, label: 'Google Ads' },
    { icon: Settings, label: 'Marketing Automation' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              Digital Marketing Excellence
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI-powered marketing that converts
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Our intelligent marketing strategies leverage AI to target the right audience at the right time. From search optimization to paid campaigns, we maximize your ROI with data-driven precision.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                  <feature.icon className="w-6 h-6 text-violet-400" />
                  <span className="font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
            
            <Link href="/services">
              <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">
                View All Services <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-bold text-white mb-2">+127%</div>
                <div className="text-xl text-white/70">Avg. Growth Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: 'What is Emergent Logic Consulting?',
      answer: 'Emergent Logic Consulting is an AI-powered digital consulting firm based in Surrey, BC, Canada. We specialize in CRM implementation, marketing automation, web development, and digital marketing services for B2B companies.',
    },
    {
      question: 'How is Emergent Logic different from other agencies?',
      answer: 'We use AI-accelerated development workflows to deliver projects 10x faster than traditional agencies. What takes others months, we deliver in weeks—without sacrificing quality. We build revenue systems, not just websites.',
    },
    {
      question: 'What CRM and marketing automation platforms do you support?',
      answer: 'We implement Salesforce, HubSpot, Odoo, Microsoft Dynamics, Zoho, and more. For marketing automation, we work with HubSpot, Marketo, Pardot, Adobe Campaign, ActiveCampaign, Klaviyo, and other leading platforms.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700">Common Questions</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What you need to know
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// Blog Section
function BlogSection() {
  const posts = [
    {
      title: 'HubSpot vs Salesforce: Which CRM is Right for Your Canadian Business?',
      href: '/blog/hubspot-vs-salesforce-canada',
      category: 'CRM',
    },
    {
      title: 'What is CRM Implementation? A Step-by-Step Guide for Canadian SMBs',
      href: '/blog/what-is-crm-implementation-canada',
      category: 'CRM',
    },
    {
      title: 'What is Marketing Automation and Does Your Business Need It?',
      href: '/blog/what-is-marketing-automation-small-business',
      category: 'Marketing',
    },
    {
      title: 'What is AEO? Answer Engine Optimization Explained for 2026',
      href: '/blog/what-is-aeo-answer-engine-optimization',
      category: 'SEO',
    },
    {
      title: 'How to Choose a Digital Marketing Agency in Vancouver, BC',
      href: '/blog/how-to-choose-digital-marketing-agency-vancouver',
      category: 'Marketing',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <Badge className="mb-4 bg-violet-100 text-violet-700">From the Blog</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Expert insights on CRM, marketing automation, and digital growth.
            </h2>
          </div>
          <Link href="/blog" className="mt-4 md:mt-0">
            <Button variant="outline">
              View all articles <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post, index) => (
            <Link key={index} href={post.href}>
              <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-white cursor-pointer">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-lg leading-tight hover:text-violet-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Local Services Section
function LocalServicesSection() {
  const locations = [
    {
      city: 'Surrey, BC',
      title: 'Salesforce & HubSpot Consultant',
      description: '6x Certified. AI-accelerated implementation in weeks.',
      href: '/salesforce-consultant-surrey-bc',
    },
    {
      city: 'Vancouver, BC',
      title: 'HubSpot CRM & Marketing Expert',
      description: 'CRM, Marketing Hub, Sales Hub, and CMS implementation.',
      href: '/hubspot-consultant-vancouver',
    },
    {
      city: 'Surrey, BC',
      title: 'Top-Rated CRM Consultant',
      description: 'Salesforce, HubSpot, NetSuite, Odoo — 12+ platforms.',
      href: '/crm-consultant-surrey-bc',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving Surrey, Vancouver & Metro Vancouver
          </h2>
          <p className="text-xl text-gray-600">
            Local CRM and digital marketing expertise — right here in BC.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <Link key={index} href={location.href}>
              <Card className="h-full hover:shadow-lg hover:border-violet-200 transition-all cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-violet-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{location.city}</span>
                  </div>
                  <CardTitle className="text-lg">{location.title}</CardTitle>
                  <CardDescription>{location.description}</CardDescription>
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
        <Badge className="mb-6 bg-white/20 text-white border-white/30">
          AI-Powered Results
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to accelerate your digital growth?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Let's discuss how AI can transform your business. Get a free consultation and see what's possible.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 px-8 py-6 text-lg font-semibold">
            Get Your Free Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

// Main Home Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AIAdvantageSection />
      <ServicesSection />
      <DigitalMarketingSection />
      <FAQSection />
      <BlogSection />
      <LocalServicesSection />
      <CTASection />
      <Footer />
      <CookieConsent />
    </main>
  );
}
