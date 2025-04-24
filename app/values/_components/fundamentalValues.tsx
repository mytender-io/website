import Image from "next/image";

export default function FundamentalValues() {
  return (
    <div className="w-full px-5">
      <div className="w-full items-center max-h-[300px] text-center rounded-2xl border py-20 relative overflow-hidden hidden lg:block">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image 
            src="/values/values.png" 
            alt="Values background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <p className="text-white z-50 relative text-[34px] xl:text-[42px] font-semibold leading-11 tracking-[-0.84px] max-w-5xl mx-auto">
          mytender.io's long-term performance is based on five fundamental
          values{" "}
          <span className="text-white/60">
            defined by co-founders and shared by everyone in the Group.
          </span>
        </p>
      </div>
    </div>
  );
}
