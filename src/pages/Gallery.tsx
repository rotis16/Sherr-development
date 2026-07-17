import { Copy } from "../components/Copy";
import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { galleryIntro } from "../content/content";

export function Gallery() {
  return (
    <div>
      <PageHeader title="Gallery" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl text-ink-soft/80">
          <Copy text={galleryIntro} />
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <PlaceholderImage key={i} label="Project photo" className="aspect-[4/3] w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
