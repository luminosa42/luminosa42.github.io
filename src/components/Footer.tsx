import { Github, Linkedin, Mail, Star, X } from "lucide-react";

const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/yinghe-lu",
  x: "https://x.com/luminos94985138?s=21",
  github: "https://github.com/luminosa42",
  email: "yl790@cantab.ac.uk",
} as const;

const iconClass = "shrink-0 text-muted-foreground group-hover:text-primary transition-colors";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="w-5 h-5 text-primary shrink-0" />
          <span className="font-heading font-semibold text-foreground">Celeste Lu</span>
        </div>
        <div className="flex justify-center gap-6 text-sm text-muted-foreground">
          <a href="/#academics" className="hover:text-primary transition-colors">
            Research
          </a>
          <a href="/#projects" className="hover:text-primary transition-colors">
            Other Ventures
          </a>
        </div>
        <nav
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-6"
          aria-label="Social and contact links"
        >
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-lg hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Linkedin className={iconClass} size={22} strokeWidth={1.75} aria-hidden />
          </a>
          <a
            href={SOCIAL.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-lg hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className={iconClass} size={22} strokeWidth={1.75} aria-hidden />
          </a>
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-lg hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Github className={iconClass} size={22} strokeWidth={1.75} aria-hidden />
          </a>
          <a
            href={`mailto:${SOCIAL.email}`}
            aria-label={`Email ${SOCIAL.email}`}
            className="group inline-flex h-11 w-11 items-center justify-center rounded-lg hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Mail className={iconClass} size={22} strokeWidth={1.75} aria-hidden />
          </a>
        </nav>
        <p className="text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} Celeste Lu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
