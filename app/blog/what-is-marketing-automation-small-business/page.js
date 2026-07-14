import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, MapPin, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'What is Marketing Automation?',
  description: 'Marketing automation explained for small businesses. What it is, how it works, which platforms to use, and if it is right for you.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/what-is-marketing-automation-small-business' },
  openGraph: {
    title: 'What is Marketing Automation? | Emergent Logic',
    description: 'Marketing automation explained for small businesses. What it is, how it works, and which platforms to use.',
    url: 'https://www.emergent-logic.ca/blog/what-is-marketing-automation-small-business',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function WhatIsMarketingAutomation() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'What is Marketing Automation?', href: '/blog/what-is-marketing-automation-small-business' },
            ]} />
            
            <Badge className="mb-4">Marketing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What is Marketing Automation and Does Your Business Need It?</h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Surrey, BC</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 8 min read</span>
            </div>
            
            <ShareButtons url="https://www.emergent-logic.ca/blog/what-is-marketing-automation-small-business" title="What is Marketing Automation?" />
            
            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">You have probably heard the term marketing automation — but what does it actually mean for a small or mid-sized business in Canada?</p>
              
              <h2>What is Marketing Automation?</h2>
              <p>Marketing automation is software that automatically performs marketing tasks based on triggers, schedules, or conditions — without a human doing it manually each time.</p>
              <p>Think of it as a system that watches what your leads and customers do, and responds intelligently. Someone downloads your guide? They automatically receive a follow-up email sequence. A lead visits your pricing page three times? Your sales rep automatically gets notified.</p>
              
              <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-violet-900 mb-2">Key Takeaway</h4>
                <p className="text-violet-800 mb-0">Marketing automation does not replace your marketing team. It frees your marketing team to focus on strategy and creativity by handling the repetitive, time-sensitive tasks automatically.</p>
              </div>
              
              <h2>What Can Marketing Automation Actually Do?</h2>
              <ul>
                <li>Send automated email sequences to new leads (lead nurturing)</li>
                <li>Score leads based on their behaviour and send hot leads to your sales team</li>
                <li>Segment your contact database based on industry, behaviour, or lifecycle stage</li>
                <li>Trigger personalized messages based on website activity</li>
                <li>Schedule and publish social media posts</li>
                <li>Run A/B tests on emails and landing pages automatically</li>
                <li>Track every touchpoint in a customer's journey</li>
              </ul>
              
              <h2>Popular Marketing Automation Platforms</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead><tr className="bg-gray-100"><th className="p-3 text-left border">Platform</th><th className="p-3 text-left border">Best For</th><th className="p-3 text-left border">Starting Price (CAD/mo)</th></tr></thead>
                  <tbody>
                    <tr><td className="p-3 border">HubSpot</td><td className="p-3 border">SMBs wanting all-in-one CRM + marketing</td><td className="p-3 border">Free – $90+</td></tr>
                    <tr><td className="p-3 border">ActiveCampaign</td><td className="p-3 border">SMBs focused on email automation</td><td className="p-3 border">~$30+</td></tr>
                    <tr><td className="p-3 border">Klaviyo</td><td className="p-3 border">E-commerce businesses</td><td className="p-3 border">Free – $45+</td></tr>
                    <tr><td className="p-3 border">Marketo Engage</td><td className="p-3 border">Mid-market and enterprise</td><td className="p-3 border">$1,000+</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h2>Is Your Business Ready for Marketing Automation?</h2>
              <p>Here are the signs you are ready:</p>
              <ul>
                <li>You have a consistent flow of new leads but struggle to follow up with all of them</li>
                <li>Your sales cycle is longer than a week and involves multiple touchpoints</li>
                <li>You are sending the same emails manually over and over</li>
                <li>You have no visibility into which marketing activities are generating revenue</li>
              </ul>
              
              <p>Learn more about our <Link href="/services/marketing-automation" className="text-violet-600 hover:underline">marketing automation services</Link>.</p>
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-white/80 mb-6">Want to see what marketing automation could do for your business? Book a free 30-minute strategy call.</p>
              <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
      <CookieConsent />
    </main>
  );
}
