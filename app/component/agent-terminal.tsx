"use client";

import { motion } from "motion/react";

type Line = { t: string; kind: "cmd" | "ok" | "info" | "err" | "fix" };

const LINES: Line[] = [
  { t: "$ claude --mcp browser", kind: "cmd" },
  { t: "→ mcp server connected · live browser session", kind: "info" },
  { t: "✓ script_01   typed i/o contract     pass", kind: "ok" },
  { t: "✓ script_02   typed i/o contract     pass", kind: "ok" },
  { t: "✓ script_03   typed i/o contract     pass", kind: "ok" },
  { t: "✗ 3/3 failed  cold env · window size drift", kind: "err" },
  { t: "→ tracing shared downstream dependency…", kind: "info" },
  { t: "✓ fixed · re-validated from cold start  3/3", kind: "fix" },
];

const color: Record<Line["kind"], string> = {
  cmd: "text-paper",
  info: "text-mute",
  ok: "text-paper/70",
  err: "text-ember",
  fix: "text-paper",
};

export function AgentTerminal({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-line-2 bg-[#0d0506] shadow-2xl shadow-black/60">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ember/25 blur-[90px]"
      />
      <div className="relative flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="ml-3 font-mono text-[11px] text-dim">reduck · agent trace</span>
      </div>
      <motion.ol
        className={`relative space-y-2 overflow-x-auto px-5 py-5 font-mono ${compact ? "text-[11px] sm:text-xs" : "text-xs sm:text-[13px]"}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        variants={{ show: { transition: { staggerChildren: 0.28, delayChildren: 0.2 } } }}
      >
        {LINES.map((l, i) => (
          <motion.li
            key={i}
            className={`whitespace-pre ${color[l.kind]}`}
            variants={{
              hidden: { opacity: 0, x: -8 },
              show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
            }}
          >
            {l.t}
          </motion.li>
        ))}
        <motion.li
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="text-paper"
        >
          $ <span className="caret inline-block h-[1em] w-[0.55em] translate-y-[2px] bg-paper" />
        </motion.li>
      </motion.ol>
    </div>
  );
}
