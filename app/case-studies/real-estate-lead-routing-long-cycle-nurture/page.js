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
  BellRing,
  CalendarClock,
  CheckCircle,
  ClipboardList,
  Home,
  MailCheck,
  MapPinned,
  Route,
  ShieldCheck,
  UserRoundCheck,
  Users,
} from 'lucide-react';

export const metadata = {
  title: 'Case Study: Real Estate Lead Routing and Nurture',
  description:
    'How real estate teams can route buyer, seller, valuation, referral, and long-cycle leads into a clear CRM follow-up workflow.',
  alternates: {
    canonical: 'https://www.emergent-logic.ca/case-studies/real-estate-lead-routing-long-cycle-nurture',
  },
  openGraph: {
    title: 'Representative Case Study: Real Estate Lead Routing and Long-Cycle Nurture | Emergent Logic',
    description:
      'How real estate teams can route buyer, seller, valuation, referral, and past-client inquiries into CRM ownership, follow-up tasks, nurture stages, and reporting.',
    url: 'https://www.emergent-logic.ca/case-studies/real-estate-lead-routing-long-cycle-nurture',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const leadTypes = [
  {
    icon: Home,
    title: 'Seller valuation requests',
    description:
      'These need fast response, property context, owner assignment, valuation status, and a clear next step toward a consult or listing conversation.',
  },
  {
    icon: Users,
    title: 'Buyer inquiries',
    description:
      'Many buyers are not ready immediately. They need source tracking, preferences, budget range, timeline, and periodic follow-up that does not feel generic.',
  },
  {
    icon: MapPinned,
    title: 'Open house and listing leads',
    description:
      'Open house visitors, listing questions, and sign inquiries should not vanish into notes. They need lead source, interest level, and next follow-up.',
  },
  {
    icon: UserRoundCheck,
    title: 'Past clients and referrals',
    description:
      'Referrals and past clients need a more personal workflow than cold internet leads, but they still need visible ownership and next action tracking.',
  },
];

const crmFields = [
  'Lead type: buyer, seller, investor, valuation, referral, past client, or open house',
  'Source: website, listing portal, referral, Google Business Profile, social, open house, sign call, or partner',
  'Timeline: now, 30 days, 90 days, 6 months, 12 months, unknown',
  'Assigned owner, next follow-up date, and current follow-up status',
  'Budget, property type, area of interest, selling address, or valuation context where relevant',
  'Nurture segment so warm leads do not get the same follow-up as high-intent leads',
];

const workflowSteps = [
  'Map every inquiry path: website forms, valuation CTAs, listing portals, calls, referrals, open houses, and social messages',
  'Separate buyer, seller, investor, valuation, referral, and past-client inquiries',
  'Create CRM fields for source, lead type, timeline, owner, stage, and next follow-up',
  'Route high-intent seller and valuation requests faster than low-context inquiries',
  'Create follow-up tasks instead of relying on memory or inbox flags',
  'Build long-cycle nurture views for leads that are warm but not ready yet',
  'Track which sources create conversations, appointments, listings, and closed business',
  'Review stale leads weekly so warm opportunities are not abandoned too early',
];

const safeguards = [
  'Do not over-automate personal referral follow-up',
  'Do not send generic nurture to every buyer or seller segment',
  'Keep consent and communication preferences visible before email follow-up',
  'Make owner assignment clear before creating reminders and tasks',
  'Keep active clients, past clients, and net-new leads separated',
  'Use automation to surface the next action, not replace relationship-building',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Representative Case Study: Real Estate Lead Routing and Long-Cycle Nurture',
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
  mainEntityOfPage: 'https://www.emergent-logic.ca/case-studies/real-estate-lead-routing-long-cycle-nurture',
  datePublished: '2026-06-29',
  dateModified: '2026-06-29',
};

export default function RealEstateLeadRoutingLongCycleNurtureCaseStudy() {
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
                  label: 'Real Estate Lead Routing and Nurture',
                  href: '/case-studies/real-estate-lead-routing-long-cycle-nurture',
                },
              ]}
            />

            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">
              Representative Implementation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Real Estate Lead Routing and Long-Cycle Nurture
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Real estate teams rarely lose opportunities because the lead form does not work. They lose opportunities because buyer, seller, valuation, referral, and long-cycle leads do not have clear ownership, follow-up rhythm, and CRM visibility.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Note: this is a method-based implementation example, not a fabricated client result. It shows the CRM routing and follow-up pattern Emergent Logic recommends for real estate teams and brokerages.
            </p>

            <ShareButtons
              url="https://www.emergent-logic.ca/case-studies/real-estate-lead-routing-long-cycle-nurture"
              title="Representative Case Study: Real Estate Lead Routing and Long-Cycle Nurture"
            />

            <div className="grid md:grid-cols-3 gap-4 my-10">
              {[
                { label: 'System type', value: 'Real estate lead routing and nurture' },
                { label: 'Best fit', value: 'Teams with buyer, seller, valuation, and referral leads' },
                { label: 'Core outcome', value: 'Every lead has source, owner, segment, and next follow-up' },
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
                A real estate team gets leads from many places: website forms, home valuation pages, Google Business Profile, listing portals, sign calls, social media, open houses, past clients, and referral partners. Some leads are urgent. Some are early research. Some are months away. Some are relationship-based and should not be treated like internet leads.
              </p>
              <p>
                The challenge is that all of those inquiries often land in different places. A valuation request lands in email. A buyer asks a question through a listing portal. A referral comes through text. An open house lead is written down but never added to a proper follow-up queue. The team stays busy, but warm opportunities slowly lose momentum.
              </p>

              <h2>The real problem</h2>
              <p>
                Real estate follow-up is not only about speed. It is about segmenting the lead correctly and keeping the next action visible for as long as the opportunity remains warm. A buyer who is six months away needs a different cadence than a seller valuation request. A past-client referral needs a different touch than a cold portal lead.
              </p>
            </div>

            <Card className="my-8 border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <CalendarClock className="w-8 h-8 text-orange-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The long-cycle follow-up issue</h2>
                    <p className="text-gray-700">
                      Many real estate leads do not convert immediately. If the CRM does not track lead type, timeline, owner, next follow-up, and source, the team may stop following up before the lead is ready.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>Lead types we would separate first</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 my-8">
              {leadTypes.map((lead) => (
                <Card key={lead.title} className="border shadow-sm">
                  <CardContent className="p-6">
                    <lead.icon className="w-8 h-8 text-orange-700 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lead.title}</h3>
                    <p className="text-gray-600">{lead.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The CRM fields that matter</h2>
              <p>
                A useful real estate CRM does not need to become complicated. It needs to show what kind of lead came in, where it came from, who owns it, when it should be followed up, and what stage it is in.
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
              <h2>The implementation sequence</h2>
              <p>
                The first version should focus on visibility. Once the team can see buyer, seller, valuation, referral, and past-client inquiries in one working CRM view, automation can help keep the process moving.
              </p>
            </div>

            <Card className="my-8 border-slate-200 bg-slate-50">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {workflowSteps.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-800 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2>Where automation helps</h2>
              <p>
                Once the lead categories and ownership rules are clear, automation can create useful structure. A valuation form can create a high-priority seller task. A buyer lead can enter a slower nurture view. A referral can trigger a personal follow-up reminder. An open house lead can be tagged and assigned before the next business day.
              </p>
              <p>
                The point is not to make real estate follow-up robotic. The point is to make sure relationship-based follow-up does not depend on memory, scattered notes, or a shared inbox.
              </p>

              <h2>Safeguards we would include</h2>
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
              <h2>What a real estate team gets from this work</h2>
              <p>
                The team gets a clearer view of active opportunities. Seller leads are not mixed with buyer nurture. Valuation requests are not buried in email. Referrals are not forgotten after a text exchange. Past clients can be tracked differently from net-new internet leads.
              </p>
              <p>
                This is why our <Link href="/blog/real-estate-lead-follow-up-crm" className="text-orange-700 hover:underline">real estate lead follow-up guide</Link>, <Link href="/services/crm-implementation" className="text-orange-700 hover:underline">CRM implementation</Link>, and <Link href="/services/lead-capture-websites" className="text-orange-700 hover:underline">lead capture website</Link> work are connected. The website creates the inquiry. The CRM protects the follow-up. Automation helps the team stay consistent over time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              {[
                { icon: Route, title: 'Cleaner routing', desc: 'Buyer, seller, valuation, referral, and open house leads can follow different paths.' },
                { icon: BellRing, title: 'Better reminders', desc: 'Long-cycle leads stay visible instead of relying on memory.' },
                { icon: MailCheck, title: 'Clearer source reporting', desc: 'The team can see which channels create real conversations.' },
              ].map((item) => (
                <Card key={item.title} className="border">
                  <CardContent className="p-5">
                    <item.icon className="w-7 h-7 text-orange-700 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-orange-700 via-red-800 to-slate-950 rounded-2xl text-white">
              <ClipboardList className="w-10 h-10 mb-4 text-orange-100" />
              <h2 className="text-3xl font-bold mb-4">Want to review your real estate lead follow-up?</h2>
              <p className="text-white/80 mb-6 max-w-2xl">
                We can review one inquiry path from website form, valuation request, listing lead, referral, or open house into CRM owner, task, stage, and next follow-up.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/lead-follow-up-audit">
                  <Button size="lg" className="bg-white text-orange-950 hover:bg-orange-100">
                    Try Lead Follow-Up Audit <ArrowRight className="w-5 h-5 ml-2" />
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
