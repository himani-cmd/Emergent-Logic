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
  BellRing,
  CheckCircle,
  ClipboardCheck,
  Clock3,
  Database,
  FileText,
  ListChecks,
  Route,
  ShieldCheck,
} from 'lucide-react';

export const metadata = {
  title: 'Mortgage Lead Follow-Up Case Study',
  description:
    'How mortgage brokers can connect applications, rate inquiries, renewals, document requests, CRM follow-up, and reporting.',
  alternates: {
    canonical: 'https://www.emergent-logic.ca/case-studies/mortgage-lead-follow-up-system',
  },
  openGraph: {
    title: 'Representative Case Study: Mortgage Lead Follow-Up System | Emergent Logic',
    description:
      'Mortgage teams do not just need more inquiries. They need every application, renewal, refinance, and document request to have an owner, stage, next task, and follow-up path.',
    url: 'https://www.emergent-logic.ca/case-studies/mortgage-lead-follow-up-system',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const flowSteps = [
  {
    icon: FileText,
    title: 'Separate inquiry types',
    description:
      'Purchase, refinance, renewal, pre-approval, debt consolidation, construction, and commercial inquiries should not all land in one undifferentiated inbox.',
  },
  {
    icon: Database,
    title: 'Create or update the CRM record',
    description:
      'Each inquiry should create or update the contact, preserve source, capture mortgage intent, and avoid duplicate records where possible.',
  },
  {
    icon: Route,
    title: 'Assign owner and stage',
    description:
      'The broker or team member responsible for the inquiry should be visible, along with the current status: new, contacted, collecting documents, lender review, or waiting.',
  },
  {
    icon: ClipboardCheck,
    title: 'Track missing information',
    description:
      'Mortgage follow-up often stalls because documents, income details, property details, or next-step confirmations are not tracked in one place.',
  },
  {
    icon: BellRing,
    title: 'Trigger the next follow-up',
    description:
      'The system should create a task, reminder, or queue item so warm inquiries do not rely on memory after the first reply.',
  },
  {
    icon: ListChecks,
    title: 'Report on source and response',
    description:
      'The team should see which lead sources create real conversations, which inquiries are stuck, and which follow-ups are overdue.',
  },
];

const implementationChecklist = [
  'Map all intake paths: website forms, application links, email, phone, referral partners, social messages, and calendar booking',
  'Define inquiry categories: purchase, refinance, renewal, pre-approval, second mortgage, commercial, and general advice',
  'Create CRM fields for source, inquiry type, owner, priority, status, missing documents, next follow-up date, and outcome',
  'Connect forms and applications to CRM record creation or update logic',
  'Add deduplication rules so returning borrowers do not create messy duplicate contacts',
  'Create follow-up tasks for new inquiries, document requests, renewal timing, and stale warm leads',
  'Build a simple working view for active inquiries, overdue follow-ups, and unassigned leads',
  'Measure volume, first response, qualification, source quality, and stalled opportunities',
];

const failureModes = [
  'Applications come in, but no clear owner is assigned',
  'A borrower replies once, then missing documents are tracked manually in email',
  'Renewal or refinance leads go quiet because there is no future follow-up task',
  'Referral partner inquiries are not tagged separately from website traffic',
  'The team cannot see which inquiries are still warm versus already lost',
  'Marketing keeps generating leads while the CRM cannot show response or outcome quality',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Representative Case Study: Mortgage Lead Follow-Up System',
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
  mainEntityOfPage: 'https://www.emergent-logic.ca/case-studies/mortgage-lead-follow-up-system',
  datePublished: '2026-07-02',
  dateModified: '2026-07-02',
};

export default function MortgageLeadFollowUpSystemCaseStudy() {
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
                  label: 'Mortgage Lead Follow-Up System',
                  href: '/case-studies/mortgage-lead-follow-up-system',
                },
              ]}
            />

            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Representative Implementation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Mortgage Lead Follow-Up System
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Mortgage brokers do not just need more inquiries. They need every application, renewal, refinance, and document request to have an owner, stage, next task, and follow-up path.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Note: this is a method-based implementation example, not a fabricated client result. It shows the operating system Emergent Logic recommends for mortgage lead intake and CRM follow-up.
            </p>

            <ShareButtons
              url="https://www.emergent-logic.ca/case-studies/mortgage-lead-follow-up-system"
              title="Representative Case Study: Mortgage Lead Follow-Up System"
            />

            <div className="grid md:grid-cols-3 gap-4 my-10">
              {[
                { label: 'System type', value: 'Mortgage inquiry to CRM follow-up' },
                { label: 'Best fit', value: 'Mortgage brokers and small lending teams' },
                { label: 'Core outcome', value: 'Every borrower inquiry has a next step' },
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
                A mortgage broker may receive inquiries from website forms, mortgage applications, referral partners, email, phone, social media, and rate-comparison conversations. Some leads are ready to apply. Some are early-stage buyers. Some are renewals or refinances that need a future touchpoint.
              </p>
              <p>
                The business can look busy while still leaking opportunities. A borrower sends information, someone replies once, and then the next step is scattered across email, spreadsheets, calendar reminders, or memory.
              </p>

              <h2>The real problem</h2>
              <p>
                Mortgage follow-up is not one generic sales pipeline. Purchase, refinance, renewal, pre-approval, document collection, lender update, and referral-partner inquiries all need slightly different handling. If the CRM does not reflect those differences, warm leads become invisible.
              </p>
            </div>

            <Card className="my-8 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Clock3 className="w-8 h-8 text-blue-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The revenue leak</h2>
                    <p className="text-gray-700">
                      The first reply is not enough. A mortgage lead needs a visible owner, stage, missing-information checklist, and next follow-up date so it does not quietly disappear after the first conversation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>What the system should do</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 my-8">
              {flowSteps.map((step) => (
                <Card key={step.title} className="border shadow-sm">
                  <CardContent className="p-6">
                    <step.icon className="w-8 h-8 text-blue-700 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The implementation sequence</h2>
              <p>
                The first version does not need to be complex. It needs to make mortgage inquiries visible, assignable, and followable. That usually means connecting intake, CRM properties, owner assignment, task creation, and a simple reporting view.
              </p>
            </div>

            <Card className="my-8 border-indigo-100 bg-indigo-50">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {implementationChecklist.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-800 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>Common failure modes</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {failureModes.map((mode) => (
                <div key={mode} className="flex items-start gap-3 rounded-xl border bg-white p-4">
                  <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{mode}</p>
                </div>
              ))}
            </div>

            <Card className="my-8 border-emerald-200 bg-emerald-50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <ShieldCheck className="w-8 h-8 text-emerald-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">How Emergent Logic would start</h2>
                    <p className="text-gray-700">
                      We would start with one live inquiry path, not a huge CRM rebuild. We review how the lead arrives, where it goes, who owns it, what fields are missing, what task is created, and where the team can see follow-up status.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>Related resources</h2>
              <p>
                This mortgage workflow connects directly to our <Link href="/lead-follow-up-audit" className="text-blue-700 hover:underline">lead follow-up audit</Link>, <Link href="/website-leads-to-crm-implementation" className="text-blue-700 hover:underline">website leads to CRM implementation</Link>, and <Link href="/services/crm-implementation" className="text-blue-700 hover:underline">CRM implementation</Link> work.
              </p>
            </div>

            <div className="mt-12 rounded-3xl bg-gradient-to-br from-blue-900 to-slate-950 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Want to review one mortgage lead path?</h2>
              <p className="text-white/80 mb-6">
                We can look at one inquiry path: where it starts, where it lands, who owns it, what happens next, and where follow-up is currently getting lost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/lead-follow-up-audit">
                  <Button size="lg" className="bg-white text-blue-950 hover:bg-blue-100">
                    Start With a Lead Follow-Up Audit <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
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
