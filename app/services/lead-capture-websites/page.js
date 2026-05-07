import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Globe, Layers, Link2, MousePointerClick, FileText, Calendar, Clock, DollarSign, Check, AlertTriangle, Database, Gauge } from 'lucide-react';

export const metadata = {
  title: 'Lead Capture Websites & Landing Pages Canada | CRM-Connected',
  description: 'Conversion-focused websites and landing pages that feed your CRM. Forms, lead routing, booking flows, and tracking — wired correctly so no lead falls through the cracks. From $2,500.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/lead-capture-websites' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Lead Capture Websites | Emergent Logic',
    description: 'CRM-connected websites and landing pages built to capture, route, and track inquiries — not just look pretty.',
    url: 'https://www.emergent-logic.ca/services/lead-capture-websites',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function LeadCaptureWebsites() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">Lead Capture Websites</span>
          </div>
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-medium mb-4">Supporting service</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Websites Built to Feed Your CRM
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            We are not a brand or web design agency. We build conversion-focused websites and landing pages whose only job is to capture inquiries properly, route them to the right person, and connect cleanly to your CRM. The page is the front door. The CRM is the rest of the building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a Free Strategy Call" destination="calendly">
              <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200 font-semibold px-8">
                  Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/ai-crm-audit">
              <Button size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8">
                Try Our AI CRM Audit
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gray-300" /> 3 to 6 week delivery</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gray-300" /> Fixed pricing from $2,500</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gray-300" /> CRM-connected by default</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gray-300" /> Conversion tracking included</div>
          </div>
        </div>
      </section>

      {/* CRM-first positioning callout */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4">
            <Database className="w-8 h-8 text-gray-700 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">This is a CRM service that happens to ship a website.</h2>
              <p className="text-gray-700">
                If you need a brand-led marketing site with brochure pages, custom design systems, or a content-heavy publication, we are not the right fit — and we will say so on the first call. What we do build is the part of the website that captures leads and feeds them into your CRM properly: forms, booking flows, lead routing, conversion tracking, and the pages directly tied to your sales motion. Always wired to <Link href="/services/crm-implementation" className="underline font-medium">your CRM</Link>, never as a standalone asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Is */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Mean by Lead Capture Website</h2>
          <p className="text-lg text-gray-600 mb-4">
            Most websites are designed to look professional first. That has its place, but on its own it does not move revenue. A lead capture website has one job: convert qualified visitors into structured records inside your CRM, with the right context attached, routed to the right person, faster than your competitors can get back to them.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            That changes what gets built. Less time on hero animations. More time on form architecture, conditional logic, qualification questions, hidden field mapping to CRM properties, calendar booking flows, lead source tracking, and post-submission automation. The visible website matters, but the invisible plumbing under it is where the revenue lives.
          </p>
          <p className="text-lg text-gray-600">
            We build this kind of site for businesses that already have or are building out a CRM strategy. The page on its own is a small part of the value. The page connected properly to a working CRM, with a fast lead handoff and clean attribution, is where the system becomes a revenue engine.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Build</h2>
          <p className="text-lg text-gray-600 mb-8">
            We focus on the page types that actually drive pipeline. Most engagements include a combination of these.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: MousePointerClick, title: 'Conversion-Focused Landing Pages', desc: 'Single-purpose pages built around one offer, one call to action, one outcome. Service pages, campaign landing pages, lead magnet pages, and gated content pages — all wired to capture and route inquiries automatically.' },
              { icon: Globe, title: 'Service & Product Pages', desc: 'High-intent pages that match your sales process. Clear positioning, social proof, qualification, FAQ, and pricing transparency. Designed to convert decision-stage traffic, not entertain casual browsers.' },
              { icon: FileText, title: 'Forms & Qualification Flows', desc: 'Smart forms with conditional logic that ask the right questions at the right time. Qualify and route on submission, prefill from URL parameters, and pass clean structured data to the CRM.' },
              { icon: Calendar, title: 'Booking & Meeting Flows', desc: 'Embedded scheduling that lets qualified leads book directly with the right person. Round-robin assignment, calendar sync, automatic reminders, and CRM activity logging.' },
              { icon: Layers, title: 'Multi-step Application Flows', desc: 'For higher-friction conversions: applications, intake forms, audit signups, or quote requests. Multi-step UX with progress saving, conditional branching, and partial-submission recovery emails.' },
              { icon: Link2, title: 'Tracking & CRM Integration', desc: 'UTM capture, source attribution, hidden fields, GA4 events, lead source mapping, and native CRM connection. Every conversion lands in the right place with the right context.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <item.icon className="w-8 h-8 text-gray-700 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Not Build */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do Not Build</h2>
          <p className="text-lg text-gray-600 mb-8">
            Being honest up front is faster than discovering misalignment three weeks in. Here is what we are not.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Brand-led marketing sites with extensive design systems and custom illustration',
              'Content-heavy publications, magazines, or editorial sites',
              'eCommerce stores with full product catalog, payment, and inventory management',
              'Web apps, dashboards, or product UI work',
              'Generic small business websites with no CRM connection or lead capture strategy',
              'Cheapest-bidder website builds with no integration or follow-through',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border">
                <AlertTriangle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-8">
            If you need any of the above, we can refer you to specialist partners. What we do is the lead capture surface specifically tuned to feed and integrate with your CRM.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 mb-8">
            We use a four-phase approach that integrates with whatever CRM work is happening in parallel.
          </p>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Discovery & Funnel Map (Week 1)', desc: 'We map your current funnel, audit existing pages, identify the highest-leverage conversion points, and document how leads should flow into the CRM. You get a written conversion strategy and a wireframe-level page plan before any pixels move.' },
              { step: '02', title: 'Design & Copy (Week 2-3)', desc: 'We design the pages around conversion principles — not around brand experimentation. Copy is written with positioning your sales team has already validated. Forms, CTAs, and trust elements are placed where they actually work.' },
              { step: '03', title: 'Build & CRM Wire-up (Week 3-5)', desc: 'Pages are built on a fast, modern stack (Next.js, HubSpot CMS, or your existing platform). Forms are wired to the CRM with proper field mapping, source tracking, and routing. Booking flows are embedded. Conversion tracking is configured before launch.' },
              { step: '04', title: 'Launch & Iterate (Week 5-6)', desc: 'We launch alongside your team, monitor traffic and conversion rates for two weeks, fix anything that misbehaves, and document everything. You walk away with a system you can hand to a content writer or marketer to keep iterating on.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-slate-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-white">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Timeline and Investment</h2>
          <p className="text-lg text-gray-600 mb-8">
            Pricing is fixed and scoped before we start. Most engagements are bundled with a CRM project.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <Clock className="w-10 h-10 text-gray-700 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3 to 6 Weeks</h3>
              <p className="text-gray-600">Single landing pages typically launch in 2 to 3 weeks. Multi-page service site builds run 4 to 6 weeks including CRM wire-up and testing.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <DollarSign className="w-10 h-10 text-gray-700 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">From $2,500 CAD</h3>
              <p className="text-gray-600">Single landing pages start at $2,500. Multi-page lead capture sites typically range $5,000 to $15,000. Bundled pricing available with CRM Implementation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Emergent Logic for Lead Capture</h2>
          <p className="text-lg text-gray-600 mb-8">
            Most agencies build a website and hand it off. We build a website and connect it to the system that turns visits into revenue.
          </p>
          <div className="space-y-3">
            {[
              'Pages designed around conversion architecture, not brand experimentation',
              'CRM-native by default — every form, button, and booking flow lands in the right place',
              'Fast, modern web stack: Next.js or HubSpot CMS, not a 50-plugin WordPress build',
              'UTM, attribution, and GA4 tracking configured before launch — not as an afterthought',
              'Bundled with CRM Implementation for clients who want the whole system built together',
              'Honest scope: we will tell you on the first call if you need a different kind of agency',
              'Senior consultants only, fixed pricing, two-week post-launch tuning included',
              'Based in Surrey, BC — serving Greater Vancouver and businesses across Canada',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Do I need to be a CRM client to work with you on a website?', a: 'No, but most of our website clients are also doing CRM work with us — either alongside the build or beforehand. If you do not have a CRM in place, we will recommend implementing one before, alongside, or shortly after the website project. A lead capture website without a working CRM behind it loses most of its value.' },
              { q: 'What platform do you build on?', a: 'We default to Next.js for fast, conversion-tuned marketing pages, and HubSpot CMS for clients who want everything inside HubSpot. We can also extend or improve existing WordPress sites where appropriate. We will recommend the right platform on the first call.' },
              { q: 'Will the site be SEO-friendly?', a: 'Yes. Modern stacks, clean metadata, structured data, fast load times, and search-engine-friendly URLs are baseline. We do not run SEO campaigns, but we hand you a site that any SEO partner can work with effectively.' },
              { q: 'Can you redesign just one page or section?', a: 'Yes. Single landing page redesigns and conversion-focused page launches are common engagements. Some clients start with one high-leverage page (a service page, a lead magnet page, a campaign landing page) and expand from there.' },
              { q: 'Do you write the website copy?', a: 'Yes. Conversion copy is included. We work with your subject matter experts, then write, format, and test every page before launch. If you have an in-house writer, we collaborate with them — it usually produces better results.' },
              { q: 'How does this compare to hiring a web design agency?', a: 'A typical web design agency optimizes for visual impact and brand storytelling. We optimize for conversion, lead quality, and CRM integration. If your priority is the brand experience, hire a brand agency. If your priority is getting more qualified leads into your CRM, talk to us.' },
              { q: 'What ongoing maintenance do I need after launch?', a: 'Two weeks of post-launch tuning is included. After that, page edits and new pages can be done by anyone on your team using the CMS we set up, or you can engage us monthly for ongoing optimization, A/B testing, and new conversion experiments.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services and Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/crm-implementation" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Implementation</p>
              <p className="text-gray-600 text-sm">The system your website should feed</p>
            </Link>
            <Link href="/services/marketing-automation" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Marketing Automation</p>
              <p className="text-gray-600 text-sm">What happens after the form submits</p>
            </Link>
            <Link href="/blog/campaign-attribution-crm-marketing-roi" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Campaign Attribution</p>
              <p className="text-gray-600 text-sm">Connecting traffic to closed deals</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build a Website That Earns Its Keep</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We will look at your current site, your CRM, and your funnel, and give you an honest read on whether a new lead capture site is the right next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTA ctaName="Book Free Strategy Call - Lead Capture Footer" destination="calendly">
              <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200 font-semibold px-8">
                  Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/ai-crm-audit">
              <Button size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8">
                Try Our AI CRM Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
