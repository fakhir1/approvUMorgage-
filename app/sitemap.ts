import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://approvu.com';
  
  // Static pages
  const staticPages = [
    '',
    '/about-approu',
    '/approu-contact-details',
    '/approu-faqs',
    '/mortgage-appointment-online',
    '/mortgage',
    '/mortgage/basics',
    '/mortgage/calculators',
    '/mortgage/brokers',
    '/mortgage/rates',
    '/mortgage/lenders',
    '/mortgage/first-time-homebuyers',
    '/mortgage/credit-score',
    '/mortgage/down-payment',
    '/mortgage/qualification',
    '/mortgage/types',
    '/mortgage/refinancing',
  ];

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : 0.8,
  }));

  // Add calculator pages
  const calculators = [
    'mortgage-payment-calculator',
    'affordability-calculator',
    'down-payment-calculator',
    'refinance-calculator',
    'land-transfer-tax-calculator-canada',
  ];

  calculators.forEach((calc) => {
    sitemapEntries.push({
      url: `${baseUrl}/mortgage/calculators/${calc}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  // Add province pages for brokers
  const provinces = ['ontario', 'british-columbia', 'alberta', 'quebec'];
  provinces.forEach((province) => {
    sitemapEntries.push({
      url: `${baseUrl}/mortgage/brokers/${province}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
    
    sitemapEntries.push({
      url: `${baseUrl}/mortgage/rates/${province}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
