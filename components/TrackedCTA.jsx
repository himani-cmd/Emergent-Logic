'use client';

import { usePathname } from 'next/navigation';
import { trackCTAClick } from '@/lib/analytics';

// Wraps any CTA link/button with click tracking
// Usage: <TrackedCTA ctaName="Book a CRM Consultation" destination="calendly">
//          <a href="..."><Button>...</Button></a>
//        </TrackedCTA>
export default function TrackedCTA({ ctaName, destination, children }) {
  const pathname = usePathname();

  function handleClick() {
    trackCTAClick({
      ctaName: ctaName,
      location: pathname,
      destination: destination || 'unknown',
    });
  }

  return (
    <span onClick={handleClick} className="contents">
      {children}
    </span>
  );
}
