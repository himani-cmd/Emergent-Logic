import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Cloud, Layers, Zap, BarChart3, Shield, Code2, Users, Briefcase, Clock, DollarSign, Check, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Salesforce Consultant Canada & US',
  description: 'Salesforce consulting for Canada and US teams: Sales Cloud setup, Flow automation, reports, cleanup, training, and admin support.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/salesforce-consulting' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Salesforce Consultant Canada & US | Emergent Logic',
    description: 'Salesforce consulting for Canadian and US small businesses: Sales Cloud setup, Flow automation, reporting, cleanup, training, and managed admin support.',
    url: 'https://www.emergent-logic.ca/services/salesforce-consulting',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: 'Do I need Salesforce, or would HubSpot or Zoho work?', a: 'For many SMBs under 25 reps, HubSpot or Zoho can provide faster time-to-value at a lower cost. Salesforce is usually the right call when you need deep customization, large-team governance, complex territory management, or compliance-heavy reporting. We help you make the call honestly during the discovery audit.' },
  { q: 'Which Salesforce edition do I need?', a: 'Many SMB sales teams are well served by Sales Cloud Professional. Enterprise becomes more relevant when you need advanced approval processes, territory management, custom permission sets, or higher API limits. We walk through the trade-offs before you sign anything.' },
  { q: 'Can you migrate us to Salesforce from another CRM?', a: 'A migration scope can cover HubSpot, Pipedrive, Zoho, Monday, spreadsheets, and other exportable sources. The plan depends on available objects, fields, relationships, activities, API access, and validation requirements.' },
  { q: 'Are you a Salesforce Consulting Partner?', a: 'No. Emergent Logic is not currently presented as a Salesforce Consulting Partner. Salesforce work is scoped only when the requirements fit our documented capability, and no Salesforce endorsement is implied.' },
  { q: 'Do you do ongoing Salesforce admin work?', a: 'Ongoing Salesforce administration can be considered when the requested work fits the documented capability and access boundaries. Scope, response expectations, approvals, and commercial terms are confirmed in writing.' },
  { q: 'How do you handle Apex code in projects?', a: 'We default to declarative tools such as Flow, validation rules, and formulas, and only write Apex or Lightning Web Components when business requirements truly need them. Code is reviewed, tested, and documented like any production deployment.' },
  { q: 'What about PIPEDA and Canadian data residency?', a: 'Residency and compliance requirements depend on your Salesforce edition, architecture, contracts, and data. We can document technical controls such as permissions and field-level security, but legal and residency decisions should be confirmed with Salesforce and qualified privacy counsel.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/services/salesforce-consulting#service',
      name: 'Salesforce Consulting',
      serviceType: 'Salesforce consulting, Sales Cloud setup, Salesforce Flow automation, CRM cleanup, and managed Salesforce admin support',
      provider: { '@id': 'https://www.emergent-logic.ca/#organization' },
      url: 'https://www.emergent-logic.ca/services/salesforce-consulting',
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'AdministrativeArea', name: 'British Columbia' },
        { '@type': 'City', name: 'Surrey' },
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'City', name: 'Burnaby' },
        { '@type': 'City', name: 'Langley' },
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        price: '3500',
        url: 'https://www.emergent-logic.ca/services/salesforce-consulting',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.emergent-logic.ca/services/salesforce-consulting#faq',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
  ],
};

