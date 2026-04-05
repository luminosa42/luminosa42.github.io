export type PageAccent = "primary" | "starlight" | "nebula";

export const pageAccentIconShell: Record<
  PageAccent,
  { box: string; icon: string }
> = {
  primary: {
    box: "border-primary/30 bg-primary/10 group-hover:bg-primary/20",
    icon: "text-primary",
  },
  starlight: {
    box: "border-starlight/30 bg-starlight/10 group-hover:bg-starlight/20",
    icon: "text-starlight",
  },
  nebula: {
    box: "border-nebula/30 bg-nebula/10 group-hover:bg-nebula/20",
    icon: "text-nebula",
  },
};

export const pageAccentIconBox: Record<PageAccent, string> = {
  primary: "bg-primary/10 group-hover:bg-primary/20",
  starlight: "bg-starlight/10 group-hover:bg-starlight/20",
  nebula: "bg-nebula/10 group-hover:bg-nebula/20",
};
