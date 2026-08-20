'use client';

import { trackEvent } from '@/lib/analytics';

export default function TrackedDownload({ href, fileName, resourceName, className, children }) {
  function handleClick() {
    trackEvent('resource_download_click', {
      resource_name: resourceName,
      file_name: fileName,
      page_location: window.location.pathname,
    });
  }

  return (
    <a href={href} download={fileName} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
