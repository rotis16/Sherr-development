import { Copy } from "../components/Copy";
import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import type { PropertyCategory } from "../content/content";

export function PropertyCategoryPage({ category }: { category: PropertyCategory }) {
  return (
    <div>
      <PageHeader title={category.title} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="max-w-3xl text-slate-700">
          <Copy text={category.intro} />
        </div>

        {category.listings.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.listings.map((listing) => (
              <div key={listing.name} className="overflow-hidden rounded-lg border border-slate-200">
                <PlaceholderImage label="Property photo" className="h-40 w-full" />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{listing.name}</h3>
                  <p className="text-sm text-slate-500">{listing.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
            No {category.title.toLowerCase()} listings loaded yet — add real project names, locations, and
            photos to <code className="rounded bg-slate-200 px-1 py-0.5">src/content/content.ts</code>.
          </div>
        )}
      </div>
    </div>
  );
}
