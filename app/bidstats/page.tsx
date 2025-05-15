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
import styles from "./bidstats.module.css";

export default function BitStats() {
  // Create an array of banner messages that will be duplicated to ensure continuous flow
  const bannerText = "Proud to be the official BidStats partner";
  
  return (
    <>
      {/* BitStats partnership banner */}
      <div className={styles.banner}>
        <div className={styles['banner-content']}>
          {/* First set of messages */}
          {[...Array(10)].map((_, i) => (
            <p key={`first-${i}`} className={styles['banner-text']}>
              Proud to be the official <span className={styles['bidstats-text']}>BidStats</span> partner
            </p>
          ))}
          {/* Duplicate set to ensure smooth infinite scrolling */}
          {[...Array(10)].map((_, i) => (
            <p key={`second-${i}`} className={styles['banner-text']}>
              Proud to be the official <span className={styles['bidstats-text']}>BidStats</span> partner
            </p>
          ))}
        </div>
      </div>
      
      {/* Same content as the main page */}
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