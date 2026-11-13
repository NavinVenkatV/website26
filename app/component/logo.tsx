/** NV monogram: one continuous stroke, the N's diagonal flows into the V. */
export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        d="M6 26V6L16 26L26 6"
        fill="none"
        className="stroke-paper"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
