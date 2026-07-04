import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export const metadata = {
  title: 'Privacy Policy | Emergent Logic',
  description: 'Read the Emergent Logic privacy policy, including how we collect, use, protect, and manage personal information from visitors and clients.',
  alternates: { canonical: 'https://www.emergent-logic.ca/privacy' },
  openGraph: {
    title: 'Privacy Policy | Emergent Logic',
    description: 'Emergent Logic privacy policy. How we collect, use, and protect your personal information.',
    url: 'https://www.emergent-logic.ca/privacy',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/70">Last updated: March 2026</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-4xl prose prose-lg">
        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
        <p className="text-gray-600 mb-6">When you visit our website or use our services, we may collect personal information such as your name, email address, phone number, and company name when you submit our contact form or book a strategy call through Calendly.</p>

        <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-600 mb-6">We use the information we collect to respond to your inquiries, provide CRM consulting services, send relevant communications about our services, and improve our website experience. We do not sell your personal information to third parties.</p>

        <h2 className="text-2xl font-bold mb-4">3. Cookies</h2>
        <p className="text-gray-600 mb-6">Our website uses cookies to enhance your browsing experience. You can control cookie preferences through our cookie consent banner. We use essential cookies for website functionality and analytics cookies to understand how visitors interact with our site.</p>

        <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
        <p className="text-gray-600 mb-6">We use Calendly for appointment scheduling and may use analytics services. These third-party services have their own privacy policies governing the use of your information.</p>

        <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
        <p className="text-gray-600 mb-6">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
        <p className="text-gray-600 mb-6">You have the right to access, correct, or delete your personal information. You may also withdraw consent for communications at any time. To exercise these rights, contact us at info@emergent-logic.ca.</p>

        <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
        <p className="text-gray-600 mb-6">If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@emergent-logic.ca" className="text-violet-600 hover:underline">info@emergent-logic.ca</a>.</p>
      </div>
      <Footer />
      <CookieConsent />
    </main>
  );
}
