import { Copy } from "../components/Copy";
import { PageHeader } from "../components/PageHeader";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { siteMeta } from "../content/content";

export function Contact() {
  return (
    <div>
      <PageHeader title="Contact" subtitle="Get in touch with Sherr Development." />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Office</h2>
          <p className="mt-2 text-slate-700">{siteMeta.address.line1}</p>
          <p className="text-slate-700">{siteMeta.address.line2}</p>
          <a
            href={`tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`}
            className="mt-4 inline-block text-lg font-semibold text-amber-700 hover:underline"
          >
            {siteMeta.phone}
          </a>
          <div className="mt-2 text-slate-700">
            <Copy text={siteMeta.email} />
          </div>

          <div className="mt-8">
            <PlaceholderImage label="Map embed — needs real address confirmed for map pin" className="h-56 w-full rounded-lg" />
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Send a Message</h2>
          <p className="mt-1 text-sm text-slate-500">
            Preview form — not wired up to send email yet.
          </p>
          <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-amber-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-800"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
