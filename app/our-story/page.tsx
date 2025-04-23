import Accolades from "./_components/accolades";
import CoreValues from "../../components/ui/coreValues";
import OurStoryHero from "./_components/hero";
import OurVision from "./_components/ourVision";
import LayoutWithBorders from "@/components/ui/LayoutWithBorder";
import ReadyToTransfer from "@/components/section/readyToTransfer";
import OurJourney from "./_components/ourJourney";
import { OurJourneyMobile } from "./_components/ourJourneyMobile";

export default function OurStory() {
  return (
    <div className="w-full relative overflow-hidden">
      <LayoutWithBorders top="-20%">
        <div className="max-w-[600px] lg:max-w-7xl mx-auto space-y-20 lg:pb-20">
          <OurStoryHero />
        </div>
        <OurJourney />
        <div className="max-w-[600px] lg:max-w-7xl mx-auto lg:space-y-20 lg:pb-20">
          <OurJourneyMobile />
          <div className="lg:pt-20">
            <CoreValues title={true} />
          </div>
          <OurVision />
          <Accolades />
        </div>
        <div className="w-full h-full mx-auto lg:w-[95%]">
          <ReadyToTransfer />
        </div>
      </LayoutWithBorders>
    </div>
  );
}
