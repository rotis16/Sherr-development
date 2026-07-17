import { PageHeader } from "../components/PageHeader";
import { divisions } from "../content/content";

export function BlueBoxManagement() {
  const division = divisions.find((d) => d.name === "Blue Box Management LLC");

  return (
    <div>
      <PageHeader title="Blue Box Management" subtitle={division?.summary} />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl text-[17px] leading-relaxed text-ink-soft/90">{division?.description}</div>
      </div>
    </div>
  );
}
