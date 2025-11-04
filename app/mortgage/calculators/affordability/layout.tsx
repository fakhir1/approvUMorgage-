import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Affordability Calculator - How Much Can I Afford? | approvU",
  description: "Calculate how much home you can afford in Canada. Free affordability calculator considers income, debts, and down payment for accurate home price estimates.",
};

export default function AffordabilityCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
