import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import CrmRoiScenarioCalculator from '@/components/CrmRoiScenarioCalculator';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'CRM ROI Scenario Calculator & Business Case',
  description: 'Build a CRM business-case scenario from your own lead, conversion, administration, software, and implementation assumptions.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/crm-roi-calculator-business-case-2026' },
  openGraph: {
    title: 'CRM ROI Scenario Calculator & Business Case | Emergent Logic',
    description: 'Use your own verified inputs to model CRM costs, potential benefits, ROI, and payback without invented benchmarks.',
    url: 'https://www.emergent-logic.ca/blog/crm-roi-calculator-business-case-2026',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const businessCaseSteps = [
  {
    title: 'Establish a measured baseline',
    body: 'Use a defined period for qualified leads, conversion, response time, CRM administration effort, software spend, and support cost. Document where each number came from.',
  },
  {
    title: 'Separate evidence from assumptions',
    body: 'Current performance should come from CRM, finance, payroll, or time-tracking data. Target conversion and time savings are scenario assumptions until measured after implementation.',
  },
  {
    title: 'Avoid double counting',
    body: 'A conversion improvement and recovered sales capacity may describe the same underlying benefit. Count each economic effect once and state what is excluded.',
  },
  {
    title: 'Define the measurement window',
    body: 'Specify when the baseline ends, when the new process begins, how adoption will be checked, and which fields or reports will be used to measure change.',
  },
];

export default function CrmRoiCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-slate-950 pb-16 pt-32 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-4 flex items-center gap-2 text-sm text-indigo-200">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span>CRM business case</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            CRM ROI scenario calculator and business-case framework
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            Model a scenario using your own numbers, show which inputs are measured or assumed, and keep the result separate from any promise of future performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-indigo-300" /> No data stored</span>
            <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-indigo-300" /> User-provided assumptions</span>
            <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-indigo-300" /> No outcome guarantee</span>
          </div>
        </div>
      </section>

      <CrmRoiScenarioCalculator />

      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">Build a defensible CRM business case</h2>
            <p className="text-lg text-slate-600">
              A useful business case is an audit trail for a decision. It should show what is known, what is assumed, who owns the measurement, and what would make the project unsuccessful.
            </p>
          </div>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {businessCaseSteps.map((step, index) => (
              <div key={step.title} className="border-t border-slate-200 pt-5">
                <p className="mb-2 text-sm font-semibold text-indigo-700">0{index + 1}</p>
                <h3 className="mb-3 text-xl font-bold text-slate-950">{step.title}</h3>
                <p className="leading-relaxed text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-slate-950">Questions the proposal should answer</h2>
            <ul className="space-y-3 text-slate-700">
              {[
                'Which process and system boundary are included?',
                'Which numbers are measured and which are assumptions?',
                'What data, access, stakeholders, and approvals are required?',
                'How will migration, testing, rollback, and acceptance work?',
                'Who owns adoption and post-launch measurement?',
                'Which costs and risks are excluded from the scenario?',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-l-4 border-indigo-600 bg-white p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-950">Need the operating problem mapped first?</h2>
            <p className="mb-6 leading-relaxed text-slate-600">
              The CRM/RevOps Transition Backlog Sprint is designed to map one system boundary, ownership gaps, controls, and a prioritized backlog before implementation commitments are made.
            </p>
            <Link href="/services/crm-revops-transition-sprint">
              <Button className="bg-indigo-700 hover:bg-indigo-800">
                Review the sprint <ArrowRight className="ml-2 h-4 w-4" />
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
