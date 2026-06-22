import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, FileText, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Immigration Consultation Follow-Up: Why CRM Intake Matters',
  description: 'Immigration consultants lose consultation opportunities when forms, calls, WhatsApp, and email are not routed into one clear CRM follow-up workflow.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/immigration-consultation-follow-up-crm' },
  openGraph: {
    title: 'Immigration Consultation Follow-Up: Why CRM Intake Matters | Emergent Logic',
    description: 'A practical guide for immigration consultants that want cleaner consultation intake, faster follow-up, and better CRM visibility.',
    url: 'https://www.emergent-logic.ca/blog/immigration-consultation-follow-up-crm',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const intakeLeaks = [
  'Assessment forms land in email but never become a tracked CRM record',
  'WhatsApp, phone, email, and website inquiries are handled in separate places',
  'Service interest is unclear: study permit, visitor visa, PR, LMIA, sponsorship, or appeal',
  'Follow-up depends on memory instead of tasks and next follow-up dates',
  'Document requests are mixed with new consultation requests',
  'No report shows which inquiry sources create qualified consultations',
];

const crmFields = [
  'Inquiry source',
  'Service interest',
  'Language preference',
  'Consultation status',
  'Assigned owner',
  'Next follow-up date',
  'Document/request notes',
  'Qualified or not qualified',
];

const cleanupSteps = [
  'Map every intake channel: forms, calls, email, WhatsApp, referrals, and social messages',
  'Separate new consultations from active client case work and document follow-ups',
  'Define clear stages for inquiry, booked consultation, qualified, proposal, retained, and not fit',
  'Create ownership rules so every inquiry has one responsible person',
  'Build simple follow-up tasks before adding complex automation',
  'Review weekly reports so the CRM becomes an operating tool, not a contact list',
];

const relatedPosts = [
  { title: 'Why Website Leads Do Not Turn Into Sales Without CRM Routing', href: '/blog/website-leads-to-crm' },
  { title: 'Marketing Automation Needs CRM Cleanup First', href: '/blog/marketing-automation-needs-crm-cleanup' },
  { title: 'What CRM Jobs Reveal About Cleanup Problems', href: '/blog/hubspot-salesforce-cleanup-upwork-patterns' },
];

export default function ImmigrationConsultationFollowUpCrm() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'Immigration Consultation CRM Follow-Up', href: '/blog/immigration-consultation-follow-up-crm' },
            ]} />

            <Badge className="mb-4">Lead Follow-Up</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Immigration Consultation Follow-Up: Why CRM Intake Matters
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 flex-wrap">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Canada and US remote
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 8 min read
              </span>
            </div>

            <ShareButtons
              url="https://www.emergent-logic.ca/blog/immigration-consultation-follow-up-crm"
              title="Immigration Consultation Follow-Up: Why CRM Intake Matters"
            />

            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                Immigration consultants usually do not lose opportunities because people stop needing help. They lose opportunities because consultation intake and follow-up are scattered across too many channels.
              </p>

              <p>
                A prospective client fills an assessment form. Another sends a WhatsApp message about a visitor visa. Someone calls about sponsorship. A student asks about a study permit by email. A referral arrives from a previous client. Each inquiry may be valuable, but only if it is captured, categorized, assigned, and followed up properly.
              </p>

              <p>
                The problem is that immigration teams often handle new inquiries, active client requests, document follow-ups, deadline questions, and general messages in the same channels. Without a clean CRM workflow, qualified consultation opportunities can get buried inside daily case work.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5" /> The core issue
                </h4>
                <p className="text-emerald-800 mb-0">
                  Immigration teams need to separate new consultation opportunities from active client operations. A CRM should make that difference obvious.
                </p>
              </div>

              <h2>Why Immigration Intake Needs Structure</h2>
              <p>
                Not every inquiry is the same. A study permit lead, a family sponsorship inquiry, an LMIA request, and a permanent residence question may all need different next steps. If they all land in the same inbox, the team may stay busy while high-intent prospects quietly slow down.
              </p>

              <p>
                Good intake structure does not need to be complicated. It needs to tell the team what came in, what service the person asked about, who owns the next action, what stage the inquiry is in, and when follow-up should happen.
              </p>

              <p>
                If your firm needs this built instead of just discussed, our <Link href="/immigration-consultant-crm-canada" className="text-emerald-700 hover:underline">CRM for immigration consultants</Link> page explains how we structure consultation intake and follow-up systems.
              </p>

              <h2>Common Places Immigration Leads Leak</h2>
              <p>
                In immigration consulting, the lead leak usually looks like small delays and unclear ownership rather than one dramatic mistake.
              </p>

              <div className="space-y-4 my-8">
                {intakeLeaks.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-gray-50 border rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h2>What a Better CRM Intake Workflow Should Capture</h2>
              <p>
                A useful immigration CRM should make the next action clear. For new consultations, that usually means every inquiry has enough context to prioritize and follow up without rereading a long email chain.
              </p>

              <div className="grid md:grid-cols-2 gap-3 my-8">
                {crmFields.map((field) => (
                  <div key={field} className="bg-white border rounded-lg p-4 shadow-sm">
                    <span className="font-medium text-gray-900">{field}</span>
                  </div>
                ))}
              </div>

              <p>
                This is where <Link href="/services/lead-capture-websites" className="text-emerald-700 hover:underline">lead capture websites</Link> and <Link href="/services/crm-implementation" className="text-emerald-700 hover:underline">CRM implementation</Link> should work together. The website captures the inquiry. The CRM makes sure the team can actually act on it.
              </p>

              <h2>How to Clean Up the Process</h2>
              <p>
                Before adding more automation, start with the operating process. These steps are usually enough to make consultation intake easier to manage:
              </p>

              <ol>
                {cleanupSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <h2>Where Automation Helps</h2>
              <p>
                Once the intake process is clean, automation can help. A form can create a contact, assign the right owner, create a follow-up task, tag the service interest, and alert the team if the inquiry is high priority.
              </p>

              <p>
                The key is sequencing. Automating before cleanup can create more noise. Automating after cleanup can create speed and consistency.
              </p>

              <p>
                That is why our <Link href="/services/crm-cleanup" className="text-emerald-700 hover:underline">CRM cleanup</Link> work focuses on the foundation first: data quality, ownership, stages, fields, reporting, and follow-up structure. Then automation becomes much safer to build.
              </p>

              <h2>Bottom Line</h2>
              <p>
                Immigration consultants do not need more disconnected tools. They need a clearer path from inquiry to booked consultation to retained client.
              </p>

              <p>
                If your forms, inboxes, WhatsApp messages, and CRM are not working together, start there. Cleaner intake can create faster response times, better visibility, and fewer missed consultation opportunities.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-emerald-700 to-teal-800 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Want to review your consultation intake workflow?</h3>
              <p className="text-white/80 mb-6">
                We can audit your lead capture, CRM routing, follow-up stages, and reporting so your team can see where inquiries are slowing down.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100">
                  Contact Emergent Logic <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedPosts.map((post) => (
                  <Link key={post.href} href={post.href}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardHeader>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
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
