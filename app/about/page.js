import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Zap, Award, DollarSign, MapPin, Link2, RefreshCw, ArrowRight, Sparkles, Globe, Calendar } from 'lucide-react';

export const metadata = {
  title: 'About Us | CRM Consultants Vancouver BC',
  description: "Vancouver's CRM consulting firm led by Himani. 15+ certifications, 6x Salesforce Certified. Serving Surrey, Langley, Abbotsford.",
  alternates: { canonical: 'https://www.emergent-logic.ca/about' },
  openGraph: {
    title: 'About Us | CRM Consultants Vancouver BC | Emergent Logic',
    description: "Vancouver's CRM consulting firm led by Himani. 15+ certifications, 6x Salesforce Certified.",
    url: 'https://www.emergent-logic.ca/about',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const credentials = [
  { icon: Sparkles, label: 'AI-Powered Consulting' },
  { icon: MapPin, label: 'Surrey, BC Canada' },
  { icon: Globe, label: 'Serving Greater Vancouver & Canada' },
  { icon: Calendar, label: 'Founded 2026' },
];

const reasons = [
  { icon: Zap, title: '2-Week Delivery', description: 'We implement CRM systems in 2-4 weeks. Not months. AI-accelerated delivery means you start seeing results fast.' },
  { icon: Award, title: '15+ Certifications', description: '6x Salesforce Certified, HubSpot Expert, and more. You get certified expertise — not junior staff learning on your project.' },
  { icon: DollarSign, title: 'Transparent Pricing', description: 'Fixed packages with clear pricing. No surprise invoices. No scope creep. You know exactly what you are paying before we start.' },
  { icon: MapPin, title: 'Local Greater Vancouver Team', description: 'We are based in Surrey, BC and serve businesses across Greater Vancouver — Surrey, Abbotsford, Langley, Coquitlam, Port Coquitlam, Burnaby, Richmond and more. We understand the local market, Canadian privacy laws, and BC business needs.' },
  { icon: Link2, title: 'We Connect Everything', description: 'CRM, automation, website, and integrations — all connected and working together. Not separate projects from separate vendors.' },
  { icon: RefreshCw, title: 'Ongoing Support', description: 'We do not disappear after launch. Monthly retainers keep your CRM healthy, your automations running, and your data clean — forever.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Emergent Logic</h1>
          <p className="text-xl text-white/70 max-w-3xl">Greater Vancouver's AI-powered CRM consulting firm. We help businesses implement Salesforce, HubSpot, and Zoho — faster and smarter than traditional agencies.</p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">H</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <Badge className="mb-2 bg-violet-100 text-violet-700">Founder & CEO</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Himani</h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>Himani is the Founder and CEO of Emergent Logic, a Surrey, BC-based AI-powered digital consulting firm specializing in CRM implementation, marketing automation, and web development.</p>
                  <p>With a vision to make enterprise-quality digital transformation accessible to every growing business — not just large corporations with massive budgets — Himani founded Emergent Logic to deliver results faster and smarter than traditional agencies.</p>
                  <p>Using AI-accelerated delivery, Emergent Logic implements in weeks what others take months to complete — at a fraction of the traditional cost.</p>
                  <p>Under her leadership, Emergent Logic serves B2B companies across Greater Vancouver and Canada — including Surrey, Abbotsford, Langley, Coquitlam, Port Coquitlam, Burnaby, and Richmond — helping them build revenue systems that actually work.</p>
                  <p className="text-violet-600 font-medium">Based in Surrey, BC, Canada.</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  {credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      <cred.icon className="w-4 h-4 text-violet-600" />{cred.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Greater Vancouver Businesses Choose Emergent Logic</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reasons.map((reason, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to work with us?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free 30-minute strategy call. No obligation, no sales pressure.</p>
          <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button>
          </a>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
