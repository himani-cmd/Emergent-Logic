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
  CalendarCheck,
  CheckCircle,
  ClipboardList,
  FileText,
  Inbox,
  Languages,
  MessageCircle,
  Phone,
  ShieldCheck,
  UserCheck,
  Workflow,
} from 'lucide-react';

export const metadata = {
  title: 'Representative Case Study: Immigration Consultation Intake Automation',
  description:
    'A representative implementation showing how Emergent Logic organizes immigration consultation requests across forms, phone, WhatsApp, email, CRM ownership, follow-up tasks, and reporting.',
  alternates: {
    canonical: 'https://www.emergent-logic.ca/case-studies/immigration-consultation-intake-automation',
  },
  openGraph: {
    title: 'Representative Case Study: Immigration Consultation Intake Automation | Emergent Logic',
    description:
      'How immigration consultants can route consultation inquiries into a CRM workflow with service interest, owner assignment, follow-up tasks, and visibility.',
    url: 'https://www.emergent-logic.ca/case-studies/immigration-consultation-intake-automation',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const intakeChannels = [
  {
    icon: FileText,
    title: 'Website and consultation forms',
    description:
      'Capture service interest, location, urgency, preferred language, referral source, and consent so the first follow-up has context.',
  },
  {
    icon: Phone,
    title: 'Phone calls and callbacks',
    description:
      'Log callback requests and missed calls into the CRM so they do not rely on memory, sticky notes, or a shared phone history.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp and social messages',
    description:
      'Separate new consultation opportunities from active client messages so high-intent prospects do not get buried inside daily communication.',
  },
  {
    icon: Inbox,
    title: 'Email and referrals',
    description:
      'Route referrals and general inquiries into the same intake model instead of letting them sit in individual inboxes.',
  },
];

const crmFields = [
  'Service interest: study permit, PR, family sponsorship, visitor visa, work permit, LMIA, or other',
  'Inquiry source: website, referral, Google, social, WhatsApp, phone, email, event, or partner',
  'Consultation status: new inquiry, contacted, consultation booked, attended, qualified, proposal, retained, not fit',
  'Assigned owner and next follow-up date',
  'Preferred language, urgency, country context, and notes for human review',
  'Active client flag so new leads do not mix with document or case-management follow-ups',
];

const automationRules = [
  'Create or update the CRM contact from each qualified inquiry',
  'Tag the service interest and source before the first call',
  'Assign the inquiry to the right owner or review queue',
  'Create a follow-up task if the consultation is not booked',
  'Alert the team when high-intent inquiries have no next action',
  'Report which sources create booked consultations and retained clients',
];

const safeguards = [
  'Do not automate legal advice or immigration recommendations',
  'Keep human review before eligibility, pricing, or case-specific guidance',
  'Separate new consultations from active case-management work',
  'Avoid sending sensitive details through unnecessary tools',
  'Make every automated reminder traceable to a CRM record',
  'Use automation to support follow-up, not replace professional judgment',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Representative Case Study: Immigration Consultation Intake Automation',
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
  mainEntityOfPage: 'https://www.emergent-logic.ca/case-studies/immigration-consultation-intake-automation',
  datePublished: '2026-06-29',
  dateModified: '2026-06-29',
};

export default function ImmigrationConsultationIntakeAutomationCaseStudy() {
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
                  label: 'Immigration Consultation Intake Automation',
                  href: '/case-studies/immigration-consultation-intake-automation',
                },
              ]}
            />

            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              Representative Implementation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Immigration Consultation Intake Automation
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Immigration firms often receive inquiries through website forms, calls, WhatsApp, email, referrals, and social messages. This representative case study shows how those requests can be routed into one CRM intake workflow without replacing human judgment.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Note: this is a method-based implementation example, not a fabricated client result. It focuses on consultation intake, CRM visibility, and follow-up operations. It is not legal or immigration advice.
            </p>

            <ShareButtons
              url="https://www.emergent-logic.ca/case-studies/immigration-consultation-intake-automation"
              title="Representative Case Study: Immigration Consultation Intake Automation"
            />

            <div className="grid md:grid-cols-3 gap-4 my-10">
              {[
                { label: 'System type', value: 'Consultation intake and CRM follow-up' },
                { label: 'Best fit', value: 'Immigration firms with multi-channel inquiries' },
                { label: 'Core outcome', value: 'Every inquiry has source, owner, stage, and next action' },
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
                An immigration practice may receive strong inquiries every week, but the path after first contact is often scattered. A person fills out a website form. Another sends a WhatsApp message. Someone else calls after seeing a Google profile. A referral arrives in one team member's inbox. Active client document requests keep coming through the same channels.
              </p>
              <p>
                The team is busy, but the consultation pipeline is not fully visible. It becomes hard to know which inquiries were contacted, which ones booked consultations, which ones are still warm, and which sources are creating retained clients.
              </p>

              <h2>The real problem</h2>
              <p>
                The issue is not only lead volume. The issue is intake structure. New consultation opportunities need to be separated from active client operations and general questions. Without that separation, high-intent prospects can slow down because no one has a clear view of owner, stage, urgency, or next follow-up.
              </p>
            </div>

            <Card className="my-8 border-emerald-200 bg-emerald-50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <CalendarCheck className="w-8 h-8 text-emerald-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The intake principle</h2>
                    <p className="text-gray-700">
                      Every qualified consultation request should become visible in the CRM with service interest, source, owner, stage, and next action. If the next step is not visible, the opportunity is easier to lose.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>Channels we would map first</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 my-8">
              {intakeChannels.map((channel) => (
                <Card key={channel.title} className="border shadow-sm">
                  <CardContent className="p-6">
                    <channel.icon className="w-8 h-8 text-emerald-700 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-gray-600">{channel.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The CRM fields that matter</h2>
              <p>
                The CRM does not need to be overloaded. It needs enough structure to let the team prioritize and follow up. For immigration consultation intake, the first useful version usually includes a small set of fields that support routing, reporting, and human review.
              </p>
            </div>

            <Card className="my-8 border-blue-100 bg-blue-50">
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
              <h2>Where automation helps</h2>
              <p>
                Once the intake model is clear, automation can reduce manual handoffs. The goal is not to make legal decisions automatically. The goal is to make the administrative path clearer so the right person sees the right inquiry with the right context.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {automationRules.map((rule) => (
                <div key={rule} className="flex items-start gap-3 bg-gray-50 border rounded-xl p-4">
                  <Workflow className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{rule}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Important safeguards</h2>
              <p>
                Immigration intake automation needs restraint. The system can organize inquiries, create reminders, route requests, and improve visibility. It should not replace professional review, eligibility assessment, or immigration/legal advice.
              </p>
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
              <h2>What a firm gets from this work</h2>
              <p>
                The firm gets a clearer consultation pipeline. New inquiries are no longer mixed with active case work. The team can see which sources create qualified consultations, which inquiries need follow-up, who owns each opportunity, and where the process slows down.
              </p>
              <p>
                This is why our <Link href="/immigration-consultant-crm-canada" className="text-emerald-700 hover:underline">CRM for immigration consultants</Link>, <Link href="/blog/immigration-consultation-follow-up-crm" className="text-emerald-700 hover:underline">immigration consultation follow-up guide</Link>, and <Link href="/services/crm-implementation" className="text-emerald-700 hover:underline">CRM implementation</Link> work are connected. The intake workflow is the bridge between marketing interest and a real consultation process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              {[
                { icon: Languages, title: 'Better context', desc: 'Language preference and service interest can be captured before the first response.' },
                { icon: UserCheck, title: 'Clearer ownership', desc: 'Each qualified inquiry has an owner or review queue instead of floating in channels.' },
                { icon: ClipboardList, title: 'Visible follow-up', desc: 'The team can see which consultations are booked, pending, or still waiting.' },
              ].map((item) => (
                <Card key={item.title} className="border">
                  <CardContent className="p-5">
                    <item.icon className="w-7 h-7 text-emerald-700 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-emerald-700 via-teal-800 to-slate-950 rounded-2xl text-white">
              <ShieldCheck className="w-10 h-10 mb-4 text-emerald-100" />
              <h2 className="text-3xl font-bold mb-4">Want cleaner consultation intake?</h2>
              <p className="text-white/80 mb-6 max-w-2xl">
                We can review one intake path and show where inquiries are getting delayed, duplicated, or lost between website forms, phone, WhatsApp, email, and CRM follow-up.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/lead-follow-up-audit">
                  <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-100">
                    Try Consultation Follow-Up Audit <ArrowRight className="w-5 h-5 ml-2" />
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
