import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

import { navMenus } from '@/lib/siteNav';

// Footer: same four groups as the header, shorter (website brief 2026-10-09).
const footerGroups = [
  {
    title: 'Services',
    links: [
      { name: 'All services', href: '/services' },
      { name: 'CRM implementation', href: '/services/crm-implementation' },
      { name: 'CRM integration', href: '/services/crm-integration' },
      { name: 'Marketing automation', href: '/services/marketing-automation' },
      { name: 'CRM cleanup', href: '/services/crm-cleanup' },
      { name: 'HubSpot admin support', href: '/hubspot-admin-support-canada-us' },
      { name: 'AI automation consulting', href: '/services/ai-automation-consulting' },
    ],
  },
  ...['platforms', 'industries'].map((key) => {
    const menu = navMenus.find((m) => m.key === key);
    return { title: menu.title, links: menu.links.map((l) => ({ name: l.title, href: l.href })) };
  }),
  {
    title: 'Resources',
    links: [
      ...navMenus.find((m) => m.key === 'resources').links.map((l) => ({ name: l.title, href: l.href })),
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Book a Call', href: 'https://calendly.com/emergent-logic/30min', external: true },
    ],
  },
];

const locations = ['Surrey', 'Abbotsford', 'Langley', 'Coquitlam', 'Port Coquitlam', 'Burnaby', 'Richmond', 'Vancouver'];
const googleBusinessProfileMapUrl = 'https://www.google.com/maps/search/?api=1&query=Emergent%20Logic%20Consulting&query_place_id=ChIJc3FCXsGbsQwRDXMYESadpec';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4" aria-label="Emergent Logic home">
              <Image
                src="/brand/emergent-logic-primary-logo-dark-500.png"
                alt="Emergent Logic"
                width={180}
                height={180}
                className="h-[180px] w-[180px]"
              />
            </Link>
            <p className="text-gray-400 mb-4">CRM implementation, integration, and automation for Greater Vancouver businesses.</p>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-violet-400" />
                <a
                  href={googleBusinessProfileMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400"
                  aria-label="Emergent Logic service area on Google Maps"
                >
                  Surrey, BC, Canada
                </a>
              </div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-violet-400" /><a href="mailto:info@emergent-logic.ca" className="hover:text-violet-400">info@emergent-logic.ca</a></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-violet-400" /><a href="tel:+17784862331" className="hover:text-violet-400">778-486-2331</a></div>
            </div>
            <p className="mt-4 text-gray-400 text-sm"><span className="font-semibold text-gray-300">Serving Greater Vancouver:</span> {locations.join(', ')}</p>
            <div className="mt-5 flex items-center gap-2" aria-label="Emergent Logic social profiles">
              <a
                href="https://www.instagram.com/emergentlogiccrm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 text-gray-300 transition-colors hover:border-violet-400 hover:text-violet-300"
                aria-label="Emergent Logic on Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/emergent-logic-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 text-gray-300 transition-colors hover:border-violet-400 hover:text-violet-300"
                aria-label="Emergent Logic on LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {group.links.map((link) => (
                  <li key={link.href + link.name}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">{link.name}</a>
                    ) : (
                      <Link href={link.href} className="hover:text-violet-400 transition-colors">{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm space-y-1">
              <p>© 2026 Emergent Logic. All rights reserved.</p>
              <p className="text-xs">All product names and trademarks are the property of their respective owners. Emergent Logic is not affiliated with, endorsed or sponsored by them.</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-violet-400">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-violet-400">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
