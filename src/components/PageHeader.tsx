export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="border-b border-stone-200 bg-stone-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-bronze-500">
          Sherr Development
        </p>
        <h1 className="font-display mt-2 text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-ink-soft/80">{subtitle}</p>}
      </div>
    </div>
  );
}
