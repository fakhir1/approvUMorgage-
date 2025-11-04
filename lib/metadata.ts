import { Metadata } from "next";

interface GenerateMetadataProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  noindex?: boolean;
}

/**
 * Generate Next.js metadata object for SEO
 * 
 * @example
 * export const metadata = generateMetadata({
 *   title: "Mortgage Calculators | approvU",
 *   description: "Calculate your mortgage payments and affordability",
 *   canonical: "/mortgage/calculators/"
 * });
 */
export function generateMetadata({
  title,
  description,
  canonical,
  ogImage = "/images/og-default.jpg",
  ogType = "website",
  article,
  noindex = false,
}: GenerateMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://approu.com";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined;

  const metadata: Metadata = {
    title,
    description,
    ...(fullCanonical && { alternates: { canonical: fullCanonical } }),
    ...(noindex && { robots: { index: false, follow: false } }),
    
    openGraph: {
      title,
      description,
      url: fullCanonical,
      siteName: "approvU",
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_CA",
      type: ogType,
      ...(article && ogType === "article" && {
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime,
        authors: article.author ? [article.author] : undefined,
        section: article.section,
        tags: article.tags,
      }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`],
      creator: "@approvU",
    },

    other: {
      "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    },
  };

  return metadata;
}

/**
 * Generate structured data (JSON-LD) for SEO
 * 
 * @example
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData({...})) }}
 * />
 */
export function generateStructuredData(data: {
  type: "Organization" | "Article" | "FAQPage" | "WebPage" | "BreadcrumbList";
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  headline?: string;
  image?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://approu.com";

  const baseSchema = {
    "@context": "https://schema.org",
  };

  switch (data.type) {
    case "Organization":
      return {
        ...baseSchema,
        "@type": "Organization",
        name: data.name || "approvU",
        url: data.url || baseUrl,
        logo: data.logo || `${baseUrl}/logo.png`,
        description: data.description,
        sameAs: [
          "https://www.facebook.com/approvU",
          "https://twitter.com/approvU",
          "https://www.linkedin.com/company/approvu",
        ],
      };

    case "Article":
      return {
        ...baseSchema,
        "@type": "Article",
        headline: data.headline,
        description: data.description,
        image: data.image ? `${baseUrl}${data.image}` : undefined,
        datePublished: data.publishedDate,
        dateModified: data.modifiedDate || data.publishedDate,
        author: {
          "@type": "Person",
          name: data.author || "approvU Mortgage Team",
        },
        publisher: {
          "@type": "Organization",
          name: "approvU",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.png`,
          },
        },
      };

    case "FAQPage":
      return {
        ...baseSchema,
        "@type": "FAQPage",
        mainEntity: data.faqs?.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };

    case "BreadcrumbList":
      return {
        ...baseSchema,
        "@type": "BreadcrumbList",
        itemListElement: data.breadcrumbs?.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: `${baseUrl}${crumb.url}`,
        })),
      };

    case "WebPage":
    default:
      return {
        ...baseSchema,
        "@type": "WebPage",
        name: data.name,
        description: data.description,
        url: data.url ? `${baseUrl}${data.url}` : undefined,
      };
  }
}

/**
 * Common metadata presets for quick use
 */
export const metadataPresets = {
  mortgage: {
    title: "Mortgage Services | approvU",
    description: "Expert mortgage services for Canadian homebuyers. Get pre-approved, compare rates, and find the perfect mortgage solution.",
  },
  calculators: {
    title: "Mortgage Calculators | approvU",
    description: "Free Canadian mortgage calculators. Calculate payments, affordability, down payments, and land transfer taxes.",
  },
  rates: {
    title: "Current Mortgage Rates | approvU",
    description: "Compare the latest fixed and variable mortgage rates from top Canadian lenders. Find the best rate for your home purchase.",
  },
};
