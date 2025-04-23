import Image from "next/image";

export default function Accolades() {
  return (
    <div className="w-full space-y-6 py-7">
      <p className="text-black  text-center text-base font-medium leading-6">
        Biggest Accolades
      </p>
      <div className="flex w-full mx-auto gap-[10px] items-center flex-wrap justify-center md:px-0 px-5">
        <div className="bg-[#F8F8F8] rounded-lg w-full md:w-[230px] h-[135px] flex items-center justify-center">
          <Image
            src="/fuel.png"
            width={154}
            height={54.5}
            alt="santandar"
            className="z-10"
          />
        </div>
        <div className="bg-[#F8F8F8] rounded-lg w-full md:w-[230px] h-[135px] flex items-center justify-center">
          <Image
            src="/santander.png"
            width={150.4}
            height={43.6}
            alt="santandar"
            className="z-10 "
          />
        </div>
        <div className="bg-[#F8F8F8] rounded-lg w-full md:w-[230px] h-[135px] flex items-center justify-center">
          <Image
            src="/venture.png"
            width={120}
            height={65}
            alt="venture"
            className="z-10"
          />
        </div>
        <div className="bg-[#F8F8F8] rounded-lg w-full md:w-[230px] h-[135px] flex items-center justify-center">
          <Image
            src="/nvidia.png"
            width={120}
            height={65}
            alt="nvidia"
            className="z-10"
          />
        </div>
        <div className="bg-[#F8F8F8] rounded-lg w-full md:w-[230px] h-[135px] flex items-center justify-center">
          <Image
            src="/southhampton.png"
            width={150}
            height={65}
            alt="southhampton"
            className="z-10"
          />
        </div>
      </div>
    </div>
  );
}
