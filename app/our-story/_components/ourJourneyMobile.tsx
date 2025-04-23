import Image from "next/image";
import { CARDS } from "./constants";

export const OurJourneyMobile = () => {
  return (
    <div className="px-5 lg:hidden space-y-10">
      <div className="text-[#F96B13] text-[42px] font-semibold leading-[46px] tracking-[-1%] text-center bg-[#FFF3EB] lg:h-[60px] w-fit rounded-[11px] items-center justify-center flex gap-[10px] px-[13px]">
        <p className="z-10">Our</p> <p className="z-10">Journey</p>
        <Image
          src="/flag.svg"
          width={42}
          height={42}
          alt={"stars"}
          className="inline-block z-10"
        />
      </div>
      <div className="space-y-[14px]">
        {CARDS.map((card, i) => {
          return card[0].type === "content" ? (
            <div
              key={i}
              className="bg-white rounded-[17px] dark:bg-black h-full w-full px-5 py-[22px] flex flex-col"
              style={{
                boxShadow:
                  "0px 96px 138px 0px rgba(0, 0, 0, 0.03), 0px 21.443px 30.824px 0px rgba(0, 0, 0, 0.05)",
              }}
            >
              {card[0].content}
            </div>
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
};
