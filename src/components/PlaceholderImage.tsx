export function PlaceholderImage({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="px-4">
        <svg
          className="mx-auto mb-2 h-8 w-8 text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.5" />
          <path d="m21 15-5-5-11 11" />
        </svg>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
      </div>
    </div>
  );
}
