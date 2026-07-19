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
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-stone-300/70">
      <Link to="/" className="hover:text-white">
        Home
      </Link>
      {groupLabel && (
        <>
          <span aria-hidden="true">/</span>
          <span>{groupLabel}</span>
        </>
      )}
      <span aria-hidden="true">/</span>
      <span className="text-stone-100">{pageLabel}</span>
    </nav>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="page-header-surface relative overflow-hidden border-b border-bronze-700/40">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="header-rise">
          <Breadcrumb />
        </div>
        <p className="header-rise mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-bronze-400" style={{ animationDelay: "90ms" }}>
          Sherr Development
        </p>
        <h1
          className="header-rise font-display mt-2 text-4xl font-medium tracking-tight text-white sm:text-5xl"
          style={{ animationDelay: "170ms" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="header-rise mt-4 max-w-2xl text-stone-300" style={{ animationDelay: "300ms" }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
