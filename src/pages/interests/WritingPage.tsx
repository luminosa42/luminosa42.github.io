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
      <p>
        Fiction, stage drafts, and essays live here—pieces that orbit science, memory, and the
        stories we tell to make sense of the universe. Expect a mix of tone: playful, reflective,
        and occasionally technical.
      </p>
      <p className="text-sm border-l-2 border-starlight/40 pl-4 italic text-muted-foreground/90">
        Placeholder: swap this block for excerpts, publication links, or a reading list when you
        curate the section.
      </p>
    </InterestPageShell>
  );
};

export default WritingPage;
