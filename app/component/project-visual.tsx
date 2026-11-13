import Image from "next/image";
import type { Project } from "../data/site";
import { AgentTerminal } from "./agent-terminal";

/** Screenshot for projects that have one, the animated agent trace otherwise. */
export function ProjectVisual({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  compact,
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
  compact?: boolean;
}) {
  if (!project.image) return <AgentTerminal compact={compact} />;
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-line bg-ink-2">
      <Image
        src={project.image}
        alt={project.name}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.21,0.92,0.3,1)] group-hover:scale-[1.04]"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, transparent 45%, rgb(10 4 5 / 0.75) 100%)`,
          boxShadow: "inset 0 1px 0 0 rgb(255 255 255 / 0.08)",
        }}
      />
    </div>
  );
}
