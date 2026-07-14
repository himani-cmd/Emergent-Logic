'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay to prevent flash
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    window.dispatchEvent(new Event('cookie-consent-changed'));
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    window.dispatchEvent(new Event('cookie-consent-changed'));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-violet-600" />
              </div>
            </div>
            <div className="flex-grow">
              <h4 className="font-semibold text-gray-900 mb-1">We value your privacy</h4>
              <p className="text-gray-600 text-sm">
                Accept enables optional analytics cookies so we can measure site performance. Decline keeps optional analytics disabled.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button variant="outline" onClick={declineCookies}>
                Decline
              </Button>
              <Button className="bg-violet-600 hover:bg-violet-700" onClick={acceptCookies}>
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
