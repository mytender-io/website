"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

type TeamDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  member: any;
};

export default function DialogTeam({
  open,
  onOpenChange,
  member,
}: TeamDialogProps) {
  if (!member) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Content
          className={cn(
            "fixed w-[100px] h-[100px] z-50 bg-black px-4 py-6 flex flex-col overflow-y-auto sm:rounded-none"
          )}
        >
          <Dialog.Title className="sr-only">Team Member Details</Dialog.Title>
          <Dialog.Description className="sr-only">
            Detailed information about {member.name}
          </Dialog.Description>

          <Dialog.Close
            className="
            z-50
              absolute top-4 left-4
              px-4 py-2 text-sm font-medium
              text-gray-600 bg-white/90
              rounded-full shadow-sm
            "
          >
            Back
          </Dialog.Close>
          <div className="mt-12 flex flex-col items-center">
            <Image
              src={member.photo}
              alt={member.name}
              width={600}
              height={600}
              className="object-cover w-full h-auto rounded-lg saturate-0"
            />

            <h3 className="text-2xl font-semibold text-[#181D27] mt-4 mb-1 text-center">
              {member.name}
            </h3>
            <p className="text-[#F96B13] text-lg mb-4 text-center">
              {member.title}
            </p>
            <div className="text-[#535862] text-sm leading-relaxed space-y-2 text-center">
              {member.description1 && <p>{member.description1}</p>}
              {member.description2 && <p>{member.description2}</p>}
              {member.description3 && <p>{member.description3}</p>}
              {member.description4 && <p>{member.description4}</p>}
            </div>
            {member.linkedInURL && (
              <a
                href={member.linkedInURL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center bg-[#1C1C1C] w-[196px] h-[44px] rounded-full text-white"
              >
                <span className="mr-2 font-semibold">Connect on LinkedIn</span>
                <ChevronRight />
              </a>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
