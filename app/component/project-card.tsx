import { useLocale, useTranslations } from "next-intl";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "../../i18n/routing";
import { pick, type Project } from "../data/site";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const locale = useLocale();
  const t = useTranslations("Work");

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[16/10]">
        <ProjectVisual project={project} compact sizes="(min-width: 768px) 50vw, 100vw" />
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100">
          <FiArrowUpRight />
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif text-3xl leading-tight sm:text-4xl">
            {project.name}
            <span className="text-dim"> · </span>
            <span className="text-mute">{pick(project.tagline, locale)}</span>
          </h3>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-dim">
            {pick(project.category, locale)}
          </p>
        </div>
        <span className="shrink-0 font-mono text-xs text-dim">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <span className="sr-only">{t("view")}</span>
    </Link>
  );
}
