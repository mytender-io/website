"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useRive } from "@rive-app/react-webgl2";

type TeamDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  member: any;
};

export default function TeamDialog({
  open,
  onOpenChange,
  member,
}: TeamDialogProps) {
  if (!member) return null;

  const { rive, RiveComponent } = useRive(
    {
      src: "/riv/glow.riv",
      stateMachines: "machine",
      autoplay: true,
    },
    {
      useDevicePixelRatio: true,
    }
  );
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          " bg-white h-full w-full px-4 py-6 flex flex-col overflow-y-scroll overflow-x-clip rounded-none z-[9999999]"
        )}
      >
        <RiveComponent className="absolute inset-0 -top-75 bg-transparent border-8 h-screen w-screen object-cover z-[-1] blur" />

        <DialogClose
          className="
            absolute top-[25px] left-4
            px-4 py-2 text-sm font-medium
            text-gray-600 bg-white/64
            rounded-full shadow-sm
          "
        >
          <div className="flex font-semibold text-[16px] items-center justify-center  text-[#F96B13] rounded-[100px] cursor-pointer">
            <ChevronLeft width={20} height={20} className="w-[20px] h-[20px]" />
            <p>Back</p>
          </div>
        </DialogClose>

        <div className="mt-12 flex flex-col items-start">
          <Image
            src={member.photo}
            alt={member.name}
            width={600}
            height={600}
            className="object-cover w-full rounded-lg saturate-0 h-[300px]"
          />
          <h3 className="text-2xl font-semibold text-[#181D27] mt-4 mb-1 text-start">
            {member.name}
          </h3>
          <p className="text-[#F96B13] text-lg mb-4 text-start">
            {member.title}
          </p>
          <div className="text-[#535862]  text-sm leading-relaxed mb-2">
            {member.description1 && <p>{member.description1}</p>}
            <div className="h-[1px] w-full bg-[#E1E1E1] my-1" />
            {member.description2 && <p>{member.description2}</p>}
            <div className="h-[1px] w-full bg-[#E1E1E1] my-1" />
            {member.description3 && <p>{member.description3}</p>}
            <div className="h-[1px] w-full bg-[#E1E1E1] my-1" />
            {member.description4 && <p>{member.description4}</p>}
          </div>
          {member.linkedInURL && (
            <a href={member.linkedInURL} target="_blank" rel="noreferrer">
              <div className="bg-[#1C1C1C] w-[196px] h-[44px] text-white  flex items-center justify-center   rounded-full">
                <p className="text-md font-semibold ">Connect on LinkedIn</p>
                <ChevronRight />
              </div>
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
