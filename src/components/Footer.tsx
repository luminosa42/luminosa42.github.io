import { Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="w-5 h-5 text-primary" />
          <span className="font-heading font-semibold text-foreground">Celeste Lu</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Don't look up! 
        </p>
        <div className="flex justify-center gap-6 text-sm text-muted-foreground">
          <a href="#academics" className="hover:text-primary transition-colors">Research</a>
          <a href="#projects" className="hover:text-primary transition-colors">Other Ventures</a>
        </div>
        <p className="text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} Celeste Lu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
