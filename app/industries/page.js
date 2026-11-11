import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { ArrowRight } from 'lucide-react';

const canonical = 'https://www.emergent-logic.ca/industries';
const title = 'Industries We Serve: CRM for B2B and Service Firms';
const description = 'CRM setup and integration for manufacturers, distributors, B2B services, startups, immigration consultants and property managers in Canada and the US.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonical, type: 'website', images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title, description },
};

const callUrl = 'https://calendly.com/emergent-logic/30min';

const industries = [
  {
    name: 'Manufacturing & distribution',
    href: '/industries/manufacturing-distribution',
    text: 'CRM for rep and dealer leads, quotes, reorders and CRM-to-ERP sync. Built around how quote → order → reorder actually works in your business.',
  },
  {
    name: 'Immigration consultants',
    href: '/immigration-consultant-crm-canada',
    text: 'Consultation intake, form routing, WhatsApp and email follow-up, and reporting for immigration consultancies in Canada. So every enquiry has an owner and a next step.',
  },
  {
    name: 'Property management',
    href: '/property-management-crm-consulting-canada',
    text: 'Owner inquiry routing, rental evaluation follow-up and reporting for property managers in Canada. So new-owner enquiries are answered and tracked, not lost in an inbox.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Industries we serve',
  url: canonical,
  itemListElement: industries.map((ind, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: ind.name,
    url: `https://www.emergent-logic.ca${ind.href}`,
  })),
};

export default function IndustriesHub() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <section className="pt-28 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: 'Industries', href: '/industries' }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CRM implementation by industry</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            The same CRM can be set up very differently for a distributor, an immigration consultancy or a property manager. Pick your industry to see how we approach it.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl grid gap-6 md:grid-cols-3">
          {industries.map((ind) => (
            <div key={ind.href} className="rounded-xl border border-gray-200 p-6 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{ind.name}</h2>
              <p className="text-gray-600 mb-4 flex-1">{ind.text}</p>
              <Link href={ind.href} className="text-violet-700 font-medium hover:underline">CRM for {ind.name.toLowerCase()} →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Don&apos;t see your industry?</h2>
          <p className="text-gray-600 mb-6">We work with small and medium B2B companies in any sector.</p>
          <TrackedCTA ctaName="Industries hub - Book a call" destination="calendly">
            <a href={callUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-700">
              Book a call <ArrowRight className="h-5 w-5" />
            </a>
          </TrackedCTA>
          <p className="mt-4 text-sm text-gray-600">Or see <Link href="/services" className="text-violet-700 hover:underline">all CRM services</Link>.</p>
        </div>
      </section>
      <Footer />
      <CookieConsent />
    </main>
  );
}
