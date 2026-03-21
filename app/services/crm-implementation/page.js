import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Database, Clock, DollarSign, Users, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'CRM Implementation Services | HubSpot & Salesforce Setup in 2 Weeks',
  description: 'Full CRM implementation for Canadian businesses. Pipelines, automation, dashboards, data migration, and training. HubSpot, Salesforce, or Zoho — delivered in 2 to 4 weeks. From $1,500.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/crm-implementation' },
  robots: { index: true, follow: true },
};

export default function CRMImplementation() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-violet-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">CRM Implementation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            CRM Implementation That Works From Week One
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            We set up HubSpot, Salesforce, and Zoho CRM systems for Canadian businesses in 2 to 4 weeks. Not 6 months. Pipelines, automation, dashboards, data migration, and team training — all included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 font-semibold px-8">
                Book Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What Is CRM Implementation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Is CRM Implementation?</h2>
          <p className="text-lg text-gray-600 mb-4">
            CRM implementation is the process of setting up a customer relationship management system so it actually works for your business. It is not just installing software — it is configuring pipelines to match your sales process, building automation that saves your team hours every week, creating dashboards that show real numbers, and migrating your data without losing anything.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            The difference between a CRM that generates revenue and a CRM that collects dust is how it is implemented. Most businesses buy a CRM, configure it generically, and wonder why nobody uses it. A proper implementation starts with understanding your business and ends with a system your team actually wants to use.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We implement HubSpot, Salesforce, and Zoho for businesses with 10 to 200 employees across Canada. Every implementation is customized to your sales process, your team structure, and your growth goals.
          </p>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Who Needs CRM Implementation?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'New CRM buyers', desc: 'You just purchased HubSpot, Salesforce, or Zoho and need it set up properly from day one. You do not want to spend months figuring it out yourself.' },
              { title: 'Scaling teams', desc: 'Your sales team is growing and spreadsheets are not cutting it anymore. You need a system that scales with you and keeps everyone aligned.' },
              { title: 'Failed implementations', desc: 'You already tried setting up your CRM — either yourself or with a freelancer — and it did not work. Your data is messy, your team is frustrated, and you need someone to fix it.' },
              { title: 'Switching CRMs', desc: 'You are migrating from one CRM to another and need the transition handled cleanly — no lost data, no downtime, no disruption to your sales process.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-violet-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Common CRM Implementation Mistakes</h2>
          <div className="space-y-4">
            {[
              { title: 'Starting with features instead of process', desc: 'Most implementations fail because they start by configuring software features instead of mapping the actual sales process. If your CRM does not match how your team sells, they will not use it.' },
              { title: 'Skipping data cleanup', desc: 'Migrating dirty data into a new CRM just moves the problem. Duplicates, missing fields, outdated contacts — they all need to be cleaned before migration, not after.' },
              { title: 'No training plan', desc: 'Installing a CRM is not the same as implementing it. If your team does not know how to use the system efficiently, adoption drops to zero within 30 days.' },
              { title: 'Generic configuration', desc: 'Using default templates and generic pipeline stages means your CRM does not reflect your business. Every company has a unique sales process — your CRM should match it exactly.' },
              { title: 'No automation strategy', desc: 'A CRM without automation is just a database. Lead assignment, follow-up reminders, email sequences, deal stage updates — these should be automated from day one.' },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Is Included in Our CRM Implementation</h2>
          <p className="text-lg text-gray-600 mb-8">
            Every implementation is customized, but here is what you can expect:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Database, title: 'Pipeline Configuration', desc: 'Custom deal stages, pipeline views, and deal properties that match your exact sales process. Multiple pipelines for different products or services if needed.' },
              { icon: Users, title: 'Contact & Company Setup', desc: 'Custom properties, lifecycle stages, lead status definitions, and segmentation logic. Your contacts organized the way your business needs them.' },
              { icon: Zap, title: 'Workflow Automation', desc: 'Lead assignment rules, follow-up sequences, deal stage automation, notification triggers, and task creation. We automate every repetitive process.' },
              { icon: TrendingUp, title: 'Dashboards & Reports', desc: 'Revenue dashboards, pipeline reports, activity tracking, and forecasting views. Real numbers your team can trust and your leadership can act on.' },
              { icon: ShieldCheck, title: 'Data Migration', desc: 'Clean migration from spreadsheets, another CRM, or multiple sources. Deduplication, field mapping, and validation included.' },
              { icon: Clock, title: 'Team Training', desc: 'Role-based training for sales reps, managers, and admins. Not a generic webinar — hands-on training with your actual data and workflows.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <item.icon className="w-8 h-8 text-violet-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Process: Audit, Build, Launch</h2>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Audit (Week 1)', desc: 'We map your sales process, audit your existing data, assess your tech stack, and identify every bottleneck. You receive a detailed report with prioritized recommendations and a clear implementation plan. No guessing, no assumptions.' },
              { step: '02', title: 'Build (Week 2-3)', desc: 'We configure your CRM from scratch — pipelines, properties, automation, dashboards, email templates, integrations. Data migration happens here with full deduplication and validation. Everything is built automation-first.' },
              { step: '03', title: 'Launch (Week 3-4)', desc: 'Your team gets hands-on training tailored to their roles. We launch together, monitor adoption for two weeks, and make adjustments based on real usage. Post-launch support is included in every engagement.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
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

      {/* Pricing + Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Timeline and Investment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <Clock className="w-10 h-10 text-violet-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2 to 4 Weeks</h3>
              <p className="text-gray-600">From kickoff to launch. Our AI-accelerated methodology compresses what agencies take 3 to 6 months to deliver. You see results from week one.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <DollarSign className="w-10 h-10 text-violet-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">From $1,500</h3>
              <p className="text-gray-600">Fixed pricing agreed before we start. No hourly billing, no change orders, no surprises. The scope, timeline, and investment are locked in from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Emergent Logic</h2>
          <div className="space-y-3">
            {[
              'Multi-platform expertise: HubSpot, Salesforce, Zoho — we recommend based on your business, not our vendor partnerships',
              'AI-accelerated delivery: faster audits, structured configuration, 70 to 80 percent faster than traditional agencies',
              'Senior consultants only: the person on your strategy call is the person building your CRM',
              'Fixed pricing: no hourly rates, no scope creep, no surprises',
              'Training built in: we do not consider an implementation complete until your team is using it',
              'Based in Surrey, BC: local to Greater Vancouver, serving all of Canada',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/hubspot-consulting" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">HubSpot Consulting</p>
              <p className="text-gray-600 text-sm">Expert HubSpot setup and optimization</p>
            </Link>
            <Link href="/services/crm-cleanup" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Cleanup</p>
              <p className="text-gray-600 text-sm">Fix messy data and broken workflows</p>
            </Link>
            <Link href="/contact" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Contact Us</p>
              <p className="text-gray-600 text-sm">Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your CRM Working?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We will assess your current situation and tell you exactly what a proper implementation would look like for your business.
          </p>
          <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 font-semibold px-8">
              Book Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
