"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Rive, Alignment, Fit, Layout } from "@rive-app/react-webgl2";

const MOBILE_THRESHOLD = 768;
const LOW_MEMORY_THRESHOLD = 4;
const INTERSECTION_THRESHOLD = 0.05;

export default function RiveFeatherAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const riveRef = useRef<Rive | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRequestRef = useRef<number | null>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isInView, setIsInView] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const [devicePerformance, setDevicePerformance] = useState<
    "high" | "medium" | "low"
  >("medium");

  const detectDeviceCapabilities = useCallback(() => {
    const isMobile =
      window.innerWidth < MOBILE_THRESHOLD ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    let memoryConstraint = false;
    if ("deviceMemory" in navigator) {
      memoryConstraint = navigator.deviceMemory! < LOW_MEMORY_THRESHOLD;
    }

    try {
      if (navigator.getBattery) {
        navigator.getBattery().then((battery) => {
          if (battery.charging === false && battery.level < 0.2) {
            setIsLowPowerMode(true);
          }
        });
      }
    } catch (e) {}

    if (isMobile || memoryConstraint || isLowPowerMode) {
      setDevicePerformance(isMobile && memoryConstraint ? "low" : "medium");
    } else {
      setDevicePerformance("high");
    }
  }, [isLowPowerMode]);

  const getOptimalCanvasSize = useCallback(() => {
    const baseWidth = 980;
    const baseHeight = 600;

    let dpr = 1;
    let scaleFactor = 1;

    switch (devicePerformance) {
      case "high":
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        break;
      case "medium":
        dpr = 1;
        break;
      case "low":
        dpr = 0.75;
        scaleFactor = 0.8;
        break;
    }

    return {
      width: baseWidth * scaleFactor,
      height: baseHeight * scaleFactor,
      dpr,
    };
  }, [devicePerformance]);

  const updateCanvasSize = useCallback(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const { width, height, dpr } = getOptimalCanvasSize();

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      if (riveRef.current) {
        riveRef.current.resizeDrawingSurfaceToCanvas();
      }
    }
  }, [getOptimalCanvasSize]);

  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }

    resizeTimeoutRef.current = setTimeout(() => {
      if (frameRequestRef.current) {
        cancelAnimationFrame(frameRequestRef.current);
      }
      frameRequestRef.current = requestAnimationFrame(updateCanvasSize);
    }, 150);
  }, [updateCanvasSize]);

  const updatePlayback = useCallback(() => {
    if (!riveRef.current) return;

    if (isInView) {
      if (devicePerformance === "low") {
        try {
          if (riveRef.current.setRendererType) {
            riveRef.current.setRendererType("webgl1");
          }
        } catch (e) {}
      }
      riveRef.current.play();
    } else {
      riveRef.current.pause();
    }
  }, [isInView, devicePerformance]);

  const initRive = useCallback(() => {
    if (!canvasRef.current || !containerRef.current) return;

    updateCanvasSize();

    riveRef.current = new Rive({
      src: "/riv/bg-corner1.riv",
      canvas: canvasRef.current,
      autoplay: false,
      stateMachines: "machine",
      animations: "move",
      layout: new Layout({
        fit: Fit.Contain,
        alignment: Alignment.Center,
      }),
      onLoad: () => {
        updateCanvasSize();
        updatePlayback();
      },
      useOffscreenRenderer: true,
    });
  }, [updateCanvasSize, updatePlayback]);

  useEffect(() => {
    detectDeviceCapabilities();

    initRive();

    const observerOptions = {
      threshold: INTERSECTION_THRESHOLD,
      rootMargin: "100px",
    };

    const observer = new IntersectionObserver((entries) => {
      setIsInView(entries[0].isIntersecting);
    }, observerOptions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);

      if (frameRequestRef.current) {
        cancelAnimationFrame(frameRequestRef.current);
        frameRequestRef.current = null;
      }

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
        resizeTimeoutRef.current = null;
      }

      if (riveRef.current) {
        riveRef.current.cleanup();
        riveRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    updatePlayback();
  }, [isInView, updatePlayback]);

  useEffect(() => {
    updateCanvasSize();
  }, [devicePerformance, updateCanvasSize]);

  return (
    <div
      ref={containerRef}
      className="absolute top-[-20%] lg:left-0 left-[20%] w-full min-w-screen lg:z-[-2] z-[-1]"
    >
      <canvas
        className="ml-auto"
        ref={canvasRef}
        style={{
          display: "block",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}
