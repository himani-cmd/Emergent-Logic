'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackCTAClick } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navMenus } from '@/lib/siteNav';

function MenuLinks({ menu, linkClass, groupLabelClass }) {
  if (menu.groups) {
    return (
      <>
        {menu.groups.map((group) => (
          <div key={group.title} className="mb-2">
            <div className={groupLabelClass}>{group.title}</div>
            {group.links.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>{l.title}</Link>
            ))}
          </div>
        ))}
        {menu.footer && (
          <Link href={menu.footer.href} className={`${linkClass} font-semibold text-violet-700`}>{menu.footer.title}</Link>
        )}
      </>
    );
  }
  return menu.links.map((l) => (
    <Link key={l.href} href={l.href} className={linkClass}>{l.title}</Link>
  ));
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenMenu(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
            {navMenus.map((menu) => {
              const isOpen = openMenu === menu.key;
              return (
                <div key={menu.key} className="relative"
                  onMouseEnter={() => setOpenMenu(menu.key)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpenMenu(null); }}
                >
                  <button
                    type="button"
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${textColor}`}
                    aria-expanded={isOpen}
                    aria-controls={`menu-${menu.key}`}
                    onClick={() => setOpenMenu(isOpen ? null : menu.key)}
                  >
                    {menu.title} <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div id={`menu-${menu.key}`} className={`absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border p-3 z-50 ${menu.groups ? 'w-[34rem] grid grid-cols-2 gap-x-4' : 'w-72'}`}>
                      <MenuLinks
                        menu={menu}
                        linkClass="block px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700"
                        groupLabelClass="px-3 pt-1 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-400"
                      />
                    </div>
                  )}
                </div>
              );
            })}

            <Link href="/about" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${textColor}`}>About</Link>

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
          <div id="mobile-navigation-menu" className="md:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto bg-white rounded-xl shadow-xl border mt-2 p-4 space-y-1">
            {navMenus.map((menu) => {
              const isOpen = mobileSection === menu.key;
              return (
                <div key={menu.key}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-violet-50 font-medium"
                    aria-expanded={isOpen}
                    aria-controls={`mobile-menu-${menu.key}`}
                    onClick={() => setMobileSection(isOpen ? null : menu.key)}
                  >
                    {menu.title} <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div id={`mobile-menu-${menu.key}`} className="pl-3 pb-2">
                      <MenuLinks
                        menu={menu}
                        linkClass="block px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-violet-50"
                        groupLabelClass="px-3 pt-2 text-xs font-semibold uppercase tracking-wider text-gray-400"
                      />
                    </div>
                  )}
                </div>
              );
            })}

            <Link href="/about" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-violet-50 font-medium">About</Link>

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
