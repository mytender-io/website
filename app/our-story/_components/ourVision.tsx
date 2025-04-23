import Tag from "@/components/ui/tag";
import { Eye } from "lucide-react";
import Image from "next/image";

export default function OurVision() {
  return (
    <div className="flex relative lg:justify-between  py-20 lg:flex-row flex-col px-5 lg:px-10 lg:gap-20 gap-[49px]">
      <div className="space-y-5 lg:max-w-[500px] xl:max-w-[540px]">
        <Tag text="Our Vision" className="bg-[#FFEFE5] text-[#F96B13]">
          <Eye />
        </Tag>
        <h1 className="text-[#1C1C1C] text-[34px] lg:text-[42px] font-semibold leading-9 lg:leading-[46px] tracking-[-0.86px] target:max-w-[466px]">
          Making it simple to write & win bids
        </h1>
        <p className="text-[#5E6D7B] text-lg font-medium leading-6 tracking-[-0.16px]">
          Building a movement towards better bidding.
          <br />
          <br />
          At mytender.io we envision a world where tender responses do not
          require significant resources and a world where the bidding process
          can be fun, yes fun!
          <br />
          <br />
          We are building a community of efficient bidders who spend their time
          working on the final strategy of their bids and not in the grunt of
          looking through previous bids and building first drafts from blank
          screens.
        </p>
      </div>
      {/* <div className="flex justify-center items-center bg-[#F8F8F8] rounded-[17px] w-full max-w-[400px] md:max-w-[600px] lg:max-w-[600px] xl:w-[570px] xl:h-[480px] mx-auto lg:mx-0 h-[236px] md:h-[320px] lg:h-[380px] target:w-[641px] target:h-[508px]">
        <Image
          src={"/vision.svg"}
          width={432}
          height={387}
          alt={"vision"}
          className=" w-[215px] h-[194px] sm:w-[300px] sm:h-[280px] md:w-[300px] md:h-[280px] lg:w-[320px] lg:h-[300px] target:w-[431.6px] target:h-[386.649px]"
        />
      </div> */}
      <div
        className="flex justify-center items-center bg-[#F8F8F8] rounded-[17px] mx-auto lg:mx-0
             w-full max-w-[400px] sm:max-w-[600px] xl:w-[570px] 
             h-[236px] sm:h-[320px] lg:h-[380px] xl:h-[480px] target:w-[641px] target:h-[508px]"
      >
        <Image
          
          src="/vision.png"
          width={432}
          height={387}
          alt="Vision illustration"
          className="w-[215px] h-[194px] 
               sm:w-[300px] sm:h-[280px] 
               lg:w-[320px] lg:h-[300px] 
               target:w-[431.6px] target:h-[386.649px] 
               transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
