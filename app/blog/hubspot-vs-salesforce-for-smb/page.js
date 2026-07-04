import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, Scale } from 'lucide-react';

export const metadata = {
  title: 'HubSpot vs Salesforce for SMBs | CRM Comparison',
  description: 'Compare HubSpot and Salesforce for small businesses: cost, setup, admin needs, automation, reporting, adoption risk, and when each CRM fits.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/hubspot-vs-salesforce-for-smb' },
  openGraph: {
    title: 'HubSpot vs Salesforce for SMBs | CRM Comparison',
    description: 'A practical SMB comparison of HubSpot and Salesforce covering cost, setup, admin burden, automation, reporting, and adoption risk.',
    url: 'https://www.emergent-logic.ca/blog/hubspot-vs-salesforce-for-smb',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const decisionRows = [
  {
    question: 'Need fast adoption?',
    hubspot: 'Usually easier for small sales and marketing teams to adopt quickly.',
    salesforce: 'Powerful, but setup and training usually need more care.',
  },
  {
    question: 'Need complex customization?',
    hubspot: 'Good for common SMB sales, marketing, and service processes.',
    salesforce: 'Stronger for complex objects, permissions, workflows, and enterprise processes.',
  },
  {
    question: 'Admin burden',
    hubspot: 'Lower day-to-day admin burden for many SMBs.',
    salesforce: 'Often needs admin ownership sooner.',
  },
  {
    question: 'Marketing automation',
    hubspot: 'Strong native marketing and lead nurture experience.',
    salesforce: 'Often requires Account Engagement, Marketing Cloud, or connected tools.',
  },
  {
    question: 'Reporting complexity',
    hubspot: 'Good for practical pipeline, lifecycle, and campaign reporting.',
    salesforce: 'Very strong when the data model and dashboards are designed well.',
  },
];

const useHubSpot = [
  'You want a CRM your team can adopt quickly',
  'Marketing forms, emails, landing pages, and lifecycle stages matter',
  'You need practical automation without heavy platform administration',
  'Your sales process is important but not extremely complex',
];

const useSalesforce = [
  'You need deeper customization, permissions, or object structure',
  'Your sales process has multiple teams, regions, products, or approval layers',
  'You expect heavier reporting, integrations, or enterprise requirements',
  'You have or can afford Salesforce admin support',
];

export default function HubSpotVsSalesforceForSmb() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'HubSpot vs Salesforce for SMBs', href: '/blog/hubspot-vs-salesforce-for-smb' },
            ]} />

            <Badge className="mb-4">CRM Strategy</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              HubSpot vs Salesforce for SMBs: Which CRM Should You Choose?
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 flex-wrap">
              <span className="flex items-center gap-2">
                <Scale className="w-4 h-4" /> CRM comparison
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 9 min read
              </span>
            </div>

            <ShareButtons
              url="https://www.emergent-logic.ca/blog/hubspot-vs-salesforce-for-smb"
              title="HubSpot vs Salesforce for SMBs: Which CRM Should You Choose?"
            />

            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                HubSpot is often the better first CRM for small businesses that need fast adoption and marketing-to-sales follow-up. Salesforce is often better when customization, permissions, reporting complexity, or scale matter more.
              </p>

              <p>
                The wrong CRM choice is expensive because the cost is not only software. It is setup time, admin effort, team adoption, data quality, reporting trust, and whether the system actually supports follow-up.
              </p>

              <div className="bg-slate-50 border-l-4 border-slate-700 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-slate-900 mb-2">Short answer</h4>
                <p className="text-slate-800 mb-0">
                  Choose HubSpot when speed, usability, and marketing-to-sales workflows matter most. Choose Salesforce when complexity, customization, integrations, or long-term platform depth matter most.
                </p>
              </div>

              <h2>Quick Decision Table</h2>
              <div className="not-prose grid gap-4 my-8">
                {decisionRows.map((row) => (
                  <Card key={row.question}>
                    <CardHeader>
                      <CardTitle className="text-xl">{row.question}</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-orange-700">HubSpot</p>
                        <p className="text-gray-600 mb-0">{row.hubspot}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-indigo-700">Salesforce</p>
                        <p className="text-gray-600 mb-0">{row.salesforce}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2>When HubSpot Is the Better Fit</h2>
              <div className="space-y-4 my-8">
                {useHubSpot.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p>
                HubSpot is especially useful when the business wants forms, email, landing pages, lifecycle stages, automation, and sales follow-up in one cleaner system. For many SMBs, it is easier to get value faster.
              </p>
              <p>
                If you already use HubSpot but it feels messy, see our <Link href="/services/hubspot-consulting" className="text-orange-700 hover:underline">HubSpot consulting</Link> and <Link href="/blog/hubspot-consulting-cost-guide" className="text-orange-700 hover:underline">HubSpot consulting cost guide</Link>.
              </p>

              <h2>When Salesforce Is the Better Fit</h2>
              <div className="space-y-4 my-8">
                {useSalesforce.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-indigo-50 border border-indigo-100 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p>
                Salesforce is powerful when the business needs custom processes, stronger permission control, deeper reporting, or more complex integrations. But it usually needs more admin discipline.
              </p>
              <p>
                If Salesforce is already in place but hard to trust, start with <Link href="/services/salesforce-consulting" className="text-indigo-700 hover:underline">Salesforce consulting</Link> or review <Link href="/blog/salesforce-consulting-pricing-factors" className="text-indigo-700 hover:underline">Salesforce consulting pricing factors</Link>.
              </p>

              <h2>Implementation Cost Differences</h2>
              <p>
                HubSpot implementations are often faster for standard SMB sales and marketing workflows. Salesforce implementations can take longer because the platform is more configurable and can support more complex business logic.
              </p>
              <p>
                Complexity is not bad. It just needs to be intentional. A simple business can overbuild Salesforce. A complex business can outgrow a lightweight HubSpot setup. The right answer depends on process, team, reporting, and budget.
              </p>

              <h2>Adoption Risk</h2>
              <p>
                CRM failure usually looks boring: people stop updating records, reports are not trusted, workflows fire incorrectly, and sales follow-up depends on memory. The CRM choice should reduce that risk, not create a beautiful system nobody uses.
              </p>

              <h2>Can You Use Both?</h2>
              <p>
                Yes, but only when there is a clear reason. Some companies use HubSpot for marketing and Salesforce for sales. That can work well if field mapping, lifecycle stages, ownership, source tracking, and sync rules are designed carefully.
              </p>
              <p>
                If the sync is already messy, see our guide to <Link href="/blog/hubspot-salesforce-sync-cleanup" className="text-slate-700 hover:underline">HubSpot Salesforce sync cleanup</Link>.
              </p>

              <h2>Bottom Line</h2>
              <p>
                HubSpot vs Salesforce is not a brand decision. It is an operating decision. Pick the CRM your team can maintain, trust, and use consistently. Then implement only the processes that help sales, marketing, and leadership see what is actually happening.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Need help choosing or cleaning up your CRM?</h3>
              <p className="text-white/80 mb-6">
                We can review your process and recommend whether HubSpot, Salesforce, cleanup, or a lighter workflow is the better next move.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  Ask for a CRM Review <ArrowRight className="w-5 h-5 ml-2" />
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
