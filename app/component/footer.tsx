"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";
import { links, profile } from "../data/site";
import { Reveal } from "./reveal";

export function Footer() {
  const t = useTranslations("Contact");
  const tf = useTranslations("Footer");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = links.email;
    }
  };

  const socials = [
    { label: "GitHub", href: links.github },
    { label: "LinkedIn", href: links.linkedin },
    { label: "X / Twitter", href: links.x },
  ];

  return (
    <footer id="contact" className="relative mt-32 overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-ember/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">{t("label")}</p>
          <h2 className="mt-6 max-w-5xl font-serif text-[13vw] leading-[0.9] tracking-tight sm:text-8xl lg:text-[8.5rem]">
            {t("title")}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-mute">{t("body")}</p>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <a
              href={links.email}
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              {t("write")}
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={copy}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line-2 px-5 py-3.5 font-mono text-xs text-paper transition-colors hover:border-paper/40"
              aria-label={t("copy")}
            >
              {copied ? <FiCheck className="text-ember" /> : <FiCopy />}
              {copied ? t("copied") : profile.email}
            </button>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-8 border-t border-line pt-8 text-sm sm:grid-cols-3 sm:items-center">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-mute transition-colors hover:text-paper"
                >
                  {s.label}
                  <FiArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-dim sm:text-center">
            © {new Date().getFullYear()} · {tf("rights")}
          </p>
          <a href="#top" className="text-mute transition-colors hover:text-paper sm:text-right">
            {tf("top")} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
