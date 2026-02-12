import SectionHeading from '@/components/public/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EducationLoanPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/internal-banner.dim_1920x450.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Education Loan</h1>
          <p className="text-xl mt-4">Financial Support for Your Education</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading>Education Loan Assistance</SectionHeading>
            <p className="text-lg text-muted-foreground mb-12">
              We have partnerships with leading banks and financial institutions to help students secure education loans
              at competitive interest rates.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Partner Banks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• State Bank of India</li>
                    <li>• HDFC Bank</li>
                    <li>• ICICI Bank</li>
                    <li>• Axis Bank</li>
                    <li>• Punjab National Bank</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Loan Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Competitive interest rates</li>
                    <li>• Flexible repayment options</li>
                    <li>• Covers tuition and living expenses</li>
                    <li>• Quick processing</li>
                    <li>• Minimal documentation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
