import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { DesignImage } from "@/data/designProjects";

interface DesignLightboxProps {
  images: DesignImage[];
  activeIndex: number | null;
  onActiveIndexChange: (index: number | null) => void;
}

const DesignLightbox = ({
  images,
  activeIndex,
  onActiveIndexChange,
}: DesignLightboxProps) => {
  const isOpen = activeIndex !== null;
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const showPrevious = useCallback(() => {
    if (activeIndex === null || images.length === 0) return;
    onActiveIndexChange((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onActiveIndexChange]);

  const showNext = useCallback(() => {
    if (activeIndex === null || images.length === 0) return;
    onActiveIndexChange((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onActiveIndexChange]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, showNext, showPrevious]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          const closingIndex = activeIndex;
          onActiveIndexChange(null);
          window.setTimeout(() => {
            const trigger = document.querySelector<HTMLButtonElement>(
              `[data-design-image-index="${closingIndex}"]`,
            );
            if (trigger?.isConnected) trigger.focus({ preventScroll: true });
          }, 250);
        }
      }}
    >
      <DialogContent
        className="h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] max-w-7xl overflow-hidden border-white/10 bg-black/95 p-0 text-white sm:rounded-2xl"
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <DialogTitle className="sr-only">Filin Movie design gallery</DialogTitle>
        <DialogDescription className="sr-only">
          Use the previous and next buttons or the left and right arrow keys to
          browse the gallery. Press Escape to close.
        </DialogDescription>

        {activeImage ? (
          <div className="grid h-full grid-rows-[1fr_auto]">
            <div className="relative flex min-h-0 items-center justify-center p-4 pb-2 sm:p-10 sm:pb-4">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeImage.width}
                height={activeImage.height}
                className="max-h-full max-w-full object-contain"
              />

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6"
                    aria-label="View previous design"
                  >
                    <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6"
                    aria-label="View next design"
                  >
                    <ChevronRight className="h-6 w-6" aria-hidden="true" />
                  </button>
                </>
              ) : null}
            </div>

            <div className="border-t border-white/10 px-5 py-4 sm:px-8">
              <div className="flex items-start justify-between gap-6">
                <p className="max-w-4xl text-sm leading-6 text-white/70">
                  {activeImage.alt}
                </p>
                <p className="shrink-0 font-mono text-xs uppercase tracking-wider text-white/60">
                  {String((activeIndex ?? 0) + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default DesignLightbox;
