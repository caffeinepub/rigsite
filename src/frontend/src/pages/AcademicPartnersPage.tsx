import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AcademicPartnersPage() {
  const partners = [
    'IGNOU - Indira Gandhi National Open University',
    'Swiss Hotel Management Schools',
    'International Hotel Management Institute',
    'Global Hospitality Academy',
    'European Culinary Institute',
    'Asian Tourism Board',
  ];

  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Academic Partners</h1>
          <p className="text-xl mt-4">Collaborating with Leading Institutions Worldwide</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <SectionHeading>Our Global Network</SectionHeading>
            <p className="text-lg text-muted-foreground">
              RIG Institute has established strong partnerships with prestigious academic institutions and industry leaders
              worldwide. These collaborations ensure our curriculum remains current and our students receive world-class
              education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <Card key={partner}>
                <CardHeader>
                  <CardTitle className="text-lg">{partner}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Collaborative programs, faculty exchange, and joint research initiatives
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
