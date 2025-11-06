'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import { useEffect, useState } from 'react';

export default function ConditionalFooter() {
  const pathname = usePathname();
  const [socialLinks, setSocialLinks] = useState({
    linkedinUrl: 'https://linkedin.com/company/approvu',
    twitterUrl: 'https://twitter.com/approvumortgage',
    facebookUrl: 'https://facebook.com/approvu',
    instagramUrl: 'https://instagram.com/approvu',
  });
  
  // Fetch social links from API on mount
  useEffect(() => {
    fetch('/api/admin/settings')
      .then((res) => {
        // Check if response is OK and is JSON
        if (!res.ok) {
          // If not authorized or error, just use defaults
          return null;
        }
        return res.json();
      })
      .then((result) => {
        if (result && result.data) {
          setSocialLinks({
            linkedinUrl: result.data.linkedinUrl || socialLinks.linkedinUrl,
            twitterUrl: result.data.twitterUrl || socialLinks.twitterUrl,
            facebookUrl: result.data.facebookUrl || socialLinks.facebookUrl,
            instagramUrl: result.data.instagramUrl || socialLinks.instagramUrl,
          });
        }
      })
      .catch((err) => {
        // Silently fail and use default links
        console.log('Using default social links');
      });
  }, []);
  
  // Don't show footer on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }
  
  return <Footer socialLinks={socialLinks} />;
}
