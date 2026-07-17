import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-semibold text-slate-900">Page not found</h1>
      <Link to="/" className="mt-4 inline-block text-amber-700 hover:underline">
        Back to home
      </Link>
    </div>
  );
}
