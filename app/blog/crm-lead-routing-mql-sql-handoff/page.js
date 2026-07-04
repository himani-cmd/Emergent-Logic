import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, ArrowRight, BarChart3, CheckCircle, Clock, GitBranch, Split } from 'lucide-react';

export const metadata = {
  title: 'Lead Routing and MQL-to-SQL Handoff',
  description: 'Learn why CRM lead routing breaks between marketing and sales, and how cleaner lifecycle stages, ownership, and dashboards fix follow-up leaks.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/crm-lead-routing-mql-sql-handoff' },
  openGraph: {
    title: 'Why Lead Routing Breaks Between MQL and SQL | Emergent Logic',
    description: 'A practical guide to fixing CRM lead routing, MQL-to-SQL handoff, owner assignment, lifecycle stages, and follow-up visibility.',
    url: 'https://www.emergent-logic.ca/blog/crm-lead-routing-mql-sql-handoff',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const routingBreakpoints = [
  'Marketing and sales use different definitions for MQL, SQL, qualified lead, and opportunity',
  'Website forms create contacts without enough source, service interest, or urgency data',
  'Owner assignment rules are outdated, unclear, or dependent on one person checking an inbox',
  'Duplicate records split the history across multiple contacts, companies, or deals',
  'Lead scores trigger handoff before required fields are complete',
  'Sales dashboards show lead volume but not owner, SLA, next step, or stale records',
  'HubSpot workflows or Salesforce rules update the same field from different places',
  'No one tests routing edge cases before adding more automation',
];

const auditChecks = [
  'Define exactly what qualifies a lead as MQL and what makes it sales-ready as SQL.',
  'Map every entry point: website forms, paid ads, chat, imports, events, referrals, and manual creates.',
  'Check whether each entry point creates the right CRM record with source, owner, lifecycle stage, and next step.',
  'Review HubSpot workflows, Salesforce assignment rules, lead queues, tasks, notifications, and field updates.',
  'Build a simple exception dashboard for unassigned leads, stale MQLs, missing required fields, and duplicate records.',
];

const platformNotes = [
  {
    title: 'HubSpot lead routing',
    body: 'HubSpot is often faster for smaller teams to configure, especially when forms, lifecycle stages, lists, workflows, and owner notifications live in the same system. It still breaks when teams use too many overlapping workflows or unclear lifecycle definitions.',
    href: '/services/hubspot-consulting',
  },
  {
    title: 'Salesforce lead routing',
    body: 'Salesforce can support more complex routing rules, queues, territories, permissions, and reporting. It needs cleaner governance because small rule changes can affect lead assignment, reporting, and downstream automation.',
    href: '/services/salesforce-consulting',
  },
];

const faqItems = [
  {
    q: 'What is lead routing in CRM?',
    a: 'Lead routing is the process of assigning new leads to the right owner, team, queue, or workflow based on rules such as territory, source, service interest, lifecycle stage, lead score, or account fit.',
  },
  {
    q: 'Why does MQL-to-SQL handoff break?',
    a: 'MQL-to-SQL handoff breaks when marketing and sales use different definitions, required fields are missing, ownership is unclear, lead scores are not trusted, or the CRM does not trigger the next step automatically.',
  },
  {
    q: 'How do you fix lead routing issues?',
    a: 'Start by auditing lifecycle stages, lead sources, owner assignment rules, required fields, duplicate records, workflow logic, follow-up SLAs, and dashboards. Then rebuild routing around the real sales process.',
  },
  {
    q: 'Should routing be fixed before adding more automation?',
    a: 'Yes. If ownership, lifecycle stages, required fields, or source data are unclear, more automation can move leads faster into the wrong process. Fix routing logic before scaling automation.',
  },
];

const relatedPosts = [
  { title: 'Speed to Lead: Why Fast Follow-Up Needs a CRM System', href: '/blog/speed-to-lead-crm-follow-up-system' },
  { title: 'Why Website Leads Need CRM Routing', href: '/blog/website-leads-to-crm' },
  { title: 'Why HubSpot Workflows Break', href: '/blog/why-hubspot-workflows-break' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.emergent-logic.ca/blog/crm-lead-routing-mql-sql-handoff#article',
      headline: 'Why Lead Routing Breaks Between MQL and SQL',
      description: metadata.description,
      image: 'https://www.emergent-logic.ca/og-image.png',
      author: {
        '@type': 'Organization',
        name: 'Emergent Logic',
        url: 'https://www.emergent-logic.ca/',
      },
      publisher: { '@id': 'https://www.emergent-logic.ca/#organization' },
      mainEntityOfPage: 'https://www.emergent-logic.ca/blog/crm-lead-routing-mql-sql-handoff',
      datePublished: '2026-07-04',
      dateModified: '2026-07-04',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/blog/crm-lead-routing-mql-sql-handoff#faq',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function CrmLeadRoutingMqlSqlHandoff() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'CRM Lead Routing', href: '/blog/crm-lead-routing-mql-sql-handoff' },
            ]} />

            <Badge className="mb-4">Lead Routing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Lead Routing Breaks Between MQL and SQL
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 flex-wrap">
              <span className="flex items-center gap-2">
                <Split className="w-4 h-4" /> HubSpot and Salesforce routing
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 9 min read
              </span>
            </div>

            <ShareButtons
              url="https://www.emergent-logic.ca/blog/crm-lead-routing-mql-sql-handoff"
              title="Why Lead Routing Breaks Between MQL and SQL"
            />

            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                Lead routing breaks when the CRM cannot answer one simple question: who owns the next step? The leak usually starts between marketing-qualified leads and sales-qualified leads.
              </p>

              <p>
                Most teams do not notice the routing problem right away. The CRM still has activity. Forms still submit. Leads still appear in dashboards. But underneath the surface, the handoff between marketing and sales gets slower, less trusted, and harder to manage.
              </p>

              <p>
                A lead becomes an MQL. Sales expects a qualified conversation. Marketing expects fast follow-up. The owner is unclear, the lifecycle stage is outdated, or the routing rule was built for last year&apos;s process. The dashboard shows volume, but it does not show whether the lead is actually being worked.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> The dangerous part
                </h4>
                <p className="text-orange-800 mb-0">
                  Bad routing does not always look broken. It often looks like normal CRM activity until someone asks why qualified leads are not becoming conversations.
                </p>
              </div>

              <h2>What Lead Routing Is Supposed To Do</h2>
              <p>
                Lead routing is the set of rules that determines where a lead goes next. In a clean CRM, a new inquiry should become a usable record with source, interest, owner, lifecycle stage, next step, and reporting visibility.
              </p>
              <p>
                Good routing does not only assign a person. It protects response time. It tells the team who owns the lead, what type of lead it is, what should happen next, and whether the handoff happened on time.
              </p>

              <h2>Where MQL-to-SQL Handoff Breaks</h2>
              <p>
                MQL and SQL definitions drift when marketing, sales, and operations stop reviewing the CRM process together. A score may qualify a lead, but the sales team may not trust the score. A form may capture interest, but the required fields may be incomplete. A workflow may assign an owner, but the owner may not receive a task or notification.
              </p>

              <div className="space-y-4 my-8">
                {routingBreakpoints.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-gray-50 border rounded-lg p-4">
                    <GitBranch className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h2>Lead Volume Is Not the Same as Lead Follow-Up</h2>
              <p>
                Many teams try to solve this problem by adding more leads. That can make the issue worse. More leads entering a broken routing process means more records to clean, more missed follow-ups, more unclear ownership, and more reporting noise.
              </p>
              <p>
                Before increasing traffic, check whether your <Link href="/blog/speed-to-lead-crm-follow-up-system" className="text-orange-700 hover:underline">speed-to-lead process</Link> actually protects warm inquiries. Fast follow-up needs more than a notification. It needs a CRM system that assigns ownership, creates the next step, and makes stale leads visible.
              </p>

              <h2>HubSpot vs Salesforce Lead Routing</h2>
              <p>
                The platform matters, but the process matters more. HubSpot and Salesforce can both support clean lead routing. Both can also become messy if lifecycle stages, owner rules, source fields, and automation logic are not governed.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                {platformNotes.map((note) => (
                  <Link key={note.href} href={note.href}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">{note.title}</CardTitle>
                        <p className="text-gray-600 text-base font-normal">{note.body}</p>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>

              <h2>A Practical 5-Point Routing Audit</h2>
              <p>
                A lead routing audit should be simple enough to run quickly, but specific enough to reveal the actual leak. Start with the full path from inquiry to owner assignment to follow-up.
              </p>

              <div className="space-y-4 my-8">
                {auditChecks.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white border rounded-lg p-4 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h2>The Dashboard Should Show Handoff Failure</h2>
              <p>
                A dashboard showing lead count is not enough. The useful dashboard shows the handoff. Which leads became MQLs? Which were assigned? Which are missing owners? Which have no next task? Which have aged past the expected response window?
              </p>
              <p>
                This is where <Link href="/services/crm-cleanup" className="text-orange-700 hover:underline">CRM cleanup</Link> becomes revenue work. Cleaner data makes it possible to see where follow-up is stuck instead of guessing from activity logs.
              </p>

              <div className="bg-gray-900 text-white rounded-2xl p-6 my-8">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-orange-300" /> Dashboard fields worth tracking
                </h4>
                <ul className="mb-0 text-white/80">
                  <li>Lead source, landing page, and form name</li>
                  <li>Lifecycle stage and date entered stage</li>
                  <li>Owner, queue, or routing rule</li>
                  <li>First response time and next follow-up date</li>
                  <li>Required fields missing at handoff</li>
                  <li>Stale MQLs and unworked SQLs</li>
                </ul>
              </div>

              <h2>Fix Routing Before Adding More Automation</h2>
              <p>
                Automation is useful after the routing foundation is clear. If the CRM does not know who owns the lead, what stage it is in, or what should happen next, automation can accelerate the wrong handoff.
              </p>
              <p>
                If website forms are part of the problem, review how <Link href="/blog/website-leads-to-crm" className="text-orange-700 hover:underline">website leads should route into CRM</Link>. If HubSpot workflows are overlapping, review why <Link href="/blog/why-hubspot-workflows-break" className="text-orange-700 hover:underline">HubSpot workflows break</Link> before rebuilding the workflow canvas.
              </p>
              <p>
                For a representative build pattern, see our <Link href="/case-studies/lead-routing-mql-sql-handoff-cleanup" className="text-orange-700 hover:underline">lead routing and MQL-to-SQL handoff cleanup case study</Link>. It shows how lifecycle definitions, owner rules, required fields, and exception dashboards fit together in a practical CRM cleanup.
              </p>

              <h2>How Emergent Logic Approaches Lead Routing</h2>
              <p>
                Emergent Logic helps teams audit and rebuild the operating layer behind CRM lead follow-up. That includes lifecycle stages, owner rules, lead source fields, routing workflows, required fields, dashboards, and follow-up tasks across HubSpot and Salesforce.
              </p>
              <p>
                We keep the work practical. The goal is not more software for the sake of it. The goal is a CRM that makes ownership clear, protects response time, and shows where revenue is leaking.
              </p>

              <h2>Bottom Line</h2>
              <p>
                MQL-to-SQL handoff breaks when the CRM cannot enforce clear definitions, ownership, and next steps. If leads are entering the system but not turning into conversations, the routing layer is worth auditing first.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-orange-600 to-amber-700 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Want to audit your lead routing?</h3>
              <p className="text-white/80 mb-6">
                We can review your lifecycle stages, owner assignment, routing workflows, dashboards, and follow-up process so qualified leads do not sit untouched.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/lead-follow-up-audit">
                  <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-100">
                    Try the Lead Follow-Up Audit <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="bg-transparent border border-white/40 text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
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
