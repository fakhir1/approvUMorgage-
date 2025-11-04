import { Metadata } from "next";
import { Suspense } from "react";
import AuthForm from "@/components/forms/AuthForm";

export const metadata: Metadata = {
  title: "Sign In | approvU Mortgage",
  description: "Sign in to your account to access your mortgage application dashboard and manage your home buying journey.",
  openGraph: {
    title: "Sign In | approvU Mortgage",
    description: "Access your mortgage dashboard and applications",
  },
};

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary">approvU</h1>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Access your mortgage dashboard and applications
            </p>
          </div>

          <Suspense fallback={<div className="text-center">Loading...</div>}>
            <AuthForm />
          </Suspense>

          <div className="text-center text-xs text-muted-foreground">
            <p>
              By signing in, you agree to our{" "}
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
