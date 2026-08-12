'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackCTAClick } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Database, Settings, Wrench } from 'lucide-react';

const services = [
  { title: 'CRM Implementation', href: '/services/crm-implementation', icon: Database },
  { title: 'HubSpot Consulting', href: '/services/hubspot-consulting', icon: Settings },
  { title: 'CRM Cleanup', href: '/services/crm-cleanup', icon: Wrench },
];

const navLinks = [
  { title: 'Pricing', href: '/pricing' },
  { title: 'Blog', href: '/blog' },
  { title: 'Methods', href: '/case-studies' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navBg = scrolled || !isHome ? 'bg-white shadow-sm border-b' : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-gray-700 hover:text-violet-600' : 'text-white/90 hover:text-white';
  const logoColor = scrolled || !isHome ? 'text-gray-900' : 'text-white';

  return (
    <nav className={`fixed top-0 w-full z-50 ${navBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* The approved artwork is not legible at navbar size, so use live brand text. */}
          <Link href="/" className="flex items-center" aria-label="Emergent Logic home">
            <div className="flex flex-col leading-tight">
              <span className={`text-lg font-bold ${logoColor}`}>Emergent Logic</span>
              <span className={`text-[10px] font-medium ${scrolled || !isHome ? 'text-violet-600' : 'text-violet-300'}`}>CRM Implementation, Integration &amp; Automation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${textColor}`}>Home</Link>

            {/* Services Dropdown */}
            <div className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${textColor}`}>
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border p-2 z-50">
                  {services.map((s, i) => (
                    <Link key={i} href={s.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-violet-50 transition-colors group">
                      <s.icon className="w-5 h-5 text-violet-500 group-hover:text-violet-600" />
                      <span className="text-gray-700 group-hover:text-violet-700 text-sm font-medium">{s.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link, i) => (
              <Link key={i} href={link.href} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${textColor}`}>
                {link.title}
              </Link>
            ))}

            <Button asChild size="sm" className="ml-2 bg-violet-600 px-4 font-semibold text-white hover:bg-violet-700">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer"
                onClick={() => trackCTAClick({ ctaName: 'Book a Call', location: 'navbar', destination: 'calendly' })}>
                Book a Call
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${scrolled || !isHome ? 'text-gray-700' : 'text-white'}`}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div id="mobile-navigation-menu" className="md:hidden bg-white rounded-xl shadow-xl border mt-2 p-4 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-violet-50 font-medium">Home</Link>

            <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Services</div>
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-violet-50">
                <s.icon className="w-4 h-4 text-violet-500" />
                <span className="text-gray-700 text-sm font-medium">{s.title}</span>
              </Link>
            ))}

            {navLinks.map((link, i) => (
              <Link key={i} href={link.href} className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-violet-50 font-medium">{link.title}</Link>
            ))}

            <Button asChild className="mt-2 w-full bg-violet-600 hover:bg-violet-700">
              <a href="https://calendly.com/emergent-logic/30min" target="_blank" rel="noopener noreferrer"
                onClick={() => trackCTAClick({ ctaName: 'Book a Call', location: 'navbar_mobile', destination: 'calendly' })}>
                Book a Call
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
