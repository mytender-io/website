"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";
import { AnimatedGridPattern } from "./animatedGridPattern";
import { CardStack } from "./cardStack";
import { CARDS } from "./constants";

export default function OurJourney() {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const path0Ref = useRef<SVGPathElement>(null);
  const path0BgRef = useRef<SVGPathElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path1BgRef = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path2BgRef = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);
  const path3BgRef = useRef<SVGPathElement>(null);
  const path4Ref = useRef<SVGPathElement>(null);
  const path4BgRef = useRef<SVGPathElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const path0Length = useTransform(scrollYProgress, [0, 0.22], [0, 1]);
  const path1Length = useTransform(scrollYProgress, [0.23, 0.3], [0, 1]);
  const path2Length = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const path3Length = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const path4Length = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  const updatePaths = () => {
    updatePath1(card1Ref, card2Ref, path1Ref, path1BgRef, containerRef);
    updatePath2(card2Ref, card3Ref, path2Ref, path2BgRef, containerRef);
    updatePath1(card3Ref, card4Ref, path3Ref, path3BgRef, containerRef);
    updatePath2(card4Ref, card5Ref, path4Ref, path4BgRef, containerRef);

    const endX = 200;
    const endY = 250;
    const curve = `M${-200},${250} C${0 - 200},${180} ${endX},${endY - 50} ${
      endX + 270
    },${endY}`;
    path0BgRef.current?.setAttribute("d", curve);
    path0Ref.current?.setAttribute("d", curve);
  };

  useEffect(() => {
    updatePaths();
    window.addEventListener("resize", updatePaths);
    return () => {
      window.removeEventListener("resize", updatePaths);
    };
  }, []);

  const updatePath1 = (
    card1Ref: RefObject<HTMLDivElement | null>,
    card2Ref: RefObject<HTMLDivElement | null>,
    path1Ref: RefObject<SVGPathElement | null>,
    path1BgRef: RefObject<SVGPathElement | null>,
    containerRef: RefObject<HTMLDivElement | null>
  ) => {
    if (
      !card1Ref.current ||
      !card2Ref.current ||
      !path1Ref.current ||
      !containerRef.current ||
      !path1BgRef.current
    )
      return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const rect1 = card1Ref.current.getBoundingClientRect();
    const rect2 = card2Ref.current.getBoundingClientRect();

    const startX = rect1.right - containerRect.left;
    const startY = rect1.top - containerRect.top + rect1.height / 2;
    const endX = rect2.left - containerRect.left;
    const endY = rect2.top - containerRect.top + rect2.height / 2;

    const curve = `M${startX - 200},${startY} C${startX + 100},${startY} ${
      endX - 100
    },${endY} ${endX},${endY}`;

    path1Ref.current.setAttribute("d", curve);
    path1BgRef.current.setAttribute("d", curve);
  };
  const updatePath2 = (
    card1Ref: RefObject<HTMLDivElement | null>,
    card2Ref: RefObject<HTMLDivElement | null>,
    path1Ref: RefObject<SVGPathElement | null>,
    path1BgRef: RefObject<SVGPathElement | null>,
    containerRef: RefObject<HTMLDivElement | null>
  ) => {
    if (
      !card1Ref.current ||
      !card2Ref.current ||
      !path1Ref.current ||
      !containerRef.current ||
      !path1BgRef.current
    )
      return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const rect1 = card1Ref.current.getBoundingClientRect();
    const rect2 = card2Ref.current.getBoundingClientRect();

    const startX = rect1.right - containerRect.left;
    const startY = rect1.top - containerRect.top + rect1.height / 2;
    const endX = rect2.left - containerRect.left;
    const endY = rect2.top - containerRect.top + rect2.height / 2;

    const curve = `M${startX - 200},${startY + 100} C${startX - 200},${
      startY - 50
    } ${endX},${endY} ${endX + 220},${endY}`;

    path1Ref.current.setAttribute("d", curve);
    path1BgRef.current.setAttribute("d", curve);
  };

  return (
    <div className="w-full overflow-hidden max-w-[1920px] mx-auto bg-[#FAFAFA]">
      <div className="w-full relative border mx-auto hidden lg:block">
        <AnimatedGridPattern
          numSquares={60}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(52.19%_100%_at_50%_0%,#000_0%,rgba(0,0,0,0.00)_95.31%)]",
            "inset-x-0 inset-y-0 h-full "
          )}
        />
        <div className="2000:hidden">
          {" "}
          <svg className="absolute top-0 z-10 left-0 w-full h-full pointer-events-none">
            <motion.path
              ref={path0Ref}
              stroke={"#FF2424"}
              pathLength={path0Length}
              fill={"transparent"}
              strokeWidth={3}
            />
          </svg>
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <motion.path
              ref={path0BgRef}
              stroke={"#fff"}
              fill={"transparent"}
              strokeWidth={16}
            />
          </svg>
        </div>
        <div className="py-[61px] overflow-hidden">
          <div className="text-[#F96B13] text-[42px] font-semibold leading-[46px] tracking-[-1%] text-center bg-[#FFF3EB] lg:h-[60px] w-fit rounded-[11px] items-center justify-center flex gap-[10px] px-[13px] mx-auto">
            <p className="z-10">Our</p> <p className="z-10">Journey</p>
            <Image
              src="/flag.svg"
              width={42}
              height={42}
              alt={"stars"}
              className="inline-block z-10"
            />
          </div>
          <div
            ref={containerRef}
            className="w-full relative pt-10 max-w-[1000px] min-h-[1200px] mx-auto "
          >
            <div>
              <svg className="absolute top-0 z-10 left-0 w-full h-full pointer-events-none">
                <motion.path
                  ref={path1Ref}
                  stroke={"#FF2424"}
                  pathLength={path1Length}
                  fill={"transparent"}
                  strokeWidth={3}
                />
              </svg>
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <motion.path
                  ref={path1BgRef}
                  stroke={"#ffffff"}
                  fill={"transparent"}
                  strokeWidth={16}
                />
              </svg>

              <svg className="absolute top-0 z-10 left-0 w-full h-full pointer-events-none">
                <motion.path
                  ref={path2Ref}
                  stroke={"#24BDFF"}
                  pathLength={path2Length}
                  fill={"transparent"}
                  strokeWidth={3}
                />
              </svg>
              <svg className="absolute z-0 top-0 left-0 w-full h-full pointer-events-none">
                <motion.path
                  ref={path2BgRef}
                  stroke={"#fff"}
                  fill={"transparent"}
                  strokeWidth={16}
                />
              </svg>
              <svg className="absolute top-0 z-10 left-0 w-full h-full pointer-events-none">
                <motion.path
                  ref={path3Ref}
                  stroke={"#24BDFF"}
                  pathLength={path3Length}
                  fill={"transparent"}
                  strokeWidth={3}
                />
              </svg>
              <svg className="absolute z-0 top-0 left-0 w-full h-full pointer-events-none">
                <motion.path
                  ref={path3BgRef}
                  stroke={"#fff"}
                  fill={"transparent"}
                  strokeWidth={16}
                />
              </svg>
              <svg className="absolute top-0 z-10 left-0 w-full h-full pointer-events-none">
                <motion.path
                  ref={path4Ref}
                  stroke={"#FFCC24"}
                  pathLength={path4Length}
                  fill={"transparent"}
                  strokeWidth={3}
                />
              </svg>
              <svg className="absolute z-0 top-0 left-0 w-full h-full pointer-events-none">
                <motion.path
                  ref={path4BgRef}
                  stroke={"#fff"}
                  fill={"transparent"}
                  strokeWidth={16}
                />
              </svg>
            </div>

            {/* <CardStack items={CARD} className="rotate-5" /> */}
            <div className="absolute lg:left-20 xl:left-0 top-10 w-[380px] xl:w-[380px] z-20">
              <CardStack
                ref={card1Ref}
                items={CARDS[0]}
                className="rotate-5"
                height={300}
                autoRotate={false}
              />
            </div>

            <div className="absolute lg:left-20 xl:left-0 top-[500px] w-[380px] xl:w-[380px] z-20">
              <CardStack
                ref={card3Ref}
                items={CARDS[2]}
                className="rotate-2"
                height={230}
                autoRotate={false}
              />
            </div>
            <div className="absolute lg:left-20 xl:left-0 top-[850px] xl:top-[950px] w-[380px] xl:w-[380px] z-20">
              <CardStack
                ref={card5Ref}
                items={CARDS[4]}
                className="rotate-5"
                height={260}
                autoRotate={false}
              />
            </div>

            <div className="absolute right-20 xl:-right-10 w-[380px] xl:w-[380px] top-[220px] xl:top-[250px]  z-20">
              <CardStack
                ref={card2Ref}
                items={CARDS[1]}
                className="-rotate-5"
                height={310}
                autoRotate={false}
              />
            </div>
            <div className="absolute right-20 xl:-right-10 w-[380px] xl:w-[380px] top-[650px]  z-20">
              <CardStack
                ref={card4Ref}
                items={CARDS[3]}
                className="-rotate-1"
                height={340}
                autoRotate={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
