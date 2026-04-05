import { Cpu } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";

const MathAndDataSciencePage = () => {
  return (
    <InterestPageShell
      icon={Cpu}
      eyebrow="Other Ventures"
      title="Math & Data Science"
      intro="From interesting geometry problems to practical LLM applications"
      accent="primary"
    >
      <p>
        This space will highlight puzzles, proofs, and data-driven projects—from classical geometry
        that still surprises me to modern machine learning workflows I use in research and side
        experiments.
      </p>
      <p className="text-sm border-l-2 border-primary/40 pl-4 italic text-muted-foreground/90">
        Placeholder: add problem write-ups, notebooks, or links to papers and code when you are
        ready.
      </p>
    </InterestPageShell>
  );
};

export default MathAndDataSciencePage;
