import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BreadCrumb({
  text,
  url,
}: {
  text: string;
  url: string;
}) {
  return (
    <div className="text-base w-fit bg-white/[64%] font-medium py-2 px-[14px] flex gap-[6px] rounded-full justify-between">
      <Link href="/case-studies" className="text-[#F96B13]">
        All Case Studies
      </Link>
      <ChevronRight color="rgba(0,0,0,0.24)" />
      <Link href={`/case-studies/${url}`} className="text-[#F96B13]">
        {text}
      </Link>
    </div>
  );
}
