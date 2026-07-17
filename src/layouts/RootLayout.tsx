import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { SherrWordmark } from "../components/SherrWordmark";
import { footerNavItems, navItems, siteMeta } from "../content/content";

export function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-ink-soft">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-8 px-4 py-5 sm:px-6">
          <NavLink to="/" className="flex shrink-0 flex-col leading-tight" onClick={() => setMenuOpen(false)}>
            <SherrWordmark className="text-xl text-ink sm:text-2xl" />
            <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-bronze-500 sm:text-[11px]">
              {siteMeta.tagline}
            </span>
          </NavLink>

          <nav className="hidden shrink-0 min-[1650px]:flex min-[1650px]:items-center min-[1650px]:gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `whitespace-nowrap border-b py-1 text-[12px] font-medium uppercase tracking-normal transition-colors ${
                    isActive
                      ? "border-bronze-500 text-ink"
                      : "border-transparent text-ink-soft/70 hover:border-stone-300 hover:text-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={`tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`}
            className="hidden shrink-0 whitespace-nowrap border border-ink px-4 py-2 text-[13px] font-medium tracking-wide text-ink transition-colors hover:bg-ink hover:text-stone-50 min-[1650px]:inline-block"
          >
            {siteMeta.phone}
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-ink min-[1650px]:hidden"
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

        {menuOpen && (
          <nav className="border-t border-stone-200 bg-stone-50 min-[1650px]:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-stone-200 py-3 text-sm font-medium uppercase tracking-wide ${
                      isActive ? "text-bronze-600" : "text-ink-soft"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={`tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`}
                className="my-4 border border-ink px-4 py-3 text-center text-sm font-medium tracking-wide text-ink"
              >
                Call {siteMeta.phone}
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-ink text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <SherrWordmark className="text-xl text-stone-50" />
          <p className="mt-2 text-sm text-stone-400">{siteMeta.legalName}</p>
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
                <NavLink to={item.path} className="text-stone-400 hover:text-stone-100">
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
