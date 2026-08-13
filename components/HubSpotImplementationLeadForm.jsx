'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { trackLeadGeneration } from '@/lib/analytics';

const initialForm = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  company: '',
  current_state: '',
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
  landing_page: '/hubspot-implementation',
};

function cleanAttributionValue(value) {
  return String(value || '').replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, 160);
}

export default function HubSpotImplementationLeadForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const qualificationContext = [
      `Company: ${formData.company.trim()}`,
      `Current HubSpot state: ${formData.current_state}`,
      `Implementation need: ${formData.project_summary.trim()}`,
    ].join('\n');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
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

      trackLeadGeneration({
        formName: 'hubspot_implementation_form',
        location: '/hubspot-implementation',
        leadSource: 'hubspot_implementation_landing_page',
      });
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('We could not submit the request. Please try again or email info@emergent-logic.ca.');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-[30rem] flex-col justify-center border border-emerald-200 bg-emerald-50 p-7 sm:p-9" role="status">
        <CheckCircle2 className="h-10 w-10 text-emerald-700" aria-hidden="true" />
        <h3 className="mt-5 text-2xl font-bold text-slate-950">Implementation request received</h3>
        <p className="mt-3 leading-7 text-slate-700">
          Emergent Logic will review the current state and your implementation need before responding. Scope, timing, access, and platform decisions are confirmed separately.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-slate-200 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="hubspot-form-title">
      <p className="text-sm font-semibold text-indigo-700">HUBSPOT IMPLEMENTATION REVIEW</p>
      <h3 id="hubspot-form-title" className="mt-2 text-2xl font-bold text-slate-950">Show us where the portal needs clarity</h3>
      <p className="mt-3 leading-7 text-slate-600">Share enough context for a useful first conversation. We will confirm fit before proposing scope.</p>

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

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-800">
          Business email
          <input type="email" name="email" value={formData.email} onChange={updateField} required maxLength={200} autoComplete="email" className="mt-2 min-h-12 w-full border border-slate-300 px-3 text-base font-normal outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100" />
        </label>
        <label className="text-sm font-semibold text-slate-800">
          Phone <span className="font-normal text-slate-500">(optional)</span>
          <input type="tel" name="phone" value={formData.phone} onChange={updateField} maxLength={50} autoComplete="tel" className="mt-2 min-h-12 w-full border border-slate-300 px-3 text-base font-normal outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100" />
        </label>
      </div>

      <label className="mt-4 block text-sm font-semibold text-slate-800">
        Company
        <input name="company" value={formData.company} onChange={updateField} required maxLength={160} autoComplete="organization" className="mt-2 min-h-12 w-full border border-slate-300 px-3 text-base font-normal outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100" />
      </label>

      <label className="mt-4 block text-sm font-semibold text-slate-800">
        Current HubSpot state
        <select name="current_state" value={formData.current_state} onChange={updateField} required className="mt-2 min-h-12 w-full border border-slate-300 bg-white px-3 text-base font-normal outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100">
          <option value="">Select one</option>
          <option value="Evaluating HubSpot">Evaluating HubSpot</option>
          <option value="New HubSpot portal">New HubSpot portal</option>
          <option value="Existing portal needs cleanup or relaunch">Existing portal needs cleanup or relaunch</option>
          <option value="Migrating into HubSpot">Migrating into HubSpot</option>
          <option value="Connecting HubSpot with Salesforce or another system">Connecting HubSpot with Salesforce or another system</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>

      <label className="mt-4 block text-sm font-semibold text-slate-800">
        What needs to work better?
        <textarea name="project_summary" value={formData.project_summary} onChange={updateField} required maxLength={4200} rows={5} className="mt-2 w-full resize-y border border-slate-300 px-3 py-3 text-base font-normal outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100" placeholder="For example: lifecycle stages, data migration, lead routing, workflows, reporting, integrations, or team adoption." />
      </label>

      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>Leave this field empty<input name="hp_field" value={formData.hp_field} onChange={updateField} tabIndex={-1} autoComplete="off" /></label>
      </div>

      {status === 'error' && <p className="mt-4 text-sm font-medium text-red-700" role="alert">{errorMessage}</p>}

      <button type="submit" disabled={status === 'submitting'} className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-[#4B37C8] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#38289F] disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'submitting' ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />Submitting request</> : 'Request a HubSpot implementation review'}
      </button>
      <p className="mt-3 text-xs leading-5 text-slate-500">By submitting, you agree that Emergent Logic may respond to this request. Review our <a href="/privacy" className="underline hover:text-slate-800">privacy policy</a>.</p>
    </form>
  );
}
