import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Zap, BarChart3, Globe, Settings } from 'lucide-react';

export const metadata = {
  title: 'HubSpot Consultant Vancouver | CRM Setup & Cleanup',
  description: 'HubSpot consulting in Vancouver for CRM setup, cleanup, workflows, reporting, integrations, and practical team adoption.',
  alternates: { canonical: 'https://www.emergent-logic.ca/hubspot-consultant-vancouver' },
  openGraph: {
    title: 'HubSpot Consultant Vancouver | Emergent Logic',
    description: 'HubSpot consulting in Vancouver for CRM setup, cleanup, workflows, reporting, integrations, and team adoption.',
    url: 'https://www.emergent-logic.ca/hubspot-consultant-vancouver',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const services = [
  { title: 'HubSpot CRM Setup', description: 'Complete CRM configuration: pipelines, deal stages, contact properties, email templates, and custom dashboards tailored to your Vancouver business.' },
  { title: 'Marketing Hub Automation', description: 'Lead nurturing workflows, email sequences, lead scoring, A/B testing, and campaign attribution — all automated.' },
  { title: 'Sales Hub Configuration', description: 'Meeting scheduling, email tracking, deal pipelines, quotes, and sales analytics to supercharge your team\'s productivity.' },
  { title: 'HubSpot CMS Development', description: 'Custom website themes, landing pages, and blog templates built on HubSpot CMS — fully integrated with your CRM.' },
  { title: 'Service Hub Setup', description: 'Ticketing, knowledge base, customer portal, and feedback surveys to deliver exceptional customer experience.' },
  { title: 'Migration & Integration', description: 'Seamless migration from Salesforce, Mailchimp, or any CRM. We integrate HubSpot with your entire tech stack.' },
];

const hubs = [
  { icon: Zap, name: 'Marketing Hub', desc: 'Automation & nurturing' },
  { icon: BarChart3, name: 'Sales Hub', desc: 'Pipeline & forecasting' },
  { icon: Globe, name: 'CMS Hub', desc: 'Websites & landing pages' },
  { icon: Settings, name: 'Operations Hub', desc: 'Data sync & workflows' },
];

const reasons = [
  'Local presence — we serve Metro Vancouver from our Surrey, BC office',
  'All-in-one expertise: CRM, Marketing Hub, Sales Hub, CMS, and Service Hub',
  'AI-accelerated delivery: shorter implementation cycles without skipping process design',
  'We build revenue systems, not just databases',
  'Practical scope and transparent estimates before work starts',
  'Ongoing support and optimization after launch',
];

const leakSignals = [
  {
    title: 'Lifecycle stages are unclear',
    description: 'Leads, subscribers, MQLs, SQLs, opportunities, and customers should mean something specific. If each person on the team interprets them differently, reporting becomes unreliable.'
  },
  {
    title: 'Website leads do not create clear next steps',
    description: 'A form submission should capture source, request type, owner, priority, and next follow-up. If that information stays in email, the CRM is already behind.'
  },
  {
    title: 'Workflows exist, but nobody fully trusts them',
    description: 'Many HubSpot portals have old workflows still running, duplicated rules, missing suppression logic, or automation that was built around a process the team no longer follows.'
  },
  {
    title: 'Reports show activity, not useful decisions',
    description: 'Dashboards should answer what is stuck, who owns it, what needs follow-up, and which channel is producing qualified pipeline. Otherwise the CRM becomes a data display, not an operating system.'
  },
];

const faqs = [
  { q: 'How much does HubSpot implementation cost in Vancouver?', a: 'HubSpot CRM is free to start, but a useful implementation depends on the scope: pipelines, properties, workflows, reporting, migration, integrations, and training. We review the setup first, then give a clear estimate before work starts.' },
  { q: 'What HubSpot Hubs do you implement?', a: 'We implement all HubSpot Hubs: CRM, Sales Hub, Marketing Hub, Service Hub, CMS Hub, and Operations Hub. Most Vancouver businesses start with CRM + Marketing Hub.' },
  { q: 'Can you migrate us from Salesforce to HubSpot?', a: 'Yes. We handle Salesforce-to-HubSpot migrations regularly. We clean, map, and migrate your data with zero loss — and train your team on the new platform.' },
];

export default function HubspotConsultantVancouver() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="overflow-hidden pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'HubSpot Consultant Vancouver', href: '/hubspot-consultant-vancouver' },
          ]} />
          <div className="flex items-center gap-2 text-violet-300 mb-4"><MapPin className="w-5 h-5 flex-shrink-0" /><span>Vancouver & Metro Vancouver</span></div>
          <h1 className="max-w-4xl break-words text-4xl font-bold leading-tight tracking-tight text-white mb-4 md:text-5xl lg:text-6xl">
            HubSpot consultant in Vancouver for CRM setup and cleanup
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/75 mb-8 md:text-xl">
            Emergent Logic helps Vancouver and Metro Vancouver teams set up, clean up, and improve HubSpot. We connect pipelines, workflows, reporting, integrations, and lead follow-up into a system the team can use every day.
          </p>
          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"><Button size="lg" className="w-full bg-white text-violet-900 hover:bg-violet-100 sm:w-auto">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></a>
            <Link href="/marketing-automation" className="w-full sm:w-auto"><Button size="lg" className="w-full border border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto">Marketing Automation Services</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">HubSpot services for Vancouver businesses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{service.title}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{service.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Vancouver businesses choose us for HubSpot</h2>
          <ul className="space-y-4 max-w-3xl mb-12">
            {reasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-violet-500 flex-shrink-0" /><span className="text-gray-700">{reason}</span></li>
            ))}
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {hubs.map((hub, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm border text-center">
                <hub.icon className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{hub.name}</div>
                <div className="text-sm text-gray-500">{hub.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-10">
            <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">HubSpot cleanup signals</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When HubSpot looks set up, but still leaks revenue</h2>
            <p className="text-lg text-gray-600 mb-4">
              Most Vancouver teams do not need HubSpot rebuilt from scratch. They need the messy middle cleaned up: lifecycle rules, lead ownership, workflow logic, source tracking, and reporting. That is where the lost follow-up usually hides.
            </p>
            <p className="text-lg text-gray-600">
              Before we add more automation, we look for the points where the system stops giving the team a clear next step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {leakSignals.map((item, i) => (
              <Card key={i} className="border border-violet-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Not sure if HubSpot is right?</h2>
          <p className="text-gray-600 mb-4">Start here: <Link href="/blog/hubspot-consultant-vancouver" className="text-violet-600 hover:underline">Why Businesses Search for a HubSpot Consultant in Vancouver</Link> — what to look for and how to avoid a messy setup.</p>
          <p className="text-gray-600 mb-4">Read our comparison: <Link href="/blog/hubspot-vs-salesforce-canada" className="text-violet-600 hover:underline">HubSpot vs Salesforce: Which CRM is Right for Your Canadian Business?</Link></p>
          <p className="text-gray-600 mb-4">Learn how automation transforms your pipeline: <Link href="/blog/what-is-marketing-automation-small-business" className="text-violet-600 hover:underline">What is Marketing Automation and Does Your Business Need It?</Link></p>
          <p className="text-gray-600">For the full scope, pricing, and timeline of how we work, see our <Link href="/services/hubspot-consulting" className="text-violet-600 hover:underline">HubSpot consulting service page</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">HubSpot Consulting FAQ — Vancouver, BC</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq, i) => (<Card key={i} className="border-0 shadow-lg"><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{faq.a}</p></CardContent></Card>))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started with HubSpot?</h2>
          <p className="text-xl text-white/80 mb-8">Book a free 30-minute strategy call. We will map out your HubSpot implementation and show you exactly what is possible.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">Book a Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
