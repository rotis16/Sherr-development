import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { ValueBreakdownBar } from "../components/ValueBreakdownBar";
import projectLocationMap from "../assets/project-location-map.png";
import { companyProfile, projectLocations } from "../content/content";

export function CompanyProfile() {
  return (
    <div>
      <PageHeader title={companyProfile.heading} subtitle={companyProfile.subheading} />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="max-w-2xl space-y-6 text-[17px] leading-relaxed text-ink-soft/90">
              {companyProfile.paragraphs.map((paragraph, i) => (
                <p key={i} className={i > 0 ? "border-t border-stone-200 pt-6" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            {/* Not wrapped in Reveal: this column is lg:sticky, and Reveal's
                transform on an ancestor would fight sticky positioning. */}
            <div className="flex flex-col gap-8 border-t border-stone-200 pt-8 lg:sticky lg:top-24 lg:border-t-0 lg:pt-0 lg:pl-14 lg:border-l">
              <Reveal delay={150}>
                <ValueBreakdownBar
                  headline={companyProfile.valueCreated.headline}
                  breakdown={companyProfile.valueCreated.breakdown}
                />
              </Reveal>

              <Reveal delay={250} className="border-t border-stone-200 pt-8 text-center">
                <img
                  src={projectLocationMap}
                  alt={`Project location map — ${projectLocations.join(", ")}`}
                  className="mx-auto w-full max-w-xs"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
