import { Copy } from "../components/Copy";
import { PageHeader } from "../components/PageHeader";
import { companyHistory, divisions } from "../content/content";

export function CompanyProfile() {
  return (
    <div>
      <PageHeader title="Company Profile" subtitle="History, divisions, and how we work." />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Our History</h2>
          <p className="mt-1 text-sm text-slate-500">Founded by {companyHistory.founderName}</p>
          <div className="mt-4 max-w-3xl text-slate-700">
            <Copy text={companyHistory.blurb} />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">Our Divisions</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {divisions.map((d) => (
              <div key={d.name} className="rounded-lg border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">{d.name}</h3>
                <div className="mt-2 text-sm text-slate-600">
                  <Copy text={d.summary} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
