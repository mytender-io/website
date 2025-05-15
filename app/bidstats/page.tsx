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
import Link from "next/link";

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
      
      {/* Free trial button */}
      <div className={styles.buttonContainer}>
        <Link href="https://buy.stripe.com/eVa03xfjPd8Egq44gs" className={styles.freeTrialButton}>
          Enjoy 30 days free
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7 18.3c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L13.6 12 8.3 6.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4l-6 5.6z" fill="white"/>
          </svg>
        </Link>
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