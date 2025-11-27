import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import FAQBlock from "@/components/sections/FAQBlock";
import { getMortgagePage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const mortgageData = await getMortgagePage('renovation');
  
  return {
    title: mortgageData?.metaTitle || "Renovation Mortgage | Finance Home Improvements Canada",
    description: mortgageData?.metaDescription || "Finance your home renovations with a renovation mortgage or HELOC. Learn about Purchase Plus Improvements and refinancing options.",
  };
}

export default async function RenovationMortgagePage() {
  let mortgageData;
  try {
    mortgageData = await getMortgagePage('renovation');
  } catch (error) {
    console.error('Failed to fetch mortgage data:', error);
  }

  const defaultFaqs = [
    {
      question: "What is a Purchase Plus Improvements mortgage?",
      answer: "Purchase Plus Improvements lets you include renovation costs in your mortgage when buying a home. You can borrow up to $40,000 extra (or more with some lenders) to renovate. The total loan must not exceed 95% of the improved property value.",
    },
    {
      question: "Can I renovate my current home using my mortgage?",
      answer: "Yes, through refinancing. You can access up to 80% of your home's current value. If your home is worth $500k and you owe $300k, you could refinance up to $400k, giving you $100k for renovations (minus closing costs).",
    },
    {
      question: "What's the difference between refinancing and a HELOC for renovations?",
      answer: "Refinancing replaces your mortgage with a larger one at current rates. A HELOC is a revolving credit line secured by your home, with higher interest rates but more flexibility. Refinancing is better for large projects; HELOC for smaller or ongoing work.",
    },
    {
      question: "Do renovation costs need to be verified?",
      answer: "Yes. Lenders require contractor quotes, permits (if needed), and detailed renovation plans. Funds are typically held back and released as work is completed and inspected.",
    },
    {
      question: "Can I do the renovations myself?",
      answer: "It depends on the lender. Some allow DIY renovations if you're qualified, but most require licensed contractors for major work. Electrical, plumbing, and structural work almost always requires professionals.",
    },
  ];

  const defaultRelatedPages = [
    {
      id: "1",
      title: "Refinance Your Mortgage",
      path: "/mortgage/refinance",
      excerpt: "Access your home equity to fund major renovations.",
    },
    {
      id: "2",
      title: "First-Time Home Buyer",
      path: "/mortgage/first-time-buyer",
      excerpt: "Learn about Purchase Plus Improvements for first-time buyers.",
    },
  ];

  const faqs = mortgageData?.faqs || defaultFaqs;
  const relatedPages = mortgageData?.relatedPages || defaultRelatedPages;

  return (
    <ArticlePageTemplate
      title={mortgageData?.title || "Renovation Mortgage"}
      headline={mortgageData?.headline || "Renovation Mortgage Guide"}
      excerpt={mortgageData?.excerpt || "Finance your home improvements with a renovation mortgage, HELOC, or refinance. Learn about Purchase Plus Improvements and renovation financing options."}
      category={mortgageData?.category || "Mortgage Solutions"}
      tags={mortgageData?.tags || ["Renovation", "HELOC", "Purchase Plus Improvements", "Home Equity"]}
      breadcrumbs={mortgageData?.breadcrumbs || [
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Renovation", href: "/mortgage/renovation" },
      ]}
      relatedPages={relatedPages}
      content={
        <div className="space-y-12 prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Financing home renovations through your mortgage can be cost-effective, whether you're buying a fixer-upper 
            or upgrading your current home. Several options exist depending on your situation.
          </p>

          <section>
            <h2>Renovation Financing Options</h2>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="border rounded-lg p-6 space-y-3">
                <h3 className="font-bold text-lg">Purchase Plus Improvements</h3>
                <p className="text-sm text-muted-foreground">For home buyers</p>
                <ul className="text-sm space-y-2">
                  <li>✅ Add to purchase price</li>
                  <li>✅ Up to $40k+ extra</li>
                  <li>✅ 95% max LTV</li>
                  <li>✅ Lowest rates</li>
                </ul>
                <p className="text-xs"><strong>Best for:</strong> Buying a home needing updates</p>
              </div>
              <div className="border rounded-lg p-6 space-y-3 border-primary">
                <h3 className="font-bold text-lg">Refinance for Renovations</h3>
                <p className="text-sm text-muted-foreground">For homeowners</p>
                <ul className="text-sm space-y-2">
                  <li>✅ Up to 80% LTV</li>
                  <li>✅ Large amounts</li>
                  <li>✅ Mortgage rates</li>
                  <li>⚠️ Closing costs apply</li>
                </ul>
                <p className="text-xs"><strong>Best for:</strong> Major renovations ($50k+)</p>
              </div>
              <div className="border rounded-lg p-6 space-y-3">
                <h3 className="font-bold text-lg">HELOC</h3>
                <p className="text-sm text-muted-foreground">For homeowners</p>
                <ul className="text-sm space-y-2">
                  <li>✅ Up to 65% LTV</li>
                  <li>✅ Reusable credit</li>
                  <li>✅ Flexible drawdowns</li>
                  <li>⚠️ Higher rates (Prime +0.5%)</li>
                </ul>
                <p className="text-xs"><strong>Best for:</strong> Smaller or phased projects</p>
              </div>
            </div>
          </section>

          <section className="bg-muted/30 rounded-lg p-8">
            <h2>How Purchase Plus Improvements Works</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Find a Property Needing Improvements</h3>
                  <p className="text-sm text-muted-foreground">Look for homes with cosmetic issues or outdated finishes that lower the price but are easy to fix.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Get Contractor Quotes</h3>
                  <p className="text-sm text-muted-foreground">Obtain detailed quotes from licensed contractors. Include itemized costs and completion timelines.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Apply with Renovation Costs Included</h3>
                  <p className="text-sm text-muted-foreground">Submit your mortgage application with purchase price PLUS renovation costs. Provide all contractor quotes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold mb-1">Lender Holds Back Renovation Funds</h3>
                  <p className="text-sm text-muted-foreground">At closing, renovation funds are held in trust. Released upon completion and inspection of work.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-semibold mb-1">Complete Renovations (120 Days Typical)</h3>
                  <p className="text-sm text-muted-foreground">Finish renovations within the specified timeframe. Lender may inspect before releasing final funds.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>Eligible Renovation Types</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-green-700 mb-3">✅ Usually Eligible</h3>
                <ul className="text-sm space-y-2">
                  <li>Kitchen renovations</li>
                  <li>Bathroom upgrades</li>
                  <li>Flooring replacement</li>
                  <li>New roof</li>
                  <li>HVAC replacement</li>
                  <li>Windows and doors</li>
                  <li>Basement finishing</li>
                  <li>Deck or patio addition</li>
                  <li>Energy efficiency upgrades</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-700 mb-3">❌ Usually NOT Eligible</h3>
                <ul className="text-sm space-y-2">
                  <li>Swimming pools</li>
                  <li>Hot tubs/saunas</li>
                  <li>Luxury items (not adding value)</li>
                  <li>Landscaping (cosmetic)</li>
                  <li>Furniture and appliances</li>
                  <li>Work already completed</li>
                  <li>DIY costs (labor only)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>Cost Example: $50,000 Kitchen Renovation</h2>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Refinance Option:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>Renovation Cost:</span>
                  <span className="font-mono">$50,000</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Closing Costs (Refinance):</span>
                  <span className="font-mono">+ $4,000</span>
                </div>
                <div className="flex justify-between py-2 border-b font-semibold">
                  <span>Total Borrowed:</span>
                  <span className="font-mono">$54,000</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Interest Rate (Mortgage):</span>
                  <span className="font-mono">6.5%</span>
                </div>
                <div className="flex justify-between py-3 bg-primary/10 px-4 rounded font-bold">
                  <span>Monthly Payment (25yr):</span>
                  <span className="font-mono text-primary">~$365/month</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Compare to: Personal loan at 12% = ~$600/month | Credit card at 20% = ~$900/month
              </p>
            </div>
          </section>

          <FAQBlock faqs={faqs} title="Renovation Mortgage FAQs" />
        </div>
      }
    />
  );
}
