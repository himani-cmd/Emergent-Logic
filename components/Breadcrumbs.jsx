import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items, tone = 'light' }) {
  const isDark = tone === 'dark';

  // Generate JSON-LD for breadcrumbs
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.emergent-logic.ca',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `https://www.emergent-logic.ca${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className={`mb-6 flex items-center gap-2 text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`} aria-label="Breadcrumb">
        <Link href="/" className={`flex items-center gap-1 transition-colors ${isDark ? 'hover:text-white' : 'hover:text-violet-600'}`}>
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center gap-2">
            <ChevronRight className={`h-4 w-4 ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
            {index === items.length - 1 ? (
              <span className={`font-medium ${isDark ? 'text-white/90' : 'text-gray-900'}`}>{item.label}</span>
            ) : (
              <Link href={item.href} className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-violet-600'}`}>
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
