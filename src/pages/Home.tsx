import { Link } from "react-router-dom";
import { Copy } from "../components/Copy";
import { PlaceholderImage } from "../components/PlaceholderImage";
import projectLocationMap from "../assets/project-location-map.jpeg";
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
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-bronze-500">
              {siteMeta.tagline}
            </p>
            <h1 className="font-display mt-5 text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl">
              {heroHeadline}
            </h1>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/company-profile"
                className="bg-ink px-6 py-3 text-sm font-medium tracking-wide text-stone-50 transition-colors hover:bg-bronze-600"
              >
                About the Company
              </Link>
              <Link
                to="/contact"
                className="border border-ink/30 px-6 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:border-ink"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <PlaceholderImage label={heroImage.alt} className="aspect-[4/5] w-full lg:aspect-auto lg:h-full" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-y border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="mb-4 h-px w-12 bg-bronze-500" />
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink">
                {homeIntroHeading}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-2xl text-[17px] leading-relaxed text-ink-soft/90">{homeIntro}</p>

              <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-stone-300 pt-8">
                <div>
                  <div className="font-display text-4xl font-medium text-ink">20+</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft/70">
                    Years, Track Record
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl font-medium text-ink">{projectLocations.length}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft/70">
                    States of Operation
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl font-medium text-ink">{divisions.length}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft/70">
                    Affiliated Divisions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project location map */}
      <section className="border-t border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="inline-block border border-stone-300 bg-white p-5 shadow-[0_8px_24px_-12px_rgba(28,26,23,0.25)] sm:p-8">
            <img
              src={projectLocationMap}
              alt={`Project location map — ${projectLocations.join(", ")}`}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink">What We Do</h2>
          <div className="mt-8 divide-y divide-stone-200 border-t border-stone-200">
            {homeCards.map((card, i) => (
              <Link
                key={card.to}
                to={card.to}
                className="group flex items-center gap-6 py-6 transition-colors hover:bg-stone-50"
              >
                <span className="font-display text-lg text-bronze-500">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display flex-1 text-xl font-medium text-ink sm:text-2xl">
                  {card.label}
                </span>
                <span className="hidden max-w-sm text-sm text-ink-soft/70 sm:block">
                  <Copy text={card.desc} />
                </span>
                <span className="text-ink-soft/40 transition-transform group-hover:translate-x-1 group-hover:text-bronze-500">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="border-t border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink">Our Divisions</h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-3">
            {divisions.map((d) => (
              <div key={d.name} className="border-t-2 border-bronze-500 pt-5">
                <h3 className="font-display text-lg font-medium text-ink">{d.name}</h3>
                <p className="mt-2 text-sm text-ink-soft/80">{d.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
