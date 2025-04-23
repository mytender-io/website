"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";

interface LayoutWithBordersProps {
  children: React.ReactNode;
  zIndex?: number;
  top?: string;
}

const LayoutWithBorders = ({
  children,
  top = "0",
  zIndex = 5,
}: LayoutWithBordersProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [borderPositions, setBorderPositions] = useState<{
    left: number;
    right: number;
  } | null>(null);

  useEffect(() => {
    const calculateBorderPositions = () => {
      if (containerRef.current) {
        const containerWidth = 1320;
        const windowWidth = window.innerWidth;
        if (windowWidth >= 1024) {
          const leftPosition = Math.max((windowWidth - containerWidth) / 2, 0);
          const rightPosition = Math.min(
            leftPosition + containerWidth,
            windowWidth
          );

          setBorderPositions({
            left: leftPosition,
            right: rightPosition,
          });
        } else {
          setBorderPositions(null);
        }
      }
    };
    calculateBorderPositions();
    window.addEventListener("resize", calculateBorderPositions);

    return () => {
      window.removeEventListener("resize", calculateBorderPositions);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {children}
      {borderPositions && (
        <>
          <div
            className="absolute pointer-events-none hidden lg:block"
            style={{
              left: `${borderPositions.left}px`,
              top: top,
              bottom: 0,
              width: "1px",
              zIndex: zIndex,
            }}
          >
            <svg width="3" height="102.5%" className="absolute top-0 left-0">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="#23385E2B"
                strokeWidth="3"
                strokeDasharray="3"
              />
            </svg>
          </div>
          <div
            className="absolute pointer-events-none hidden lg:block"
            style={{
              left: `${borderPositions.right}px`,
              top: top,
              bottom: 0,
              width: "1px",
              zIndex: zIndex,
            }}
          >
            <svg width="3" height="102.5%" className="absolute top-0 left-0">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="#23385E26"
                strokeWidth="3"
                strokeDasharray="3"
              />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default LayoutWithBorders;
