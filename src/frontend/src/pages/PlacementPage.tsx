import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PlacementPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Placement</h1>
          <p className="text-xl mt-4">95% Placement Success Rate</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <SectionHeading>Career Placement Support</SectionHeading>
            <p className="text-lg text-muted-foreground">
              Our dedicated placement cell ensures students secure positions at top hospitality brands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Top Recruiters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hyatt Hotels</li>
                  <li>• Radisson Hotels</li>
                  <li>• Sheraton</li>
                  <li>• Crown Plaza</li>
                  <li>• The Claridges</li>
                  <li>• Jaypee Hotels</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Placement Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Resume building workshops</li>
                  <li>• Interview preparation</li>
                  <li>• Mock interviews</li>
                  <li>• Campus recruitment drives</li>
                  <li>• Industry networking events</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Career Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Personality development</li>
                  <li>• Communication skills</li>
                  <li>• Professional grooming</li>
                  <li>• Industry mentorship</li>
                  <li>• Alumni network</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
