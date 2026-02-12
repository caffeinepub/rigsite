import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function ScholarshipTestPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Scholarship Test</h1>
          <p className="text-xl mt-4">Merit-Based Financial Assistance</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading>Scholarship Opportunities</SectionHeading>
            <p className="text-lg text-muted-foreground mb-12">
              RIG Institute offers merit-based scholarships to deserving students. Take our scholarship test to qualify
              for financial assistance.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>25% Scholarship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">For students scoring 70-80% in the scholarship test</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>50% Scholarship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">For students scoring 80-90% in the scholarship test</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>75% Scholarship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">For students scoring above 90% in the scholarship test</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/contact">Register for Test</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
