import SectionHeading from '@/components/public/ui/SectionHeading';

export default function IndustryVisitPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Industry Visits</h1>
          <p className="text-xl mt-4">Learning Beyond the Classroom</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <SectionHeading>Industry Exposure</SectionHeading>
            <p className="text-lg text-muted-foreground">
              Regular visits to leading hotels, resorts, and hospitality establishments provide students with practical
              insights into industry operations
            </p>
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
