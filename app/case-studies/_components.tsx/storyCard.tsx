import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StoryCard({
  imagePath,
  title,
  tag,
  description,
  storyLink,
}: {
  imagePath: string;
  title: string;
  tag: string;
  description: string;
  storyLink: string;
}) {
  return (
    <div className="min-w-[300px] max-w-[411px] w-full rounded-2xl h-full target:h-full z-10 bg-[#FAFAFA]">
      <div className="p-[10px]">
        <Image
          src={imagePath}
          alt="template"
          width={315}
          height={200}
          className="rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] max-h-[250px] object-fill w-full z-10"
          style={{
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.04)",
          }}
        />
      </div>
      <div className="px-6 pt-[14px] flex flex-col pb-6 justify-between">
        <div className="space-y-[14px]">
          <div className="flex justify-between w-full items-center">
            <p className="text-[#181D27] text-xl font-semibold leading-[30px]">
              {title}
            </p>
            <p className="px-[14px] py-2 rounded-full bg-[#FFEFE5] text-[#F96B13]">
              {tag}
            </p>
          </div>
          <p className="text-[#535862] overflow-hidden text-base leading-6 text-ellipsis">
            {description}
          </p>
        </div>
        <Link
          href={storyLink}
          className="text-[#F96B13] text-base font-semibold leading-6 flex gap-[6px] items-center mt-10"
        >
          Read Story <ChevronRight />
        </Link>
      </div>
    </div>
  );
}
