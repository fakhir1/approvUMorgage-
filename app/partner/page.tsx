import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { StepsSection } from '@/components/sections/StepsSection';
import { FAQBlock } from '@/components/sections/FAQBlock';
import { CTASection } from '@/components/sections/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Partner with approvU - Mortgage Partnership Opportunities',
  description: 'Join approvU\'s partner network. Earn commissions, access white-label solutions, and offer mortgage services to your clients. Apply for partnership today.',
};

export default function Partner() {
  const partnerBenefits = [
    {
      title: "Higher Conversion Rates",
      description: "Leverage our proven mortgage funnels and expert conversion optimization to turn more leads into closed deals.",
      icon: "📈"
    },
    {
      title: "White-Label Solutions",
      description: "Offer mortgage services under your brand with our fully customizable white-label platform and tools.",
      icon: "🏷️"
    },
    {
      title: "Revenue Sharing",
      description: "Earn competitive commissions on every mortgage you refer, with transparent tracking and monthly payouts.",
      icon: "💰"
    }
  ];

  const partnerTypes = [
    {
      title: "Real Estate Agents",
      description: "Add mortgage pre-approval to your services and earn additional revenue while better serving your clients.",
      benefits: [
        "Quick client pre-approvals",
        "Competitive commission rates", 
        "Co-branded marketing materials",
        "Dedicated agent support"
      ]
    },
    {
      title: "Financial Advisors",
      description: "Expand your service offering with mortgage solutions that complement your financial planning expertise.",
      benefits: [
        "Holistic client service",
        "Professional referral program",
        "Continuing education support",
        "Joint marketing opportunities"
      ]
    },
    {
      title: "Insurance Brokers",
      description: "Cross-sell mortgage services to your insurance clients and create additional touchpoints.",
      benefits: [
        "Natural client synergies",
        "Enhanced client retention",
        "Diversified revenue streams",
        "Shared lead generation"
      ]
    },
    {
      title: "Technology Partners",
      description: "Integrate our mortgage API into your platform or app to offer seamless mortgage services.",
      benefits: [
        "RESTful API access",
        "Technical documentation",
        "Developer support",
        "Revenue sharing model"
      ]
    }
  ];

  const partnershipSteps = [
    {
      number: "1",
      title: "Apply to Partner",
      description: "Submit your partnership application and tell us about your business and goals.",
      icon: "📝"
    },
    {
      number: "2", 
      title: "Get Approved & Onboarded",
      description: "Complete our partner onboarding process including training and system setup.",
      icon: "✓"
    },
    {
      number: "3",
      title: "Start Earning",
      description: "Begin referring clients and earning commissions with full marketing and tech support.",
      icon: "💼"
    }
  ];

  const faqs = [
    {
      question: "What are the requirements to become a partner?",
      answer: "Partners must be licensed professionals in their respective fields (real estate, insurance, financial services) or established technology companies. We look for partners who share our commitment to client service and have an existing client base that could benefit from mortgage services."
    },
    {
      question: "How much can I earn as a partner?",
      answer: "Commission rates vary by partner type and volume, typically ranging from 15-50 basis points per mortgage. High-volume partners can earn additional bonuses. We provide transparent tracking and monthly commission statements."
    },
    {
      question: "Do you provide marketing support?",
      answer: "Yes! We provide co-branded marketing materials, digital assets, social media content, and can assist with joint marketing campaigns. Our marketing team works closely with partners to maximize lead generation."
    },
    {
      question: "Is there training available?",
      answer: "Absolutely. All new partners receive comprehensive onboarding training covering our processes, systems, and best practices. We also offer ongoing education and support to help you succeed."
    },
    {
      question: "Can I maintain my existing relationships?",
      answer: "Yes, partnership with approvU enhances your existing client relationships by adding valuable mortgage services. You maintain ownership of your client relationships while we handle the mortgage processing."
    }
  ];

  return (
    <>
      <Hero
        title="Partner with approvU"
        subtitle="Join Canada's fastest-growing mortgage platform and earn revenue while better serving your clients."
      />

      <FeaturesGrid
        title="Why Partner with approvU?"
        subtitle="Grow your business with proven mortgage solutions and technology"
        features={partnerBenefits}
      />

      {/* Partner Types */}
      <section className="py-20 px-4 bg-muted" id="partner-types">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We partner with various professionals to expand mortgage access across Canada
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {type.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {type.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <StepsSection
        title="How to Become a Partner"
        subtitle="Simple steps to join our partner network and start earning"
        steps={partnershipSteps}
      />

      {/* Partner Application Form */}
      <section className="py-20 px-4" id="partner-application">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out our partnership application and we'll be in touch within 24 hours
            </p>
          </div>

          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <form id="partner-application-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Business Name *
                    </label>
                    <input 
                      type="text"
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="Your Business Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Partner Type *
                    </label>
                    <select className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary" required>
                      <option value="">Select Partner Type</option>
                      <option>Real Estate Agent/Brokerage</option>
                      <option>Financial Advisor</option>
                      <option>Insurance Broker</option>
                      <option>Technology Company</option>
                      <option>Other Professional Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Contact Name *
                    </label>
                    <input 
                      type="text"
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Phone Number *
                    </label>
                    <input 
                      type="tel"
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Years in Business
                    </label>
                    <select className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary">
                      <option>Select Years</option>
                      <option>Less than 1 year</option>
                      <option>1-2 years</option>
                      <option>3-5 years</option>
                      <option>6-10 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-primary mb-2">
                      Tell Us About Your Business
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="Describe your business, client base, and how you'd like to partner with approvU..."
                    />
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button 
                    type="submit"
                    size="lg"
                    className="px-12 py-4 text-lg"
                  >
                    Submit Partnership Application
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    We'll review your application and contact you within 24 hours
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <FAQBlock 
        title="Partnership FAQs"
        subtitle="Common questions about partnering with approvU"
        faqs={faqs} 
      />

      <CTASection
        headline="Ready to Grow Your Business?"
        subtext="Join hundreds of professionals who are earning additional revenue through our partnership program"
      />
    </>
  );
}
