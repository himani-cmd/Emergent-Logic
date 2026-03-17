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
  title: 'What is CRM Implementation? Guide',
  description: 'Learn what CRM implementation involves, timelines, costs, and common mistakes. Guide for Canadian small and mid-sized businesses.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/what-is-crm-implementation-canada' },
  openGraph: {
    title: 'What is CRM Implementation? Guide | Emergent Logic',
    description: 'Learn what CRM implementation involves, timelines, costs, and common mistakes for Canadian businesses.',
    url: 'https://www.emergent-logic.ca/blog/what-is-crm-implementation-canada',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const relatedPosts = [
  { title: 'HubSpot vs Salesforce', href: '/blog/hubspot-vs-salesforce-canada' },
  { title: 'What is Marketing Automation?', href: '/blog/what-is-marketing-automation-small-business' },
];

export default function WhatIsCrmImplementation() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'What is CRM Implementation?', href: '/blog/what-is-crm-implementation-canada' },
            ]} />
            
            <Badge className="mb-4">CRM</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What is CRM Implementation? A Step-by-Step Guide for Canadian SMBs
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Surrey, BC</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 9 min read</span>
            </div>
            
            <ShareButtons url="https://www.emergent-logic.ca/blog/what-is-crm-implementation-canada" title="What is CRM Implementation?" />
            
            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                You have decided to get a CRM. Maybe you are graduating from spreadsheets. Maybe your current system is not working. Whatever the reason, you are now facing the real challenge: implementation.
              </p>
              
              <p>Picking the CRM platform is the easy part. Getting it set up correctly, adopted by your team, and generating real results — that is where most businesses struggle.</p>
              
              <h2>What is CRM Implementation?</h2>
              <p>CRM implementation is the process of setting up a Customer Relationship Management system for your business. It goes far beyond just creating an account and importing some contacts.</p>
              <p>A proper CRM implementation includes: defining your sales process, configuring the system to match that process, migrating your existing data, integrating with your other tools, and training your team to use it consistently.</p>
              
              <h2>The 6 Stages of a CRM Implementation</h2>
              
              <h3>Stage 1: Discovery and Process Mapping</h3>
              <p>Before touching any software, a good implementation starts with understanding your business. What does your sales process look like today? Where are leads coming from? This stage typically takes 1 to 2 weeks.</p>
              
              <h3>Stage 2: Platform Selection and Configuration Planning</h3>
              <p>Based on the discovery, your consultant will recommend the right CRM platform and create a configuration plan — the blueprint for how the system will be set up.</p>
              
              <h3>Stage 3: Data Migration</h3>
              <p>This is often the most time-consuming stage. Your existing data needs to be cleaned, formatted, and imported into the new platform. Poor data migration is one of the top reasons CRM implementations fail.</p>
              
              <h3>Stage 4: Configuration and Customization</h3>
              <p>The CRM is configured according to the plan: pipelines, deal stages, custom fields, email templates, automation workflows, dashboards, and reporting.</p>
              
              <h3>Stage 5: Integration</h3>
              <p>Your CRM needs to talk to your other tools. Email, your website, your marketing platform, your accounting software, and any other systems in your stack.</p>
              
              <h3>Stage 6: Training and Adoption</h3>
              <p>The most overlooked stage. A perfectly configured CRM is worthless if your team does not use it.</p>
              
              <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-violet-900 mb-2 flex items-center gap-2"><AlertCircle className="w-5 h-5" /> Key Takeaway</h4>
                <p className="text-violet-800 mb-0">The #1 reason CRM implementations fail is not technology — it is adoption. Investing in proper training and change management is just as important as the technical configuration.</p>
              </div>
              
              <h2>How Long Does CRM Implementation Take?</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead><tr className="bg-gray-100"><th className="p-3 text-left border">Business Size</th><th className="p-3 text-left border">Traditional Agency</th><th className="p-3 text-left border">Emergent Logic (AI-Accelerated)</th></tr></thead>
                  <tbody>
                    <tr><td className="p-3 border">Small (2–10 users)</td><td className="p-3 border">6–12 weeks</td><td className="p-3 border">2–3 weeks</td></tr>
                    <tr><td className="p-3 border">Mid-market (10–50 users)</td><td className="p-3 border">3–6 months</td><td className="p-3 border">3–6 weeks</td></tr>
                    <tr><td className="p-3 border">Enterprise (50+ users)</td><td className="p-3 border">6–12 months</td><td className="p-3 border">2–4 months</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h2>The 5 Most Common CRM Implementation Mistakes</h2>
              <ol>
                <li>Skipping the discovery phase and configuring based on assumptions</li>
                <li>Migrating dirty data — garbage in, garbage out</li>
                <li>Over-customizing the platform before the team has even used it</li>
                <li>Treating training as a one-time event instead of an ongoing process</li>
                <li>Not defining what success looks like before starting</li>
              </ol>
              
              <p>Not sure which CRM to pick? Read our comparison: <Link href="/blog/hubspot-vs-salesforce-canada" className="text-violet-600 hover:underline">HubSpot vs Salesforce Canada</Link>.</p>
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-white/80 mb-6">Ready to implement a CRM that your team will actually use? Book a free strategy call with Emergent Logic.</p>
              <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedPosts.map((post) => (<Link key={post.href} href={post.href}><Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardHeader><CardTitle className="text-lg">{post.title}</CardTitle></CardHeader></Card></Link>))}
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
      <CookieConsent />
    </main>
  );
}
