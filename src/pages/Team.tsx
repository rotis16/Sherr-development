import { Copy } from "../components/Copy";
import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { team } from "../content/content";

export function Team() {
  return (
    <div>
      <PageHeader title="Our Team" subtitle="The people behind Sherr Development." />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="flex gap-5 border-t border-stone-200 pt-6">
              <PlaceholderImage label="Headshot" className="h-24 w-24 shrink-0 rounded-full text-[10px]" />
              <div>
                <h3 className="font-display text-lg font-medium text-ink">{member.name}</h3>
                <div className="mt-0.5 text-xs font-medium uppercase tracking-wide text-bronze-600">
                  <Copy text={member.title} />
                </div>
                <div className="mt-2 text-sm leading-relaxed text-ink-soft/85">
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
