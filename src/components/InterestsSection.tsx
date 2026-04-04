import { Orbit, Camera, BookOpen, Cpu } from "lucide-react";

const interests = [
  {
    icon: Cpu,
    title: "Math & Data Science",
    description: "From interesting geometry problems to practical LLM applications",
    color: "text-primary",
  },
  {
    icon: BookOpen,
    title: "Writing",
    description: "Short stories, poetry, plays, and essays on a variety of topics",
    color: "text-starlight",
  },
  {
    icon: Orbit,
    title: "Mentoring & Coaching",
    description: "Navigating life through scientific and logical lens",
    color: "text-nebula",
  },
  {
    icon: Camera,
    title: "Art & Design",
    description: "A portfolio for science-inspired art and design projects",
    color: "text-primary",
  },
];

const InterestsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Other Ventures</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 text-foreground">
            What Fuels My <span className="text-primary text-glow">Curiosity</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {interests.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-card border border-border card-glow hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="text-xl font-semibold font-heading text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
