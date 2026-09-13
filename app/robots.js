export default function robots() {
  const publicSiteRule = {
    disallow: ['/admin', '/api/'],
  };

  return {
    rules: [
      {
        userAgent: '*',
        ...publicSiteRule,
      },
      { userAgent: 'GPTBot', ...publicSiteRule },
      { userAgent: 'ChatGPT-User', ...publicSiteRule },
      { userAgent: 'OAI-SearchBot', ...publicSiteRule },
      { userAgent: 'PerplexityBot', ...publicSiteRule },
      { userAgent: 'Perplexity-User', ...publicSiteRule },
      { userAgent: 'ClaudeBot', ...publicSiteRule },
      { userAgent: 'Claude-User', ...publicSiteRule },
      { userAgent: 'Claude-SearchBot', ...publicSiteRule },
      { userAgent: 'Google-Extended', ...publicSiteRule },
    ],
    sitemap: 'https://www.emergent-logic.ca/sitemap.xml',
  };
}
