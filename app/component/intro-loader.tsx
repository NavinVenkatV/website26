"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { setScrollLocked } from "./smooth-scroll";

const QUOTES = [
  { text: "Believe in your flyness, conquer your shyness.", by: "Ye" },
  { text: "Everything I'm not made me everything I am.", by: "Ye" },
  { text: "Reach for the stars so if you fall you land on a cloud.", by: "Ye" },
  { text: "I refuse to accept other people's ideas of happiness for me.", by: "Ye" },
  { text: "No one man should have all that power.", by: "Ye" },
];

const ease = [0.76, 0, 0.24, 1] as const;

/** Seconds the intro covers the page; page reveals wait this long while it is up. */
export const INTRO_SECONDS = 2.9;

let introDone = false;
const listeners = new Set<() => void>();
function finishIntro() {
  introDone = true;
  listeners.forEach((l) => l());
}

/** True once the intro curtain has started lifting. */
export function useIntroDone() {
  return useSyncExternalStore(
    (cb) => (listeners.add(cb), () => listeners.delete(cb)),
    () => introDone,
    () => false,
  );
}

let clientQuote: (typeof QUOTES)[number] | null = null;
const pickQuote = () => (clientQuote ??= QUOTES[Math.floor(Math.random() * QUOTES.length)]);
const noopSubscribe = () => () => {};

export function IntroLoader() {
  // Random quote chosen on the client only, so server and client HTML match.
  const quote = useSyncExternalStore(noopSubscribe, pickQuote, () => null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setScrollLocked(true);
    window.scrollTo(0, 0);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => {
      setDone(true);
      finishIntro();
    }, reduced ? 900 : 2600);
    return () => clearTimeout(t);
  }, []);

  const words = quote?.text.split(" ") ?? [];

  return (
    <AnimatePresence onExitComplete={() => setScrollLocked(false)}>
      {!done && (
        <motion.div
          key="intro"
          role="status"
          aria-label="Loading"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink px-6"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease }}
        >
          {quote && (
            <motion.figure
              className="max-w-3xl text-center"
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease }}
            >
              <motion.div
                aria-hidden
                className="mx-auto mb-10 flex w-fit items-center justify-center border border-paper/80 px-3 py-1 font-sans text-2xl font-semibold leading-none tracking-[0.25em] text-paper sm:text-3xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease }}
              >
                Y<span className="-mr-[0.25em]">E</span>
              </motion.div>
              <blockquote className="font-serif text-4xl leading-tight text-paper sm:text-6xl">
                {words.map((w, i) => (
                  <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                    <motion.span
                      className="inline-block"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.07 }}
                    >
                      {w}
                      {i < words.length - 1 && " "}
                    </motion.span>
                  </span>
                ))}
              </blockquote>
              <motion.figcaption
                className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-mute"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + words.length * 0.07 }}
              >
                {quote.by}
              </motion.figcaption>
            </motion.figure>
          )}

          <motion.div
            aria-hidden
            className="absolute bottom-0 left-0 h-px bg-paper/60"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
