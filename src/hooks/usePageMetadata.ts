import { useEffect } from "react";

interface PageMetadata {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
}

const managedMetaSelectors = [
  'meta[name="description"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:type"]',
  'meta[property="og:image"]',
  'meta[property="og:url"]',
  'meta[name="twitter:card"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
  'meta[name="twitter:image"]',
];

const getOrCreateMeta = (selector: string) => {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);

  if (existing) {
    return existing;
  }

  const meta = document.createElement("meta");
  const nameMatch = selector.match(/name="([^"]+)"/);
  const propertyMatch = selector.match(/property="([^"]+)"/);

  if (nameMatch) {
    meta.setAttribute("name", nameMatch[1]);
  }

  if (propertyMatch) {
    meta.setAttribute("property", propertyMatch[1]);
  }

  document.head.appendChild(meta);
  return meta;
};

const setMetaContent = (selector: string, content: string) => {
  getOrCreateMeta(selector).setAttribute("content", content);
};

export const usePageMetadata = ({ title, description, image, type = "website" }: PageMetadata) => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousMeta = managedMetaSelectors.map((selector) => {
      const element = document.head.querySelector<HTMLMetaElement>(selector);
      return {
        selector,
        content: element?.getAttribute("content"),
        existed: Boolean(element),
      };
    });

    const absoluteImage = image ? new URL(image, window.location.origin).toString() : undefined;

    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:type"]', type);
    setMetaContent('meta[property="og:url"]', window.location.href);
    setMetaContent('meta[name="twitter:card"]', "summary_large_image");
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);

    if (absoluteImage) {
      setMetaContent('meta[property="og:image"]', absoluteImage);
      setMetaContent('meta[name="twitter:image"]', absoluteImage);
    }

    return () => {
      document.title = previousTitle;

      previousMeta.forEach(({ selector, content, existed }) => {
        const element = document.head.querySelector<HTMLMetaElement>(selector);

        if (!element) {
          return;
        }

        if (existed && content !== null && content !== undefined) {
          element.setAttribute("content", content);
          return;
        }

        element.remove();
      });
    };
  }, [description, image, title, type]);
};
