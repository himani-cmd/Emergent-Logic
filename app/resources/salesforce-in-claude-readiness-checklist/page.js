import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  Database,
  ExternalLink,
  FileSearch,
  GitBranch,
  KeyRound,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck,
} from 'lucide-react';

const canonical = 'https://www.emergent-logic.ca/resources/salesforce-in-claude-readiness-checklist';

export const metadata = {
  title: 'Salesforce in Claude Readiness Checklist',
  description: 'A practical checklist for reviewing Salesforce data, permissions, workflow ownership, write controls, sandbox testing and audit logs before using Claude.',
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Salesforce in Claude Readiness Checklist | Emergent Logic',
    description: 'Review the data, permissions, workflow ownership, write controls, tests and audit evidence needed before governed Salesforce AI actions.',
    url: canonical,
    type: 'website',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salesforce in Claude Readiness Checklist | Emergent Logic',
    description: 'Review the data, permissions, workflow ownership, write controls, tests and audit evidence needed before governed Salesforce AI actions.',
    images: ['https://www.emergent-logic.ca/og-image.png'],
  },
};

const officialSources = [
  {
    label: 'Salesforce and Anthropic announce Claudeforce',
    href: 'https://www.salesforce.com/news/press-releases/2026/08/26/salesforce-and-anthropic-announce-claudeforce/',
  },
  {
    label: 'Salesforce Claudeforce product page and FAQ',
    href: 'https://www.salesforce.com/claudeforce/',
  },
  {
    label: 'Claude Salesforce beta connector listing',
    href: 'https://claude.com/connectors/salesforce',
  },
  {
    label: 'Headless 360 MCP Server (Beta)',
    href: 'https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/headless-360-mcp.html',
  },
  {
    label: 'Set up a Salesforce org for hosted MCP access',
    href: 'https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/setup-overview.html',
  },
  {
    label: 'Salesforce hosted MCP security best practices',
    href: 'https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/security-best-practices.html',
  },
  {
    label: 'Salesforce hosted MCP general best practices',
    href: 'https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/general-best-practices.html',
  },
  {
    label: 'How to secure Salesforce Hosted MCP Servers',
    href: 'https://developer.salesforce.com/blogs/2026/06/how-to-secure-salesforce-hosted-mcp-servers',
  },
];

const scorecard = [
  {
    name: 'Data trust',
    icon: Database,
    zero: 'Critical objects, fields, stages or record owners are unclear.',
    one: 'Definitions exist, but duplicates, stale values or incomplete records remain material.',
    two: 'The intended use case has defined fields, owners, validation and a verified sample.',
    evidence: 'Field and object inventory, duplicate sample, stage definitions, required-field completion and data owner.',
  },
  {
    name: 'Permission trust',
    icon: KeyRound,
    zero: 'Shared access, broad admin rights or unknown effective permissions.',
    one: 'Named users exist, but profile, permission-set, sharing or field-access review is incomplete.',
    two: 'Named pilot users have least-privilege access verified against the intended actions.',
    evidence: 'Pilot-user list, effective CRUD/FLS, sharing rules, profiles, permission sets and client restrictions.',
  },
  {
    name: 'Workflow ownership',
    icon: GitBranch,
    zero: 'No one owns the process or its exceptions.',
    one: 'The normal path is known, but exceptions, handoffs or failure ownership are informal.',
    two: 'A named owner has documented the normal path, exceptions, handoff, acceptance and failure response.',
    evidence: 'Workflow map, named business owner, exception path, service expectation and escalation route.',
  },
  {
    name: 'Governed actions',
    icon: ShieldCheck,
    zero: 'Read, write, external and destructive actions are not separated.',
    one: 'Some controls exist, but approval or field/action boundaries are incomplete.',
    two: 'Every enabled action has a risk class, explicit boundary and human-approval rule.',
    evidence: 'Action inventory, read/write classification, allowed fields, approval table and rollback rule.',
  },
  {
    name: 'Audit and recovery',
    icon: RefreshCcw,
    zero: 'Actions cannot be attributed, reconciled or reversed.',
    one: 'Logs exist, but review ownership, alerts or rollback evidence is incomplete.',
    two: 'Named reviewers can attribute actions, reconcile results and execute a tested rollback path.',
    evidence: 'API log owner, review cadence, alert rules, before/after evidence, incident route and rollback test.',
  },
];

