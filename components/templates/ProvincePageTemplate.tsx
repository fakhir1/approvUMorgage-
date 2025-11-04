import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs, { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import Hero from "@/components/sections/Hero";
import MortgageRateWidget, { RateData } from "@/components/sections/MortgageRateWidget";
import ChildPageListing, { ChildPage } from "@/components/sections/ChildPageListing";
import ContentSection from "@/components/sections/ContentSection";
import FAQBlock from "@/components/sections/FAQBlock";
import CTASection from "@/components/sections/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProvinceStats {
  label: string;
  value: string | number;
  icon?: string;
}

interface CityData {
  name: string;
  slug: string;
  description: string;
  featured?: boolean;
}

interface ProvincePageTemplateProps {
  // Province Info
  provinceName: string;
  provinceCode: string; // e.g., "ON", "BC", "AB"
  
  // SEO & Navigation
  metaDescription?: string;
  breadcrumbs?: BreadcrumbItem[];

  // Hero Section
  heroHeadline?: string;
  heroSubheadline?: string;
  heroPrimaryCTA?: string;
  heroPrimaryCTALink?: string;

  // Province-Specific Content
  overview?: ReactNode;
  provinceStats?: ProvinceStats[];
  
  // Rates
  currentRates?: RateData;
  showRates?: boolean;

  // Cities/Regions
  cities?: CityData[];
  showCities?: boolean;
  citiesTitle?: string;

  // Mortgage Brokers
  brokers?: Array<{
    id: string;
    name: string;
    city: string;
    rating?: number;
    reviewCount?: number;
    href: string;
  }>;
  showBrokers?: boolean;

  // Educational Content
  provinceSpecificInfo?: Array<{
    title: string;
    content: ReactNode;
    icon?: string;
  }>;

  // Features/Benefits
  features?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;

  // FAQs
  faqs?: Array<{
    question: string;
    answer: string;
  }>;

  // CTA
  ctaHeadline?: string;
  ctaDescription?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
}

export default function ProvincePageTemplate({
  provinceName,
  provinceCode,
  breadcrumbs,
  heroHeadline,
  heroSubheadline,
  heroPrimaryCTA = "Get Your Rate Quote",
  heroPrimaryCTALink = "/mortgage-appointment-online",
  overview,
  provinceStats,
  currentRates,
  showRates = true,
  cities,
  showCities = true,
  citiesTitle = "Major Cities",
  brokers,
  showBrokers = true,
  provinceSpecificInfo,
  features,
  faqs,
  ctaHeadline = `Get Your ${provinceName} Mortgage Today`,
  ctaDescription = `Connect with local mortgage experts who understand the ${provinceName} market.`,
  ctaPrimaryText = "Book Free Consultation",
  ctaPrimaryLink = "/mortgage-appointment-online",
}: ProvincePageTemplateProps) {
  const defaultHeroHeadline = heroHeadline || `${provinceName} Mortgage Rates & Services`;
  const defaultHeroSubheadline =
    heroSubheadline ||
    `Find the best mortgage rates and expert advice in ${provinceName}. Compare rates, connect with local brokers, and get personalized mortgage solutions.`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          {...({
            headline: defaultHeroHeadline,
            subheadline: defaultHeroSubheadline,
            primaryCTA: heroPrimaryCTA,
            primaryCTALink: heroPrimaryCTALink,
            variant: "gradient",
          } as any)}
        />

        {/* Breadcrumbs */}
        {breadcrumbs && (
          <section className="py-4 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          </section>
        )}

        {/* Province Overview */}
        {overview && (
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              {overview}
            </div>
          </section>
        )}

        {/* Province Statistics */}
        {provinceStats && provinceStats.length > 0 && (
          <ContentSection
            variant="stats"
            title={`${provinceName} Housing Market`}
            subtitle="Key statistics and market insights"
            content={
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {provinceStats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-xl border bg-card text-card-foreground shadow-sm p-6"
                  >
                    {stat.icon && <div className="text-3xl mb-2">{stat.icon}</div>}
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
            }
          />
        )}

        {/* Current Rates */}
        {showRates && currentRates && (
          <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-primary text-sm px-4 py-1">
                  {provinceName} Rates
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                  Current Mortgage Rates in {provinceName}
                </h2>
                <p className="text-xl text-muted-foreground">
                  Compare today's best rates for {provinceName} homebuyers
                </p>
              </div>

              <MortgageRateWidget
                data={currentRates}
                variant="comparison"
                showTrends={true}
                highlightBest={true}
                ctaText={`Get Your ${provinceName} Rate Quote`}
                ctaLink={heroPrimaryCTALink}
              />
            </div>
          </section>
        )}

        {/* Cities */}
        {showCities && cities && cities.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
                {citiesTitle} in {provinceName}
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Explore mortgage options in major cities across {provinceName}
              </p>
              <ChildPageListing
                pages={cities.map((city) => ({
                  id: city.slug,
                  title: city.name,
                  description: city.description,
                  href: `/mortgage/brokers/${provinceCode.toLowerCase()}/${city.slug}`,
                  icon: "🏙️",
                  featured: city.featured,
                }))}
                columns={3}
                showIcons={true}
              />
            </div>
          </section>
        )}

        {/* Province-Specific Information */}
        {provinceSpecificInfo && provinceSpecificInfo.length > 0 && (
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
                {provinceName}-Specific Mortgage Information
              </h2>
              <div className="space-y-8">
                {provinceSpecificInfo.map((info, index) => (
                  <div
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` } as any}
                  >
                    <ContentSection
                      variant="card"
                      icon={info.icon}
                      title={info.title}
                    >
                      {info.content}
                    </ContentSection>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features/Benefits */}
        {features && features.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
                Why Choose Us in {provinceName}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="animate-fade-in hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      {feature.icon && (
                        <div className="text-5xl mb-3">{feature.icon}</div>
                      )}
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Mortgage Brokers */}
        {showBrokers && brokers && brokers.length > 0 && (
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
                Top Mortgage Brokers in {provinceName}
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Connect with experienced local mortgage professionals
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brokers.map((broker, index) => (
                  <Card
                    key={broker.id}
                    className="animate-fade-in hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-1">{broker.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">📍 {broker.city}</p>
                        </div>
                        {broker.rating && (
                          <Badge className="bg-amber-500">
                            ⭐ {broker.rating.toFixed(1)}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      {broker.reviewCount && (
                        <p className="text-sm text-muted-foreground mb-4">
                          {broker.reviewCount} reviews
                        </p>
                      )}
                      <a
                        href={broker.href}
                        className="inline-block w-full text-center bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                      >
                        View Profile →
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {faqs && faqs.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
                {provinceName} Mortgage FAQs
              </h2>
              <FAQBlock faqs={faqs} />
            </div>
          </section>
        )}

        {/* CTA Section */}
        <CTASection
          headline={ctaHeadline}
          description={ctaDescription}
          primaryCTA={ctaPrimaryText}
          primaryCTALink={ctaPrimaryLink}
        />
      </main>

      <Footer />
    </div>
  );
}
