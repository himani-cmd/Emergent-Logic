'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { trackLeadFormEvent, trackLeadGeneration } from '@/lib/analytics';

const initialForm = {
  first_name: '',
  last_name: '',
  email: '',
  company: '',
  project_summary: '',
  hp_field: '',
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_content: '',
  utm_term: '',
  gclid: '',
  gbraid: '',
  wbraid: '',
  landing_page: '/crm-implementation-automation',
};

function cleanAttributionValue(value) {
  return String(value || '').replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, 160);
}

export default function CRMImplementationAutomationLeadForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formStartTracked = useRef(false);

  const formAnalytics = {
    formName: 'crm_implementation_automation_form',
    location: '/crm-implementation-automation',
    leadSource: 'crm_implementation_automation_landing_page',
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData((current) => ({
      ...current,
      utm_source: cleanAttributionValue(params.get('utm_source')),
      utm_medium: cleanAttributionValue(params.get('utm_medium')),
      utm_campaign: cleanAttributionValue(params.get('utm_campaign')),
      utm_content: cleanAttributionValue(params.get('utm_content')),
      utm_term: cleanAttributionValue(params.get('utm_term')),
      gclid: cleanAttributionValue(params.get('gclid')),
      gbraid: cleanAttributionValue(params.get('gbraid')),
      wbraid: cleanAttributionValue(params.get('wbraid')),
      landing_page: window.location.pathname.slice(0, 200),
    }));
  }, []);

  function updateField(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function trackFormStart() {
    if (formStartTracked.current) return;
    formStartTracked.current = true;
    trackLeadFormEvent('lead_form_started', formAnalytics);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    trackLeadFormEvent('lead_form_submit_attempted', formAnalytics);

    const qualificationContext = [
      `Company: ${formData.company.trim()}`,
      `CRM, automation, or integration need: ${formData.project_summary.trim()}`,
    ].join('\n');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          message: qualificationContext,
          hp_field: formData.hp_field,
          utm_source: formData.utm_source,
          utm_medium: formData.utm_medium,
          utm_campaign: formData.utm_campaign,
          utm_content: formData.utm_content,
          utm_term: formData.utm_term,
          gclid: formData.gclid,
          gbraid: formData.gbraid,
          wbraid: formData.wbraid,
          landing_page: formData.landing_page,
        }),
      });

      if (!response.ok) {
        throw new Error('The request could not be submitted.');
      }

      trackLeadGeneration(formAnalytics);
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('We could not submit the request. Please try again or email info@emergent-logic.ca.');
      trackLeadFormEvent('lead_form_error', { ...formAnalytics, reason: 'request_failed' });
    }
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-[30rem] flex-col justify-center border border-emerald-200 bg-emerald-50 p-7 sm:p-9" role="status">
        <CheckCircle2 className="h-10 w-10 text-emerald-700" aria-hidden="true" />
        <h3 className="mt-5 text-2xl font-bold text-slate-950">CRM and automation request received</h3>
        <p className="mt-3 leading-7 text-slate-700">
          Emergent Logic will review the CRM, automation, data, and integration requirements before responding. Scope, timing, access, and platform decisions are confirmed separately.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocusCapture={trackFormStart} className="border border-slate-200 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="crm-automation-form-title">
      <p className="text-sm font-semibold text-indigo-700">CRM AND AUTOMATION REVIEW</p>
      <h3 id="crm-automation-form-title" className="mt-2 text-2xl font-bold text-slate-950">Tell us what needs to work</h3>
      <p className="mt-3 leading-7 text-slate-600">Five fields are enough for a fit review. Scope, access, timing, and commercial terms are confirmed separately.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-800">
          First name
          <input name="first_name" value={formData.first_name} onChange={updateField} required maxLength={100} autoComplete="given-name" className="mt-2 min-h-12 w-full border border-slate-300 px-3 text-base font-normal outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100" />
        </label>
        <label className="text-sm font-semibold text-slate-800">
          Last name
          <input name="last_name" value={formData.last_name} onChange={updateField} required maxLength={100} autoComplete="family-name" className="mt-2 min-h-12 w-full border border-slate-300 px-3 text-base font-normal outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100" />
        </label>
      </div>

      <label className="mt-4 block text-sm font-semibold text-slate-800">
        Business email
        <input type="email" name="email" value={formData.email} onChange={updateField} required maxLength={200} autoComplete="email" className="mt-2 min-h-12 w-full border border-slate-300 px-3 text-base font-normal outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100" />
      </label>

      <label className="mt-4 block text-sm font-semibold text-slate-800">
        Company
        <input name="company" value={formData.company} onChange={updateField} required maxLength={160} autoComplete="organization" className="mt-2 min-h-12 w-full border border-slate-300 px-3 text-base font-normal outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100" />
      </label>

      <label className="mt-4 block text-sm font-semibold text-slate-800">
        What do you need to implement or connect?
        <textarea name="project_summary" value={formData.project_summary} onChange={updateField} required maxLength={4200} rows={5} className="mt-2 w-full resize-y border border-slate-300 px-3 py-3 text-base font-normal outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100" placeholder="For example: implement a CRM, connect website forms, build lead nurture, migrate data, or integrate business systems." />
      </label>

      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>Leave this field empty<input name="hp_field" value={formData.hp_field} onChange={updateField} tabIndex={-1} autoComplete="off" /></label>
      </div>

      {status === 'error' && <p className="mt-4 text-sm font-medium text-red-700" role="alert">{errorMessage}</p>}

      <button type="submit" disabled={status === 'submitting'} className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-[#4B37C8] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#38289F] disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'submitting' ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />Submitting request</> : 'Request a CRM and automation review'}
      </button>
      <p className="mt-3 text-xs leading-5 text-slate-500">By submitting, you agree that Emergent Logic may respond to this request. Review our <a href="/privacy" className="underline hover:text-slate-800">privacy policy</a>.</p>
    </form>
  );
}
