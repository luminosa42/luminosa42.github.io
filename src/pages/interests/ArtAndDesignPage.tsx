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
      <p>
        Visual work inspired by telescopes, simulations, and cosmic color palettes—sketches,
        digital pieces, and design studies that sit at the boundary between astronomy and art.
      </p>
      <p className="text-sm border-l-2 border-primary/40 pl-4 italic text-muted-foreground/90">
        Placeholder: replace with image grids, process shots, or project case studies when your
        portfolio is ready.
      </p>
    </InterestPageShell>
  );
};

export default ArtAndDesignPage;
