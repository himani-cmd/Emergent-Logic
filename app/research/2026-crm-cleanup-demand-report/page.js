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
  BarChart3,
  CalendarDays,
  CheckCircle,
  Database,
  Download,
  ExternalLink,
  FileSearch,
  GitMerge,
  Workflow,
} from 'lucide-react';
import report from '@/data/crm-cleanup-demand-report-2026.json';

const reportUrl = 'https://www.emergent-logic.ca/research/2026-crm-cleanup-demand-report';
const sourceDownloadUrl = `${reportUrl}/sources`;

export const metadata = {
  title: '2026 CRM Cleanup Demand Report | 100 Job Posts',
  description: 'Original analysis of 100 public HubSpot and Salesforce job and project postings, covering workflow, reporting, data, routing, integration, and lifecycle demand.',
  alternates: { canonical: reportUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: '2026 CRM Cleanup Demand Report',
    description: 'What 100 public HubSpot and Salesforce job and project postings reveal about operational CRM demand.',
    url: reportUrl,
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 CRM Cleanup Demand Report',
    description: 'Original analysis of 100 public HubSpot and Salesforce job and project postings.',
    images: ['https://www.emergent-logic.ca/og-image.png'],
  },
};

const categoryConfig = [
  { label: 'Workflow and automation', color: 'bg-indigo-600', icon: Workflow },
  { label: 'Reporting and forecasting', color: 'bg-emerald-600', icon: BarChart3 },
  { label: 'Integration and sync', color: 'bg-cyan-600', icon: GitMerge },
  { label: 'Lifecycle and process design', color: 'bg-amber-500', icon: FileSearch },
  { label: 'Lead routing and follow-up', color: 'bg-rose-500', icon: ArrowRight },
  { label: 'Data hygiene and governance', color: 'bg-slate-700', icon: Database },
  { label: 'Attribution and source tracking', color: 'bg-violet-600', icon: FileSearch },
  { label: 'Administration and access', color: 'bg-blue-600', icon: Database },
  { label: 'Migration and implementation', color: 'bg-teal-600', icon: GitMerge },
];

const sourceOrder = ['Greenhouse', 'Upwork', 'Lever', 'LinkedIn Jobs', 'Indeed'];

const categoryCounts = categoryConfig.map((item) => ({
  ...item,
  count: report.postings.filter((posting) => posting.problem_categories.includes(item.label)).length,
}));

const sourceCounts = sourceOrder.map((source) => ({
  source,
  count: report.postings.filter((posting) => posting.source === source).length,
}));

const hubspotCount = report.postings.filter((posting) => posting.platforms.includes('HubSpot')).length;
const salesforceCount = report.postings.filter((posting) => posting.platforms.includes('Salesforce')).length;
const bothPlatformsCount = report.postings.filter((posting) => posting.platforms.length === 2).length;
const multiIssueCount = report.postings.filter((posting) => posting.problem_categories.length >= 3).length;
const sampleRows = report.postings.slice(0, 12);

