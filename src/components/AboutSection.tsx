import { Moon, Globe, Sparkles } from "lucide-react";

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
            {[
              { icon: Globe, label: "Black Hole Physics", desc: "Accretion disk, jets and AGN feedback" },
              { icon: Sparkles, label: "HPC/AI in Astronomy", desc: "Computational tools to simulate and analyse astronomical data" },
              { icon: Moon, label: "Radio Interferometry", desc: "Observing high energy phenomena" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border card-glow hover:border-primary/30 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-heading">{label}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
