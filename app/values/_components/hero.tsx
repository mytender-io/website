import Image from "next/image";

export default function OurValuesHero() {
  return (
    <div className="flex lg:justify-between lg:flex-row flex-col lg:px-5 gap-10 items-center">
      <div className="rounded-[17px] target:h-[400px] overflow-hidden w-full relative lg:w-1/2 max-w-[600px] target:max-w-[647px] hidden lg:block">
        <Image
        priority
          src="https://mytender.b-cdn.net/Values/MyTender_Photos_27.jpeg"
          alt="values"
          width={647}
          height={427}
          className="object-cover rounded-[17px]"
        />
      </div>
      <div
        className="px-8 py-[38px] lg:w-1/2 xl:max-w-[540px] target:max-w-[570px] lg:rounded-3xl space-y-7 lg:bg-white
              lg:shadow-[0px_96px_138px_0px_rgba(0,0,0,0.03),0px_21.443px_30.824px_0px_rgba(0,0,0,0.05)]
          "
      >
        <h1 className="text-[34px] text-[#1c1c1c] font-semibold leading-[42px] tracking-[-1%] max-w-[600px] mx-auto">
          Our Values
        </h1>
        <div className="bg-[#1C1C1C0A] relative rounded-[17px] h-[199px] md:h-[300px] overflow-hidden w-full max-w-[600px] mx-auto lg:hidden">
          {""}
          <Image
          priority
            src="https://mytender.b-cdn.net/Values/MyTender_Photos_27.jpeg"
            alt="values"
            width={647}
            height={427}
            className="object-cover absolute inset-0"
          />
        </div>
        <p className="text-[#5E6D7B] text-base font-medium leading-[22px] tracking-[-0.16px] mx-auto max-w-[600px] lg:max-w-[482px]">
          We are committed to demonstrating that business can and should be a
          force for good. Achieving that takes innovation, collaboration, and a
          focus on serving others. It also means leading with our values in
          procurement, the way we make our software and how we treat people and
          the planet we share
          <br />
          <br />
          We’re always working to leave the world better than we found it, and
          to create powerful tools that empower others to (win more, bid more
          and) do the same.{" "}
        </p>
        <p className="text-[#F96B13] bg-[#F96B130A] text-lg font-medium leading-6 tracing-[-1%] rounded-[12px] max-w-[600px] lg:max-w-[482px] mx-auto px-4 py-[18px]">
          “We believe business, at its best, drives positive change, uplifts
          communities across the globe, and brings people closer than ever
          before.”
        </p>
      </div>
    </div>
  );
}
