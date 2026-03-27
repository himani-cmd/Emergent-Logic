import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Settings, Zap, BarChart3, Mail, Link2, Users, Layers, Clock, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'HubSpot Consulting Canada | Setup, Workflows & Optimization',
  description: 'Expert HubSpot consulting for Canadian businesses. Portal setup, pipeline configuration, workflow automation, reporting, and integrations. AI-accelerated delivery in 2 to 4 weeks.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/hubspot-consulting' },
  robots: { index: true, follow: true },
};

export default function HubSpotConsulting() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-900 via-orange-800 to-amber-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-orange-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">HubSpot Consulting</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            HubSpot Consulting for Canadian Businesses
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            We set up HubSpot the way it should have been set up from day one. Portal configuration, pipeline design, workflow automation, custom reporting, and integrations — delivered by certified HubSpot consultants in 2 to 4 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Get a Free CRM Audit" destination="calendly">
              <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-100 font-semibold px-8">
                  Get a Free CRM Audit <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </TrackedCTA>
          </div>
        </div>
      </section>

      {/* The HubSpot Problem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">HubSpot Is Powerful. But Only If It Is Set Up Right.</h2>
          <p className="text-lg text-gray-600 mb-4">
            HubSpot markets itself as an easy-to-use CRM. And it is — for basic contact storage. But the moment you need custom pipelines, multi-stage workflows, lead scoring, email automation, or reporting that goes beyond defaults, HubSpot becomes complex. Fast.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Most businesses sign up for HubSpot, add a few contacts, maybe create a deal or two, and then plateau. The workflows sit empty. The reporting shows vanity metrics. The sales team goes back to spreadsheets because the CRM feels like extra work instead of a tool that helps them sell.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            That is not a HubSpot problem. That is an implementation problem. HubSpot can automate your entire sales and marketing process — if someone configures it to do so.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our HubSpot Consulting Includes</h2>
          <p className="text-lg text-gray-600 mb-8">
            We cover every aspect of HubSpot — from initial portal setup to advanced automation and reporting.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Settings, title: 'Portal Setup & Onboarding', desc: 'Account configuration, user roles, team structure, default properties, currency settings, email sending domains, and branding. Everything configured properly from day one.' },
              { icon: Layers, title: 'Pipeline Design', desc: 'Custom deal pipelines with stages that match your actual sales process. Multiple pipelines for different products, services, or sales channels. Win probability and forecasting built in.' },
              { icon: Zap, title: 'Workflow Automation', desc: 'Lead assignment, follow-up sequences, deal stage automation, internal notifications, task creation, and lead nurturing. We build the workflows that eliminate manual work.' },
              { icon: BarChart3, title: 'Custom Reporting', desc: 'Revenue dashboards, pipeline velocity reports, rep activity tracking, marketing attribution, and forecasting. Reports that show real business metrics, not HubSpot defaults.' },
              { icon: Mail, title: 'Email & Sequences', desc: 'Sales email templates, nurture sequences, re-engagement campaigns, and meeting booking flows. Every touchpoint automated and tracked.' },
              { icon: Link2, title: 'Integrations', desc: 'Connect HubSpot to your website, accounting software, phone system, email, calendar, and marketing tools. Native integrations, Zapier, and custom API connections.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <item.icon className="w-8 h-8 text-orange-600 mb-3" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How We Work</h2>
          <div className="space-y-8">
            {[
              { step: '01', title: 'HubSpot Audit', desc: 'We review your current HubSpot setup — portal settings, pipelines, workflows, data quality, and integrations. You receive a detailed report showing what is working, what is broken, and what is missing.' },
              { step: '02', title: 'Strategy & Configuration', desc: 'Based on the audit and your business goals, we design and build the optimal HubSpot configuration. Pipelines, properties, automation, templates, and dashboards — all customized to your process.' },
              { step: '03', title: 'Training & Launch', desc: 'Your team gets role-based training with their actual data. Sales reps learn deal management and sequences. Managers learn dashboards and forecasting. We monitor adoption for two weeks post-launch.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <Clock className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2 to 4 Weeks</h3>
              <p className="text-gray-600">From audit to launch. AI-accelerated delivery means you are not waiting months to see results.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <DollarSign className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">From $1,500</h3>
              <p className="text-gray-600">Fixed pricing. No hourly billing, no change orders. The investment is agreed before we start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose Emergent Logic for HubSpot</h2>
          <div className="space-y-3">
            {[
              'Certified HubSpot consultants with 10+ years of experience',
              'We also work with Salesforce and Zoho — so we give honest recommendations, not vendor-locked advice',
              'AI-powered audit identifies every issue in your portal before we touch anything',
              'Training is built into every engagement — not an add-on',
              'Fixed pricing with no surprises',
              'Based in Surrey, BC — local to Greater Vancouver, serving all of Canada',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/crm-implementation" className="block bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Implementation</p>
              <p className="text-gray-600 text-sm">Full CRM setup from scratch</p>
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
      <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get More Out of HubSpot</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free HubSpot audit. We will review your portal, identify what is working and what is not, and tell you exactly what it would take to fix it.
          </p>
          <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-100 font-semibold px-8">
              Book Free HubSpot Audit <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