const permissionMatrix = [
  ['Query or summarize approved records', 'Read', 'Authenticated user CRUD/FLS, sharing and profile/permission-set access still apply.', 'Begin with a read-only server or read-only dispatch and a narrow object set.'],
  ['Draft an account note, plan or email', 'Draft only', 'The model can use readable context; no Salesforce or external write is required.', 'Require a person to review the draft before it is copied, saved or sent.'],
  ['Update one approved field', 'Bounded write', 'The user must be allowed to edit the object, field and record.', 'Require explicit confirmation, field allowlisting, before/after evidence and rollback.'],
  ['Create a task, campaign or record', 'Write', 'Create access, required fields, validation rules and sharing outcomes apply.', 'Use approved templates and test normal, duplicate and validation-failure paths.'],
  ['Send an external message or trigger a workflow', 'External / multi-step', 'The initiating user and downstream automation permissions and rules apply.', 'Separate approval before the external action and monitor every downstream effect.'],
  ['Manage users or assign permission sets', 'Administrative', 'The authenticated user must already hold the relevant administrative capability.', 'Keep disabled in an initial pilot; use specialist approval and sandbox evidence.'],
  ['Deploy Apex, configuration or credentials', 'Administrative / development', 'Wide developer or admin permissions can expose high-impact operations.', 'Keep disabled by default; require controlled change management and non-production testing.'],
  ['Delete data, deactivate a user or make an irreversible change', 'Destructive', 'The user must be authorized, but inherited authorization alone is not a business approval.', 'Keep disabled unless a separately approved, tested and recoverable use case exists.'],
];

const approvalTable = [
  ['Read a defined object or report', 'Use-case approval before pilot; not necessarily per query', 'Named user, narrow object set, read-only path and sample validation.'],
  ['Generate a draft or recommendation', 'Human review before operational use', 'No record change or external send until a person accepts the output.'],
  ['Update one field on one record type', 'Explicit confirmation for each bounded write during pilot', 'Approved field list, before/after value, audit receipt and rollback.'],
  ['Create records or trigger a workflow', 'Explicit confirmation plus workflow-owner approval', 'Duplicate handling, required fields, downstream effects and exception queue tested.'],
  ['Send email or act outside Salesforce', 'Explicit confirmation immediately before the action', 'Recipient, content, purpose and downstream logging visible to the reviewer.'],
  ['Change ownership, permissions, users or configuration', 'Specialist admin/security approval', 'Change ticket, sandbox evidence, access boundary, monitoring and rollback.'],
  ['Delete or irreversibly alter data', 'Keep disabled by default; two-step approval if ever enabled', 'Verified backup/recovery, exact target list and independent final review.'],
];

const acceptanceTests = [
  ['Denied user test', 'A user without access to the object or operation receives no data and cannot execute the action.'],
  ['Field-level security test', 'A restricted field is neither returned nor modified for a user who lacks field access.'],
  ['Record-sharing test', 'The pilot user sees only records allowed by current sharing rules.'],
  ['Read accuracy test', 'A defined sample agrees with a trusted Salesforce report or direct record review.'],
  ['Dirty-data test', 'Duplicates, blanks and stale values do not silently become a confident operational recommendation.'],
  ['Draft-only test', 'A draft request creates no record change, message, campaign or downstream workflow.'],
  ['Bounded-write test', 'A confirmed write changes only the stated field on the stated record and preserves the prior value for rollback.'],
  ['External-action approval test', 'An email, campaign or other external action cannot execute without the required human confirmation.'],
  ['Failure and partial-write test', 'Validation errors, timeouts and downstream failures produce a clear failure receipt and no hidden partial success.'],
  ['Audit, reconciliation and rollback test', 'The named user/action is visible in logs, the result reconciles to the request, and the tested rollback restores the approved prior state.'],
];

const responseChecklist = [
  {
    title: 'Failure',
    icon: CircleAlert,
    items: [
      'Stop repeated execution and preserve the error receipt.',
      'Record time, named user, client, tool/action, prompt purpose and affected record IDs.',
      'Identify whether anything wrote before the failure and isolate downstream automation.',
      'Route the incident to the workflow owner and Salesforce admin/security owner.',
    ],
  },
  {
    title: 'Audit',
    icon: FileSearch,
    items: [
      'Review Salesforce API logs and named-user attribution.',
      'Filter Salesforce Hosted MCP traffic using the documented API client category where available.',
      'Compare approved actions with actual object, field, record and timestamp access.',
      'Retain the approval, execution and failure evidence under the agreed retention policy.',
    ],
  },
  {
    title: 'Reconciliation',
    icon: ClipboardCheck,
    items: [
      'Compare requested outcomes with Salesforce records and downstream systems.',
      'Confirm external messages, tasks, campaigns and automation effects independently.',
      'Classify every intended item as completed, failed, duplicated, skipped or unresolved.',
      'Do not call the run successful until counts and exceptions reconcile.',
    ],
  },
  {
    title: 'Rollback',
    icon: RefreshCcw,
    items: [
      'Restore captured prior values or use the approved recovery method.',
      'Disable the affected server, client or tool when the boundary is uncertain.',
      'Revoke access or tokens if identity/client security may be involved.',
      'Retest in sandbox, document the correction and require approval before resuming.',
    ],
  },
];

