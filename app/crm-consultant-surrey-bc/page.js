import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';

export const metadata = {
  title: 'CRM Consultant Surrey BC',
  description: 'CRM consultant in Surrey, BC. HubSpot, GoHighLevel, Salesforce, Zoho CRM and Odoo setup, cleanup and automation. Human-led, AI-assisted.',
  alternates: { canonical: 'https://www.emergent-logic.ca/crm-consultant-surrey-bc' },
  openGraph: {
    title: 'CRM Consultant Surrey BC | Emergent Logic',
    description: 'CRM consultant in Surrey, BC. HubSpot, GoHighLevel, Salesforce, Zoho CRM and Odoo setup, cleanup and automation. Human-led, AI-assisted.',
    url: 'https://www.emergent-logic.ca/crm-consultant-surrey-bc',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const platforms = [
  { name: 'HubSpot', href: '/hubspot-consultant-surrey-bc' },
  { name: 'GoHighLevel', href: '/services/gohighlevel-implementation' },
  { name: 'Salesforce', href: '/salesforce-consultant-surrey-bc' },
  { name: 'Zoho CRM', href: '/services/crm-implementation' },
  { name: 'Odoo', href: '/services/crm-implementation' },
  { name: 'NetSuite' },
  { name: 'Microsoft Dynamics' },
  { name: 'Pipedrive' },
  { name: 'Freshsales' },
  { name: 'Monday CRM' },
  { name: 'Copper' },
  { name: 'Insightly' },
  { name: 'Close CRM' },
];

const process = [
  { step: '01', title: 'Discovery', description: 'We map your sales process, identify gaps, and understand your team\'s workflow before touching any software.' },
  { step: '02', title: 'Platform Selection', description: 'We recommend the CRM that fits your business size, complexity, and budget — with a clear explanation of why.' },
  { step: '03', title: 'Configuration', description: 'Pipelines, deal stages, custom fields, dashboards, and automations configured to match your exact process.' },
  { step: '04', title: 'Data Migration', description: 'Controlled migration from supported sources with backups, field mapping, test imports, validation, rollback, and approval.' },
  { step: '05', title: 'Integration', description: 'Connect supported email, website, marketing automation, accounting, and operating tools after technical fit is confirmed.' },
  { step: '06', title: 'Training & Launch', description: 'Role-specific training, acceptance checks, and documentation can be included so the team has a clear operating handoff.' },
];

const reasons = [
  'Local CRM consultant based right here in Surrey, BC',
  'Platform-aware recommendations based on your process, team, and budget',
  'Focused delivery plans with scope, milestones, and ownership defined before work begins',
  'Practical support for data cleanup, migration, workflows, reporting, and integrations',
  'Role-specific training and clear documentation for the people using the CRM',
  'Post-launch support available when the team needs additional optimization',
];

const faqs = [
  { q: 'Which CRM is best for small businesses in Surrey, BC?', a: 'The right CRM depends on your sales process, number of users, reporting needs, integrations, and internal capacity. HubSpot can suit teams that want an approachable sales and marketing platform, while Salesforce is often considered when deeper customization and governance are required.' },
  { q: 'How much does CRM consulting cost in Surrey?', a: 'Cost depends on the number of users, data condition, workflows, integrations, and training required. We first identify the specific backlog or implementation scope, then provide a clear estimate before work begins.' },
  { q: 'Do you offer CRM training?', a: 'Training and adoption support can be included in the written scope. Emergent Logic is based in Surrey, and any in-person requirement is confirmed during discovery.' },
  { q: 'Do you set up Zoho CRM or GoHighLevel for Surrey businesses?', a: 'Yes. We implement and clean up Zoho CRM and GoHighLevel alongside HubSpot, Salesforce and Odoo. We confirm the best fit for your process, team and budget during discovery before a scope is proposed.' },
  { q: 'Do you only work with businesses in Surrey?', a: 'No. Emergent Logic is based in Surrey, BC and serves the Lower Mainland and businesses across Canada. Most discovery, configuration, testing and training is delivered remotely through calls and shared screens.' },
  { q: 'Should we clean up our CRM before adding automation?', a: 'In most cases yes. Automation built on duplicate, incomplete or outdated records tends to repeat those problems faster. A short cleanup first gives workflows reliable data to run on.' },
  { q: 'Can you help us switch from one CRM to another?', a: 'Yes. We can assess data sources, clean and map records, run a controlled migration, and reconcile the result before launch. The migration plan and validation steps are agreed before records are moved.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.emergent-logic.ca/crm-consultant-surrey-bc#faq',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function CrmConsultantSurrey() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      
      <section className="overflow-hidden pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/#services' },
            { label: 'CRM Consultant Surrey', href: '/crm-consultant-surrey-bc' },
          ]} tone="dark" />
          <div className="flex items-center gap-2 text-violet-300 mb-4"><MapPin className="w-5 h-5" /><span>Surrey, BC</span></div>
          <h1 className="max-w-4xl break-words text-4xl md:text-5xl font-bold leading-tight text-white mb-4">CRM Consultant in Surrey, BC</h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/75 max-w-3xl mb-8">
            Practical CRM consulting for Surrey businesses that need cleaner data, clearer pipelines, reliable follow-up, useful reporting, or a better implementation plan. We work across leading CRM platforms and define the scope, migration, workflows, integrations, and training before delivery begins.
          </p>
          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap">
            <TrackedCTA ctaName="Surrey CRM Consultation" destination="/contact">
              <Button asChild size="lg" className="w-full bg-white text-violet-900 hover:bg-violet-100 sm:w-auto">
                <Link href="/contact">Book a CRM Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </TrackedCTA>
            <Button asChild size="lg" variant="outline" className="w-full !border-white/40 !bg-transparent !text-white hover:!bg-white/10 hover:!text-white sm:w-auto">
              <Link href="/services/crm-implementation">Full CRM Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CRM platforms we implement in Surrey</h2>
          <p className="text-gray-600 mb-8">We compare platforms against your process, team capacity, integration needs, and budget before recommending a direction.</p>
          <div className="flex flex-wrap gap-4">
            {platforms.map((platform) => (platform.href
              ? <Link key={platform.name} href={platform.href} className="px-6 py-3 bg-gray-50 rounded-xl border font-medium text-gray-700 hover:border-violet-300 hover:text-violet-900">{platform.name}</Link>
              : <div key={platform.name} className="px-6 py-3 bg-gray-50 rounded-xl border font-medium text-gray-700">{platform.name}</div>))}
          </div>
          <p className="text-gray-600 mt-6">These are the platforms we most often implement and clean up, alongside the other CRMs your team already uses.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900">What does CRM implementation involve for a Surrey business?</h2>
            <p>It starts with how your team sells and follows up today, not with software settings. We map the process, recommend a platform that fits your size and budget, then configure pipelines, deal stages, fields and dashboards to match how you actually work.</p>
            <p>Existing records are moved with backups, field mapping, test imports and validation, so you keep the data you trust. Connections to your email, website forms and other tools are added once technical fit is confirmed, and your team is trained on the workflows they will use every day.</p>
            <p>You get a written scope before work begins, with milestones and ownership agreed up front. For the full service, see <Link href="/services/crm-implementation" className="text-violet-700 underline underline-offset-4">CRM implementation</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900">Marketing automation and lead follow-up for Surrey teams</h2>
            <p>A CRM only helps if new enquiries reach the right person quickly. We set up lead routing, follow-up tasks and reminders, and form-to-CRM capture so website and email enquiries land in the pipeline with an owner and a next step.</p>
            <p>Automation is designed with human review before high-impact actions. Our <Link href="/services/marketing-automation" className="text-violet-700 underline underline-offset-4">marketing automation</Link> service covers the workflows, and the <Link href="/lead-follow-up-audit" className="text-violet-700 underline underline-offset-4">free Lead Follow-Up Audit</Link> shows where enquiries are slipping today. You can also check your own process with the <Link href="/lead-follow-up-score" className="text-violet-700 underline underline-offset-4">Lead Follow-Up Score</Link>.</p>
            <p>If your CRM data is messy, we recommend a <Link href="/services/crm-cleanup" className="text-violet-700 underline underline-offset-4">CRM cleanup</Link> before adding automation, so workflows run on records you can trust.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our CRM consulting process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="text-4xl font-bold text-violet-200 mb-2">{item.step}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-gray-600">{item.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Surrey businesses choose a focused CRM consultant</h2>
          <ul className="space-y-4 max-w-3xl">
            {reasons.map((reason, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-violet-500 flex-shrink-0" /><span className="text-gray-700">{reason}</span></li>))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related resources</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
            <Link href="/hubspot-consultant-surrey-bc"><Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardHeader><CardTitle className="text-lg">HubSpot Consultant Surrey BC</CardTitle></CardHeader></Card></Link>
            <Link href="/blog/hubspot-vs-salesforce-canada"><Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardHeader><CardTitle className="text-lg">HubSpot vs Salesforce: Which CRM is Right?</CardTitle></CardHeader></Card></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">CRM Consulting FAQ — Surrey, BC</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (<Card key={faq.q} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{faq.a}</p></CardContent></Card>))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to find the right CRM for your Surrey business?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free 30-minute strategy call. We will assess your needs and recommend the right CRM platform — no obligation, no sales pitch.</p>
          <TrackedCTA ctaName="Surrey CRM Final Consultation" destination="/contact">
            <Button asChild size="lg" className="bg-white text-violet-900 hover:bg-violet-100">
              <Link href="/contact">Book a CRM Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </TrackedCTA>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
