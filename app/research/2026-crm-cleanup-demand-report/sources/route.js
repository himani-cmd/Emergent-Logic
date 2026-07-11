import report from '@/data/crm-cleanup-demand-report-2026.json';

function csvCell(value) {
  let text = Array.isArray(value) ? value.join('; ') : String(value ?? '');
  if (/^[=+\-@]/.test(text)) {
    text = `'${text}`;
  }
  return `"${text.replaceAll('"', '""')}"`;
}

export async function GET() {
  const headers = [
    'id',
    'source',
    'title',
    'company',
    'source_url',
    'observed_date',
    'platforms',
    'problem_categories',
    'observed_signal',
  ];

  const rows = report.postings.map((posting) => [
    posting.id,
    posting.source,
    posting.title,
    posting.company,
    posting.url,
    posting.observed_date,
    posting.platforms,
    posting.problem_categories,
    posting.observed_signal,
  ]);

  const csv = [headers, ...rows]
    .map((row) => row.map(csvCell).join(','))
    .join('\r\n');

  return new Response(`\uFEFF${csv}\r\n`, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="emergent-logic-crm-cleanup-demand-report-2026-sources.csv"',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
