import { testimonials } from "@/components/data/testimonial";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useRef } from "react";
import TestimonialCard from "../../../cards/testimonialCard";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const TWEEN_FACTOR_BASE = 0.84;
const AUTOPLAY_INTERVAL = 3500; // ≈ 3.5 s

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

interface PropType {
  slides: number[];
  options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options });
  const carouselRootRef = useRef<HTMLDivElement>(null);
  const tweenFactor = useRef(0);
  const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((embla: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * embla.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (embla: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = embla.internalEngine();
      const scrollProgress = embla.scrollProgress();
      const slidesInView = embla.slidesInView();
      const isScrollEvent = eventName === "scroll";

      embla.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;
          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();
              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);
                if (sign === -1)
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                if (sign === 1)
                  diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            });
          }

          /**
           * Optionally uncomment if you wish to fade neighbouring slides.
           * Keeping it commented because TestimonialCard already has its own
           * styles and animations.
           */
          // const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          // const opacity = numberWithinRange(tweenValue, 0.5, 1).toString()
          // embla.slideNodes()[slideIndex].style.opacity = opacity
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);

    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity, setTweenFactor]);

  useEffect(() => {
    if (!emblaApi) return;

    const play = () => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    };
    autoplayTimer.current = setInterval(play, AUTOPLAY_INTERVAL);
    const root = carouselRootRef.current;
    if (!root) return;

    const pause = () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
    const resume = () => {
      autoplayTimer.current = setInterval(play, AUTOPLAY_INTERVAL);
    };

    root.addEventListener("mouseenter", pause);
    root.addEventListener("focusin", pause);
    root.addEventListener("mouseleave", resume);
    root.addEventListener("focusout", resume);

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
      root.removeEventListener("mouseenter", pause);
      root.removeEventListener("focusin", pause);
      root.removeEventListener("mouseleave", resume);
      root.removeEventListener("focusout", resume);
    };
  }, [emblaApi]);
  return (
    <div className="test_embla" ref={carouselRootRef}>
      <div className="test_embla__viewport" ref={emblaRef}>
        <div className="test_embla__container">
          {testimonials.map((testimonial, idx) => (
            <div className="test_embla__slide" key={idx}>
              <div className="test_embla__slide__number">
                <TestimonialCard {...testimonial} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex gap-3">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`size-[10px] rounded-full flex items-center justify-center relative cursor-pointer transition-all duration-300 ${
                index === selectedIndex ? "bg-[#F96B13]" : "bg-[#E9EAEB]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
