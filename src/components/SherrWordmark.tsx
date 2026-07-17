/**
 * Recreates the real site's "SH[bars]RR" wordmark, where the middle "E" is
 * built from three stacked horizontal bars — a real, distinctive element of
 * their brand mark (confirmed from screenshots of sherrdev.com). No source
 * logo file was available, so this is a code recreation in our own bronze
 * accent rather than an attempt to copy their exact blue gradient.
 */
export function SherrWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-stretch font-sans font-extrabold tracking-tight ${className}`}>
      <span>SH</span>
      <span className="mx-[0.06em] flex flex-col justify-between py-[0.16em]">
        <span className="block h-[0.15em] w-[0.6em] bg-bronze-400" />
        <span className="block h-[0.15em] w-[0.6em] bg-bronze-500" />
        <span className="block h-[0.15em] w-[0.6em] bg-bronze-600" />
      </span>
      <span>RR</span>
    </span>
  );
}
