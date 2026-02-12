import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminEnquiriesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Enquiries</h1>
        <p className="text-muted-foreground">View and manage contact form submissions</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Enquiries</CardTitle>
          <CardDescription>Contact form submissions from visitors</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Enquiries list will appear here</p>
        </CardContent>
      </Card>
    </div>
  );
}
