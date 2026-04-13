import { Cpu } from "lucide-react";
import InterestPageShell from "@/components/InterestPageShell";
import { researchSectionBackLink } from "@/data/researchTopics";

const toolboxSections = [
  {
    category: "Core Languages",
    tools: ["Python", "Julia", "C", "C#", "C++", "Fortran", "JavaScript"],
  },
  {
    category: "Numerical & Parallel Computing",
    tools: ["MPI", "OpenMP", "OpenACC", "CUDA", "Dask", "Slurm"],
  },
  {
    category: "Data & Scientific Stack",
    tools: ["PostgreSQL", "HDF5", "polars", "pandas", "xarray"],
  },
  {
    category: "ML/LLM",
    tools: ["TensorFlow", "scikit-learn", "Jax"],
  },
  {
    category: "AI Fluency",
    tools: ["OpenAI", "Claude Code", "GitHub CoPilot", "Cursor"],
  },
  {
    category: "Backend & Data Engineering",
    tools: ["Apache Kafka", "Spark", "FastAPI", "Elasticsearch"],
  },
  {
    category: "Cloud, Containers & Orchestration",
    tools: ["AWS", "GCP", "Docker", "Kubernetes"],
  },
  {
    category: "Observability & Monitoring",
    tools: ["Grafana", "Kibana"],
  },
  {
    category: "Frontend",
    tools: ["React", "Node.js", "HTML"],
  },
  {
    category: "Other Research Tools",
    tools: ["Git", "MATLAB", "Mathematica", "Unix", "LaTeX"],
  },
] as const;

const TechnicalStackPage = () => {
  return (
    <InterestPageShell
      icon={Cpu}
      eyebrow="About Me"
      title="Tech Stack"
      intro="My magic bag of tools which keeps being updated."
      accent="nebula"
      backTo={researchSectionBackLink}
    >
      <h2 className="text-xl md:text-2xl font-semibold font-heading text-foreground">
        Technical expertise
      </h2>
      <ul className="space-y-3">
        <li className="rounded-lg border border-nebula/25 bg-nebula/5 px-4 py-3 leading-relaxed">
          <strong className="text-foreground">Applied Mathematics & HPC:</strong> Strong track
          record in model development, numerical methods, and high-performance computing.
        </li>
        <li className="rounded-lg border border-nebula/25 bg-nebula/5 px-4 py-3 leading-relaxed">
          <strong className="text-foreground">Software Engineering:</strong> Experience across
          open-source development, deployment, cloud technologies, data engineering, data
          management, DevOps, and testing.
        </li>
        <li className="rounded-lg border border-nebula/25 bg-nebula/5 px-4 py-3 leading-relaxed">
          <strong className="text-foreground">AI in Practice:</strong> Working knowledge of deep
          learning and AI, with practical application in software-driven research environments.
        </li>
        <li className="rounded-lg border border-nebula/25 bg-nebula/5 px-4 py-3 leading-relaxed">
          <strong className="text-foreground">Product & User-Facing Work:</strong> Experience
          building client-facing software, data visualisation workflows, and front-end web
          interfaces.
        </li>
        <li className="rounded-lg border border-nebula/25 bg-nebula/5 px-4 py-3 leading-relaxed">
          <strong className="text-foreground">Leadership:</strong> Certified Agile product manager
          with expertise in designing data solutions for large-scale projects and providing
          technical leadership.
        </li>
      </ul>
      <h2 className="text-xl md:text-2xl font-semibold font-heading text-foreground pt-2">
        AI Fluency
      </h2>
      <ul className="space-y-3">
        <li className="rounded-lg border border-nebula/25 bg-nebula/5 px-4 py-3 leading-relaxed">
          <strong className="text-foreground">Workflow Acceleration:</strong> Comfortable using AI
          assistants to speed up research, coding, and technical writing workflows.
        </li>
        <li className="rounded-lg border border-nebula/25 bg-nebula/5 px-4 py-3 leading-relaxed">
          <strong className="text-foreground">Tool Proficiency:</strong> Hands-on experience with
          OpenAI, Claude Code, GitHub Copilot, and Cursor for iterative prototyping, debugging,
          and documentation tasks.
        </li>
        <li className="rounded-lg border border-nebula/25 bg-nebula/5 px-4 py-3 leading-relaxed">
          <strong className="text-foreground">Quality & Oversight:</strong> Strong focus on prompt
          design, validation, and human review to ensure reliable, high-quality outputs.
        </li>
      </ul>
      <h2 className="text-xl md:text-2xl font-semibold font-heading text-foreground pt-2">
        A Glimpse of My Toolbox
      </h2>
      <p className="text-sm text-muted-foreground">Grouped by function for easier scanning.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {toolboxSections.map((section) => (
          <section
            key={section.category}
            className="rounded-xl border border-border bg-background/40 p-4 space-y-3"
          >
            <h3 className="font-semibold text-foreground">{section.category}</h3>
            <div className="flex flex-wrap gap-2">
              {section.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-full border border-nebula/30 bg-nebula/10 px-3 py-1 text-xs font-medium text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </InterestPageShell>
  );
};

export default TechnicalStackPage;
