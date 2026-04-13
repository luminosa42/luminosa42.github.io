import { Camera } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";

const ArtAndDesignPage = () => {
  return (
    <InterestPageShell
      icon={Camera}
      eyebrow="Other Ventures"
      title="Art & Design"
      intro="A portfolio for science-inspired art and design projects"
      accent="primary"
    >
      <p>To be updated.</p>
      <p className="text-sm border-l-2 border-primary/40 pl-4 italic text-muted-foreground/90">
        More content will be added soon.
      </p>
    </InterestPageShell>
  );
};

export default ArtAndDesignPage;
