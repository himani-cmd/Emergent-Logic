'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPhoneClick, trackEmailClick } from '@/lib/analytics';

export default function AnalyticsProvider({ children }) {
  const pathname = usePathname();

  // Track phone and email clicks globally via event delegation
  useEffect(() => {
    function handleClick(e) {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';

      // Phone click
      if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '').replace(/[^0-9+\-]/g, '');
        trackPhoneClick({
          location: pathname,
          phoneNumber: phone,
        });
      }

      // Email click
      if (href.startsWith('mailto:')) {
        const email = href.replace('mailto:', '').split('?')[0];
        trackEmailClick({
          location: pathname,
          email: email,
        });
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  return children;
}
