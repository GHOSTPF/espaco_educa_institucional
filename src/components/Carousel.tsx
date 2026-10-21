import { useCallback, useSyncExternalStore } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, distance: number) => React.ReactNode;
  slideClassName?: string;
  ariaLabel: string;
};

// Assina os eventos do Embla via useSyncExternalStore, o jeito correto do
// React de sincronizar estado com um sistema externo sem disparar setState
// sincronamente dentro de um efeito.
function subscribeToEmbla(emblaApi: EmblaCarouselType | undefined) {
  return (callback: () => void) => {
    if (!emblaApi) return () => {};
    emblaApi.on("select", callback);
    emblaApi.on("reInit", callback);
    return () => {
      emblaApi.off("select", callback);
      emblaApi.off("reInit", callback);
    };
  };
}

function useEmblaSelectedIndex(emblaApi: EmblaCarouselType | undefined) {
  const subscribe = useCallback(
    (callback: () => void) => subscribeToEmbla(emblaApi)(callback),
    [emblaApi]
  );
  return useSyncExternalStore(
    subscribe,
    () => emblaApi?.selectedScrollSnap() ?? 0,
    () => 0
  );
}

function useEmblaSnapCount(emblaApi: EmblaCarouselType | undefined) {
  const subscribe = useCallback(
    (callback: () => void) => subscribeToEmbla(emblaApi)(callback),
    [emblaApi]
  );
  return useSyncExternalStore(
    subscribe,
    () => emblaApi?.scrollSnapList().length ?? 0,
    () => 0
  );
}

export default function Carousel<T extends { id: string }>({
  items,
  renderItem,
  slideClassName,
  ariaLabel,
}: CarouselProps<T>) {
  const prefersReducedMotion = useReducedMotion();

  const autoplay = Autoplay({ delay: 3800, stopOnInteraction: false, stopOnMouseEnter: true });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    prefersReducedMotion ? [] : [autoplay]
  );

  const selectedIndex = useEmblaSelectedIndex(emblaApi);
  const snapCount = useEmblaSnapCount(emblaApi);

  function distanceFromSelected(index: number) {
    if (snapCount === 0) return 0;
    const raw = index - selectedIndex;
    const half = snapCount / 2;
    let d = raw;
    if (d > half) d -= snapCount;
    if (d < -half) d += snapCount;
    return d;
  }

  return (
    <div className="relative" role="region" aria-label={ariaLabel}>
      <div className="overflow-hidden" ref={emblaRef} style={{paddingBottom: 15}}>
        <div className="flex touch-pan-y">
          {items.map((item, i) => {
            const distance = distanceFromSelected(i);
            const isCenter = distance === 0;
            return (
              <div
                key={item.id}
                className={cn(
                  "min-w-0 shrink-0 grow-0 px-3",
                  slideClassName ?? "basis-[82%] sm:basis-[55%] lg:basis-[38%]"
                )}
              >
                <motion.div
                  animate={{
                    scale: isCenter ? 1 : 0.88,
                    opacity: Math.abs(distance) > 1 ? 0.35 : isCenter ? 1 : 0.65,
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="h-full"
                >
                  {renderItem(item, distance)}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        aria-label="Anterior"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:translate-x-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-pink-dark shadow-md transition-transform hover:scale-110 active:scale-95"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        aria-label="Próximo"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-pink-dark shadow-md transition-transform hover:scale-110 active:scale-95"
      >
        <ChevronRight size={22} />
      </button>

      <div className="mt-7 flex items-center justify-center gap-2.5">
        {Array.from({ length: snapCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para item ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className="p-1"
          >
            <motion.span
              animate={{
                scale: i === selectedIndex ? 1.3 : 1,
                backgroundColor: i === selectedIndex ? "var(--color-pink-dark)" : "var(--color-pink)",
              }}
              transition={{ duration: 0.3 }}
              className="block h-2.5 w-2.5 rounded-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
