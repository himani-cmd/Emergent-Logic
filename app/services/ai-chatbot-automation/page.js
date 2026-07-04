import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  Bot,
  Check,
  CheckCircle,
  Clock,
  Database,
  FileText,
  MessageSquare,
  Route,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const metadata = {
  title: 'AI Chatbot Automation Canada | CRM Lead Qualification',
  description:
    'AI chatbot automation for service businesses. Qualify website visitors, capture clean lead data, route inquiries into your CRM, and trigger follow-up tasks.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/ai-chatbot-automation' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI Chatbot Automation | Emergent Logic',
    description:
      'CRM-connected AI chatbots that qualify leads, summarize conversations, route inquiries, and trigger follow-up without creating another disconnected inbox.',
    url: 'https://www.emergent-logic.ca/services/ai-chatbot-automation',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const buildItems = [
  {
    icon: MessageSquare,
    title: 'Website AI chat assistant',
    desc: 'A visitor-facing assistant that answers common questions, collects context, and guides people toward the right next step without pretending to replace your team.',
  },
  {
    icon: FileText,
    title: 'Lead qualification flow',
    desc: 'Structured questions for service interest, urgency, location, budget range, timeline, existing system, and preferred contact method.',
  },
  {
    icon: Database,
    title: 'CRM record creation',
    desc: 'Create or update contacts in HubSpot, Salesforce, Zoho, or another CRM with clean properties, source tracking, and conversation summaries.',
  },
  {
    icon: Route,
    title: 'Routing and follow-up tasks',
    desc: 'Assign the right owner, create next-step tasks, route high-intent inquiries faster, and keep lower-intent leads visible for nurture.',
  },
  {
    icon: Sparkles,
    title: 'AI conversation summaries',
    desc: 'Summarize what the visitor asked, what they need, and why they may be qualified so follow-up feels informed instead of generic.',
  },
  {
    icon: ShieldCheck,
    title: 'Guardrails and review',
    desc: 'Keep risky fields controlled, avoid sensitive advice, and document the workflow so the chatbot supports the sales process safely.',
  },
];

const processSteps = [
  'Map the website pages, visitor questions, lead sources, and handoff points',
  'Define what qualified means for each service, segment, or location',
  'Design the chatbot conversation flow and fallback paths',
  'Map chatbot answers to CRM properties, notes, owners, stages, and follow-up tasks',
  'Build the chatbot, CRM integration, notification flow, and reporting view',
  'Test real scenarios before launch: qualified, not ready, spam, support, and no-fit inquiries',
  'Launch with human review and tune questions, summaries, routing, and reporting',
];

const useCases = [
  'Service businesses that miss website inquiries after hours',
  'Teams getting repeated pre-sales questions before calls',
  'Businesses that need cleaner lead qualification before booking',
  'Property management, real estate, immigration, professional services, and B2B service companies',
  'Teams using HubSpot, Salesforce, Zoho, or Google Sheets as a starting CRM layer',
  'Companies that want AI automation but still need human review before sensitive follow-up',
];

const faqs = [
  {
    q: 'Can an AI chatbot send leads directly to HubSpot or Salesforce?',
    a: 'Yes. The safer pattern is to capture controlled fields, create or update the contact, attach a short conversation summary, assign an owner, and create a follow-up task. We avoid letting AI write uncontrolled values into critical CRM fields.',
  },
  {
    q: 'Will the chatbot replace a human salesperson?',
    a: 'No. For most service businesses, the chatbot should qualify and route the lead, not close the deal. The goal is faster response, cleaner context, and better follow-up for your team.',
  },
  {
    q: 'Do we need high website traffic before building this?',
    a: 'It helps. If your site has very little traffic, stronger service pages, CTAs, forms, and CRM routing may come first. We will tell you if a chatbot is not the right first move.',
  },
  {
    q: 'Can you connect it to calendars, email, or n8n?',
    a: 'Yes. Depending on your stack, the chatbot can trigger booking flows, owner notifications, Gmail or Outlook draft workflows, HubSpot tasks, Salesforce tasks, n8n workflows, and reporting updates.',
  },
  {
    q: 'Is this safe for regulated industries?',
    a: 'It can be, but the scope needs guardrails. For mortgage, immigration, legal, finance, and healthcare-adjacent businesses, the chatbot should collect context, route inquiries, and avoid giving sensitive advice.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Chatbot Automation',
  serviceType: 'AI chatbot lead qualification and CRM automation',
  provider: {
    '@type': 'Organization',
    name: 'Emergent Logic',
    url: 'https://www.emergent-logic.ca/',
  },
  areaServed: 'Canada',
  url: 'https://www.emergent-logic.ca/services/ai-chatbot-automation',
  description: metadata.description,
};

export default function AIChatbotAutomationService() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-cyan-100/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">AI Chatbot Automation</span>
          </div>
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-cyan-100 text-xs font-medium mb-4">
            Supporting service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Chatbots That Feed Your CRM
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            We build AI chatbot workflows that qualify website visitors, capture clean lead data, summarize conversations, route inquiries to the right person, and trigger follow-up tasks. The chatbot is not the strategy. The CRM handoff is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a Free Strategy Call - AI Chatbot Hero" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-cyan-950 hover:bg-cyan-100 font-semibold px-8">
                  Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/blog/ai-chatbot-lead-qualification-crm">
              <Button size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8">
                Read the Chatbot CRM Guide
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-200" /> 2 to 4 week build</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-200" /> CRM-connected by default</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-200" /> Human-review guardrails</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-200" /> From $1,500</div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cyan-50 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4">
            <Database className="w-8 h-8 text-cyan-700 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">This is a CRM service with an AI interface.</h2>
              <p className="text-gray-700">
                A chatbot that answers questions but does not create clean follow-up is just another inbox. We design the chatbot around your CRM data model, lead routing rules, owner assignment, and reporting. That is what makes the automation useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Build</h2>
          <p className="text-lg text-gray-600 mb-8">
            Most chatbot projects fail because they focus on the widget. We focus on the workflow behind it.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {buildItems.map((item) => (
              <Card key={item.title} className="border shadow-sm">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-cyan-700 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Implementation Sequence</h2>
          <p className="text-lg text-gray-600 mb-8">
            We keep the first build focused so the chatbot becomes useful quickly instead of turning into a science project.
          </p>
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-4 bg-white border rounded-xl p-5">
                <div className="w-9 h-9 rounded-full bg-cyan-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Best Fit</h2>
          <p className="text-lg text-gray-600 mb-8">
            This is most useful when your website already creates conversations, but follow-up is inconsistent or too manual.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-gray-50 border rounded-xl p-5">
                <Check className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Timeline and Investment</h2>
          <p className="text-lg text-gray-600 mb-8">
            Chatbot projects are scoped around the workflow complexity, CRM platform, and number of routing paths.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border bg-white">
              <CardContent className="p-8">
                <Clock className="w-10 h-10 text-cyan-700 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2 to 4 Weeks</h3>
                <p className="text-gray-600">
                  A focused chatbot and CRM handoff can usually launch in 2 to 4 weeks. More complex routing, multi-language flows, or multiple CRM pipelines may take longer.
                </p>
              </CardContent>
            </Card>
            <Card className="border bg-white">
              <CardContent className="p-8">
                <Bot className="w-10 h-10 text-cyan-700 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">From $1,500 CAD</h3>
                <p className="text-gray-600">
                  Simple chatbot-to-CRM flows start at $1,500. More advanced builds with multiple workflows, custom integrations, and reporting are scoped after discovery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <Card key={item.q} className="border">
                <CardHeader>
                  <CardTitle className="text-lg">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services and Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/blog/ai-chatbot-lead-qualification-crm" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-cyan-700">AI Chatbot CRM Guide</p>
              <p className="text-gray-600 text-sm">Why chatbot conversations need CRM routing and follow-up</p>
            </Link>
            <Link href="/services/lead-capture-websites" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-cyan-700">Lead Capture Websites</p>
              <p className="text-gray-600 text-sm">The website layer your chatbot should support</p>
            </Link>
            <Link href="/services/crm-integration" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-cyan-700">CRM Integration</p>
              <p className="text-gray-600 text-sm">Connect chatbot, CRM, email, forms, and reporting</p>
            </Link>
            <Link href="/case-studies/ai-revenue-operations-engine" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-cyan-700">AI Revenue Operations Case Study</p>
              <p className="text-gray-600 text-sm">How AI-assisted growth systems can stay human-reviewed</p>
            </Link>
            <Link href="/case-studies/website-leads-to-crm-follow-up-system" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-cyan-700">Website Leads to CRM Case Study</p>
              <p className="text-gray-600 text-sm">How lead capture becomes actionable CRM follow-up</p>
            </Link>
            <Link href="/lead-follow-up-audit" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-cyan-700">Lead Follow-Up Audit</p>
              <p className="text-gray-600 text-sm">Review one inquiry path before building automation</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-900 to-slate-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want an AI Chatbot That Actually Moves Leads Forward?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We will look at your website, CRM, and follow-up process, then tell you whether chatbot automation is the right next move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTA ctaName="Book Free Strategy Call - AI Chatbot Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-cyan-950 hover:bg-cyan-100 font-semibold px-8">
                  Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/lead-follow-up-audit">
              <Button size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8">
                Try Lead Follow-Up Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
