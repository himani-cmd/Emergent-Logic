import './globals.css';
import Script from 'next/script';
import { Toaster } from 'sonner';
import AnalyticsProvider from '@/components/AnalyticsProvider';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';

export const metadata = {
  metadataBase: new URL('https://www.emergent-logic.ca'),
  title: {
    default: 'CRM Implementation Vancouver BC | Emergent Logic',
    template: '%s | Emergent Logic',
  },
  description: "Vancouver's CRM experts. Salesforce, HubSpot, Zoho implementation in 2 weeks. Serving Surrey, Abbotsford, Langley. Free strategy call.",
  keywords: ['CRM Implementation', 'Salesforce Consultant', 'HubSpot Consultant', 'Marketing Automation', 'Surrey', 'Vancouver', 'Abbotsford', 'Langley', 'Coquitlam', 'Greater Vancouver', 'BC', 'Canada'],
  authors: [{ name: 'Emergent Logic' }],
  creator: 'Emergent Logic',
  publisher: 'Emergent Logic',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.emergent-logic.ca',
    siteName: 'Emergent Logic',
    title: 'CRM Implementation Vancouver BC | Emergent Logic',
    description: "Vancouver's CRM experts. Salesforce, HubSpot, Zoho implementation in 2 weeks.",
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630, alt: 'Emergent Logic - CRM Implementation Vancouver BC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM Implementation Vancouver BC | Emergent Logic',
    description: "Vancouver's CRM experts. Salesforce, HubSpot, Zoho implementation in 2 weeks.",
    images: ['https://www.emergent-logic.ca/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.emergent-logic.ca' },
};

const organizationId = 'https://www.emergent-logic.ca/#organization';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
      '@id': organizationId,
      name: 'Emergent Logic',
      url: 'https://www.emergent-logic.ca',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.emergent-logic.ca/el-logo-512.png',
        width: 512,
        height: 512,
      },
      image: 'https://www.emergent-logic.ca/og-image.png',
      description: 'AI-accelerated CRM implementation, cleanup, automation, and lead capture systems for Canadian businesses.',
      telephone: '+1-778-652-6271',
      email: 'info@emergent-logic.ca',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Surrey',
        addressRegion: 'BC',
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 49.1913,
        longitude: -122.8490,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      areaServed: [
        { '@type': 'City', name: 'Surrey' },
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'City', name: 'Burnaby' },
        { '@type': 'City', name: 'Richmond' },
        { '@type': 'City', name: 'Langley' },
        { '@type': 'City', name: 'Coquitlam' },
        { '@type': 'City', name: 'Abbotsford' },
        { '@type': 'AdministrativeArea', name: 'British Columbia' },
        { '@type': 'Country', name: 'Canada' },
      ],
      priceRange: '$$',
      knowsAbout: [
        'CRM implementation',
        'CRM cleanup',
        'HubSpot consulting',
        'Salesforce consulting',
        'Zoho CRM',
        'Marketing automation',
        'Lead capture systems',
        'Sales operations',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'CRM Consulting Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'CRM Implementation',
              url: 'https://www.emergent-logic.ca/services/crm-implementation',
              serviceType: 'CRM implementation',
              provider: { '@id': organizationId },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'HubSpot Consulting',
              url: 'https://www.emergent-logic.ca/services/hubspot-consulting',
              serviceType: 'HubSpot consulting',
              provider: { '@id': organizationId },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'CRM Cleanup',
              url: 'https://www.emergent-logic.ca/services/crm-cleanup',
              serviceType: 'CRM cleanup and data hygiene',
              provider: { '@id': organizationId },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Marketing Automation',
              url: 'https://www.emergent-logic.ca/services/marketing-automation',
              serviceType: 'Marketing automation',
              provider: { '@id': organizationId },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lead Capture Websites',
              url: 'https://www.emergent-logic.ca/services/lead-capture-websites',
              serviceType: 'Lead capture website development',
              provider: { '@id': organizationId },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Chatbot Automation',
              url: 'https://www.emergent-logic.ca/services/ai-chatbot-automation',
              serviceType: 'AI chatbot lead qualification and CRM automation',
              provider: { '@id': organizationId },
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.emergent-logic.ca/#website',
      url: 'https://www.emergent-logic.ca',
      name: 'Emergent Logic',
      publisher: { '@id': organizationId },
      inLanguage: 'en-CA',
      about: { '@id': organizationId },
    },
  ],
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
        {/* GA4 Scripts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
            window.gtag = gtag;
          `}
        </Script>

        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
