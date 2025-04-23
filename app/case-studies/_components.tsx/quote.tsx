import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Quote({ text, by }: { text: string; by: string }) {
  return (
    <div className="space-y-8 py-2 border-l-2 border-[#F96B13] pl-5 max-w-[808px]">
      <p className="text-[#181D27] font-semibold italic text-lg lg:text-2xl leading-5 lg:leading-8">
        {text}
      </p>
      <p className={cn("text-base text-[#535862] leading-6", inter.className)}>
        {by}
      </p>
    </div>
  );
}
