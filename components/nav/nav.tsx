"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default function Navbar() {
  const pathName = usePathname();
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 10;

  useEffect(() => {
    if (expanded) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [expanded]);

  const NAV_LINKS = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Our Story",
      href: "/our-story",
    },
    {
      title: "Team",
      href: "/team",
    },
    {
      title: "Values",
      href: "/values",
    },
    {
      title: "Case Studies",
      data: [
        {
          title: "Empro",
          href: "/case-studies/empro",
          description:
            "Empro Group is a leading UK specialist in Tier 1 Facility Management contract mobilisation delivering forward-thinking and sustainable solutions across the built environment.",
          imageSrc: "/Empro.svg",
        },
        // {
        //   title: "Killingley",
        //   href: "/case-studies/killingley",
        //   description:
        //     "Killingley Limited is a leading provider of landscaping and environmental services in the UK, delivering innovative and sustainable solutions for outdoor spaces.",
        //   imageSrc: "/Killingley.svg",
        // },
        {
          title: "Stadium",
          href: "/case-studies/stadium",
          description:
            "Stadium FM is a trusted provider of integrated facilities management solutions, delivering safe, efficient, and high-quality services across the UK's most dynamic venues and environments.",
          imageSrc: "/Stadium.svg",
        },
        {
          title: "Robidco",
          href: "/case-studies/robidco",
          description:
            "Robid is a Tier 1 and SME construction bid professional with over 20 years experience in building winning bids across large construction projects including international multi-billion pound projects and complex railway tenders.",
          imageSrc: "/Robidco.svg",
        },
      ],
    },
  ];

  return (
    <motion.div
      className="w-full sticky top-0 z-[9999] lg:px-20"
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 1)" : "transparent",
        boxShadow: isScrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "none",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div
        className={`w-full mx-auto max-w-7xl text-black flex items-center justify-between font-medium h-[68px] lg:h-[84px]`}
      >
        <div className="flex items-center gap-20 pl-5 lg:pl-0">
          <Link href="/">
            <Image
              src={"/logo-color.png"}
              width={169}
              height={30}
              alt="My Tender"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="lg:flex hidden gap-8 items-center">
          <div className=" items-center gap-[40px] text-sm xl:text-base leading-[14px] flex">
            {NAV_LINKS.map((navItem) => (
              <div key={navItem.title} className="relative group">
                {"data" in navItem ? (
                  <div className="flex gap-8 flex-col space-y-4">
                    <span className="cursor-pointer mt-4 flex items-center gap-1">
                      {navItem.title}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 group-hover:rotate-180`}
                      />
                    </span>
                    <div className="absolute top-full min-w-[1000px] grid grid-cols-2 gap-4 -right-[320%] xl:-right-24 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none group-hover:pointer-events-auto z-50 p-5 px-9">
                      {navItem.data?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="px-4 py-2 flex gap-2 hover:bg-[#fafafa] min-w-[293px] transition-all rounded-md text-sm"
                        >
                          <Image
                            priority
                            src={item.imageSrc || "/placeholder.svg"}
                            alt={item.title}
                            width={288}
                            height={176}
                            className="w-[144px] h-[88px] rounded-md mb-2"
                          />
                          <div className="flex flex-col">
                            <p className="font-semibold text-[#1c1c1c]">
                              {item.title}
                            </p>
                            <p className="text-sm text-[#5E6D7B] font-normal line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={navItem.href} className="flex gap-[6px]">
                    {navItem.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="gap-3 hidden mt-1 lg:flex z-[9999]">
            <Link href="https://app.mytender.io/login">
              <Button className="text-foreground bg-[#1C1C1C14] hover:bg-[#FFE6D7]/90">
                Sign in
              </Button>
            </Link>
            <Link href="/book-demo">
              <Button
                variant="secondary"
                className="bg-foreground hover:bg-foreground/90 text-background"
                onClick={() => {
                  // @ts-ignore
                  window.gtag?.("event", "click", {
                    event_category: "Button",
                    event_label: "Book a Demo - Desktop",
                    value: 1,
                  });
                }}
              >
                Book a Demo <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
        {expanded ? (
          <button
            onClick={() => setExpanded(false)}
            className="right-5 cursor-pointer fixed  lg:hidden flex z-[9999]"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 8L8 24M8 8L24 24"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : (
          <button
            className="lg:hidden cursor-pointer mr-5 z-[9999]"
            onClick={() => setExpanded(!expanded)}
          >
            <Menu />
          </button>
        )}
        <div className="lg:hidden h-screen overflow-y-hidden w-screen pointer-events-none fixed top-0 left-0 z-50">
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-screen w-screen bg-black/40 backdrop-blur-2xl"
                onClick={() => setExpanded(false)}
              >
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className=" shadow-xl flex p-0 h-full "
                >
                  {/* Menu Content */}
                  <nav
                    onClick={(e) => e.stopPropagation()}
                    className="backdrop-blur-[22px] overflow-y-auto pointer-events-auto bg-white z-50 w-[80%] text-[#5E6D7B] text-base font-medium h-[100dvh] justify-between flex flex-col items-start gap-6"
                  >
                    <div className="flex flex-col gap-0 w-full ">
                      <div className="flex items-center z-[9999] gap-20 pl-4  h-[68px] border-dashed border-b border-[rgba(35,56,94,0.17)]">
                        <Link href="/">
                          <Image
                            src="/logo-color.png"
                            width={169}
                            height={30}
                            alt="My Tender"
                            className="cursor-pointer z-[999]"
                          />
                        </Link>
                      </div>
                      {NAV_LINKS.map((navItem, index) =>
                        "data" in navItem ? (
                          <div key={index} className="w-full">
                            <button
                              className="border-dashed flex pr-4 justify-between cursor-pointer w-full text-left py-5 border-[rgba(35,56,94,0.17)] border-b"
                              onClick={() => {
                                setShowCaseStudies(!showCaseStudies);
                              }}
                            >
                              <p className="px-4">{navItem.title}</p>
                              <ChevronDown
                                className={`transition-transform duration-300 ${
                                  showCaseStudies ? "rotate-180" : "rotate-0"
                                }`}
                              />
                            </button>
                            <div className="ml-4">
                              <AnimatePresence initial={false}>
                                {showCaseStudies && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      ease: "easeInOut",
                                    }}
                                    className="overflow-hidden"
                                  >
                                    {navItem.data?.map((item) => (
                                      <Link
                                        onClick={() => setExpanded(false)}
                                        key={item.href}
                                        href={item.href}
                                        className="py-2 pr-4 flex flex-col gap-2 transition-all rounded-md text-sm"
                                      >
                                        <Image
                                          priority
                                          src={
                                            item.imageSrc || "/placeholder.svg"
                                          }
                                          alt={item.title}
                                          width={288}
                                          height={176}
                                          className="w-full h- rounded-md mb-2"
                                        />
                                        <div className="flex flex-col">
                                          <p className="font-semibold text-[#1c1c1c]">
                                            {item.title}
                                          </p>
                                          <p className="text-sm text-[#5E6D7B] font-normal line-clamp-2">
                                            {item.description}
                                          </p>
                                        </div>
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        ) : (
                          <button
                            className="border-dashed w-full text-left py-5 border-[rgba(35,56,94,0.17)] border-b"
                            key={index}
                            onClick={() => setExpanded(false)}
                          >
                            <Link href={navItem.href}>
                              <p className="px-4">{navItem.title}</p>
                            </Link>
                          </button>
                        )
                      )}
                    </div>
                    <div className=" w-full flex flex-col space-y-3 mx-auto p-5 ">
                      <Link href="/book-demo" className="w-full">
                        <Button
                          onClick={() => {
                            setExpanded(false);
                            // @ts-ignore
                            window.gtag?.("event", "click", {
                              event_category: "Button",
                              event_label: "Book a Demo - Mobile",
                              value: 1,
                            });
                          }}
                          variant="default"
                          className="font-semibold h-[44px] text-base w-full"
                        >
                          Book a demo <ChevronRight />
                        </Button>
                      </Link>
                      <Link
                        href="https://app.mytender.io/login"
                        className="w-full"
                      >
                        <Button
                          onClick={() => setExpanded(false)}
                          variant="secondary"
                          size="lg"
                          className="bg-[#FFE6D7] w-full h-11 hover:bg-[#ffeee3]"
                        >
                          Sign in
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
