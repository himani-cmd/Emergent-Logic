import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, MapPin, AlertCircle, XCircle } from 'lucide-react';

export const metadata = {
  title: 'How to Choose a Digital Marketing Agency in Vancouver, BC',
  description: 'Looking for a digital marketing agency in Vancouver or Surrey, BC? Here are 7 questions to ask before you hire — and the red flags to watch out for.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/how-to-choose-digital-marketing-agency-vancouver' },
};

export default function ChooseDigitalAgency() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'Choose a Digital Marketing Agency', href: '/blog/how-to-choose-digital-marketing-agency-vancouver' },
            ]} />
            
            <Badge className="mb-4">Marketing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How to Choose a Digital Marketing Agency in Vancouver, BC</h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Surrey, BC</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 7 min read</span>
            </div>
            
            <ShareButtons url="https://www.emergent-logic.ca/blog/how-to-choose-digital-marketing-agency-vancouver" title="How to Choose a Digital Marketing Agency" />
            
            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">The Metro Vancouver area has no shortage of digital marketing agencies. A quick Google search returns dozens of options — all of them claiming to deliver results. How do you separate the agencies that deliver from the ones that do not?</p>
              
              <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-violet-900 mb-2">Key Takeaway</h4>
                <p className="text-violet-800 mb-0">The best agency for your business is not necessarily the biggest or the cheapest. It is the one that understands your business model, can prove their track record, and communicates like a partner — not a vendor.</p>
              </div>
              
              <h2>7 Questions to Ask Before Hiring</h2>
              
              <h3>1. Do you have experience in my industry?</h3>
              <p>Industry experience matters. Ask for specific examples of clients in your industry and the results they achieved.</p>
              
              <h3>2. How do you measure and report on results?</h3>
              <p>Ask how they track leads, conversions, and revenue attribution. If they cannot connect their work to business outcomes, they are not the right partner.</p>
              
              <h3>3. Who will actually be working on my account?</h3>
              <p>Many agencies win business with senior leadership and then hand the account to junior staff. Ask specifically who will manage your account day to day.</p>
              
              <h3>4. What is your approach to SEO in 2026?</h3>
              <p>Ask about their approach to AI Overviews, AEO, and GEO. If they look confused, they are not keeping up with the industry.</p>
              
              <h3>5. Can you show me results for a business similar to mine?</h3>
              <p>Ask for specific numbers and if you can speak directly with a reference client.</p>
              
              <h3>6. What does the first 90 days look like?</h3>
              <p>A good agency has a structured onboarding process. Vague answers here are a red flag.</p>
              
              <h3>7. How do you handle CASL compliance?</h3>
              <p>Canada's Anti-Spam Legislation (CASL) is strict. Any agency running email campaigns must understand CASL deeply.</p>
              
              <h2>Red Flags to Watch Out For</h2>
              <ul>
                <li><XCircle className="w-4 h-4 inline text-red-500" /> Guaranteed #1 rankings on Google — nobody can guarantee this</li>
                <li><XCircle className="w-4 h-4 inline text-red-500" /> Long contracts with no performance clauses</li>
                <li><XCircle className="w-4 h-4 inline text-red-500" /> No clear reporting or transparency</li>
                <li><XCircle className="w-4 h-4 inline text-red-500" /> They pitch vanity metrics instead of business outcomes</li>
                <li><XCircle className="w-4 h-4 inline text-red-500" /> They do not ask about your business goals before pitching</li>
              </ul>
              
              <h2>What Makes Emergent Logic Different</h2>
              <p>We are not a traditional digital marketing agency. We are a consulting firm that builds integrated revenue systems — combining SEO, AEO, GEO, Google Ads, CRM, and marketing automation into a single, connected strategy.</p>
              <p>We are based in Surrey, BC, which means we understand the Metro Vancouver market. We are CASL-compliant by default and privacy-first in everything we build.</p>
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-white/80 mb-6">Want to see if Emergent Logic is the right fit? Book a free 30-minute strategy call — no obligation, no sales pressure.</p>
              <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
      <CookieConsent />
    </main>
  );
}
