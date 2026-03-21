import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';

const servicesLinks = [
  { name: 'CRM Implementation', href: '/services/crm-implementation' },
  { name: 'HubSpot Consulting', href: '/services/hubspot-consulting' },
  { name: 'CRM Cleanup', href: '/services/crm-cleanup' },
  { name: 'Marketing Automation', href: '/services/marketing-automation' },
  { name: 'CRM Integration', href: '/services/crm-integration' },
  { name: 'Salesforce Consulting', href: '/services/salesforce-consulting' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Book a Call', href: 'https://calendly.com/himani-emergentlogics/30min', external: true },
];

const locations = ['Surrey', 'Abbotsford', 'Langley', 'Coquitlam', 'Port Coquitlam', 'Burnaby', 'Richmond', 'Vancouver'];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/el-logo-header.png"
                alt="Emergent Logic"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Emergent Logic</span>
                <span className="text-xs text-violet-400">AI-Powered CRM</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">AI-accelerated CRM implementation for Greater Vancouver businesses.</p>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-violet-400" />Surrey, BC, Canada</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-violet-400" /><a href="mailto:info@emergent-logic.ca" className="hover:text-violet-400">info@emergent-logic.ca</a></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-violet-400" /><a href="tel:+17786526271" className="hover:text-violet-400">778-652-6271</a></div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {servicesLinks.map((link) => (
                <li key={link.href + link.name}><Link href={link.href} className="hover:text-violet-400 transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">{link.name}</a>
                  ) : (
                    <Link href={link.href} className="hover:text-violet-400 transition-colors">{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Serving Greater Vancouver</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              {locations.map((loc) => (<li key={loc}>{loc}</li>))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 Emergent Logic. All rights reserved.</p>
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
