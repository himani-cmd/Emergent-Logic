import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Download, Image as ImageIcon } from 'lucide-react';

export const metadata = {
  title: 'CRM Automation Diagrams | Free Visual Resources',
  description: 'Free CRM and automation diagrams covering website lead routing, CRM cleanup, and Salesforce cleanup before automation. Use with attribution.',
  alternates: { canonical: 'https://www.emergent-logic.ca/resources/crm-automation-diagrams' },
  openGraph: {
    title: 'CRM Automation Diagrams | Free Visual Resources',
    description: 'Free CRM and automation diagrams for articles, internal docs, and planning conversations. Use with attribution to Emergent Logic.',
    url: 'https://www.emergent-logic.ca/resources/crm-automation-diagrams',
    images: [{ url: 'https://www.emergent-logic.ca/linkable-assets/website-lead-to-crm-flow.svg', width: 1400, height: 900 }],
  },
};

const assets = [
  {
    title: 'Website Lead to CRM Flow',
    description: 'Shows how a website inquiry should move from form submission into source tracking, owner assignment, follow-up, and reporting.',
    src: '/linkable-assets/website-lead-to-crm-flow.svg',
    attributionUrl: 'https://www.emergent-logic.ca/blog/website-leads-to-crm',
    alt: 'Website lead to CRM routing flow diagram by Emergent Logic',
  },
  {
    title: 'CRM Cleanup Checklist',
    description: 'A practical visual checklist for cleaning duplicates, lifecycle stages, ownership, required fields, workflows, and reporting.',
    src: '/linkable-assets/crm-cleanup-checklist.svg',
    attributionUrl: 'https://www.emergent-logic.ca/services/crm-cleanup',
    alt: 'CRM cleanup checklist diagram by Emergent Logic',
  },
  {
    title: 'Salesforce Cleanup Before Automation',
    description: 'Explains why Salesforce cleanup should happen before adding new Flows, integrations, reports, or AI-assisted workflows.',
    src: '/linkable-assets/salesforce-cleanup-before-automation.svg',
    attributionUrl: 'https://www.emergent-logic.ca/blog/salesforce-cleanup-before-automation',
    alt: 'Salesforce cleanup before automation diagram by Emergent Logic',
  },
];

export default function CrmAutomationDiagrams() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="[&_nav]:text-blue-100 [&_nav_span]:text-white [&_nav_svg]:text-blue-200 [&_nav_a:hover]:text-white">
              <Breadcrumbs
                items={[
                  { label: 'Resources', href: '/resources/crm-automation-diagrams' },
                  { label: 'CRM Automation Diagrams', href: '/resources/crm-automation-diagrams' },
                ]}
              />
            </div>
            <Badge className="mb-5 bg-white/10 text-white hover:bg-white/20">
              Free Visual Resources
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              CRM and Automation Diagrams You Can Use With Attribution
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Free visual resources for articles, planning docs, internal decks, and CRM conversations. If you use one, please credit Emergent Logic with a link.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-10">
            {assets.map((asset) => (
              <Card key={asset.src} className="overflow-hidden border-slate-200 shadow-sm">
                <div className="bg-white p-4 md:p-6">
                  <img
                    src={asset.src}
                    alt={asset.alt}
                    className="w-full rounded-2xl border border-slate-200"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
                    <div>
                      <CardTitle className="text-2xl text-slate-950">{asset.title}</CardTitle>
                      <p className="mt-3 text-slate-600">{asset.description}</p>
                    </div>
                    <a href={asset.src} download>
                      <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        Download SVG
                      </Button>
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-2xl bg-slate-100 p-5">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Suggested attribution</p>
                    <code className="block whitespace-pre-wrap break-words rounded-xl bg-white p-4 text-sm text-slate-700">
                      {`Source: ${asset.title} by Emergent Logic - ${asset.attributionUrl}`}
                    </code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <ImageIcon className="w-6 h-6 text-indigo-700" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
                  Need help turning these ideas into a working CRM flow?
                </h2>
                <p className="text-slate-600 mb-6">
                  Emergent Logic helps small and mid-sized businesses connect forms, CRMs, workflows, reporting, and follow-up systems so leads do not disappear after the first inquiry.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button size="lg" className="gap-2">
                      Talk to Emergent Logic <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/blog/crm-connected-forms-best-practices">
                    <Button size="lg" variant="outline">
                      Read Form-to-CRM Best Practices
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
