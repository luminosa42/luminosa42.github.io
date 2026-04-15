import { BookOpen } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const WritingPage = () => {
  return (
    <InterestPageShell
      icon={BookOpen}
      eyebrow="Other Ventures"
      title="Writing"
      intro="A collection of my written works and links"
      accent="starlight"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Blog posts</CardTitle>
            <CardDescription>More content will be added soon</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Published articles</CardTitle>
            <CardDescription>More content will be added soon</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </InterestPageShell>
  );
};

export default WritingPage;
