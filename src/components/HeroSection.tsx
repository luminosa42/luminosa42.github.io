import heroImage from "@/assets/hero-nebula.jpg";
import { Star, Telescope } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background nebula image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Deep space nebula"
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in-up">
          <Telescope className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Welcome to my space!</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-glow animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <span className="text-foreground">Ying-He Celeste Lü</span>
          <br />
          <span className="text-primary">Astrophysicist, Educator, Lifelong Learner</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
           Answering big questions, sharing passions, and exploring the universe one step at a time
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <a href="#academics" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            <Star className="w-4 h-4" />
            Research
          </a>
          <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-foreground font-semibold hover:bg-primary/10 transition-colors">
            Other Ventures
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-twinkle" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
