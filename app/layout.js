import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Emergent Logic - AI-Powered Digital Solutions',
  description: 'Transform your business with AI-powered digital solutions. CRM implementation, marketing automation, web development, and digital marketing services.',
  keywords: 'CRM, Salesforce, HubSpot, Marketing Automation, Web Development, Digital Marketing, AI, Surrey, Vancouver, Canada',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
