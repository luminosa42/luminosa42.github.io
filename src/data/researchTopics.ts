import { Moon, Globe, Sparkles, type LucideIcon } from "lucide-react";
import type { PageAccent } from "@/theme/pageAccent";

export const researchSectionBackLink = {
  to: "/#academics",
  label: "Back to Research",
} as const;

export type ResearchTopicItem = {
  path: string;
  icon: LucideIcon;
  label: string;
  desc: string;
  color: string;
  accent: PageAccent;
};

export const researchTopics: ResearchTopicItem[] = [
  {
    path: "/research/black-hole-physics",
    icon: Globe,
    label: "Black Hole Physics",
    desc: "Accretion disk, jets and AGN feedback",
    color: "text-primary",
    accent: "primary",
  },
  {
    path: "/research/hpc-ai-in-astronomy",
    icon: Sparkles,
    label: "HPC/AI in Astronomy",
    desc: "Computational tools to simulate and analyse astronomical data",
    color: "text-nebula",
    accent: "nebula",
  },
  {
    path: "/research/radio-interferometry",
    icon: Moon,
    label: "Radio Interferometry",
    desc: "Observing high energy phenomena",
    color: "text-starlight",
    accent: "starlight",
  },
];
