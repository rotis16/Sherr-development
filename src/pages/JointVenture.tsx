import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { jointVenture } from "../content/content";

export function JointVenture() {
  return (
    <div>
      <PageHeader title={jointVenture.heading} />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="mb-4 h-px w-12 bg-bronze-500" />
            <h2 className="font-display text-2xl font-medium leading-snug text-ink">
              {jointVenture.whoWeAre.heading}
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-[17px] leading-relaxed text-ink-soft/90">
              {jointVenture.whoWeAre.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-sm font-medium uppercase tracking-wide text-bronze-600">
              {jointVenture.whoWeAre.leadIn}
            </p>
          </div>
          <div className="lg:col-span-5">
            <PlaceholderImage label="SJV partnership meeting — handshake photo" className="aspect-[4/5] w-full" />
          </div>
        </div>

        <div className="mt-14 grid gap-10 border-t border-stone-200 pt-14 sm:grid-cols-3 sm:gap-8">
          {jointVenture.scenarios.map((scenario) => (
            <div key={scenario.title}>
              <div className="mb-4 h-0.5 w-8 bg-bronze-500" />
              <h3 className="font-display text-lg font-medium text-ink">{scenario.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft/85">{scenario.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 border-t border-stone-200 pt-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="mb-4 h-px w-12 bg-bronze-500" />
            <h2 className="font-display text-2xl font-medium leading-snug text-ink">
              {jointVenture.mission.heading}
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-[17px] leading-relaxed text-ink-soft/90">
              {jointVenture.mission.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <PlaceholderImage label="SJV project — construction site photo" className="aspect-[4/5] w-full" />
          </div>
        </div>

        <div className="mt-16 border-t border-stone-200 pt-10 text-center">
          <Link
            to="/contact"
            className="inline-block bg-ink px-6 py-3 text-sm font-medium tracking-wide text-stone-50 transition-colors hover:bg-bronze-600"
          >
            For More Information
          </Link>
        </div>
      </div>
    </div>
  );
}
