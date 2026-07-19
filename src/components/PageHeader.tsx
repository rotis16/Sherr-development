import { Link, useLocation } from "react-router-dom";
import { isNavGroup, navItems } from "../content/content";

/** Home / [group] / current-page, derived from navItems for the active route. */
function Breadcrumb() {
  const { pathname } = useLocation();

  let groupLabel: string | null = null;
  let pageLabel: string | null = null;

  for (const entry of navItems) {
    if (isNavGroup(entry)) {
      const match = entry.items.find((item) => item.path === pathname);
      if (match) {
        groupLabel = entry.label;
        pageLabel = match.label;
        break;
      }
    } else if (entry.path === pathname) {
      pageLabel = entry.label;
      break;
    }
  }

  if (!pageLabel) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-ink-soft/60">
      <Link to="/" className="hover:text-ink">
        Home
      </Link>
      {groupLabel && (
        <>
          <span aria-hidden="true">/</span>
          <span>{groupLabel}</span>
        </>
      )}
      <span aria-hidden="true">/</span>
      <span className="text-ink-soft/85">{pageLabel}</span>
    </nav>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="border-b border-stone-200 bg-stone-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Breadcrumb />
        <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-bronze-500">Sherr Development</p>
        <h1 className="title-wipe font-display mt-2 text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-ink-soft/80">{subtitle}</p>}
      </div>
    </div>
  );
}
