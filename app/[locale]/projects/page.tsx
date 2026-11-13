import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "../../../i18n/routing";
import { pick, projects } from "../../data/site";
import { Reveal, RiseText } from "../../component/reveal";
import { ProjectVisual } from "../../component/project-visual";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return { title: t("projectsTitle") };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Projects");
  const tw = await getTranslations("Work");

  return (
    <main id="top" className="mx-auto max-w-7xl px-5 pt-36 sm:px-8 sm:pt-44">
      <header className="grid gap-8 border-b border-line pb-14 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mute">
            <span className="text-ember">●</span> {t("label")} · {t("count", { count: projects.length })}
          </p>
          <h1 className="mt-6 font-serif text-[22vw] leading-[0.85] tracking-[-0.03em] sm:text-[14rem]">
            <RiseText text={t("title")} />
            <span className="text-ember">.</span>
          </h1>
        </div>
        <Reveal delay={0.3}>
          <p className="max-w-sm text-lg leading-relaxed text-mute">{t("subtitle")}</p>
        </Reveal>
      </header>

      <ol>
        {projects.map((p, i) => (
          <Reveal as="li" key={p.slug} className="border-b border-line">
            <Link
              href={`/projects/${p.slug}`}
              className="group grid gap-8 py-12 lg:grid-cols-[80px_1fr_1fr] lg:gap-10 lg:py-16"
            >
              <span className="font-mono text-sm text-dim transition-colors group-hover:text-ember">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex flex-col justify-between gap-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-serif text-5xl leading-none transition-transform duration-500 group-hover:translate-x-2 sm:text-7xl">
                      {p.name}
                    </h2>
                    {p.latest && (
                      <span className="rounded-full bg-ember/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ember">
                        {t("latest")}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 font-serif text-2xl text-mute">{pick(p.tagline, locale)}</p>
                  <p className="mt-5 max-w-lg leading-relaxed text-paper/75">{pick(p.summary, locale)}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-dim">{pick(p.category, locale)}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.stack.slice(0, 6).map((s) => (
                      <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-mute">
                        {s}
                      </li>
                    ))}
                    {p.stack.length > 6 && (
                      <li className="px-1 py-1 font-mono text-[11px] text-dim">+{p.stack.length - 6}</li>
                    )}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm">
                    {tw("view")}
                    <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                  </span>
                </div>
              </div>

              <div className="relative aspect-[16/10]">
                <ProjectVisual project={p} compact sizes="(min-width: 1024px) 40vw, 100vw" priority={i < 2} />
              </div>
            </Link>
          </Reveal>
        ))}
      </ol>
    </main>
  );
}
