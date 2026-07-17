import { DivisionsGrid } from "../components/DivisionsGrid";
import { PageHeader } from "../components/PageHeader";
import { divisions } from "../content/content";

export function CompanyProfile() {
  return (
    <div>
      <PageHeader title="Company Profile" subtitle="Our divisions and how we work." />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <section>
          <h2 className="font-display text-2xl font-medium text-ink">Our Divisions</h2>
          <DivisionsGrid divisions={divisions} />
        </section>
      </div>
    </div>
  );
}
