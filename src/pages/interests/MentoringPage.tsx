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
      <p>
        A hub for mentorship notes, frameworks for decision-making, and resources for students and
        early-career researchers—grounded in curiosity, rigor, and kindness.
      </p>
      <p className="text-sm border-l-2 border-nebula/40 pl-4 italic text-muted-foreground/90">
        Placeholder: add office hours, workshop outlines, or testimonials when you want this page
        to go live in earnest.
      </p>
    </InterestPageShell>
  );
};

export default MentoringPage;
