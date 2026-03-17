import Link from 'next/link';
import { Sparkles, Mail, MapPin, Clock, Linkedin, Twitter } from 'lucide-react';

const services = [
  { name: 'CRM Implementation', href: '/crm-implementation' },
  { name: 'Marketing Automation', href: '/marketing-automation' },
  { name: 'Web Development', href: '/web-development' },
  { name: 'Digital Marketing', href: '/digital-marketing' },
];

const locations = [
  { name: 'Salesforce Consultant Surrey', href: '/salesforce-consultant-surrey-bc' },
  { name: 'HubSpot Consultant Vancouver', href: '/hubspot-consultant-vancouver' },
  { name: 'CRM Consultant Surrey', href: '/crm-consultant-surrey-bc' },
];

const resources = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">EmergentLogic</span>
                <span className="text-xs text-violet-400">AI-Powered</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              AI-accelerated CRM implementation, marketing automation, and web development. We build revenue systems — not just websites.
            </p>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-violet-400" />
                <a href="mailto:info@emergent-logic.ca" className="hover:text-violet-400 transition-colors">info@emergent-logic.ca</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-violet-400" />
                <span>Surrey, BC, Canada</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-violet-400" />
                <span>Mon-Fri: 9AM-6PM PST</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-gray-400">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-violet-400 transition-colors">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Local Services</h4>
            <ul className="space-y-3 text-gray-400">
              {locations.map((location) => (
                <li key={location.href}>
                  <Link href={location.href} className="hover:text-violet-400 transition-colors">{location.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-400">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link href={resource.href} className="hover:text-violet-400 transition-colors">{resource.name}</Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a href="https://linkedin.com/company/emergent-logic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-violet-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-violet-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Emergent Logic Consulting. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-violet-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-violet-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
