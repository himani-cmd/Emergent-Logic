import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ClipboardCheck, ShieldCheck, Users } from 'lucide-react';

export const metadata = {
  title: 'CRM Freelancer vs Consulting Firm',
  description: 'Choose a CRM freelancer, consulting firm, or internal owner based on scope clarity, system risk, governance, and accountability.',
  alternates: { canonical: 'https://www.emergent-logic.ca/blog/crm-freelancer-vs-consulting-firm' },
  openGraph: {
    title: 'CRM Freelancer vs Consulting Firm: A Scope-Based Guide | Emergent Logic',
    description: 'A practical, neutral framework for choosing the right delivery model for CRM work.',
    url: 'https://www.emergent-logic.ca/blog/crm-freelancer-vs-consulting-firm',
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const options = [
  {
    title: 'Freelancer',
    fit: 'A bounded task with a clear owner, acceptance criteria, and limited system impact.',
    examples: ['Build a defined report', 'Repair one documented workflow', 'Migrate a reviewed data set'],
  },
  {
    title: 'Consulting team',
    fit: 'An unclear or cross-functional problem involving process design, multiple systems, governance, or change management.',
    examples: ['Diagnose a broken handoff', 'Redesign lifecycle and ownership rules', 'Plan a controlled CRM transition'],
  },
  {
    title: 'Internal owner',
    fit: 'Ongoing administration, policy decisions, adoption, and prioritization after the implementation work is complete.',
    examples: ['Approve access and field policy', 'Own the backlog', 'Monitor adoption and data quality'],
  },
];

const evaluationQuestions = [
  'Can we describe the deliverable and its acceptance test in plain language?',
  'Does the work change permissions, revenue reporting, customer data, or several integrations?',
  'Who can approve process, data, and system decisions?',
  'What must be backed up, tested, or reversible before launch?',
  'Who owns training, adoption, documentation, and the backlog afterward?',
  'How will we verify that the underlying business problem improved?',
];

export default function CrmFreelancerVsConsultingFirm() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-slate-950 pb-16 pt-32 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-4 flex items-center gap-2 text-sm text-indigo-200">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span>CRM delivery</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            CRM freelancer vs consulting firm: choose by scope and risk
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            The right choice is not the largest team or the lowest quote. It is the delivery model that matches the clarity, risk, ownership, and system boundaries of the work.
          </p>
        </div>
      </section>

      <article>
        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="mb-10 max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">Start with the shape of the problem</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                A freelancer can be an excellent fit for a defined task. A consulting team becomes useful when the task cannot be scoped until process, data, ownership, and dependencies are understood. In either case, the business still needs an internal decision owner.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {options.map((option) => (
                <section key={option.title} className="border-t-4 border-indigo-600 bg-slate-50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-slate-950">{option.title}</h3>
                  <p className="mb-5 leading-relaxed text-slate-600">{option.fit}</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {option.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y bg-slate-50 py-16">
          <div className="container mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-indigo-700">Decision test</p>
              <h2 className="text-3xl font-bold text-slate-950">Six questions before requesting a quote</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                These questions expose hidden discovery, governance, and adoption work before it is mistaken for a simple configuration task.
              </p>
            </div>
            <ol className="space-y-4">
              {evaluationQuestions.map((question, index) => (
                <li key={question} className="flex gap-4 border-b border-slate-200 pb-4">
                  <span className="font-bold text-indigo-700">0{index + 1}</span>
                  <span className="text-slate-800">{question}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="mb-8 text-3xl font-bold text-slate-950">Require the same controls from any delivery model</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: ClipboardCheck, title: 'Written scope', body: 'Document in-scope systems, assumptions, dependencies, exclusions, deliverables, and acceptance criteria.' },
                { icon: ShieldCheck, title: 'Change controls', body: 'Define access, backups, test data, approvals, rollback, and how production changes are recorded.' },
                { icon: Users, title: 'Named ownership', body: 'Name the business decision owner, delivery owner, data owner, and post-launch administrator.' },
              ].map((item) => (
                <div key={item.title}>
                  <item.icon className="mb-4 h-7 w-7 text-indigo-700" aria-hidden="true" />
                  <h3 className="mb-2 text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="leading-relaxed text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-3xl font-bold">Unclear scope is a reason to diagnose first</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              The CRM/RevOps Transition Backlog Sprint maps one system boundary, ownership gaps, controls, and a prioritized backlog before implementation commitments are made.
            </p>
            <Link href="/services/crm-revops-transition-sprint" className="mt-8 inline-block">
              <Button size="lg" className="bg-white text-slate-950 hover:bg-indigo-50">
                Review the sprint <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </article>

      <Footer />
      <CookieConsent />
    </main>
  );
}
