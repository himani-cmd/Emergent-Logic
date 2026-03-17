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
import { Menu, X, Sparkles } from 'lucide-react';

const services = [
  { title: 'CRM Implementation', href: '/crm-implementation', description: 'Salesforce, HubSpot, and 12+ platforms' },
  { title: 'Marketing Automation', href: '/marketing-automation', description: 'HubSpot, Marketo, Pardot, and more' },
  { title: 'Web Development', href: '/web-development', description: 'AI-accelerated websites and apps' },
  { title: 'Digital Marketing', href: '/digital-marketing', description: 'SEO, AEO, GEO, and Google Ads' },
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

  const navBackground = scrolled || !isHome 
    ? 'bg-white/95 backdrop-blur-md shadow-lg' 
    : 'bg-transparent';
  
  const textColor = scrolled || !isHome ? 'text-gray-700' : 'text-white/90';
  const logoColor = scrolled || !isHome ? 'text-gray-900' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold ${logoColor}`}>EmergentLogic</span>
              <span className={`text-xs ${scrolled || !isHome ? 'text-violet-600' : 'text-violet-300'}`}>AI-Powered</span>
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
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link href={service.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-violet-50 hover:text-violet-900">
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">{service.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="col-span-2 border-t pt-3 mt-2">
                        <Link href="/services" className="text-sm text-violet-600 hover:text-violet-800 font-medium">View All Services →</Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/pricing" className={`font-medium transition-colors hover:text-violet-600 ${textColor}`}>Pricing</Link>
            <Link href="/blog" className={`font-medium transition-colors hover:text-violet-600 ${textColor}`}>Blog</Link>
            <Link href="/about" className={`font-medium transition-colors hover:text-violet-600 ${textColor}`}>About Us</Link>
            <Link href="/contact" className={`font-medium transition-colors hover:text-violet-600 ${textColor}`}>Contact</Link>
            
            <Link href="/contact">
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                <Sparkles className="w-4 h-4 mr-2" />Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className={scrolled || !isHome ? 'text-gray-900' : 'text-white'} /> : <Menu className={scrolled || !isHome ? 'text-gray-900' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl p-6 mb-4">
            <Link href="/" className="block py-3 text-gray-700 font-medium hover:text-violet-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services" className="block py-3 text-gray-700 font-medium hover:text-violet-600" onClick={() => setIsOpen(false)}>Services</Link>
            <div className="pl-4 border-l-2 border-violet-100 ml-2">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="block py-2 text-gray-600 text-sm hover:text-violet-600" onClick={() => setIsOpen(false)}>{service.title}</Link>
              ))}
            </div>
            <Link href="/pricing" className="block py-3 text-gray-700 font-medium hover:text-violet-600" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/blog" className="block py-3 text-gray-700 font-medium hover:text-violet-600" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/about" className="block py-3 text-gray-700 font-medium hover:text-violet-600" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/contact" className="block py-3 text-gray-700 font-medium hover:text-violet-600" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/contact" className="block mt-4" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-violet-600 hover:bg-violet-700">Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
