import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, CheckCircle, Database, FileText, Mail, Search, ShieldCheck, Workflow } from 'lucide-react';

export const metadata = {
  title: 'Case Study: AI-Assisted Revenue Operations Engine',
  description: 'How Emergent Logic built an AI-assisted revenue engine for CRM, prospecting, BDR drafts, SEO, social content, and backlinks.',
  alternates: { canonical: 'https://www.emergent-logic.ca/case-studies/ai-revenue-operations-engine' },
  openGraph: {
    title: 'Case Study: AI-Assisted Revenue Operations Engine | Emergent Logic',
    description: 'A practical internal case study on building a guarded AI automation system for CRM, outbound, content, and lead generation.',
    url: 'https://www.emergent-logic.ca/case-studies/ai-revenue-operations-engine',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const buildBlocks = [
  {
    icon: Database,
    title: 'Contact-first CRM foundation',
    description: 'We created HubSpot contact properties for outbound stage, target segment, outreach channel, priority, offer angle, pain points, approval status, reply sentiment, and automation status.',
  },
  {
    icon: Workflow,
    title: 'Prospect intake workflow',
    description: 'We built a Google Sheets and n8n intake layer to normalize prospects before pushing them into HubSpot, with deduplication and approval gates.',
  },
  {
    icon: Mail,
    title: 'Guarded BDR draft workflow',
    description: 'The BDR workflow creates Gmail drafts only when the row is approved, has a valid email, includes a researched pain point, and passes blocked-domain checks.',
  },
  {
    icon: Search,
    title: 'SEO, AEO, and GEO content engine',
    description: 'We built service-led blog clusters around CRM cleanup, HubSpot consulting, Salesforce admin support, lead follow-up, and generative engine optimization.',
  },
  {
    icon: FileText,
    title: 'Social and backlink operations',
    description: 'We prepared social queue rows, reusable creative assets, directory submission packs, community answer drafts, and partner backlink outreach lists.',
  },
  {
    icon: ShieldCheck,
    title: 'Human approval before risky actions',
    description: 'The system is designed to prepare work quickly while keeping live sends, submissions, and sensitive actions gated until the sender and queue are verified.',
  },
];

const safeguards = [
  'Blocked current employer domain from prospecting and outreach',
  'Blocked known do-not-contact records',
  'Draft-only email mode until sender identity is verified',
  'Approval required before a prospect becomes outreach-ready',
  'Pain-point requirement to prevent generic mass outreach',
  'Automation status tracking to avoid duplicate drafts',
  'HubSpot ownership mapped to the right sender/operator',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Case Study: AI-Assisted Revenue Operations Engine',
  description: metadata.description,
  image: 'https://www.emergent-logic.ca/og-image.png',
  author: {
    '@type': 'Organization',
    name: 'Emergent Logic',
    url: 'https://www.emergent-logic.ca/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Emergent Logic',
    url: 'https://www.emergent-logic.ca/',
  },
  mainEntityOfPage: 'https://www.emergent-logic.ca/case-studies/ai-revenue-operations-engine',
  datePublished: '2026-06-29',
  dateModified: '2026-06-29',
};

export default function AIRevenueOperationsEngineCaseStudy() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'AI Revenue Operations Engine', href: '/case-studies/ai-revenue-operations-engine' },
            ]} />

            <Badge className="mb-4">Internal Build</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How We Built an AI-Assisted Revenue Operations Engine for Emergent Logic
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              This is not a fictional client story. It is the system we built for our own company first: CRM setup, prospecting, guarded BDR drafts, SEO/AEO/GEO content, social creative operations, and backlink workflows.
            </p>

            <ShareButtons
              url="https://www.emergent-logic.ca/case-studies/ai-revenue-operations-engine"
              title="Case Study: AI-Assisted Revenue Operations Engine"
            />

            <div className="grid md:grid-cols-3 gap-4 my-10">
              {[
                { label: 'System type', value: 'AI-assisted growth operations' },
                { label: 'Tools used', value: 'HubSpot, n8n, Google Sheets, Gmail, Apify' },
                { label: 'Operating model', value: 'Automation with human approval gates' },
              ].map((item) => (
                <Card key={item.label} className="bg-gray-50">
                  <CardHeader>
                    <p className="text-sm uppercase tracking-wide text-gray-500">{item.label}</p>
                    <CardTitle className="text-lg">{item.value}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The problem</h2>
              <p>
                Emergent Logic needed the same thing many small businesses need: a way to create pipeline without turning daily operations into chaos. We needed prospecting, outbound drafts, CRM tracking, SEO publishing, social content, and backlink work to move in parallel.
              </p>
              <p>
                The easy version would have been to buy more tools and hope they connected. The better version was to design the operating system first: what gets captured, what gets approved, what gets drafted, what gets blocked, what gets tracked, and what a human still reviews.
              </p>

              <h2>The goal</h2>
              <p>
                The goal was not "full automation at any cost." The goal was controlled leverage. We wanted AI and automation to speed up research, drafting, routing, content operations, and CRM updates while keeping live sends and sensitive decisions under human control.
              </p>

              <h2>What we built</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 my-8">
              {buildBlocks.map((block) => (
                <Card key={block.title} className="border shadow-sm">
                  <CardContent className="p-6">
                    <block.icon className="w-8 h-8 text-blue-700 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{block.title}</h3>
                    <p className="text-gray-600">{block.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Why this matters for clients</h2>
              <p>
                This same pattern applies to many client systems. A business may not need all of this on day one, but the architecture is reusable. A CRM cleanup project can use the same approval logic. A website lead capture project can use the same routing and follow-up principles. A sales team can use the same draft-first outbound workflow. A marketing team can use the same content queue structure.
              </p>

              <p>
                For a client, the first implementation usually starts smaller: website form into CRM, lead owner assignment, follow-up task creation, duplicate checks, reporting view, and a simple automation status. Once that foundation is trusted, more automation can be layered on safely.
              </p>

              <h2>Safeguards we designed in</h2>
            </div>

            <Card className="my-8 border-blue-100 bg-blue-50">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {safeguards.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>The implementation sequence</h2>
              <ol>
                <li><strong>CRM model first:</strong> define lifecycle stage, outbound stage, approval status, automation status, owner, segment, priority, pain points, and offer angle.</li>
                <li><strong>Queue before automation:</strong> use Google Sheets as the review layer before records become HubSpot contacts or Gmail drafts.</li>
                <li><strong>Guardrails before scale:</strong> block unsafe domains, invalid emails, duplicate drafts, and generic rows with no researched pain signal.</li>
                <li><strong>Draft before send:</strong> generate drafts first so message quality and sender identity can be checked.</li>
                <li><strong>Content alongside outbound:</strong> publish SEO/AEO/GEO content that supports the same pain points outbound is testing.</li>
                <li><strong>Backlinks as proof:</strong> build directory profiles, community answers, and partner outreach to create external trust signals.</li>
              </ol>

              <h2>What this proves</h2>
              <p>
                The important lesson is not that every business needs the exact same stack. The lesson is that AI automation works best when it is built around a clear operating process. If the data model is unclear, automation creates more confusion. If the process is defined, automation creates leverage.
              </p>

              <p>
                That is the principle behind our <Link href="/services/ai-automation-consulting" className="text-blue-700 hover:underline">AI automation consulting</Link>, <Link href="/services/crm-implementation" className="text-blue-700 hover:underline">CRM implementation</Link>, <Link href="/services/crm-cleanup" className="text-blue-700 hover:underline">CRM cleanup</Link>, <Link href="/services/marketing-automation" className="text-blue-700 hover:underline">marketing automation</Link>, and <Link href="/services/crm-integration" className="text-blue-700 hover:underline">CRM integration</Link> work.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl text-white">
              <Bot className="w-10 h-10 mb-4 text-blue-100" />
              <h2 className="text-3xl font-bold mb-4">Want a smaller version of this system?</h2>
              <p className="text-white/80 mb-6 max-w-2xl">
                We can start with one workflow: website leads into CRM, CRM cleanup, guarded outbound drafts, follow-up automation, or a content operations queue.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/services/ai-automation-consulting">
                  <Button size="lg" className="bg-white text-blue-950 hover:bg-blue-100">
                    View AI Automation Service <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="bg-transparent border border-white/40 text-white hover:bg-white/10">
                    Talk to Us <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/lead-follow-up-audit">
                  <Button size="lg" className="bg-transparent border border-white/40 text-white hover:bg-white/10">
                    Try Lead Follow-Up Audit
                  </Button>
                </Link>
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
