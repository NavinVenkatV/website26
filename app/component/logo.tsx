/** NV monogram: one sharp continuous stroke, the N's diagonal runs into the V. */
export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        d="M5 27V5L16 27L27 5"
        fill="none"
        className="stroke-paper"
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
