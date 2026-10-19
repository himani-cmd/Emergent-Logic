import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const pageUrl = 'https://www.emergent-logic.ca/case-studies/hubspot-email-health-b2b-equipment';
const h1 = 'How a Canadian B2B equipment company got its HubSpot email health back on track';

export const metadata = {
  title: 'HubSpot Email Health Case Study: Canadian B2B Equipment Company',
  description:
    'How a Canadian B2B equipment company took its HubSpot email health score from 3 to 9 out of 10 in about a month, with cleaner audiences and safeguards.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'HubSpot Email Health Case Study: Canadian B2B Equipment Company | Emergent Logic',
    description:
      'How a Canadian B2B equipment company took its HubSpot email health score from 3 to 9 out of 10 in about a month, with cleaner audiences and safeguards.',
    url: pageUrl,
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
};

const glance = [
  { label: 'Client', value: "a Canadian B2B equipment company (name withheld at the client's request)" },
  { label: 'Platform', value: 'HubSpot (marketing email)' },
  { label: 'Work', value: 'email deliverability clean-up, September – October 2026' },
];

const found = [
  'HubSpot rated the account’s email health 3 out of 10.',
  'Hard bounces (0.66%) and unsubscribes (0.91%) were both rated “Poor” by HubSpot for the period.',
  'The main sending list was built only from contact owner, region and marketing-contact status. It had no rules for recent engagement, lead source or past bounces.',
  'In the largest campaign that week, about 1.2% of emails bounced, and nearly two-thirds of those bounces were “unknown user” addresses.',
  'The sending domains were already authenticated in HubSpot. The evidence pointed to who was being emailed, and the rules around it, rather than to the technical setup.',
];

const did = [
  'Protected the history. No contacts were deleted, no unsubscribes were reversed, and bounce and suppression records were kept intact.',
  'Built one reusable “safe to send” audience. It automatically leaves out hard bounces, contacts without a usable email address, global unsubscribes, and contacts who are stale or no longer engaging.',
  'Fixed ownership. Contacts still assigned to deactivated users were reassigned, so replies and follow-ups reach a real person.',
  'Moved contacts who should not receive marketing email to non-marketing status. They stay in the CRM; they just aren’t emailed.',
  'Checked before sending. We tested campaign audiences, checked permission, source and links, and reviewed upcoming email drafts line by line before anything went out.',
];

const results = [
  'Click rate rose from about 1.4% to 3.7%.',
  'Of the people who opened an email, about 17% clicked, up from about 7%.',
  'Open rate rose from about 19% to 21.7%.',
  'Hard bounces fell by about two-thirds, to 0.22%, and unsubscribes by nearly half, to 0.45%.',
  '99.6% of emails were delivered, and the spam report rate was 0%.',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: h1,
  description: metadata.description,
  author: { '@type': 'Organization', name: 'Emergent Logic', url: 'https://www.emergent-logic.ca/' },
  publisher: { '@type': 'Organization', name: 'Emergent Logic', url: 'https://www.emergent-logic.ca/' },
  mainEntityOfPage: pageUrl,
  datePublished: '2026-10-19',
  dateModified: '2026-10-19',
};

export default function HubSpotEmailHealthB2BEquipmentCaseStudy() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
              Client engagement · details anonymised at the client&apos;s request
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">{h1}</h1>

            <section className="rounded-2xl border bg-gray-50 p-6 mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">At a glance</h2>
              <ul className="space-y-2 text-gray-700">
                {glance.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}:</strong> {item.value}
                  </li>
                ))}
                <li>
                  <strong>Result so far:</strong>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>HubSpot&apos;s email health score went from 3 out of 10 (&quot;Needs work&quot;) to 9 out of 10 in about a month.</li>
                    <li>Click rate rose from about 1.4% to 3.7% (the 31 days to 18 October 2026, compared with the 31 days before).</li>
                  </ul>
                </li>
              </ul>
            </section>

            <div className="prose prose-lg max-w-none">
              <h2>The problem</h2>
              <p>
                The company&apos;s one-to-one emails were reaching people. Its marketing emails sent through HubSpot were not: they were being filtered as spam or held back.
              </p>

              <h2>What we found</h2>
              <p>We started with a read-only review in September 2026, changing nothing:</p>
              <ul>
                {found.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>What we did</h2>
              <p>The client approved each change and kept the final decision on every send.</p>
              <ol>
                {did.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>

              <h2>Results so far</h2>
              <p>
                About a month after the review, HubSpot reported that overall email health had improved: the score went from 3 to 9 out of 10.
              </p>
              <p>HubSpot&apos;s email reporting for the 31 days to 18 October 2026, compared with the 31 days before:</p>
              <ul>
                {results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                We don&apos;t promise inbox placement; no one honestly can. What changed is that the company now sends to people who want and can receive its emails, with rules that keep it that way.
              </p>

              <h2>If this sounds familiar</h2>
              <p>
                If your one-to-one emails land but your HubSpot campaigns don&apos;t, start with who you&apos;re sending to before changing anything else.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  Book a free 30-minute call <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link href="/services/hubspot-consulting" className="text-blue-700 hover:underline self-center">
                HubSpot consulting
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <CookieConsent />
    </main>
  );
}
