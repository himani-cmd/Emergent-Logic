import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, FileSearch } from 'lucide-react';

export const metadata = {
  title: '5-Point Lead Follow-Up Audit',
  description: 'Use this 5-point checklist to review what happens after a website inquiry: entry point, owner, CRM stage, next follow-up, and 7-day visibility.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/lead-follow-up-audit-checklist' },
  openGraph: {
    title: '5-Point Lead Follow-Up Audit Checklist | Emergent Logic',
    description: 'A practical checklist for reviewing the workflow after someone fills out a form, requests a consultation, or sends an inquiry.',
    url: 'https://www.emergent-logic.ca/blog/lead-follow-up-audit-checklist',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const auditChecks = [
  'Where does the inquiry enter?',
  'Who owns the next step?',
  'What CRM stage or status should be created?',
  'What follow-up should happen next?',
  'What should be visible after 7 days?',
];

const relatedPosts = [
  { title: 'Why Website Leads Do Not Turn Into Sales Without CRM Routing', href: '/blog/website-leads-to-crm' },
  { title: 'Property Management Lead Follow-Up: Why CRM Routing Matters', href: '/blog/property-management-lead-follow-up-crm' },
  { title: 'Immigration Consultation Follow-Up: Why CRM Intake Matters', href: '/blog/immigration-consultation-follow-up-crm' },
];

const faqItems = [
  {
    q: 'What should every website inquiry have in a CRM?',
    a: 'Every meaningful inquiry should have a source, owner, stage, next follow-up date, and visible status so the team can see whether the lead is still warm, booked, disqualified, or waiting on follow-up.',
  },
  {
    q: 'Should businesses automate follow-up before cleaning their CRM?',
    a: 'Usually no. The safer order is to clarify source, ownership, stage, next action, and reporting first. Once those basics are stable, automation can make the process faster without amplifying messy data.',
  },
  {
    q: 'Which inquiry path should be audited first?',
    a: 'Start with the highest-value path, such as a consultation request, home valuation, owner inquiry, quote request, demo request, or contact form that regularly creates sales conversations.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.emergent-logic.ca/blog/lead-follow-up-audit-checklist#article',
      headline: '5-Point Lead Follow-Up Audit Checklist',
      description: metadata.description,
      image: 'https://www.emergent-logic.ca/og-image.png',
      author: {
        '@type': 'Organization',
        name: 'Emergent Logic',
        url: 'https://www.emergent-logic.ca/',
      },
      publisher: { '@id': 'https://www.emergent-logic.ca/#organization' },
      mainEntityOfPage: 'https://www.emergent-logic.ca/blog/lead-follow-up-audit-checklist',
      datePublished: '2026-06-22',
      dateModified: '2026-06-23',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/blog/lead-follow-up-audit-checklist#faq',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function LeadFollowUpAuditChecklist() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'Lead Follow-Up Audit Checklist', href: '/blog/lead-follow-up-audit-checklist' },
            ]} />

            <Badge className="mb-4">Lead Follow-Up</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              5-Point Lead Follow-Up Audit Checklist
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 flex-wrap">
              <span className="flex items-center gap-2">
                <FileSearch className="w-4 h-4" /> Lead follow-up audit
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 8 min read
              </span>
            </div>

            <ShareButtons
              url="https://www.emergent-logic.ca/blog/lead-follow-up-audit-checklist"
              title="5-Point Lead Follow-Up Audit Checklist"
            />

            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                More leads will not fix broken follow-up. Before spending more on ads, SEO, social media, or a new website, review what happens after someone raises their hand.
              </p>

              <p>
                A website inquiry looks simple from the outside. Someone fills out a form, clicks a consultation button, requests a quote, asks for a property evaluation, or sends a message. But inside the business, that inquiry can move through a messy path: shared inbox, phone call, spreadsheet, CRM note, Slack message, text message, or memory.
              </p>

              <p>
                That is where revenue leaks. The form may work perfectly, but the operating system after the form may be unclear. This checklist helps you review that system without turning it into a complicated CRM project.
              </p>

              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-indigo-900 mb-2">The principle</h4>
                <p className="text-indigo-800 mb-0">
                  Every meaningful inquiry should have a source, owner, stage, next follow-up date, and visible status.
                </p>
              </div>

              <h2>The 5-Point Lead Follow-Up Audit</h2>
              <p>
                Use these five questions to review one inquiry path on your website. Do not audit everything at once. Pick one high-value path: contact form, consultation request, home valuation, demo request, quote request, or landlord inquiry.
              </p>

              <div className="space-y-4 my-8">
                {auditChecks.map((check) => (
                  <div key={check} className="flex items-start gap-3 bg-gray-50 border rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>

              <h2>1. Where Does the Inquiry Enter?</h2>
              <p>
                Start with the visible entry point. Is the inquiry coming from a contact form, booking page, quote request, consultation form, phone number, email address, WhatsApp link, or landing page?
              </p>
              <p>
                This matters because every source should carry context. A seller valuation request is not the same as a buyer question. A property owner inquiry is not the same as a tenant support message. An immigration consultation request is not the same as a general document question.
              </p>
              <p>
                If all of those inquiries land in the same inbox with the same treatment, your team has to recreate context manually. That slows response time and makes reporting harder.
              </p>

              <h2>2. Who Owns the Next Step?</h2>
              <p>
                A lead without an owner is not really in a sales process. It is just a message waiting for someone to notice it.
              </p>
              <p>
                Ownership can be simple. For a small team, one person may own all new inquiries. For a real estate team, buyer and seller leads may go to different people. For an immigration practice, consultation requests may route by service type or language. For property management, owner inquiries should be separated from tenant support.
              </p>
              <p>
                The point is not to create a complex assignment model on day one. The point is to remove ambiguity. If a new inquiry arrives, the system should make it obvious who is responsible for the next action.
              </p>

              <h2>3. What CRM Stage or Status Should Be Created?</h2>
              <p>
                Many businesses technically have a CRM, but new inquiries do not enter it in a useful state. They may become a contact with no lifecycle stage, a deal with the wrong pipeline, or a note that nobody sees.
              </p>
              <p>
                The first CRM status should match the real buying process. Examples include New Website Inquiry, New Consultation Request, Buyer Inquiry, Seller Valuation Request, Owner Inquiry, Needs Qualification, or Follow-Up Due.
              </p>
              <p>
                A clear stage helps the team work the lead. It also helps the business measure where opportunities are slowing down.
              </p>

              <h2>4. What Follow-Up Should Happen Next?</h2>
              <p>
                Follow-up should not depend on memory. Even a basic workflow can create consistency: notify the owner, create a task, set a due date, and make the next step visible.
              </p>
              <p>
                For many small teams, the first useful automation is not a complex email sequence. It is a simple task that says: call or reply within a set time, then follow up again if there is no response.
              </p>
              <p>
                This is where <Link href="/services/crm-implementation" className="text-indigo-700 hover:underline">CRM implementation</Link> and <Link href="/services/lead-capture-websites" className="text-indigo-700 hover:underline">lead capture websites</Link> need to work together. The website creates the inquiry. The CRM moves it forward.
              </p>

              <h2>5. What Should Be Visible After 7 Days?</h2>
              <p>
                A week later, the team should be able to answer a few simple questions: did we reply, did they respond, did they book, are they still warm, did we disqualify them, or did follow-up stall?
              </p>
              <p>
                If the answer requires searching inboxes, asking team members, or checking spreadsheets, the workflow is not visible enough.
              </p>
              <p>
                A simple CRM view should show source, owner, stage, last outreach date, next follow-up date, and status. That is enough for a manager or owner to see whether leads are moving.
              </p>

              <h2>What To Fix First</h2>
              <p>
                If your workflow is messy, do not start with automation. Start with clarity. Define the lead source, owner, stage, next action, and reporting view first. Once that is stable, automation becomes safer.
              </p>
              <p>
                This is the same reason <Link href="/blog/website-leads-to-crm" className="text-indigo-700 hover:underline">website leads need CRM routing</Link>. A form can create interest, but the system behind it determines whether that interest becomes pipeline.
              </p>

              <h2>Bottom Line</h2>
              <p>
                Lead follow-up is not glamorous, but it is where many businesses quietly lose revenue. A better follow-up system does not always require a huge implementation. Sometimes it starts with reviewing one inquiry path and making the next step obvious.
              </p>
              <p>
                If every lead has a source, owner, stage, next follow-up date, and visible status, the business becomes easier to run and easier to improve.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-indigo-700 to-violet-800 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Want us to review one inquiry path?</h3>
              <p className="text-white/80 mb-6">
                We can do a free 5-point lead follow-up audit and send back practical notes on where leads may get missed after the first touch.
              </p>
              <Link href="/lead-follow-up-audit">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-100">
                  Request a Free Lead Follow-Up Audit <ArrowRight className="w-5 h-5 ml-2" />
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
