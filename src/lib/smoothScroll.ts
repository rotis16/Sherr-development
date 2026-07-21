function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/** Custom eased scroll (longer + gentler than the browser's native "smooth" scroll). */
export function smoothScrollToCenter(el: HTMLElement, duration = 700) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.scrollIntoView({ block: "center" });
    return;
  }

  const rect = el.getBoundingClientRect();
  const startY = window.scrollY;
  const targetY = startY + rect.top - (window.innerHeight - rect.height) / 2;
  const diff = targetY - startY;
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}
