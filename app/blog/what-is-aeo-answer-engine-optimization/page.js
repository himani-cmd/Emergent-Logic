import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, MapPin, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'What is AEO? Answer Engine Optimization',
  description: 'AEO explained: what Answer Engine Optimization is, how it differs from SEO, and how to optimize for AI search engines in 2026.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/what-is-aeo-answer-engine-optimization' },
  openGraph: {
    title: 'What is AEO? Answer Engine Optimization | Emergent Logic',
    description: 'AEO explained: what it is, how it differs from SEO, and how to optimize for AI search in 2026.',
    url: 'https://www.emergent-logic.ca/blog/what-is-aeo-answer-engine-optimization',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function WhatIsAEO() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'What is AEO?', href: '/blog/what-is-aeo-answer-engine-optimization' },
            ]} />
            
            <Badge className="mb-4">SEO</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What is AEO? Answer Engine Optimization Explained for 2026</h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Surrey, BC</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 7 min read</span>
            </div>
            
            <ShareButtons url="https://www.emergent-logic.ca/blog/what-is-aeo-answer-engine-optimization" title="What is AEO?" />
            
            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">Search is changing faster than at any point in the last 20 years. The rise of AI assistants — ChatGPT, Google's AI Overviews, Perplexity, Siri, Alexa — means that millions of people are no longer clicking through to websites to find answers.</p>
              
              <h2>What is AEO — Answer Engine Optimization?</h2>
              <p>Answer Engine Optimization (AEO) is the practice of structuring your website content so that AI systems and search engines can extract and surface it as a direct answer to a user's question.</p>
              <p>Traditional SEO focuses on ranking your page on Google's results page. AEO focuses on getting your content selected as the answer itself — in AI Overviews, voice search results, featured snippets, and AI chatbot responses.</p>
              
              <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-violet-900 mb-2">Key Takeaway</h4>
                <p className="text-violet-800 mb-0">The key difference: SEO gets you on the list. AEO gets you picked as the answer. In a world where AI gives one answer instead of ten links, being the answer is everything.</p>
              </div>
              
              <h2>AEO vs SEO vs GEO — What is the Difference?</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead><tr className="bg-gray-100"><th className="p-3 text-left border"></th><th className="p-3 text-left border">SEO</th><th className="p-3 text-left border">AEO</th><th className="p-3 text-left border">GEO</th></tr></thead>
                  <tbody>
                    <tr><td className="p-3 border font-medium">Full name</td><td className="p-3 border">Search Engine Optimization</td><td className="p-3 border">Answer Engine Optimization</td><td className="p-3 border">Generative Engine Optimization</td></tr>
                    <tr><td className="p-3 border font-medium">Goal</td><td className="p-3 border">Rank on Google page 1</td><td className="p-3 border">Be the featured answer</td><td className="p-3 border">Appear in AI-generated responses</td></tr>
                    <tr><td className="p-3 border font-medium">Target platform</td><td className="p-3 border">Google, Bing</td><td className="p-3 border">Voice, Featured Snippets, AI Overviews</td><td className="p-3 border">ChatGPT, Perplexity, Gemini</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h2>How to Optimize Your Content for AEO</h2>
              <ul>
                <li>Use question-and-answer format: Structure content around the exact questions your customers ask</li>
                <li>Write concise, direct answers: The ideal AEO answer is 40 to 60 words</li>
                <li>Use FAQ schema markup: Structured data helps AI systems identify and extract your answers</li>
                <li>Build topical authority: Cover your subject area comprehensively</li>
                <li>Earn citations and mentions: AI systems prefer content that is referenced by other authoritative sources</li>
              </ul>
              
              <p>Emergent Logic publishes practical CRM and automation guidance for Canadian service businesses. Explore our <Link href="/blog" className="text-violet-600 hover:underline">CRM operations resources</Link>.</p>
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-white/80 mb-6">Want to make sure your business is visible in AI search results? Book a free strategy call.</p>
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
