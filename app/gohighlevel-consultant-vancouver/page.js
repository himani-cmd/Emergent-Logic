import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhoYouWorkWith from '@/components/WhoYouWorkWith';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';

const canonical = 'https://www.emergent-logic.ca/gohighlevel-consultant-vancouver';
const description = 'GoHighLevel consultant for Vancouver teams: setup, repair of half-built accounts, workflows, calendars, SMS consent and integrations. Surrey, BC based.';

export const metadata = {
  title: 'GoHighLevel Consultant Vancouver',
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'GoHighLevel Consultant Vancouver | Emergent Logic',
    description,
    url: canonical,
    type: 'website',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Consultant Vancouver | Emergent Logic',
    description,
    images: ['https://www.emergent-logic.ca/og-image.png'],
  },
};

const sourceLinks = {
  pricing: 'https://www.gohighlevel.com/pricing',
  pricingGuide: 'https://help.gohighlevel.com/support/solutions/articles/155000001156-highlevel-pricing-guide',
  pipeda: 'https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/pipeda_brief/',
  oipc: 'https://www.oipc.bc.ca/',
};

const chooseQuestions = [
  'Will they write the scope, exclusions and acceptance checks down before anyone changes the HighLevel account?',
  'Is the person on the discovery call the same person who builds and tests in your sub-account?',
  'Will they repair what already works before proposing a rebuild, and show you the failing path first?',
  'Do they agree the acceptance tests up front: lead capture, owner assignment, booking, reminders, opt-out and reporting?',
  'Can they explain how HighLevel bills you: the plan, the billing currency on your invoice, and usage charges for phone, SMS and email paid from a prepaid wallet?',
  'Do they design CASL consent, BC PIPA or PIPEDA obligations into the workflows, and tell you when HubSpot, Salesforce, Zoho CRM or Odoo would fit your process better?',
];

const repairSteps = [
  { title: 'Find the failing path', description: 'Pick the lead path that is leaking: a form that does not create a contact, a calendar that books without notifying an owner, or a workflow that sends twice.' },
  { title: 'Reproduce it with a test record', description: 'Use an approved test contact to show exactly where the journey stops, which trigger or field causes it, and what the team sees.' },
  { title: 'Agree the acceptance test', description: 'Write down what "fixed" means before changing anything, then repair, re-test and record the result so the next change does not break it again.' },
];

const fitCards = [
  { title: 'HighLevel as the main system', scenario: 'A service business or agency wants lead capture, booking, pipeline and follow-up messaging in one place, run by a small team.', decision: 'Confirm the plan, sub-account structure, messaging requirements and the full lead journey before moving data in.' },
  { title: 'HighLevel alongside an existing CRM', scenario: 'HubSpot, Salesforce or another CRM already holds trusted customer and deal data that the business relies on.', decision: 'Keep the record of truth where it is and give HighLevel a contained role, such as booking or messaging, with a tested sync.' },
  { title: 'Another CRM as the main system', scenario: 'Account hierarchies, multi-team marketing and sales, complex permissions or ERP-connected operations are central.', decision: 'Assess HubSpot, Salesforce, Zoho CRM or Odoo first; do not replace a working system just to consolidate tools.' },
];

