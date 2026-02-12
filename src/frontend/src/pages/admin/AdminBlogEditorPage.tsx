import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminBlogEditorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Blog Editor</h1>
        <p className="text-muted-foreground">Create or edit blog posts</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Blog editor form will appear here</p>
        </CardContent>
      </Card>
    </div>
  );
}
