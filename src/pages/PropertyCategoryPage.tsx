import { Copy } from "../components/Copy";
import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import type { PropertyCategory } from "../content/content";

export function PropertyCategoryPage({ category }: { category: PropertyCategory }) {
  return (
    <div>
      <PageHeader title={category.title} />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl text-[17px] leading-relaxed text-ink-soft/90">
          <Copy text={category.intro} />
        </div>

        {category.listings.length > 0 ? (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {category.listings.map((listing) => (
              <div key={listing.name} className="border-t border-stone-200">
                <PlaceholderImage label="Property photo" className="h-40 w-full" />
                <div className="pt-4">
                  <h3 className="font-display font-medium text-ink">{listing.name}</h3>
                  <p className="text-sm text-ink-soft/70">{listing.location}</p>
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
