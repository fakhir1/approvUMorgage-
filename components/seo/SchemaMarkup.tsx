/**
 * Schema Markup Component
 * Adds JSON-LD structured data for better SEO and rich snippets in Google search
 * This is invisible to users - only search engines see it
 */

interface SchemaMarkupProps {
  schema: object | object[]
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  const schemaArray = Array.isArray(schema) ? schema : [schema]
  
  return (
    <>
      {schemaArray.map((schemaItem, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaItem)
          }}
        />
      ))}
    </>
  )
}

// Organization Schema - For business information
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "approvU",
  "alternateName": "approvU Mortgage Solutions",
  "url": "https://www.approvu.ca",
  "logo": "https://www.approvu.ca/images/logo.png",
  "description": "Expert mortgage guidance, calculators, and solutions for Canadian homebuyers. Licensed mortgage broker serving all of Canada.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CA",
    "addressRegion": "Ontario"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service",
    "areaServed": "CA",
    "availableLanguage": ["en", "fr"]
  },
  "sameAs": [
    "https://www.facebook.com/approvu",
    "https://www.linkedin.com/company/approvu",
    "https://twitter.com/approvu"
  ]
}

// Website Schema - For sitelinks search box
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "approvU",
  "url": "https://www.approvu.ca",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.approvu.ca/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// Article Schema for Blog Posts
export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "approvU Team",
  imageUrl
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  authorName?: string
  imageUrl?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "approvU",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.approvu.ca/images/logo.png"
      }
    },
    ...(imageUrl && {
      "image": {
        "@type": "ImageObject",
        "url": imageUrl
      }
    })
  }
}

// FAQ Schema Generator
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Local Business Schema for Agents
export function generateLocalBusinessSchema({
  name,
  description,
  telephone,
  email,
  address,
  imageUrl
}: {
  name: string
  description: string
  telephone?: string
  email?: string
  address?: string
  imageUrl?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "image": imageUrl,
    ...(telephone && { "telephone": telephone }),
    ...(email && { "email": email }),
    ...(address && {
      "address": {
        "@type": "PostalAddress",
        "addressLocality": address,
        "addressCountry": "CA"
      }
    })
  }
}

// Person Schema for Agent Profiles
export function generatePersonSchema({
  name,
  jobTitle,
  email,
  telephone,
  imageUrl,
  description
}: {
  name: string
  jobTitle: string
  email?: string
  telephone?: string
  imageUrl?: string
  description?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    ...(description && { "description": description }),
    ...(email && { "email": email }),
    ...(telephone && { "telephone": telephone }),
    ...(imageUrl && { "image": imageUrl }),
    "worksFor": {
      "@type": "Organization",
      "name": "approvU"
    }
  }
}
