import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { Reveal } from "../components/Reveal";
import { Link } from "react-router-dom";
import { blueBoxManagement } from "../content/content";

/** One line icon per service category, in source order. Purely decorative. */
const ICON_PATHS = [
  // Multi-Family Property Management — building
  "M4 21V6l7-3 7 3v15M4 21h16M9 21v-5h4v5M9 10h.01M9 14h.01M13.99 10h.01M13.99 14h.01",
  // Leasing and Marketing — megaphone
  "M3 11v2a2 2 0 0 0 2 2h1l3 5V4L6 9H5a2 2 0 0 0-2 2ZM11 8l7-4v16l-7-4",
  // Inspection, Maintenance and Value-Add Improvements — wrench
  "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94Z",
  // Financial Management and Reporting — bar chart
  "M3 21h18M7 21V10M12 21V4M17 21v-7",
  // Legal, Compliance, and Insurance — shield
  "M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3ZM9.5 12l2 2 3.5-4",
];

export function BlueBoxManagement() {
  return (
    <div>
      <PageHeader title={blueBoxManagement.heading} subtitle={blueBoxManagement.subheading} />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft/90">
              {blueBoxManagement.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5">
            <PlaceholderImage label="Blue Box Management — property photo" className="aspect-[4/3] w-full" />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
          {blueBoxManagement.categories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 2) * 100}>
              <div className="group -m-2 rounded p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <svg
                  className="h-7 w-7 text-bronze-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={ICON_PATHS[i]} />
                </svg>
                <div className="mt-4 h-0.5 w-8 bg-bronze-500 transition-all duration-300 group-hover:w-16" />
                <h3 className="font-display mt-4 text-lg font-medium leading-snug text-ink">{category.title}</h3>
                <ul className="mt-3 space-y-2.5">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft/85">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bronze-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border-t border-stone-200 pt-10 text-center">
          <Link
            to="/contact"
            className="inline-block bg-ink px-6 py-3 text-sm font-medium tracking-wide text-stone-50 transition-colors hover:bg-bronze-600"
          >
            For More Information
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
