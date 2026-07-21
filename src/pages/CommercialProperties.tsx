import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { commercialProperties, commercialPropertyPhotos, type CommercialListing } from "../content/content";

export function CommercialProperties() {
  const { netLeasedPortfolio, properties } = commercialProperties;

  return (
    <div>
      <PageHeader title={commercialProperties.heading} />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <section className="grid gap-12 sm:grid-cols-2">
              <Reveal>
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
                className="flex flex-col justify-center border-t border-stone-200 pt-8 sm:border-t-0 sm:border-l sm:pl-14 sm:pt-0"
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

          {/* Not tied to any specific listing above — a general look at tenants
              across the portfolio, kept in its own side column per the client. */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <h2 className="font-display text-lg font-medium text-ink">A Look at Our Properties</h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-1">
              {commercialPropertyPhotos.map((src, i) => (
                <Reveal key={i} delay={(i % 4) * 80}>
                  <img
                    src={src}
                    alt="Commercial property tenant"
                    className="aspect-[3/2] w-full rounded-lg object-cover shadow-md"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListingCard({ listing }: { listing: CommercialListing }) {
  return (
    <div>
      <h3 className="font-display text-lg font-medium text-ink">{listing.name}</h3>
      <p className="mt-0.5 text-sm font-medium uppercase tracking-wide text-bronze-600">{listing.location}</p>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft/85">
        {listing.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
