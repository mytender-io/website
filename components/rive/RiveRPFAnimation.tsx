"use client";
import { useEffect, useRef, useState } from "react";
import { Alignment, Fit, Layout, Rive } from "@rive-app/react-webgl2";
import { useInView } from "framer-motion";

const STATE_MACHINE_NAME = "State Machine 1";

export default function RiveRPFAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const riveRef = useRef<Rive | null>(null);

  let resizeRafId: number | null = null;

  const inView = useInView(containerRef, { once: false });

  const layout = new Layout({
    fit: Fit.Contain,
    alignment: Alignment.Center,
  });

  const hoverAnimations = [
    "Hover-Logo",
    "Hover-View",
    "Hover-LC4",
    "Hover-LC3",
    "Hover-LC2",
    "Hover-LC1",
    "Hover-Home",
    "Hover-Tender",
    "Hover-Library",
    "Hover-QA",
  ];
  const idleAnimations = ["IDLE-Logo", "IDLE-Hovs", "IDLE-NAV 2", "IDLE-NAV"];
  const activeAnimations = [
    "active-tend-ins",
    "active-bid-inputs",
    "active-bid-outline",
    "active-bid-review",
  ];

  const updateSize = () => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const dpr = Math.min(window.devicePixelRatio || 1, 1);

    const width = container.clientWidth;
    const height = container.clientHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    if (riveRef.current) {
      riveRef.current.resizeDrawingSurfaceToCanvas();
    }
  };

  const handleResize = () => {
    if (resizeRafId) {
      cancelAnimationFrame(resizeRafId);
    }
    resizeRafId = requestAnimationFrame(updateSize);
  };

  useEffect(() => {
    if (inView && canvasRef.current && !riveRef.current) {
      updateSize();
      riveRef.current = new Rive({
        src: "/riv/rpf3.riv",
        canvas: canvasRef.current,
        autoplay: true,
        animations: [
          ...hoverAnimations,
          ...idleAnimations,
          ...activeAnimations,
        ],
        stateMachines: STATE_MACHINE_NAME,
        layout,
        onLoad: () => {
          updateSize();
        },
      });
    }

    if (!inView && riveRef.current) {
      riveRef.current.cleanup();
      riveRef.current = null;
    }
  }, [inView]);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      if (resizeRafId) {
        cancelAnimationFrame(resizeRafId);
      }
      resizeObserver.disconnect();

      if (riveRef.current) {
        riveRef.current.cleanup();
        riveRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden lg:block min-w-[500px] rounded-2xl bg-[#f3f3f3] xl:min-w-[600px] w-full md:min-h-[470px]"
    >
      <canvas className="rounded-[10px]" ref={canvasRef} />
    </div>
  );
}
