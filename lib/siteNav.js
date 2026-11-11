// Shared menu structure for the header and footer (website brief 2026-10-09, new menu).
// Items with `live: false` are hidden until their page exists.

export const serviceGroups = [
  {
    title: 'CRM selection & fit assessment',
    links: [{ title: 'Fit assessment', href: '/services#fit-assessment' }],
  },
  {
    title: 'Implementation & migration',
    links: [
      { title: 'CRM implementation', href: '/services/crm-implementation' },
      { title: 'CRM relaunch', href: '/services/crm-relaunch' },
      { title: 'CRM & RevOps transition sprint', href: '/services/crm-revops-transition-sprint' },
      { title: 'Remote CRM implementation', href: '/services/remote-crm-implementation' },
    ],
  },
  {
    title: 'Integrations & automation',
    links: [
      { title: 'CRM integration', href: '/services/crm-integration' },
      { title: 'Marketing automation', href: '/services/marketing-automation' },
    ],
  },
  {
    title: 'CRM cleanup',
    links: [
      { title: 'CRM cleanup', href: '/services/crm-cleanup' },
      { title: 'HubSpot workflow cleanup', href: '/hubspot-workflow-cleanup' },
    ],
  },
  {
    title: 'Managed CRM admin (monthly)',
    links: [
      { title: 'HubSpot admin support', href: '/hubspot-admin-support-canada-us' },
      { title: 'Salesforce admin support', href: '/salesforce-admin-support-canada-us' },
    ],
  },
  {
    title: 'AI automation',
    links: [
      { title: 'AI automation consulting', href: '/services/ai-automation-consulting' },
      { title: 'AI chatbot automation', href: '/services/ai-chatbot-automation' },
    ],
  },
];

const platformLinks = [
  { title: 'HubSpot', href: '/services/hubspot-consulting' },
  { title: 'Salesforce', href: '/services/salesforce-consulting' },
  { title: 'Zoho', href: '/services/zoho-crm-implementation', live: false },
  { title: 'Odoo', href: '/services/odoo-implementation', live: false },
  { title: 'GoHighLevel', href: '/services/gohighlevel-implementation' },
  { title: 'Integration tools (Zapier, Make, Celigo, Boomi)', href: '/services/crm-integration' },
];

const industryLinks = [
  { title: 'Manufacturing & distribution', href: '/industries/manufacturing-distribution' },
  { title: 'Immigration consultants', href: '/immigration-consultant-crm-canada' },
  { title: 'Property management', href: '/property-management-crm-consulting-canada' },
  { title: 'All industries', href: '/industries' },
];

const resourceLinks = [
  { title: 'Blog', href: '/blog' },
  { title: 'Case Studies', href: '/case-studies' },
  { title: 'Free lead follow-up audit', href: '/lead-follow-up-audit' },
  { title: 'Pricing', href: '/pricing' },
];

const onlyLive = (links) => links.filter((l) => l.live !== false);

export const navMenus = [
  {
    key: 'services',
    title: 'Services',
    groups: serviceGroups,
    footer: { title: 'All services', href: '/services' },
  },
  { key: 'platforms', title: 'Platforms', links: onlyLive(platformLinks) },
  { key: 'industries', title: 'Industries', links: onlyLive(industryLinks) },
  { key: 'resources', title: 'Resources', links: onlyLive(resourceLinks) },
];