const faqItems = [
  {
    q: 'What permissions does Salesforce in Claude use?',
    a: 'Salesforce says answers and actions run through existing Salesforce permissions and business rules. The underlying hosted MCP documentation says object permissions, field-level security, sharing rules, profile permissions and permission sets apply in the authenticated user context.',
    source: officialSources[3],
  },
  {
    q: 'Does Salesforce MCP bypass field-level security or sharing rules?',
    a: 'No. Salesforce documents that hosted MCP transactions inherit the authenticated user’s CRUD permissions, field-level security and record-sharing access. A user who cannot perform an action in Salesforce cannot perform it through the hosted MCP server.',
    source: officialSources[5],
  },
  {
    q: 'Should a Salesforce MCP pilot start with read-only access?',
    a: 'Salesforce recommends the most restrictive configuration that meets the use case and documents read-only server and dispatch options. Read-only access is the safer starting point for evidence gathering before bounded writes are considered.',
    source: officialSources[5],
  },
  {
    q: 'What should be tested before enabling write actions?',
    a: 'Test the named user’s object, field and record access; the exact allowed write; validation and duplicate handling; downstream automation; human approval; audit attribution; reconciliation; and rollback in a sandbox or Developer org before production use.',
    source: officialSources[3],
  },
  {
    q: 'Is Salesforce in Claude generally available?',
    a: 'Not according to the official material reviewed on August 28, 2026. Salesforce says selected pilot customers have access and plans an open beta in September 2026. The separate Claude connector directory labels Salesforce as beta, but that listing does not establish general availability.',
    source: officialSources[0],
  },
  {
    q: 'Does this checklist mean Emergent Logic implements Claudeforce?',
    a: 'No. This is an evidence-backed readiness resource. It does not claim beta access, implementation experience, certification, partnership, customer results or current product availability for Emergent Logic.',
    source: officialSources[0],
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: 'Salesforce in Claude Readiness Checklist: Data, Permissions and Governed AI Actions',
      description: metadata.description,
      dateCreated: '2026-08-28',
      dateModified: '2026-08-28',
      author: { '@id': 'https://www.emergent-logic.ca/#organization' },
      isPartOf: { '@id': 'https://www.emergent-logic.ca/#website' },
      mainEntity: { '@id': `${canonical}#scorecard` },
      citation: officialSources.map((source) => source.href),
    },
    {
      '@type': 'ItemList',
      '@id': `${canonical}#scorecard`,
      name: 'Five-point Salesforce in Claude readiness scorecard',
      numberOfItems: scorecard.length,
      itemListElement: scorecard.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        description: `Score 0: ${item.zero} Score 1: ${item.one} Score 2: ${item.two}`,
      })),
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

