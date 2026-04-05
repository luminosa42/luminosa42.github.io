import { Orbit, Camera, BookOpen, Cpu, type LucideIcon } from "lucide-react";
import type { PageAccent } from "@/theme/pageAccent";

export type InterestItem = {
  slug: string;
  path: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  accent: PageAccent;
};

export const interests: InterestItem[] = [
  {
    slug: "math-and-data-science",
    path: "/interests/math-and-data-science",
    icon: Cpu,
    title: "Math & Data Science",
    description: "From interesting geometry problems to practical LLM applications",
    color: "text-primary",
    accent: "primary",
  },
  {
    slug: "writing",
    path: "/interests/writing",
    icon: BookOpen,
    title: "Writing",
    description: "Short stories, poetry, plays, and essays on a variety of topics",
    color: "text-starlight",
    accent: "starlight",
  },
  {
    slug: "mentoring-and-coaching",
    path: "/interests/mentoring-and-coaching",
    icon: Orbit,
    title: "Mentoring & Coaching",
    description: "Navigating life through scientific and logical lens",
    color: "text-nebula",
    accent: "nebula",
  },
  {
    slug: "art-and-design",
    path: "/interests/art-and-design",
    icon: Camera,
    title: "Art & Design",
    description: "A portfolio for science-inspired art and design projects",
    color: "text-primary",
    accent: "primary",
  },
];
