import { Link } from "react-router-dom";
import { Copy } from "../components/Copy";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { divisions, heroImage, homeCards, homeIntro, siteMeta } from "../content/content";

export function Home() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-900">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              {siteMeta.tagline}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {siteMeta.name}
            </h1>
            <p className="mt-5 max-w-xl text-slate-300">
              <Copy text={homeIntro} />
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/company-profile"
                className="rounded-md bg-amber-700 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-800"
              >
                About the Company
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <PlaceholderImage label={heroImage.alt} className="h-64 rounded-lg sm:h-80" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What We Do</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {homeCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group rounded-lg border border-slate-200 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-amber-700">
                {card.label}
              </h3>
              <div className="mt-2 text-sm text-slate-600">
                <Copy text={card.desc} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Our Divisions</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {divisions.map((d) => (
              <div key={d.name} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{d.name}</h3>
                <div className="mt-2 text-sm text-slate-600">
                  <Copy text={d.summary} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
