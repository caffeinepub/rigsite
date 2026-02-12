import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">About RIG Institute</h1>
          <p className="text-xl mt-4">25+ Years of Excellence in Hospitality Education</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading>RIG Institute of Hospitality Management</SectionHeading>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                RIG Institute (RIG Education Foundation) is a prestigious institution renowned for its commitment to
                excellence in hospitality education. We have been successfully catering to the hospitality and tourism
                sector for the past 25 years in a highly prominent region.
              </p>
              <p className="text-muted-foreground mb-6">
                The institute was founded with the vision of generating future leaders in the industry of hospitality and
                has consistently maintained its reputation as a world-class institution. Our state-of-the-art facilities
                include well-equipped and modern classrooms, three fully functional kitchens, a fine dining restaurant, a
                cafeteria, a housekeeping lab, a front office lab, an IT room, and many more.
              </p>
              <p className="text-muted-foreground mb-6">
                The campus is sprawled across a large area, providing a serene, composed, and conducive learning
                environment for students. RIG Institute offers a wide range of courses in hospitality management,
                including bachelor's, diplomas, and certificate programs designed to instill students with the necessary
                knowledge and skills to excel in the hospitality industry.
              </p>
              <p className="text-muted-foreground mb-6">
                The curriculum of our programs is regularly updated to keep pace with the evolving demands of the
                hospitality sector. RIG consists of a team of highly experienced faculty members who are experts in their
                respective fields, ensuring students receive the best possible education and are equipped with the
                necessary skills to succeed in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To create and nurture future hospitality leaders by imparting international hospitality management
                  education so as to make them contribute towards the excellence and growth of the global hospitality
                  industry.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the leading hotel management institute in the country, setting benchmarks for excellence in
                  hospitality education and producing world-class professionals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Righteous</p>
                    <p className="text-sm text-muted-foreground">We are ethical and shape virtuous behavior</p>
                  </div>
                  <div>
                    <p className="font-semibold">Insightful</p>
                    <p className="text-sm text-muted-foreground">We nurture talents through team brilliance</p>
                  </div>
                  <div>
                    <p className="font-semibold">Growth</p>
                    <p className="text-sm text-muted-foreground">We foster growth by optimizing performance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
