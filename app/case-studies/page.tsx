import ApproachCard from "@/app/case-studies/_components.tsx/approachCard";
import ObjectiveCard from "@/app/case-studies/_components.tsx/objectiveCard";
import StoryCard from "@/app/case-studies/_components.tsx/storyCard";
import TemplateCard from "@/app/case-studies/_components.tsx/templateCard";
import ReadMoreStories from "./_components.tsx/readMoreStories";
import Quote from "./_components.tsx/quote";
import { StatsGrid } from "./_components.tsx/statsGrid";

export default function CaseStudies() {
  const templateCardData = {
    imagePath: "/templateCard.png",
    industry: "Retail",
    teams: "Marketing",
    companySize: "1000+",
    ProductsUsed: "MyTender",
  };
  const storyCardData = {
    imagePath: "/templateCard.png",
    title: "Stadium",
    tag: "Construction",
    description:
      "“Stadium FM have been using the brilliant mytender.io platform to save a tonne of time and headaches, whilst being able to win more work.”",
    storyLink: "/case-studies/story",
  };
  const approachCardData = {
    list: [
      "Introduced mytender.io to Tier 1 FM clients",
      "Integrated seamlessly into existing bid workflows",
      "Optimised processes based on live feedback",
    ],
  };
  const objectiveCardData = [
    {
      title: "Reduce bid writing time",
      description:
        "Support with streamlining the resources consumed by each bid",
    },
    {
      title: "Secure planned contracts",
      description:
        "Ensure NT Killingley win the contracts that are crucial for their operations",
    },
    {
      title: "Increase bid throughput",
      description:
        "To leverage mytender.io's platform to increase bid throughput.",
    },
  ];
  const stats = [
    { value: "75%", label: "Reduced Writing Time" },
    {
      value: "100%",
      label: "Operation Capacity Win",
    },
    {
      value: "+1",
      label: "Increased Throughput",
    },
  ];
  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6 mb-20">
      {/* <StatsGrid stats={stats} />
      <Quote
        text="“The capabilities and functionality of the mytender.io system can really accelerate and facilitate growth in the SME space and allow organisations to win their desired contracts”"
        by="Managing  Director"
      /> */}
      <ReadMoreStories exlude="" />
      {/* <TemplateCard {...templateCardData} />
      <StoryCard {...storyCardData} />
      <ApproachCard list={approachCardData.list} />
      <ObjectiveCard list={objectiveCardData} /> */}
    </div>
  );
}
