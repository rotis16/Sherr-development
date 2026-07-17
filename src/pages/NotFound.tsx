import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-display text-3xl font-medium text-ink">Page not found</h1>
      <Link to="/" className="mt-4 inline-block text-bronze-600 hover:text-bronze-700">
        Back to home
      </Link>
    </div>
  );
}
