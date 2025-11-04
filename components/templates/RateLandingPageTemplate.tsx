import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs, { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import Hero from "@/components/sections/Hero";
import MortgageRateWidget, { RateData } from "@/components/sections/MortgageRateWidget";
import ContentSection from "@/components/sections/ContentSection";
import FAQBlock from "@/components/sections/FAQBlock";
import CTASection from "@/components/sections/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface RateHistory {
  date: string;
  rate: number;
}

interface RateTrend {
  term: string;
  current: number;
  previous: number;
  trend: "up" | "down" | "stable";
  history?: RateHistory[];
}

interface ProvincialRate {
  province: string;
  code: string;
  rates: RateData;
}

interface RateLandingPageTemplateProps {
  // SEO & Navigation
  title: string;
  metaDescription?: string;
  breadcrumbs?: BreadcrumbItem[];

  // Hero Section
  heroHeadline: string;
  heroSubheadline: string;
  heroPrimaryCTA?: string;
  heroPrimaryCTALink?: string;

  // Rate Data
  currentRates: RateData;
  rateTrends?: RateTrend[];
  provincialRates?: ProvincialRate[];
  
  // Content Sections
  introContent?: ReactNode;
  rateExplanation?: ReactNode;
  comparison?: ReactNode;
  
  // Educational Content
  educationalSections?: Array<{
    title: string;
    content: ReactNode;
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
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;

  // Features
  showRateTrends?: boolean;
  showProvincialRates?: boolean;
  showCalculatorLink?: boolean;
}

export default function RateLandingPageTemplate({
  title,
  breadcrumbs,
  heroHeadline,
  heroSubheadline,
  heroPrimaryCTA = "Get Your Rate Quote",
  heroPrimaryCTALink = "/mortgage-appointment-online",
  currentRates,
  rateTrends,
  provincialRates,
  introContent,
  rateExplanation,
  comparison,
  educationalSections,
  faqs,
  ctaHeadline = "Ready to Get Started?",
  ctaDescription = "Book your free consultation and get personalized mortgage rate quotes.",
  ctaPrimaryText = "Book Appointment",
  ctaPrimaryLink = "/mortgage-appointment-online",
  ctaSecondaryText = "Calculate Your Payment",
  ctaSecondaryLink = "/mortgage/calculators",
  showRateTrends = true,
  showProvincialRates = true,
  showCalculatorLink = true,
}: RateLandingPageTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          {...({
            headline: heroHeadline,
            subheadline: heroSubheadline,
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

        {/* Introduction */}
        {introContent && (
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              {introContent}
            </div>
          </section>
        )}

        {/* Current Rates - Featured */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary text-sm px-4 py-1">Current Rates</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Today's Mortgage Rates
              </h2>
              <p className="text-xl text-muted-foreground">
                Compare our competitive rates and find the best option for you
              </p>
            </div>

            <MortgageRateWidget
              data={currentRates}
              variant="comparison"
              showTrends={true}
              highlightBest={true}
              ctaText="Get Your Personalized Rate"
              ctaLink={heroPrimaryCTALink}
            />
          </div>
        </section>

        {/* Rate Trends */}
        {showRateTrends && rateTrends && rateTrends.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
                Rate Trends & Analysis
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rateTrends.map((trend, index) => (
                  <Card
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{trend.term}</span>
                        <Badge
                          className={
                            trend.trend === "down"
                              ? "bg-green-600"
                              : trend.trend === "up"
                              ? "bg-red-600"
                              : "bg-gray-600"
                          }
                        >
                          {trend.trend === "down" ? "↓" : trend.trend === "up" ? "↑" : "→"}
                          {trend.trend === "stable" ? " Stable" : ""}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Current Rate</div>
                          <div className="text-3xl font-bold text-primary">
                            {trend.current.toFixed(2)}%
                          </div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Previous:</span>
                          <span className="font-semibold">{trend.previous.toFixed(2)}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Change:</span>
                          <span
                            className={`font-semibold ${
                              trend.current < trend.previous
                                ? "text-green-600"
                                : trend.current > trend.previous
                                ? "text-red-600"
                                : "text-gray-600"
                            }`}
                          >
                            {trend.current < trend.previous ? "-" : "+"}
                            {Math.abs(trend.current - trend.previous).toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Rate Explanation */}
        {rateExplanation && (
          <ContentSection
            variant="highlight"
            icon="💡"
            title="Understanding Mortgage Rates"
            layout="centered"
          >
            {rateExplanation}
          </ContentSection>
        )}

        {/* Provincial Rates */}
        {showProvincialRates && provincialRates && provincialRates.length > 0 && (
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
                Rates by Province
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Select your province to see location-specific rates
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {provincialRates.map((provinceData, index) => (
                  <Link
                    key={index}
                    href={`/mortgage/rates/${provinceData.code.toLowerCase()}`}
                    className="block group animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors flex items-center justify-between">
                          {provinceData.province}
                          <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {provinceData.rates.rates.slice(0, 3).map((rate, rateIndex) => (
                            <div key={rateIndex} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{rate.term}:</span>
                              <span className="font-semibold text-primary">
                                {rate.rate.toFixed(2)}%
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Comparison Section */}
        {comparison && (
          <ContentSection
            variant="feature"
            image="/images/rate-comparison.jpg"
            imagePosition="left"
            title="Fixed vs Variable Rates"
            subtitle="Which is right for you?"
          >
            {comparison}
          </ContentSection>
        )}

        {/* Educational Sections */}
        {educationalSections && educationalSections.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
                Everything You Need to Know
              </h2>
              <div className="space-y-8">
                {educationalSections.map((section, index) => (
                  <div
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ContentSection
                      variant="card"
                      icon={section.icon}
                      title={section.title}
                    >
                      {section.content}
                    </ContentSection>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Calculator Link */}
        {showCalculatorLink && (
          <ContentSection
            variant="callout"
            icon="🧮"
            title="Calculate Your Mortgage Payment"
            badge="Free Tool"
          >
            <p className="mb-4">
              Use our mortgage calculator to estimate your monthly payments based on current rates.
            </p>
            <Link
              href="/mortgage/calculators/mortgage-payment"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Open Calculator →
            </Link>
          </ContentSection>
        )}

        {/* FAQs */}
        {faqs && faqs.length > 0 && (
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
                Frequently Asked Questions
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
          secondaryCTA={ctaSecondaryText}
          secondaryCTALink={ctaSecondaryLink}
        />
      </main>

      <Footer />
    </div>
  );
}
