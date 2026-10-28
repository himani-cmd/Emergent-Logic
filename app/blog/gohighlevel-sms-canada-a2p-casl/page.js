import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Clock, MessageSquare } from 'lucide-react';
import { ArticleByline, ArticleAuthorBox } from '@/components/ArticleByline';

const url = 'https://www.emergent-logic.ca/blog/gohighlevel-sms-canada-a2p-casl';
const articleTitle = 'GoHighLevel Texting in Canada: A2P Registration, CASL Consent and a Setup Checklist';
const publishedDate = '2026-10-12';

export const metadata = {
  title: 'GoHighLevel SMS in Canada: A2P Registration and CASL Guide',
  description: 'Texting Canadian leads from GoHighLevel? When Canadian numbers need A2P or verification, what CASL requires, and a consent and setup checklist for 2026.',
  alternates: { canonical: url },
  openGraph: {
    title: 'GoHighLevel SMS in Canada: A2P Registration and CASL Guide | Emergent Logic',
    description: 'When Canadian numbers need A2P registration or verification in GoHighLevel, what CASL requires for text messages, and a consent and setup checklist.',
    url,
    type: 'article',
    images: [{ url: 'https://www.emergent-logic.ca/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel SMS in Canada: A2P Registration and CASL Guide',
    description: 'When Canadian numbers need A2P registration or verification in GoHighLevel, what CASL requires for text messages, and a consent and setup checklist.',
    images: ['https://www.emergent-logic.ca/og-image.png'],
  },
};

const faqs = [
  ['Do I need A2P registration to text Canadian customers from GoHighLevel?', 'For Canada-only texting, numbers bought before March 26, 2025 do not need it, while numbers bought on or after that date need A2P registration or Persona verification. Texting U.S. recipients from a Canadian number always needs A2P registration.'],
  ['Does CASL apply to text messages?', 'Yes. The CRTC states that commercial messages sent by text are covered by CASL and need consent, identification and an unsubscribe mechanism.'],
  ['Is a contact-form submission consent for marketing texts?', 'Not by itself. An inquiry can create limited implied consent for six months, but a separate, unticked opt-in is clearer evidence for marketing messages.'],
  ['How long does toll-free verification take?', 'HighLevel says review can take up to four to six weeks, although some submissions finish sooner.'],
];

const sources = [
  ['HighLevel Help, "Updated Messaging Policies for Canadian 10DLC Numbers: A2P Registration Requirements", updated September 4, 2026', 'https://help.gohighlevel.com/support/solutions/articles/155000004915-updated-messaging-policies-for-canadian-10dlc-numbers-a2p-registration-requirements'],
  ['HighLevel Help, "Toll-Free Number Verification Guide for LC Phone (US/Canada)", updated September 17, 2026', 'https://help.gohighlevel.com/support/solutions/articles/48001222300-toll-free-number-verification-guide-for-lc-phone-us-canada-'],
  ['HighLevel Help, "How to Configure SMS Compliance Settings", updated September 1, 2026', 'https://help.gohighlevel.com/support/solutions/articles/155000004684-how-to-configure-sms-compliance-settings'],
  ['CRTC, "Frequently Asked Questions about Canada\'s Anti-Spam Legislation" (checked October 5, 2026)', 'https://crtc.gc.ca/eng/com500/faq500.htm'],
];

const relatedPosts = [
  { title: 'GoHighLevel Implementation and Automation Support', href: '/services/gohighlevel-implementation' },
  { title: 'Free Lead Follow-Up Audit', href: '/lead-follow-up-audit' },
  { title: 'CRM and PIPEDA: Data Privacy for Canadian Businesses', href: '/blog/crm-pipeda-data-privacy-canada' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: articleTitle,
      description: 'When Canadian numbers need A2P registration or verification in GoHighLevel, what CASL requires for text messages, and a consent and setup checklist.',
      datePublished: publishedDate,
      dateModified: publishedDate,
      inLanguage: 'en-CA',
      mainEntityOfPage: url,
      author: { '@id': 'https://www.emergent-logic.ca/#naman-kharbanda' },
      publisher: { '@type': 'Organization', name: 'Emergent Logic Consulting', url: 'https://www.emergent-logic.ca' },
      about: ['GoHighLevel', 'SMS compliance', 'CASL'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(([name, text]) => ({
        '@type': 'Question',
        name,
        acceptedAnswer: { '@type': 'Answer', text },
      })),
    },
  ],
};

export default function GoHighLevelSmsCanadaA2pCasl() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Blog', href: '/blog' },
              { label: 'GoHighLevel SMS in Canada', href: '/blog/gohighlevel-sms-canada-a2p-casl' },
            ]} />

            <Badge className="mb-4 bg-cyan-100 text-cyan-800 border-cyan-200">GoHighLevel</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{articleTitle}</h1>
            <ArticleByline />

            <div className="flex items-center gap-6 text-gray-600 mb-8 flex-wrap">
              <span>Reviewed October 2026</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 7 min read</span>
            </div>
            <p className="text-sm text-gray-500 italic mb-6">General information, not legal advice</p>

            <ShareButtons url={url} title={articleTitle} />

            <div className="prose prose-lg max-w-none mt-8">
              <p className="lead text-xl text-gray-600">
                <strong>Quick answer:</strong> If you text Canadian leads from GoHighLevel (HighLevel), check two things before your first campaign. First, the carrier route: Canadian 10DLC numbers bought on or after March 26, 2025 need A2P registration or Persona verification for Canada-only texting, any Canadian number texting U.S. recipients needs A2P registration, and toll-free numbers need toll-free verification. Second, CASL: commercial texts need valid consent, sender identification and a working unsubscribe, and your CRM should record that consent.
              </p>

              <h2>Do Canadian numbers need A2P registration in GoHighLevel?</h2>
              <p>According to HighLevel&apos;s help centre (updated September 4, 2026), the answer depends on where you text and when the number was bought:</p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr><th>Your number and route</th><th>What HighLevel requires</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Canadian 10DLC number texting U.S. recipients</td><td>A2P registration, whatever the purchase date</td></tr>
                    <tr><td>Canadian 10DLC number bought before March 26, 2025, texting Canadian recipients only</td><td>No A2P registration required</td></tr>
                    <tr><td>Canadian 10DLC number bought on or after March 26, 2025, texting Canadian recipients only</td><td>A2P registration or Persona verification</td></tr>
                    <tr><td>Toll-free number (U.S. or Canada)</td><td>Toll-free verification instead of A2P</td></tr>
                  </tbody>
                </table>
              </div>
              <p>If a Canada-only number later needs to reach U.S. contacts, A2P registration becomes mandatory. HighLevel notes that unregistered traffic can fail or be blocked by carriers, and error 30034 commonly appears with registration problems.</p>

              <h2>What about toll-free numbers?</h2>
              <p>Toll-free numbers do not use A2P 10DLC registration. HighLevel says only toll-free numbers with a verified status can send texts to U.S. and Canadian recipients, and review can take four to six weeks. Reviewers want to see the full opt-in flow without a login, separate checkboxes for marketing and non-marketing messages, the business name, message types and frequency, HELP and STOP instructions, and links to your privacy policy and terms. Plan that time into any launch date.</p>

              <h2>What does CASL require for business text messages?</h2>
              <p>Canada&apos;s Anti-Spam Legislation (CASL) applies to commercial text messages, not only email. The CRTC&apos;s guidance sets out three requirements:</p>
              <ul>
                <li><strong>Consent.</strong> Express consent is the strongest basis and does not expire until it is withdrawn. Implied consent exists only in limited cases, such as within two years of a purchase or six months after an inquiry. Pre-checked boxes do not count.</li>
                <li><strong>Identification.</strong> Each message identifies who is sending it and how to reach them, or links to that information when space is short.</li>
                <li><strong>Unsubscribe.</strong> Recipients need a simple way to opt out, such as replying STOP. The mechanism must work for at least 60 days after sending, and requests must be processed within 10 business days.</li>
              </ul>
              <p>A lead filling in a contact form is not the same as agreeing to marketing texts. Replies about the inquiry itself are a different message type from a promotional campaign, so treat them separately.</p>

              <h2>How should consent be recorded in HighLevel?</h2>
              <p>Carrier approval and CASL both depend on proof. Set up the CRM so the proof exists for every contact:</p>
              <ul>
                <li>A form checkbox for marketing texts that is unchecked by default, with wording that names your business and the kind of messages people will receive.</li>
                <li>Custom fields for consent type (express or implied), consent date, source (which form or page) and the exact wording shown at the time.</li>
                <li>An expiry date for implied consent, with a workflow that stops marketing texts when it passes.</li>
                <li>Opt-outs that update the contact&apos;s status immediately, so no workflow re-enrols them.</li>
              </ul>
              <p>HighLevel&apos;s SMS compliance settings (updated September 1, 2026) can add opt-out language and sender identification automatically, recognise keywords such as STOP, UNSUBSCRIBE and CANCEL, and always include both in the first message of a conversation, including missed-call text-back and review requests. Turn these on, then test them.</p>

              <h2>A setup checklist before your first campaign</h2>
              <ol>
                <li>List every number in each sub-account, its purchase date and whether it will text Canada, the U.S. or both.</li>
                <li>Complete A2P registration, Persona verification or toll-free verification as required, using your legal business name and live website.</li>
                <li>Publish a privacy policy and terms page, and make the opt-in flow visible without a login.</li>
                <li>Build the consent fields and the implied-consent expiry workflow described above.</li>
                <li>Turn on HighLevel&apos;s opt-out language and sender identification settings.</li>
                <li>Send test messages to staff phones, reply STOP and confirm the contact is suppressed everywhere.</li>
                <li>Check workflows for re-entry rules, so a returning lead who opted out is not texted again.</li>
                <li>Write down who owns compliance questions and where the evidence is kept.</li>
              </ol>

              <h2>When to get help</h2>
              <p>
                If texts are failing, a registration was rejected, or you are not sure your consent records would stand up to review, it is worth checking the whole path before sending more. Emergent Logic configures and repairs HighLevel calendars, workflows and messaging around a tested lead journey, including consent and suppression checks. See <Link href="/services/gohighlevel-implementation" className="text-cyan-700 hover:underline">GoHighLevel implementation and automation support</Link>, or start with the <Link href="/lead-follow-up-audit" className="text-cyan-700 hover:underline">free lead follow-up audit</Link> of one visible inquiry path.
              </p>

              <h2>Frequently asked questions</h2>
              {faqs.map(([question, answer]) => (
                <div key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}

              <p><em>This article is general information, not legal advice. Messaging rules and HighLevel&apos;s requirements change; confirm the current rules in your own account and, for your situation, with a lawyer.</em></p>

              <h2>Sources</h2>
              <ul>
                {sources.map(([label, href]) => (
                  <li key={href}>{label}: <a href={href} target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline break-all">{href}</a></li>
                ))}
              </ul>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-cyan-700 to-blue-800 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Not sure your texting setup would hold up?</h3>
              <p className="text-white/80 mb-6">
                We can review the numbers, registrations, consent fields and suppression path before you send more.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-100">
                  Talk to Emergent Logic <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Related Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedPosts.map((post) => (
                  <Link key={post.href} href={post.href}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-cyan-600" />
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ArticleAuthorBox />
      </article>

      <Footer />
      <CookieConsent />
    </main>
  );
}
