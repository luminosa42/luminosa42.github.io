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
      <p>To be updated.</p>
      <p className="text-sm border-l-2 border-primary/40 pl-4 italic text-muted-foreground/90">
        More content will be added soon.
      </p>
    </InterestPageShell>
  );
};

export default MathAndDataSciencePage;
