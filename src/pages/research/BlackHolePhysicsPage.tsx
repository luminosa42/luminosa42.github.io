import { Globe } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";
import { researchSectionBackLink } from "@/data/researchTopics";

const BlackHolePhysicsPage = () => {
  return (
    <InterestPageShell
      icon={Globe}
      eyebrow="About Me"
      title="Black Hole Physics"
      intro="Accretion disk, jets and AGN feedback"
      accent="primary"
      backTo={researchSectionBackLink}
    >
      <p>
        Placeholder for deeper notes on black hole formation, accretion physics, relativistic jets,
        and how AGN feedback couples small scales to galaxy evolution—mirroring the themes from
        the main bio.
      </p>
      <p className="text-sm border-l-2 border-primary/40 pl-4 italic text-muted-foreground/90">
        Add papers, simulations, or figures here when you are ready to expand this track.
      </p>
    </InterestPageShell>
  );
};

export default BlackHolePhysicsPage;
