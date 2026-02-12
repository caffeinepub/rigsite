import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Briefcase, TrendingUp, Users, Award } from 'lucide-react';

export default function InternshipPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Internship Program</h1>
          <p className="text-xl mt-4">Gain Real-World Experience</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <SectionHeading>Industry Internships</SectionHeading>
            <p className="text-lg text-muted-foreground">
              Our comprehensive internship program provides students with hands-on experience at leading hotels and resorts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Structured Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  6-month internship programs with rotational training across all hotel departments including front office,
                  food & beverage, housekeeping, and kitchen operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Industry Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Internships with 500+ partner hotels including Hyatt, Radisson, Sheraton, Crown Plaza, and other leading
                  hospitality brands across India and internationally.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Career Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Many of our interns receive pre-placement offers from their internship hotels. Build your professional
                  network and kickstart your hospitality career.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Stipend & Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Competitive stipends, accommodation support, meals, and uniforms provided during internship. Gain
                  valuable experience while earning.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/contact">Apply for Internship</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
