import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export const metadata = {
  title: 'Terms of Service | Emergent Logic',
  description: 'Read the Emergent Logic terms of service for CRM consulting, automation, lead capture, website, and related professional services.',
  alternates: { canonical: 'https://www.emergent-logic.ca/terms' },
  openGraph: {
    title: 'Terms of Service | Emergent Logic',
    description: 'Emergent Logic terms of service. Terms and conditions for using our CRM consulting services.',
    url: 'https://www.emergent-logic.ca/terms',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-xl text-white/70">Last updated: March 2026</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-4xl prose prose-lg">
        <h2 className="text-2xl font-bold mb-4">1. Services</h2>
        <p className="text-gray-600 mb-6">Emergent Logic provides CRM implementation, marketing automation, web development, and digital marketing consulting services. Service scope, deliverables, and timelines are defined in individual project agreements.</p>

        <h2 className="text-2xl font-bold mb-4">2. Engagement</h2>
        <p className="text-gray-600 mb-6">All consulting engagements begin with a free strategy call. Project work commences upon agreement of scope and receipt of the initial payment as outlined in the project proposal.</p>

        <h2 className="text-2xl font-bold mb-4">3. Pricing and Payment</h2>
        <p className="text-gray-600 mb-6">Pricing is provided on a fixed-fee basis as detailed on our pricing page and in individual project proposals. Payment terms are specified in each project agreement. All prices are in Canadian dollars unless otherwise stated.</p>

        <h2 className="text-2xl font-bold mb-4">4. Cancellation</h2>
        <p className="text-gray-600 mb-6">Monthly retainer services can be cancelled with 30 days written notice. For project-based work, cancellation terms are defined in the individual project agreement.</p>

        <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
        <p className="text-gray-600 mb-6">Upon full payment, clients receive ownership of all custom deliverables created specifically for their project. Emergent Logic retains ownership of proprietary tools, templates, and methodologies used during service delivery.</p>

        <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
        <p className="text-gray-600 mb-6">Emergent Logic's liability is limited to the total fees paid for the specific service giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.</p>

        <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
        <p className="text-gray-600 mb-6">For questions about these Terms, contact us at <a href="mailto:info@emergent-logic.ca" className="text-violet-600 hover:underline">info@emergent-logic.ca</a>.</p>
      </div>
      <Footer />
      <CookieConsent />
    </main>
  );
}
