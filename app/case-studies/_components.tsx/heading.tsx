import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Heading({
  children,
  className,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <h1
      id={id}
      className={cn(
        "text-[28px] text-[#181D27] font-semibold mb-5",
        inter.className,
        className
      )}
    >
      {children}
    </h1>
  );
}
