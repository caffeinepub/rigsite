import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, Users, Globe, TrendingUp } from 'lucide-react';
import SectionHeading from '@/components/public/ui/SectionHeading';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/generated/home-hero.dim_1920x700.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Creating The Next Generation of Leaders</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            RIG Institute of Hospitality Management - 25+ Years of Excellence in Hospitality Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/courses">Explore Courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur">
              <Link to="/contact">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-sm md:text-base opacity-90">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3000+</div>
              <div className="text-sm md:text-base opacity-90">Bright Students</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base opacity-90">Partner Hotels</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-sm md:text-base opacity-90">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading>RIG Institute of Hospitality Management</SectionHeading>
              <p className="text-lg text-muted-foreground mb-6">
                A prestigious institution renowned for its commitment to excellence in hospitality education, successfully
                catering to the hospitality and tourism sector for the past 25 years.
              </p>
              <p className="text-muted-foreground mb-6">
                Founded with the vision of creating future leaders in the hospitality industry, the institute has
                consistently maintained its reputation as a world-class institution with state-of-the-art facilities
                including modern classrooms, fully functional kitchens, fine dining restaurant, housekeeping lab, front
                office lab, and more.
              </p>
              <Button asChild>
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>World-Class</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">State-of-the-art facilities and infrastructure</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Expert Faculty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Highly experienced industry professionals</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Global Exposure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">International tours and partnerships</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Career Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Excellent placement opportunities</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading>Our Courses</SectionHeading>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to build future hospitality leaders
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/generated/course-thumb-1.dim_800x600.png)' }} />
              <CardHeader>
                <Badge className="w-fit mb-2">3 Years</Badge>
                <CardTitle>Bachelor of Tourism Studies (BTS)</CardTitle>
                <CardDescription>UGC approved degree from IGNOU with Diploma in Culinary & Bakery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Includes complimentary 10-day International Educational Tour to Switzerland
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/courses">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/generated/course-thumb-2.dim_800x600.png)' }} />
              <CardHeader>
                <Badge className="w-fit mb-2">2 Years</Badge>
                <CardTitle>Master of Tourism & Travel Management</CardTitle>
                <CardDescription>Advanced program for tourism industry professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Build a solid foundation in all facets of tourism & hospitality management
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/courses">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/generated/course-thumb-1.dim_800x600.png)' }} />
              <CardHeader>
                <Badge className="w-fit mb-2">1 Year</Badge>
                <CardTitle>Diploma in Hotel Management</CardTitle>
                <CardDescription>Intensive program covering all aspects of hotel operations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Practical training with industry internships and placement support
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/courses">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/courses">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Hospitality */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading>Why Choose a Career in Hospitality Management?</SectionHeading>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Booming Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The hospitality industry is one of the fastest-growing industries in the world, offering numerous job
                  opportunities across diverse sectors.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Develop Business Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hotel management programs cover accounting, marketing, human resources, operations, and strategic
                  management - essential business skills.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Excellent Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Industry offers comprehensive benefits including health insurance, retirement plans, paid time off, and
                  opportunities for global travel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Placement Partners */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading>Our Placement Partners</SectionHeading>
            <p className="text-lg text-muted-foreground">Top hospitality brands trust our graduates</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Crown Plaza', 'Hyatt', 'Jaypee Hotels', 'Radisson', 'Sheraton', 'The Claridges'].map((brand) => (
              <div key={brand} className="text-center p-4 bg-background rounded-lg">
                <p className="font-semibold text-muted-foreground">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join RIG Institute and become part of the next generation of hospitality leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/20">
              <Link to="/courses">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
