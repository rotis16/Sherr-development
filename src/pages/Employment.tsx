import { Copy } from "../components/Copy";
import { PageHeader } from "../components/PageHeader";
import { PLACEHOLDER } from "../content/content";

export function Employment() {
  return (
    <div>
      <PageHeader title="Employment" subtitle="Join the Sherr Development team." />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl text-[17px] leading-relaxed text-ink-soft/90">
          <Copy text={PLACEHOLDER("Employment page copy and any open positions — verify against sherrdev.com/employment/")} />
        </div>
      </div>
    </div>
  );
}
