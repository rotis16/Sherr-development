import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { companyHistory } from "../content/content";

export function CompanyHistory() {
  return (
    <div>
      <PageHeader title="Company History" subtitle={`Founded by ${companyHistory.founderName}`} />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="mb-4 h-px w-12 bg-bronze-500" />
            <h2 className="font-display text-2xl font-medium leading-snug text-ink">
              {companyHistory.missionHeading}
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-[17px] leading-relaxed text-ink-soft/90">
              {companyHistory.paragraphs.slice(0, 2).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-stone-300 pt-8">
              {companyHistory.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-medium text-ink">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="font-display mt-10 max-w-xl border-l-2 border-bronze-500 pl-6 text-2xl italic leading-snug text-ink">
              “{companyHistory.pullQuote}”
            </blockquote>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5">
            <PlaceholderImage label="Founder photo — I. William Sherr" className="aspect-[4/3] w-full" />
            <PlaceholderImage label="Frank's Nursery & Crafts logo" className="aspect-[2/1] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
