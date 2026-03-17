import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  metadataBase: new URL('https://www.emergent-logic.ca'),
  title: {
    default: 'Emergent Logic | CRM & AI Solutions | Surrey, BC',
    template: '%s | Emergent Logic',
  },
  description: 'Emergent Logic delivers AI-accelerated CRM implementation, marketing automation, and web development in Surrey, BC. We build revenue systems — not just websites. Results in weeks, not months.',
  keywords: ['CRM Implementation', 'Salesforce Consultant', 'HubSpot Consultant', 'Marketing Automation', 'Web Development', 'Digital Marketing', 'AI Solutions', 'Surrey', 'Vancouver', 'British Columbia', 'Canada'],
  authors: [{ name: 'Emergent Logic Consulting' }],
  creator: 'Emergent Logic Consulting',
  publisher: 'Emergent Logic Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.emergent-logic.ca',
    siteName: 'Emergent Logic',
    title: 'Emergent Logic | CRM & AI Solutions | Surrey, BC',
    description: 'AI-accelerated CRM implementation, marketing automation, and web development. We build revenue systems — not just websites.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Emergent Logic - AI-Powered Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergent Logic | CRM & AI Solutions',
    description: 'AI-accelerated CRM implementation, marketing automation, and web development in Surrey, BC.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.emergent-logic.ca',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Emergent Logic Consulting',
  url: 'https://www.emergent-logic.ca',
  logo: 'https://www.emergent-logic.ca/logo.png',
  description: 'AI-accelerated CRM implementation, marketing automation, and web development in Surrey, BC.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Surrey',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@emergent-logic.ca',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.linkedin.com/company/emergent-logic',
  ],
  areaServed: [
    { '@type': 'City', name: 'Surrey' },
    { '@type': 'City', name: 'Vancouver' },
    { '@type': 'State', name: 'British Columbia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  serviceType: ['CRM Implementation', 'Marketing Automation', 'Web Development', 'Digital Marketing'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7c3aed" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
