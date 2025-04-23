import React, { useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
import { TeamGallery } from "@/components/data/teamgallery";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const TeamGalleryCarousel: React.FC<PropType> = ({ slides, options }) => {
  const progressNode = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  return (
    <div className="gal_embla">
      <div className="gal_embla__viewport" ref={emblaRef}>
        <div className="gal_embla__container">
          {TeamGallery.map((data, index) => (
            <div className="gal_embla__slide" key={index}>
              <div className="gal_embla__slide__number">
                <div className="relative w-[500px] h-[500px]">
                  <Image
                    src={data.src}
                    alt={data.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div
          className={`gal_embla__progress${
            showAutoplayProgress ? "" : " gal_embla__progress--hidden"
          }`}
        >
          <div className="gal_embla__progress__bar" ref={progressNode} />
        </div>
      </div>
    </div>
  );
};

export default TeamGalleryCarousel;
