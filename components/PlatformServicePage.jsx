import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackedCTA from '@/components/TrackedCTA';
import { ArrowRight } from 'lucide-react';

const BOOKING_URL = 'https://calendly.com/emergent-logic/30min';

// Renders inline text with optional links: parts are strings or [label, href] pairs.
function Rich({ parts }) {
  return parts.map((part, i) =>
    typeof part === 'string'
      ? <span key={i}>{part}</span>
      : <Link key={i} href={part[1]} className="font-semibold text-[#4B37C8] underline">{part[0]}</Link>
  );
}

function BookCall({ ctaName }) {
  return (
    <TrackedCTA ctaName={ctaName} destination="calendly">
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-md bg-[#4B37C8] px-5 py-3 text-center font-semibold text-white hover:bg-[#38279D]">
        Book a free 30-minute call <ArrowRight className="h-5 w-5 flex-none" />
      </a>
    </TrackedCTA>
  );
}

export function buildPlatformJsonLd({ canonical, name, serviceType, description, faqs }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name, description, dateModified: '2026-11-12', isPartOf: { '@id': 'https://www.emergent-logic.ca/#website' }, mainEntity: { '@id': `${canonical}#service` } },
      { '@type': 'Service', '@id': `${canonical}#service`, name, serviceType, description, url: canonical, provider: { '@id': 'https://www.emergent-logic.ca/#organization' }, areaServed: [{ '@type': 'Country', name: 'Canada' }, { '@type': 'Country', name: 'United States' }] },
      { '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  };
}

export default function PlatformServicePage({ jsonLd, crumb, eyebrow, h1, quickAnswer, ctaLabel, setupHeading, setupIntro, areas, fit, migration, method, faqHeading, faqs, related }) {
  return (
    <main className="min-h-screen bg-[#FBFBFF] text-[#101828]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <section className="bg-[#1E3A5F] pb-16 pt-28 text-white md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="[&_nav]:text-[#DFE3F5] [&_nav_span]:text-white"><Breadcrumbs items={[{ label: 'Services', href: '/#services' }, crumb]} /></div>
          <p className="mt-8 text-sm font-semibold text-[#BFD4FF]">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{h1}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#E7ECF5]">{quickAnswer}</p>
          <div className="mt-8"><BookCall ctaName={`${ctaLabel} - Book a call - Hero`} /></div>
          <p className="mt-4 text-sm text-[#CBD5E1]">Independent CRM consultancy based in Surrey, BC. Remote delivery across Canada and the US.</p>
        </div>
      </section>

      <section className="py-16"><div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-[#1E3A5F]">{setupHeading}</h2>
        <p className="mt-4 max-w-3xl leading-8 text-[#667085]">{setupIntro}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {areas.map(({ title, text }) => (
            <article key={title} className="min-w-0 border-t-4 border-[#0F766E] bg-white p-6">
              <h3 className="text-xl font-bold text-[#1E3A5F]">{title}</h3>
              <p className="mt-3 leading-7 text-[#667085]"><Rich parts={text} /></p>
            </article>
          ))}
        </div>
      </div></section>

      <section className="bg-white py-16"><div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-[#1E3A5F]">{fit.heading}</h2>
        <p className="mt-4 leading-8 text-[#667085]"><Rich parts={fit.intro} /></p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="min-w-0 border border-[#DFE3F5] p-6">
            <h3 className="text-xl font-bold text-[#1E3A5F]">Usually a good fit</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#475467]">{fit.good.map((t, i) => <li key={i}><Rich parts={t} /></li>)}</ul>
          </article>
          <article className="min-w-0 border border-[#DFE3F5] p-6">
            <h3 className="text-xl font-bold text-[#1E3A5F]">Consider an alternative</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#475467]">{fit.alt.map((t, i) => <li key={i}><Rich parts={t} /></li>)}</ul>
          </article>
        </div>
        <p className="mt-6 leading-8 text-[#667085]"><Rich parts={fit.outro} /></p>
      </div></section>

      <section className="py-16"><div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-[#1E3A5F]">{migration.heading}</h2>
        {migration.paragraphs.map((p, i) => <p key={i} className="mt-4 leading-8 text-[#667085]"><Rich parts={p} /></p>)}
      </div></section>

      <section className="bg-white py-16"><div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-[#1E3A5F]">How a project runs</h2>
        <ol className="mt-8 space-y-5">
          {method.map(([title, text], i) => (
            <li key={title} className="grid min-w-0 grid-cols-[36px_minmax(0,1fr)] gap-4 bg-[#FBFBFF] p-5">
              <span className="text-2xl font-bold text-[#4B37C8]">{i + 1}</span>
              <div><h3 className="text-xl font-bold text-[#1E3A5F]">{title}</h3><p className="mt-3 leading-7 text-[#667085]">{text}</p></div>
            </li>
          ))}
        </ol>
        <p className="mt-6 leading-8 text-[#667085]">Read the full <Link href="/crm-implementation-method" className="font-semibold text-[#4B37C8] underline">CRM implementation method</Link> for how discovery, configuration, testing and handoff fit together.</p>
      </div></section>

      <section className="py-16"><div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-[#1E3A5F]">{faqHeading}</h2>
        <div className="mt-8 divide-y divide-[#DFE3F5]">
          {faqs.map(([q, a]) => (
            <article key={q} className="py-6">
              <h3 className="text-xl font-bold text-[#1E3A5F]">{q}</h3>
              <p className="mt-3 leading-7 text-[#667085]">{a}</p>
            </article>
          ))}
        </div>
      </div></section>

      <section className="bg-white py-16"><div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-[#1E3A5F]">Related services and guides</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {related.map(([label, href]) => <Link key={href} href={href} className="border border-[#DFE3F5] bg-white p-5 font-semibold text-[#4B37C8] hover:underline">{label}</Link>)}
        </div>
      </div></section>

      <section className="bg-[#1E3A5F] py-16 text-white"><div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold">Talk through your {ctaLabel} setup</h2>
        <p className="mt-5 text-lg leading-8 text-[#E7ECF5]">A free 30-minute call is enough to understand where your CRM stands, what is getting in the way, and whether a fit assessment makes sense. The fit assessment ends with a written plan and quote.</p>
        <div className="mt-8"><BookCall ctaName={`${ctaLabel} - Book a call - Final`} /></div>
        <p className="mt-6 text-sm text-[#CBD5E1]">Prefer email? <Link href="/contact" className="underline hover:text-white">Send us a message</Link>. Requests are reviewed on business days.</p>
        <p className="mt-10 text-xs leading-6 text-[#CBD5E1]">All product names and trademarks are the property of their respective owners. Emergent Logic is not affiliated with, endorsed or sponsored by them.</p>
      </div></section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