const faqs = [
  { q: 'Do you work on site in Vancouver or remotely?', a: 'Both. Emergent Logic is based in Surrey, BC. Most GoHighLevel discovery, configuration and testing happens over shared screens, and on-site working sessions in Metro Vancouver can be arranged when that helps the team.' },
  { q: 'Can you fix an existing HighLevel setup?', a: 'Yes. We start by reproducing the failing lead path, workflow, calendar, message or integration with a test record, agree what a working result looks like, and scope the repair around that. A rebuild is only proposed when a repair would cost more than it saves.' },
  { q: 'Can you migrate us from HubSpot or another CRM to GoHighLevel?', a: 'We can assess and plan it. The plan covers field mapping, record counts, duplicates, consent and unsubscribe history, which activities are worth moving, and reconciliation checks after import. Sometimes keeping the existing CRM and connecting HighLevel is the better answer.' },
  { q: 'Is GoHighLevel billed in Canadian dollars?', a: 'Check the billing currency on HighLevel\'s current pricing page before you subscribe; if your plan is not billed in Canadian dollars, your card issuer may add foreign-exchange fees. HighLevel\'s Pricing Guide describes usage-based services such as phone, SMS and email as charged separately from the plan, through a prepaid wallet.' },
  { q: 'What privacy rules apply to our contact data in BC?', a: 'Most private businesses in BC fall under BC\'s Personal Information Protection Act (PIPA); PIPEDA applies to federally regulated businesses such as banks, telecommunications and transportation. Compliance depends on how the account is configured and on your own obligations, so we document consent, access, retention and data-location decisions during setup. This is not legal advice.' },
  { q: 'Are you a GoHighLevel certified partner?', a: 'Emergent Logic provides CRM implementation and automation support, including HighLevel. We do not claim GoHighLevel certification or partner status.' },
  { q: 'How is the cost of GoHighLevel work decided?', a: 'Cost depends on the number of lead paths, users, workflows, calendars, integrations and any migration. After discovery, we send a written scope with dependencies, exclusions, acceptance checks, price and timing for your approval before work starts.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: 'GoHighLevel Consultant Vancouver',
      description,
      dateModified: '2026-11-17',
      isPartOf: { '@id': 'https://www.emergent-logic.ca/#website' },
      about: { '@id': `${canonical}#service` },
    },
    {
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: 'GoHighLevel Consulting in Vancouver',
      serviceType: 'GoHighLevel setup, repair, workflow automation, messaging consent and integration consulting',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: canonical,
      areaServed: [
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'AdministrativeArea', name: 'Metro Vancouver' },
        { '@type': 'AdministrativeArea', name: 'British Columbia' },
        { '@type': 'Country', name: 'Canada' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

const linkClass = 'font-medium text-violet-700 hover:underline';

export default function GoHighLevelConsultantVancouver() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="overflow-hidden pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'GoHighLevel Consultant Vancouver', href: '/gohighlevel-consultant-vancouver' },
          ]} tone="dark" />
          <div className="flex items-center gap-2 text-violet-300 mb-4"><MapPin className="w-5 h-5 flex-shrink-0" /><span>Vancouver & Metro Vancouver</span></div>
          <h1 className="max-w-4xl break-words text-4xl font-bold leading-tight tracking-tight text-white mb-4 md:text-5xl lg:text-6xl">
            GoHighLevel consultant in Vancouver for setup, repair and automation
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white mb-8 md:text-xl">
            For service businesses, agencies and small teams in Metro Vancouver that use GoHighLevel or are deciding whether to. Emergent Logic sets up, repairs, connects and documents HighLevel accounts so every lead has an owner and a next step. Start with a free Lead Follow-Up Audit or a 30-minute call.
          </p>
          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap">
            <TrackedCTA ctaName="Vancouver GoHighLevel Lead Audit" destination="/lead-follow-up-audit">
              <Button asChild size="lg" className="w-full bg-white text-violet-900 hover:bg-violet-100 sm:w-auto">
                <Link href="/lead-follow-up-audit">Request a Free Lead Follow-Up Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </TrackedCTA>
            <TrackedCTA ctaName="Vancouver GoHighLevel Project Discussion" destination="calendly">
              <Button asChild size="lg" className="w-full border border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto">
                <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">Book a 30-minute call</a>
              </Button>
            </TrackedCTA>
          </div>
          <p className="mt-6 max-w-3xl text-sm text-white/65">Last reviewed November 17, 2026 · No GoHighLevel certification or partner status claimed</p>
        </div>
      </section>

      <section className="border-b border-violet-100 bg-white py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">How should a Vancouver business choose a GoHighLevel consultant?</h2>
          <p className="mb-6 text-lg leading-8 text-gray-700">Look for someone who starts from how your leads actually arrive, get booked and get followed up, then shapes the HighLevel account around that. These are the questions worth asking before you hire anyone, including us.</p>
          <ul className="grid gap-4 md:grid-cols-2">
            {chooseQuestions.map((item) => (
              <li key={item} className="flex items-start gap-3 border border-violet-100 bg-violet-50/50 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-gray-600">
            Billing: see <a href={sourceLinks.pricing} className={linkClass}>HighLevel&apos;s pricing page</a> and its <a href={sourceLinks.pricingGuide} className={linkClass}>Pricing Guide</a>. Privacy: see the <a href={sourceLinks.oipc} className={linkClass}>Office of the Information and Privacy Commissioner for BC</a> and <a href={sourceLinks.pipeda} className={linkClass}>PIPEDA in brief</a>. Texting: our guide to <Link href="/blog/gohighlevel-sms-canada-a2p-casl" className={linkClass}>GoHighLevel SMS in Canada: A2P and CASL</Link>. (Checked November 2026. Implementation guidance, not legal advice.)
          </p>
        </div>
      </section>

      <section className="border-b border-violet-100 bg-violet-50/50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <Badge className="mb-4 bg-white text-violet-700 hover:bg-white">Repair before rebuild</Badge>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Already have a half-configured HighLevel account?</h2>
          <p className="mb-8 text-lg leading-8 text-gray-700">A HighLevel sub-account built from a snapshot, or handed over by an earlier provider, can leave a team unsure which workflows run and which do not. Starting over is rarely the first step.</p>
          <ol className="grid gap-4 md:grid-cols-3">
            {repairSteps.map((step, i) => (
              <li key={step.title} className="border border-violet-200 bg-white p-5">
                <span className="text-sm font-bold text-violet-600">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 leading-relaxed text-gray-700">The full scope of what we configure, test and hand over is on our <Link href="/services/gohighlevel-implementation" className={linkClass}>GoHighLevel implementation and automation support</Link> page.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Is GoHighLevel the right platform, or would another CRM fit better?</h2>
            <p className="text-lg leading-8 text-gray-700">We work with HubSpot, GoHighLevel, Salesforce, Zoho CRM, Odoo and other CRMs, so the recommendation follows the process rather than the platform. This is a decision framework, not a ranking.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {fitCards.map((card) => (
              <Card key={card.title} className="border border-violet-100 shadow-sm">
                <CardHeader><CardTitle className="text-lg text-gray-900">{card.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-gray-600">{card.scenario}</p>
                  <p className="mt-4 border-t border-violet-100 pt-4 text-gray-600">{card.decision}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-8 max-w-4xl leading-relaxed text-gray-700">
            Leaning towards HubSpot? See our <Link href="/hubspot-consultant-vancouver" className={linkClass}>HubSpot consultant in Vancouver</Link> page. For Salesforce, see <Link href="/services/salesforce-consulting" className={linkClass}>Salesforce consulting</Link>. Not sure yet? Start with <Link href="/services/crm-implementation" className={linkClass}>CRM implementation</Link> or our <Link href="/crm-consultant-vancouver" className={linkClass}>CRM consultant in Vancouver</Link> page.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">GoHighLevel consultant FAQ — Vancouver, BC</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.q} className="border-0 shadow-lg">
                  <CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader>
                  <CardContent><p className="text-gray-600">{faq.a}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhoYouWorkWith />

      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start with one lead path</h2>
          <p className="text-xl text-white/80 mb-8">Request the free Lead Follow-Up Audit of one visible enquiry path, or book a 30-minute call about your HighLevel account.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TrackedCTA ctaName="Vancouver GoHighLevel Final Lead Audit" destination="/lead-follow-up-audit">
              <Button asChild size="lg" className="bg-white text-violet-900 hover:bg-violet-100">
                <Link href="/lead-follow-up-audit">Request a Free Lead Follow-Up Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </TrackedCTA>
            <TrackedCTA ctaName="Vancouver GoHighLevel Final Project Discussion" destination="calendly">
              <Button asChild size="lg" className="border border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">Book a 30-minute call</a>
              </Button>
            </TrackedCTA>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
