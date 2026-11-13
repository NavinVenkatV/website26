import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { Link, routing } from "../../../../i18n/routing";
import { getProject, pick, projects } from "../../../data/site";
import { Reveal, RiseText } from "../../../component/reveal";
import { ProjectVisual } from "../../../component/project-visual";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} | Navin Venkat`,
    description: pick(p.summary, locale),
    openGraph: p.image ? { images: [p.image] } : undefined,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const p = getProject(slug);
  if (!p) notFound();

  const t = await getTranslations("Project");
  const idx = projects.indexOf(p);
  const next = projects[(idx + 1) % projects.length];

  const meta = [
    { k: t("category"), v: pick(p.category, locale) },
    { k: t("role"), v: pick(p.role, locale) },
  ];

  return (
    <main id="top" className="mx-auto max-w-7xl px-5 pt-32 sm:px-8 sm:pt-40">
      <Reveal y={10}>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-mute hover:text-paper"
        >
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          {t("back")}
        </Link>
      </Reveal>

      {/* Title */}
      <header className="mt-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-mute">
          <span style={{ color: p.accent }}>{String(idx + 1).padStart(2, "0")}</span> / {String(projects.length).padStart(2, "0")}
        </p>
        <h1 className="mt-4 font-serif text-[22vw] leading-[0.85] tracking-[-0.03em] sm:text-[11rem] lg:text-[13rem]">
          <RiseText text={p.name} />
          <span style={{ color: p.accent }}>.</span>
        </h1>
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-3xl font-serif text-3xl leading-snug text-paper/80 sm:text-4xl">
            {pick(p.tagline, locale)}
          </p>
        </Reveal>
      </header>

      {/* Meta row */}
      <Reveal delay={0.4}>
        <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {meta.map((m) => (
            <div key={m.k} className="bg-ink p-5">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-dim">{m.k}</dt>
              <dd className="mt-2">{m.v}</dd>
            </div>
          ))}
          <div className="bg-ink p-5">
            <dt className="font-mono text-[11px] uppercase tracking-wider text-dim">{t("link")}</dt>
            <dd className="mt-2">
              <a
                href={p.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 underline decoration-line-2 underline-offset-4 hover:decoration-paper"
              >
                {pick(p.link.label, locale)}
                <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
              </a>
            </dd>
          </div>
        </dl>
      </Reveal>

      {/* Visual */}
      <Reveal className="mt-10">
        <div className={p.image ? "relative aspect-[16/9]" : "relative min-h-[360px]"}>
          <ProjectVisual project={p} priority sizes="(min-width: 1280px) 1216px, 100vw" />
        </div>
      </Reveal>

      {/* Numbers */}
      <section className="mt-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mute">{t("results")}</p>
        </Reveal>
        <dl className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
          {p.metrics.map((m, i) => (
            <Reveal key={m.value} delay={i * 0.08} className="bg-ink p-8">
              <dt className="font-serif text-5xl sm:text-6xl" style={i === 0 ? { color: p.accent } : undefined}>
                {m.value}
              </dt>
              <dd className="mt-3 text-mute">{pick(m.label, locale)}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Body */}
      <section className="mt-24 grid gap-14 lg:grid-cols-[1fr_340px] lg:gap-20">
        <div className="space-y-16">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-mute">{t("overview")}</h2>
            <p className="mt-6 text-2xl leading-relaxed text-paper/90 sm:text-[1.7rem]">{pick(p.overview, locale)}</p>
          </Reveal>

          {p.challenge && (
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-2/60 p-7 sm:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-[90px]"
                  style={{ background: `${p.accent}33` }}
                />
                <h2 className="relative font-serif text-4xl">{pick(p.challenge.title, locale)}</h2>
                <p className="relative mt-5 text-lg leading-relaxed text-paper/85">{pick(p.challenge.body, locale)}</p>
              </div>
            </Reveal>
          )}

          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-mute">{t("highlights")}</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {pick(p.highlights, locale).map((h, i) => (
                <li key={i} className="grid grid-cols-[40px_1fr] gap-2 py-5 text-lg leading-relaxed text-paper/85">
                  <span className="pt-1 font-mono text-xs" style={{ color: p.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          {p.next && (
            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-mute">{t("nextStep")}</h2>
              <p className="mt-4 font-serif text-3xl leading-snug">{pick(p.next, locale)}</p>
            </Reveal>
          )}
        </div>

        <aside>
          <Reveal className="lg:sticky lg:top-28">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-mute">{t("stack")}</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="rounded-full border border-line-2 px-3 py-1.5 font-mono text-xs text-paper/80">
                  {s}
                </li>
              ))}
            </ul>
            <a
              href={p.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex items-center justify-between rounded-2xl bg-paper px-6 py-5 font-medium text-ink transition-transform hover:scale-[1.02]"
            >
              {pick(p.link.label, locale)}
              <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
            </a>
          </Reveal>
        </aside>
      </section>

      {/* Next project */}
      <Reveal className="mt-32">
        <Link href={`/projects/${next.slug}`} className="group block border-t border-line pt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mute">{t("nextProject")}</p>
          <div className="mt-4 flex items-end justify-between gap-6">
            <p className="font-serif text-6xl leading-none transition-transform duration-500 group-hover:translate-x-3 sm:text-8xl">
              {next.name}
              <span className="block text-2xl text-mute sm:text-3xl">{pick(next.tagline, locale)}</span>
            </p>
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-line-2 transition-all duration-500 group-hover:rotate-45 group-hover:bg-paper group-hover:text-ink">
              <FiArrowUpRight className="h-6 w-6" />
            </span>
          </div>
        </Link>
      </Reveal>
    </main>
  );
}
