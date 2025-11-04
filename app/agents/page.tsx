import { Metadata } from 'next';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Languages, Award, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Mortgage Agents | Expert Guidance Across Canada | approvU',
  description:
    'Meet our team of experienced mortgage agents. Licensed professionals ready to help you find the best mortgage rates and solutions across Canada.',
};

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

export default async function AgentsPage() {
  const supabase = await createServerSupabaseClient();

  const { data: agents, error } = await supabase
    .from('agents')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true, nullsFirst: false })
    .order('name', { ascending: true });

  const agentsList: Agent[] = agents || [];

  const renderStars = (rating: number | null) => {
    if (!rating) return null;
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Mortgage Experts
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Licensed professionals with years of experience helping Canadians
              secure the best mortgage rates and navigate the home buying process
              with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/mortgage/approval/">
                <Button size="lg" variant="secondary">
                  Get Pre-Approved
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 bg-muted/30 border-y">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {agentsList.length}+
                </div>
                <div className="text-muted-foreground">Expert Agents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  15+
                </div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  5,000+
                </div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  10+
                </div>
                <div className="text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every agent is licensed, experienced, and dedicated to finding you
                the best mortgage solution
              </p>
            </div>

            {error && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Unable to load agents. Please try again later.
                </p>
              </div>
            )}

            {!error && agentsList.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No agents available at this time. Please check back soon.
                </p>
              </div>
            )}

            {!error && agentsList.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {agentsList.map((agent) => (
                  <Link
                    key={agent.id}
                    href={`/agents/${agent.slug}`}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary">
                      <CardHeader className="text-center pb-4">
                        {/* Profile Image */}
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          {agent.profile_image_url ? (
                            <img
                              src={agent.profile_image_url}
                              alt={agent.name}
                              className="w-full h-full rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-colors"
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                              <span className="text-4xl font-bold text-primary">
                                {agent.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Name & Title */}
                        <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                          {agent.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">
                          {agent.title}
                        </p>

                        {/* Rating */}
                        {agent.rating && (
                          <div className="flex items-center justify-center gap-2 mt-3">
                            {renderStars(agent.rating)}
                            {agent.review_count && (
                              <span className="text-sm text-muted-foreground">
                                ({agent.review_count})
                              </span>
                            )}
                          </div>
                        )}
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Location */}
                        {agent.location && (
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {agent.location}
                            </span>
                          </div>
                        )}

                        {/* Experience */}
                        {agent.years_experience && (
                          <div className="flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {agent.years_experience} years experience
                            </span>
                          </div>
                        )}

                        {/* Languages */}
                        {agent.languages && agent.languages.length > 0 && (
                          <div className="flex items-start gap-2 text-sm">
                            <Languages className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              {agent.languages.join(', ')}
                            </span>
                          </div>
                        )}

                        {/* Specialties */}
                        {agent.specialties && agent.specialties.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {agent.specialties.slice(0, 3).map((specialty) => (
                              <Badge key={specialty} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                            {agent.specialties.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{agent.specialties.length - 3} more
                              </Badge>
                            )}
                          </div>
                        )}

                        {/* Bio Preview */}
                        {agent.bio && (
                          <p className="text-sm text-muted-foreground line-clamp-3 pt-2 border-t">
                            {agent.bio}
                          </p>
                        )}

                        {/* Contact */}
                        <div className="pt-4 border-t space-y-2">
                          {agent.email && (
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground truncate">
                                {agent.email}
                              </span>
                            </div>
                          )}
                          {agent.phone && (
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {agent.phone}
                              </span>
                            </div>
                          )}
                        </div>

                        <Button className="w-full mt-4 group-hover:bg-primary/90">
                          View Profile
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Our Agents?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Licensed & Certified</h3>
                  <p className="text-muted-foreground text-sm">
                    All our agents are fully licensed and meet the highest
                    professional standards in the mortgage industry.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground text-sm">
                    Years of experience helping thousands of Canadians achieve
                    their homeownership dreams.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Languages className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Multilingual Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Communicate in your preferred language with our diverse team
                    of multilingual professionals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with an Expert?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get personalized mortgage advice from one of our experienced agents
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
