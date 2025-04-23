import { Check, ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import Heading from "../ui/heading";
import Tag from "../ui/tag";

import Link from "next/link";
import RiveRPFAnimation from "../rive/RiveRPFAnimation";
import Image from "next/image";

export default function RPFSection() {
  const features = [
    'AI-driven "first-drafts" based on your past successful bids',
    "Real-time collaboration with your entire team",
    "Smart project collaboration tools to track progress",
    "Automatic compliance checking against tender requirements",
  ];

  return (
    <div className="w-full">
      <div className="w-full h-full lg:flex-row flex-col flex py-14 gap-12 lg:justify-between px-5 lg:px-5 xl:px-0 lg:max-w-7xl mx-auto">
        <div className="space-y-6 w-full lg:w-1/2">
          <div className="space-y-5">
            <Tag
              text={"Respond Faster to RFPs"}
              iconPath={"/zap-fast.svg"}
              textColor={"#F96B13"}
              color={"#FFEFE5"}
            />
            <Heading
              heading={"Complete bids in half the time"}
              subHeading="Get ahead of the competition with our intelligent bid writing assistant. Our platform helps you respond to tenders faster and with higher quality."
              headingClassName="text-[#1C1C1C]"
              subHeadingClassName="text-[#5E6D7B] text-base leading-6 tracking-[-1%]"
            />
          </div>
          <div className="space-y-[14px] text-[#5E6D7B] text-base leading-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-[6px]">
                <Check size={16} color="#4DCB6F" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
          <Link href="/book-demo" className="w-full">
            <Button variant="default" size="lg">
              Start now
              <ChevronRightIcon />
            </Button>
          </Link>
        </div>
        <div className="w-full relative lg:w-1/2">
          <Image
            src="/rpf.png"
            width={661}
            height={370}
            alt="RPF"
            className="w-full rounded-2xl overflow-hidden object-cover lg:hidden"
          />
          <RiveRPFAnimation />
        </div>
      </div>
    </div>
  );
}
