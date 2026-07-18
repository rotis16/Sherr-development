import { PageHeader } from "../components/PageHeader";
import { employmentIntro } from "../content/content";

export function Employment() {
  return (
    <div>
      <PageHeader title="Employment" />
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="mt-1 text-sm text-ink-soft/60">Preview form — not wired up to send email yet.</p>
          <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-ink-soft/70" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-2 w-full border-0 border-b border-stone-300 bg-transparent px-0 py-2 text-sm focus:border-bronze-500 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-ink-soft/70" htmlFor="email">
                Email (required)
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-2 w-full border-0 border-b border-stone-300 bg-transparent px-0 py-2 text-sm focus:border-bronze-500 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-ink-soft/70" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-2 w-full border-0 border-b border-stone-300 bg-transparent px-0 py-2 text-sm focus:border-bronze-500 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-ink-soft/70" htmlFor="resume">
                Resume
              </label>
              <input
                id="resume"
                type="file"
                className="mt-2 block w-full text-sm text-ink-soft/80 file:mr-4 file:border file:border-ink/30 file:bg-transparent file:px-4 file:py-2 file:text-sm file:font-medium file:tracking-wide file:text-ink hover:file:border-ink"
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-ink px-6 py-3 text-sm font-medium tracking-wide text-stone-50 transition-colors hover:bg-bronze-600"
            >
              Send
            </button>
          </form>
        </div>

        <div className="border-t border-stone-200 pt-8 lg:border-t-0 lg:border-l lg:pl-14 lg:pt-0">
          <p className="max-w-md text-[17px] leading-relaxed text-ink-soft/90">{employmentIntro}</p>
        </div>
      </div>
    </div>
  );
}
