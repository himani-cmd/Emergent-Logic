'use client';

import { Download, FileSpreadsheet } from 'lucide-react';
import { trackResourceDownload } from '@/lib/analytics';

const defaultWorkbook = {
  href: '/resources/emergent_logic_excel_to_crm_implementation_workbook.xlsx',
  resourceName: 'excel_to_crm_implementation_workbook',
  location: 'excel_to_crm_migration_guide',
  eyebrow: 'FREE IMPLEMENTATION WORKBOOK',
  title: 'Map and test the migration before touching production',
  description: 'Download the seven-sheet Excel workbook for field mapping, data cleanup, duplicate rules, test-import evidence, acceptance checks, and repeat-order follow-up planning.',
  note: 'XLSX template. Example rows are illustrative and contain no client data.',
  cta: 'Download workbook',
};

export default function WorkbookDownload({ workbook = {} }) {
  const content = { ...defaultWorkbook, ...workbook };

  function handleDownload() {
    trackResourceDownload({
      resourceName: content.resourceName,
      resourceType: 'xlsx',
      location: content.location,
    });
  }

  return (
    <section aria-labelledby="workbook-download-heading" className="my-10 border border-[#DFE3F5] bg-[#FBFBFF] p-5 sm:p-7">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#EEF2FF] text-[#4B37C8]">
            <FileSpreadsheet className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold text-[#4B37C8]">{content.eyebrow}</p>
            <h2 id="workbook-download-heading" className="mt-2 text-2xl font-bold text-[#101828]">
              {content.title}
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#667085]">
              {content.description}
            </p>
            <p className="mt-3 text-sm text-[#667085]">{content.note}</p>
          </div>
        </div>

        <a
          href={content.href}
          download
          onClick={handleDownload}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#4B37C8] px-5 py-3 font-semibold text-white hover:bg-[#3F2EAA] focus:outline-none focus:ring-2 focus:ring-[#4B37C8] focus:ring-offset-2"
        >
          <Download className="h-5 w-5" aria-hidden="true" />
          {content.cta}
        </a>
      </div>
    </section>
  );
}
