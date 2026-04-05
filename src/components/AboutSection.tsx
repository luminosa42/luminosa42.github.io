import { Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { researchTopics } from "@/data/researchTopics";
import { pageAccentIconBox } from "@/theme/pageAccent";

const AboutSection = () => {
  return (
    <section id="academics" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Moon className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-wider">About Me</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 text-foreground">
          Researcher in Computational <span className="text-primary text-glow">Astrophysics</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I am a researcher in computational astrophysics and cosmology, specialising on black hole physics, 
              including their formation, accretion, and the effects of jets on the surrounding environment.
              I am also interested in the formation and evolution of galaxies, and the large-scale structure of the universe.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              After a long academic career in China, United States and United Kingdom, I am now independent and working on my own projects.
              I am also interested in education and public engagement in science, and I am a passionate advocate for science literacy and critical thinking.
            </p>
          </div>

          <div className="space-y-4">
            {researchTopics.map(({ icon: Icon, label, desc, path, color, accent }) => (
              <Link
                key={label}
                to={path}
                className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border card-glow hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div
                  className={`p-3 rounded-xl shrink-0 transition-colors ${pageAccentIconBox[accent]}`}
                >
                  <Icon className={`w-10 h-10 md:w-12 md:h-12 ${color}`} strokeWidth={1.25} />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="font-semibold text-foreground font-heading group-hover:text-primary transition-colors">
                    {label}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                  <span className="mt-2 inline-block text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
