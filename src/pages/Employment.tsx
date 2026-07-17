import { Copy } from "../components/Copy";
import { PageHeader } from "../components/PageHeader";
import { PLACEHOLDER } from "../content/content";

export function Employment() {
  return (
    <div>
      <PageHeader title="Employment" subtitle="Join the Sherr Development team." />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="max-w-3xl text-slate-700">
          <Copy text={PLACEHOLDER("Employment page copy and any open positions — verify against sherrdev.com/employment/")} />
        </div>
      </div>
    </div>
  );
}
