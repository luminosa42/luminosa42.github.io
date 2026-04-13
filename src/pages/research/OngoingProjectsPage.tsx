import { FlaskConical } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";
import { researchSectionBackLink } from "@/data/researchTopics";

const OngoingProjectsPage = () => {
  return (
    <InterestPageShell
      icon={FlaskConical}
      eyebrow="About Me"
      title="Ongoing projects"
      intro="Current research directions, experiments, and works in progress."
      accent="starlight"
      backTo={researchSectionBackLink}
    >
      <p>To be updated.</p>
      <p className="text-sm border-l-2 border-starlight/40 pl-4 italic text-muted-foreground/90">
        Active project summaries and milestones will be added soon.
      </p>
    </InterestPageShell>
  );
};

export default OngoingProjectsPage;
