import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  metadataBase: new URL('https://www.emergent-logic.ca'),
  title: {
    default: 'Emergent Logic - AI-Powered Digital Solutions | Surrey, BC',
    template: '%s | Emergent Logic',
  },
  description: 'Transform your business with AI-powered digital solutions. CRM implementation (Salesforce, HubSpot), marketing automation, web development, and digital marketing services in Surrey, Vancouver, and across Canada.',
  keywords: ['CRM Implementation', 'Salesforce Consultant', 'HubSpot Consultant', 'Marketing Automation', 'Web Development', 'Digital Marketing', 'AI Solutions', 'Surrey', 'Vancouver', 'British Columbia', 'Canada'],
  authors: [{ name: 'Emergent Logic' }],
  creator: 'Emergent Logic',
  publisher: 'Emergent Logic',
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
    title: 'Emergent Logic - AI-Powered Digital Solutions',
    description: 'Transform your business with AI-powered digital solutions. CRM implementation, marketing automation, web development, and digital marketing services.',
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
    title: 'Emergent Logic - AI-Powered Digital Solutions',
    description: 'Transform your business with AI-powered digital solutions. CRM, marketing automation, web development.',
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
  verification: {
    // Add your verification codes here when ready
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://www.emergent-logic.ca',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className="antialiased">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
