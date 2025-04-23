import { TestimonialCardProps } from "@/components/types";
import Image from "next/image";

function truncate(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength).trim() + "…" : text;
}

export default function TestimonialCard({
  logo,
  quote,
  authorName,
  authorPosition,
  authorImage,
}: TestimonialCardProps) {
  return (
    <div className="bg-[#FAFAFA] rounded-[20px] p-6  flex flex-col justify-between min-h-[236px] lg:min-h-[294px]">
      <div>
        {logo && (
          <div className="mb-4">
            <Image
              src={logo}
              alt="Company Logo"
              width={1}
              height={1}
              className="w-[102px] h-[28px] object-contain"
            />
          </div>
        )}
        <p className="text-[20px] lg:text-[28px] text-[#181D27] font-medium leading-[32px] mb-6">
          “{truncate(quote, 210)}”
        </p>
      </div>
      <div className="flex items-start space-x-3">
        {authorImage && (
          <Image
            src={authorImage}
            alt={authorName}
            width={48}
            height={48}
            className="rounded-full w-[48px] h-[48px] object-cover"
          />
        )}
        <div className="text-left">
          <p className="text-base text-[#181D27] font-semibold leading-[20px]">
            — {authorName}
          </p>
          <p className="text-base text-[#535862] leading-[20px]">
            {authorPosition}
          </p>
        </div>
      </div>
    </div>
  );
}
