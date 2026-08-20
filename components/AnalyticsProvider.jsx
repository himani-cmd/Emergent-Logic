'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  GA_MEASUREMENT_ID,
  trackConsultationBookingStarted,
  trackEmailClick,
  trackPhoneClick,
} from '@/lib/analytics';

const CLARITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'y55xz9616k';

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
    if (!analyticsEnabled) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };

    if (!window.__emergentGa4Initialized) {
      window.gtag('js', new Date());
      window.__emergentGa4Initialized = true;
    }

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pathname,
    });

    if (CLARITY_PROJECT_ID) {
      window.clarity =
        window.clarity ||
        function clarity() {
          (window.clarity.q = window.clarity.q || []).push(arguments);
        };
      window.clarity('consent');
      window.clarity('set', 'page_path', pathname);
    }
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

      // A click to Calendly is a booking start, not a confirmed appointment.
      try {
        const destination = new URL(href, window.location.origin);
        if (
          destination.hostname === 'calendly.com' ||
          destination.hostname.endsWith('.calendly.com')
        ) {
          trackConsultationBookingStarted({ location: pathname });
        }
      } catch {
        // Ignore malformed or non-navigation href values.
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  return (
    <>
      {analyticsEnabled && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
      )}
      {analyticsEnabled && CLARITY_PROJECT_ID && (
        <Script
          id="microsoft-clarity"
          src={`https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`}
          strategy="afterInteractive"
        />
      )}
      {children}
    </>
  );
}
