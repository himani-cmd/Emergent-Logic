'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HexLogo from '@/components/HexLogo';
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

  const navBg = scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-sm border-b' : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-gray-700 hover:text-violet-600' : 'text-white/90 hover:text-white';
  const logoColor = scrolled || !isHome ? 'text-gray-900' : 'text-white';
  const logoVariant = scrolled || !isHome ? 'light' : 'default';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <HexLogo size={36} variant={logoVariant} className="flex-shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className={`text-lg font-bold ${logoColor} tracking-tight`}>Emergent Logic</span>
              <span className={`text-[10px] font-medium ${scrolled || !isHome ? 'text-violet-600' : 'text-violet-300'}`}>AI-Accelerated CRM Consulting</span>
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

            <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer" className="ml-2"
              onClick={() => trackCTAClick({ ctaName: 'Book a Call', location: 'navbar', destination: 'calendly' })}>
              <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-4">
                Book a Call
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden p-2 ${scrolled || !isHome ? 'text-gray-700' : 'text-white'}`}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white rounded-xl shadow-xl border mt-2 p-4 space-y-1">
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

            <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer" className="block mt-2"
              onClick={() => trackCTAClick({ ctaName: 'Book a Call', location: 'navbar_mobile', destination: 'calendly' })}>
              <Button className="w-full bg-violet-600 hover:bg-violet-700">Book a Call</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
