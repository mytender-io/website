"use client";
import { useState, useRef, useId, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/components/hooks/use-outside-click";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useIsMobile from "@/components/hooks/useIsMobile";

export default function TeamCardWithModal({ member }: { member: any }) {
  const [active, setActive] = useState<any | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile(640);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100] px-2">
            {isMobile && (
              <motion.button
                key={`mobile-back-${member.name}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="absolute text-[#F96B13] top-4 left-4  text-sm font-medium  bg-white/90 rounded-full shadow-sm flex cursor-pointer  items-center justify-center px-4 py-2"
                onClick={() => setActive(null)}
              >
                <ChevronLeft />
                Back
              </motion.button>
            )}

            <motion.div
              layoutId={`card-${member.name}-${id}`}
              ref={ref}
              className={`
                                bg-white 
                                rounded-lg 
                                overflow-hidden 
                                shadow-xl
                                flex flex-col
                                ${
                                  !isMobile
                                    ? "md:flex-row max-w-[740px] max-h-[490px]"
                                    : "w-full h-full"
                                }
                            `}
            >
              <motion.div
                layoutId={`image-${member.name}-${id}`}
                className="md:w-1/2 w-full h-auto flex justify-center items-center"
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={600}
                  height={600}
                  className={`
                ${
                  !isMobile
                    ? "object-cover w-full h-full "
                    : " rounded-xl w-3/4 "
                } saturate-0`}
                />
              </motion.div>

              <div className="relative md:w-1/2 w-full p-6 flex flex-col ">
                <div className="mb-4 mt-2">
                  <motion.h3
                    layoutId={`title-${member.name}-${id}`}
                    className="text-2xl font-semibold text-[#181D27] mb-1"
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${member.title}-${id}`}
                    className="text-[#F96B13] text-lg "
                  >
                    {member.title}
                  </motion.p>
                </div>

                <div className="text-[#535862]  text-sm leading-relaxed mb-2">
                  {member.description1 && <p>{member.description1}</p>}
                  <div className="h-[1px] w-full bg-[#E1E1E1] my-1" />
                  {member.description2 && <p>{member.description2}</p>}
                  <div className="h-[1px] w-full bg-[#E1E1E1] my-1" />
                  {member.description3 && <p>{member.description3}</p>}
                  <div className="h-[1px] w-full bg-[#E1E1E1] my-1" />
                  {member.description4 && <p>{member.description4}</p>}
                </div>

                {member.linkedInURL && (
                  <a href={member.linkedInURL} target="_blank" rel="noreferrer">
                    <div className="bg-[#1C1C1C] w-[196px] h-[44px] text-white  flex items-center justify-center   rounded-full">
                      <p className="text-md font-semibold ">
                        Connect on LinkedIn
                      </p>
                      <ChevronRight />
                    </div>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="mt-[30px]">
        <motion.div
          layoutId={`card-${member.name}-${id}`}
          className="relative rounded-2xl overflow-hidden group"
        >
          <div className="z-50 absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4" />

          <div
            className={`absolute z-50 ${
              isMobile
                ? "bottom-4 translate-y-0"
                : "-bottom-12 group-hover:-translate-y-20"
            } transition-all duration-300 flex justify-center w-full`}
          >
            <Button
              onClick={() => setActive(member)}
              className="z-50 backdrop-blur-md h-[44px] bg-white/20 text-white text-[16px] rounded-full px-4 flex items-center gap-2"
            >
              Take a Closer Look <ChevronRight />
            </Button>
          </div>

          <motion.div layoutId={`image-${member.name}-${id}`}>
            <Image
              src={member.photo}
              alt={member.name}
              width={300}
              height={300}
              className="object-cover object-[50%_10%] h-[300px] w-[300px] rounded-2xl saturate-0"
            />
          </motion.div>
        </motion.div>

        <motion.p
          layoutId={`title-${member.name}-${id}`}
          className="text-[#181D27] font-semibold leading-7 text-xl mt-6"
        >
          {member.name}
        </motion.p>
        <motion.p
          layoutId={`description-${member.title}-${id}`}
          className="text-[#F96B13] leading-[26px] text-lg"
        >
          {member.title}
        </motion.p>
      </div>
    </>
  );
}
