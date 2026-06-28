import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock } from 'lucide-react';

export const metadata = {
  title: 'Blog | CRM & Marketing Insights',
  description: 'Expert insights on CRM implementation, marketing automation, and digital growth for Canadian businesses.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog' },
  openGraph: {
    title: 'Blog | CRM & Marketing Insights | Emergent Logic',
    description: 'Expert insights on CRM implementation, marketing automation, and digital growth for Canadian businesses.',
    url: 'https://www.emergent-logic.ca/blog',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const posts = [
  {
    slug: 'salesforce-admin-vs-consultant-small-business',
    title: 'Salesforce Admin vs Consultant: What Should a Small Business Hire First?',
    excerpt: 'A practical Canada and US guide to choosing between Salesforce admin support, consulting, cleanup, and managed admin services.',
    category: 'Salesforce',
    readTime: '9 min read',
    featured: true,
  },
  {
    slug: 'real-estate-lead-follow-up-crm',
    title: 'Real Estate Lead Follow-Up: Why CRM Routing Matters',
    excerpt: 'A practical CRM guide for real estate teams: buyer and seller inquiry routing, follow-up tasks, long-cycle nurture, and lead ownership.',
    category: 'Real Estate CRM',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'crm-automation-for-immigration-consultants',
    title: 'CRM Automation for Immigration Consultants',
    excerpt: 'A practical guide to CRM automation for immigration consultants: consultation intake, lead routing, follow-up tasks, document requests, and reporting.',
    category: 'Immigration CRM',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'hubspot-admin-support-small-business',
    title: 'HubSpot Admin Support for Small Businesses',
    excerpt: 'Small businesses often need HubSpot admin support before they need a full-time RevOps hire. Learn what to outsource, what to keep internal, and when cleanup should come first.',
    category: 'HubSpot',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'salesforce-admin-support-small-business',
    title: 'Salesforce Admin Support for Small Businesses',
    excerpt: 'Small businesses often need Salesforce admin support before they need a full-time admin. Learn what to outsource, what to keep internal, and when cleanup should come first.',
    category: 'Salesforce',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'salesforce-consultant-near-me',
    title: 'Salesforce Consultant Near Me: What to Look For',
    excerpt: 'Searching locally for Salesforce help usually means the business needs cleaner data, better reporting, safer automation, and practical admin support.',
    category: 'Salesforce',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'crm-consultant-near-me',
    title: 'CRM Consultant Near Me: What Buyers Are Really Looking For',
    excerpt: 'Searching locally for CRM help usually means the business needs cleanup, implementation judgment, lead routing, automation, reporting, and fast senior support.',
    category: 'CRM Consulting',
    readTime: '9 min read',
    featured: true,
  },
  {
    slug: 'lead-follow-up-audit-checklist',
    title: '5-Point Lead Follow-Up Audit Checklist',
    excerpt: 'Use this practical checklist to review what happens after a website inquiry: entry point, owner, CRM stage, next follow-up, and 7-day visibility.',
    category: 'Lead Capture',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'immigration-consultation-follow-up-crm',
    title: 'Immigration Consultation Follow-Up: Why CRM Intake Matters',
    excerpt: 'Immigration consultants lose consultation opportunities when forms, calls, WhatsApp, and email are not routed into one clear CRM follow-up workflow.',
    category: 'Lead Capture',
    readTime: '8 min read',
  },
  {
    slug: 'property-management-lead-follow-up-crm',
    title: 'Property Management Lead Follow-Up: Why CRM Routing Matters',
    excerpt: 'Property management companies lose owner inquiries when forms, calls, and emails are not routed into a clear CRM follow-up workflow.',
    category: 'Lead Capture',
    readTime: '8 min read',
  },
  {
    slug: 'salesforce-consultant-small-business',
    title: 'When Small Businesses Need a Salesforce Consultant',
    excerpt: 'A practical guide for small businesses deciding when to hire a Salesforce consultant for setup, cleanup, automation, reporting, and admin support.',
    category: 'Salesforce',
    readTime: '9 min read',
    featured: true,
  },
  {
    slug: 'salesforce-cleanup-before-automation',
    title: 'Why Salesforce Cleanup Matters Before Automation',
    excerpt: 'Before adding Salesforce Flow automation, clean up duplicate data, fields, stages, ownership rules, and reporting.',
    category: 'CRM Cleanup',
    readTime: '8 min read',
  },
  {
    slug: 'hubspot-salesforce-cleanup-upwork-patterns',
    title: 'What CRM Jobs Reveal About HubSpot and Salesforce Cleanup Problems',
    excerpt: 'Repeated CRM job posts reveal the same HubSpot and Salesforce cleanup problems: messy data, failed implementations, weak reporting, and automation gaps.',
    category: 'CRM Strategy',
    readTime: '9 min read',
  },
  {
    slug: 'website-leads-to-crm',
    title: 'Why Website Leads Do Not Turn Into Sales Without CRM Routing',
    excerpt: 'Website forms do not create revenue by themselves. Lead capture, CRM routing, ownership, and follow-up workflows turn inquiries into pipeline.',
    category: 'Lead Capture',
    readTime: '8 min read',
  },
  {
    slug: 'hubspot-consultant-vancouver',
    title: 'Why Businesses Search for a HubSpot Consultant in Vancouver',
    excerpt: 'What a HubSpot consultant should actually help with, when to hire one, and how to avoid a messy setup. The Vancouver context, and what Canadian SMBs should look for.',
    category: 'HubSpot',
    readTime: '8 min read',
  },
  {
    slug: 'marketing-automation-needs-crm-cleanup',
    title: 'Why Marketing Automation Fails Without CRM Cleanup First',
    excerpt: 'Automation multiplies whatever is already there. The five cleanup gaps that sink automation, and how to know whether your CRM is ready to automate.',
    category: 'Automation',
    readTime: '8 min read',
  },
  {
    slug: 'crm-consultant-vs-implementation-partner-canada',
    title: 'CRM Consultant vs CRM Implementation Partner: What Canadian SMBs Actually Need',
    excerpt: 'The honest read on the two roles, when each makes sense, and why most Canadian SMBs need both from the same team. What to look for before you hire.',
    category: 'Strategy',
    readTime: '9 min read',
  },
  {
    slug: 'salesforce-vs-hubspot-vs-zoho-canada-2026',
    title: 'Salesforce vs. HubSpot vs. Zoho: An Honest Comparison for Canadian Businesses (2026)',
    excerpt: 'Vendor-neutral CRM comparison. Pricing in CAD, AI features, data residency, and total cost of ownership for Salesforce, HubSpot, and Zoho.',
    category: 'CRM',
    readTime: '15 min read',
    featured: true,
  },
  {
    slug: 'ai-crm-strategy-guide-2026',
    title: 'How to Use AI to Accelerate Your CRM Strategy (Without Replacing Your Team)',
    excerpt: 'Data readiness, lead scoring, forecasting, and the human-centered AI framework. Layer AI into your CRM the right way.',
    category: 'AI & CRM',
    readTime: '12 min read',
    featured: true,
  },
  {
    slug: 'crm-pipeda-data-privacy-canada',
    title: 'CRM and PIPEDA: What Canadian Businesses Need to Know About Data Privacy',
    excerpt: 'Consent, data residency, cross-border transfers, and how Salesforce, HubSpot, and Zoho handle Canadian privacy requirements.',
    category: 'Compliance',
    readTime: '10 min read',
  },
  {
    slug: 'lead-scoring-model-crm-guide',
    title: 'How to Build a Lead Scoring Model in Your CRM (Step-by-Step)',
    excerpt: 'Stop guessing which leads to call first. Build a fit + engagement scoring model with thresholds and platform-specific setup.',
    category: 'Automation',
    readTime: '9 min read',
    series: 'Marketing Automation Playbook — Part 1',
  },
  {
    slug: 'email-nurture-sequences-crm-automation',
    title: 'Email Nurture Sequences That Convert: CRM Automation Playbook',
    excerpt: 'A 3-phase, 8-email framework that turns scored leads into customers. Templates, timing, and subject line formulas.',
    category: 'Automation',
    readTime: '8 min read',
    series: 'Marketing Automation Playbook — Part 2',
  },
  {
    slug: 'campaign-attribution-crm-marketing-roi',
    title: 'Campaign Attribution in Your CRM: How to Prove Marketing ROI',
    excerpt: 'First-touch, last-touch, and multi-touch attribution models. UTM setup, dashboard metrics, and platform-specific instructions.',
    category: 'Automation',
    readTime: '9 min read',
    series: 'Marketing Automation Playbook — Part 3',
  },
  {
    slug: 'crm-roi-calculator-business-case-2026',
    title: 'How to Build a Business Case for CRM: ROI Calculator & Cost Breakdown',
    excerpt: 'Everything you need to get CRM approved: cost breakdowns, ROI formulas, one-page business case template, and objection handling.',
    category: 'Strategy',
    readTime: '11 min read',
    featured: true,
  },
  {
    slug: 'crm-freelancer-vs-consulting-firm',
    title: 'CRM Freelancer vs. CRM Consulting Firm: What Canadian Businesses Need to Know Before Hiring',
    excerpt: 'We scanned 1,000+ Upwork CRM jobs. 40% were businesses rehiring after a failed implementation. Here\'s when a freelancer works — and when you need a consulting firm.',
    category: 'Strategy',
    readTime: '12 min read',
    featured: true,
  },
  {
    slug: 'hubspot-vs-salesforce-canada',
    title: 'HubSpot vs Salesforce: Which CRM is Right for Your Canadian Business?',
    excerpt: 'Comparing HubSpot and Salesforce for Canadian SMBs. Cost, features, and implementation time to help you choose.',
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
    excerpt: 'Marketing automation explained for small businesses. What it is, how it works, and which platforms to consider.',
    category: 'Marketing',
    readTime: '8 min read',
  },
  {
    slug: 'what-is-aeo-answer-engine-optimization',
    title: 'What is AEO? Answer Engine Optimization Explained for 2026',
    excerpt: 'AEO is the new SEO. Learn what it is, how it differs from traditional SEO, and how to optimize for AI search.',
    category: 'SEO',
    readTime: '7 min read',
  },
  {
    slug: 'how-to-choose-digital-marketing-agency-vancouver',
    title: 'How to Choose a Digital Marketing Agency in Vancouver, BC',
    excerpt: '7 questions to ask before you hire a marketing agency — and the red flags to watch out for.',
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
