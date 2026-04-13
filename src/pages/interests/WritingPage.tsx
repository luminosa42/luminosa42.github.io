import { BookOpen } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";

const WritingPage = () => {
  return (
    <InterestPageShell
      icon={BookOpen}
      eyebrow="Other Ventures"
      title="Writing"
      intro="Short stories, poetry, plays, and essays on a variety of topics"
      accent="starlight"
    >
      <p>To be updated.</p>
      <p className="text-sm border-l-2 border-starlight/40 pl-4 italic text-muted-foreground/90">
        More content will be added soon.
      </p>
    </InterestPageShell>
  );
};

export default WritingPage;
