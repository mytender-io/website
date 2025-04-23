"use client";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RiveCTAAnimation from "../rive/RiveCTAAnimation";
import { Button } from "../ui/button";

// const RiveCTAAnimation = dynamic(() => import("../rive/RiveCTAAnimation"), {
//   ssr: false, // since it's canvas-based and client-only
//   // suspense: true,
// });

export default function ReadyToTransfer() {
  return (
    <div className="max-w-7xl mx-auto relative py-16 mt-20 mb-12 lg:mb-[100px] px-5 text-center flex flex-col items-center justify-center">
      {/* <div className="absolute rounded-[20px] overflow-hidden w-[95%] lg:max-w-7xl mx-auto h-full max-h-[572px] z-[-1]">
        <RiveComponent className="w-full h-full scale-150 lg:scale-125 xl:scale-110 blur-xl" />
      </div> */}
      <RiveCTAAnimation />

      <div className="bg-[#FFF]/19 w-fit mx-auto py-2 px-4 rounded-[999px] mb-6 flex gap-[6px] items-center justify-center">
        <Image
          src="/tick.svg"
          alt="Quote Icon"
          width={20}
          height={20}
          className="size-[20px]"
        />
        <h2 className="text-white text-base font-medium leading-[20px]">
          Get Started Now
        </h2>
      </div>
      <div className="max-w-[720px] mx-auto ">
        <h3 className="text-3xl lg:text-6xl font-semibold text-white mb-4">
          Ready to transform your bid writing process?
        </h3>
        <div className="max-w-[486px] mx-auto px-4">
          <p className="text-white font-medium text-[18px] mb-12">
            Join hundreds of successful organisations that have revolutionised
            their approach to bidding with mytender.io.
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Link href="https://app.mytender.io/login" className="w-full">
          <Button variant="secondary" size="lg" className="text-foreground">
            Start now
            <ChevronRightIcon />
          </Button>
        </Link>
        <Link href="book-demo" className="w-full">
          <Button variant="default" size="lg" className="bg-background/20 hover:bg-background/10">
            Book a Demo
          </Button>
        </Link>
      </div>
    </div>
  );
}
