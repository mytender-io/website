"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronRight, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import Heading from "../heading";

const FeatureCard = ({
  heading,
  Subheading,
  icon,
  demoUrl,
}: {
  heading: string;
  Subheading: string;
  icon?: any;
  demoUrl: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeVisible, setIframeVisible] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const preloadIframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const linkDns = document.createElement("link");
    linkDns.rel = "dns-prefetch";
    linkDns.href = new URL(demoUrl).origin;
    document.head.appendChild(linkDns);

    const linkPreconnect = document.createElement("link");
    linkPreconnect.rel = "preconnect";
    linkPreconnect.href = new URL(demoUrl).origin;
    document.head.appendChild(linkPreconnect);

    const hiddenIframe = document.createElement("iframe");
    hiddenIframe.src = demoUrl;
    hiddenIframe.style.display = "none";
    hiddenIframe.onload = () => {
      setIsPreloaded(true);
      setTimeout(() => {
        if (!isOpen && document.body.contains(hiddenIframe)) {
          document.body.removeChild(hiddenIframe);
        }
      }, 30000);
    };
    document.body.appendChild(hiddenIframe);

    return () => {
      document.head.removeChild(linkDns);
      document.head.removeChild(linkPreconnect);
      if (document.body.contains(hiddenIframe)) {
        document.body.removeChild(hiddenIframe);
      }
    };
  }, [demoUrl]);

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setIframeVisible(false);
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      if (isPreloaded) {
        setIframeVisible(true);
        setIframeLoaded(true);
      } else {
        setIframeVisible(true);
      }
    }
  }, [isOpen, isPreloaded]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  const handleMouseEnter = () => {
    if (!isPreloaded) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "document";
      link.href = demoUrl;
      document.head.appendChild(link);
      setTimeout(() => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      }, 10000);
    }
  };

  return (
    <div
      className="flex flex-col gap-5 max-w-[600px] transition-all duration-200 cursor-pointer bg-[#FAFAFA] rounded-2xl p-6 hover:shadow-[0px_96px_138px_0px_rgba(0,0,0,0.03),0px_21.443px_30.824px_0px_rgba(0,0,0,0.05),0px_6.384px_9.177px_0px_rgba(0,0,0,0.07)]"
      onMouseEnter={handleMouseEnter}
    >
      <div className="bg-white text-[24px] p-3 w-fit rounded-lg border border-[#E9EAEB] shadow-sm">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <Heading
          heading={heading}
          subHeading={Subheading}
          headingClassName={
            "text-[#181D27] text-[20px]! leading-[30px] tracking-normal"
          }
          subHeadingClassName={"text-[#535862] text-base! leading-6"}
        />
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <p
          onClick={() => setIsOpen(true)}
          className="text-[#F96B13] text-base font-semibold flex items-center gap-2 cursor-pointer"
          onMouseEnter={handleMouseEnter}
        >
          Try Interactive Demo <ChevronRight />
        </p>
        <DialogContent className="[&>button]:hidden sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] p-0 h-[90vh] max-h-[90vh]">
          <DialogTitle className="hidden" />

          {!iframeLoaded && iframeVisible && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 z-10 rounded-[18px]">
              <Loader2 className="h-8 w-8 animate-spin text-[#F96B13] mb-2" />
              <p className="text-sm text-muted-foreground">Loading demo...</p>
            </div>
          )}

          {!iframeVisible && (
            <div className="w-full h-full p-4">
              <Skeleton className="w-full h-16 mb-4 rounded-lg" />
              <Skeleton className="w-3/4 h-8 mb-8 rounded-md" />
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="w-full h-40 rounded-lg" />
                <Skeleton className="w-full h-40 rounded-lg" />
              </div>
              <Skeleton className="w-full h-64 mt-8 rounded-lg" />
            </div>
          )}

          {iframeVisible && (
            <iframe
              ref={iframeRef}
              src={demoUrl}
              className={`w-full h-full border-0 rounded-[18px] transition-opacity duration-300 ${
                iframeLoaded ? "opacity-100" : "opacity-0"
              }`}
              title="Interactive Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleIframeLoad}
              loading="eager"
            />
          )}
        </DialogContent>
      </Dialog>

      <iframe
        ref={preloadIframeRef}
        src={demoUrl}
        style={{
          display: "none",
          width: 0,
          height: 0,
          position: "absolute",
          pointerEvents: "none",
        }}
        title="Preload Demo"
        loading="eager"
      />
    </div>
  );
};

export default FeatureCard;
