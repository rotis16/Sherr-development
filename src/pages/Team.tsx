import { useRef, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { team, teamHeading } from "../content/content";

export function Team() {
  const [selected, setSelected] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const active = team[selected];

  return (
    <div>
      <PageHeader title="Our Team" subtitle={teamHeading} />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {team.map((member, i) => (
            <button
              key={member.name}
              type="button"
              onClick={() => {
                setSelected(i);
                panelRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              aria-pressed={i === selected}
              className={`flex flex-col items-center gap-3 border-t-2 pb-2 pt-6 text-center transition-colors ${
                i === selected ? "border-bronze-500" : "border-stone-200 hover:border-stone-300"
              }`}
            >
              <PlaceholderImage label="Headshot" className="h-20 w-20 rounded-full text-[9px] sm:h-24 sm:w-24" />
              <div>
                <div className={`font-display text-sm font-medium sm:text-base ${i === selected ? "text-ink" : "text-ink-soft"}`}>
                  {member.name}
                </div>
                <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-bronze-600">
                  {member.title}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div ref={panelRef} className="mx-auto mt-14 max-w-2xl scroll-mt-24 border-t border-stone-200 pt-10 text-center">
          <PlaceholderImage label="Headshot" className="mx-auto h-28 w-28 rounded-full text-[10px]" />
          <h3 className="font-display mt-5 text-2xl font-medium text-ink">{active.name}</h3>
          <div className="mt-1 text-xs font-medium uppercase tracking-wide text-bronze-600">{active.title}</div>
          <p className="mx-auto mt-5 max-w-xl text-left text-[17px] leading-relaxed text-ink-soft/90">{active.bio}</p>
        </div>
      </div>
    </div>
  );
}
