import { Copy } from "../components/Copy";
import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import type { PropertyCategory } from "../content/content";

export function PropertyCategoryPage({ category }: { category: PropertyCategory }) {
  return (
    <div>
      <PageHeader title={category.title} />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {category.intro && (
          <div className="max-w-2xl text-[17px] leading-relaxed text-ink-soft/90">
            <Copy text={category.intro} />
          </div>
        )}

        {category.listings.length > 0 ? (
          <div className={`grid gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 ${category.intro ? "mt-12" : ""}`}>
            {category.listings.map((listing) => (
              <div key={listing.name}>
                <PlaceholderImage label={`${listing.name} — property photo`} className="aspect-[3/2] w-full" />
                <div className="mt-5">
                  <h3 className="font-display text-lg font-medium text-ink">{listing.name}</h3>
                  <p className="mt-0.5 text-sm font-medium uppercase tracking-wide text-bronze-600">
                    {listing.location}
                  </p>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft/85">
                    {listing.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 border border-dashed border-stone-300 bg-stone-100 p-8 text-center text-sm text-ink-soft/70">
            No {category.title.toLowerCase()} listings loaded yet — add real project names, locations, and
            photos to <code className="bg-stone-200 px-1 py-0.5">src/content/content.ts</code>.
          </div>
        )}
      </div>
    </div>
  );
}
