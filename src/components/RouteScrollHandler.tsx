import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "@/hooks/useGSAP";

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

    const scrollToCurrentHash = () => {
      clearScheduledScroll();

      let attempts = 0;

      const tryScroll = () => {
        const currentHash = window.location.hash;

        if (!currentHash) {
          return;
        }

        const targetId = decodeURIComponent(currentHash.replace("#", ""));
        const target = document.getElementById(targetId);

        if (!target) {
          attempts += 1;

          if (attempts < 30) {
            timeouts.push(window.setTimeout(tryScroll, 100));
          }

          return;
        }

        ScrollTrigger.refresh();

        rafs.push(
          window.requestAnimationFrame(() => {
            rafs.push(
              window.requestAnimationFrame(() => {
                const headerOffset = 96;
                const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({ top: Math.max(top, 0), left: 0, behavior: "auto" });
                ScrollTrigger.refresh();
                timeouts.push(window.setTimeout(() => ScrollTrigger.refresh(), 250));
              }),
            );
          }),
        );
      };

      timeouts.push(window.setTimeout(tryScroll, 100));
    };

    scrollToCurrentHash();
    window.addEventListener("hashchange", scrollToCurrentHash);
    window.addEventListener("load", scrollToCurrentHash);

    return () => {
      clearScheduledScroll();
      window.removeEventListener("hashchange", scrollToCurrentHash);
      window.removeEventListener("load", scrollToCurrentHash);
    };
  }, []);

  useEffect(() => {
    const pathnameChanged = previousPathname.current !== location.pathname;
    previousPathname.current = location.pathname;
    const currentHash = window.location.hash || location.hash;

    if (pathnameChanged && !currentHash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    return undefined;
  }, [location.hash, location.pathname]);

  return null;
};

export default RouteScrollHandler;
