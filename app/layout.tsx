import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import { AuthProvider } from "@/contexts/AuthContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "approvU - Mortgage Solutions Canada",
    template: "%s | approvU",
  },
  description: "Expert mortgage guidance, calculators, and solutions for Canadian homebuyers. Get pre-approved today with approvU.",
  keywords: ["mortgage", "home loan", "mortgage broker", "mortgage rates", "home buying", "refinance", "canada"],
  authors: [{ name: "approvU" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://approvu.com",
    siteName: "approvU",
    title: "approvU - Mortgage Solutions Canada",
    description: "Expert mortgage guidance, calculators, and solutions for Canadian homebuyers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "approvU - Mortgage Solutions Canada",
    description: "Expert mortgage guidance, calculators, and solutions for Canadian homebuyers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get GA4 Measurement ID from environment variable
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Google Analytics 4 - Only loads if NEXT_PUBLIC_GA_MEASUREMENT_ID is set */}
        {gaId && <GoogleAnalytics measurementId={gaId} />}
        
        <ErrorBoundary>
          <ToastProvider>
            <AuthProvider>
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <ConditionalFooter />
            </AuthProvider>
          </ToastProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
