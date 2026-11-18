import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FiArrowUpRight } from "react-icons/fi";
import { learning, pick } from "../../data/site";
import { Reveal, RiseText } from "../../component/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return { title: t("learningTitle") };
}

export default async function LearningPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Learning");

  // Newest first: current class on top, then what's done.
  const classes = [...learning.classes].sort((a, b) => b.n - a.n);
  const status = (n: number) =>
    n < learning.currentClass ? "done" : n === learning.currentClass ? "current" : "next";

  return (
    <main id="top" className="mx-auto max-w-7xl px-5 pb-10 pt-36 sm:px-8 sm:pt-44">
      <header className="grid gap-8 border-b border-line pb-14 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mute">
            <span className="text-ember">●</span> {t("label")} · {learning.school} {learning.code}
          </p>
          <h1 className="mt-6 font-serif text-[20vw] leading-[0.85] tracking-[-0.03em] sm:text-[12rem]">
            <RiseText text={t("title")} />
            <span className="text-ember">.</span>
          </h1>
        </div>
        <Reveal delay={0.3}>
          <p className="max-w-sm text-lg leading-relaxed text-mute">{t("subtitle")}</p>
        </Reveal>
      </header>

      {/* Course card */}
      <Reveal className="mt-14 grid gap-8 rounded-3xl border border-line bg-ink-2/50 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
            {learning.code} · {learning.term}
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">{learning.name}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-mute">{pick(learning.about, locale)}</p>
          <div className="mt-8 max-w-xl">
            <div className="flex justify-between font-mono text-xs uppercase tracking-wider text-mute">
              <span>{t("progress", { n: learning.currentClass, total: learning.totalClasses })}</span>
              <span className="text-paper">
                {Math.round((learning.currentClass / learning.totalClasses) * 100)}%
              </span>
            </div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-ember"
                style={{ width: `${(learning.currentClass / learning.totalClasses) * 100}%` }}
              />
            </div>
          </div>
        </div>
        <a
          href={learning.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 self-start rounded-full border border-line-2 px-6 py-3 text-sm transition-colors hover:border-paper/40 lg:self-end"
        >
          cs329z.stanford.edu
          <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
        </a>
      </Reveal>

      {/* Classes */}
      <ol className="mt-16">
        {classes.map((c) => {
          const s = status(c.n);
          return (
            <Reveal as="li" key={c.n} className="border-t border-line py-12 lg:py-16">
              <div className={`grid gap-8 lg:grid-cols-[180px_1fr_1.1fr] lg:gap-10 ${s === "next" ? "opacity-60" : ""}`}>
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <span className="font-mono text-sm text-dim">{String(c.n).padStart(2, "0")}</span>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${
                      s === "current" ? "bg-ember/15 text-ember" : "border border-line-2 text-mute"
                    }`}
                  >
                    {s === "current" && <span className="h-1.5 w-1.5 rounded-full bg-ember" />}
                    {t(s)}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-dim">{c.date}</span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl leading-tight sm:text-4xl">{c.title}</h3>
                  <p className="mt-4 leading-relaxed text-mute">{pick(c.summary, locale)}</p>
                  <div className="mt-6 flex gap-3">
                    {[
                      { href: c.slides, label: t("slides") },
                      { href: c.video, label: t("video") },
                    ].map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-mute transition-colors hover:border-line-2 hover:text-paper"
                      >
                        {l.label}
                        <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">{t("readings")}</p>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {c.readings.map((r) => (
                      <li key={r.href}>
                        <a
                          href={r.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start justify-between gap-6 py-4"
                        >
                          <span>
                            <span className="block leading-snug transition-colors group-hover:text-ember">{r.title}</span>
                            <span className="mt-1 block font-mono text-[11px] uppercase tracking-wider text-dim">
                              {r.source}
                            </span>
                          </span>
                          <FiArrowUpRight className="mt-1 shrink-0 text-mute transition-transform group-hover:rotate-45 group-hover:text-ember" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </main>
  );
}