const faqs = [
  {
    q: 'Does this report represent every CRM job or project in the market?',
    a: 'No. This is a directional sample of 100 public postings that explicitly mentioned HubSpot or Salesforce and described at least one operational CRM requirement. It is not a random sample or a market-size estimate.',
  },
  {
    q: 'Why do the category totals add up to more than 100?',
    a: 'A single posting can describe several needs at once. For example, one role may include workflow automation, reporting, lead routing, integration, and data governance. Each relevant category is counted once for that posting.',
  },
  {
    q: 'Are the organizations in the dataset Emergent Logic clients?',
    a: 'No. The dataset summarizes public demand signals only. Inclusion does not imply a client relationship, endorsement, or contact with Emergent Logic.',
  },
  {
    q: 'Can source links expire?',
    a: 'Yes. Job and project listings can be changed, closed, or removed. The source table records the date each posting was observed and preserves a short paraphrased signal for auditability.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Dataset',
      '@id': `${reportUrl}#dataset`,
      name: report.title,
      description: report.subtitle,
      url: reportUrl,
      creator: { '@id': 'https://www.emergent-logic.ca/#organization' },
      datePublished: report.published_date,
      temporalCoverage: report.observation_window,
      isAccessibleForFree: true,
      measurementTechnique: 'Deduplicated public-posting review and multi-label coding of CRM operational requirements',
      variableMeasured: categoryCounts.map((item) => ({
        '@type': 'PropertyValue',
        name: item.label,
        value: item.count,
        unitText: 'postings',
      })),
      distribution: {
        '@type': 'DataDownload',
        encodingFormat: 'text/csv',
        contentUrl: sourceDownloadUrl,
      },
    },
    {
      '@type': 'Report',
      '@id': `${reportUrl}#report`,
      headline: report.title,
      description: report.subtitle,
      url: reportUrl,
      datePublished: report.published_date,
      dateModified: report.published_date,
      author: { '@id': 'https://www.emergent-logic.ca/#organization' },
      publisher: { '@id': 'https://www.emergent-logic.ca/#organization' },
      mainEntity: { '@id': `${reportUrl}#dataset` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${reportUrl}#faq`,
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function CrmCleanupDemandReportPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="bg-slate-950 pb-12 pt-28 text-white md:pb-16 md:pt-32">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: '2026 CRM Cleanup Demand Report', href: '/research/2026-crm-cleanup-demand-report' },
          ]} tone="dark" />
          <Badge className="mb-5 border-white/20 bg-white/10 text-white hover:bg-white/10">Original research</Badge>
          <h1 className="mb-5 max-w-5xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            2026 CRM Cleanup Demand Report
          </h1>
          <p className="mb-5 max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl">
            What 100 public HubSpot and Salesforce job and project postings reveal about the operational work businesses are funding.
          </p>
          <div className="mb-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />Observed June 30-July 8, 2026</span>
            <span className="flex items-center gap-2"><Database className="h-4 w-4" />100 deduplicated public sources</span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <TrackedCTA ctaName="Download CRM Demand Report Sources" destination="research-csv">
              <a href="/research/2026-crm-cleanup-demand-report/sources" download className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white text-slate-950 hover:bg-slate-100 sm:w-auto">
                  Download the Source Table <Download className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </TrackedCTA>
            <TrackedCTA ctaName="Research Page Lead Follow-Up Audit" destination="/lead-follow-up-audit">
              <Link href="/lead-follow-up-audit" className="w-full sm:w-auto">
                <Button size="lg" className="w-full border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto">
                  Get a Free CRM Follow-Up Audit
                </Button>
              </Link>
            </TrackedCTA>
          </div>
        </div>
      </section>

      <section className="border-b bg-white py-10 md:py-12">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 lg:grid-cols-4">
          {[
            { value: report.sample_size, label: 'public postings reviewed' },
            { value: categoryCounts[0].count, label: 'included workflow or automation work' },
            { value: categoryCounts[1].count, label: 'included reporting or forecasting' },
            { value: bothPlatformsCount, label: 'named both HubSpot and Salesforce' },
          ].map((stat) => (
            <div key={stat.label} className="border-t-4 border-indigo-600 pt-4">
              <p className="text-4xl font-bold text-slate-950 md:text-5xl">{stat.value}</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-4xl">
            <Badge className="mb-4 border-indigo-200 bg-indigo-50 text-indigo-800 hover:bg-indigo-50">Measured requirements</Badge>
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">CRM demand is operational, not just technical</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Postings were coded across nine overlapping requirement categories. A posting can appear in more than one category, because CRM work is commonly bundled across process, data, automation, and reporting.
            </p>
          </div>
          <div className="max-w-5xl space-y-5">
            {categoryCounts.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                  <span className="flex items-center gap-2 font-semibold text-slate-800">
                    <item.icon className="h-4 w-4 text-slate-500" />
                    {item.label}
                  </span>
                  <span className="font-mono text-slate-600">{item.count} postings</span>
                </div>
                <div className="h-3 overflow-hidden bg-slate-200" aria-hidden="true">
                  <div className={`h-full ${item.color}`} style={{ width: `${item.count}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">Four findings that matter</h2>
            <p className="text-lg text-slate-600">These findings describe the sample only. They are directional signals, not claims about the entire CRM market.</p>
          </div>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
            <div className="border-t-4 border-indigo-600 pt-5">
              <p className="mb-2 font-mono text-sm text-indigo-700">01 / Bundled scope</p>
              <h3 className="mb-3 text-2xl font-bold text-slate-950">Cleanup rarely appears as one isolated task</h3>
              <p className="leading-relaxed text-slate-600">
                {multiIssueCount} postings included at least three coded requirement areas. Buyers frequently combined workflow, reporting, routing, integration, lifecycle design, or data governance in the same role or project.
              </p>
            </div>
            <div className="border-t-4 border-emerald-600 pt-5">
              <p className="mb-2 font-mono text-sm text-emerald-700">02 / Decision visibility</p>
              <h3 className="mb-3 text-2xl font-bold text-slate-950">Reporting is part of the operating system</h3>
              <p className="leading-relaxed text-slate-600">
                {categoryCounts.find((item) => item.label === 'Reporting and forecasting').count} postings included reporting or forecasting. Dashboards were commonly paired with pipeline health, attribution, lifecycle, data quality, or executive visibility.
              </p>
            </div>
            <div className="border-t-4 border-cyan-600 pt-5">
              <p className="mb-2 font-mono text-sm text-cyan-700">03 / Platform overlap</p>
              <h3 className="mb-3 text-2xl font-bold text-slate-950">HubSpot and Salesforce often coexist</h3>
              <p className="leading-relaxed text-slate-600">
                {hubspotCount} postings named HubSpot, {salesforceCount} named Salesforce, and {bothPlatformsCount} named both. The resulting work frequently involved sync rules, lifecycle mapping, routing, attribution, or cross-system reporting.
              </p>
            </div>
            <div className="border-t-4 border-amber-500 pt-5">
              <p className="mb-2 font-mono text-sm text-amber-700">04 / Process before tools</p>
              <h3 className="mb-3 text-2xl font-bold text-slate-950">Automation depends on definitions and ownership</h3>
              <p className="leading-relaxed text-slate-600">
                Workflow demand led the sample, while lifecycle design, lead routing, integration, and data governance also appeared repeatedly. The pattern is consistent: automation becomes useful only after the team defines what should happen and who owns it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-slate-950 py-16 text-white">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Badge className="mb-4 border-white/20 bg-white/10 text-white hover:bg-white/10">Source mix</Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Five public posting sources</h2>
            <p className="leading-relaxed text-slate-300">
              Employment listings and freelance project briefs were included so the sample reflects both ongoing internal ownership and scoped implementation demand.
            </p>
          </div>
          <div className="space-y-5">
            {sourceCounts.map((item) => (
              <div key={item.source}>
                <div className="mb-2 flex justify-between gap-4 text-sm">
                  <span className="font-semibold text-white">{item.source}</span>
                  <span className="font-mono text-slate-400">{item.count}</span>
                </div>
                <div className="h-2 bg-white/15">
                  <div className="h-full bg-emerald-400" style={{ width: `${(item.count / sourceCounts[0].count) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h2 className="mb-3 text-3xl font-bold text-slate-950 md:text-4xl">Sample source records</h2>
              <p className="text-lg text-slate-600">The full downloadable table contains all 100 source URLs, observation dates, platforms, coded categories, and paraphrased demand signals.</p>
            </div>
            <a href="/research/2026-crm-cleanup-demand-report/sources" download className="inline-flex items-center font-semibold text-indigo-700 hover:text-indigo-900">
              Download all 100 rows <Download className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="overflow-x-auto border border-slate-200">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Role or project</th>
                  <th className="px-4 py-3 font-semibold">Organization</th>
                  <th className="px-4 py-3 font-semibold">Platform</th>
                  <th className="px-4 py-3 font-semibold">Primary coded signal</th>
                  <th className="px-4 py-3 font-semibold">Source</th>
                </tr>
              </thead>
              <tbody>
                {sampleRows.map((posting) => (
                  <tr key={posting.id} className="border-t border-slate-200 align-top">
                    <td className="max-w-xs px-4 py-4 font-medium text-slate-900">{posting.title}</td>
                    <td className="px-4 py-4 text-slate-600">{posting.company || 'Project brief'}</td>
                    <td className="px-4 py-4 text-slate-600">{posting.platforms.join(' + ')}</td>
                    <td className="max-w-xs px-4 py-4 text-slate-600">{posting.problem_categories[0]}</td>
                    <td className="px-4 py-4">
                      <a href={posting.url} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center font-medium text-indigo-700 hover:text-indigo-900">
                        {posting.source}<ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y bg-slate-50 py-16">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Badge className="mb-4 border-slate-300 bg-white text-slate-700 hover:bg-white">Methodology</Badge>
            <h2 className="mb-4 text-3xl font-bold text-slate-950">How the sample was built</h2>
            <p className="leading-relaxed text-slate-600">
              The report uses public demand signals, not customer data. It is designed to show recurring operational language without presenting the sample as a census of the CRM market.
            </p>
          </div>
          <ol className="space-y-6">
            {[
              'Collected public job and project postings observed from June 30 through July 8, 2026.',
              'Required each included posting to mention HubSpot or Salesforce and at least one operational CRM requirement.',
              'Deduplicated records by source URL and retained one paraphrased demand summary per posting.',
              'Coded each posting across nine non-exclusive categories; category counts can therefore overlap.',
              'Excluded client claims, contact details, private data, and any inference that a listed organization endorses Emergent Logic.',
            ].map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="font-mono text-sm font-bold text-indigo-700">0{index + 1}</span>
                <p className="text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-slate-950 md:text-4xl">Report FAQ</h2>
          <div className="divide-y border-y border-slate-200">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-700 py-16 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <CheckCircle className="mx-auto mb-4 h-10 w-10 text-emerald-300" />
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Turn one CRM problem into a defined next step</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-indigo-100">
            Send one form, inquiry path, pipeline, or follow-up problem. Emergent Logic will review the visible path and return a practical five-point note before recommending a larger project.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <TrackedCTA ctaName="CRM Demand Report Bottom Transition Sprint" destination="/services/crm-revops-transition-sprint">
              <Link href="/services/crm-revops-transition-sprint" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white text-indigo-800 hover:bg-indigo-50 sm:w-auto">
                  See the Transition Sprint <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </TrackedCTA>
            <TrackedCTA ctaName="CRM Demand Report Bottom Audit" destination="/lead-follow-up-audit">
              <Link href="/lead-follow-up-audit" className="w-full sm:w-auto">
                <Button size="lg" className="w-full border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto">
                  Request the Free Audit
                </Button>
              </Link>
            </TrackedCTA>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
