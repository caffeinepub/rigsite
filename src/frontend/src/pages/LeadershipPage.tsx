import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LeadershipPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Our Leadership</h1>
          <p className="text-xl mt-4">Visionary Leaders Guiding Excellence</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <SectionHeading>Meet Our Leadership Team</SectionHeading>
            <p className="text-lg text-muted-foreground">
              Our leadership team brings decades of experience in hospitality education and industry management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/generated/leader-1.dim_600x600.png)' }} />
              <CardHeader>
                <CardTitle>Dr. Rajesh Kumar</CardTitle>
                <p className="text-sm text-muted-foreground">Director & Founder</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  25+ years of experience in hospitality education. PhD in Hotel Management from a leading university.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/generated/leader-1.dim_600x600.png)' }} />
              <CardHeader>
                <CardTitle>Ms. Priya Sharma</CardTitle>
                <p className="text-sm text-muted-foreground">Academic Dean</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Expert in curriculum development with 20 years of experience in hospitality education.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/generated/leader-1.dim_600x600.png)' }} />
              <CardHeader>
                <CardTitle>Mr. Amit Patel</CardTitle>
                <p className="text-sm text-muted-foreground">Head of Placements</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  15 years in hospitality recruitment with strong industry connections across India and abroad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
