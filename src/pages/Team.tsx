import { useRef, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { team, teamHeading, type TeamMember } from "../content/content";

export function Team() {
  return (
    <div>
      <PageHeader title="Our Team" subtitle={teamHeading} />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next) {
      // Wait for the bio to render/expand before scrolling, so the whole
      // card (including the newly revealed text) ends up in view instead
      // of getting cut off below the fold.
      requestAnimationFrame(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  };

  return (
    <div ref={cardRef} className="scroll-mt-24 flex gap-5 border-t border-stone-200 pt-6">
      <PlaceholderImage label="Headshot" className="h-24 w-24 shrink-0 rounded-full text-[10px]" />
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg font-medium text-ink">{member.name}</h3>
        <div className="mt-0.5 text-xs font-medium uppercase tracking-wide text-bronze-600">{member.title}</div>

        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          className="mt-2 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-ink-soft/70 hover:text-ink"
        >
          {open ? "Hide Bio" : "Read Bio"}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && <p className="mt-3 text-sm leading-relaxed text-ink-soft/85">{member.bio}</p>}
      </div>
    </div>
  );
}
