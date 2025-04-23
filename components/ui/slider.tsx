import { motion } from "framer-motion";

import Image from "next/image";

type SliderProps = {
  bg?: string;
  gradient?: string;
};

const Slider = ({
  bg = "bg-[#fffffff]",
  gradient = "from-[#ffffff]",
}: SliderProps) => {
  const imageIndices = Array.from({ length: 17 }, (_, i) => i).filter(
    (index) => index !== 2
  );

  return (
    <div
      className={`relative z-0 overflow-hidden hidden md:flex w-full max-w-[1320px] mx-auto flex-col items-center justify-start gap-8 pt-10 pb-14 text-foreground ${bg} border-b`}
    >
      <h1 className="text-center text-base text-black font-medium">
        Customers
      </h1>
      <div
        className={`pointer-events-none absolute bg-gradient-to-r ${gradient} to-transparent left-0 top-1/4 z-10 h-[200px] w-[100px] md:w-[200px]`}
      />
      <div
        className={`pointer-events-none absolute bg-gradient-to-l ${gradient} to-transparent right-0 top-1/4 z-10 h-[200px] w-[100px] md:w-[200px]`}
      />
      <motion.div
        className="flex w-full items-center justify-start gap-10"
        initial={{ x: "0%" }}
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {imageIndices.map((index) => (
          <Image
            key={index}
            src={`/slider/${index + 1}.svg`}
            width={150}
            height={150}
            alt="customer"
            className="w-auto h-11 inline-block pr-10"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
