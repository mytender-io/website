import { EmblaOptionsType } from "embla-carousel";

export interface TestimonialCardProps {
    logo: string;
    quote: string;
    authorName: string;
    authorPosition: string;
    authorImage?: string;
  }

 export type PropType = {
    slides: number[]
    options?: EmblaOptionsType
    steps?: TestimonialCardProps
}
  