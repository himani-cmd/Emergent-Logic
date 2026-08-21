import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TrackedCTA from '@/components/TrackedCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Cloud, Layers, Zap, BarChart3, Shield, Users, Briefcase, Clock, DollarSign, Check, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Salesforce Consultant Canada',
  description: 'Process-first Salesforce consulting for Canadian teams, with selected remote engagements: CRM cleanup, workflow design, reporting, training, and documented handoff.',
  alternates: { canonical: 'https://www.emergent-logic.ca/services/salesforce-consulting' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Salesforce Consultant Canada | Emergent Logic',
    description: 'Process-first Salesforce consulting for Canadian teams: CRM cleanup, workflow design, reporting, training, and documented handoff.',
    url: 'https://www.emergent-logic.ca/services/salesforce-consulting',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: 'Do I need Salesforce, or would HubSpot or Zoho work?', a: 'The right platform depends on the operating process, data model, access controls, integrations, reporting needs, team capacity, and licensed features. Discovery compares the requirements before a platform or scope is recommended.' },
  { q: 'Which Salesforce edition do I need?', a: 'Edition fit depends on the features, API access, permissions, automation, reporting, and support requirements in the proposed operating model. We document the requirements and confirm current vendor limits before recommending an edition.' },
  { q: 'Can you migrate us to Salesforce from another CRM?', a: 'A migration scope can cover HubSpot, Pipedrive, Zoho, Monday, spreadsheets, and other exportable sources. The plan depends on available objects, fields, relationships, activities, API access, and validation requirements.' },
  { q: 'Are you a Salesforce Consulting Partner?', a: 'No. Emergent Logic is not currently presented as a Salesforce Consulting Partner. Salesforce work is scoped only when the requirements fit our documented capability, and no Salesforce endorsement is implied.' },
  { q: 'Do you do ongoing Salesforce admin work?', a: 'Follow-on Salesforce support can be considered when the request fits documented capability and access boundaries. Scope, response expectations, approvals, and commercial terms are confirmed in writing.' },
  { q: 'How do you handle custom development requests?', a: 'Custom-development requests are evaluated during discovery. The written scope identifies the implementation method, testing requirements, dependencies, exclusions, and whether a specialist is required before production access is approved.' },
  { q: 'What about PIPEDA and Canadian data residency?', a: 'Residency and compliance requirements depend on your Salesforce edition, architecture, contracts, and data. We can document technical controls such as permissions and field-level security, but legal and residency decisions should be confirmed with Salesforce and qualified privacy counsel.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.emergent-logic.ca/services/salesforce-consulting#service',
      name: 'Salesforce Consulting',
      serviceType: 'Salesforce consulting, CRM cleanup, workflow and integration design, reporting, training, and documented handoff',
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
            Salesforce Consulting for Canadian Teams
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl">
            Process-first Salesforce consulting for teams in Surrey, Greater Vancouver, across Canada, and selected remote engagements. Work begins with system fit, ownership, data, workflow, reporting, testing, and acceptance requirements before production changes.
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
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-300" /> Platform and licensed features fit-checked</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-300" /> Based in Surrey, serving Canada and selected remote engagements</div>
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
            Salesforce can be a fit when the operating model needs a more complex data structure, granular access controls, governed workflows, integrations, or reporting. Those requirements are documented before platform or edition guidance is provided.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Selected U.S.-based teams can be supported remotely when the scope, access, data, and delivery requirements fit. The broader <Link href="/services/remote-crm-implementation" className="text-blue-700 hover:underline">remote CRM implementation</Link> page explains the Canada-based delivery path and cross-platform fit review.
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
              { icon: Cloud, title: 'Configuration Planning', desc: 'Map the sales process, ownership, stages, required data, access boundaries, and licensed features before configuration work begins.' },
              { icon: Layers, title: 'Data Model & Cleanup', desc: 'Review objects, fields, relationships, duplicates, imports, and validation requirements against the agreed operating process.' },
              { icon: Zap, title: 'Workflow & Automation Design', desc: 'Define triggers, actions, exceptions, human approvals, failure handling, and acceptance checks before workflow changes are released.' },
              { icon: BarChart3, title: 'Reports & Dashboards', desc: 'Align reporting requirements, definitions, source fields, ownership, and validation checks so stakeholders can interpret the result.' },
              { icon: Briefcase, title: 'Integration Planning', desc: 'Document system boundaries, source-of-truth rules, field mappings, failure handling, and the implementation approach for approved integrations.' },
              { icon: Shield, title: 'Access & Change Controls', desc: 'Define roles, permissions, production access, testing, approval, and rollback expectations as part of the written scope.' },
              { icon: Users, title: 'Training & Handover', desc: 'Prepare role-relevant training and operating documentation for the workflows and responsibilities included in the approved scope.' },
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
              { title: 'Follow-on Salesforce Support', desc: 'After a scoped project, approved follow-on support can cover defined administration or improvement requests when the work fits documented capability and access boundaries.' },
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
              { title: 'Selecting an edition before documenting requirements', desc: 'Licensing decisions are easier to defend when required features, API access, automation, permissions, reporting, and support responsibilities are written first.' },
              { title: 'Customizing before the process is clear', desc: 'Configuration can reproduce a broken process. Map ownership, stages, exceptions, and acceptance checks before adding objects, fields, or automation.' },
              { title: 'Changing legacy automation without dependency checks', desc: 'Existing automation may depend on fields, integrations, reports, and user habits that are not obvious. Inventory dependencies and define rollback before modernization work.' },
              { title: 'Leaving administration ownership unclear', desc: 'User access, requests, reporting definitions, and workflow maintenance need named owners after launch. Include those responsibilities in the handoff.' },
              { title: 'Building reports before agreeing on definitions', desc: 'Dashboards become difficult to trust when stages, dates, ownership, and source fields mean different things to different teams. Confirm the definitions and validation checks first.' },
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
              { step: '01', title: 'Audit & Strategy', desc: 'We map the sales process, review the existing system where access is approved, examine relevant data and dependencies, and prepare prioritized findings before production changes.' },
              { step: '02', title: 'Build & Validate', desc: 'Approved Sales Cloud configuration, objects, Flow automation, reporting, integrations, and migration tasks are built in priority order. Sandbox, test-org, or controlled production methods are selected based on the Salesforce edition and agreed risk plan.' },
              { step: '03', title: 'Train & Launch', desc: 'Approved production changes follow the agreed release and acceptance plan. Training, operating notes, known limitations, and support boundaries are delivered with the handoff.' },
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
              'Implementation method selected after requirements, dependencies, and maintainability are understood',
              'Legacy automation reviewed with dependency, test, acceptance, and rollback controls',
              'Scoped delivery from discovery through documented handoff',
              'Scope and commercial terms confirmed before project or managed-service work begins',
              'Documentation and admin runbook included when defined in the written scope',
              'Based in Surrey, BC — serving Greater Vancouver, Canada, and selected remote engagements',
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Plan the Next Salesforce Step</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a 30-minute CRM consultation to discuss the operating process, current system, constraints, and the smallest useful next step. Any scope, timing, commercial terms, or access requirements are confirmed separately in writing.
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
