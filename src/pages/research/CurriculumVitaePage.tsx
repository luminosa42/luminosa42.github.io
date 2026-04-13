import { FileText } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";
import { researchSectionBackLink } from "@/data/researchTopics";
import cvPdf from "../../../cv/yl_academic_cv.pdf";

const CurriculumVitaePage = () => {
  return (
    <InterestPageShell
      icon={FileText}
      eyebrow="About Me"
      title="Academic CV"
      intro="A summary of my previous academic career"
      accent="primary"
      backTo={researchSectionBackLink}
    >
      <div className="flex flex-wrap gap-3">
        <a
          href={cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Open PDF
        </a>
        <a
          href={cvPdf}
          download="yl_academic_cv.pdf"
          className="inline-flex items-center px-4 py-2 rounded-lg border border-primary/30 text-foreground text-sm font-medium hover:bg-primary/10 transition-colors"
        >
          Download CV
        </a>
      </div>
      <div className="rounded-xl overflow-hidden border border-border bg-background/40">
        <iframe src={cvPdf} title="Academic CV PDF" className="w-full h-[80vh]" />
      </div>
      <p className="text-sm border-l-2 border-primary/40 pl-4 italic text-muted-foreground/90">
        If the preview does not load in your browser, use Open PDF.
      </p>
    </InterestPageShell>
  );
};

export default CurriculumVitaePage;
