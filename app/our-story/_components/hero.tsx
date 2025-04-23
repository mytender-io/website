import Image from "next/image";

export default function OurStoryHero() {
  return (
    <div className="flex lg:justify-between lg:flex-row flex-col lg:px-5 items-center gap-10">
      <div className="rounded-[17px] target:h-[400px] overflow-hidden w-full relative lg:w-1/2 max-w-[600px] target:max-w-[647px] hidden lg:block">
        <Image
        priority
          src="/our-story.png"
          alt="our-story"
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
          Our Story
        </h1>
        <div className="bg-[#1C1C1C0A] relative rounded-[17px] h-[199px] md:h-[300px] overflow-hidden w-full max-w-[600px] mx-auto lg:hidden">
          <Image
            src="/our-story.png"
            alt="our-story"
            width={647}
            height={427}
            className="object-cover absolute inset-0"
          />
        </div>
        <p className="text-[#5E6D7B] text-base font-medium leading-[22px] tracking-[-0.16px] mx-auto max-w-[600px] lg:max-w-[482px]">
          AI Enthusiasts bring AI to the public sector bidding world. After
          Jamie, Sam and Josh implemented an AI bid writing system to support a
          Facility Management SME in the UK to manage the resource-intensity of
          writing bids. The team then collaborated with leading bidding experts
          to build a truly sensational bid writing tool, so you can write better
          bids!
          <br />
          <br />
          We are happy to disclose our dislike for boring, complicated and slow
          software systems. So we guarantee that the mytender.io platform is
          effective, simple and easy-to-use (we keep all the complex stuff in
          the background, because who wants to see that).{" "}
        </p>
        <p className="text-[#F96B13] bg-[#F96B130A] text-lg font-medium leading-6 tracing-[-1%] rounded-[12px] max-w-[600px] lg:max-w-[482px] mx-auto px-4 py-[18px]">
          The team are proud to have won multiple awards with the likes of
          Venturefest South Innovators award, Santander X 100 and SetSquared- so
          you'll be in good company.
        </p>
      </div>
    </div>
  );
}
