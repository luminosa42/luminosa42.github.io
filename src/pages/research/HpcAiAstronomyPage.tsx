import { Sparkles } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";
import { researchSectionBackLink } from "@/data/researchTopics";

const HpcAiAstronomyPage = () => {
  return (
    <InterestPageShell
      icon={Sparkles}
      eyebrow="About Me"
      title="HPC/AI in Astronomy"
      intro="Computational tools to simulate and analyse astronomical data"
      accent="nebula"
      backTo={researchSectionBackLink}
    >
      <p>
        Placeholder for workflows that blend high-performance computing with modern ML: from
        simulation post-processing to inference on survey-scale data—aligned with your computational
        astrophysics focus.
      </p>
      <p className="text-sm border-l-2 border-nebula/40 pl-4 italic text-muted-foreground/90">
        Swap in code snippets, cluster notes, or project links when you publish this section.
      </p>
    </InterestPageShell>
  );
};

export default HpcAiAstronomyPage;
