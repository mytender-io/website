import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Sidebar({
  title,
  section,
}: {
  title: string;
  section: number;
}) {
  return (
    <div className="sticky top-0 h-full pt-5">
      <div className="border-t hidden lg:block pt-8 font-medium leading-6 h-fit xl:w-[240px] ">
        <p className="text-[#F96B13] pb-4 font-bold">In this Story</p>
        <div className="flex flex-col gap-3 pb-16">
          <Link href={`#${title}`}>
            <p
              className={`
              ${
                section === 0
                  ? "text-[#535862] font-semibold"
                  : "text-[#9CA4AA] font-medium"
              }`}
            >
              Meet {title}
            </p>
          </Link>
          <Link href={`#Challenge`}>
            <p
              className={`${
                section === 1
                  ? "text-[#535862] font-semibold"
                  : "text-[#9CA4AA]  font-medium"
              }`}
            >
              The Challenge
            </p>
          </Link>
          <Link href={`#Solution`}>
            <p
              className={`${
                section === 2
                  ? "text-[#535862] font-semibold"
                  : "text-[#9CA4AA]  font-medium"
              }`}
            >
              The Solution
            </p>
          </Link>
        </div>
        <Link href={"/book-demo"}>
          <Button
            variant={"outline"}
            className="bg-black text-white h-11 text-base font-semibold"
          >
            Book a Demo <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
