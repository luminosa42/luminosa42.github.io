import { FileText } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";
import { researchSectionBackLink } from "@/data/researchTopics";

const CurriculumVitaePage = () => {
  return (
    <InterestPageShell
      icon={FileText}
      eyebrow="About Me"
      title="Curriculum Vitae"
      intro="A concise overview of academic background, appointments, and achievements."
      accent="primary"
      backTo={researchSectionBackLink}
    >
      <p>
        Placeholder for your full CV. You can include current position, education, awards,
        invited talks, and teaching history in a clean timeline format.
      </p>
      <p className="text-sm border-l-2 border-primary/40 pl-4 italic text-muted-foreground/90">
        Add a downloadable PDF link and selected highlights when ready.
      </p>
    </InterestPageShell>
  );
};

export default CurriculumVitaePage;
