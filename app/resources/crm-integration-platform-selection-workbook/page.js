import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedDownload from '@/components/TrackedDownload';
import { ArrowRight, Check, Download, FileSpreadsheet, GitBranch, ShieldCheck } from 'lucide-react';

const canonical = 'https://www.emergent-logic.ca/resources/crm-integration-platform-selection-workbook';
const downloadPath = '/resources/emergent-logic-crm-integration-platform-selection-workbook.xlsx';
const downloadUrl = `https://www.emergent-logic.ca${downloadPath}`;

export const metadata = {
  title: 'CRM Integration Platform Selection Workbook',
  description: 'A free CRM integration decision workbook for comparing native CRM features, Zapier, Make, n8n, Manychat, Lofty, GoHighLevel, iPaaS, and custom APIs.',
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'CRM Integration Platform Selection Workbook | Emergent Logic',
    description: 'Score real workflows, compare integration approaches, and document the controls required before launch.',
    url: canonical,
    type: 'website',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  {
    q: 'Should a small business use a native CRM integration, Zapier, Make, or custom code?',
    a: 'Start with the lowest-complexity option that meets the workflow requirement. Use a native CRM feature when it covers the process and provides enough control. Use low-code automation for cross-application workflows. Consider governed iPaaS or custom integration when volume, sensitivity, bidirectional synchronization, transformation, or monitoring requirements are materially higher.',
  },
  {
    q: 'Does the workbook recommend a specific integration vendor?',
    a: 'No. It recommends an integration class based on the workflow. The decision matrix then helps you compare native CRM features, low-code automation, specialized platforms, enterprise iPaaS, and custom APIs without treating one vendor as the answer to every problem.',
  },
  {
    q: 'What should be documented before a CRM integration launches?',
    a: 'At minimum, document the business owner, system of record, matching key, consent and privacy rules, field mapping, retry strategy, exception queue, monitoring, acceptance tests, rollback path, change control, and handoff materials.',
  },
  {
    q: 'Can this workbook replace technical discovery?',
    a: 'No. It helps structure discovery and expose risk. Authentication, API limits, licensed features, data models, privacy requirements, and production dependencies still require system-specific validation.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: 'CRM Integration Platform Selection Workbook',
      description: 'A practical CRM integration decision workbook for scoring workflows, comparing integration approaches, and documenting launch controls.',
      datePublished: '2026-08-20',
      dateModified: '2026-08-20',
      isPartOf: { '@id': 'https://www.emergent-logic.ca/#website' },
      about: { '@id': `${canonical}#workbook` },
    },
    {
      '@type': 'DigitalDocument',
      '@id': `${canonical}#workbook`,
      name: 'CRM Integration Platform Selection Workbook',
      description: 'An editable workbook with workflow scoring, an integration decision matrix, a production control checklist, an evidence register, and SEO/AEO page-release decisions.',
      creator: { '@id': 'https://www.emergent-logic.ca/#organization' },
      publisher: { '@id': 'https://www.emergent-logic.ca/#organization' },
      datePublished: '2026-08-20',
      encodingFormat: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      url: downloadUrl,
      license: 'https://www.emergent-logic.ca/terms',
    },
    {
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

const workbookTabs = [
  ['Start Here', 'Explains the decision method, evidence boundary, and release gate.'],
  ['Workflow Scoring', 'Scores impact, complexity, volume, sensitivity, real-time need, synchronization, transformation, and ownership readiness.'],
  ['Decision Matrix', 'Compares native CRM functions, Zapier, Make, n8n, Manychat, Lofty, GoHighLevel, enterprise iPaaS, and custom APIs.'],
  ['Control Checklist', 'Covers ownership, data authority, matching, privacy, retries, exceptions, monitoring, testing, rollback, and handoff.'],
  ['Platform Evidence', 'Separates official vendor evidence from observations and unsupported claims.'],
  ['Page Decisions', 'Shows how demand, capability, and cannibalization should govern vendor and industry page creation.'],
];

export default function CRMIntegrationPlatformSelectionWorkbook() {
  return (
    <main className="min-h-screen bg-[#FBFBFF] text-[#101828]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="bg-[#1E3A5F] pb-16 pt-28 text-white md:pb-20 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <div className="mb-5 [&_nav]:text-[#DFE3F5] [&_nav_a:hover]:text-white [&_nav_span]:text-white [&_nav_svg]:text-[#DFE3F5]">
              <Breadcrumbs items={[
                { label: 'Resources', href: '/resources/crm-automation-diagrams' },
                { label: 'Integration Workbook', href: '/resources/crm-integration-platform-selection-workbook' },
              ]} />
            </div>
            <p className="mb-4 text-sm font-semibold text-[#BFD4FF]">Free editable CRM integration resource</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Choose a CRM integration approach your team can operate
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#E7ECF5] md:text-xl">
              Score real workflows before choosing native CRM features, Zapier, Make, n8n, a specialized platform, enterprise iPaaS, or custom code. The workbook keeps ownership, monitoring, exceptions, and testing in the decision.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <TrackedDownload
                href={downloadPath}
                fileName="emergent-logic-crm-integration-platform-selection-workbook.xlsx"
                resourceName="CRM integration platform selection workbook"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-[#1E3A5F] transition-colors hover:bg-[#EEF2FF]"
              >
                <Download className="h-5 w-5" /> Download the workbook
              </TrackedDownload>
              <Link href="/services/crm-integration" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
                Review integration services <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-[#CBD5E1]">XLSX format · No email required · Reviewed August 20, 2026</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DFE3F5] bg-white py-14 md:py-16">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="text-sm font-semibold text-[#4B37C8]">Direct answer</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-[#1E3A5F] md:text-4xl">Which CRM integration approach should you use?</h2>
            <p className="mt-5 text-lg leading-8 text-[#475467]">
              Use the simplest approach that meets the operating requirement. A supported native CRM feature is usually the first option. Low-code automation fits many cross-application workflows. Governed iPaaS or custom integration becomes relevant when higher volume, sensitive data, bidirectional synchronization, complex transformation, real-time behaviour, or stronger monitoring changes the risk.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#475467]">
              The platform is only one decision. A production-ready integration also needs a system of record, matching rules, an exception owner, alerts, acceptance tests, rollback, and documented handoff.
            </p>
          </div>
          <div className="border-l-4 border-[#0F766E] bg-[#F3FAF8] p-6 md:p-8">
            <ShieldCheck className="h-9 w-9 text-[#0F766E]" />
            <h3 className="mt-4 text-xl font-bold text-[#1E3A5F]">What this workbook does not claim</h3>
            <p className="mt-3 leading-7 text-[#475467]">
              It is not a vendor endorsement, technical specification, performance guarantee, or substitute for system-specific discovery. Vendor capabilities, licensing, API limits, privacy requirements, and implementation boundaries still require current first-party verification.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#4B37C8]">Inside the workbook</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1E3A5F] md:text-4xl">Six tabs from workflow question to launch control</h2>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {workbookTabs.map(([title, description], index) => (
              <div key={title} className="grid grid-cols-[44px_1fr] gap-4 border-t border-[#DFE3F5] pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#EEF2FF] font-bold text-[#4B37C8]">{index + 1}</span>
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A5F]">{title}</h3>
                  <p className="mt-2 leading-7 text-[#667085]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#DFE3F5] bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <GitBranch className="h-9 w-9 text-[#4B37C8]" />
              <h2 className="mt-4 text-3xl font-bold text-[#1E3A5F]">How the workflow score works</h2>
              <p className="mt-4 leading-7 text-[#475467]">Each workflow receives editable inputs. The formula recommends an integration class rather than a vendor, keeping the recommendation auditable.</p>
              <ul className="mt-6 space-y-3 text-[#475467]">
                {['Business impact and process complexity', 'Transaction volume and data sensitivity', 'Real-time and bidirectional requirements', 'Custom transformation and owner readiness'].map((item) => (
                  <li key={item} className="flex gap-3"><Check className="mt-1 h-5 w-5 flex-none text-[#0F766E]" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <FileSpreadsheet className="h-9 w-9 text-[#4B37C8]" />
              <h2 className="mt-4 text-3xl font-bold text-[#1E3A5F]">What to decide before launch</h2>
              <p className="mt-4 leading-7 text-[#475467]">The control checklist turns a tool choice into an operating decision. It covers the items that often remain implicit until a sync fails.</p>
              <ul className="mt-6 space-y-3 text-[#475467]">
                {['Business owner, data authority, and matching key', 'Consent, privacy, field mapping, and rejection rules', 'Retries, exception queue, monitoring, and alerts', 'Acceptance tests, rollback, change control, and handoff'].map((item) => (
                  <li key={item} className="flex gap-3"><Check className="mt-1 h-5 w-5 flex-none text-[#0F766E]" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-[#1E3A5F] md:text-4xl">Questions buyers ask before choosing an integration platform</h2>
          <div className="mt-8 divide-y divide-[#DFE3F5] border-y border-[#DFE3F5]">
            {faqItems.map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="text-xl font-bold text-[#1E3A5F]">{item.q}</h3>
                <p className="mt-3 leading-7 text-[#667085]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E3A5F] py-16 text-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Turn the comparison into a controlled integration plan</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#E7ECF5]">Use the workbook independently, or bring the completed workflow scores to a CRM integration conversation.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedDownload
              href={downloadPath}
              fileName="emergent-logic-crm-integration-platform-selection-workbook.xlsx"
              resourceName="CRM integration platform selection workbook"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-[#1E3A5F] hover:bg-[#EEF2FF]"
            >
              <Download className="h-5 w-5" /> Download the workbook
            </TrackedDownload>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10">
              Discuss a workflow <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
