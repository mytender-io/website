"use client";
import BookDemoForm from "@/components/ui/book-demo-form";
import Heading from "@/components/ui/heading";
import LayoutWithBorders from "@/components/ui/LayoutWithBorder";
import Slider from "@/components/ui/slider";
import SliderMobile from "@/components/ui/slider-mobile";
import Tag from "@/components/ui/tag";
import { Users } from "lucide-react";
import Image from "next/image";

export default function BookDemo() {
  const points = [
    {
      text: "In business since 2023",
      icon: "/flag.svg",
    },
    {
      text: "Trusted by over 100+ Bid writers",
      icon: "/users.svg",
    },
    {
      text: "3000+ Successful bids generated",
      icon: "/trophy.svg",
    },
    {
      text: "Double your submission speed",
      icon: "/zap-fast.svg",
    },
    {
      text: "Backed by Fuel Ventures & BlackRock",
      icon: "/certificate.svg",
    },
  ];

  return (
    <div className="w-full">
      <LayoutWithBorders top={"-20%"}>
        <div className="max-w-7xl px-5 mx-auto flex lg:flex-row pt-8 flex-col justify-between lg:mb-20">
          <div className="md:mx-auto w-full px-5 md:px-0 max-w-[610px] md:text-center lg:text-left space-y-6">
            <Tag
              text="Book a Call"
              className="text-[#F96B13] bg-white/[64%] lg:mx-0 md:mx-auto"
            >
              <Users size={20} />
            </Tag>
            <Heading
              heading="Where winning bids begin."
              subHeading="Book a demo to see how the mytender.io transforms your bid process  and generates incredible results."
              headingClassName="text-[42px] lg:text-[58px]  font-semibold text-black mb-4 leading-[62px] tracking-[-1.16px]"
              subHeadingClassName="text-[#5E6D7B] w-full font-medium text-[18px] mb-6"
            />
            <div className="w-full">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="text-[#F96B13] text-base leading-[21px] tracking-[-1%] flex py-6 border-t gap-[6px] lg:max-w-[417px] border-[#E1E1E1]"
                >
                  <Image
                    src={point.icon}
                    alt={point.text}
                    width={16}
                    height={16}
                  />
                  <p> {point.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-none md:rounded-[20px] w-full h-fit md:border-0 border-t border-[#e1e1e1] bg-[#fafafa] md:bg-white shadow-[0px_96px_138px_rgba(0,0,0,0.03),_0px_21.443px_30.824px_rgba(0,0,0,0.05)]">
            <BookDemoForm />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#E1E1E1] lg:hidde" />
        <Slider bg="bg-[#fff]" gradient="from-[#fff]" />
        <SliderMobile bg="bg-[#fff]" gradient="from-[#fff]" />
      </LayoutWithBorders>
    </div>
  );
}
