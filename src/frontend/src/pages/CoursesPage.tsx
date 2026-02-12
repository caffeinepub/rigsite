import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { GraduationCap, BookOpen, Award, Users } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Our Courses</h1>
          <p className="text-xl mt-4">World-Class Hospitality Management Programs</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading>Comprehensive Programs for Future Leaders</SectionHeading>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our courses are designed to provide students with the knowledge, skills, and practical experience needed to
              excel in the global hospitality industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/generated/course-thumb-1.dim_800x600.png)' }} />
              <CardHeader>
                <Badge className="w-fit mb-2">3 Years</Badge>
                <CardTitle>Bachelor of Tourism Studies (BTS)</CardTitle>
                <CardDescription>UGC approved degree from IGNOU</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Diploma in Culinary & Bakery</li>
                  <li>• 10-day International Tour to Switzerland</li>
                  <li>• Industry internships</li>
                  <li>• Placement assistance</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/generated/course-thumb-2.dim_800x600.png)' }} />
              <CardHeader>
                <Badge className="w-fit mb-2">2 Years</Badge>
                <CardTitle>Master of Tourism & Travel Management</CardTitle>
                <CardDescription>Advanced program for professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Tourism industry management</li>
                  <li>• Strategic planning</li>
                  <li>• Global tourism trends</li>
                  <li>• Research methodology</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/generated/course-thumb-1.dim_800x600.png)' }} />
              <CardHeader>
                <Badge className="w-fit mb-2">1 Year</Badge>
                <CardTitle>Diploma in Hotel Management</CardTitle>
                <CardDescription>Intensive practical training</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Front office operations</li>
                  <li>• Food & beverage service</li>
                  <li>• Housekeeping management</li>
                  <li>• Kitchen operations</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Curriculum Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our curriculum is regularly updated to align with industry standards and global best practices. Students
                  learn from experienced faculty and industry professionals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Practical Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hands-on training in our state-of-the-art facilities including fully functional kitchens, fine dining
                  restaurant, housekeeping lab, and front office lab.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Industry Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn recognized certifications and degrees that are valued by top hospitality brands worldwide. Our
                  programs meet international standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Career Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive placement assistance with our network of 500+ partner hotels and resorts. 95% of our
                  graduates secure positions within 6 months.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading>Ready to Start Your Journey?</SectionHeading>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join RIG Institute and transform your passion for hospitality into a rewarding career
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
