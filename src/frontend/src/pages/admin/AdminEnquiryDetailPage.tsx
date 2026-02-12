import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminEnquiryDetailPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Enquiry Details</h1>
        <p className="text-muted-foreground">View full enquiry information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enquiry Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Enquiry details will appear here</p>
        </CardContent>
      </Card>
    </div>
  );
}
