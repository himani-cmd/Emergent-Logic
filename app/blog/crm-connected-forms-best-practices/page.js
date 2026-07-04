import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, FormInput, Route } from 'lucide-react';

export const metadata = {
  title: 'CRM-Connected Forms Guide',
  description: 'Learn how to connect website forms to your CRM with source tracking, owner routing, tasks, follow-up, and reporting that prevents missed leads.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/crm-connected-forms-best-practices' },
  openGraph: {
    title: 'CRM-Connected Forms Best Practices | Lead Capture',
    description: 'A practical guide to CRM-connected forms: hidden fields, UTM tracking, owner routing, tasks, notifications, reporting, and missed-lead prevention.',
    url: 'https://www.emergent-logic.ca/blog/crm-connected-forms-best-practices',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const checklist = [
  'Create or update the CRM contact automatically',
  'Capture source, campaign, form name, landing page, and UTM fields',
  'Route the lead to the right owner or queue',
  'Create a follow-up task with a clear due date',
  'Send an internal notification to the right person',
  'Send a helpful confirmation email to the prospect',
  'Prevent duplicate contacts and messy company records',
  'Report on response time, lead quality, and conversion',
];

const fields = [
  {
    title: 'Visible fields',
    body: 'Name, email, phone, service interest, location, urgency, and message. Keep these simple so prospects actually complete the form.',
  },
  {
    title: 'Hidden fields',
    body: 'UTM source, campaign, landing page, form name, page URL, referrer, and channel. These make attribution and routing possible.',
  },
  {
    title: 'CRM fields',
    body: 'Lifecycle stage, lead source, owner, pipeline, lead status, inquiry type, next follow-up date, and qualification notes.',
  },
];

export default function CrmConnectedFormsBestPractices() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'CRM-Connected Forms', href: '/blog/crm-connected-forms-best-practices' },
            ]} />

            <Badge className="mb-4">Lead Capture</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              CRM-Connected Forms: Best Practices for Lead Capture
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 flex-wrap">
              <span className="flex items-center gap-2">
                <FormInput className="w-4 h-4" /> Website forms
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 8 min read
              </span>
              <span className="flex items-center gap-2">
                <Route className="w-4 h-4" /> CRM routing
              </span>
            </div>

            <ShareButtons
              url="https://www.emergent-logic.ca/blog/crm-connected-forms-best-practices"
              title="CRM-Connected Forms: Best Practices for Lead Capture"
            />

            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                A website form should not just send an email. A good lead capture form should create a CRM record, preserve source data, assign ownership, trigger follow-up, and make the result visible.
              </p>

              <p>
                Many businesses think their form is working because submissions arrive in an inbox. But if the lead is not routed, owned, tracked, and followed up, the business still has a revenue leak.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-emerald-900 mb-2">The rule</h4>
                <p className="text-emerald-900 mb-0">
                  Every qualified form submission should become a tracked lead with a source, owner, next step, and follow-up status.
                </p>
              </div>

              <h2>What a CRM-Connected Form Should Do</h2>
              <div className="space-y-4 my-8">
                {checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-gray-50 border rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h2>Visible Fields vs Hidden Fields</h2>
              <p>
                The prospect should see a short form. The business should capture enough context behind the scenes to understand where the lead came from and what should happen next.
              </p>

              <div className="not-prose grid gap-4 my-8">
                {fields.map((field) => (
                  <Card key={field.title}>
                    <CardHeader>
                      <CardTitle className="text-xl">{field.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-0">{field.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2>Why UTM Capture Matters</h2>
              <p>
                Without UTM and source capture, your CRM may show that leads came from the website, but not which campaign, post, ad, referral, or landing page created the inquiry. That makes marketing decisions harder than they need to be.
              </p>
              <p>
                A clean CRM-connected form should store source data at the moment of submission, not rely on someone manually entering it later.
              </p>

              <h2>Owner Routing and Follow-Up Tasks</h2>
              <p>
                The form should know where the lead goes next. That might mean assigning a salesperson, notifying an intake coordinator, creating a deal, or routing by service line, location, urgency, language, or source.
              </p>
              <p>
                For example, an immigration consultant may route consultation requests by service type. A real estate team may separate buyer and seller leads. A home service company may route by city or urgency.
              </p>

              <h2>When Google Sheets Is Enough</h2>
              <p>
                Not every business needs a full CRM on day one. A Google Sheet can be a useful starter layer if it captures the right fields and creates a clear review process. But once follow-up, ownership, and reporting become important, a CRM becomes the safer long-term system.
              </p>

              <h2>Where Automation Fits</h2>
              <p>
                Once the form is connected properly, automation can help with confirmation emails, internal alerts, follow-up reminders, lead scoring, CRM tasks, and reporting updates. This is where <Link href="/services/ai-automation-consulting" className="text-emerald-700 hover:underline">AI automation consulting</Link> can be useful, but only after the data path is reliable.
              </p>

              <h2>Common Mistakes</h2>
              <ul>
                <li>Sending every lead to one shared inbox</li>
                <li>Not capturing campaign or page source</li>
                <li>Creating duplicates in the CRM</li>
                <li>Leaving ownership unclear</li>
                <li>Not creating a follow-up task</li>
                <li>Using forms that do not report lead quality or conversion</li>
              </ul>

              <h2>How Emergent Logic Approaches Form-to-CRM Work</h2>
              <p>
                We treat forms as part of the revenue system, not just the website. Our <Link href="/services/lead-capture-websites" className="text-emerald-700 hover:underline">lead capture website</Link> and <Link href="/website-leads-to-crm-implementation" className="text-emerald-700 hover:underline">website leads to CRM implementation</Link> work focuses on clean intake, routing, follow-up, and reporting.
              </p>
              <p>
                We also created a free <Link href="/resources/crm-automation-diagrams" className="text-emerald-700 hover:underline">website lead to CRM flow diagram</Link> you can use to explain this handoff internally.
              </p>

              <h2>Bottom Line</h2>
              <p>
                A form is only the beginning of the lead journey. The real value comes from what happens next: source captured, owner assigned, task created, follow-up triggered, and reporting visible.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-emerald-700 to-slate-900 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Want us to audit your form-to-follow-up flow?</h3>
              <p className="text-white/80 mb-6">
                We can review one lead path and show where source tracking, routing, ownership, or follow-up may be leaking.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
                  Review My Lead Flow <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <CookieConsent />
    </main>
  );
}
