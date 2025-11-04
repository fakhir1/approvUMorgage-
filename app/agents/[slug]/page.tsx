import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Star,
  MapPin,
  Languages,
  Award,
  Mail,
  Phone,
  Calendar,
  ArrowLeft,
  User,
} from 'lucide-react';
import Link from 'next/link';

interface Agent {
  id: string;
  name: string;
  slug: string;
  title: string;
  bio: string | null;
  email: string | null;
  phone: string | null;
  profile_image_url: string | null;
  location: string | null;
  rating: number | null;
  review_count: number | null;
  years_experience: number | null;
  languages: string[] | null;
  specialties: string[] | null;
  license_number: string | null;
  is_active: boolean;
}

interface Review {
  id: string;
  reviewer_name: string;
  rating: number;
  review_text: string;
  review_date: string;
  is_verified: boolean | null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();

  const { data: agent } = await supabase
    .from('agents')
    .select('name, title, bio, location')
    .eq('slug', slug)
    .eq('is_active', true)
    .single();

  if (!agent) {
    return {
      title: 'Agent Not Found | approvU',
    };
  }

  return {
    title: `${agent.name} - ${agent.title} | approvU`,
    description:
      agent.bio ||
      `Meet ${agent.name}, ${agent.title} at approvU. Expert mortgage guidance in ${agent.location || 'Canada'}.`,
  };
}

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();

  const { data: agent, error } = await supabase
    .from('agents')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single();

  if (error || !agent) {
    notFound();
  }

  // Fetch reviews
  const { data: reviews } = await supabase
    .from('agent_reviews')
    .select('*')
    .eq('agent_id', agent.id)
    .eq('is_published', true)
    .order('review_date', { ascending: false })
    .limit(10);

  const reviewsList: Review[] = reviews || [];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Back Navigation */}
        <section className="py-6 px-4 bg-muted/30 border-b">
          <div className="max-w-6xl mx-auto">
            <Link href="/agents">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Agents
              </Button>
            </Link>
          </div>
        </section>

        {/* Agent Header */}
        <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Profile Image Column */}
              <div className="md:col-span-1 flex justify-center">
                <div className="relative w-64 h-64">
                  {agent.profile_image_url ? (
                    <img
                      src={agent.profile_image_url}
                      alt={agent.name}
                      className="w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white"
                    />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-2xl border-4 border-white">
                      <span className="text-8xl font-bold text-primary">
                        {agent.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Info Column */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {agent.name}
                  </h1>
                  <p className="text-xl text-muted-foreground font-medium">
                    {agent.title}
                  </p>

                  {agent.rating && (
                    <div className="flex items-center gap-3 mt-4">
                      {renderStars(agent.rating)}
                      {agent.review_count && (
                        <span className="text-sm text-muted-foreground">
                          ({agent.review_count} reviews)
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {agent.location && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Location</div>
                        <div className="font-medium">{agent.location}</div>
                      </div>
                    </div>
                  )}

                  {agent.years_experience && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Experience</div>
                        <div className="font-medium">
                          {agent.years_experience} years
                        </div>
                      </div>
                    </div>
                  )}

                  {agent.languages && agent.languages.length > 0 && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Languages className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Languages</div>
                        <div className="font-medium">{agent.languages.join(', ')}</div>
                      </div>
                    </div>
                  )}

                  {agent.license_number && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">License #</div>
                        <div className="font-medium font-mono text-sm">
                          {agent.license_number}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  {agent.email && (
                    <Link href={`mailto:${agent.email}`} className="flex-1">
                      <Button className="w-full gap-2" size="lg">
                        <Mail className="h-4 w-4" />
                        Email Me
                      </Button>
                    </Link>
                  )}
                  {agent.phone && (
                    <Link href={`tel:${agent.phone}`} className="flex-1">
                      <Button variant="outline" className="w-full gap-2" size="lg">
                        <Phone className="h-4 w-4" />
                        Call Me
                      </Button>
                    </Link>
                  )}
                  <Link href="/mortgage/approval/" className="flex-1">
                    <Button variant="secondary" className="w-full gap-2" size="lg">
                      <Calendar className="h-4 w-4" />
                      Get Pre-Approved
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Bio */}
              {agent.bio && (
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    About {agent.name.split(' ')[0]}
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="leading-relaxed whitespace-pre-line">{agent.bio}</p>
                  </div>
                </div>
              )}

              {/* Specialties */}
              {agent.specialties && agent.specialties.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {agent.specialties.map((specialty) => (
                      <Badge
                        key={specialty}
                        variant="secondary"
                        className="text-sm px-4 py-2"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews */}
              {reviewsList.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Client Reviews
                  </h3>
                  <div className="space-y-6">
                    {reviewsList.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                <User className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <div className="font-semibold flex items-center gap-2">
                                  {review.reviewer_name}
                                  {review.is_verified && (
                                    <Badge variant="outline" className="text-xs">
                                      Verified
                                    </Badge>
                                  )}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {formatDate(review.review_date)}
                                </div>
                              </div>
                            </div>
                            {renderStars(review.rating)}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {review.review_text}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-6 space-y-6">
                {/* Contact Card */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-lg">Get in Touch</h3>
                    {agent.email && (
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                        <a
                          href={`mailto:${agent.email}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          {agent.email}
                        </a>
                      </div>
                    )}
                    {agent.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <a
                          href={`tel:${agent.phone}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {agent.phone}
                        </a>
                      </div>
                    )}
                    <Link href="/mortgage/approval/" className="block pt-2">
                      <Button className="w-full" size="lg">
                        Schedule Consultation
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Why Work With Me */}
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-lg">Why Work With Me?</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Personalized mortgage solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Access to best rates from top lenders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Expert guidance through every step</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Fast pre-approval process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>No cost to you - lenders pay us</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's find the perfect mortgage solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mortgage/approval/">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get Pre-Approved
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
