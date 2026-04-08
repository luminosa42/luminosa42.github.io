import { BookMarked } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";
import { researchSectionBackLink } from "@/data/researchTopics";

const PublicationsPage = () => {
  return (
    <InterestPageShell
      icon={BookMarked}
      eyebrow="About Me"
      title="Publications"
      intro="Peer-reviewed papers, conference work, and selected preprints."
      accent="nebula"
      backTo={researchSectionBackLink}
    >
      <p>
        Placeholder for your publication list with filters by topic or year. This can be organized
        into first-author papers, collaborations, and recent highlights.
      </p>
      <p className="text-sm border-l-2 border-nebula/40 pl-4 italic text-muted-foreground/90">
        Add DOI, arXiv, ADS, or journal links for each entry when available.
      </p>
    </InterestPageShell>
  );
};

export default PublicationsPage;
