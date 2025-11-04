import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Payment Calculator - Free Canadian Calculator | approvU",
  description: "Calculate your monthly mortgage payments with our free Canadian mortgage payment calculator. Includes CMHC insurance, taxes, and amortization options.",
};

export default function PaymentCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
