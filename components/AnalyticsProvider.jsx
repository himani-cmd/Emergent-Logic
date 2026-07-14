'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { GA_MEASUREMENT_ID, trackPhoneClick, trackEmailClick } from '@/lib/analytics';

export default function AnalyticsProvider({ children }) {
  const pathname = usePathname();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setAnalyticsEnabled(localStorage.getItem('cookieConsent') === 'accepted');
    };

    syncConsent();
    window.addEventListener('cookie-consent-changed', syncConsent);
    return () => window.removeEventListener('cookie-consent-changed', syncConsent);
  }, []);

  useEffect(() => {
    if (!analyticsEnabled || typeof window.gtag !== 'function') return;

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pathname,
    });
  }, [analyticsEnabled, pathname]);

  // Track phone and email clicks globally via event delegation
  useEffect(() => {
    function handleClick(e) {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';

      // Phone click
      if (href.startsWith('tel:')) {
        trackPhoneClick({
          location: pathname,
        });
      }

      // Email click
      if (href.startsWith('mailto:')) {
        trackEmailClick({
          location: pathname,
        });
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  return (
    <>
      {analyticsEnabled && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
              window.gtag = gtag;
            `}
          </Script>
        </>
      )}
      {children}
    </>
  );
}
