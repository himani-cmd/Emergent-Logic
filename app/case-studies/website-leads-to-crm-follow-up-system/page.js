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
  ClipboardList,
  Clock3,
  Database,
  Filter,
  FormInput,
  MailCheck,
  Route,
  ShieldCheck,
} from 'lucide-react';

export const metadata = {
  title: 'Website Leads to CRM Case Study',
  description:
    'How website forms, lead capture, CRM routing, owner assignment, follow-up tasks, and reporting keep inquiries from disappearing.',
  alternates: {
    canonical: 'https://www.emergent-logic.ca/case-studies/website-leads-to-crm-follow-up-system',
  },
  openGraph: {
    title: 'Representative Case Study: Website Leads to CRM Follow-Up | Emergent Logic',
    description:
      'Most businesses do not have a lead problem. They have a follow-up problem. See how website leads should move into CRM with ownership, routing, tasks, and reporting.',
    url: 'https://www.emergent-logic.ca/case-studies/website-leads-to-crm-follow-up-system',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const flowSteps = [
  {
    icon: FormInput,
    title: 'Capture the right fields',
    description:
      'The form collects more than name and email. It captures inquiry type, location, urgency, source, consent, and the context the team needs for a useful first response.',
  },
  {
    icon: Database,
    title: 'Create or update the CRM record',
    description:
      'The inquiry creates or updates the contact, associates the company when relevant, preserves lead source, and avoids duplicate records where possible.',
  },
  {
    icon: Route,
    title: 'Route the lead to the right owner',
    description:
      'Routing can be based on service line, geography, inquiry type, round robin, existing owner, or a manual review queue depending on how the business sells.',
  },
  {
    icon: ClipboardList,
    title: 'Create the next action',
    description:
      'A lead without a next action is easy to lose. The system creates a task, next follow-up date, or working queue so the inquiry has momentum.',
  },
  {
    icon: BellRing,
    title: 'Notify without creating noise',
    description:
      'The right person receives the right alert, but the workflow avoids blasting every submission to a shared inbox where accountability disappears.',
  },
  {
    icon: MailCheck,
    title: 'Track response and outcome',
    description:
      'The team can see whether the lead was contacted, qualified, disqualified, moved to pipeline, or still waiting for follow-up.',
  },
];

const implementationChecklist = [
  'Map every public form, landing page, calendar link, and contact path',
  'Define what counts as a qualified inquiry versus spam or low-fit traffic',
  'Create required CRM fields for inquiry type, source, owner, priority, status, and next follow-up',
  'Connect form submissions to CRM record creation or update logic',
  'Add deduplication rules so returning leads do not create messy duplicate records',
  'Assign ownership or route to a review queue based on clear business rules',
  'Create tasks, reminders, or follow-up views so leads do not sit idle',
  'Build a simple dashboard for volume, first response, qualification, and source quality',
];

const failureModes = [
  'The website sends all inquiries to one inbox and nobody owns the next step',
  'The CRM record is created but no task or follow-up date is attached',
  'The form captures too little context, so the first reply feels generic',
  'Leads are tagged with the wrong source, making marketing reporting unreliable',
  'Follow-up depends on memory instead of a queue, task, or workflow',
  'The business keeps buying more traffic while warm inquiries leak after submission',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Representative Case Study: Website Leads to CRM Follow-Up System',
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
  mainEntityOfPage: 'https://www.emergent-logic.ca/case-studies/website-leads-to-crm-follow-up-system',
  datePublished: '2026-06-29',
  dateModified: '2026-06-29',
};

export default function WebsiteLeadsToCRMFollowUpSystemCaseStudy() {
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
                  label: 'Website Leads to CRM Follow-Up',
                  href: '/case-studies/website-leads-to-crm-follow-up-system',
                },
              ]}
            />

            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">
              Representative Implementation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Website Leads to CRM Follow-Up System
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Most businesses do not have a lead problem. They have a follow-up problem. This representative case study shows how a website inquiry should move into CRM with source tracking, owner assignment, next actions, and reporting.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Note: this is a method-based implementation example, not a fabricated client result. It shows the operating system Emergent Logic recommends behind lead capture websites and CRM implementation projects.
            </p>

            <ShareButtons
              url="https://www.emergent-logic.ca/case-studies/website-leads-to-crm-follow-up-system"
              title="Representative Case Study: Website Leads to CRM Follow-Up System"
            />

            <div className="grid md:grid-cols-3 gap-4 my-10">
              {[
                { label: 'System type', value: 'Lead capture to CRM routing' },
                { label: 'Best fit', value: 'Service businesses with website inquiries' },
                { label: 'Core outcome', value: 'Every lead has owner, source, and next action' },
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
                A business invests in a website, runs ads, posts on social media, or gets referrals. People fill out a form. The form technically works. The inquiry reaches an inbox. Someone may reply once. Then the lead quietly goes cold because there is no clear system after submission.
              </p>
              <p>
                This is common in real estate, immigration, property management, home services, professional services, and B2B consulting. The business sees traffic and occasional inquiries, but there is no reliable view of who responded, who owns the lead, which source created it, and what needs to happen next.
              </p>

              <h2>The real problem</h2>
              <p>
                The website is not usually the only problem. The missing piece is the handoff between website, CRM, and follow-up. A form submission should not be the end of the process. It should be the beginning of a tracked sales workflow.
              </p>
            </div>

            <Card className="my-8 border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Clock3 className="w-8 h-8 text-orange-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The revenue leak</h2>
                    <p className="text-gray-700">
                      More leads do not fix slow follow-up. If every inquiry does not become a CRM record with owner, source, status, and next action, the business is paying to create demand it cannot consistently manage.
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
                    <step.icon className="w-8 h-8 text-orange-700 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The implementation sequence</h2>
              <p>
                A good lead capture system does not need to be complicated. It needs to be clear. The best first version usually connects website forms, CRM records, source tracking, owner assignment, follow-up tasks, and a small reporting view.
              </p>
            </div>

            <Card className="my-8 border-blue-100 bg-blue-50">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {implementationChecklist.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-800 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>What this prevents</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {failureModes.map((mode) => (
                <div key={mode} className="flex items-start gap-3 bg-gray-50 border rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{mode}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Where AI and automation fit</h2>
              <p>
                AI can help summarize the inquiry, classify the lead type, draft an internal note, suggest a response angle, or flag missing fields. But AI should not replace the operating process. The foundation is still CRM structure: clean fields, reliable routing, ownership, follow-up dates, and status tracking.
              </p>
              <p>
                This is why our <Link href="/services/lead-capture-websites" className="text-orange-700 hover:underline">lead capture website</Link>, <Link href="/services/crm-implementation" className="text-orange-700 hover:underline">CRM implementation</Link>, and <Link href="/services/crm-integration" className="text-orange-700 hover:underline">CRM integration</Link> work is connected. The website captures the lead. The CRM makes it actionable. Automation keeps it moving.
              </p>

              <h2>What a business gets from this work</h2>
              <p>
                The business gets a cleaner lead path: every qualified inquiry has a source, owner, status, next action, and visible follow-up queue. That makes it easier to respond faster, see which channels are working, and stop relying on memory or inbox hunting.
              </p>
              <p>
                The first version can be small. One form. One CRM path. One owner rule. One dashboard. Once that path works, more forms, segments, nurture sequences, and automation can be added safely.
              </p>
            </div>

            <Card className="my-8 border-emerald-100 bg-emerald-50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <ShieldCheck className="w-8 h-8 text-emerald-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The operating principle</h2>
                    <p className="text-gray-700">
                      Do not buy more traffic until the existing inquiry path is visible. A lead capture system should make it obvious who came in, where they came from, who owns them, and what happens next.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 p-8 bg-gradient-to-br from-orange-600 via-red-700 to-slate-950 rounded-2xl text-white">
              <Filter className="w-10 h-10 mb-4 text-orange-100" />
              <h2 className="text-3xl font-bold mb-4">Want to find the leak after your forms?</h2>
              <p className="text-white/80 mb-6 max-w-2xl">
                We can review one inquiry path from website form to CRM follow-up and show you where leads are getting delayed, duplicated, or lost.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/lead-follow-up-audit">
                  <Button size="lg" className="bg-white text-orange-950 hover:bg-orange-100">
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
