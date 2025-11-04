import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Land Transfer Tax Calculator Canada - All Provinces | approvU",
  description:
    "Calculate land transfer tax for any Canadian province. Free calculator with first-time buyer rebates, tax brackets, and closing cost estimates.",
};

export default function LandTransferTaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
