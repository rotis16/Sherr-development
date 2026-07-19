import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { siteMeta } from "../content/content";

export function Contact() {
  return (
    <div>
      <PageHeader title="Contact" />
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
        <Reveal>
          <p className="mt-1 text-sm text-ink-soft/60">Preview form — not wired up to send email yet.</p>
          <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-ink-soft/70" htmlFor="name">
                Your Name (required)
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-2 w-full border-0 border-b border-stone-300 bg-transparent px-0 py-2 text-sm focus:border-bronze-500 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-ink-soft/70" htmlFor="email">
                Your Email (required)
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-2 w-full border-0 border-b border-stone-300 bg-transparent px-0 py-2 text-sm focus:border-bronze-500 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-ink-soft/70" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="mt-2 w-full border-0 border-b border-stone-300 bg-transparent px-0 py-2 text-sm focus:border-bronze-500 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-ink-soft/70" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-2 w-full border-0 border-b border-stone-300 bg-transparent px-0 py-2 text-sm focus:border-bronze-500 focus:outline-none focus:ring-0"
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-ink px-6 py-3 text-sm font-medium tracking-wide text-stone-50 transition-colors hover:bg-bronze-600"
            >
              Send
            </button>
          </form>
        </Reveal>

        <Reveal delay={150} className="border-t border-stone-200 pt-8 lg:border-t-0 lg:border-l lg:pl-14 lg:pt-0">
          <h2 className="font-display text-xl font-medium text-ink">Find Us</h2>
          <p className="mt-3 text-ink-soft/90">{siteMeta.address.line1}</p>
          <p className="text-ink-soft/90">{siteMeta.address.line2}</p>
          <a
            href={`tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`}
            className="mt-4 inline-block text-lg font-medium text-bronze-600 hover:text-bronze-700"
          >
            {siteMeta.phone}
          </a>
        </Reveal>
      </div>
    </div>
  );
}
