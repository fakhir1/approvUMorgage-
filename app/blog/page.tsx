import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Mortgage Insights & Guides | approvU Blog',
  description: 'Expert advice, market insights, and practical guides to help you navigate Canadian mortgages with confidence.',
};

export default function Blog() {
  const featuredPosts = [
    {
      title: "First-Time Home Buyer's Complete Guide to Mortgages in Canada",
      excerpt: "Everything you need to know about getting your first mortgage, from pre-approval to closing day.",
      date: "Dec 15, 2024",
      category: "First-Time Buyers",
      slug: "first-time-buyer-guide",
      readTime: "8 min"
    },
    {
      title: "Mortgage Rates Forecast: What to Expect in 2025",
      excerpt: "Our experts analyze market trends and share predictions for Canadian mortgage rates in the coming year.",
      date: "Dec 10, 2024",
      category: "Market Insights",
      slug: "mortgage-rates-2025",
      readTime: "6 min"
    },
    {
      title: "How to Improve Your Credit Score Before Applying for a Mortgage",
      excerpt: "Simple strategies to boost your credit score and qualify for better mortgage rates.",
      date: "Dec 8, 2024",
      category: "Credit Tips",
      slug: "improve-credit-score",
      readTime: "5 min"
    }
  ];

  const recentPosts = [
    {
      title: "Variable vs Fixed Mortgage Rates: Which is Right for You?",
      excerpt: "Compare the pros and cons of variable and fixed-rate mortgages to make the best choice for your situation.",
      date: "Dec 5, 2024",
      category: "Mortgage Basics",
      slug: "variable-vs-fixed-rates",
      readTime: "7 min"
    },
    {
      title: "The Hidden Costs of Homebuying in Canada",
      excerpt: "Beyond the down payment: land transfer taxes, legal fees, and other costs to budget for.",
      date: "Nov 28, 2024",
      category: "Homebuying",
      slug: "hidden-homebuying-costs",
      readTime: "6 min"
    },
    {
      title: "Mortgage Pre-Approval vs Pre-Qualification: What's the Difference?",
      excerpt: "Understanding these two important steps in the mortgage process and why they matter.",
      date: "Nov 25, 2024",
      category: "Mortgage Process",
      slug: "preapproval-vs-prequalification",
      readTime: "4 min"
    },
    {
      title: "Refinancing Your Mortgage: When and Why It Makes Sense",
      excerpt: "Learn when refinancing can save you money and how to determine if it's the right move.",
      date: "Nov 20, 2024",
      category: "Refinancing",
      slug: "when-to-refinance",
      readTime: "8 min"
    },
    {
      title: "Understanding CMHC Insurance and High-Ratio Mortgages",
      excerpt: "What you need to know about mortgage default insurance and how it affects your payments.",
      date: "Nov 15, 2024",
      category: "Mortgage Insurance",
      slug: "cmhc-insurance-guide",
      readTime: "6 min"
    },
    {
      title: "Self-Employed? Here's How to Get Approved for a Mortgage",
      excerpt: "Special considerations and documentation requirements for self-employed borrowers.",
      date: "Nov 12, 2024",
      category: "Self-Employed",
      slug: "self-employed-mortgages",
      readTime: "7 min"
    }
  ];

  const categories = [
    "All Posts",
    "First-Time Buyers",
    "Market Insights",
    "Mortgage Basics",
    "Credit Tips",
    "Homebuying",
    "Refinancing"
  ];

  return (
    <>
      <Hero
        title="Mortgage Insights & Guides"
        subtitle="Expert advice, market insights, and practical guides to help you navigate Canadian mortgages with confidence."
        backgroundImage="/images/blog/family-living-room.jpg"
      />

      {/* Categories Filter */}
      <section className="py-12 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Posts" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most popular and up-to-date mortgage guides
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredPosts.map((post, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors mb-3 leading-tight flex-grow">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-muted mt-auto">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <span className="text-primary font-medium group-hover:underline">Read More →</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Recent Posts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest mortgage news and insights
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors mb-3 leading-tight flex-grow">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-muted mt-auto">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <span className="text-primary font-medium group-hover:underline">Read More →</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-highlight to-warning">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Stay Informed
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest mortgage insights, rate updates, and homebuying tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button className="bg-primary hover:bg-primary/90 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
