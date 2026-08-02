'use client';

import { useMemo, useState } from 'react';
import { CheckCircle2, ClipboardCheck } from 'lucide-react';

const checks = [
  'We can identify one current customer record for every active account.',
  'Customer contacts, companies, and locations use consistent names and IDs.',
  'We can see what each customer bought and when they last ordered.',
  'We have a usable rule for estimating or recording the next reorder date.',
  'Every active customer has a clear owner and next follow-up action.',
  'We know which spreadsheet fields must be retained, merged, or retired.',
  'We can define the first three reports the CRM must produce.',
  'A business owner is available to approve field mapping and test imports.',
];

function getResult(score) {
  if (score >= 7) {
    return {
      label: 'Ready for a controlled migration plan',
      detail: 'Your operating rules are defined well enough to begin field mapping, test imports, and platform-fit validation.',
      color: 'text-emerald-800',
      border: 'border-emerald-300',
      background: 'bg-emerald-50',
    };
  }

  if (score >= 4) {
    return {
      label: 'Discovery gaps need decisions first',
      detail: 'Document ownership, reorder logic, required fields, and reports before configuring a CRM or importing live records.',
      color: 'text-indigo-800',
      border: 'border-indigo-300',
      background: 'bg-indigo-50',
    };
  }

  return {
    label: 'Start with process and data cleanup',
    detail: 'A CRM build would currently inherit too much ambiguity. Choose one customer workflow and make its records, owners, and next actions explicit first.',
    color: 'text-rose-800',
    border: 'border-rose-300',
    background: 'bg-rose-50',
  };
}

export default function CRMReadinessAssessment() {
  const [selected, setSelected] = useState([]);
  const result = useMemo(() => getResult(selected.length), [selected.length]);

  function toggle(index) {
    setSelected((current) => (
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    ));
  }

  return (
    <section aria-labelledby="crm-readiness-heading" className="my-10 border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-6 flex items-start gap-3">
        <ClipboardCheck className="mt-1 h-7 w-7 flex-shrink-0 text-indigo-700" aria-hidden="true" />
        <div>
          <h2 id="crm-readiness-heading" className="text-2xl font-bold text-slate-950">CRM migration readiness assessment</h2>
          <p className="mt-2 text-slate-600">Check every statement that is true today. The score is planning guidance, not a platform recommendation.</p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {checks.map((check, index) => {
          const checked = selected.includes(index);
          return (
            <label key={check} className="flex min-h-24 cursor-pointer items-start gap-3 border border-slate-200 bg-slate-50 p-4 hover:border-indigo-300">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(index)}
                className="mt-1 h-5 w-5 flex-shrink-0 accent-indigo-700"
              />
              <span className="text-sm leading-6 text-slate-800">{check}</span>
            </label>
          );
        })}
      </div>

      <div className={`mt-6 min-h-32 border p-5 ${result.border} ${result.background}`} aria-live="polite">
        <div className="flex items-center gap-2">
          <CheckCircle2 className={`h-5 w-5 ${result.color}`} aria-hidden="true" />
          <p className={`font-semibold ${result.color}`}>{selected.length} of {checks.length}: {result.label}</p>
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-700">{result.detail}</p>
      </div>
    </section>
  );
}
