/**
 * `showLabel` defaults to true (a normal in-flow placeholder block). Pass
 * false when this sits *behind* other content (e.g. a hero background) so
 * the caption text doesn't collide with whatever is layered on top —
 * the small "Placeholder photo" corner badge still flags it either way.
 */
export function PlaceholderImage({
  label,
  className = "",
  showLabel = true,
}: {
  label: string;
  className?: string;
  showLabel?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="absolute right-2 top-2 rounded bg-ink/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-50">
        Placeholder photo
      </span>
      {showLabel && (
        <div className="px-4">
          <svg
            className="mx-auto mb-2 h-8 w-8 text-stone-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="9.5" r="1.5" />
            <path d="m21 15-5-5-11 11" />
          </svg>
          <p className="text-xs font-medium uppercase tracking-wide text-stone-500">{label}</p>
        </div>
      )}
    </div>
  );
}
