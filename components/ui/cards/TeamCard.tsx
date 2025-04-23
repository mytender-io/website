import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";

export default function TeamCard({
  member,
}: {
  member: {
    name: string;
    title: string;
    photo: string;
  };
}) {
  return (
    <div key={member.name} className="mt-[30px]">
      <div className="relative rounded-2xl overflow-hidden group">
        <div className="absolute transition-all duration-500 inset-0 bg-gradient-to-b from-transparent to-black/[50%] opacity-0 group-hover:opacity-100 flex items-end justify-center pb-4"></div>
        <div className="w-full absolute  -bottom-12 group-hover:-translate-y-20 transition-all duration-300 justify-center flex">
          <Button className="backdrop-blur-[4.75px] space-x-[14px] h-[44px] bg-white/20 text-base transition-all duration-500 text-white rounded-full mx-auto">
            Take a Closer Look <ChevronRight />
          </Button>
        </div>
        <Image
          src={member.photo}
          alt={member.name}
          width={300}
          height={300}
          className=""
        />
      </div>
      <p className="text-[#181D27] font-semibold leading-7 text-xl mt-6 ">
        {member.name}
      </p>
      <p className="text-[#F96B13] leading-[26px] text-lg">{member.title}</p>
    </div>
  );
}
