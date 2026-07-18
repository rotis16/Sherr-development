import { PageHeader } from "../components/PageHeader";
import { ValueBreakdownBar } from "../components/ValueBreakdownBar";
import projectLocationMap from "../assets/project-location-map.png";
import { companyProfile, projectLocations } from "../content/content";

export function CompanyProfile() {
  return (
    <div>
      <PageHeader title={companyProfile.heading} subtitle={companyProfile.subheading} />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-3xl space-y-5 text-[17px] leading-relaxed text-ink-soft/90">
          {companyProfile.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="border-t border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <ValueBreakdownBar
            headline={companyProfile.valueCreated.headline}
            breakdown={companyProfile.valueCreated.breakdown}
          />
        </div>
      </div>

      <div className="border-t border-stone-200">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <img
            src={projectLocationMap}
            alt={`Project location map — ${projectLocations.join(", ")}`}
            className="mx-auto w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
