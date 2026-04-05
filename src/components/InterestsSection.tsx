import { Link } from "react-router-dom";
import { interests } from "@/data/interests";
import { pageAccentIconBox } from "@/theme/pageAccent";

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
          {interests.map(({ icon: Icon, title, description, color, path, accent }) => (
            <Link
              key={title}
              to={path}
              className="group block p-6 rounded-2xl bg-card border border-border card-glow hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div
                className={`p-4 rounded-2xl w-fit mb-5 transition-colors ${pageAccentIconBox[accent]}`}
              >
                <Icon className={`w-12 h-12 md:w-14 md:h-14 ${color}`} strokeWidth={1.25} />
              </div>
              <h3 className="text-xl font-semibold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
