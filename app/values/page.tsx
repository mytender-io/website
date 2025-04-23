import ReadyToTransfer from "@/components/section/readyToTransfer";
import CoreValues from "@/components/ui/coreValues";
import HorizontalBorder from "@/components/ui/HorizontalBorder";
import LayoutWithBorders from "@/components/ui/LayoutWithBorder";
import FundamentalValues from "./_components/fundamentalValues";
import OurValuesHero from "./_components/hero";
import Values, { values } from "./_components/values";
import WhyUs from "./_components/whyUs";

export default function OurValues() {
  return (
    <div className="w-full">
      <LayoutWithBorders top={"-10%"}>
        <div className="max-w-[600px] overflow-x-hidden lg:max-w-7xl mx-auto space-y-20 py-10 ">
          <OurValuesHero />
        </div>
        {/* <OurJourney /> */}
        <div className="py-10 overflow-x-hidden  pb-20">
          <div className="max-w-[600px] lg:max-w-7xl mx-auto flex flex-col  lg:gap-20 lg:mb-20">
            {/* <OurJourneyMobile /> */}
            <CoreValues title={false} />
            <FundamentalValues />
            <WhyUs />
          </div>
          <HorizontalBorder />
          <div className="px-5">
            {values.map((value, i) => (
              <div id={value.text} key={`${value.text}-${i}`}>
                <Values {...value} index={i} key={value.text}>
                  {value.content}
                </Values>
                {i !== values.length - 1 && <HorizontalBorder />}
              </div>
            ))}
          </div>
        </div>
        <ReadyToTransfer />
      </LayoutWithBorders>
    </div>
  );
}
