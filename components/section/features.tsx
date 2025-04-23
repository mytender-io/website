import { Clock, PenTool, Percent, Rocket, Target, Users } from "lucide-react";
import Image from "next/image";
import FeatureCard from "../ui/cards/featureCard";
import Heading from "../ui/heading";
import Tag from "../ui/tag";

export default function FeatureSection() {
  const features = [
    {
      heading: "Increased win rate",
      subHeading:
        "Advanced tender analytics to drive superior competitiveness into your bids and build exceptionally scoring proposals.",
      icon: <Percent size={24} />,
      demoUrl: "https://app.storylane.io/share/plfr9kmwzni1",
    },
    {
      heading: "Faster first draft",
      subHeading:
        "Produce first-draft bids in minutes, not days. Reduce your writing time by at least 75% and spend your energy where it matters.",
      icon: <Clock size={24} />,
      demoUrl: "https://app.storylane.io/share/sxldln8uddkh",
    },
    {
      heading: "Instant data retrieval",
      subHeading:
        "Find answers, policies and data within your company library instantly, saving you time and keeping you on valuable tasks.",
      icon: <Target size={24} />,
      demoUrl: "https://app.storylane.io/share/thdfyksnkfdw",
    },
    {
      heading: "Collaborate effortlessly",
      subHeading:
        "Manage your bid teams with ease. Delegate sections and enforce admin reviews to make sure everyone's on the same page (no-pun-intended).",
      icon: <Users size={24} />,
      demoUrl: "https://app.storylane.io/share/v8epa84n96l8",
    },
    {
      heading: "Content library",
      subHeading:
        "Retrieve and manage previous content with ease through a smart knowledge base that connects to your database and starts organising it for you. Don't be embarrassed about your messy share point!",
      icon: <PenTool size={24} />,
      demoUrl: "https://app.storylane.io/share/zwon6gxprvdp",
    },
    {
      heading: "Control your pipeline",
      subHeading:
        "And of course, all of these great features come with a clear management overview to track your bids and measure performance levels.",
      icon: (
        <Image
          src="/horizontal-bar-chart.svg"
          alt="horizontal bar chart"
          width={24}
          height={24}
        />
      ),
      demoUrl: "https://app.storylane.io/share/t6wntlfbpmvr",
    },
  ];

  return (
    <div className="w-screen bg-white">
      <div className="w-full h-full py-[80px] px-5 xl:px-0 space-y-5 lg:space-y-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-5">
          <Tag
            text={"Powerful Features"}
            className="bg-[#FFEFE5] text-[#F96B13]"
          >
            <Rocket size={20} />
          </Tag>
          <Heading
            heading={"Tools built to optimise your writing"}
            subHeading="Our platform provides everything you need to create winning bids with less effort and more creativity."
            headingClassName="text-[#000]"
            subHeadingClassName="text-[#5E6D7B]"
          />
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[14px] justify-center w-full lg:justify-start">
          {features.map(({ heading, subHeading, icon, demoUrl }, i) => (
            <FeatureCard
              key={i}
              heading={heading}
              Subheading={subHeading}
              icon={icon}
              demoUrl={demoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
