"use client";
import FeatureSection from "@/components/section/features";
import Hero from "@/components/section/hero";
import Metrics from "@/components/section/metrics";
import ReadyToTransfer from "@/components/section/readyToTransfer";
import RPFSection from "@/components/section/RPF";
import SecurityAndCompliance from "@/components/section/security";
import Testimonials from "@/components/section/testimonial";
import LayoutWithBorders from "@/components/ui/LayoutWithBorder";
import Slider from "@/components/ui/slider";
import SliderMobile from "@/components/ui/slider-mobile";

export default function Home() {
  return (
    <>
      <Hero />
      <LayoutWithBorders zIndex={2}>
        <Metrics />
        <Slider />
        <SliderMobile />
        <FeatureSection />
        <RPFSection />
        <SecurityAndCompliance />
        <Testimonials />
        <div className="w-full h-full mx-auto lg:w-[95%] ">
          <ReadyToTransfer />
        </div>
      </LayoutWithBorders>
    </>
  );
}
