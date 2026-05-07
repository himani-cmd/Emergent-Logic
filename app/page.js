import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight, CheckCircle, XCircle, Clock, Award, MapPin,
  ChevronDown, Star, Database, Zap, Link2, Wrench,
  AlertTriangle, Search, Settings, TrendingUp, Sparkles,
  ShieldCheck, DollarSign, Users, Rocket, BarChart3, Globe
} from 'lucide-react';

// ─────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-6 bg-violet-500/20 text-violet-200 border-violet-400/30 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Accelerated CRM Delivery
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            CRM Implementation in 2 Weeks.
            <span className="block bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Not 6 Months.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl">
            We help Greater Vancouver businesses implement HubSpot, Salesforce, and CRM systems faster using AI-accelerated delivery. Fixed pricing. Senior expertise only. Results from week one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <TrackedCTA ctaName="Book a Free Strategy Call" destination="calendly">
              <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 px-8 py-6 text-lg font-semibold">
                  Book a Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </TrackedCTA>
            <TrackedCTA ctaName="Get a Free CRM Audit" destination="/ai-crm-audit">
              <Link href="/ai-crm-audit">
                <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                  Get a Free CRM Audit
                </Button>
              </Link>
            </TrackedCTA>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Certifications', value: '15+', icon: Award },
              { label: 'Salesforce Certified', value: '6x', icon: Star },
              { label: 'Years Experience', value: '10+', icon: Clock },
              { label: 'Greater Vancouver, BC', value: '', icon: MapPin, isLocation: true },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-violet-400" />
                </div>
                {stat.isLocation ? (
                  <>
                    <div className="text-xl font-bold text-white">Greater Vancouver</div>
                    <div className="text-white/60 text-sm">BC, Canada</div>
                  </>
                ) : (
                  <>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PROBLEM SECTION
// ─────────────────────────────────────────────
function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-red-50 text-red-700 border-red-200">The Problem</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Most CRM Implementations Fail. Here Is Why.
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            You bought a CRM. Maybe HubSpot, maybe Salesforce, maybe Zoho. It was supposed to organize your sales, automate your follow-ups, and give you visibility into your pipeline. Instead, your team is still working from spreadsheets and your CRM is collecting dust.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: DollarSign,
                title: 'Expensive Agencies, Slow Delivery',
                description: 'Traditional CRM agencies charge $50,000 to $150,000 and take 3 to 6 months. For most Canadian SMBs, that timeline kills momentum. By the time the CRM is "ready," your team has already found workarounds and nobody wants to switch.',
                color: 'bg-red-50 border-red-200',
                iconColor: 'text-red-600',
              },
              {
                icon: AlertTriangle,
                title: 'Your Team Does Not Use It',
                description: 'The number one reason CRM implementations fail is adoption. Your CRM was configured by someone who understood the software but did not understand your sales process. The result is a system that works in theory but not in practice. Reps enter data reluctantly or not at all.',
                color: 'bg-orange-50 border-orange-200',
                iconColor: 'text-orange-600',
              },
              {
                icon: Database,
                title: 'Messy Data, Broken Workflows',
                description: 'Duplicate contacts. Leads assigned to nobody. Workflows that trigger at the wrong time or not at all. Reports that show numbers nobody trusts. Your CRM has become a liability instead of an asset, and cleaning it up feels overwhelming.',
                color: 'bg-yellow-50 border-yellow-200',
                iconColor: 'text-yellow-600',
              },
              {
                icon: BarChart3,
                title: 'Zero Pipeline Visibility',
                description: 'You cannot forecast revenue because your pipeline data is unreliable. Your sales manager cannot tell you which deals are real and which are stale. Marketing cannot prove ROI because lead attribution is broken. Every Monday meeting starts with the same question: "What is actually in the pipeline?"',
                color: 'bg-purple-50 border-purple-200',
                iconColor: 'text-purple-600',
              },
            ].map((item, i) => (
              <div key={i} className={`${item.color} border-2 rounded-2xl p-6`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border-l-4 border-violet-500 rounded-r-xl p-6">
            <p className="text-gray-700 text-lg">
              <strong>The real cost is not the CRM subscription.</strong> It is the lost leads, the missed follow-ups, the deals that slipped through cracks, and the hours your team wastes on manual processes every single week. A CRM that does not work costs more than no CRM at all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SOLUTION SECTION (AI POSITIONING)
// ─────────────────────────────────────────────
function SolutionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-violet-100 text-violet-700">Our Approach</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI-Accelerated CRM Implementation That Actually Works
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We do not follow the traditional consulting playbook of spending months on discovery, requirements gathering, and committee meetings. We use AI to compress weeks of work into days, so your CRM is generating value from the first week — not the first quarter.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Search,
                title: 'AI-Powered Audits',
                description: 'We analyze your existing CRM data, workflows, and pipeline structure using AI tools that identify problems in hours — not weeks. Duplicate contacts, broken automations, unused fields, misconfigured pipelines — we find everything before writing a single line of configuration.',
              },
              {
                icon: Rocket,
                title: 'Faster Delivery (2 Weeks, Not 6 Months)',
                description: 'Our AI-accelerated methodology compresses traditional CRM timelines by 70 to 80 percent. We use structured templates, automation-first design, and AI-assisted configuration to deliver in 2 to 4 weeks what traditional agencies take 3 to 6 months to complete.',
              },
              {
                icon: DollarSign,
                title: 'Fixed Pricing, No Surprises',
                description: 'Every engagement comes with a fixed price agreed before we start. No hourly billing that spirals. No "change orders" that double the budget. You know exactly what you are paying and exactly what you are getting.',
              },
              {
                icon: ShieldCheck,
                title: 'Senior Expertise Only',
                description: 'Your project is handled by senior consultants with 10+ years of CRM experience and 15+ certifications across Salesforce, HubSpot, and Zoho. We do not sell you a senior and hand you off to a junior. The person on the strategy call is the person configuring your CRM.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SERVICES OVERVIEW SECTION
// ─────────────────────────────────────────────
function ServicesSection() {
  const services = [
    {
      icon: Database,
      title: 'CRM Implementation',
      description: 'Full CRM setup from scratch — pipelines, lifecycle stages, automations, dashboards, data migration, and team training. HubSpot, Salesforce, or Zoho configured for your specific sales process. Delivered in 2 to 4 weeks.',
      href: '/services/crm-implementation',
      price: 'From $1,500',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Settings,
      title: 'HubSpot Consulting',
      description: 'Expert HubSpot onboarding, portal configuration, workflow design, custom reporting, and ongoing optimization. We set up HubSpot the way it should have been set up from day one.',
      href: '/services/hubspot-consulting',
      price: 'From $1,500',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Wrench,
      title: 'CRM Cleanup & Recovery',
      description: 'Your CRM is a mess and you know it. Duplicate contacts, broken workflows, unreliable reports, unused fields. We audit, clean, restructure, and rebuild — so your CRM works like it should.',
      href: '/services/crm-cleanup',
      price: 'From $1,000',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Lead scoring, email nurture sequences, campaign attribution, and automated follow-ups. We build the automation engine that converts leads into customers while your team focuses on closing.',
      microcopy: 'Full service page coming soon — book a call to design your automation system.',
      href: 'https://calendly.com/himani-emergentlogics/30min',
      price: 'From $1,500',
      color: 'from-violet-500 to-purple-500',
      external: true,
    },
    {
      icon: Link2,
      title: 'CRM Integration',
      description: 'Connect your CRM to every tool your business uses — accounting, email, website, phone, marketing platforms. Zapier, Make, native APIs, and custom integrations that keep your data flowing.',
      microcopy: 'Custom integrations for your tools — talk to us to map your system.',
      href: 'https://calendly.com/himani-emergentlogics/30min',
      price: 'From $500',
      color: 'from-pink-500 to-rose-500',
      external: true,
    },
    {
      icon: TrendingUp,
      title: 'Salesforce Consulting',
      description: 'Salesforce Sales Cloud configuration, custom objects, advanced automation, AppExchange integration, and admin training. Enterprise-grade CRM for businesses that need depth and scale.',
      microcopy: 'Salesforce experts available — book a strategy call to get started.',
      href: 'https://calendly.com/himani-emergentlogics/30min',
      price: 'From $3,500',
      color: 'from-blue-600 to-indigo-600',
      external: true,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700">What We Do</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CRM & Automation Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to turn your CRM from a data entry chore into a revenue-generating machine. Every service includes strategy, implementation, training, and support.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const CardInner = (
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border bg-white cursor-pointer">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-violet-600 transition-colors">{service.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  {service.microcopy && (
                    <p className="text-violet-600 text-sm mt-3 italic">{service.microcopy}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-violet-600 font-semibold">{service.price}</span>
                    <span className="text-violet-600 font-medium inline-flex items-center text-sm">
                      {service.external ? 'Get a Free Strategy Call' : 'Learn more'} <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
            return service.external ? (
              <a key={i} href={service.href} target="_blank" rel="noopener noreferrer">{CardInner}</a>
            ) : (
              <Link key={i} href={service.href}>{CardInner}</Link>
            );
          })}
        </div>

        {/* Supporting Service — Lead Capture Websites */}
        <div className="max-w-4xl mx-auto mt-12">
          <TrackedCTA ctaName="Lead Capture Websites" destination="calendly">
            <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-8 hover:border-violet-300 hover:bg-violet-50/50 transition-all cursor-pointer group">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-slate-700 flex items-center justify-center flex-shrink-0 group-hover:from-violet-500 group-hover:to-indigo-600 transition-all">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-700 transition-colors">Lead Capture Websites</h3>
                      <Badge variant="secondary" className="text-xs">Supporting Service</Badge>
                    </div>
                    <p className="text-gray-600 mb-2">Conversion-focused websites and landing pages designed to capture inquiries properly, connect with your CRM, and support faster follow-up.</p>
                    <p className="text-gray-500 text-sm">For businesses that need more than a brochure site — we build web experiences that feed the systems behind your sales process. CRM-connected forms, lead routing, booking flows, and conversion tracking included.</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <span className="text-violet-600 font-semibold block">From $2,500</span>
                    <span className="text-violet-600 font-medium inline-flex items-center text-sm mt-1">
                      Talk to us <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </TrackedCTA>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// COMPARISON TABLE
// ─────────────────────────────────────────────
function ComparisonSection() {
  const rows = [
    { category: 'Cost', freelancer: '$2K – $5K (but often repeated)', agency: '$50K – $150K', emergent: '$1.5K – $25K (fixed)' },
    { category: 'Timeline', freelancer: '2 – 8 weeks (variable)', agency: '3 – 6 months', emergent: '2 – 4 weeks' },
    { category: 'Expertise', freelancer: 'Single platform', agency: 'Team with mixed experience', emergent: 'Senior consultants, 15+ certifications' },
    { category: 'Strategy', freelancer: 'Task execution only', agency: 'Included but slow', emergent: 'AI-powered audit + strategy first' },
    { category: 'Training', freelancer: 'Usually not included', agency: 'Add-on cost', emergent: 'Built into every engagement' },
    { category: 'Accountability', freelancer: 'Moves on to next gig', agency: 'Account manager (not the builder)', emergent: 'Same person: strategy to delivery' },
    { category: 'Pricing Model', freelancer: 'Hourly or per-task', agency: 'Hourly + change orders', emergent: 'Fixed price, agreed upfront' },
    { category: 'AI-Powered', freelancer: 'No', agency: 'Rarely', emergent: 'Yes — audits, config, delivery' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700">Why Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Freelancer vs. Agency vs. Emergent Logic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You have three options for CRM help. Here is how they compare — honestly.
          </p>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left bg-gray-100 font-semibold text-gray-700"></th>
                <th className="px-6 py-4 text-center bg-gray-100 font-semibold text-gray-700">Freelancer</th>
                <th className="px-6 py-4 text-center bg-gray-100 font-semibold text-gray-700">Traditional Agency</th>
                <th className="px-6 py-4 text-center bg-violet-600 text-white font-semibold">Emergent Logic</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="px-6 py-4 font-medium text-gray-900">{row.category}</td>
                  <td className="px-6 py-4 text-center text-gray-600 text-sm">{row.freelancer}</td>
                  <td className="px-6 py-4 text-center text-gray-600 text-sm">{row.agency}</td>
                  <td className="px-6 py-4 text-center font-medium text-violet-700 bg-violet-50 text-sm">{row.emergent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-gray-500 mt-6 max-w-2xl mx-auto">
          Read our full analysis: <Link href="/blog/crm-freelancer-vs-consulting-firm" className="text-violet-600 hover:underline font-medium">CRM Freelancer vs. Consulting Firm — What to Know Before Hiring</Link>
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PROCESS SECTION (3 STEPS)
// ─────────────────────────────────────────────
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Audit',
      subtitle: 'Week 1',
      description: 'We start by understanding your business — not your CRM. We map your sales process, identify bottlenecks, audit your existing data, and assess your tech stack. Our AI-powered audit identifies every problem in your current setup: duplicate records, broken workflows, misconfigured pipelines, unused features, and missing automations. You receive a detailed report with prioritized recommendations and a clear implementation plan. No guessing. No assumptions.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      title: 'Build',
      subtitle: 'Week 2–3',
      description: 'We configure your CRM to match your actual sales process — not a generic template. Pipelines, lifecycle stages, custom properties, automation workflows, email templates, lead scoring, dashboards, and integrations. Everything built with an automation-first philosophy: if a task can be automated, we automate it. Data migration is handled carefully with deduplication and validation. We do not just move data — we clean it on the way in.',
      color: 'from-violet-500 to-purple-500',
    },
    {
      number: '03',
      title: 'Launch',
      subtitle: 'Week 3–4',
      description: 'Your team gets hands-on training tailored to their roles — not a generic webinar. Sales reps learn the workflows that affect their daily work. Managers learn the dashboards and reports that drive decisions. We launch with your team, monitor adoption in the first two weeks, and make adjustments based on real usage data. Post-launch support is included in every engagement because we know the first 30 days determine whether your CRM sticks.',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700">How We Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Three Steps. Two to Four Weeks. Done.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every engagement follows the same structured process — because repeatable processes produce reliable results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  <Badge variant="secondary" className="text-xs">{step.subtitle}</Badge>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// LOCAL TRUST SECTION
// ─────────────────────────────────────────────
function LocalTrustSection() {
  const locations = [
    { city: 'Surrey, BC', href: '/salesforce-consultant-surrey-bc' },
    { city: 'Vancouver, BC', href: '/hubspot-consultant-vancouver' },
    { city: 'Abbotsford, BC', href: '/crm-consultant-abbotsford' },
    { city: 'Langley, BC', href: '/crm-consultant-langley' },
    { city: 'Coquitlam, BC', href: '/crm-consultant-coquitlam' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-violet-100 text-violet-700">
            <MapPin className="w-4 h-4 mr-1" /> Local Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Based in Surrey, BC. Serving All of Canada.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Emergent Logic is headquartered in Surrey, British Columbia. We work with businesses across Greater Vancouver — Surrey, Abbotsford, Langley, Coquitlam, Burnaby, Richmond, and beyond — as well as clients across Canada and North America. Local when you need us. Remote when it makes sense.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {locations.map((loc, i) => (
              <Link key={i} href={loc.href}>
                <Card className="hover:shadow-lg hover:border-violet-200 transition-all cursor-pointer text-center">
                  <CardHeader className="py-4">
                    <div className="flex items-center justify-center gap-1 text-violet-600 mb-1">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <CardTitle className="text-sm">{loc.city}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            Call us at <a href="tel:+17786526271" className="text-violet-600 hover:underline font-medium">778-652-6271</a> or email <a href="mailto:info@emergent-logic.ca" className="text-violet-600 hover:underline font-medium">info@emergent-logic.ca</a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FINAL CTA SECTION
// ─────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-violet-600 to-indigo-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Stop Wasting Money on a CRM That Does Not Work.
        </h2>
        <p className="text-xl text-white/80 mb-4 max-w-3xl mx-auto">
          Book a free 30-minute CRM strategy call. We will assess your current setup, identify the three biggest problems, and tell you exactly what it would take to fix them. No obligation. No sales pressure. No pitch deck. Just a straight conversation about your business.
        </p>
        <p className="text-white/60 mb-10 max-w-2xl mx-auto">
          If we are not the right fit, we will tell you. If a freelancer would serve you better, we will say so. We would rather give you honest advice than win a project that is not right for us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <TrackedCTA ctaName="Book a Free Strategy Call" destination="calendly">
            <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 px-8 py-6 text-lg font-semibold">
                Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </TrackedCTA>
          <TrackedCTA ctaName="Get a Free CRM Audit" destination="/ai-crm-audit">
            <Link href="/ai-crm-audit">
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                Get a Free CRM Audit
              </Button>
            </Link>
          </TrackedCTA>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// HOMEPAGE
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ComparisonSection />
      <ProcessSection />
      <LocalTrustSection />
      <FinalCTASection />
      <Footer />
      <CookieConsent />
    </main>
  );
}
