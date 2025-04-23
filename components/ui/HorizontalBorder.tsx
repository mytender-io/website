import { cn } from "@/lib/utils";

export default function HorizontalBorder({
  className,
  borderStyles,
}: {
  className?: string;
  borderStyles?: string;
}) {
  return (
    <div
      className={cn(
        "w-full max-w-screen relative overflow-hidden h-[1px] z-30",
        className
      )}
    >
      <div
        className={cn(
          "absolute w-[200vw] -left-full border border-[#23385E2B] border-dashed z-50",
          borderStyles
        )}
      ></div>
    </div>
  );
}
