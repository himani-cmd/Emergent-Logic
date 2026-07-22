import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  Database,
  FileText,
  GitMerge,
  Mail,
  Mic,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react';

export const metadata = {
  title: 'Email & Call Notes to CRM Automation',
  description:
    'Connect approved emails, call recordings, voice notes, and transcripts to CRM contacts with identity matching, exception handling, and human review.',
  alternates: { canonical: 'https://www.emergent-logic.ca/solutions/email-and-call-notes-to-crm' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Email and Call Notes to CRM | Emergent Logic',
    description:
      'A controlled small-business workflow for creating CRM contacts and preserving approved email or call notes.',
    url: 'https://www.emergent-logic.ca/solutions/email-and-call-notes-to-crm',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const workflowSteps = [
  {
    icon: Mail,
    title: 'Approved email enters',
    text: 'A connected inbox, CRM extension, or approved mailbox rule identifies the messages that belong in the CRM.',
  },
  {
    icon: Mic,
    title: 'Call note enters',
    text: 'A recording, voice memo, or platform transcript reaches the workflow only after the capture and consent method is agreed.',
  },
  {
    icon: UserRoundCheck,
    title: 'Identity is matched',
    text: 'Verified email or phone data is used to find the right contact. Ambiguous matches are held for review.',
  },
  {
    icon: FileText,
    title: 'CRM note is created',
    text: 'The approved message, transcript, summary, or recording link is attached with source and time context.',
  },
  {
    icon: CircleAlert,
    title: 'Exceptions stay visible',
    text: 'Unknown contacts, duplicates, missing consent, and failed uploads go to a review queue instead of disappearing.',
  },
];

const controls = [
  'Define which inboxes, senders, calls, and note types are in scope.',
  'Use native CRM features first when they satisfy the requirement.',
  'Create or update contacts only from an approved identity rule.',
  'Keep duplicate, unknown, and low-confidence matches out of automatic writes.',
  'Record source, timestamp, workflow status, and any manual correction.',
  'Confirm recording consent, retention, and access rules with the business owner.',
];

const fitSignals = [
  'Client details arrive by email but do not reliably reach the CRM.',
  'Call notes live in a phone, notebook, or separate notes app.',
  'More than one person speaks with the same contact and context is lost.',
  'The team wants fewer manual updates without automating every message.',
  'The CRM supports notes, activities, tasks, or attachments for the licensed tier.',
];

const faqs = [
  {
    q: 'Can every email automatically create a CRM contact?',
    a: 'It is technically possible in some stacks, but it is rarely the safest rule. Newsletters, vendors, internal mail, spam, and duplicate identities can pollute the CRM. We define an approved sender, label, inbox, or manual trigger before automatic contact creation.',
  },
  {
    q: 'Can an iPhone or Android voice note be saved to the CRM?',
    a: 'Yes, when the selected capture app can share, upload, email, or trigger a supported workflow. The exact route depends on device policy, storage, CRM permissions, and whether the business needs the audio file, transcript, summary, or all three.',
  },
  {
    q: 'Is AI transcription required?',
    a: 'No. A recording link or native transcript can be stored without a separate AI service. AI transcription or summarization is optional when the source does not provide a usable transcript or the team needs structured notes.',
  },
  {
    q: 'Will this work with HubSpot or Salesforce?',
    a: 'Both platforms can store contact activity and notes, but the available triggers and write actions depend on the licensed products, connected inbox, API permissions, and the agreed data model. Platform fit is confirmed before a build is proposed.',
  },
  {
    q: 'Can call recording be fully automatic?',
    a: 'That depends on the phone platform, device, jurisdiction, consent process, and recording settings. We do not enable hidden recording or bypass platform restrictions. The capture method is approved before automation is designed.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/solutions/email-and-call-notes-to-crm#service',
      name: 'Email and Call Notes to CRM Automation',
      serviceType: 'Email-to-CRM contact creation, voice-note and call-note capture, CRM activity logging, and exception workflow design',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/solutions/email-and-call-notes-to-crm',
      areaServed: { '@type': 'Country', name: 'Canada' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/solutions/email-and-call-notes-to-crm#faq',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function EmailAndCallNotesToCrm() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="overflow-hidden bg-slate-950 pb-16 pt-28 md:pt-32">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Solutions', href: '/#services' },
              { label: 'Email and Call Notes to CRM', href: '/solutions/email-and-call-notes-to-crm' },
            ]}
            tone="dark"
          />
          <Badge className="mb-5 border border-emerald-300/30 bg-emerald-300/10 text-emerald-200 hover:bg-emerald-300/10">
            Small-business CRM workflow
          </Badge>
          <h1 className="max-w-5xl break-words text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Email and Call Notes to CRM Automation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
            Create the right CRM contact, preserve approved email or call context, and keep uncertain matches visible for review. The workflow starts with the smallest reliable native option, then adds automation only where it removes real admin work.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <TrackedCTA ctaName="Email and Call Notes CRM Review" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white text-slate-950 hover:bg-emerald-50 sm:w-auto">
                  Review the Workflow <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/services/crm-implementation" className="w-full sm:w-auto">
              <Button size="lg" className="w-full border border-white/35 bg-transparent text-white hover:bg-white/10 sm:w-auto">
                CRM Implementation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-3 md:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="relative min-w-0 border-l-2 border-emerald-600 px-4 py-2 md:border-l-0 md:border-t-2">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <step.icon className="h-6 w-6 flex-shrink-0 text-emerald-700" />
                  <span className="text-xs font-semibold text-slate-400">0{index + 1}</span>
                </div>
                <h2 className="text-base font-bold text-slate-900">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <Badge className="mb-4 bg-cyan-50 text-cyan-800 hover:bg-cyan-50">Native first</Badge>
            <h2 className="text-3xl font-bold text-slate-900">Choose the lightest reliable path</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Some teams only need a connected inbox and a clear one-click habit. Others need an approved automation because call notes, voice memos, and email context are being lost across devices. Discovery separates those cases before software is added.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-cyan-100 p-5">
                <Mail className="h-7 w-7 text-cyan-700" />
                <h3 className="mt-3 font-bold text-slate-900">Native capture</h3>
                <p className="mt-2 text-sm text-slate-600">Connected inbox, CRM extension, or supported activity sync.</p>
              </div>
              <div className="rounded-lg border border-amber-100 p-5">
                <GitMerge className="h-7 w-7 text-amber-700" />
                <h3 className="mt-3 font-bold text-slate-900">Controlled automation</h3>
                <p className="mt-2 text-sm text-slate-600">Approved trigger, identity match, CRM write, and exception path.</p>
              </div>
              <div className="rounded-lg border border-emerald-100 p-5">
                <FileText className="h-7 w-7 text-emerald-700" />
                <h3 className="mt-3 font-bold text-slate-900">Optional enrichment</h3>
                <p className="mt-2 text-sm text-slate-600">Transcript or summary only where native output is insufficient.</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-slate-900 bg-slate-50 p-7">
            <ShieldCheck className="h-9 w-9 text-emerald-700" />
            <h2 className="mt-4 text-2xl font-bold text-slate-900">Controls before convenience</h2>
            <ul className="mt-6 space-y-4">
              {controls.map((control) => (
                <li key={control} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-700" />
                  <span className="text-slate-700">{control}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y bg-slate-50 py-16">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">When this workflow is a good fit</h2>
            <div className="mt-7 space-y-4">
              {fitSignals.map((signal) => (
                <div key={signal} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-700" />
                  <p className="text-slate-700">{signal}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Database className="h-9 w-9 text-slate-700" />
            <h2 className="mt-4 text-3xl font-bold text-slate-900">What the discovery review produces</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              The review maps one email path and one call-note path, confirms the contact key, identifies native capabilities, documents exceptions, and defines the acceptance checks. Price, timing, software, and support are proposed only after those facts are known.
            </p>
            <p className="mt-4 text-slate-600">
              No mailbox, call recording, or production CRM access is required for the first conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900">Email and Call Notes to CRM FAQ</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border p-6">
                <h3 className="font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Map the workflow before buying more software</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50/80">
            Bring one email example, one call-note example, and the CRM you use. We will identify the smallest controlled path worth scoping.
          </p>
          <div className="mt-8">
            <TrackedCTA ctaName="Email and Call Notes CRM Review Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
                  Book a CRM Review <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </TrackedCTA>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
