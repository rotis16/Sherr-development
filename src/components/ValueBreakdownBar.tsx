/**
 * Part-to-whole bar for the profile page's transaction-value breakdown.
 * Magnitude, not identity, is the point — one hue (the site's bronze
 * accent), stepped light-to-dark by descending amount, so lightness itself
 * shows the ranking. Every segment is direct-labeled in the legend row
 * below, so color is never the only way to tell segments apart.
 */
const STEPS = ["bg-bronze-700", "bg-bronze-600", "bg-bronze-500", "bg-bronze-400"];

export function ValueBreakdownBar({
  headline,
  breakdown,
}: {
  headline: string;
  breakdown: { label: string; millions: number }[];
}) {
  const total = breakdown.reduce((sum, item) => sum + item.millions, 0);

  return (
    <div>
      <h3 className="font-display text-xl font-medium leading-snug text-ink">{headline}</h3>

      <div className="mt-6 flex h-8 w-full gap-0.5 overflow-hidden rounded" role="img" aria-label={headline}>
        {breakdown.map((item, i) => (
          <div
            key={item.label}
            className={STEPS[i % STEPS.length]}
            style={{ width: `${(item.millions / total) * 100}%` }}
          />
        ))}
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-4">
        {breakdown.map((item, i) => (
          <div key={item.label} className="flex items-start gap-2">
            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${STEPS[i % STEPS.length]}`} />
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink-soft/70">{item.label}</dt>
              <dd className="font-display text-lg font-medium text-ink">${item.millions}M</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
