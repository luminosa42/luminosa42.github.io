import { Orbit } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";

const MentoringPage = () => {
  return (
    <InterestPageShell
      icon={Orbit}
      eyebrow="Other Ventures"
      title="Mentoring & Coaching"
      intro="Navigating life through scientific and logical lens"
      accent="nebula"
    >
      <p>To be updated.</p>
      <p className="text-sm border-l-2 border-nebula/40 pl-4 italic text-muted-foreground/90">
        More content will be added soon.
      </p>
    </InterestPageShell>
  );
};

export default MentoringPage;
