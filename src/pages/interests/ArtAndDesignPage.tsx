import { Camera } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ArtAndDesignPage = () => {
  return (
    <InterestPageShell
      icon={Camera}
      eyebrow="Other Ventures"
      title="Art & Design"
      intro="Various creative pursuits that I engage in"
      accent="primary"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Digital Design</CardTitle>
            <CardDescription>More content will be added soon</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Other Form of Artistic Life</CardTitle>
          </CardHeader>
          <div className="p-6 pt-0">
            <p className="text-sm text-muted-foreground mb-4">
              During my lifetime I have various training and community involvement in the following areas.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4 list-disc list-inside">
              <li><strong>Singing:</strong> Classical & Acapella choirs, voice lessons</li>
              <li><strong>Dance:</strong> Contemporary, Hip-hop, belly dance, flamenco, tango, salsa, modern choreography</li>
              <li><strong>Performance:</strong> Basic and physical acting, improv comedy</li>
              <li><strong>Martial arts:</strong> Krav Maga, Boxing, Karate, Taekwondo, Kendo</li>
            </ul>
          </div>
        </Card>
      </div>
    </InterestPageShell>
  );
};

export default ArtAndDesignPage;
