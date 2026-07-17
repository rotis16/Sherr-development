import type { ElementType } from "react";

const PLACEHOLDER_PREFIX = "[PLACEHOLDER:";

/**
 * Renders content-file text as-is, but visibly flags anything wrapped by
 * PLACEHOLDER() so unverified copy never looks "finished" during review.
 */
export function Copy({ text, as: Tag = "span" }: { text: string; as?: ElementType }) {
  const isPlaceholder = text.startsWith(PLACEHOLDER_PREFIX);
  if (!isPlaceholder) {
    return <Tag>{text}</Tag>;
  }
  const label = text.slice(PLACEHOLDER_PREFIX.length, -1).trim();
  return (
    <Tag className="inline-block rounded border border-dashed border-amber-400 bg-amber-50 px-2 py-1 text-sm italic text-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
      <span className="mr-1.5 rounded bg-amber-400 px-1.5 py-0.5 text-[10px] font-bold not-italic uppercase tracking-wide text-amber-950">
        Needs content
      </span>
      {label}
    </Tag>
  );
}
