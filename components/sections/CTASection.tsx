import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTAButton {
  text: string;
  href: string;
}

interface CTASectionProps {
  headline?: string;
  title?: string; // Alias for headline (backward compatibility)
  description: string;
  primaryCTA?: string | CTAButton;
  primaryCTALink?: string;
  ctaText?: string; // Alias for primaryCTA (backward compatibility)
  ctaLink?: string; // Alias for primaryCTALink (backward compatibility)
  secondaryCTA?: string | CTAButton;
  secondaryCTALink?: string;
  variant?: "primary" | "gradient" | "dark";
}

export default function CTASection({
  headline,
  title,
  description,
  primaryCTA,
  primaryCTALink,
  ctaText,
  ctaLink,
  secondaryCTA,
  secondaryCTALink,
  variant = "primary",
}: CTASectionProps) {
  // Support both old and new prop names
  const displayHeadline = headline || title || "Ready to Get Started?";
  
  // Handle primary CTA (string or object format)
  const getPrimaryCTAText = () => {
    if (typeof primaryCTA === 'object') return primaryCTA.text;
    return primaryCTA || ctaText || "Get Started";
  };
  
  const getPrimaryCTALink = () => {
    if (typeof primaryCTA === 'object') return primaryCTA.href;
    return primaryCTALink || ctaLink || "/mortgage-appointment-online";
  };
  
  // Handle secondary CTA (string or object format)
  const getSecondaryCTAText = () => {
    if (typeof secondaryCTA === 'object') return secondaryCTA.text;
    return secondaryCTA;
  };
  
  const getSecondaryCTALink = () => {
    if (typeof secondaryCTA === 'object') return secondaryCTA.href;
    return secondaryCTALink;
  };
  
  const showSecondaryCTA = secondaryCTA || secondaryCTALink;

  // Variant styles
  const variantStyles = {
    primary: "bg-primary text-white",
    gradient: "bg-gradient-to-r from-primary to-primary/80 text-white",
    dark: "bg-gray-900 text-white",
  };

  const buttonStyles = {
    primary: "bg-white text-primary hover:bg-gray-100",
    gradient: "bg-white text-primary hover:bg-gray-100",
    dark: "bg-white text-gray-900 hover:bg-gray-100",
  };

  return (
    <section className={`${variantStyles[variant]} py-16 md:py-20`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          {displayHeadline}
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={getPrimaryCTALink()}>
            <Button
              size="lg"
              className={`${buttonStyles[variant]} text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
            >
              {getPrimaryCTAText()}
            </Button>
          </Link>
          {showSecondaryCTA && (
            <Link href={getSecondaryCTALink() || "#"}>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                {getSecondaryCTAText()}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

// Named export for compatibility
export { CTASection };
