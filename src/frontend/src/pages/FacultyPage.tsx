import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FacultyPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Our Faculty</h1>
          <p className="text-xl mt-4">Expert Educators & Industry Professionals</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <SectionHeading>Learn from the Best</SectionHeading>
            <p className="text-lg text-muted-foreground">
              Our faculty comprises experienced educators and industry professionals dedicated to student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Card key={i}>
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/generated/faculty-1.dim_600x600.png)' }} />
                <CardHeader>
                  <CardTitle className="text-lg">Faculty Member {i}</CardTitle>
                  <p className="text-sm text-muted-foreground">Department Head</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Expert in hospitality management with industry experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
