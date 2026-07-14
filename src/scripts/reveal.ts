export interface RevealOptions {
  delay?: (index: number, element: HTMLElement) => number;
  duration?: number;
  easing?: string;
  rootMargin?: string;
  skipVisible?: boolean;
  threshold?: number;
  translateY?: string;
}

export function observeReveal(
  elements: Iterable<HTMLElement>,
  {
    delay = () => 0,
    duration = 550,
    easing = "cubic-bezier(0.16, 1, 0.3, 1)",
    rootMargin = "0px 0px -32px 0px",
    skipVisible = false,
    threshold = 0.12,
    translateY = "20px",
  }: RevealOptions = {},
): void {
  const revealItems = Array.from(elements);
  const revealDelay = new WeakMap<HTMLElement, number>();

  revealItems.forEach((element, index) => {
    if (skipVisible && element.style.opacity === "1") return;

    element.style.opacity = "0";
    element.style.transform = `translateY(${translateY})`;
    element.style.willChange = "opacity, transform";
    revealDelay.set(element, delay(index, element));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target as HTMLElement;
        const itemDelay = revealDelay.get(element) ?? 0;
        element.style.transition = `opacity ${duration}ms ${easing} ${itemDelay}ms, transform ${duration}ms ${easing} ${itemDelay}ms`;
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
        observer.unobserve(element);
      });
    },
    { rootMargin, threshold },
  );

  revealItems.forEach((element) => {
    if (revealDelay.has(element)) observer.observe(element);
  });
}
