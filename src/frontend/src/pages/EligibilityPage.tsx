import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function EligibilityPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Eligibility Criteria</h1>
          <p className="text-xl mt-4">Admission Requirements</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading>Admission Eligibility</SectionHeading>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Diploma Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Completed 10+2 from recognized board</li>
                    <li>• Minimum 50% aggregate marks</li>
                    <li>• Age: 17-25 years</li>
                    <li>• English proficiency required</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Degree Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Completed 10+2 from recognized board</li>
                    <li>• Minimum 50% aggregate marks</li>
                    <li>• Age: 17-25 years</li>
                    <li>• Entrance test may be required</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/contact">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
