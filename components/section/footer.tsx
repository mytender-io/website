"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

const Footer = () => {
  const pathName = usePathname();
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeVisible, setIframeVisible] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState<Record<string, boolean>>({});
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const preloadIframeRefs = useRef<Record<string, HTMLIFrameElement | null>>(
    {}
  );

  const demoUrls = {
    "advanced-tender-insights": {
      title: "Advanced Tender Insights",
      url: "https://app.storylane.io/share/plfr9kmwzni1",
    },
    "automated-first-drafts": {
      title: "Automated First Drafts",
      url: "https://app.storylane.io/share/sxldln8uddkh",
    },
    "pipeline-management": {
      title: "Pipeline Management",
      url: "https://app.storylane.io/share/t6wntlfbpmvr",
    },
    "team-collaboration": {
      title: "Team Collaboration",
      url: "https://app.storylane.io/share/v8epa84n96l8",
    },
    "content-library": {
      title: "Content Library",
      url: "https://app.storylane.io/share/zwon6gxprvdp",
    },
    "bid-scoring-insights": {
      title: "Instant data retrieval",
      url: "https://app.storylane.io/share/thdfyksnkfdw",
    },
  } as const;

  type DemoKey = keyof typeof demoUrls;

  const handleDemoClick = (demoKey: DemoKey) => {
    setActiveDemo(demoUrls[demoKey].url);
    setIsOpen(true);
    setIframeVisible(true);

    if (isPreloaded[demoKey]) {
      setIframeLoaded(true);
    } else {
      setIframeLoaded(false);
    }
  };

  const handleMouseEnter = (demoKey: DemoKey) => {
    const demoUrl = demoUrls[demoKey].url;
    if (!isPreloaded[demoKey]) {
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

  useEffect(() => {
    Object.entries(demoUrls).forEach(([_, demo]) => {
      const linkDns = document.createElement("link");
      linkDns.rel = "dns-prefetch";
      linkDns.href = new URL(demo.url).origin;
      document.head.appendChild(linkDns);

      const linkPreconnect = document.createElement("link");
      linkPreconnect.rel = "preconnect";
      linkPreconnect.href = new URL(demo.url).origin;
      document.head.appendChild(linkPreconnect);

      return () => {
        if (document.head.contains(linkDns)) {
          document.head.removeChild(linkDns);
        }
        if (document.head.contains(linkPreconnect)) {
          document.head.removeChild(linkPreconnect);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setIframeVisible(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    if (activeDemo) {
      const demoKey = (Object.entries(demoUrls).find(
        ([_, demo]) => demo.url === activeDemo
      ) || [])[0] as DemoKey | undefined;

      if (demoKey) {
        setIsPreloaded((prev) => ({
          ...prev,
          [demoKey]: true,
        }));
      }
    }
  };

  const icons = [
    { name: "twitter", link: "https://x.com/mytender_io" },
    { name: "linkedin", link: "https://uk.linkedin.com/company/mytender-io" },
    { name: "youtube", link: "https://www.youtube.com/@mytender_io" },
  ];

  return (
    <footer className="bg-[#1C1C1C] lg:px-20 px-5 w-full pt-16 pb-14 text-[#8B8B8B]">
      <div className="max-w-7xl space-y-16 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[68px] text-sm text-[#8B8B8B] font-medium leading-6 w-fit">
          <div className="space-y-3 w-fit">
            {Object.entries(demoUrls).map(([key, demo]) => (
              <div key={key}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDemoClick(key as DemoKey);
                  }}
                  onMouseEnter={() => handleMouseEnter(key as DemoKey)}
                  className=" hover:text-[#F96B13] transition-colors duration-200 flex items-center"
                >
                  <span>{demo.title}</span>
                </a>
                <iframe
                  ref={(el) => {
                    preloadIframeRefs.current[key] = el;
                  }}
                  src={demo.url}
                  style={{
                    display: "none",
                    width: 0,
                    height: 0,
                    position: "absolute",
                    pointerEvents: "none",
                  }}
                  title={`Preload ${demo.title}`}
                  loading="eager"
                  onLoad={() => {
                    setIsPreloaded((prev) => ({
                      ...prev,
                      [key]: true,
                    }));
                  }}
                />
              </div>
            ))}
          </div>

          <div className="space-y-4 w-fit">
            <p className="text-[#8B8B8B] leading-5">Case Studies:</p>
            <div className="space-y-3 flex flex-col">
              <Link
                className="hover:text-[#F96B13] transition-colors duration-200"
                href="/case-studies/killingley"
              >
                Meet Killingley
              </Link>
              <Link
                className="hover:text-[#F96B13] transition-colors duration-200"
                href="/case-studies/robidco"
              >
                Meet Robidco
              </Link>
              <Link
                className="hover:text-[#F96B13] transition-colors duration-200"
                href="/case-studies/stadium"
              >
                Meet Stadium
              </Link>
              <Link
                className="hover:text-[#F96B13] transition-colors duration-200"
                href="/case-studies/empro"
              >
                Meet Empro
              </Link>
            </div>
          </div>

          <div className="space-y-3 flex flex-col w-fit">
            <Link
              className="hover:text-[#F96B13] transition-colors duration-200"
              href="/our-story"
            >
              Our Story
            </Link>
            <Link
              className="hover:text-[#F96B13] transition-colors duration-200"
              href="/team"
            >
              Team Structure
            </Link>
            <Link
              className="hover:text-[#F96B13] transition-colors duration-200"
              href="/values"
            >
              Values
            </Link>
            <Link
              className="hover:text-[#F96B13] transition-colors duration-200"
              href="/team/#team-gallery"
            >
              Team Gallery
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 w-full flex flex-col sm:flex-row gap-6 sm:gap-0 sm:justify-between pt-8 items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} mytender.io All rights reserved.
          </p>
          <div className="flex items-center">
            {icons.map((icon, i) => (
              <Link
                href={icon.link}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src={`/social/${icon.name}.svg`}
                  alt={icon.name}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="[&>button]:hidden sm:max-w-[60vw] md:max-w-[60vw] lg:max-w-[65vw] p-0 h-[90vh] max-h-[90vh]">
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

          {iframeVisible && activeDemo && (
            <iframe
              ref={iframeRef}
              src={activeDemo}
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
    </footer>
  );
};

export default Footer;
