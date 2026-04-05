import { Link } from "react-router-dom";
import { ArrowLeft, type LucideIcon } from "lucide-react";
import Starfield from "@/components/Starfield";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";
import type { PageAccent } from "@/theme/pageAccent";
import { pageAccentIconShell } from "@/theme/pageAccent";

const defaultBack = { to: "/#projects", label: "Back to Other Ventures" } as const;

type InterestPageShellProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  intro: string;
  accent: PageAccent;
  backTo?: { to: string; label: string };
  children: ReactNode;
};

const InterestPageShell = ({
  icon: Icon,
  eyebrow,
  title,
  intro,
  accent,
  backTo = defaultBack,
  children,
}: InterestPageShellProps) => {
  const shell = pageAccentIconShell[accent];

  return (
    <div className="relative min-h-screen bg-background">
      <Starfield />
      <div className="relative z-10">
        <header className="border-b border-border/80 backdrop-blur-sm bg-background/40">
          <div className="max-w-3xl mx-auto px-6 py-6">
            <Link
              to={backTo.to}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            >
              <ArrowLeft className="w-4 h-4" />
              {backTo.label}
            </Link>
          </div>
        </header>

        <main className="px-6 py-16 md:py-24">
          <article className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <div
                className={`group p-6 rounded-3xl border mb-8 transition-colors ${shell.box}`}
              >
                <Icon className={`w-16 h-16 md:w-20 md:h-20 ${shell.icon}`} strokeWidth={1.25} />
              </div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                {eyebrow}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">{intro}</p>
            </div>

            <div className="rounded-2xl border border-border bg-card/50 card-glow p-8 md:p-10 space-y-6 text-muted-foreground leading-relaxed">
              {children}
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default InterestPageShell;
