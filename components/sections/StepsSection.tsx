import { Card, CardContent } from "@/components/ui/card";

export interface Step {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

interface StepsSectionProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
  variant?: "vertical" | "horizontal";
  showConnectors?: boolean;
}

export default function StepsSection({
  title = "How It Works",
  subtitle,
  steps,
  variant = "vertical",
  showConnectors = true,
}: StepsSectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12 animate-fade-in">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Vertical Layout */}
        {variant === "vertical" ? (
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-6">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.icon || step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <Card className="flex-1 border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-primary">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Vertical Connector Line */}
                {showConnectors && index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-primary/30 -z-10" />
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Horizontal Layout */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg mx-auto mb-4">
                      {step.icon || step.number}
                    </div>

                    {/* Step Content */}
                    <h3 className="text-xl font-bold mb-3 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Horizontal Connector Arrow */}
                {showConnectors && index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg 
                      className="w-8 h-8 text-primary/30" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Named export for compatibility
export { StepsSection };
