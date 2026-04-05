import { Moon } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";
import { researchSectionBackLink } from "@/data/researchTopics";

const RadioInterferometryPage = () => {
  return (
    <InterestPageShell
      icon={Moon}
      eyebrow="About Me"
      title="Radio Interferometry"
      intro="Observing high energy phenomena"
      accent="starlight"
      backTo={researchSectionBackLink}
    >
      <p>
        Placeholder for VLBI and connected-array work: baselines, calibration, and what radio
        observations reveal about jets, transients, and the high-energy sky.
      </p>
      <p className="text-sm border-l-2 border-starlight/40 pl-4 italic text-muted-foreground/90">
        Add observation campaigns, beam patterns, or favourite frequency bands when you flesh this
        out.
      </p>
    </InterestPageShell>
  );
};

export default RadioInterferometryPage;
