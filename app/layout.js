import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  metadataBase: new URL('https://www.emergent-logic.ca'),
  title: {
    default: 'CRM Implementation Greater Vancouver BC | Salesforce & HubSpot Experts | Emergent Logic',
    template: '%s | Emergent Logic',
  },
  description: "Greater Vancouver's CRM experts. We implement Salesforce, HubSpot, Zoho and more in 2 weeks. Serving Surrey, Abbotsford, Langley, Coquitlam and beyond. Book a free strategy call today.",
  keywords: ['CRM Implementation', 'Salesforce Consultant', 'HubSpot Consultant', 'Marketing Automation', 'Surrey', 'Vancouver', 'Abbotsford', 'Langley', 'Coquitlam', 'Greater Vancouver', 'BC', 'Canada'],
  authors: [{ name: 'Emergent Logic' }],
  creator: 'Emergent Logic',
  publisher: 'Emergent Logic',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.emergent-logic.ca',
    siteName: 'Emergent Logic',
    title: 'CRM Implementation Greater Vancouver BC | Emergent Logic',
    description: "Greater Vancouver's CRM experts. Salesforce, HubSpot, Zoho implementation in 2 weeks.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM Implementation Greater Vancouver BC | Emergent Logic',
    description: "Greater Vancouver's CRM experts. Salesforce, HubSpot, Zoho implementation in 2 weeks.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.emergent-logic.ca' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Emergent Logic',
  url: 'https://www.emergent-logic.ca',
  description: 'AI-powered CRM implementation and marketing automation for Greater Vancouver businesses.',
  address: { '@type': 'PostalAddress', addressLocality: 'Surrey', addressRegion: 'BC', addressCountry: 'CA' },
  contactPoint: { '@type': 'ContactPoint', email: 'info@emergent-logic.ca', contactType: 'customer service' },
  areaServed: ['Surrey', 'Vancouver', 'Abbotsford', 'Langley', 'Coquitlam', 'Port Coquitlam', 'Burnaby', 'Richmond', 'Greater Vancouver', 'British Columbia'],
  serviceType: ['CRM Implementation', 'Marketing Automation', 'Salesforce Consulting', 'HubSpot Consulting'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#7c3aed" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
