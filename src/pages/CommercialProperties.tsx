import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { Reveal } from "../components/Reveal";
import { commercialProperties, type CommercialListing } from "../content/content";

export function CommercialProperties() {
  const { netLeasedPortfolio, properties } = commercialProperties;

  return (
    <div>
      <PageHeader title={commercialProperties.heading} />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <section className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="mb-4 h-px w-12 bg-bronze-500" />
            <h2 className="font-display text-2xl font-medium leading-snug text-ink">
              {netLeasedPortfolio.heading}
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-[17px] leading-relaxed text-ink-soft/90">
              {netLeasedPortfolio.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal
            delay={150}
            className="flex flex-col justify-center border-t border-stone-200 pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-14 lg:pt-0"
          >
            <div className="font-display text-5xl font-medium text-ink">{netLeasedPortfolio.stat.value}</div>
            <div className="mt-2 text-sm font-medium uppercase tracking-wide text-ink-soft/70">
              {netLeasedPortfolio.stat.label}
            </div>
          </Reveal>
        </section>

        <section className="mt-20 border-t border-stone-200 pt-16">
          <Reveal>
            <h2 className="font-display text-2xl font-medium leading-snug text-ink">{properties.heading}</h2>
          </Reveal>

          <div className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14">
            {properties.listings.map((listing, i) => (
              <Reveal key={listing.name} delay={(i % 2) * 100}>
                <ListingCard listing={listing} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ListingCard({ listing }: { listing: CommercialListing }) {
  return (
    <div className="group">
      <div className="overflow-hidden">
        <PlaceholderImage
          label={`${listing.name} — property photo`}
          className="aspect-[3/2] w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-5">
        <h3 className="font-display text-lg font-medium text-ink">{listing.name}</h3>
        <p className="mt-0.5 text-sm font-medium uppercase tracking-wide text-bronze-600">{listing.location}</p>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft/85">
          {listing.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
