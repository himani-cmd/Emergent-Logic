import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  BarChart3,
  BellRing,
  CheckCircle,
  ClipboardCheck,
  Database,
  Gauge,
  Route,
  ShieldCheck,
  Users,
} from 'lucide-react';

export const metadata = {
  title: 'Lead Routing Cleanup Case Study',
  description:
    'See how a messy CRM handoff between marketing and sales can be cleaned up with lifecycle stages, routing rules, dashboards, and follow-up ownership.',
  alternates: {
    canonical: 'https://www.emergent-logic.ca/case-studies/lead-routing-mql-sql-handoff-cleanup',
  },
  openGraph: {
    title: 'Representative Case Study: Lead Routing and MQL-to-SQL Handoff Cleanup',
    description:
      'A practical CRM cleanup case study showing how lead routing, lifecycle stages, ownership, and follow-up visibility can reduce quiet revenue leakage.',
    url: 'https://www.emergent-logic.ca/case-studies/lead-routing-mql-sql-handoff-cleanup',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const symptoms = [
  'MQLs were created but not always routed to an owner',
  'The same lead could exist more than once',
  'Some records had missing source or service-interest fields',
  'Sales reps disagreed on when a lead became qualified',
  'Follow-up timing varied by owner',
  'Reports showed lead count but not owner accountability',
  'Leadership could not easily see where leads were stuck',
];

const fixes = [
  {
    icon: ClipboardCheck,
    title: 'Define lifecycle stages',
    description:
      'Create simple, written definitions for Lead, MQL, SQL, Opportunity, Customer, Disqualified, and Recycle so reporting does not depend on interpretation.',
  },
  {
    icon: Database,
    title: 'Require the right handoff fields',
    description:
      'Keep the field set practical: source, service interest, location or territory, urgency, owner, qualification status, and next follow-up date.',
  },
  {
    icon: Route,
    title: 'Rebuild routing rules',
    description:
      'Route by the way the team actually sells: territory, service line, source, deal value, availability, and existing ownership.',
  },
  {
    icon: BellRing,
    title: 'Create follow-up visibility',
    description:
      'Use tasks, queues, reminders, stale-lead views, and fallback ownership so follow-up is not dependent on memory alone.',
  },
  {
    icon: BarChart3,
    title: 'Report on handoff health',
    description:
      'Track ownerless MQLs, overdue follow-ups, rejected leads, routing exceptions, duplicate rates, and source-to-opportunity conversion.',
  },
  {
    icon: ShieldCheck,
    title: 'Protect the live CRM',
    description:
      'Test cleanup changes in small batches, document logic, and avoid bulk updates that trigger old workflows unexpectedly.',
  },
];

const expectedOutcomes = [
  'Every qualified lead has an owner',
  'Every owner has a visible next action',
  'Every next action has a due date',
  'Every handoff can be audited later',
  'Every routing exception is easier to spot',
  'Every report explains process health, not just activity volume',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Representative Case Study: Lead Routing and MQL-to-SQL Handoff Cleanup',
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
  mainEntityOfPage: 'https://www.emergent-logic.ca/case-studies/lead-routing-mql-sql-handoff-cleanup',
  datePublished: '2026-07-04',
  dateModified: '2026-07-04',
};

export default function LeadRoutingMqlSqlHandoffCleanupCaseStudy() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[
                { label: 'Case Studies', href: '/case-studies' },
                {
                  label: 'Lead Routing Cleanup',
                  href: '/case-studies/lead-routing-mql-sql-handoff-cleanup',
                },
              ]}
            />

            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
              Representative Implementation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Lead Routing and MQL-to-SQL Handoff Cleanup
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Lead routing usually does not break loudly. It leaks quietly. This representative case study shows how a messy CRM handoff between marketing and sales can be cleaned up with lifecycle stages, routing rules, dashboards, and follow-up ownership.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Note: this is a method-based implementation example, not a fabricated client result. It shows the operating system Emergent Logic recommends when leads enter a CRM but do not consistently turn into conversations.
            </p>

            <ShareButtons
              url="https://www.emergent-logic.ca/case-studies/lead-routing-mql-sql-handoff-cleanup"
              title="Representative Case Study: Lead Routing and MQL-to-SQL Handoff Cleanup"
            />

            <div className="grid md:grid-cols-3 gap-4 my-10">
              {[
                { label: 'System type', value: 'CRM routing and lifecycle cleanup' },
                { label: 'Best fit', value: 'Teams with MQLs, SQLs, and unclear ownership' },
                { label: 'Core outcome', value: 'Every qualified lead has owner and next step' },
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
              <h2>The situation</h2>
              <p>
                A growing service business had leads entering the CRM from forms, campaigns, referrals, events, and sales conversations. The problem was not lead volume. The problem was what happened after the lead entered the system.
              </p>
              <p>
                Some leads were assigned correctly. Some sat untouched. Some were marked as qualified but had no next step. Some were followed up by the wrong person. Reporting showed activity, but not accountability.
              </p>

              <h2>The symptoms</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {symptoms.map((symptom) => (
                <div key={symptom} className="flex items-start gap-3 bg-gray-50 border rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-indigo-700 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{symptom}</p>
                </div>
              ))}
            </div>

            <Card className="my-8 border-indigo-200 bg-indigo-50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Gauge className="w-8 h-8 text-indigo-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The real issue</h2>
                    <p className="text-gray-700">
                      The CRM was full of activity, but activity was not the same as ownership. The team needed a cleaner operating layer between marketing qualification, sales acceptance, routing, and follow-up.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>Root causes</h2>
              <p>
                The issue was not one broken workflow. It was a system design problem. Lifecycle definitions were vague, required fields were not enforced at the right moments, routing rules did not match the actual sales process, duplicates fragmented history, and dashboards focused on volume instead of handoff health.
              </p>
              <p>
                This is where CRM cleanup becomes revenue work. Before building more automation, the business needs to know who owns the lead, what stage it is in, what should happen next, and how long it has been waiting.
              </p>

              <h2>What we would fix first</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 my-8">
              {fixes.map((fix) => (
                <Card key={fix.title} className="border shadow-sm">
                  <CardContent className="p-6">
                    <fix.icon className="w-8 h-8 text-indigo-700 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{fix.title}</h3>
                    <p className="text-gray-600">{fix.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Example outcome</h2>
              <p>
                After cleanup, the CRM should make the next step visible. The business does not need more dashboards. It needs dashboards that show whether follow-up is actually happening.
              </p>
            </div>

            <Card className="my-8 border-blue-100 bg-blue-50">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {expectedOutcomes.map((outcome, index) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-800 pt-1">{outcome}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>Why this matters</h2>
              <p>
                When lead routing works, sales and marketing argue less about lead quality. Marketing can see which campaigns create real opportunities. Sales can see which leads need attention today. Leadership can see whether pipeline problems are caused by demand, process, ownership, or data quality.
              </p>
              <p>
                This is why our <Link href="/services/crm-cleanup" className="text-indigo-700 hover:underline">CRM cleanup</Link>, <Link href="/services/hubspot-consulting" className="text-indigo-700 hover:underline">HubSpot consulting</Link>, <Link href="/services/salesforce-consulting" className="text-indigo-700 hover:underline">Salesforce consulting</Link>, and <Link href="/services/marketing-automation" className="text-indigo-700 hover:underline">marketing automation</Link> work starts with the operating process, not just the tool.
              </p>
              <p>
                For a deeper breakdown, read our guide on <Link href="/blog/crm-lead-routing-mql-sql-handoff" className="text-indigo-700 hover:underline">why lead routing breaks between MQL and SQL</Link>.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-indigo-700 via-blue-800 to-slate-950 rounded-2xl text-white">
              <Users className="w-10 h-10 mb-4 text-indigo-100" />
              <h2 className="text-3xl font-bold mb-4">Want to find the handoff leak in your CRM?</h2>
              <p className="text-white/80 mb-6 max-w-2xl">
                We can review one path from lead capture to CRM assignment and show where ownership, routing, or follow-up is getting unclear.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/lead-follow-up-audit">
                  <Button size="lg" className="bg-white text-indigo-950 hover:bg-indigo-100">
                    Try Lead Follow-Up Audit <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="bg-transparent border border-white/40 text-white hover:bg-white/10">
                    Contact Emergent Logic
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
