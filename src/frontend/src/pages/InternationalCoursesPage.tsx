import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Globe, Plane, Award, Users } from 'lucide-react';

export default function InternationalCoursesPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/international-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">International Courses</h1>
          <p className="text-xl mt-4">Global Education with International Exposure</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <SectionHeading>Study Abroad Opportunities</SectionHeading>
            <p className="text-lg text-muted-foreground">
              RIG Institute offers international programs that provide students with global exposure and the opportunity to
              study hospitality management in world-renowned destinations. Our partnerships with leading international
              institutions ensure quality education and cultural immersion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Switzerland Educational Tour</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complimentary 10-day educational tour to Switzerland included with our BTS program. Visit world-class
                  hotels, attend workshops, and experience Swiss hospitality excellence firsthand.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Visit to luxury hotels and resorts</li>
                  <li>• Workshops with industry experts</li>
                  <li>• Cultural immersion activities</li>
                  <li>• Networking opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Plane className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">International Internships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Gain valuable international work experience through our global internship program. Work with leading
                  hospitality brands in destinations across Europe, Asia, and the Middle East.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 6-month international placements</li>
                  <li>• Competitive stipends</li>
                  <li>• Accommodation support</li>
                  <li>• Career advancement opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Global Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Earn internationally recognized certifications that enhance your career prospects worldwide. Our programs
                  are aligned with global hospitality standards.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AHLEI certifications</li>
                  <li>• Food safety certifications</li>
                  <li>• Wine & spirits qualifications</li>
                  <li>• Language proficiency programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Exchange Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Participate in student exchange programs with our partner institutions worldwide. Experience different
                  cultures while continuing your hospitality education.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Semester exchange opportunities</li>
                  <li>• Credit transfer arrangements</li>
                  <li>• Cultural exchange activities</li>
                  <li>• Global networking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore the World of Hospitality</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take your education global with RIG Institute's international programs
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Learn More</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
