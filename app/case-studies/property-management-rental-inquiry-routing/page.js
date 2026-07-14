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
  Building2,
  CheckCircle,
  ClipboardList,
  MailCheck,
  Route,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

export const metadata = {
  title: 'Property Management Inquiry Routing',
  description:
    'How property managers can route owner inquiries, rental evaluations, referrals, and website leads into a clear CRM follow-up workflow.',
  alternates: {
    canonical: 'https://www.emergent-logic.ca/case-studies/property-management-rental-inquiry-routing',
  },
  openGraph: {
    title: 'Implementation Pattern: Property Management Rental Inquiry Routing | Emergent Logic',
    description:
      'How property management companies can turn scattered owner inquiries, rental evaluations, referrals, and website leads into CRM ownership, follow-up tasks, and reporting.',
    url: 'https://www.emergent-logic.ca/case-studies/property-management-rental-inquiry-routing',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const inquiryTypes = [
  {
    icon: Building2,
    title: 'Owner inquiries',
    description:
      'Potential owners need fast response, property context, source tracking, owner assignment, and a clear next step toward a management conversation.',
  },
  {
    icon: ClipboardList,
    title: 'Rental evaluation requests',
    description:
      'Evaluation forms should not sit in email. They need property details, lead source, urgency, assigned owner, and follow-up status in the CRM.',
  },
  {
    icon: MailCheck,
    title: 'Referral and partner leads',
    description:
      'Referrals from realtors, mortgage professionals, investors, and past clients deserve a more personal follow-up path than generic website inquiries.',
  },
  {
    icon: Wrench,
    title: 'Tenant and maintenance noise',
    description:
      'Revenue inquiries should be separated from tenant questions, maintenance requests, vendor messages, and general support so the pipeline stays readable.',
  },
];

const crmFields = [
  'Inquiry type: owner lead, rental evaluation, referral, tenant question, vendor, or general contact',
  'Source: website, Google Business Profile, referral partner, paid ad, email, phone, social, or property listing',
  'Property context: address, unit count, property type, current vacancy status, and urgency where available',
  'Assigned owner, next follow-up date, current status, and last outreach date',
  'Pipeline stage: new inquiry, contacted, qualified, proposal sent, follow-up due, won, lost, or no fit',
  'Reason for disqualification or loss so the team can learn which sources are producing poor-fit inquiries',
];

const workflowSteps = [
  'Map every inquiry source: website forms, calls, emails, Google Business Profile, referrals, ads, and social messages',
  'Separate revenue opportunities from tenant support, maintenance, vendor, and general contact requests',
  'Create CRM fields for inquiry type, source, property context, owner, stage, and next follow-up',
  'Route owner and rental evaluation inquiries faster than low-context general questions',
  'Create follow-up tasks and reminders instead of relying on shared inbox flags',
  'Build saved CRM views for new owner leads, follow-ups due, proposal follow-up, and stale opportunities',
  'Track which sources create qualified owner conversations and management agreements',
  'Review open opportunities weekly so warm owner leads do not disappear after one reply',
];

const safeguards = [
  'Do not mix tenant support requests with new owner acquisition opportunities',
  'Do not automate sensitive replies without human review',
  'Keep consent and communication preferences visible before nurture emails',
  'Keep property details structured enough for follow-up without collecting unnecessary data',
  'Make ownership clear before creating reminders, notifications, or reporting',
  'Keep every automation reversible and documented so the team can troubleshoot quickly',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Implementation Pattern: Property Management Rental Inquiry Routing',
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
  mainEntityOfPage: 'https://www.emergent-logic.ca/case-studies/property-management-rental-inquiry-routing',
  datePublished: '2026-06-29',
  dateModified: '2026-06-29',
};

export default function PropertyManagementRentalInquiryRoutingCaseStudy() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[
                { label: 'Implementation Patterns', href: '/case-studies' },
                {
                  label: 'Property Management Rental Inquiry Routing',
                  href: '/case-studies/property-management-rental-inquiry-routing',
                },
              ]}
            />

            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Representative Implementation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Property Management Rental Inquiry Routing
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Property management companies rarely lose owner opportunities because one form is broken. They lose opportunities because owner inquiries, rental evaluations, referrals, tenant questions, and vendor messages all land in different places with no consistent follow-up system.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Note: this is a method-based implementation example, not a fabricated client result. It shows the CRM routing and follow-up pattern Emergent Logic recommends for property management companies.
            </p>

            <ShareButtons
              url="https://www.emergent-logic.ca/case-studies/property-management-rental-inquiry-routing"
              title="Implementation Pattern: Property Management Rental Inquiry Routing"
            />

            <div className="grid md:grid-cols-3 gap-4 my-10">
              {[
                { label: 'System type', value: 'Property management inquiry routing' },
                { label: 'Best fit', value: 'Teams with owner leads, rental evaluations, and referral inquiries' },
                { label: 'Core outcome', value: 'Every inquiry has source, owner, category, and next follow-up' },
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
                A property management company can receive owner opportunities from rental evaluation forms, Google searches, realtor referrals, investor partners, past clients, phone calls, email, paid ads, and social media. At the same time, the same team may also receive tenant questions, maintenance issues, vendor messages, showing requests, and general support emails.
              </p>
              <p>
                When all of that activity lands in a shared inbox, it becomes difficult to see which messages are revenue opportunities and which messages are operational support. The team stays busy, but high-intent owner inquiries can lose momentum after one reply.
              </p>

              <h2>The real problem</h2>
              <p>
                The problem is not simply response time. The problem is unclear classification. A rental evaluation request should not follow the same path as a tenant maintenance question. A realtor referral should not be treated like a low-context website form. A warm owner lead should not vanish because the next follow-up was never assigned.
              </p>
            </div>

            <Card className="my-8 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <BellRing className="w-8 h-8 text-blue-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The owner inquiry visibility issue</h2>
                    <p className="text-gray-700">
                      If the CRM does not track source, inquiry type, property context, owner, stage, and next follow-up, the team may not know which owner leads are still warm, which proposals need follow-up, or which sources are creating real management opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>Inquiry types we would separate first</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 my-8">
              {inquiryTypes.map((lead) => (
                <Card key={lead.title} className="border shadow-sm">
                  <CardContent className="p-6">
                    <lead.icon className="w-8 h-8 text-blue-700 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lead.title}</h3>
                    <p className="text-gray-600">{lead.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The CRM fields that matter</h2>
              <p>
                A useful property management CRM does not need to become complicated. It needs enough structure to show what kind of inquiry came in, where it came from, who owns it, and what should happen next.
              </p>
            </div>

            <Card className="my-8 border-slate-100 bg-slate-50">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {crmFields.map((field) => (
                    <div key={field} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800">{field}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>The implementation sequence</h2>
              <p>
                The first version should focus on visibility and clean routing. Once the company can separate owner leads from support requests, automation can help the team respond faster and follow up more consistently.
              </p>
            </div>

            <Card className="my-8 border-slate-200 bg-slate-50">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {workflowSteps.map((step, index) => (
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
              <h2>Where automation helps</h2>
              <p>
                Once the routing rules are clear, automation can create useful structure. A rental evaluation form can create a high-priority owner task. A referral can create a personal follow-up reminder. A general support question can be routed away from the sales pipeline. A proposal follow-up can stay visible until it is won, lost, or marked no fit.
              </p>
              <p>
                The point is not to make property management communication robotic. The point is to make sure revenue opportunities do not depend on memory, scattered inboxes, or whoever happens to notice the email first.
              </p>

              <h2>Safeguards we would include</h2>
            </div>

            <Card className="my-8 border-amber-100 bg-amber-50">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {safeguards.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>What a property management team gets from this work</h2>
              <p>
                The team gets a clearer view of active owner opportunities. Rental evaluations are not buried in email. Realtor referrals are not forgotten after one reply. Tenant support requests stop polluting the sales pipeline. Managers can see which inquiries are new, contacted, qualified, waiting on proposal follow-up, won, lost, or no fit.
              </p>
              <p>
                This is why our <Link href="/blog/property-management-lead-follow-up-crm" className="text-blue-700 hover:underline">property management lead follow-up guide</Link>, <Link href="/property-management-crm-consulting-canada" className="text-blue-700 hover:underline">property management CRM consulting</Link>, and <Link href="/services/lead-capture-websites" className="text-blue-700 hover:underline">lead capture website</Link> work are connected. The website creates the inquiry. The CRM protects the follow-up. Automation helps the team stay consistent.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              {[
                { icon: Route, title: 'Cleaner routing', desc: 'Owner inquiries, rental evaluations, referrals, and tenant messages can follow different paths.' },
                { icon: BellRing, title: 'Better reminders', desc: 'Warm owner leads stay visible after the first response or proposal.' },
                { icon: MailCheck, title: 'Clearer source reporting', desc: 'The team can see which channels create qualified management conversations.' },
              ].map((item) => (
                <Card key={item.title} className="border">
                  <CardContent className="p-5">
                    <item.icon className="w-7 h-7 text-blue-700 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-blue-800 via-slate-900 to-indigo-950 rounded-2xl text-white">
              <ClipboardList className="w-10 h-10 mb-4 text-blue-100" />
              <h2 className="text-3xl font-bold mb-4">Want to review your property management inquiry flow?</h2>
              <p className="text-white/80 mb-6 max-w-2xl">
                We can review one inquiry path from website form, referral, Google Business Profile, email, or phone into CRM owner, task, stage, and next follow-up.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/lead-follow-up-audit">
                  <Button size="lg" className="bg-white text-blue-950 hover:bg-blue-100">
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
