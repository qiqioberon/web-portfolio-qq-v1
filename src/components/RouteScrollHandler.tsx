import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "@/hooks/useGSAP";

const HASH_SCROLL_ATTEMPTS = 30;
const HASH_SCROLL_DELAY_MS = 100;
const HEADER_OFFSET = 96;

const RouteScrollHandler = () => {
  const location = useLocation();
  const previousPathname = useRef(location.pathname);

  useEffect(() => {
    let timeouts: number[] = [];
    let rafs: number[] = [];

    const clearScheduledScroll = () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      rafs.forEach((raf) => window.cancelAnimationFrame(raf));
      timeouts = [];
      rafs = [];
    };

    const pathnameChanged = previousPathname.current !== location.pathname;
    previousPathname.current = location.pathname;
    const currentHash = window.location.hash || location.hash;

    if (!currentHash) {
      if (pathnameChanged) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }

      return clearScheduledScroll;
    }

    let attempts = 0;

    const tryScroll = () => {
      const targetId = decodeURIComponent(currentHash.replace("#", ""));
      const target = document.getElementById(targetId);

      if (!target) {
        attempts += 1;

        if (attempts < HASH_SCROLL_ATTEMPTS) {
          timeouts.push(window.setTimeout(tryScroll, HASH_SCROLL_DELAY_MS));
        }

        return;
      }

      ScrollTrigger.refresh();

      rafs.push(
        window.requestAnimationFrame(() => {
          rafs.push(
            window.requestAnimationFrame(() => {
              const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
              const root = document.documentElement;
              const previousScrollBehavior = root.style.scrollBehavior;

              // `behavior: "auto"` still follows the global CSS smooth-scroll
              // setting. Temporarily disable it so ScrollTrigger refreshes cannot
              // interrupt hash navigation before it reaches the target.
              root.style.scrollBehavior = "auto";
              window.scrollTo({ top: Math.max(top, 0), left: 0 });
              root.style.scrollBehavior = previousScrollBehavior;
              ScrollTrigger.refresh();
              timeouts.push(window.setTimeout(() => ScrollTrigger.refresh(), 250));
            }),
          );
        }),
      );
    };

    timeouts.push(window.setTimeout(tryScroll, HASH_SCROLL_DELAY_MS));

    return clearScheduledScroll;
  }, [location.hash, location.key, location.pathname]);

  return null;
};

export default RouteScrollHandler;
