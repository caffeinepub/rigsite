import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Harshit Bisht',
      position: 'Hotel Oberoi Gurgaon',
      text: 'I got the placement in Oberoi Gurgaon due to all my teachers guidance. For me RIG is one of the best institutes for hospitality management.',
    },
    {
      name: 'Ajay Pant',
      position: 'Hotel Pullman',
      text: 'My journey of my career started in the prestigious college of RIG Institute of Hospitality and Management. I have had an amazing experience.',
    },
    {
      name: 'Student from Mauritius',
      position: 'International Student',
      text: 'It gives me an immense pleasure to be a part of RIG Institute. This institute has taught me the professionalism of the industry. The environment and faculty are very cooperative.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Testimonials</h1>
          <p className="text-xl mt-4">What Our Students Say</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <SectionHeading>Student Success Stories</SectionHeading>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/assets/generated/testimonial-1.dim_256x256.png" />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-primary opacity-50" />
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
