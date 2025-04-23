import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Tag({
  text,
  color,
  iconPath,
  className,
  textColor,
  children,
}: {
  text: string;
  textColor?: string;
  className?: string;
  color?: string;
  iconPath?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        `flex w-fit py-2 px-[14px] justify-center items-center gap-[6px] rounded-full bg-[${color}] backdrop-blur-[2px] text-[${textColor}] text-lg font-medium leading-[20px] `,
        className || ""
      )}
    >
      {iconPath && <Image src={iconPath} alt={text} width={24} height={24} />}
      {children}
      {text}
    </div>
  );
}
