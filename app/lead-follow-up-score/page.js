import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import LeadFollowUpScore from '@/components/LeadFollowUpScore';

const title = 'Free Lead Follow-Up Score: 2-Minute CRM Check';
const description = 'Answer 10 quick questions about how your business handles new leads and get an instant score with the three fixes that matter most. Free, no sign-up.';
const url = 'https://www.emergent-logic.ca/lead-follow-up-score';

export const metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title: `${title} | Emergent Logic`, description, url, type: 'website' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: `${title} | Emergent Logic`,
      description,
      isPartOf: { '@id': 'https://www.emergent-logic.ca/#website' },
      publisher: { '@id': 'https://www.emergent-logic.ca/#organization' },
    },
  ],
};

export default function LeadFollowUpScorePage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="pt-32 pb-12 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs tone="dark" items={[{ label: 'Lead Follow-Up Score', href: '/lead-follow-up-score' }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            How leaky is your lead follow-up? Take the 2-minute check
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Ten yes/no questions about what happens after someone fills in your form, calls or messages you. Your answers stay in your browser — nothing is sent or stored.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <LeadFollowUpScore />
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
