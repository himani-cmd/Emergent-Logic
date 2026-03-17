import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, Award, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'About Emergent Logic Consulting | Surrey, BC',
  description: 'Emergent Logic is an AI-powered digital consulting firm in Surrey, BC. Meet the team behind our CRM and marketing automation services.',
  alternates: { canonical: 'https://www.emergent-logic.ca/about' },
};

const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions.' },
  { icon: Award, title: 'Excellence', description: 'Quality is non-negotiable. We strive for excellence in every project, every line of code, every campaign.' },
  { icon: Users, title: 'Collaboration', description: 'We believe in building strong partnerships with our clients, working together towards shared success.' },
  { icon: Shield, title: 'Integrity', description: 'Transparency and honesty guide our actions. We deliver on our promises and communicate openly.' },
];

const timeline = [
  { year: '2019', title: 'Founded', description: 'Emergent Logic was born with a vision to transform digital experiences.' },
  { year: '2020', title: 'First Major Client', description: 'Secured our first enterprise client, validating our approach.' },
  { year: '2022', title: 'Team Expansion', description: 'Grew our team to include specialists across all digital disciplines.' },
  { year: '2024', title: 'Digital Marketing Launch', description: 'Expanded services to include comprehensive digital marketing solutions.' },
  { year: '2025', title: 'Looking Ahead', description: 'Continuing to innovate and help businesses achieve their digital potential.' },
];

const faqs = [
  { q: 'Who founded Emergent Logic Consulting?', a: 'Emergent Logic Consulting was founded as a digital consulting firm in Surrey, BC, Canada. The company focuses on helping B2B businesses grow through CRM implementation, marketing automation, and AI-accelerated development.' },
  { q: 'Where is Emergent Logic based?', a: 'Emergent Logic Consulting is headquartered in Surrey, British Columbia, Canada. We serve clients across Canada and internationally, with all work done in-house by our local team.' },
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The story of emergence</h1>
            <p className="text-xl text-white/70">
              Emergent Logic Consulting is a digital consulting firm founded in Surrey, British Columbia, Canada. The company provides CRM implementation, marketing automation, web development, and digital marketing services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We believe every business deserves access to world-class digital capabilities.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">To become the go-to partner for businesses seeking digital transformation. We envision a future where every organization can harness the power of technology to achieve extraordinary outcomes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
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
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The path of emergence</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 mb-8">
                <div className="w-20 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center">
                    <span className="text-violet-700 font-bold">{item.year}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
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
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to be part of our story?</h2>
          <p className="text-xl text-white/80 mb-8">Let's create something amazing together.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Get In Touch <ArrowRight className="w-5 h-5 ml-2" /></Button>
          </Link>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
