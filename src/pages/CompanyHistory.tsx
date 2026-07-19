import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import founderPhoto from "../assets/founder-photo.jpeg";
import franksNurseryLogo from "../assets/franks-nursery-logo.jpeg";
import { companyHistory } from "../content/content";

export function CompanyHistory() {
  return (
    <div>
      <PageHeader title="Company History" subtitle={`Founded by ${companyHistory.founderName}`} />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="mb-4 h-px w-12 bg-bronze-500" />
            <h2 className="font-display text-2xl font-medium leading-snug text-ink">
              {companyHistory.missionHeading}
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-[17px] leading-relaxed text-ink-soft/90">
              {companyHistory.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} className="flex flex-col gap-6 lg:col-span-5">
            <img
              src={founderPhoto}
              alt="I. William Sherr, founder, pictured at Frank's Nursery & Crafts"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-lg"
            />
            <img
              src={franksNurseryLogo}
              alt="Frank's Nursery & Crafts logo"
              className="aspect-[2/1] w-full rounded-lg object-contain bg-white p-6 shadow-lg"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
