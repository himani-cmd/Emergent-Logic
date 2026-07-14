'use client';

import { useMemo, useState } from 'react';
import { Calculator, Clock, DollarSign, TrendingUp } from 'lucide-react';

const fields = [
  { key: 'monthlyLeads', label: 'Qualified leads per month', suffix: 'leads' },
  { key: 'currentConversion', label: 'Current lead-to-customer rate', suffix: '%' },
  { key: 'targetConversion', label: 'Scenario lead-to-customer rate', suffix: '%' },
  { key: 'revenuePerCustomer', label: 'Average first-year gross revenue per customer', prefix: '$' },
  { key: 'adminHours', label: 'CRM administration hours per week', suffix: 'hours' },
  { key: 'hourlyCost', label: 'Loaded hourly cost for that work', prefix: '$' },
  { key: 'adminReduction', label: 'Scenario reduction in administration time', suffix: '%' },
  { key: 'implementationCost', label: 'Proposed implementation cost', prefix: '$' },
  { key: 'annualSoftwareCost', label: 'Annual software and licensing cost', prefix: '$' },
  { key: 'annualSupportCost', label: 'Annual support and maintenance cost', prefix: '$' },
];

const initialInputs = Object.fromEntries(fields.map(({ key }) => [key, '']));

function valueOf(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CrmRoiScenarioCalculator() {
  const [inputs, setInputs] = useState(initialInputs);

  const results = useMemo(() => {
    const values = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, valueOf(value)]));
    const conversionDifference = Math.max(values.targetConversion - values.currentConversion, 0) / 100;
    const additionalCustomers = values.monthlyLeads * 12 * conversionDifference;
    const incrementalGrossRevenue = additionalCustomers * values.revenuePerCustomer;
    const recoveredAdminValue = values.adminHours * 52 * values.hourlyCost * Math.min(values.adminReduction, 100) / 100;
    const estimatedAnnualBenefit = incrementalGrossRevenue + recoveredAdminValue;
    const estimatedFirstYearCost = values.implementationCost + values.annualSoftwareCost + values.annualSupportCost;
    const estimatedNetBenefit = estimatedAnnualBenefit - estimatedFirstYearCost;
    const roi = estimatedFirstYearCost > 0 ? (estimatedNetBenefit / estimatedFirstYearCost) * 100 : null;
    const paybackMonths = estimatedAnnualBenefit > 0 ? estimatedFirstYearCost / (estimatedAnnualBenefit / 12) : null;
    const hasInputs = Object.values(inputs).some((value) => value !== '');

    return {
      additionalCustomers,
      incrementalGrossRevenue,
      recoveredAdminValue,
      estimatedAnnualBenefit,
      estimatedFirstYearCost,
      estimatedNetBenefit,
      roi,
      paybackMonths,
      hasInputs,
    };
  }, [inputs]);

  const outputRows = [
    { icon: TrendingUp, label: 'Scenario additional customers per year', value: results.additionalCustomers.toFixed(1) },
    { icon: DollarSign, label: 'Scenario incremental gross revenue', value: formatCurrency(results.incrementalGrossRevenue) },
    { icon: Clock, label: 'Scenario value of recovered administration time', value: formatCurrency(results.recoveredAdminValue) },
    { icon: Calculator, label: 'Estimated first-year net benefit', value: formatCurrency(results.estimatedNetBenefit) },
  ];

  return (
    <section aria-labelledby="roi-calculator-heading" className="border-y bg-slate-50 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-indigo-700">Input-based scenario</p>
          <h2 id="roi-calculator-heading" className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
            Build a CRM business-case scenario from your own numbers
          </h2>
          <p className="text-lg text-slate-600">
            Nothing is uploaded or stored. Outputs are arithmetic scenarios, not forecasts or guarantees. Use verified baseline data and replace every assumption before sharing the result.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">
          <div className="grid gap-5 rounded-lg border bg-white p-6 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.key} className="block text-sm font-medium text-slate-800">
                {field.label}
                <span className="mt-2 flex h-11 items-center rounded-md border bg-white px-3 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
                  {field.prefix && <span className="mr-2 text-slate-500">{field.prefix}</span>}
                  <input
                    type="number"
                    min="0"
                    step="any"
                    inputMode="decimal"
                    value={inputs[field.key]}
                    onChange={(event) => setInputs((current) => ({ ...current, [field.key]: event.target.value }))}
                    className="min-w-0 flex-1 bg-transparent text-slate-950 outline-none"
                  />
                  {field.suffix && <span className="ml-2 text-xs text-slate-500">{field.suffix}</span>}
                </span>
              </label>
            ))}
          </div>

          <aside aria-live="polite" className="rounded-lg bg-slate-950 p-6 text-white">
            <h3 className="mb-5 text-xl font-bold">Scenario output</h3>
            {!results.hasInputs ? (
              <p className="text-sm leading-relaxed text-slate-300">Enter your baseline, scenario, and cost assumptions to calculate an estimate.</p>
            ) : (
              <>
                <div className="space-y-5">
                  {outputRows.map((row) => (
                    <div key={row.label} className="border-b border-white/10 pb-5 last:border-0">
                      <div className="mb-2 flex items-center gap-2 text-sm text-slate-300">
                        <row.icon className="h-4 w-4" aria-hidden="true" />
                        <span>{row.label}</span>
                      </div>
                      <p className="text-2xl font-bold">{row.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-xs text-slate-400">Scenario ROI</p>
                    <p className="mt-1 text-lg font-semibold">{results.roi === null ? 'N/A' : `${results.roi.toFixed(0)}%`}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Scenario payback</p>
                    <p className="mt-1 text-lg font-semibold">{results.paybackMonths === null ? 'N/A' : `${results.paybackMonths.toFixed(1)} months`}</p>
                  </div>
                </div>
              </>
            )}
            <p className="mt-6 text-xs leading-relaxed text-slate-400">
              This simple model excludes gross margin, churn, taxes, financing, implementation risk, attribution uncertainty, and the possibility that the scenario improvement does not occur.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
