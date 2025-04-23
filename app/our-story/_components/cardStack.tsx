"use client";
import { useEffect, useState } from "react";
import type React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

let interval: any;

type Card = {
  id: number;
  type: "content" | "image";
  content?: React.ReactNode;
  imageSrc?: string;
};

export const CardStack = ({
  items,
  offset,
  ref,
  scaleFactor,
  autoRotate = true,
  rotationInterval = 5000,
  className,
  height = 400,
}: {
  items: Card[];
  ref?: React.RefObject<HTMLDivElement | null>;
  offset?: number;
  scaleFactor?: number;
  autoRotate?: boolean;
  rotationInterval?: number;
  className?: string;
  height?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (autoRotate) {
      startFlipping();
    }

    return () => clearInterval(interval);
  }, [autoRotate]);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, rotationInterval);
  };

  const handleCardClick = (index: number) => {
    if (index === 0) {
      clearInterval(interval);

      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });

      if (autoRotate) {
        startFlipping();
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`relative w-full max-w-md min-w-[380px]`}
      style={{
        height: `${height}px`,
      }}
    >
      {cards.map((card, index) => {
        const isTopCard = index === 0;
        const isBackCard = index === 1;

        const xOffset = isBackCard ? -15 : 0;
        const yOffset = isBackCard ? -10 : 0;
        const rotation = isBackCard ? -5 : 0;

        return (
          <motion.div
            key={card.id}
            className={cn(
              `absolute w-full h-full rounded-3xl shadow-xl border border-neutral-200 dark:border-white/[0.1] overflow-hidden ${
                isTopCard ? "cursor-pointer" : ""
              }`,
              className
            )}
            style={{
              transformOrigin: "center center",
            }}
            animate={{
              top: `calc(${index * -CARD_OFFSET}px + ${yOffset}px)`,
              left: `${xOffset}px`,
              rotate: rotation,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: isTopCard ? 10 : 5,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            whileHover={
              isTopCard
                ? {
                    scale: 1.03 - index * SCALE_FACTOR,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                    rotate: 0,
                  }
                : undefined
            }
            onClick={() => handleCardClick(index)}
            onHoverStart={() => isTopCard && setHoveredIndex(index)}
            onHoverEnd={() => isTopCard && setHoveredIndex(null)}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1,
            }}
          >
            {card.type === "content" ? (
              <div
                className="bg-white dark:bg-black h-full w-full p-5 sm:p-6 flex flex-col"
                style={{
                  boxShadow:
                    "0px 96px 138px 0px rgba(0, 0, 0, 0.03), 0px 21.443px 30.824px 0px rgba(0, 0, 0, 0.05)",
                }}
              >
                {card.content}
              </div>
            ) : (
              <div className="h-full w-full relative">
                <Image
                  src={card.imageSrc || "/placeholder.svg"}
                  alt="Card image"
                  fill
                  className="object-cover object-[50%_30%]"
                  priority
                />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`font-bold bg-orange-100 text-orange-500 px-1 py-0.5 ${className}`}
    >
      {children}
    </span>
  );
};

export const CardStackText = ({
  title,
  children,
  number,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-[22px] lg:gap-3 z-50">
      <div className="lg:w-10 lg:h-10 w-[38px] h-[38px] rounded-full bg-orange-100 flex items-center justify-center">
        <span className="text-orange-500 text-lg lg:text-2xl font-bold">
          {number}
        </span>
      </div>

      <div className="space-y-3">
        <h2 className=" text-lg xl:text-2xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>

        <div className="space-y-3">{children}</div>
      </div>
    </div>
  );
};
