import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock } from 'lucide-react';

export const metadata = {
  title: 'Blog | CRM & Marketing Insights',
  description: 'Expert insights on CRM implementation, marketing automation, and digital growth strategies for Canadian businesses.',
  alternates: {
    canonical: 'https://www.emergent-logic.ca/blog',
  },
};

const posts = [
  {
    slug: 'hubspot-vs-salesforce-canada',
    title: 'HubSpot vs Salesforce: Which CRM is Right for Your Canadian Business?',
    excerpt: 'Comparing HubSpot and Salesforce for Canadian SMBs? This guide breaks down cost, features, and implementation time so you can choose the right CRM for your business.',
    category: 'CRM',
    readTime: '8 min read',
  },
  {
    slug: 'what-is-crm-implementation-canada',
    title: 'What is CRM Implementation? A Step-by-Step Guide for Canadian SMBs',
    excerpt: 'Learn what CRM implementation involves, how long it takes, what it costs, and how to avoid the most common mistakes.',
    category: 'CRM',
    readTime: '9 min read',
  },
  {
    slug: 'what-is-marketing-automation-small-business',
    title: 'What is Marketing Automation and Does Your Business Need It?',
    excerpt: 'Marketing automation explained for Canadian small businesses. Learn what it is, how it works, which platforms to consider, and whether it is right for your business.',
    category: 'Marketing',
    readTime: '8 min read',
  },
  {
    slug: 'what-is-aeo-answer-engine-optimization',
    title: 'What is AEO? Answer Engine Optimization Explained for 2026',
    excerpt: 'AEO (Answer Engine Optimization) is the new SEO. Learn what it is, how it differs from traditional SEO, and how to optimize your business for AI search.',
    category: 'SEO',
    readTime: '7 min read',
  },
  {
    slug: 'how-to-choose-digital-marketing-agency-vancouver',
    title: 'How to Choose a Digital Marketing Agency in Vancouver, BC',
    excerpt: 'Looking for a digital marketing agency in Vancouver or Surrey, BC? Here are 7 questions to ask before you hire — and the red flags to watch out for.',
    category: 'Marketing',
    readTime: '7 min read',
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Insights & Resources
            </h1>
            <p className="text-xl text-white/70">
              Expert insights on CRM, marketing automation, and digital growth for Canadian businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-violet-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      {post.excerpt}
                    </CardDescription>
                    <div className="mt-4 text-violet-600 font-medium flex items-center">
                      Read article <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
