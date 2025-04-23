"use client";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import useIsMobile from "../hooks/useIsMobile";
import "../ui/carousel/testimonialCarousel/css/embla.css";
import EmblaCarousel from "../ui/carousel/testimonialCarousel/js/EmblaCarousel";
import { ProgressiveBlur } from "../ui/progressive-blur";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Testimonials() {
  const isMobile = useIsMobile();
  return (
    <>
    <div className="lg:mb-24">
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#FFEFE5] w-fit mx-auto py-2 px-4 rounded-[999px] mb-4 flex gap-[6px] items-center justify-center">
          <Image
            src="/Icon.svg"
            alt="Quote Icon"
            width={20}
            height={20}
            className="size-[20px] "
          />
          <h2 className="text-[#F96B13] text-base font-medium leading-[20px]">
            What Clients Say
          </h2>
        </div>
        <div className="max-w-[685px] mx-auto">
          <h3 className="text-[34px] lg:text-[42px] leading-[110%] font-semibold text-[#1C1C1C] mb-4">
            Trusted by bid teams everywhere
          </h3>
          <div className="max-w-[486px] mx-auto px-4">
            <p className="text-[#5E6D7B] font-medium text-[18px]">
              Our platform provides everything you need to create winning bids
              with less effort and more creativity.
            </p>
          </div>
        </div>
      </div>

      <div className="relative pt-9 lg:pt-12 z-50 bg-white max-w-[1980px] mx-auto">
        {isMobile ? (
          <>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </>
        ) : (
          <>
            <ProgressiveBlur
              className="pointer-events-none z-[50] absolute lg:top-[-50%] top-20 -left-0 lg:h-[700px] h-[500px] w-[200px]"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none z-[50] absolute lg:top-[-50%] top-20 -right-0 lg:h-[700px] h-[500px] w-[200px]"
              direction="right"
              blurIntensity={1}
            />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </>
        )}
      </div>
      </div>
    </>
  );
}
