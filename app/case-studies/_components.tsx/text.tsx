import { cn } from "@/lib/utils";

export default function Text({
  children,
  className,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <p id={id} className={cn("text-lg text-[#535862] leading-7", className)}>
      {children}
    </p>
  );
}
