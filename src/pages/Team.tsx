import { Copy } from "../components/Copy";
import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { team } from "../content/content";

export function Team() {
  return (
    <div>
      <PageHeader title="Our Team" subtitle="The people behind Sherr Development." />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="flex gap-4 rounded-lg border border-slate-200 p-5">
              <PlaceholderImage
                label="Headshot"
                className="h-24 w-24 shrink-0 rounded-full text-[10px]"
              />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <div className="text-sm font-medium text-amber-700">
                  <Copy text={member.title} />
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  <Copy text={member.bio} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
