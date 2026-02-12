import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InfrastructurePage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Infrastructure</h1>
          <p className="text-xl mt-4">State-of-the-Art Facilities</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <SectionHeading>World-Class Facilities</SectionHeading>
            <p className="text-lg text-muted-foreground">
              Our campus features modern infrastructure designed to provide the best learning environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Training Kitchens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Three fully functional training kitchens equipped with modern appliances and tools for culinary training
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fine Dining Restaurant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  On-campus fine dining restaurant for practical food & beverage service training
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Housekeeping Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fully equipped housekeeping laboratory with mock hotel rooms for practical training
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Front Office Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modern front office lab with hotel management software and reservation systems
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url(/assets/generated/infrastructure-1.dim_1200x800.png)' }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
