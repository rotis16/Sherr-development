import { Link } from "react-router-dom";
import { DivisionsGrid } from "../components/DivisionsGrid";
import { Reveal } from "../components/Reveal";
import detroitSkyline from "../assets/detroit-skyline.webp";
import projectLocationMap from "../assets/project-location-map.png";
import { divisions, heroHeadline, heroImage, homeIntro, homeIntroHeading, projectLocations } from "../content/content";

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="page-header-surface relative overflow-hidden border-b border-bronze-700/40">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl">
                {heroHeadline}
              </h1>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/company-profile"
                  className="bg-white px-6 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-bronze-400 hover:text-white"
                >
                  About the Company
                </Link>
                <Link
                  to="/contact"
                  className="border border-white/40 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:border-white"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-5">
              <img
                src={detroitSkyline}
                alt={heroImage.alt}
                className="aspect-[4/5] w-full rounded-lg object-cover shadow-2xl shadow-black/40 lg:aspect-auto lg:h-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-y border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-4">
              <div className="mb-4 h-px w-12 bg-bronze-500" />
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink">
                {homeIntroHeading}
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-8">
              <p className="max-w-2xl text-[17px] leading-relaxed text-ink-soft/90">{homeIntro}</p>

              <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-stone-300 pt-8">
                <div>
                  <div className="font-display text-4xl font-medium text-ink">2,000+</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft/70">Homes Built</div>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* Project location map */}
      <section className="border-t border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <Reveal>
            <img
              src={projectLocationMap}
              alt={`Project location map — ${projectLocations.join(", ")}`}
              className="mx-auto w-full max-w-md"
            />
          </Reveal>
        </div>
      </section>

      {/* Divisions */}
      <section className="border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink">Our Divisions</h2>
          </Reveal>
          <DivisionsGrid divisions={divisions} />
        </div>
      </section>
    </div>
  );
}
