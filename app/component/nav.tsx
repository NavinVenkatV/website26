"use client";

import { useEffect, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Link, usePathname, useRouter } from "../../i18n/routing";
import { profile } from "../data/site";
import { LogoMark } from "./logo";

function ParisClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: profile.timezone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time ?? "--:--"}</span>;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const [pending, startTransition] = useTransition();

  const go = (next: "en" | "fr") => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next, scroll: false });
    });
  };

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={`relative flex items-center rounded-full border border-line-2 p-0.5 font-mono text-[11px] tracking-wider ${pending ? "opacity-60" : ""} ${className}`}
    >
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          onClick={() => go(l)}
          aria-pressed={locale === l}
          className={`relative z-10 cursor-pointer rounded-full px-3 py-1 uppercase transition-colors ${
            locale === l ? "text-ink" : "text-mute hover:text-paper"
          }`}
        >
          {locale === l && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 -z-10 rounded-full bg-paper"
              transition={{ type: "spring", stiffness: 500, damping: 38 }}
            />
          )}
          {l}
        </button>
      ))}
    </div>
  );
}

export function Nav() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const items = [
    { href: "/projects", label: t("work") },
    { href: { pathname: "/", hash: "about" }, label: t("about") },
    { href: { pathname: "/", hash: "experience" }, label: t("experience") },
    { href: "#contact", label: t("contact"), raw: true },
  ] as const;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-line bg-ink/70 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-3" aria-label={t("home")}>
            <LogoMark className="h-6 w-6 transition-transform duration-500 group-hover:rotate-[-12deg]" />
            <span className="text-lg font-medium leading-none tracking-tight">Navin Venkat</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-7 text-sm text-mute">
              {items.map((it) => (
                <li key={it.label}>
                  {"raw" in it ? (
                    <a href={it.href} className="transition-colors hover:text-paper">
                      {it.label}
                    </a>
                  ) : (
                    <Link
                      href={it.href}
                      className={`transition-colors hover:text-paper ${
                        it.href === "/projects" && pathname.startsWith("/projects") ? "text-paper" : ""
                      }`}
                    >
                      {it.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <span className="h-4 w-px bg-line-2" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-mute">
              {t("local")} · <ParisClock />
            </span>
            <LanguageToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Menu"
              className="relative flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full border border-line-2"
            >
              <span className={`h-px w-4 bg-paper transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-paper transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/95 px-5 pt-24 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-2">
              {items.map((it, i) => (
                <motion.li
                  key={it.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.21, 0.92, 0.3, 1] }}
                  className="border-b border-line py-3"
                >
                  {"raw" in it ? (
                    <a href={it.href} onClick={() => setOpen(false)} className="font-serif text-5xl">
                      {it.label}
                    </a>
                  ) : (
                    <Link href={it.href} onClick={() => setOpen(false)} className="font-serif text-5xl">
                      {it.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
            <p className="mt-10 font-mono text-xs uppercase tracking-wider text-mute">
              {profile.location} · <ParisClock />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
