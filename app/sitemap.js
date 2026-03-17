export default function sitemap() {
  const baseUrl = 'https://www.emergent-logic.ca';
  const currentDate = new Date().toISOString();
  
  return [
    // Main Pages
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    
    // Service Pages
    { url: `${baseUrl}/crm-implementation`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/marketing-automation`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/web-development`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/digital-marketing`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    
    // Local Service Pages
    { url: `${baseUrl}/salesforce-consultant-surrey-bc`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/hubspot-consultant-vancouver`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/crm-consultant-surrey-bc`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    
    // Blog Articles
    { url: `${baseUrl}/blog/hubspot-vs-salesforce-canada`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/what-is-crm-implementation-canada`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/what-is-marketing-automation-small-business`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/what-is-aeo-answer-engine-optimization`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/how-to-choose-digital-marketing-agency-vancouver`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
