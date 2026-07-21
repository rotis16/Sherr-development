import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { Reveal } from "../components/Reveal";
import { singleFamilyHomes, type SingleFamilyListing } from "../content/content";

export function SingleFamilyHomes() {
  const { newCommunities, pastCommunities } = singleFamilyHomes;

  return (
    <div>
      <PageHeader title={singleFamilyHomes.heading} />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <section>
          <h2 className="font-display text-2xl font-medium leading-snug text-ink">{newCommunities.heading}</h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-soft/90">{newCommunities.intro}</p>

          <div className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14">
            {newCommunities.listings.map((listing, i) => (
              <Reveal key={listing.name} delay={(i % 2) * 100}>
                <ListingCard listing={listing} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-stone-200 pt-16">
          <h2 className="font-display text-2xl font-medium leading-snug text-ink">{pastCommunities.heading}</h2>

          <div className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14">
            {pastCommunities.listings.map((listing, i) => (
              <Reveal key={listing.name} delay={(i % 2) * 100}>
                <ListingCard listing={listing} />
              </Reveal>
            ))}

            <Reveal className="border border-stone-200 bg-stone-100 p-6 sm:col-span-2">
              <h3 className="font-display text-lg font-medium text-ink">{pastCommunities.regionalNote.heading}</h3>
              <div className="mt-3 max-w-3xl space-y-3 text-sm leading-relaxed text-ink-soft/85">
                {pastCommunities.regionalNote.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}

function ListingCard({ listing }: { listing: SingleFamilyListing }) {
  return (
    <div className="group">
      <div className="overflow-hidden">
        {listing.images ? (
          <div className="grid grid-cols-3 gap-1">
            {listing.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${listing.imageAlt ?? listing.name} ${i + 1}`}
                className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ))}
          </div>
        ) : listing.image ? (
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
        </div>
        {listing.jointVentureNote && (
          <p className="mt-3 text-sm font-semibold text-ink">{listing.jointVentureNote}</p>
        )}
      </div>
    </div>
  );
}
