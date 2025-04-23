"use client";
import { teams } from "@/components/data/team";
import useIsMobile from "@/components/hooks/useIsMobile";
import TeamSectionWithModal from "@/components/ui/cards/TeamCardWithModal";
import TeamDialog from "@/components/ui/carousel/team/TeamDialog";
import TeamGalleryCarousel from "@/components/ui/carousel/teamgalleryCarousel/jss/EmblaCarousel";
import EmblaCarousel from "@/components/ui/carousel/teamsCarousel/js/EmblaCarousel";
import Heading from "@/components/ui/heading";
import HorizontalBorder from "@/components/ui/HorizontalBorder";
import LayoutWithBorders from "@/components/ui/LayoutWithBorder";
import Tag from "@/components/ui/tag";
import { EmblaOptionsType } from "embla-carousel";
import { Users } from "lucide-react";
import { useEffect, useState } from "react";
import "../../components/ui/carousel/teamgalleryCarousel/css/embla.css";
import "../../components/ui/carousel/teamsCarousel/css/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Team() {
  const isMobile = useIsMobile(640);

  useEffect(() => {
    console.log("isMobile", isMobile);
  }, [isMobile]);

  const team = teams;

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleViewMore = (member: any) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  return (
    <div className="w-full">
      <div className="w-fit md:text-center space-y-6 px-5 py-5 lg:py-20 max-w-7xl mx-auto">
        <Tag
          text="Team Structure"
          className="text-[#F96B13] bg-white/[64%] md:mx-auto"
        >
          <Users size={20} />
        </Tag>
        <Heading
          heading="Meet the Team"
          subHeading="It's time to meet the pit crew behind the software."
          subHeadingClassName="text-[#5E6D7B] font-medium text-[18px] mb-12"
          headingClassName="text-[42px] lg:text-[58px] font-semibold text-black mb-4"
        />
      </div>

      {isMobile ? (
        // Mobile Section
        <div className="w-full mx-auto">
          {teams.map((team) => (
            <div className="mt-4 text-center mb-8" key={team.title}>
              <p className="text-[#1C1C1C] text-4xl font-semibold leading-9 mb-4">
                {team.title}
              </p>
              <EmblaCarousel
                options={OPTIONS}
                slides={SLIDES}
                members={team.members}
                onViewMore={handleViewMore}
              />
            </div>
          ))}
          {/* Render the dialog outside the carousel */}
          {selectedMember && (
            <TeamDialog
              open={dialogOpen}
              onOpenChange={setDialogOpen}
              member={selectedMember}
            />
          )}
          <HorizontalBorder className="pb-[30px] lg:pb-[50px]" />
          <div className="mb-14 px-4">
            <h2 className="text-[#1C1C1C] text-4xl font-semibold leading-9 mb-6">
              Team Gallery
            </h2>
            <TeamGalleryCarousel options={OPTIONS} slides={SLIDES} />
          </div>
        </div>
      ) : (
        // Desktop Section
        <LayoutWithBorders>
          <HorizontalBorder className="pb-[30px] lg:pb-[50px]" />

          <div className="flex flex-col w-full max-w-7xl mx-auto">
            {teams.map((team, i) => (
              <div className="mx-auto mb-[120px]" key={`${team.title}-${i}`}>
                <p className="text-[#1C1C1C] text-4xl font-semibold leading-9">
                  {team.title}
                </p>
                <div
                  className="grid gap-[14px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full"
                  key={team.title}
                >
                  {team.members.map((member, i) => (
                    <TeamSectionWithModal
                      member={member}
                      key={`${member.name}-${i}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <HorizontalBorder className="pb-[30px] lg:pb-[50px]" />
          <div
            className="mx-auto lg:pb-[120px] max-w-7xl px-4"
            id="team-gallery"
          >
            <h2 className="text-[#1C1C1C] text-4xl font-semibold leading-9 mb-6">
              Team Gallery
            </h2>
            <TeamGalleryCarousel options={OPTIONS} slides={SLIDES} />
          </div>
        </LayoutWithBorders>
      )}
    </div>
  );
}
