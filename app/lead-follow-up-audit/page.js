import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Clock, FileSearch, MailCheck, Route, Target, Users } from 'lucide-react';

export const metadata = {
  title: 'Free 5-Point Lead Follow-Up Audit | Emergent Logic',
  description: 'Get a free 5-point review of one website inquiry path. We check lead source, ownership, CRM stage, follow-up timing, and reporting visibility.',
  alternates: { canonical: 'https://www.emergent-logic.ca/lead-follow-up-audit' },
  openGraph: {
    title: 'Free 5-Point Lead Follow-Up Audit | Emergent Logic',
    description: 'A practical review of what happens after someone fills out a form, requests a consultation, or raises their hand on your website.',
    url: 'https://www.emergent-logic.ca/lead-follow-up-audit',
    type: 'website',
  },
};

const auditPoints = [
  {
    icon: Route,
    title: 'Where the inquiry enters',
    text: 'We identify the visible lead path: website form, consultation CTA, valuation request, shared inbox, or booking flow.',
  },
  {
    icon: Users,
    title: 'Who should own it',
    text: 'We map whether the inquiry should go to sales, operations, an agent, a consultant, or a shared queue.',
  },
  {
    icon: Target,
    title: 'What stage it should create',
    text: 'We suggest the first CRM stage or status so the lead does not disappear as a loose email or form submission.',
  },
  {
    icon: Clock,
    title: 'What follow-up should happen next',
    text: 'We outline the next task, timing, and fallback if nobody replies or the lead goes quiet.',
  },
  {
    icon: MailCheck,
    title: 'What should be visible after 7 days',
    text: 'We show what reporting should tell you: still warm, replied, booked, not qualified, or waiting on follow-up.',
  },
];

const fits = [
  'Real estate teams handling buyer, seller, valuation, and referral inquiries',
  'Immigration and legal service teams managing consultation requests',
  'Property management teams receiving owner, tenant, strata, and rental inquiries',
  'Small service businesses using forms, inboxes, spreadsheets, or an underused CRM',
];

export default function LeadFollowUpAuditPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="mb-5 bg-white/10 text-white border-white/20">Free diagnostic</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Free 5-point lead follow-up audit
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mb-8">
            We review one visible inquiry path on your website and send back practical notes on where leads can get missed after the first form submit, email, or consultation request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Request Lead Follow-Up Audit" destination="/contact">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-indigo-950 hover:bg-indigo-50 px-7 py-6 text-base font-semibold">
                  Request the free audit <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </TrackedCTA>
            <TrackedCTA ctaName="Book Lead Follow-Up Audit Call" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-7 py-6 text-base font-semibold">
                  Book a 30-minute call
                </Button>
              </a>
            </TrackedCTA>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Most teams do not lose leads at the form. They lose them after the first touch.
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  A website can generate interest, but the real revenue leak usually happens in the handoff: who owns the inquiry, what stage it enters, when the next follow-up happens, and whether anyone can see if it is still warm next week.
                </p>
                <p>
                  This audit gives you a small, useful diagnostic before we talk about a bigger CRM cleanup, implementation, or automation project.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
              <FileSearch className="w-10 h-10 text-indigo-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">What we need from you</h3>
              <p className="text-gray-700 mb-4">
                Send us one website URL or inquiry path you care about. Example: contact form, consultation request, home valuation, buyer inquiry, owner inquiry, or demo request.
              </p>
              <p className="text-sm text-gray-600">
                No CRM access is needed for this first review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">The 5 points we check</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The output is intentionally simple: a short note you can understand, use, and decide from.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {auditPoints.map((item, index) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-indigo-700" />
                </div>
                <p className="text-sm font-semibold text-indigo-700 mb-2">Point {index + 1}</p>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Good fit for</h2>
              <div className="space-y-3">
                {fits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What happens after the audit?</h2>
              <p className="text-gray-600 mb-4">
                If the notes are useful, we can help fix the workflow: CRM cleanup, lead routing, follow-up tasks, source tracking, and reporting. If not, you still keep the notes.
              </p>
              <p className="text-gray-600">
                Based in Surrey, BC. Serving Greater Vancouver and businesses across Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-indigo-700 to-violet-700">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want us to look at one lead path?</h2>
          <p className="text-lg text-white/80 mb-8">
            Send the URL and tell us which inquiry matters most. We will review it and send back a practical 5-point note.
          </p>
          <TrackedCTA ctaName="Contact Lead Follow-Up Audit" destination="/contact">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-indigo-950 hover:bg-indigo-50 px-8 py-6 text-lg font-semibold">
                Request the free audit <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </TrackedCTA>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
