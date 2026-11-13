import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from "../../i18n/routing";
import {
  education,
  experience,
  links,
  pick,
  profile,
  projects,
  skillGroups,
} from "../data/site";
import { Reveal, RiseText } from "../component/reveal";
import { ProjectCard } from "../component/project-card";
import { ProjectVisual } from "../component/project-visual";

function SectionHead({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <Reveal className="mb-14 grid gap-4 border-t border-line pt-6 sm:grid-cols-[180px_1fr] sm:gap-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-mute">
        <span className="text-ember">{index}</span> · {label}
      </p>
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">{title}</h2>
    </Reveal>
  );
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const latest = projects.find((p) => p.latest) ?? projects[0];
  const rest = projects.filter((p) => p !== latest);
  const allSkills = skillGroups.flatMap((g) => g.items);
  const headlineWords = ["AI Agents", "Full-Stack", "RAG", "MCP", "Open to internships", "Paris"];

  return (
    <main id="top" className="relative">
      {/* ============================ HERO ============================ */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-10 pt-28 sm:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-ember/10 blur-[140px]" />
          <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#7856ff]/[0.06] blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(231 233 234 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(231 233 234 / 0.04) 1px, transparent 1px)",
              backgroundSize: "88px 88px",
              maskImage: "radial-gradient(ellipse at 30% 40%, black 10%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal y={10} className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
            <span>{t("Hero.eyebrow")}</span>
            <span className="hidden h-px w-10 bg-line-2 sm:block" />
            <span>{pick(profile.role, locale)}</span>
            <span className="hidden h-px w-10 bg-line-2 sm:block" />
            <span>{profile.location}</span>
          </Reveal>

          <h1 className="font-serif text-[23vw] leading-[0.82] tracking-[-0.03em] sm:text-[19vw] lg:text-[15.5rem]">
            <RiseText text={profile.firstName} className="block" />
            <span className="block pl-[8vw] italic text-paper/90 lg:pl-40">
              <RiseText text={profile.lastName} delay={0.15} />
              <span className="text-ember">.</span>
            </span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
            <Reveal delay={0.5}>
              <p className="max-w-2xl text-2xl leading-snug text-paper/90 sm:text-3xl">
                {pick(profile.headline, locale)}
              </p>
            </Reveal>
            <Reveal delay={0.65} className="flex flex-col gap-5 md:items-end">
              <span className="inline-flex items-center gap-3 rounded-full border border-line-2 bg-ink-2/60 px-4 py-2 text-sm text-paper/90 backdrop-blur">
                <span className="pulse-dot relative h-2 w-2 rounded-full bg-[#00ba7c]" />
                {pick(profile.status, locale)}
              </span>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
                >
                  {t("Hero.seeWork")}
                  <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-line-2 px-6 py-3 text-sm transition-colors hover:border-paper/40"
                >
                  {t("Hero.contact")}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
            <FiArrowDownRight className="animate-bounce" />
            {t("Hero.scroll")}
          </div>
        </div>
      </section>

      {/* ========================== MARQUEE ========================== */}
      <div className="relative overflow-hidden py-10">
        <div className="marquee -rotate-2 scale-105 overflow-hidden bg-ember py-4 text-white sm:py-5">
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-serif text-4xl italic sm:text-6xl">
            {[...headlineWords, ...headlineWords].map((s, i) => (
              <span key={i} className="flex items-center gap-10">
                {s}
                <span className="text-xl not-italic sm:text-2xl">✦</span>
              </span>
            ))}
          </div>
        </div>
        <div className="marquee soft-rule mt-6 overflow-hidden py-4">
          <div className="marquee-track marquee-reverse flex w-max gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-[0.2em] text-mute sm:text-base">
            {[...allSkills, ...allSkills].map((s, i) => (
              <span key={i} className="flex items-center gap-10">
                {s}
                <span className="text-ember">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ======================= LATEST PROJECT ======================= */}
        <section className="pt-32">
          <SectionHead index="01" label={t("Latest.label")} title={latest.name} />
          <Reveal>
            <Link
              href={`/projects/${latest.slug}`}
              className="group grid gap-10 rounded-3xl border border-line bg-ink-2/50 p-5 transition-colors hover:border-line-2 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14"
            >
              <div className="flex flex-col justify-between gap-10">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-ember/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ember">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                    {t("Projects.latest")} · {pick(latest.category, locale)}
                  </span>
                  <h3 className="mt-6 font-serif text-4xl italic leading-tight sm:text-5xl">
                    {pick(latest.tagline, locale)}
                  </h3>
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-mute">{pick(latest.summary, locale)}</p>
                </div>
                <div>
                  <dl className="grid grid-cols-3 gap-4 border-t border-line pt-6">
                    {latest.metrics.map((m) => (
                      <div key={m.value}>
                        <dt className="font-serif text-3xl sm:text-4xl">{m.value}</dt>
                        <dd className="mt-1 text-xs leading-snug text-mute">{pick(m.label, locale)}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                    {t("Latest.cta")}
                    <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                  </span>
                </div>
              </div>
              <div className="min-h-[320px]">
                <ProjectVisual project={latest} />
              </div>
            </Link>
          </Reveal>
        </section>

        {/* ======================== SELECTED WORK ======================= */}
        <section className="pt-32">
          <SectionHead index="02" label={t("Work.label")} title={t("Work.title")} />
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.1} className={i % 2 === 1 ? "md:mt-24" : ""}>
                <ProjectCard project={p} index={i + 1} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-20 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full border border-line-2 px-7 py-4 text-sm transition-colors hover:bg-paper hover:text-ink"
            >
              {t("Work.all")}
              <span className="font-mono text-xs text-dim group-hover:text-ink/60">({projects.length})</span>
              <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </section>

        {/* ============================ ABOUT =========================== */}
        <section id="about" className="scroll-mt-24 pt-32">
          <SectionHead index="03" label={t("About.label")} title={t("About.title")} />
          <div className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
            <Reveal>
              <figure className="relative">
                <div className="glow-frame relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image
                    src={profile.portrait}
                    alt="Abstract illustration of an AI agent connected to tools, browser, RAG and MCP"
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 flex justify-between font-mono text-[11px] uppercase tracking-wider text-dim">
                  <span>{profile.fullName}</span>
                  <span>{profile.location}</span>
                </figcaption>
              </figure>
            </Reveal>
            <div>
              <div className="space-y-6 text-xl leading-relaxed text-paper/85 sm:text-2xl">
                {pick(profile.about, locale).map((para, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p className={i === 0 ? "font-serif text-3xl leading-snug text-paper sm:text-4xl" : ""}>
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>
              <Reveal className="mt-12">
                <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                  {profile.facts.map((f) => (
                    <div key={f.k.en} className="bg-ink p-5">
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-dim">{pick(f.k, locale)}</dt>
                      <dd className="mt-2 text-paper">{pick(f.v, locale)}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ========================= EXPERIENCE ========================= */}
        <section id="experience" className="scroll-mt-24 pt-32">
          <SectionHead index="04" label={t("Experience.label")} title={t("Experience.title")} />
          {experience.map((job) => (
            <Reveal key={job.company} className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-10">
              <p className="font-mono text-xs uppercase tracking-wider text-mute">{pick(job.period, locale)}</p>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="font-serif text-4xl sm:text-5xl">
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-baseline gap-2 hover:text-ember"
                    >
                      {job.company}
                      <FiArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                    </a>
                  </h3>
                  <p className="text-mute">{pick(job.role, locale)}</p>
                </div>
                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {pick(job.points, locale).map((pt, i) => (
                    <li key={i} className="grid grid-cols-[40px_1fr] gap-2 py-5 text-lg leading-relaxed text-paper/85">
                      <span className="pt-1 font-mono text-xs text-dim">{String(i + 1).padStart(2, "0")}</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-mute">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </section>

        {/* =========================== SKILLS =========================== */}
        <section className="pt-32">
          <SectionHead index="05" label={t("Skills.label")} title={t("Skills.title")} />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title.en} delay={i * 0.06} className="bg-ink p-6 sm:p-8">
                <p className="font-mono text-[11px] text-ember">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-3xl">{pick(g.title, locale)}</h3>
                <ul className="mt-6 space-y-2 text-mute">
                  {g.items.map((s) => (
                    <li key={s} className="transition-colors hover:text-paper">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ========================== EDUCATION ========================= */}
        <section className="pt-32">
          <SectionHead index="06" label={t("Education.label")} title={t("Education.title")} />
          {education.map((e) => (
            <Reveal
              key={e.school}
              className="flex flex-col gap-6 rounded-3xl border border-line bg-ink-2/50 p-6 sm:flex-row sm:items-center sm:p-8"
            >
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-paper p-2">
                <Image src={e.logo} alt={e.school} fill sizes="96px" className="object-contain p-2" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-3xl sm:text-4xl">{pick(e.degree, locale)}</h3>
                <p className="mt-1 text-mute">
                  {e.school} · <em>{e.schoolLong}</em>
                </p>
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-mute sm:text-right">
                <p className="text-paper">{e.period}</p>
                <p className="mt-1">{e.place}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* ============================ MUSIC =========================== */}
        <section className="pt-32">
          <SectionHead index="07" label={t("Music.label")} title={t("Music.title")} />
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <p className="max-w-md text-xl leading-relaxed text-mute">{t("Music.body")}</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-dim">
                AI/ML · Full Stack · Music
              </p>
            </div>
            <iframe
              title="Spotify"
              src="https://open.spotify.com/embed/track/4ipD5CMmWkehabGlAGTOBB?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-2xl border-0"
            />
          </Reveal>
        </section>
      </div>
    </main>
  );
}
