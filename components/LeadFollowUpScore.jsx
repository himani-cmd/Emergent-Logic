'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

const QUESTIONS = [
  'When someone fills in a form on your website, does the lead land in your CRM automatically (not only in an inbox)?',
  'Does every new lead get a named owner the same business day?',
  'During business hours, does every new lead get a reply within an hour?',
  'When you miss a call, does the caller automatically get a text back or a callback task?',
  'Is the source of every lead recorded (Google, referral, ads, social, etc.)?',
  'Does every open deal or enquiry have a next step with a due date?',
  "When a lead doesn't reply, do they get at least three follow-ups before you close them out?",
  "Can you see this week's new leads and where each one stands in one report, without exporting to a spreadsheet?",
  'Are duplicate contacts rare in your CRM?',
  'Do you record consent before sending marketing emails or texts (CASL)?',
];

const FIXES = [
  { text: 'Send website forms straight into your CRM with an owner and a follow-up task.', href: '/website-leads-to-crm-implementation' },
  { text: 'Add automatic lead routing so every new lead has an owner on day one.', href: '/services/crm-implementation' },
  { text: 'Set an instant acknowledgement and a same-hour task for the owner.', href: '/lead-follow-up-audit' },
  { text: 'Turn on missed-call text-back so a missed call still gets a reply.', href: '/services/gohighlevel-implementation' },
  { text: 'Capture lead source on every form and import so you know what’s working.', href: '/services/crm-implementation' },
  { text: "Make 'next step + due date' required on every open deal.", href: '/services/crm-cleanup' },
  { text: 'Build a short follow-up sequence so quiet leads get at least three touches.', href: '/services/marketing-automation' },
  { text: 'Set up one live dashboard for new leads and their status.', href: '/services/crm-implementation' },
  { text: 'Clean existing duplicates and add rules that stop new ones.', href: '/services/crm-cleanup' },
  { text: 'Record consent on every form before marketing emails or texts go out.', href: '/blog/gohighlevel-sms-canada-a2p-casl' },
];

const OPTIONS = [
  { label: 'Yes', value: 10 },
  { label: 'Sometimes', value: 5 },
  { label: 'No', value: 0 },
];

function bandFor(score) {
  if (score >= 80) return { key: '80-100', text: 'Solid foundation. A few gaps are still letting leads slip.' };
  if (score >= 50) return { key: '50-79', text: 'Leads are leaking. Follow-up depends too much on people remembering.' };
  return { key: '0-49', text: 'Most follow-up depends on memory. This is where enquiries quietly go cold.' };
}

export default function LeadFollowUpScore() {
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  function choose(value) {
    const next = answers.slice();
    next[step] = value;
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
      const total = next.reduce((a, b) => a + b, 0);
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_score_completed', { band: bandFor(total).key });
      }
    }
  }

  function retake() {
    setAnswers(Array(QUESTIONS.length).fill(null));
    setStep(0);
    setDone(false);
  }

  if (!done) {
    return (
      <div className="rounded-2xl border border-indigo-100 bg-white p-6 md:p-8 shadow-sm">
        <p className="text-sm font-semibold text-indigo-700 mb-2" aria-live="polite">
          Question {step + 1} of {QUESTIONS.length}
        </p>
        <div
          className="h-2 w-full rounded-full bg-indigo-100 mb-6"
          role="progressbar"
          aria-label="Progress"
          aria-valuemin={0}
          aria-valuemax={QUESTIONS.length}
          aria-valuenow={step + 1}
        >
          <div className="h-2 rounded-full bg-indigo-600" style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }} />
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">{QUESTIONS[step]}</h2>
        <div className="flex flex-col sm:flex-row gap-3" role="group" aria-label={`Answer for question ${step + 1}`}>
          {OPTIONS.map((opt) => (
            <Button
              key={opt.label}
              type="button"
              variant={answers[step] === opt.value ? 'default' : 'outline'}
              className="px-6 py-5 text-base"
              onClick={() => choose(opt.value)}
            >
              {opt.label}
            </Button>
          ))}
        </div>
        <div className="mt-6">
          <Button type="button" variant="ghost" disabled={step === 0} onClick={() => setStep(step - 1)}>
            Back
          </Button>
        </div>
      </div>
    );
  }

  const score = answers.reduce((a, b) => a + b, 0);
  const band = bandFor(score);
  const gaps = answers
    .map((value, index) => ({ value, index }))
    .filter((g) => g.value < 10)
    .sort((a, b) => a.value - b.value || a.index - b.index)
    .slice(0, 3);

  return (
    <div className="rounded-2xl border border-indigo-100 bg-white p-6 md:p-8 shadow-sm" aria-live="polite">
      <p className="text-sm font-semibold text-indigo-700 mb-2">Your Lead Follow-Up Score</p>
      <p className="text-5xl font-bold text-gray-900 mb-4">{score} <span className="text-2xl text-gray-500">/ 100</span></p>
      <div
        className="h-3 w-full rounded-full bg-indigo-100 mb-4"
        role="progressbar"
        aria-label="Score out of 100"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={score}
      >
        <div className="h-3 rounded-full bg-indigo-600" style={{ width: `${score}%` }} />
      </div>
      <p className="text-lg text-gray-700 mb-8">{band.text}</p>

      {gaps.length === 0 ? (
        <p className="text-gray-700 mb-8">No obvious gaps from these questions. A full audit can still find what a checklist can&apos;t.</p>
      ) : (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your 3 biggest gaps</h2>
          <ol className="space-y-4">
            {gaps.map((g) => (
              <li key={g.index} className="rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-500 mb-1">Question {g.index + 1}</p>
                <p className="text-gray-900 mb-2">{FIXES[g.index].text}</p>
                <Link href={FIXES[g.index].href} className="text-indigo-700 font-medium underline">
                  Learn more
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
          <Button type="button" size="lg" className="px-6 py-5 text-base">Book a free 30-minute call</Button>
        </a>
        <Link href="/contact?request=lead-follow-up-score">
          <Button type="button" size="lg" variant="outline" className="px-6 py-5 text-base">Get the free full audit</Button>
        </Link>
      </div>
      <p className="text-sm text-gray-500 mb-4">This is a quick self-check, not a full audit. Scores are based only on your answers.</p>
      <Button type="button" variant="ghost" onClick={retake}>Retake the check</Button>
    </div>
  );
}
