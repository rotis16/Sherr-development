import { Copy } from "../components/Copy";
import { PageHeader } from "../components/PageHeader";
import { companyHistory } from "../content/content";

export function CompanyHistory() {
  return (
    <div>
      <PageHeader title="Company History" subtitle="How Sherr Development got started." />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <section className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="mb-4 h-px w-12 bg-bronze-500" />
            <p className="text-sm text-ink-soft/70">Founded by {companyHistory.founderName}</p>
          </div>
          <div className="lg:col-span-8">
            <div className="max-w-2xl text-[17px] leading-relaxed text-ink-soft/90">
              <Copy text={companyHistory.blurb} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
