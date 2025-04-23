// TeamCardPreview.tsx
"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import useIsMobile from "@/components/hooks/useIsMobile";

type TeamCardPreviewProps = {
  member: any;
  onViewMore: (member: any) => void;
};

export default function TeamCardPreview({
  member,
  onViewMore,
}: TeamCardPreviewProps) {
  const isMobile = useIsMobile(640);
  return (
    <div className="relative rounded-2xl group text-center">
      <div
        className={`${
          isMobile
            ? ""
            : "absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4"
        }`}
      />
      <div
        className={`absolute ${
          isMobile
            ? "bottom-[100px] "
            : "-bottom-12 group-hover:-translate-y-20"
        } transition-all duration-300 flex justify-center w-full`}
      >
        <Button
          onClick={() => onViewMore(member)}
          className="backdrop-blur-md z-50 h-[44px] bg-white/20 text-white text-[16px] rounded-full px-4 flex items-center gap-2"
        >
          Take a Closer Look <ChevronRight />
        </Button>
      </div>
      <Image
        className="mx-auto object-cover h-auto rounded-2xl w-[90%] max-h-[300px] saturate-0"
        src={member.photo}
        alt={member.name}
        width={300}
        height={300}
      
      />
      <p className="text-[#181D27] font-semibold leading-7 text-xl mt-6">
        {member.name}
      </p>
      <p className="text-[#F96B13] leading-[26px] text-lg">{member.title}</p>
    </div>
  );
}