export default function SalesforceConsulting() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="overflow-hidden pt-32 pb-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-sky-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-blue-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">Salesforce Consulting</span>
          </div>
          <h1 className="break-words text-4xl font-bold text-white mb-6 leading-tight md:text-5xl lg:text-6xl">
            Salesforce Consultant for Canadian and US Businesses
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            Sales Cloud configuration, custom objects, Salesforce Flow automation, AppExchange integration, and admin training for teams in Surrey, Vancouver, across Canada, and the US. Cross-platform fit review, written scope, testing, and documented handoff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedCTA ctaName="Book a CRM Consultation" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white text-blue-900 hover:bg-blue-100 font-semibold px-8 sm:w-auto">
                  Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </TrackedCTA>
            <Link href="/ai-crm-audit" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 sm:w-auto">
                Try Our AI CRM Audit
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-300" /> Scope-based delivery plan</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-300" /> Written proposal after discovery</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-300" /> Sales Cloud-first; other Clouds fit-checked</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-300" /> Based in Surrey, serving Canada and the US remotely</div>
          </div>
        </div>
      </section>

      {/* When Salesforce */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">When Salesforce Is the Right CRM</h2>
          <p className="text-lg text-gray-600 mb-4">
            Salesforce is a serious platform for complex sales motions. It can also add cost and administration when the process does not need that depth. Discovery compares Salesforce with supported alternatives and discloses relevant partner relationships before a recommendation is made.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Salesforce is usually the right choice when you need deep customization (custom objects, complex relationships, granular permissions), when you have a large or distributed sales team that needs strict process governance, when you sell into regulated industries with heavy reporting requirements, or when you need to scale into thousands of users and complex territory management.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            We also support US-based teams remotely. The work is the same: clean data, clear sales stages, reliable lead routing, Flow automation that is easy to maintain, and reporting that leadership can trust. Local presence matters for Surrey and Vancouver clients, but Salesforce delivery does not need to be limited by geography.
          </p>
          <p className="text-lg text-gray-600">
            It may not be the right choice when the sales process is straightforward, the team is small, and platform depth would add unnecessary administration. In those cases HubSpot or Zoho may be a better fit. Discovery includes that platform-fit discussion before a scope is proposed.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            If you are comparing local options, our <Link href="/salesforce-consultant-surrey-bc" className="text-blue-700 hover:underline">Salesforce consultant Surrey, BC</Link> page explains how we support nearby teams with implementation, cleanup, and training.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Salesforce Consulting Includes</h2>
          <p className="text-lg text-gray-600 mb-8">
            A Salesforce scope can cover configuration, data, automation, reporting, integration, and training where the requirements fit documented capability. Deliverables and exclusions are written before work starts.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Cloud, title: 'Sales Cloud Setup', desc: 'New org configuration, profiles, roles, sharing rules, page layouts, record types, and standard object customization. Built around your sales process &mdash; not Salesforce defaults.' },
              { icon: Layers, title: 'Custom Objects & Schema', desc: 'Custom objects, lookup and master-detail relationships, validation rules, and formula fields. Designed against actual business requirements, not theoretical edge cases.' },
              { icon: Zap, title: 'Flow & Automation', desc: 'Modern Salesforce Flow automation: record-triggered flows, approval processes, scheduled flows, and screen flows for guided processes. Built to be maintainable, not clever.' },
              { icon: BarChart3, title: 'Reports & Dashboards', desc: 'Custom report types, complex reports with cross-object filters, dynamic dashboards, and Einstein Analytics where it adds real value. Reports your team and your CFO can both trust.' },
              { icon: Briefcase, title: 'AppExchange Integration', desc: 'Selection, installation, and configuration of AppExchange packages. We help you choose the right tools and avoid the bloat of installing every shiny app you see.' },
              { icon: Code2, title: 'Apex & LWC (When Needed)', desc: 'Custom Apex triggers, classes, and Lightning Web Components when declarative tools are not enough. We default to clicks-not-code, and only write code when business requirements actually demand it.' },
              { icon: Shield, title: 'Security & Permissions', desc: 'Permission sets, profiles, sharing model, field-level security, and enterprise-grade access control. Especially important for regulated industries and PIPEDA-compliant Canadian deployments.' },
              { icon: Users, title: 'Admin Training & Handover', desc: 'Role-based training for sales reps, managers, and admins. We also leave a documented admin runbook so your in-house Salesforce admin can take over confidently.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Engagement Types</h2>
          <p className="text-lg text-gray-600 mb-8">
            Salesforce support is available in three modes, depending on the current state of the system.
          </p>
          <div className="space-y-6">
            {[
              { title: 'New Salesforce Implementation', desc: 'For a new Salesforce org, the scope can include process mapping, configuration, data migration, Sales Cloud setup, training, and documented handoff. Timing is confirmed after dependencies, integrations, and testing requirements are understood.' },
              { title: 'Salesforce Optimization & Cleanup', desc: 'For an existing org with adoption, reporting, or legacy-automation issues, the scope can cover audit, restructuring, Flow modernization, and reporting. Timing is confirmed after discovery.' },
              { title: 'Managed Salesforce Admin', desc: 'For teams without a full-time Salesforce administrator, a monthly retainer can provide defined admin capacity for user management, approved requests, report building, automation tuning, and scheduled health checks.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Salesforce Mistakes</h2>
          <p className="text-lg text-gray-600 mb-8">
            Most struggling Salesforce orgs share the same root causes.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Buying Enterprise when Professional would do', desc: 'Salesforce sales teams are good at upselling. Many SMBs end up paying for Enterprise features they do not use because nobody walked them through the trade-offs. We give you the honest read on which edition fits.' },
              { title: 'Letting consultants over-customize', desc: 'Some agencies are paid by the complexity. We are not. We use Salesforce out-of-the-box features wherever they fit, and add customization only where business requirements actually demand it. Cleaner orgs are cheaper to maintain.' },
              { title: 'Stuck on legacy automation', desc: 'Many orgs still run on Workflow Rules and Process Builder, both of which Salesforce is retiring. If your automation lives in legacy tools, you have a maintenance time bomb. We migrate to Flow and document the new architecture.' },
              { title: 'No admin coverage after launch', desc: 'Salesforce needs ongoing care &mdash; permission updates, new requests, automation tuning, and fixes when something breaks. Without admin coverage, the org slowly drifts into disrepair. We either train your team or provide it as a managed service.' },
              { title: 'Reporting that nobody trusts', desc: 'Salesforce reporting is powerful but rewards careful setup. Bad custom report types, ungoverned dashboards, and conflicting metrics make leadership lose faith fast. We rebuild reporting on a clean foundation when needed.' },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 mb-8">
            Three phases. Same disciplined methodology we use across HubSpot and Zoho, applied to Salesforce.
          </p>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Audit & Strategy (Week 1-2)', desc: 'We map your sales process, audit your existing org (if you have one), review your data, and identify the highest-leverage changes. You receive a written audit and recommendation document with prioritized work and a clear configuration plan before we touch the org.' },
              { step: '02', title: 'Build & Validate', desc: 'Approved Sales Cloud configuration, objects, Flow automation, reporting, integrations, and migration tasks are built in priority order. Sandbox, test-org, or controlled production methods are selected based on the Salesforce edition and agreed risk plan.' },
              { step: '03', title: 'Train & Launch (Week 6-8)', desc: 'Role-based training for reps, managers, and admins, using your real org and real data. We launch together, monitor adoption for the first two weeks, and adjust based on what we see. Documentation is delivered with the handover.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
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

      {/* Scope */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scope and Delivery Plan</h2>
          <p className="text-lg text-gray-600 mb-8">
            Salesforce scope varies substantially with data, objects, automation, integrations, and governance. The proposal documents price, dependencies, and acceptance criteria before work starts.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <Clock className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Timing After Discovery</h3>
              <p className="text-gray-600">The delivery plan is confirmed after objects, data, automation, integrations, governance, stakeholder availability, testing, and acceptance criteria are understood.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <DollarSign className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Written Commercial Proposal</h3>
              <p className="text-gray-600">The proposal confirms the objects, workflows, migration, integrations, support boundaries, exclusions, acceptance checks, and commercial terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Emergent Logic for Salesforce</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our platform recommendation is based on the operating requirements discussed during discovery. No Salesforce partnership or endorsement is implied.
          </p>
          <div className="space-y-3">
            {[
              'Direct, cross-platform delivery with written scope, testing, and acceptance criteria',
              'Cross-platform fit review across Salesforce, HubSpot, and Zoho with relevant partner relationships disclosed',
              'Clicks-before-code mindset: we use declarative tools wherever they fit, and write Apex only when needed',
              'Modern automation: legacy Workflow Rules and Process Builder can be mapped to Flow where the scope supports it',
              'Direct delivery-team access from discovery through documented handoff',
              'Scope and commercial terms confirmed before project or managed-service work begins',
              'Documentation and admin runbook included when defined in the written scope',
              'Based in Surrey, BC — serving Greater Vancouver, Canada, and US-based businesses remotely',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              ...faqItems,
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services and Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/crm-implementation" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">CRM Implementation</p>
              <p className="text-gray-600 text-sm">HubSpot, Salesforce, or Zoho fit assessed before scope</p>
            </Link>
            <Link href="/services/hubspot-consulting" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">HubSpot Consulting</p>
              <p className="text-gray-600 text-sm">Often a better fit for smaller sales teams</p>
            </Link>
            <Link href="/blog/salesforce-admin-support-small-business" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Salesforce Admin Support</p>
              <p className="text-gray-600 text-sm">What small businesses should outsource first</p>
            </Link>
            <Link href="/salesforce-admin-support-canada-us" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Remote Salesforce Admin Support</p>
              <p className="text-gray-600 text-sm">Ongoing admin, cleanup, reports, Flow updates, and support for Canada and the US</p>
            </Link>
            <Link href="/case-studies/salesforce-cleanup-before-automation" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Salesforce Cleanup Implementation Pattern</p>
              <p className="text-gray-600 text-sm">A cleanup-first implementation pattern before building more Flow automation</p>
            </Link>
            <Link href="/salesforce-consultant-surrey-bc" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Local Salesforce Consultant</p>
              <p className="text-gray-600 text-sm">Salesforce consulting for Surrey and Greater Vancouver</p>
            </Link>
            <Link href="/blog/salesforce-consultant-small-business" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Salesforce for Small Business</p>
              <p className="text-gray-600 text-sm">When a small team should hire a Salesforce consultant</p>
            </Link>
            <Link href="/contact" className="block bg-gray-50 border rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-violet-600">Contact Emergent Logic</p>
              <p className="text-gray-600 text-sm">Prefer email? Send us a message about your Salesforce org</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get a Salesforce Org That Earns Its Cost</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We will look at your sales motion, your current org if you have one, and tell you honestly whether Salesforce is the right call &mdash; and what a proper engagement would look like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTA ctaName="Book a CRM Consultation - Salesforce Footer" destination="calendly">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100 font-semibold px-8">
                  Book a CRM Consultation <ArrowRight className="w-5 h-5 ml-2" />
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
