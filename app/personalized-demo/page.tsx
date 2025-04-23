"use client"
import Heading from "@/components/ui/heading";
import Slider from "@/components/ui/slider";
import SliderMobile from "@/components/ui/slider-mobile";
import Tag from "@/components/ui/tag";
import { Users } from "lucide-react";
import CalendlyEmbed from "./_components/calendlyEmbed";
import LayoutWithBorders from "@/components/ui/LayoutWithBorder";

export default function PersonalizedDemo() {
  return (
    <div className="w-full relative">
      <LayoutWithBorders top={"-20%"}>
        <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center gap-8 lg:gap-12">
          <div className="md:mx-auto w-fit md:text-center space-y-6 px-5 py-5">
            <Tag
              text="Book a Call"
              className="text-[#F96B13] bg-white/[64%] md:mx-auto"
            >
              <Users size={20} />
            </Tag>
            <Heading
              heading="Book your personalised demo"
              subHeading="To book in your demo, let us know what describes you best"
              subHeadingClassName="text-[#5E6D7B] font-medium text-[18px]"
              headingClassName="text-[42px] lg:text-[58px]  font-semibold text-black mb-4"
            />
          </div>
          <CalendlyEmbed url="https://calendly.com/mytender_io/mytender-io-discovery-call?month=2025-04" />
          {/* <iframe
          src="https://calendly.com/mytender_io/mytender-io-discovery-call?month=2025-04"
          className="lg:w-[1012px] mx-auto lg:h-[558px] w-[80%] aspect-video"
        ></iframe> */}

          <div className=" w-screen border-t"></div>
          <Slider bg="bg-[#fff]" gradient="from-[#fff]" />
          <SliderMobile bg="bg-[#fff]" gradient="from-[#fff]" />
          <div className=" w-screen border-t"></div>
        </div>
      </LayoutWithBorders>
    </div>
  );
}
