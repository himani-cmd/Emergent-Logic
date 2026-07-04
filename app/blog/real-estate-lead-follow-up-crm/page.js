import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, Home, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Real Estate CRM Lead Follow-Up',
  description: 'Real estate teams lose buyer and seller opportunities when forms, calls, referrals, and market evaluation requests are not routed into a clear CRM workflow.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/real-estate-lead-follow-up-crm' },
  openGraph: {
    title: 'Real Estate Lead Follow-Up: Why CRM Routing Matters | Emergent Logic',
    description: 'A practical CRM guide for real estate teams that want cleaner inquiry tracking, faster follow-up, and better visibility into warm buyer and seller leads.',
    url: 'https://www.emergent-logic.ca/blog/real-estate-lead-follow-up-crm',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const leakPoints = [
  'Market evaluation forms land in email but do not create a CRM task',
  'Buyer inquiries are replied to once and then forgotten',
  'Open house leads are entered late or inconsistently',
  'Referral leads sit in text messages instead of the CRM',
  'Long-cycle prospects are not tagged by timeline or intent',
  'No one can quickly see which leads are warm, cold, or waiting',
];

const workflowSteps = [
  'Capture every inquiry source: website forms, IDX leads, referrals, calls, texts, and open houses',
  'Separate buyers, sellers, investors, and past clients with simple CRM fields',
  'Create clear stages for new inquiry, contacted, nurture, active search, listing consult, and closed/lost',
  'Assign ownership so every lead has one person responsible for the next step',
  'Use next follow-up dates instead of relying on memory',
  'Review pipeline weekly so warm leads do not disappear quietly',
];

const relatedPosts = [
  { title: 'Why Website Leads Do Not Turn Into Sales Without CRM Routing', href: '/blog/website-leads-to-crm' },
  { title: '5-Point Lead Follow-Up Audit Checklist', href: '/blog/lead-follow-up-audit-checklist' },
  { title: 'Marketing Automation Needs CRM Cleanup First', href: '/blog/marketing-automation-needs-crm-cleanup' },
];

export default function RealEstateLeadFollowUpCrm() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'Real Estate Lead Follow-Up CRM', href: '/blog/real-estate-lead-follow-up-crm' },
            ]} />

            <Badge className="mb-4">Real Estate CRM</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Estate Lead Follow-Up: Why CRM Routing Matters
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 flex-wrap">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Vancouver, Canada, and remote teams
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 8 min read
              </span>
            </div>

            <ShareButtons
              url="https://www.emergent-logic.ca/blog/real-estate-lead-follow-up-crm"
              title="Real Estate Lead Follow-Up: Why CRM Routing Matters"
            />

            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                Real estate teams rarely have one clean lead source. They have website forms, calls, referrals, open houses, social messages, listing alerts, market evaluation requests, and long-cycle conversations that may take months to convert.
              </p>

              <p>
                That is exactly why follow-up breaks. A lead might be real, qualified, and valuable, but if it does not land in a clear CRM workflow with ownership and a next step, it can disappear inside email, text messages, or a spreadsheet.
              </p>

              <p>
                Better CRM routing does not mean making the team more corporate. It means making sure every serious buyer or seller inquiry has a visible path from first touch to next action.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                  <Home className="w-5 h-5" /> The real estate follow-up problem
                </h4>
                <p className="text-orange-800 mb-0">
                  The value is often in the second, third, or tenth follow-up. A CRM should make those follow-ups visible before the opportunity goes cold.
                </p>
              </div>

              <h2>Why Real Estate Leads Need Structure</h2>
              <p>
                A buyer who asks one question today may not be ready to purchase for six months. A seller who requests a home evaluation may be comparing multiple agents. A referral may need careful, personal follow-up rather than a generic campaign.
              </p>

              <p>
                When all of those people sit in the same inbox, the team is forced to remember context manually. That works for a few leads. It breaks when volume increases.
              </p>

              <p>
                A cleaner CRM process gives each inquiry a type, source, owner, stage, next follow-up date, and notes. That makes the business easier to run and easier to scale.
              </p>

              <h2>Where Real Estate Leads Leak</h2>
              <p>
                Most lead loss does not look dramatic. It looks like small gaps that compound over time.
              </p>

              <div className="space-y-4 my-8">
                {leakPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-gray-50 border rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h2>What a Better CRM Workflow Should Do</h2>
              <p>
                A practical real estate CRM workflow should separate buyer inquiries, seller inquiries, valuation requests, past clients, referrals, and inactive leads. Each group needs a different follow-up rhythm.
              </p>

              <p>
                For example, a seller valuation request may need a fast first response and a consult task. A long-cycle buyer may need a slower nurture sequence and periodic check-ins. A past client referral may need a personal message and a different tracking path.
              </p>

              <p>
                This is where <Link href="/services/crm-implementation" className="text-orange-700 hover:underline">CRM implementation</Link>, <Link href="/services/crm-cleanup" className="text-orange-700 hover:underline">CRM cleanup</Link>, and <Link href="/services/lead-capture-websites" className="text-orange-700 hover:underline">lead capture websites</Link> should work together. The website captures the inquiry. The CRM makes sure someone owns the next step.
              </p>
              <p>
                We also documented this as a <Link href="/case-studies/real-estate-lead-routing-long-cycle-nurture" className="text-orange-700 hover:underline">representative real estate lead routing case study</Link>, showing how buyer, seller, valuation, referral, and long-cycle leads can move through CRM ownership and follow-up views.
              </p>

              <h2>A Simple Cleanup Sequence</h2>
              <p>
                Before adding more automation, make the existing process easier to trust. Start with these steps:
              </p>

              <ol>
                {workflowSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <h2>Where Automation Helps</h2>
              <p>
                Once the CRM fields and stages are clean, automation becomes useful. New inquiries can create records, assign owners, trigger first-response tasks, set follow-up dates, and notify the right person when a high-intent lead arrives.
              </p>

              <p>
                But automation should not hide a messy process. If duplicate contacts, unclear stages, and missing ownership already exist, automation can make the problem faster instead of better.
              </p>

              <p>
                If you want a starting point, the <Link href="/blog/lead-follow-up-audit-checklist" className="text-orange-700 hover:underline">5-point lead follow-up audit</Link> is a simple way to review one real inquiry path before changing the whole CRM.
              </p>

              <h2>Bottom Line</h2>
              <p>
                Real estate follow-up is not just about speed. It is about consistency. Every serious inquiry should have a clear owner, clear context, and a clear next action.
              </p>

              <p>
                If your website, inbox, CRM, and follow-up reminders are not connected, start there. More leads will not fix a broken follow-up system. A cleaner workflow will.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-orange-600 to-slate-900 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Want to review your real estate lead follow-up?</h3>
              <p className="text-white/80 mb-6">
                We can review one inquiry path from form submission to CRM stage, owner, task, and next follow-up.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-orange-50">
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
