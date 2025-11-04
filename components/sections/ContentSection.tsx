import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ContentSectionProps {
  // Content
  title?: string;
  subtitle?: string;
  content?: ReactNode;
  children?: ReactNode;

  // Visual Elements
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | "top" | "bottom";
  icon?: string;
  badge?: string;

  // Layout
  variant?: "default" | "card" | "highlight" | "callout" | "stats" | "feature";
  layout?: "default" | "split" | "centered" | "wide";
  backgroundColor?: string;
  textAlign?: "left" | "center" | "right";

  // Styling
  noPadding?: boolean;
  className?: string;
}

export default function ContentSection({
  title,
  subtitle,
  content,
  children,
  image,
  imageAlt,
  imagePosition = "right",
  icon,
  badge,
  variant = "default",
  layout = "default",
  backgroundColor,
  textAlign = "left",
  noPadding = false,
  className = "",
}: ContentSectionProps) {
  const displayContent = content || children;

  // Stats variant - special grid layout
  if (variant === "stats" && Array.isArray(displayContent)) {
    return (
      <section
        className={`py-16 px-4 ${backgroundColor || ""} ${className}`}
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div className="max-w-7xl mx-auto">
          {title && (
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-primary text-${textAlign}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`text-lg text-muted-foreground mb-12 text-${textAlign}`}>{subtitle}</p>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {(displayContent as Array<{ label: string; value: string | number; icon?: string }>).map(
              (stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {stat.icon && <div className="text-4xl mb-3">{stat.icon}</div>}
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    );
  }

  // Callout variant - attention-grabbing box
  if (variant === "callout") {
    return (
      <div className={`my-8 ${className}`}>
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary p-6">
          {(icon || badge) && (
            <div className="flex items-center gap-3 mb-3">
              {icon && <span className="text-3xl">{icon}</span>}
              {badge && <Badge className="bg-primary">{badge}</Badge>}
            </div>
          )}
          {title && <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>}
          {subtitle && <p className="text-muted-foreground mb-3">{subtitle}</p>}
          <div className="prose prose-lg max-w-none">{displayContent}</div>
        </Card>
      </div>
    );
  }

  // Highlight variant - colored background section
  if (variant === "highlight") {
    return (
      <section
        className={`py-16 px-4 ${backgroundColor || "bg-gradient-to-br from-primary/5 to-primary/10"} ${className}`}
        style={backgroundColor && !backgroundColor.startsWith("bg-") ? { backgroundColor } : undefined}
      >
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <Badge className="mb-4 bg-primary text-sm px-4 py-1">{badge}</Badge>
          )}
          {icon && <div className="text-6xl mb-6 animate-gentle-bounce">{icon}</div>}
          {title && (
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">{title}</h2>
          )}
          {subtitle && <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>}
          <div className="prose prose-lg mx-auto">{displayContent}</div>
        </div>
      </section>
    );
  }

  // Feature variant - image + text side by side
  if (variant === "feature" && image) {
    const isImageLeft = imagePosition === "left";

    return (
      <section className={`py-16 px-4 ${backgroundColor || ""} ${className}`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid md:grid-cols-2 gap-12 items-center ${isImageLeft ? "md:flex-row-reverse" : ""}`}
          >
            <div className={`${isImageLeft ? "md:order-2" : "md:order-1"} animate-fade-in`}>
              {badge && <Badge className="mb-3 bg-primary">{badge}</Badge>}
              {icon && <div className="text-5xl mb-4">{icon}</div>}
              {title && <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{title}</h2>}
              {subtitle && <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>}
              <div className="prose prose-lg">{displayContent}</div>
            </div>
            <div
              className={`${isImageLeft ? "md:order-1" : "md:order-2"} animate-fade-in`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img src={image} alt={imageAlt || title || "Feature image"} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Card variant - contained in a card
  if (variant === "card") {
    return (
      <div className={`my-8 ${className}`}>
        <Card className="p-8">
          {(icon || badge) && (
            <div className="flex items-center gap-3 mb-4">
              {icon && <span className="text-4xl">{icon}</span>}
              {badge && <Badge variant="secondary">{badge}</Badge>}
            </div>
          )}
          {title && <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>}
          {subtitle && <p className="text-muted-foreground mb-6">{subtitle}</p>}
          <div className="prose prose-lg max-w-none">{displayContent}</div>
        </Card>
      </div>
    );
  }

  // Split layout - image + content side by side (not necessarily a feature)
  if (layout === "split" && image) {
    const isImageLeft = imagePosition === "left";
    const imageOrder = isImageLeft ? "md:order-1" : "md:order-2";
    const contentOrder = isImageLeft ? "md:order-2" : "md:order-1";

    return (
      <section
        className={`${noPadding ? "" : "py-16 px-4"} ${backgroundColor || ""} ${className}`}
        style={backgroundColor && !backgroundColor.startsWith("bg-") ? { backgroundColor } : undefined}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`${imageOrder} animate-fade-in`}>
              {imagePosition === "top" || imagePosition === "bottom" ? (
                <div className="mb-6">
                  <img
                    src={image}
                    alt={imageAlt || title || "Content image"}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              ) : (
                <img
                  src={image}
                  alt={imageAlt || title || "Content image"}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              )}
            </div>
            <div className={`${contentOrder} animate-fade-in`} style={{ animationDelay: "200ms" }}>
              {badge && <Badge className="mb-3">{badge}</Badge>}
              {icon && <div className="text-4xl mb-3">{icon}</div>}
              {title && (
                <h2 className={`text-3xl font-bold mb-4 text-primary text-${textAlign}`}>{title}</h2>
              )}
              {subtitle && (
                <p className={`text-lg text-muted-foreground mb-6 text-${textAlign}`}>{subtitle}</p>
              )}
              <div className={`prose prose-lg max-w-none text-${textAlign}`}>{displayContent}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Centered layout
  if (layout === "centered") {
    return (
      <section
        className={`${noPadding ? "" : "py-16 px-4"} ${backgroundColor || ""} ${className}`}
        style={backgroundColor && !backgroundColor.startsWith("bg-") ? { backgroundColor } : undefined}
      >
        <div className="max-w-4xl mx-auto text-center">
          {badge && <Badge className="mb-4">{badge}</Badge>}
          {icon && <div className="text-5xl mb-4 inline-block">{icon}</div>}
          {image && (
            <div className="mb-8 animate-fade-in">
              <img
                src={image}
                alt={imageAlt || title || "Content image"}
                className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
              />
            </div>
          )}
          {title && <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{title}</h2>}
          {subtitle && <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>}
          <div className="prose prose-lg mx-auto">{displayContent}</div>
        </div>
      </section>
    );
  }

  // Wide layout
  if (layout === "wide") {
    return (
      <section
        className={`${noPadding ? "" : "py-16 px-4"} ${backgroundColor || ""} ${className}`}
        style={backgroundColor && !backgroundColor.startsWith("bg-") ? { backgroundColor } : undefined}
      >
        <div className="max-w-7xl mx-auto">
          {badge && <Badge className="mb-4">{badge}</Badge>}
          {icon && <div className="text-5xl mb-4">{icon}</div>}
          {image && (
            <div className="mb-8 animate-fade-in">
              <img
                src={image}
                alt={imageAlt || title || "Content image"}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
          {title && (
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-primary text-${textAlign}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`text-lg text-muted-foreground mb-6 text-${textAlign}`}>{subtitle}</p>
          )}
          <div className={`prose prose-lg max-w-none text-${textAlign}`}>{displayContent}</div>
        </div>
      </section>
    );
  }

  // Default layout
  return (
    <section
      className={`${noPadding ? "" : "py-12 px-4"} ${backgroundColor || ""} ${className}`}
      style={backgroundColor && !backgroundColor.startsWith("bg-") ? { backgroundColor } : undefined}
    >
      <div className="max-w-4xl mx-auto">
        {badge && <Badge className="mb-3">{badge}</Badge>}
        {icon && <div className="text-4xl mb-3">{icon}</div>}
        {image && imagePosition === "top" && (
          <div className="mb-6 animate-fade-in">
            <img
              src={image}
              alt={imageAlt || title || "Content image"}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}
        {title && (
          <h2 className={`text-3xl font-bold mb-4 text-primary text-${textAlign}`}>{title}</h2>
        )}
        {subtitle && (
          <p className={`text-lg text-muted-foreground mb-6 text-${textAlign}`}>{subtitle}</p>
        )}
        <div className={`prose prose-lg max-w-none text-${textAlign}`}>{displayContent}</div>
        {image && imagePosition === "bottom" && (
          <div className="mt-6 animate-fade-in">
            <img
              src={image}
              alt={imageAlt || title || "Content image"}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
