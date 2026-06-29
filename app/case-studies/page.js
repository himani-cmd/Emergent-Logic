import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, CheckCircle, Database, LineChart, ShieldCheck, Workflow } from 'lucide-react';

export const metadata = {
  title: 'Case Studies | AI Automation & CRM Systems',
  description: 'Practical case studies showing how Emergent Logic builds AI-assisted CRM, outbound, SEO, social, and automation systems.',
  alternates: { canonical: 'https://www.emergent-logic.ca/case-studies' },
  openGraph: {
    title: 'Case Studies | Emergent Logic',
    description: 'See how Emergent Logic builds AI-assisted CRM, outbound, SEO, social, and automation systems.',
    url: 'https://www.emergent-logic.ca/case-studies',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const proofPoints = [
  { icon: Database, label: 'CRM data model and outbound properties' },
  { icon: Workflow, label: 'n8n workflow automation and guardrails' },
  { icon: Bot, label: 'AI-assisted prospecting and draft generation' },
  { icon: LineChart, label: 'SEO, AEO, GEO, and social content engine' },
  { icon: ShieldCheck, label: 'Human approval gates before risky actions' },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Case Studies</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Automation Case Studies Built Around Real Operations
          </h1>
          <p className="text-xl text-white/75 max-w-3xl mb-8">
            We document the systems we build: CRM cleanup, lead capture, outbound workflows, content operations, and AI-assisted automation. No inflated claims, no vague transformation language.
          </p>
          <Link href="/case-studies/ai-revenue-operations-engine">
            <Button size="lg" className="bg-white text-blue-950 hover:bg-blue-100 font-semibold px-8">
              View the Revenue Engine Case Study <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {proofPoints.map((point) => (
              <Card key={point.label} className="border bg-gray-50">
                <CardContent className="p-5">
                  <point.icon className="w-7 h-7 text-blue-700 mb-3" />
                  <p className="text-sm font-medium text-gray-800">{point.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-3">
              <div className="lg:col-span-2 p-8">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Internal Build</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  How We Built an AI-Assisted Revenue Operations Engine for Emergent Logic
                </h2>
                <p className="text-gray-600 mb-6">
                  A practical look at how we connected HubSpot, Google Sheets, n8n, Gmail drafts, prospecting workflows, SEO/AEO/GEO content planning, social queues, and backlink operations into one guarded growth system.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Contact-first CRM model with outbound stages, approval gates, and automation status',
                    'Prospect intake and enrichment workflows using Google Sheets, Apify, HubSpot, and n8n',
                    'Draft-only BDR workflow with blocked-domain checks, pain-point requirements, and no live send by default',
                    'SEO/AEO/GEO content engine with service-led blog clusters and internal links',
                    'Social creative queue with reusable graphics, captions, and channel-specific post variants',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                <Link href="/case-studies/ai-revenue-operations-engine">
                  <Button className="bg-blue-700 hover:bg-blue-800">
                    Read Case Study <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-950 to-indigo-900 p-8 text-white flex flex-col justify-center">
                <p className="text-sm uppercase tracking-widest text-blue-200 mb-3">Best for</p>
                <h3 className="text-2xl font-bold mb-6">Founders who want AI automation without losing control</h3>
                <div className="space-y-3 text-white/80">
                  <p>CRM implementation</p>
                  <p>Outbound systems</p>
                  <p>Lead capture workflows</p>
                  <p>Content operations</p>
                  <p>Human-in-the-loop automation</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-0 shadow-xl overflow-hidden mt-8">
            <div className="grid lg:grid-cols-3">
              <div className="lg:col-span-2 p-8">
                <Badge className="mb-4 bg-amber-100 text-amber-800">Representative Implementation</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Safe HubSpot CRM Cleanup and Workflow Rebuild
                </h2>
                <p className="text-gray-600 mb-6">
                  A method-based case study showing how we would audit, clean, and rebuild a messy HubSpot portal without blindly deleting records, triggering old workflows, or breaking sales follow-up.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Audit contacts, companies, lifecycle stages, owners, workflows, lists, and reports first',
                    'Stage cleanup work in controlled batches instead of risky one-shot bulk updates',
                    'Protect active workflows before changing records or lifecycle fields',
                    'Rebuild lead routing, follow-up tasks, and reporting after the data model is reliable',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                <Link href="/case-studies/hubspot-crm-cleanup-safe-implementation">
                  <Button className="bg-blue-700 hover:bg-blue-800">
                    Read Case Study <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-amber-900 to-slate-950 p-8 text-white flex flex-col justify-center">
                <p className="text-sm uppercase tracking-widest text-amber-200 mb-3">Best for</p>
                <h3 className="text-2xl font-bold mb-6">Teams with a live HubSpot portal that feels risky to clean</h3>
                <div className="space-y-3 text-white/80">
                  <p>CRM cleanup</p>
                  <p>HubSpot workflow repair</p>
                  <p>Lifecycle stage cleanup</p>
                  <p>Lead routing rebuilds</p>
                  <p>Reporting foundation fixes</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want a system like this for your business?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We can start with one workflow: website leads into CRM, CRM cleanup, outbound draft generation, or follow-up automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800">Contact Us</Button>
            </Link>
            <Link href="/services/crm-implementation">
              <Button size="lg" variant="outline">View CRM Implementation</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
