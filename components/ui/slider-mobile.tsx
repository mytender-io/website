import Image from "next/image";
import { InfiniteSlider } from "./infinte-slider";

const SliderMobile = ({
  bg = "bg-[#fafafa]",
  gradient = "from-[#fafafa]",
}: {
  bg?: string;
  gradient?: string;
}) => {
  return (
    <div
      className={`relative z-10 overflow-hidden md:hidden flex w-screen flex-col items-center bg-[#fafafa] justify-start gap-8 py-10 text-foreground ${bg} `}
    >
      <h1 className="text-center text-base text-[#9CA0A4]">Customers</h1>

      <div
        className={`pointer-events-none absolute bg-gradient-to-r ${gradient} to-transparent left-0 top-1/4 z-10 h-[200px] w-[100px] md:w-[200px]`}
      />
      <div
        className={`pointer-events-none absolute bg-gradient-to-l ${gradient} to-transparent right-0 top-1/4 z-10 h-[200px] w-[100px] md:w-[200px]`}
      />
      <InfiniteSlider className="flex h-full w-full max-w-7xl items-center justify-center gap-12">
        <Image
          src="/slider/1.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/2.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />

        <Image
          src="/slider/4.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/5.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/6.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/7.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/8.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
      </InfiniteSlider>
      <InfiniteSlider
        reverse={true}
        className="flex h-full w-full max-w-7xl items-center justify-center gap-12"
      >
        <Image
          src="/slider/9.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/10.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/11.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/12.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/13.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/14.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/15.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/16.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
        <Image
          src="/slider/17.svg"
          width={150}
          height={150}
          alt="customer"
          className="h-8 w-full pr-10 object-cover"
        />
      </InfiniteSlider>
    </div>
  );
};

export default SliderMobile;
