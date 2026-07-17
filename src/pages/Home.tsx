import { Link } from "react-router-dom";
import { Copy } from "../components/Copy";
import { PlaceholderImage } from "../components/PlaceholderImage";
import {
  divisions,
  heroHeadline,
  heroImage,
  homeCards,
  homeIntro,
  homeIntroHeading,
  projectLocations,
  siteMeta,
} from "../content/content";

export function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-900">
        <PlaceholderImage
          label={heroImage.alt}
          showLabel={false}
          className="absolute inset-0 h-full w-full opacity-40"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            {siteMeta.tagline}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)] sm:text-5xl">
            {heroHeadline}
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/company-profile"
              className="rounded-md bg-amber-700 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-800"
            >
              About the Company
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-slate-400 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {homeIntroHeading}
        </h2>
        <p className="mt-5 text-slate-600">{homeIntro}</p>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <PlaceholderImage
            label="Project location map graphic — needs the real map asset"
            className="mx-auto h-56 w-full max-w-xl rounded-lg"
          />
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Project Location Map
          </h3>
          <p className="mt-2 text-slate-700">{projectLocations.join(" | ")}</p>
        </div>
      </section>

      <section className="border-t border-slate-200 mx-auto max-w-6xl px-4 py-16 sm:px-6">
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
              <div key={d.name} className="rounded-lg bg-white p-6 text-center shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{d.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{d.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
