import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { footerNavItems, navItems, siteMeta } from "../content/content";

export function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <NavLink to="/" className="flex flex-col leading-tight" onClick={() => setMenuOpen(false)}>
            <span className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              {siteMeta.name}
            </span>
            <span className="text-[11px] uppercase tracking-widest text-amber-700 sm:text-xs">
              {siteMeta.tagline}
            </span>
          </NavLink>

          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={`tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`}
            className="hidden rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-800 lg:inline-block"
          >
            {siteMeta.phone}
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-3 text-base font-medium ${
                      isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={`tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`}
                className="my-2 rounded-md bg-amber-700 px-4 py-3 text-center text-base font-semibold text-white"
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
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold text-white">{siteMeta.name}</div>
          <p className="mt-2 text-sm text-slate-400">{siteMeta.legalName}</p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-100">Contact</div>
          <p className="mt-2 text-sm">{siteMeta.address.line1}</p>
          <p className="text-sm">{siteMeta.address.line2}</p>
          <a href={`tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`} className="mt-2 block text-sm text-amber-400 hover:underline">
            {siteMeta.phone}
          </a>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-100">Navigate</div>
          <ul className="mt-2 space-y-1 text-sm">
            {footerNavItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="text-slate-400 hover:text-white">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500 sm:px-6">
        &copy; {new Date().getFullYear()} {siteMeta.legalName}. Redesign preview — not the live site.
      </div>
    </footer>
  );
}
