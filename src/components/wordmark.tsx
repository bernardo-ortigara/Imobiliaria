// HSANTINI wordmark: Inter (the font of the original "Luxterra" wordmark), tight negative
// tracking and a medium variable weight, set in uppercase.

export const WORDMARK = "HSANTINI";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`block whitespace-nowrap leading-none ${className}`}
      style={{ letterSpacing: "-0.05em", fontVariationSettings: '"opsz" 14, "wght" 520' }}
    >
      {WORDMARK}
    </span>
  );
}