export default function SalesforceInClaudeReadinessChecklist() {
  return (
    <main className="min-h-screen bg-[#FBFBFF] text-[#101828]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="bg-[#1E3A5F] pb-16 pt-28 text-white md:pb-20 md:pt-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-5 [&_nav]:text-[#DFE3F5] [&_nav_a:hover]:text-white [&_nav_span]:text-white [&_nav_svg]:text-[#DFE3F5]">
            <Breadcrumbs items={[
              { label: 'Resources', href: '/resources/crm-automation-diagrams' },
              { label: 'Salesforce in Claude Readiness', href: '/resources/salesforce-in-claude-readiness-checklist' },
            ]} />
          </div>
          <p className="text-sm font-semibold text-[#BFD4FF]">Independent readiness resource · Official sources only</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Salesforce in Claude Readiness Checklist: Data, Permissions and Governed AI Actions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#E7ECF5] md:text-xl">
            Score the operating foundations an AI action would inherit before connecting sensitive CRM data or enabling writes. Review data quality, user access, workflow ownership, approvals, acceptance evidence and recovery—not just the connector.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#scorecard" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-[#1E3A5F] hover:bg-[#EEF2FF]">
              Start the five-point scorecard <ArrowRight className="h-5 w-5" />
            </a>
            <Link href="/lead-follow-up-audit" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10">
              Request a Free CRM Workflow Assessment
            </Link>
          </div>
          <p className="mt-5 text-sm leading-6 text-[#CBD5E1]">Reviewed August 28, 2026 · Salesforce describes selected pilot access and a planned September 2026 open beta · Product details may change</p>
        </div>
      </section>

      <section className="border-b border-[#DFE3F5] bg-white py-14 md:py-16">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-sm font-semibold text-[#4B37C8]">Direct answer</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-[#1E3A5F] md:text-4xl">What makes a Salesforce org ready for governed AI actions?</h2>
            <p className="mt-5 text-lg leading-8 text-[#475467]">
              Salesforce in Claude readiness starts with the operating controls Claude will inherit: trustworthy CRM data, least-privilege user access, named workflow owners, defined write boundaries, sandbox tests and an audit path. Review those foundations before enabling actions because Salesforce MCP access runs in the authenticated user&apos;s context and applies existing permissions and business rules.
            </p>
            <p className="mt-4 leading-7 text-[#667085]">
              Salesforce documents the underlying permission model in its <a href={officialSources[3].href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4B37C8] hover:underline">Headless 360 MCP reference</a> and <a href={officialSources[5].href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4B37C8] hover:underline">security best practices</a>.
            </p>
          </div>
          <aside className="border-l-4 border-[#0F766E] bg-[#F3FAF8] p-6 md:p-8">
            <LockKeyhole className="h-9 w-9 text-[#0F766E]" />
            <h2 className="mt-4 text-xl font-bold text-[#1E3A5F]">Evidence boundary</h2>
            <p className="mt-3 leading-7 text-[#475467]">
              Emergent Logic does not claim Claudeforce access, beta participation, certification, implementation history, partnership or customer results. This checklist translates current first-party documentation into readiness questions.
            </p>
          </aside>
        </div>
      </section>

      <section id="scorecard" className="scroll-mt-24 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold text-[#4B37C8]">Original five-point scorecard</p>
          <h2 className="mt-2 max-w-4xl text-3xl font-bold text-[#1E3A5F] md:text-4xl">Score the operating system before the AI action</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#667085]">Score each area from 0 to 2 and retain the evidence. A high score is not proof of product access or implementation readiness; it is a structured signal for the next review.</p>

          <div className="mt-10 overflow-x-auto rounded-xl border border-[#DFE3F5] bg-white shadow-sm">
            <table className="min-w-[1050px] w-full border-collapse text-left">
              <thead className="bg-[#EEF2FF] text-sm text-[#1E3A5F]">
                <tr>
                  <th className="px-5 py-4 font-bold">Control area</th>
                  <th className="px-5 py-4 font-bold">0 — Stop</th>
                  <th className="px-5 py-4 font-bold">1 — Partial</th>
                  <th className="px-5 py-4 font-bold">2 — Evidenced</th>
                  <th className="px-5 py-4 font-bold">Evidence to retain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAECF0] text-sm leading-6 text-[#475467]">
                {scorecard.map((item) => (
                  <tr key={item.name} className="align-top">
                    <th className="px-5 py-5 text-base font-bold text-[#1E3A5F]">
                      <item.icon className="mb-3 h-6 w-6 text-[#4B37C8]" />{item.name}
                    </th>
                    <td className="px-5 py-5">{item.zero}</td>
                    <td className="px-5 py-5">{item.one}</td>
                    <td className="px-5 py-5">{item.two}</td>
                    <td className="px-5 py-5">{item.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ['0–3', 'Stop and repair the foundation.'],
              ['4–6', 'Consider only a narrow read-only discovery pilot.'],
              ['7–8', 'Prepare a bounded pilot and close every partial control.'],
              ['9–10', 'Proceed only after product terms, access and acceptance gates are confirmed.'],
            ].map(([score, action]) => (
              <div key={score} className="border-t-4 border-[#4B37C8] bg-white p-5 shadow-sm">
                <p className="text-2xl font-bold text-[#1E3A5F]">{score}/10</p>
                <p className="mt-2 leading-6 text-[#667085]">{action}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 leading-7 text-[#667085]">If data trust is the blocker, use the <Link href="/blog/salesforce-cleanup-before-automation" className="font-semibold text-[#4B37C8] hover:underline">Salesforce cleanup before automation guide</Link> before expanding access or workflow scope.</p>
        </div>
      </section>

      <section className="border-y border-[#DFE3F5] bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold text-[#4B37C8]">Read/write permission matrix</p>
          <h2 className="mt-2 max-w-4xl text-3xl font-bold text-[#1E3A5F] md:text-4xl">Inherited permission is a technical boundary, not a business approval</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-[#667085]">Salesforce says hosted MCP calls run as the authenticated user. If that user is over-permissioned, the agent inherits a wider technical boundary. Separate what the user can do from what the workflow is approved to do.</p>
          <div className="mt-10 overflow-x-auto rounded-xl border border-[#DFE3F5]">
            <table className="min-w-[960px] w-full border-collapse text-left">
              <thead className="bg-[#1E3A5F] text-sm text-white">
                <tr>
                  <th className="px-5 py-4">Action</th>
                  <th className="px-5 py-4">Class</th>
                  <th className="px-5 py-4">Permission reality</th>
                  <th className="px-5 py-4">Initial control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAECF0] text-sm leading-6 text-[#475467]">
                {permissionMatrix.map((row) => (
                  <tr key={row[0]} className="align-top odd:bg-[#FBFBFF]">
                    {row.map((cell, index) => <td key={cell} className={`px-5 py-5 ${index === 0 ? 'font-bold text-[#1E3A5F]' : ''}`}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-6 text-[#667085]">First-party basis: <a href={officialSources[3].href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4B37C8] hover:underline">Headless 360 MCP Server</a>, <a href={officialSources[5].href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4B37C8] hover:underline">Security Best Practices</a>, and <a href={officialSources[6].href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4B37C8] hover:underline">General Best Practices</a>.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold text-[#4B37C8]">Human-approval table</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1E3A5F] md:text-4xl">Put approval immediately before the risk changes</h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-[#DFE3F5] bg-white">
            <table className="min-w-[900px] w-full border-collapse text-left">
              <thead className="bg-[#EEF2FF] text-sm text-[#1E3A5F]">
                <tr><th className="px-5 py-4">Action</th><th className="px-5 py-4">Approval rule</th><th className="px-5 py-4">Required evidence</th></tr>
              </thead>
              <tbody className="divide-y divide-[#EAECF0] text-sm leading-6 text-[#475467]">
                {approvalTable.map((row) => (
                  <tr key={row[0]} className="align-top">
                    {row.map((cell, index) => <td key={cell} className={`px-5 py-5 ${index === 0 ? 'font-bold text-[#1E3A5F]' : ''}`}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-[#DFE3F5] bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold text-[#4B37C8]">Acceptance evidence</p>
          <h2 className="mt-2 max-w-4xl text-3xl font-bold text-[#1E3A5F] md:text-4xl">Ten tests before a bounded production action</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#667085]">Run these in a sandbox or Developer org with approved test data. A passing happy path is not enough; denied access, dirty data, failure and rollback also need evidence.</p>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {acceptanceTests.map(([title, description], index) => (
              <li key={title} className="grid grid-cols-[44px_1fr] gap-4 border border-[#DFE3F5] bg-[#FBFBFF] p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4B37C8] font-bold text-white">{index + 1}</span>
                <div><h3 className="font-bold text-[#1E3A5F]">{title}</h3><p className="mt-2 leading-7 text-[#667085]">{description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold text-[#4B37C8]">Operational recovery</p>
          <h2 className="mt-2 max-w-4xl text-3xl font-bold text-[#1E3A5F] md:text-4xl">Failure, audit, reconciliation and rollback checklist</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {responseChecklist.map((group) => (
              <div key={group.title} className="border-t-4 border-[#0F766E] bg-white p-6 shadow-sm">
                <group.icon className="h-8 w-8 text-[#0F766E]" />
                <h3 className="mt-4 text-2xl font-bold text-[#1E3A5F]">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => <li key={item} className="flex gap-3 leading-7 text-[#667085]"><CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[#0F766E]" /><span>{item}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 leading-7 text-[#667085]">For a cleanup-first example of how ownership, permissions, reporting and Flow readiness fit together, see the <Link href="/case-studies/salesforce-cleanup-before-automation" className="font-semibold text-[#4B37C8] hover:underline">representative Salesforce cleanup implementation pattern</Link>. It is not a Claudeforce case study.</p>
        </div>
      </section>

      <section className="border-y border-[#DFE3F5] bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <p className="text-sm font-semibold text-[#4B37C8]">Current official status</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1E3A5F] md:text-4xl">What is documented—and what still needs confirmation</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-[#F3FAF8] p-6">
              <h3 className="text-xl font-bold text-[#1E3A5F]">Documented</h3>
              <ul className="mt-4 space-y-3 leading-7 text-[#475467]">
                {['Salesforce in Claude is described as a 37-skill sales plugin.', 'Selected pilot availability and a planned September 2026 open beta.', 'The Claude connector directory lists a Salesforce beta connector with read/write capability.', 'Hosted MCP calls inherit named-user Salesforce access and are attributable in audit logs.'].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[#0F766E]" /><span>{item}</span></li>)}
              </ul>
            </div>
            <div className="bg-[#FFF8E7] p-6">
              <h3 className="text-xl font-bold text-[#1E3A5F]">Confirm before purchase or production</h3>
              <ul className="mt-4 space-y-3 leading-7 text-[#475467]">
                {['Exact licensing, packaging and regional availability.', 'Product-specific legal, security, data-location and retention terms.', 'Complete skill inventory, limits and supported production configurations.', 'The distinction between the current connector beta and the announced Salesforce in Claude open beta.', 'General-availability timing and support commitments.'].map((item) => <li key={item} className="flex gap-3"><CircleAlert className="mt-1 h-5 w-5 flex-none text-[#B54708]" /><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-[#1E3A5F] md:text-4xl">Salesforce in Claude readiness questions</h2>
          <div className="mt-8 divide-y divide-[#DFE3F5] border-y border-[#DFE3F5]">
            {faqItems.map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="text-xl font-bold text-[#1E3A5F]">{item.q}</h3>
                <p className="mt-3 leading-7 text-[#667085]">{item.a}</p>
                <a href={item.source.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#4B37C8] hover:underline">First-party source: {item.source.label} <ExternalLink className="h-4 w-4" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#DFE3F5] bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-[#1E3A5F] md:text-4xl">Related Emergent Logic resources</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ['Salesforce consulting for Canadian teams', '/services/salesforce-consulting', 'Commercial scoping for data, workflow, access, testing and handoff.'],
              ['Salesforce cleanup before automation', '/blog/salesforce-cleanup-before-automation', 'Review data, ownership, stages and reporting before Flow or AI action.'],
              ['AI CRM audit', '/ai-crm-audit', 'A broader self-assessment for CRM operating readiness.'],
              ['Salesforce admin support', '/salesforce-admin-support-canada-us', 'Ongoing governance, documentation and controlled admin work.'],
              ['CRM integration selection workbook', '/resources/crm-integration-platform-selection-workbook', 'Compare integration classes and document monitoring, exceptions and rollback.'],
              ['Free CRM Workflow Assessment', '/lead-follow-up-audit', 'Review one real workflow without providing CRM credentials for the initial assessment.'],
            ].map(([title, href, description]) => (
              <Link key={href} href={href} className="border border-[#DFE3F5] bg-[#FBFBFF] p-5 hover:border-[#4B37C8] hover:shadow-sm">
                <h3 className="font-bold text-[#1E3A5F]">{title}</h3><p className="mt-2 leading-7 text-[#667085]">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-[#1E3A5F] md:text-4xl">Official sources</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#667085]">The product is evolving. Recheck the official release, beta, licensing and security documentation before relying on this resource for a purchase or production decision.</p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {officialSources.map((source) => (
              <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="flex h-full items-start gap-2 border border-[#DFE3F5] bg-white p-4 font-semibold text-[#4B37C8] hover:underline"><ExternalLink className="mt-1 h-4 w-4 flex-none" /><span>{source.label}</span></a></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#1E3A5F] py-16 text-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Review one workflow before expanding AI access</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#E7ECF5]">Choose one Salesforce workflow or proposed AI action. We will review the handoff, ownership, required data and control points before you expand automation. No Salesforce credentials are required for the initial assessment.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedCTA ctaName="Salesforce in Claude Readiness - Free CRM Workflow Assessment" destination="lead-follow-up-audit">
              <Link href="/lead-follow-up-audit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-[#1E3A5F] hover:bg-[#EEF2FF]">
                Request a Free CRM Workflow Assessment <ArrowRight className="h-5 w-5" />
              </Link>
            </TrackedCTA>
            <Link href="/services/salesforce-consulting" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10">Review Salesforce consulting</Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
