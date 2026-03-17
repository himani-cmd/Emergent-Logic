import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, Award, Users, Shield, ArrowRight, MapPin, Sparkles, Globe, Calendar } from 'lucide-react';

export const metadata = {
  title: 'About Emergent Logic Consulting | Surrey, BC',
  description: 'Emergent Logic is an AI-powered digital consulting firm in Surrey, BC. Meet Himani, our founder, and learn about our CRM and marketing automation services.',
  alternates: { canonical: 'https://www.emergent-logic.ca/about' },
};

const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions.' },
  { icon: Award, title: 'Excellence', description: 'Quality is non-negotiable. We strive for excellence in every project, every line of code, every campaign.' },
  { icon: Users, title: 'Collaboration', description: 'We believe in building strong partnerships with our clients, working together towards shared success.' },
  { icon: Shield, title: 'Integrity', description: 'Transparency and honesty guide our actions. We deliver on our promises and communicate openly.' },
];

const credentials = [
  { icon: Sparkles, label: 'AI-Powered Consulting' },
  { icon: MapPin, label: 'Surrey, BC Canada' },
  { icon: Globe, label: 'Serving Canada & US' },
  { icon: Calendar, label: 'Founded 2026' },
];

const faqs = [
  { q: 'Who founded Emergent Logic Consulting?', a: 'Emergent Logic Consulting was founded by Himani in Surrey, BC, Canada. The company focuses on helping B2B businesses grow through CRM implementation, marketing automation, and AI-accelerated development.' },
  { q: 'Where is Emergent Logic based?', a: 'Emergent Logic Consulting is headquartered in Surrey, British Columbia, Canada. We serve clients across Canada and the United States, with all work done in-house by our local team.' },
  { q: 'What industries does Emergent Logic serve?', a: 'We primarily serve B2B companies, startups, and SMBs across various industries including technology, professional services, manufacturing, and healthcare. Our solutions are adaptable to any industry that needs CRM, marketing automation, or digital presence.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The story of Emergent Logic</h1>
            <p className="text-xl text-white/70">
              Emergent Logic Consulting is a digital consulting firm founded in Surrey, British Columbia, Canada. We provide CRM implementation, marketing automation, web development, and digital marketing services.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Photo Placeholder */}
              <div className="md:col-span-1">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">H</span>
                  </div>
                </div>
              </div>
              
              {/* Bio */}
              <div className="md:col-span-2">
                <Badge className="mb-2 bg-violet-100 text-violet-700">Founder & CEO</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Himani</h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    Himani is the Founder and CEO of Emergent Logic, a Surrey, BC-based AI-powered digital consulting firm specializing in CRM implementation, marketing automation, and web development.
                  </p>
                  <p>
                    With a vision to make enterprise-quality digital transformation accessible to growing businesses, Himani founded Emergent Logic to deliver results faster and smarter than traditional agencies — using AI-accelerated delivery to implement in weeks what others take months to complete.
                  </p>
                  <p>
                    Under her leadership, Emergent Logic serves B2B companies across Surrey, Vancouver, and Canada — helping them build revenue systems that actually work.
                  </p>
                  <p className="text-violet-600 font-medium">Based in Surrey, BC, Canada.</p>
                </div>
                
                {/* Credential Badges */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      <cred.icon className="w-4 h-4 text-violet-600" />
                      {cred.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader><CardTitle className="text-2xl">Our Mission</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We believe every business deserves access to world-class digital capabilities.</p></CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader><CardTitle className="text-2xl">Our Vision</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">To become the go-to partner for businesses seeking digital transformation. We envision a future where every organization can harness the power of technology to achieve extraordinary outcomes.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What drives us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <Card key={i} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-gray-600 text-sm">{value.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Emergent Logic</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to work with us?</h2>
          <p className="text-xl text-white/80 mb-8">Let's create something amazing together.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Get In Touch <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
