import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import sherrLogo from "../assets/sherr-logo.png";
import { footerNavItems, isNavGroup, navItems, siteMeta, type NavEntry } from "../content/content";

/**
 * A NavLink to the page you're already on doesn't fire a location change,
 * so the route-change scroll reset never runs — this covers that case
 * (re-clicking the logo, or a nav item, while already on that page).
 */
function scrollToTop() {
  window.scrollTo({ top: 0 });
}

export function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-ink-soft">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-8 px-4 py-5 sm:px-6">
          <NavLink
            to="/"
            className="flex min-w-0 shrink-0 items-center"
            onClick={() => {
              setMenuOpen(false);
              scrollToTop();
            }}
          >
            <img src={sherrLogo} alt="Sherr Development" className="h-12 w-auto sm:h-14" />
          </NavLink>

          <nav data-nav="desktop" className="hidden shrink-0 min-[1080px]:flex min-[1080px]:items-center min-[1080px]:gap-6">
            {navItems.map((entry) => (
              <DesktopNavEntry key={entry.label} entry={entry} />
            ))}
          </nav>

          <a
            href={`tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`}
            className="hidden shrink-0 whitespace-nowrap border border-ink px-4 py-2 text-[13px] font-medium tracking-wide text-ink transition-colors hover:bg-ink hover:text-stone-50 min-[1080px]:inline-block"
          >
            {siteMeta.phone}
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-ink min-[1080px]:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && <MobileNav onNavigate={() => setMenuOpen(false)} />}
      </header>

      <main className="flex-1">
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function DesktopNavEntry({ entry }: { entry: NavEntry }) {
  const location = useLocation();

  if (!isNavGroup(entry)) {
    return (
      <NavLink
        to={entry.path}
        end={entry.path === "/"}
        onClick={scrollToTop}
        className={({ isActive }) =>
          `whitespace-nowrap border-b py-1 text-[12px] font-medium uppercase tracking-normal transition-colors ${
            isActive
              ? "border-bronze-500 text-ink"
              : "border-transparent text-ink-soft/70 hover:border-stone-300 hover:text-ink"
          }`
        }
      >
        {entry.label}
      </NavLink>
    );
  }

  const isGroupActive = entry.items.some((item) => location.pathname === item.path);

  return (
    <div className="group relative">
      <button
        type="button"
        className={`flex items-center gap-1 whitespace-nowrap border-b py-1 text-[12px] font-medium uppercase tracking-normal transition-colors ${
          isGroupActive ? "border-bronze-500 text-ink" : "border-transparent text-ink-soft/70 group-hover:border-stone-300 group-hover:text-ink"
        }`}
      >
        {entry.label}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="border border-stone-200 bg-stone-50 py-2 shadow-lg">
          {entry.items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={scrollToTop}
              className={({ isActive }) =>
                `block px-4 py-2.5 text-[13px] font-medium transition-colors ${
                  isActive ? "bg-stone-100 text-bronze-600" : "text-ink-soft hover:bg-stone-100 hover:text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <nav data-nav="mobile" className="border-t border-stone-200 bg-stone-50 min-[1080px]:hidden">
      <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
        {navItems.map((entry) => {
          if (!isNavGroup(entry)) {
            return (
              <NavLink
                key={entry.path}
                to={entry.path}
                end={entry.path === "/"}
                onClick={() => {
                  onNavigate();
                  scrollToTop();
                }}
                className={({ isActive }) =>
                  `border-b border-stone-200 py-3 text-sm font-medium uppercase tracking-wide ${
                    isActive ? "text-bronze-600" : "text-ink-soft"
                  }`
                }
              >
                {entry.label}
              </NavLink>
            );
          }

          const isOpen = openGroup === entry.label;
          return (
            <div key={entry.label} className="border-b border-stone-200">
              <button
                type="button"
                className="flex w-full items-center justify-between py-3 text-sm font-medium uppercase tracking-wide text-ink-soft"
                aria-expanded={isOpen}
                onClick={() => setOpenGroup(isOpen ? null : entry.label)}
              >
                {entry.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isOpen && (
                <div className="pb-2 pl-4">
                  {entry.items.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        onNavigate();
                        scrollToTop();
                      }}
                      className={({ isActive }) =>
                        `block py-2.5 text-sm ${isActive ? "text-bronze-600" : "text-ink-soft/80"}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        <a
          href={`tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`}
          className="my-4 border border-ink px-4 py-3 text-center text-sm font-medium tracking-wide text-ink"
        >
          Call {siteMeta.phone}
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-ink text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <img src={sherrLogo} alt="Sherr Development" className="h-12 w-auto" />
          <p className="mt-3 text-sm text-stone-400">{siteMeta.legalName}</p>
        </div>
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-bronze-400">Contact</div>
          <p className="mt-3 text-sm">{siteMeta.address.line1}</p>
          <p className="text-sm">{siteMeta.address.line2}</p>
          <a
            href={`tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`}
            className="mt-3 block text-sm text-stone-100 hover:text-bronze-400"
          >
            {siteMeta.phone}
          </a>
        </div>
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-bronze-400">Navigate</div>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNavItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} onClick={scrollToTop} className="text-stone-400 hover:text-stone-100">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-800 px-4 py-5 text-center text-xs text-stone-500 sm:px-6">
        &copy; {new Date().getFullYear()} {siteMeta.legalName}. Redesign preview — not the live site.
      </div>
    </footer>
  );
}
