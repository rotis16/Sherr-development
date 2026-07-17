import type { ReactNode } from "react";
import type { Division } from "../content/content";

/** Small line icons, one per division. Purely decorative — keyed by name, not content. */
const ICONS: Record<string, ReactNode> = {
  "Sherr Development Corporation": (
    <path d="M4 21V6l7-3 7 3v15M4 21h16M9 21v-5h4v5M9 10h.01M9 14h.01M13.99 10h.01M13.99 14h.01" />
  ),
  "Blue Box Management LLC": (
    <path d="M12 21a9 9 0 1 1 9-9M12 21a9 9 0 0 1-9-9M12 12l4.24-4.24M12 3v2M3 12h2M12 21v-2" />
  ),
  "Sherr Capital LLC": <path d="M3 17l5-5 4 4 8-8M20 8V4h-4M4 21h16" />,
};

function DivisionIcon({ name }: { name: string }) {
  const path = ICONS[name];
  if (!path) return null;
  return (
    <svg
      className="h-7 w-7 text-bronze-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {path}
    </svg>
  );
}

export function DivisionsGrid({ divisions }: { divisions: Division[] }) {
  return (
    <div className="mt-8 grid gap-10 sm:grid-cols-3">
      {divisions.map((d) => (
        <div key={d.name} className="group">
          <DivisionIcon name={d.name} />
          <div className="mt-4 h-0.5 w-8 bg-bronze-500 transition-all duration-300 group-hover:w-16" />
          <h3 className="font-display mt-5 text-lg font-medium text-ink">{d.name}</h3>
          <p className="mt-1 text-sm italic text-bronze-600">{d.summary}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft/80">{d.description}</p>
        </div>
      ))}
    </div>
  );
}
