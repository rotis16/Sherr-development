import { Copy } from "../components/Copy";
import { DivisionsGrid } from "../components/DivisionsGrid";
import { PageHeader } from "../components/PageHeader";
import { companyHistory, divisions } from "../content/content";

export function CompanyProfile() {
  return (
    <div>
      <PageHeader title="Company Profile" subtitle="History, divisions, and how we work." />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <section className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="mb-4 h-px w-12 bg-bronze-500" />
            <h2 className="font-display text-2xl font-medium text-ink">Our History</h2>
            <p className="mt-1 text-sm text-ink-soft/70">Founded by {companyHistory.founderName}</p>
          </div>
          <div className="lg:col-span-8">
            <div className="max-w-2xl text-[17px] leading-relaxed text-ink-soft/90">
              <Copy text={companyHistory.blurb} />
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-stone-200 pt-16">
          <h2 className="font-display text-2xl font-medium text-ink">Our Divisions</h2>
          <DivisionsGrid divisions={divisions} />
        </section>
      </div>
    </div>
  );
}
