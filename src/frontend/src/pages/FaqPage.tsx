import SectionHeading from '@/components/public/ui/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="text-xl mt-4">Find Answers to Common Questions</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading>Common Questions</SectionHeading>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What are the eligibility criteria for admission?</AccordionTrigger>
                <AccordionContent>
                  Students who have completed 10+2 from a recognized board are eligible to apply for our diploma and
                  degree programs. Specific requirements vary by program.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What is the duration of the courses?</AccordionTrigger>
                <AccordionContent>
                  We offer programs ranging from 1-year diplomas to 3-year degree programs. The Bachelor of Tourism
                  Studies (BTS) is a 3-year program, while diploma courses are typically 1 year.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do you provide placement assistance?</AccordionTrigger>
                <AccordionContent>
                  Yes, we have a dedicated placement cell with a 95% placement success rate. We have partnerships with
                  500+ hotels and resorts across India and internationally.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Are internships mandatory?</AccordionTrigger>
                <AccordionContent>
                  Yes, internships are an integral part of our curriculum. Students undergo 6-month internships at
                  leading hotels to gain practical industry experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What facilities are available on campus?</AccordionTrigger>
                <AccordionContent>
                  Our campus features three training kitchens, a fine dining restaurant, housekeeping lab, front office
                  lab, modern classrooms, IT room, library, and cafeteria.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Is accommodation provided?</AccordionTrigger>
                <AccordionContent>
                  We can assist students in finding suitable accommodation near the campus. Hostel facilities are
                  available for outstation students.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
