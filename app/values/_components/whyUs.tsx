import Heading from "@/components/ui/heading";
import Image from "next/image";

export default function WhyUs() {
  const points = [
    {
      title: "Our Values",
      description:
        "With trust, quality and ease of use being our fundamental pillars, keeping simplicity throughout to deliver true results",
      icon: "/star-colored.svg",
    },
    {
      title: "Configurability",
      description:
        "If you think that our platform is the equivalent to a junior assistant, it requires specialist training to get the most out of. We do all of this in the background when you join to make sure the AI is aligned to your business and bids to get the highest quality possible.",
      icon: "/settings-colored.svg",
    },
    {
      title: "Bringing the human to the AI",
      description:
        "We pride ourselves on being readily on call whenever you have any questions, training needs or issues.",
      icon: "/brain-colored.svg",
    },
  ];
  return (
    <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-10 lg:py-9 py-14 lg:px-[46px] px-5 bg-[#FAFAFA] rounded-[20px]">
      <div className="space-y-7 items-center h-full text-left my-auto">
        <Heading
          heading="Why Us?"
          subHeading="We understand selecting a technology partner with similar features and messages makes it tough to analyse the best option, so here is where we think we differ:"
          headingClassName="text-[34px] text-[#1c1c1c] font-semibold leading-[46px] tracking-[-1%] max-w-[600px] mx-auto"
          subHeadingClassName="text-[#5E6D7B] text-lg font-medium leading-6 tracking-[-0.16px] mx-auto max-w-[600px] lg:max-w-[482px]"
        />
      </div>
      <div className="p-6 lg:p-[34px] space-y-5 bg-white rounded-2xl">
        {points.map((point, i) => (
          <div
            className={`pb-5 max-w-[579px] ${
              i !== points.length - 1 && "border-b"
            }`}
            key={i}
          >
            <div className="flex gap-[10px]">
              <Image
                src={point.icon}
                width={20}
                height={20}
                alt={"stars"}
                className="inline-block"
              />
              <p className="text-[#181D27] text-lg font-semibold">{point.title}</p>
            </div>
            <p className="text-[#5E6D7B] text-lg mt-[10px] font-medium leading-6">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
