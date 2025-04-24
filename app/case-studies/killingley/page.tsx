"use client";
import BreadCrumb from "../_components.tsx/breadCrumb";
import Quote from "../_components.tsx/quote";
import { StatsGrid } from "../_components.tsx/statsGrid";
import TemplateCard from "../_components.tsx/templateCard";
import Image from "next/image";
import { useState } from "react";
import ApproachCard from "../_components.tsx/approachCard";
import Heading from "../_components.tsx/heading";
import ObjectiveCard from "../_components.tsx/objectiveCard";
import ReadMoreStories from "../_components.tsx/readMoreStories";
import Sidebar from "../_components.tsx/sideBar";
import Text from "../_components.tsx/text";
import { motion } from "framer-motion";

export default function Killingley() {
  const [section, setSection] = useState(0);
  const templateCardData = {
    imagePath: "/Killingley.svg",
    industry: "Construction",
    teams: "New project team Sales & Customer Success",
    companySize: "Enterprise",
    ProductsUsed: "Enterprise Soultion",
  };
  const stats = [
    { value: "75%", label: "Faster First Draft" },
    {
      value: "100%",
      label: "Operation Capacity Win",
    },
    {
      value: "+1",
      label: "Increased Throughput",
    },
  ];
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
  return (
    <div>
      <div className="max-w-7xl flex lg:flex-row flex-col px-5 lg:justify-between mx-auto pb-20">
        <div className="w-full px-5 lg:max-w-[717px] min-h-full flex flex-col justify-between">
          <div className="space-y-6 lg:space-y-10">
            <BreadCrumb text="Killingley" url="killingley" />
            <h1 className="text-[#1C1C1C] text-4xl text-center lg:text-left lg:text-5xl font-semibold leading-10 lg:leading-[58px] tracking-[-0.96px] ">
              How Killingley saved 75% in time using{" "}
              <span className="text-[#F96B13] h-[60px] px-3 bg-[#FFF3EB] rounded-xl">
                mytender.io
              </span>
            </h1>
          </div>
          <div className="lg:hidden mt-7 mb-6">
            <TemplateCard {...templateCardData} />
          </div>
          <StatsGrid stats={stats} />
        </div>
        <div className="hidden lg:block">
          <TemplateCard {...templateCardData} />
        </div>
      </div>
      <div className="bg-[#FAFAFA] z-[100]">
        <div className=" max-w-7xl px-5 pt-14 pb-14 lg:pb-24 flex flex-col lg:flex-row justify-between mx-auto relative">
          <div className="lg:max-w-[808px]">
            <Quote
              text="“Time was the problem for us when tendering for work, the mytender.io platform has taken our bid writing time down from 10 hours to 2 hours, genuinely”"
              by="Procurement Director"
            />
            <div className="border-t mt-8 mb-10 w-full"></div>
            <motion.div
              onViewportEnter={() => {
                setSection(0);
              }}
            >
              <Heading id="Killingley">Meet Killingley</Heading>
              <Text className=" pb-[18px]">
                Killingley Limited is a leading provider of landscaping and
                environmental services in the UK, delivering innovative and
                sustainable solutions for outdoor spaces.
                <br />
                <br />
                Founded with a commitment to excellence, Killingley has grown
                into a trusted partner for both public and private sector
                projects. The company specialises in landscape construction,
                grounds maintenance, and environmental management, working with
                clients across diverse industries to create and maintain
                exceptional outdoor environments.
              </Text>
            </motion.div>
            <Image
              src="/case-study/killingley-main.png"
              alt="killingley"
              width={808}
              height={480}
              className="rounded-xl mt-6 mb-10"
            />
            <motion.div
              onViewportEnter={(e) => {
                setSection(1);
              }}
            >
              <Heading id="Challenge">The Challenge</Heading>
              <Text className="pb-12">
                Killingley faced several challenges in its operations, including
                the time-consuming nature of the bidding process and the high
                labour costs associated with preparing each bid.
                <br />
                <br /> Additionally, the company experienced a win rate of only
                28%, which highlighted the need for improved efficiency and
                effectiveness in securing projects. Furthermore, Killingley's
                bidding capabilities were limited, which restricted
                opportunities for growth and expansion.
              </Text>
            </motion.div>
            <div className="flex lg:flex-row flex-col gap-4 pb-12">
              <ObjectiveCard list={objectiveCardData} />
              <ApproachCard list={approachCardData.list} />
            </div>
            <motion.div
              onViewportEnter={(e) => {
                setSection(2);
              }}
            >
              <Text id="Solution">
                By utilising mytender.io, NT Killingley achieved a 75% reduction
                in bid writing time, cutting the process from 10 hours to just
                2.5 hours per bid consistently. After joining mytender.io in
                July 2024, NT Killingley reached full operational capacity by
                December 2024, having won all their contracts for 2025.
                Additionally, between July and December 2024, NT Killingley
                increased their bid throughput by an average of one additional
                bid per month.
                <br />
                <br /> NT Killingley, a £20 million grounds maintenance
                organisation with a rich history spanning over five decades,
                underwent a transformative journey by integrating mytender.io
                into their bid writing process. This strategic move
                significantly streamlined the resources required to create
                winning bids consistently, marking a pivotal shift in their
                operational efficiency. By leveraging mytender.io, NT Killingley
                was able to enhance their bidding capabilities, ensuring that
                they could compete more effectively in the market while
                maintaining their commitment to delivering high-quality services
                across the UK
                <br />
                <br /> The integration of mytender.io not only reduced the time
                spent on bid writing but also improved the company's overall
                operational capacity. This allowed NT Killingley to focus more
                on delivering exceptional results for their clients, while
                maintaining their commitment to quality and environmental
                responsibility. As a result, NT Killingley was able to secure
                all their contracts for 2025, achieving a remarkable milestone
                in their operational capacity. This transformation underscores
                the company's adaptability and dedication to innovation,
                positioning them for continued success in the competitive
                landscape and earthworks sector.
              </Text>
            </motion.div>
          </div>
          <Sidebar title="Killingley" section={section} />
        </div>
      </div>
      <div className="py-14 lg:py-20 text-base">
        <ReadMoreStories exlude="Killingley" />
      </div>
    </div>
  );
}
