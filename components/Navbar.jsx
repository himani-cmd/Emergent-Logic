'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import ELLogo from '@/components/ELLogo';
import { Menu, X, Sparkles, Database, Zap, Link2, Code, Settings, Wrench, TrendingUp } from 'lucide-react';

const services = [
  { title: 'CRM Implementation', href: '/services/crm-implementation', icon: Database },
  { title: 'HubSpot Consulting', href: '/services/hubspot-consulting', icon: Settings },
  { title: 'CRM Cleanup', href: '/services/crm-cleanup', icon: Wrench },
  { title: 'Marketing Automation', href: '/services/marketing-automation', icon: Zap },
  { title: 'CRM Integration', href: '/services/crm-integration', icon: Link2 },
  { title: 'Salesforce Consulting', href: '/services/salesforce-consulting', icon: TrendingUp },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-gray-700' : 'text-white/90';
  const logoColor = scrolled || !isHome ? 'text-gray-900' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <ELLogo size={40} className="rounded-xl flex-shrink-0" />
            <div className="flex flex-col">
              <span className={`text-xl font-bold ${logoColor}`}>Emergent Logic</span>
              <span className={`text-xs ${scrolled || !isHome ? 'text-violet-600' : 'text-violet-300'}`}>AI-Powered CRM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className={`font-medium transition-colors hover:text-violet-600 ${textColor}`}>Home</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`${scrolled || !isHome ? '' : 'bg-transparent text-white/90 hover:bg-white/10 hover:text-white'}`}>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[300px] p-4 space-y-2">
                      {services.map((service) => (
                        <li key={service.href + service.title}>
                          <NavigationMenuLink asChild>
                            <Link href={service.href} className="flex items-center gap-3 p-3 rounded-lg hover:bg-violet-50 transition-colors">
                              <service.icon className="w-5 h-5 text-violet-600" />
                              <span className="font-medium text-gray-900">{service.title}</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/pricing" className={`font-medium transition-colors hover:text-violet-600 ${textColor}`}>Pricing</Link>
            <Link href="/blog" className={`font-medium transition-colors hover:text-violet-600 ${textColor}`}>Blog</Link>
            <Link href="/about" className={`font-medium transition-colors hover:text-violet-600 ${textColor}`}>About</Link>
            <Link href="/contact" className={`font-medium transition-colors hover:text-violet-600 ${textColor}`}>Contact</Link>
            
            <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">Book a Call</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className={scrolled || !isHome ? 'text-gray-900' : 'text-white'} /> : <Menu className={scrolled || !isHome ? 'text-gray-900' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl p-6 mb-4">
            <Link href="/" className="block py-3 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services" className="block py-3 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/pricing" className="block py-3 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/blog" className="block py-3 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/about" className="block py-3 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="block py-3 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
            <a href="https://calendly.com/himani-emergentlogics/30min" target="_blank" rel="noopener noreferrer" className="block mt-4">
              <Button className="w-full bg-violet-600 hover:bg-violet-700">Book a Call</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
