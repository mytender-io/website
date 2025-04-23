"use client";

import { cn } from "@/lib/utils";
import { Handshake, Smile, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CoreValues = ({
  title,
  mobile,
}: {
  title?: boolean;
  mobile?: boolean;
}) => {
  const pathname = usePathname();
  const isOnOurStoryPage = pathname?.includes("/our-story");

  const coreValues = [
    {
      text: "Quality",
      iconPath:
        "M7.1263 35.3337V27.417M7.1263 11.5837V3.66699M3.16797 7.62533H11.0846M3.16797 31.3753H11.0846M20.5846 5.25033L17.8389 12.3894C17.3923 13.5503 17.1691 14.1308 16.8219 14.619C16.5142 15.0518 16.1361 15.4299 15.7034 15.7376C15.2151 16.0848 14.6346 16.308 13.4737 16.7545L6.33464 19.5003L13.4737 22.2461C14.6346 22.6926 15.2151 22.9159 15.7034 23.2631C16.1361 23.5708 16.5142 23.9489 16.8219 24.3816C17.1691 24.8699 17.3923 25.4503 17.8389 26.6113L20.5846 33.7503L23.3304 26.6113C23.7769 25.4503 24.0002 24.8699 24.3474 24.3816C24.6551 23.9489 25.0332 23.5708 25.4659 23.2631C25.9542 22.9159 26.5347 22.6926 27.6956 22.2461L34.8346 19.5003L27.6956 16.7545C26.5347 16.308 25.9542 16.0848 25.4659 15.7376C25.0332 15.4299 24.6551 15.0518 24.3474 14.619C24.0002 14.1308 23.7769 13.5503 23.3304 12.3894L20.5846 5.25033Z",
    },
    {
      text: "Trust",
      icon: Handshake,
    },
    {
      text: "Simplicity",
      icon: Star,
    },
    {
      text: "Speed",
      iconPath:
        "M15.0026 29.6667H5.83594M10.8359 20.5H3.33594M15.0026 11.3333H6.66927M28.3359 5.5L17.3419 20.8917C16.8553 21.5729 16.612 21.9136 16.6225 22.1975C16.6317 22.4448 16.7502 22.6752 16.9461 22.8264C17.1711 23 17.5897 23 18.4269 23H26.6693L25.0026 35.5L35.9967 20.1083C36.4833 19.4271 36.7266 19.0864 36.716 18.8025C36.7069 18.5552 36.5883 18.3248 36.3924 18.1736C36.1675 18 35.7489 18 34.9117 18H26.6693L28.3359 5.5Z",
    },
    {
      text: "Fun",
      icon: Smile,
    },
  ];

  return (
    <div className={`space-y-8 ${mobile ? "" : "hidden lg:block"}`}>
      {title && (
        <div className="text-[#F96B13] text-[42px] font-semibold leading-[46px] tracking-[-1%] text-center bg-[#FFF3EB] lg:h-[60px] w-fit rounded-[11px] items-center justify-center flex gap-[10px] px-[13px] mx-auto">
          <p>Core</p> <p>Values</p>
          <Image
            src="/stars.svg"
            width={42}
            height={42}
            alt={"stars"}
            className="inline-block"
          />
        </div>
      )}

      <div className="w-full flex relative mb-20">
        <div className="w-[200vw] border-t absolute -left-1/2"></div>
        <div className="w-[200vw] border-t absolute -left-1/2 bottom-0"></div>
        {coreValues.map((value, i) => {
          const href = isOnOurStoryPage
            ? `/values/#${value.text}`
            : `#${value.text}`;

          return (
            <Link
              href={href}
              key={i}
              className={cn(
                "w-1/2 group lg:h-[200px] xl:h-[279px] cursor-pointer flex gap-[10px] items-center text-[#C8C8C8] hover:text-[#1c1c1c] transition-all duration-300 border-r justify-center",
                `${i === coreValues.length - 1 ? "border-r-0" : ""}`
              )}
            >
              {value.icon ? (
                <value.icon size={40} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  stroke="#C8C8C8"
                  className="group-hover:stroke-[#1c1c1c] duration-300 transition-all"
                >
                  <path
                    d={value.iconPath}
                    strokeWidth="3.15789"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <p className="lg:text-2xl xl:text-[38px] font-medium leading-[46px] tracking-[-0.76px]">
                {value.text}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CoreValues;
