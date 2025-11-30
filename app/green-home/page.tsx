import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import CTASection from "@/components/sections/CTASection";
import { getMortgagePage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getMortgagePage('green-home');
  
  return {
    title: pageData?.metaTitle || "Green Home Technology Guide | Energy-Efficient Homes | approvU",
    description: pageData?.metaDescription || "Discover green home technology solutions for energy-efficient, sustainable living. Learn about eco-friendly mortgages, rebates, and smart home energy systems.",
  };
}

export default async function GreenHomeTechnology() {
  let pageData = null;
  
  try {
    pageData = await getMortgagePage('green-home');
  } catch (error) {
    console.error('Error fetching green-home page data:', error);
  }

  const heroTitle = pageData?.heroTitle || "Green Home Technology - Build Sustainable, Save Money";
  const heroSubtitle = pageData?.heroSubtitle || "Discover green home technology solutions that reduce your environmental footprint while saving on energy costs. Access green mortgages, government rebates, and expert guidance.";

  const greenTechCategories = [
    {
      title: "Solar Energy Systems",
      description: "Generate clean, renewable energy for your home with solar panels and battery storage solutions.",
      icon: "☀️"
    },
    {
      title: "Energy-Efficient HVAC",
      description: "Advanced heating, cooling, and ventilation systems that reduce energy consumption and costs.",
      icon: "❄️"
    },
    {
      title: "Smart Energy Management",
      description: "Monitor and optimize your home's energy use with smart thermostats and energy monitoring systems.",
      icon: "⚡"
    },
    {
      title: "Insulation & Weatherization",
      description: "Improve your home's thermal envelope to reduce heating and cooling costs year-round.",
      icon: "🏠"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero
        title={heroTitle}
        headline={heroTitle}
        subheadline={heroSubtitle}
        primaryCTA={{
          text: "Explore Green Mortgages",
          href: "/contact/"
        }}
        secondaryCTA={{
          text: "View Rebate Programs",
          href: "#rebates"
        }}
        backgroundImage="/images/hero/green-home-hero.jpg"
        variant="default"
      />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Why Choose Green Home Technology?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Green home technology isn't just good for the environment—it's a smart financial investment 
            that pays dividends through lower utility bills, increased home value, and government incentives.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-primary mb-2">Lower Energy Bills</h3>
              <p className="text-sm text-muted-foreground">Save hundreds to thousands annually on utilities</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-semibold text-primary mb-2">Environmental Impact</h3>
              <p className="text-sm text-muted-foreground">Reduce your carbon footprint and help fight climate change</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold text-primary mb-2">Increased Home Value</h3>
              <p className="text-sm text-muted-foreground">Energy-efficient homes sell faster and for more money</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturesGrid
        title="Green Home Technology Categories"
        subtitle="Explore sustainable solutions for every aspect of your home"
        features={greenTechCategories}
        columns={4}
      />

      <section id="rebates" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Government Rebates & Incentives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Canadian homeowners can access thousands in rebates for energy-efficient upgrades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏛️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Canada Greener Homes Grant</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get up to $5,000 for energy-efficient home renovations plus $600 for energy evaluations
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>✓ Insulation upgrades</li>
                    <li>✓ Air sealing improvements</li>
                    <li>✓ Heat pump installations</li>
                    <li>✓ Solar panel systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">☀️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Provincial Solar Rebates</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Many provinces offer additional rebates for solar energy systems
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>✓ Ontario: Micro-FIT and Net Metering</li>
                    <li>✓ BC: Solar rebates up to $5,000</li>
                    <li>✓ Alberta: Solar incentive programs</li>
                    <li>✓ Quebec: Rénove-Vert program</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💧</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Municipal Water & Energy Programs</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Local utilities often provide rebates for water-saving and energy-efficient appliances
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>✓ High-efficiency toilets</li>
                    <li>✓ Smart thermostats</li>
                    <li>✓ LED lighting upgrades</li>
                    <li>✓ Energy Star appliances</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Green Mortgage Programs</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access specialized mortgage financing for energy-efficient homes
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>✓ Higher loan-to-value ratios</li>
                    <li>✓ Preferential interest rates</li>
                    <li>✓ Flexible qualification</li>
                    <li>✓ Renovation financing included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Popular Green Home Technologies
            </h2>
            <p className="text-lg text-muted-foreground">
              Proven solutions that deliver real energy savings and environmental benefits
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl border">
              <h3 className="text-2xl font-semibold text-primary mb-4">Solar Panel Systems</h3>
              <p className="text-muted-foreground mb-4">
                Generate clean electricity from sunlight and reduce or eliminate your utility bills. 
                Modern solar systems can offset 80-100% of your home's energy use.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Benefits:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Reduce electricity bills by $1,000-$3,000/year</li>
                    <li>• 25+ year lifespan with minimal maintenance</li>
                    <li>• Increase home value by 3-4%</li>
                    <li>• Eligible for federal and provincial rebates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Typical Costs:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• $15,000-$30,000 for average home</li>
                    <li>• 7-12 year payback period</li>
                    <li>• Up to $10,000 in combined rebates</li>
                    <li>• Financing options available</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border">
              <h3 className="text-2xl font-semibold text-primary mb-4">Heat Pump Systems</h3>
              <p className="text-muted-foreground mb-4">
                Modern heat pumps provide efficient heating and cooling by transferring heat rather than 
                generating it, cutting HVAC costs by up to 50%.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Benefits:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Save 30-50% on heating/cooling costs</li>
                    <li>• Provide both heating and air conditioning</li>
                    <li>• Extremely quiet operation</li>
                    <li>• No combustion, safer than furnaces</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Typical Costs:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• $5,000-$15,000 installed</li>
                    <li>• 5-10 year payback period</li>
                    <li>• Up to $5,000 in rebates available</li>
                    <li>• 15-20 year lifespan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border">
              <h3 className="text-2xl font-semibold text-primary mb-4">Smart Home Energy Management</h3>
              <p className="text-muted-foreground mb-4">
                Smart thermostats, energy monitors, and automated systems optimize your home's energy 
                use based on your habits and real-time pricing.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Benefits:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Save 10-23% on heating/cooling</li>
                    <li>• Control from anywhere via smartphone</li>
                    <li>• Learn your preferences automatically</li>
                    <li>• Detailed energy usage insights</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Typical Costs:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• $200-$500 for smart thermostat</li>
                    <li>• 1-2 year payback period</li>
                    <li>• Many utilities offer free installation</li>
                    <li>• Easy DIY installation option</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Go Green?"
        description="Explore green mortgage options and learn how you can finance your energy-efficient home upgrades. Our mortgage experts can help you access green financing programs."
        primaryCTA={{
          text: "Get Green Mortgage Info",
          href: "/contact/"
        }}
        secondaryCTA={{
          text: "Calculate Savings",
          href: "/mortgage/calculators/payment/"
        }}
      />
    </div>
  );
}
