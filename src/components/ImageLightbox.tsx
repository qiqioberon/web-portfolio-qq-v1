import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface LightboxImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  galleryTitle: string;
  activeIndex: number | null;
  onActiveIndexChange: (index: number | null) => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.5;

export function ImageLightbox({
  images,
  galleryTitle,
  activeIndex,
  onActiveIndexChange,
}: ImageLightboxProps) {
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);

  const isOpen = activeIndex !== null;
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const resetView = useCallback(() => {
    setZoom(MIN_ZOOM);
    setOffset({ x: 0, y: 0 });
    setIsDragging(false);
    dragState.current = null;
  }, []);

  const updateZoom = useCallback((nextZoom: number) => {
    const clampedZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom));
    setZoom(clampedZoom);

    if (clampedZoom === MIN_ZOOM) {
      setOffset({ x: 0, y: 0 });
    }
  }, []);

  const showPrevious = useCallback(() => {
    if (activeIndex === null || images.length === 0) return;
    onActiveIndexChange((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onActiveIndexChange]);

  const showNext = useCallback(() => {
    if (activeIndex === null || images.length === 0) return;
    onActiveIndexChange((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onActiveIndexChange]);

  useEffect(() => {
    resetView();
  }, [activeIndex, resetView]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      } else if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        updateZoom(zoom + ZOOM_STEP);
      } else if (event.key === "-") {
        event.preventDefault();
        updateZoom(zoom - ZOOM_STEP);
      } else if (event.key === "0") {
        event.preventDefault();
        resetView();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, resetView, showNext, showPrevious, updateZoom, zoom]);

  const handlePointerDown = (event: React.PointerEvent<HTMLImageElement>) => {
    if (zoom === MIN_ZOOM || event.button !== 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: offset.x,
      originY: offset.y,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLImageElement>) => {
    const drag = dragState.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    setOffset({
      x: drag.originX + event.clientX - drag.startX,
      y: drag.originY + event.clientY - drag.startY,
    });
  };

  const endDrag = (event: React.PointerEvent<HTMLImageElement>) => {
    if (dragState.current?.pointerId !== event.pointerId) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragState.current = null;
    setIsDragging(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          const closingIndex = activeIndex;
          onActiveIndexChange(null);
          window.setTimeout(() => {
            const trigger = document.querySelector<HTMLButtonElement>(
              `[data-lightbox-image-index="${closingIndex}"]`,
            );
            if (trigger?.isConnected) trigger.focus({ preventScroll: true });
          }, 250);
        }
      }}
    >
      <DialogContent
        className="h-[calc(100vh-1rem)] w-[calc(100vw-1rem)] max-w-[96rem] overflow-hidden border-white/10 bg-black/95 p-0 text-white sm:h-[calc(100vh-2rem)] sm:w-[calc(100vw-2rem)] sm:rounded-2xl"
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <DialogTitle className="sr-only">{galleryTitle}</DialogTitle>
        <DialogDescription className="sr-only">
          Use previous and next to browse, plus and minus to zoom, drag to pan while zoomed, zero to reset,
          and Escape to close.
        </DialogDescription>

        {activeImage ? (
          <div className="grid h-full min-h-0 grid-rows-[1fr_auto]">
            <div
              className="relative flex min-h-0 items-center justify-center overflow-hidden p-3 sm:p-8"
              onWheel={(event) => {
                event.preventDefault();
                updateZoom(zoom + (event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP));
              }}
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeImage.width}
                height={activeImage.height}
                draggable={false}
                onDoubleClick={() => updateZoom(zoom === MIN_ZOOM ? 2 : MIN_ZOOM)}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                className={cn(
                  "max-h-full max-w-full select-none object-contain will-change-transform",
                  isDragging ? "cursor-grabbing" : zoom > MIN_ZOOM ? "cursor-grab" : "cursor-zoom-in",
                  !isDragging && "transition-transform duration-150",
                )}
                style={{
                  transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`,
                  touchAction: zoom > MIN_ZOOM ? "none" : "auto",
                }}
              />

              {images.length > 1 ? (
                <>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={showPrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 border-white/15 bg-black/70 text-white hover:bg-white/15 hover:text-white sm:left-5"
                    aria-label="View previous image"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={showNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 border-white/15 bg-black/70 text-white hover:bg-white/15 hover:text-white sm:right-5"
                    aria-label="View next image"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </>
              ) : null}
            </div>

            <div className="border-t border-white/10 bg-black/80 px-4 py-3 sm:px-8 sm:py-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="line-clamp-2 text-sm leading-6 text-white/70">{activeImage.alt}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-white/50" aria-live="polite">
                    {String((activeIndex ?? 0) + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => updateZoom(zoom - ZOOM_STEP)}
                    disabled={zoom === MIN_ZOOM}
                    className="h-9 w-9 text-white hover:bg-white/10 hover:text-white disabled:text-white/30"
                    aria-label="Zoom out"
                  >
                    <Minus className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <span className="w-14 text-center font-mono text-xs text-white/70" aria-live="polite">
                    {Math.round(zoom * 100)}%
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => updateZoom(zoom + ZOOM_STEP)}
                    disabled={zoom === MAX_ZOOM}
                    className="h-9 w-9 text-white hover:bg-white/10 hover:text-white disabled:text-white/30"
                    aria-label="Zoom in"
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={resetView}
                    disabled={zoom === MIN_ZOOM && offset.x === 0 && offset.y === 0}
                    className="h-9 w-9 text-white hover:bg-white/10 hover:text-white disabled:text-white/30"
                    aria-label="Reset zoom and position"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
