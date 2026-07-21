import { useRef, useState } from "react";
import { Copy } from "../components/Copy";
import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { Reveal } from "../components/Reveal";
import type { PropertyCategory } from "../content/content";
import { smoothScrollToCenter } from "../lib/smoothScroll";

type Listing = PropertyCategory["listings"][number];

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
            {category.listings.map((listing, i) => (
              <Reveal key={listing.name} delay={(i % 2) * 100}>
                <ListingCard listing={listing} />
              </Reveal>
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

function ListingCard({ listing }: { listing: Listing }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next) {
      // Wait for the extra paragraphs to render before measuring, so the
      // whole expanded card ends up in view instead of getting cut off.
      requestAnimationFrame(() => {
        if (cardRef.current) smoothScrollToCenter(cardRef.current);
      });
    }
  };

  return (
    <div ref={cardRef} className="group scroll-mt-24">
      <div className="overflow-hidden">
        {listing.image ? (
          <img
            src={listing.image}
            alt={listing.imageAlt ?? listing.name}
            className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <PlaceholderImage
            label={`${listing.name} — property photo`}
            className="aspect-[3/2] w-full transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="mt-5">
        <h3 className="font-display text-lg font-medium text-ink">{listing.name}</h3>
        <p className="mt-0.5 text-sm font-medium uppercase tracking-wide text-bronze-600">{listing.location}</p>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft/85">
          {listing.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          {open && listing.moreDescription?.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        </div>

        {listing.moreDescription && listing.moreDescription.length > 0 && (
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            className="font-display mt-3 flex items-center gap-1 text-sm italic text-ink underline decoration-bronze-500 decoration-1 underline-offset-2 hover:text-bronze-600"
          >
            {open ? "Read Less" : "Read More"}
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
        )}
      </div>
    </div>
  );
}
