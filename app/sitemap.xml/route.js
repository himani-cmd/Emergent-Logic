const baseUrl = 'https://www.emergent-logic.ca';
const lastmod = '2026-06-22';

const urls = [
  ['', 'weekly', '1.0'],
  ['/services', 'monthly', '0.9'],
  ['/pricing', 'monthly', '0.9'],
  ['/about', 'monthly', '0.8'],
  ['/contact', 'monthly', '0.9'],
  ['/ai-crm-audit', 'monthly', '0.8'],
  ['/lead-follow-up-audit', 'monthly', '0.8'],
  ['/blog', 'weekly', '0.9'],
  ['/blog/immigration-consultation-follow-up-crm', 'monthly', '0.8'],
  ['/blog/property-management-lead-follow-up-crm', 'monthly', '0.8'],
  ['/services/crm-implementation', 'monthly', '0.9'],
  ['/services/hubspot-consulting', 'monthly', '0.9'],
  ['/services/crm-cleanup', 'monthly', '0.9'],
  ['/services/marketing-automation', 'monthly', '0.8'],
  ['/services/lead-capture-websites', 'monthly', '0.8'],
  ['/services/crm-integration', 'monthly', '0.8'],
  ['/services/salesforce-consulting', 'monthly', '0.9'],
  ['/crm-implementation', 'monthly', '0.7'],
  ['/marketing-automation', 'monthly', '0.7'],
  ['/web-development', 'monthly', '0.7'],
  ['/digital-marketing', 'monthly', '0.7'],
  ['/salesforce-consultant-surrey-bc', 'monthly', '0.9'],
  ['/hubspot-consultant-surrey-bc', 'monthly', '0.9'],
  ['/crm-implementation-canada', 'monthly', '0.9'],
  ['/crm-cleanup-canada', 'monthly', '0.9'],
  ['/property-management-crm-consulting-canada', 'monthly', '0.9'],
  ['/immigration-consultant-crm-canada', 'monthly', '0.9'],
  ['/hubspot-consultant-vancouver', 'monthly', '0.9'],
  ['/crm-consultant-surrey-bc', 'monthly', '0.9'],
  ['/crm-consultant-abbotsford', 'monthly', '0.9'],
  ['/crm-consultant-langley', 'monthly', '0.9'],
  ['/crm-consultant-coquitlam', 'monthly', '0.9'],
  ['/blog/hubspot-vs-salesforce-canada', 'monthly', '0.8'],
  ['/blog/what-is-crm-implementation-canada', 'monthly', '0.8'],
  ['/blog/what-is-marketing-automation-small-business', 'monthly', '0.8'],
  ['/blog/what-is-aeo-answer-engine-optimization', 'monthly', '0.8'],
  ['/blog/how-to-choose-digital-marketing-agency-vancouver', 'monthly', '0.8'],
  ['/blog/salesforce-vs-hubspot-vs-zoho-canada-2026', 'monthly', '0.8'],
  ['/blog/ai-crm-strategy-guide-2026', 'monthly', '0.8'],
  ['/blog/crm-pipeda-data-privacy-canada', 'monthly', '0.8'],
  ['/blog/lead-scoring-model-crm-guide', 'monthly', '0.8'],
  ['/blog/email-nurture-sequences-crm-automation', 'monthly', '0.8'],
  ['/blog/campaign-attribution-crm-marketing-roi', 'monthly', '0.8'],
  ['/blog/crm-roi-calculator-business-case-2026', 'monthly', '0.8'],
  ['/blog/crm-freelancer-vs-consulting-firm', 'monthly', '0.8'],
  ['/blog/salesforce-consultant-small-business', 'monthly', '0.8'],
  ['/blog/salesforce-cleanup-before-automation', 'monthly', '0.8'],
  ['/blog/hubspot-salesforce-cleanup-upwork-patterns', 'monthly', '0.8'],
  ['/blog/website-leads-to-crm', 'monthly', '0.8'],
  ['/blog/hubspot-consultant-vancouver', 'monthly', '0.8'],
  ['/blog/marketing-automation-needs-crm-cleanup', 'monthly', '0.8'],
  ['/blog/crm-consultant-vs-implementation-partner-canada', 'monthly', '0.8'],
  ['/privacy', 'yearly', '0.3'],
  ['/terms', 'yearly', '0.3'],
];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(([path, changefreq, priority]) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`)
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
