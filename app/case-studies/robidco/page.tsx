"use client";
import Image from "next/image";
import ApproachCard from "../_components.tsx/approachCard";
import ObjectiveCard from "../_components.tsx/objectiveCard";
import ReadMoreStories from "../_components.tsx/readMoreStories";
import Sidebar from "../_components.tsx/sideBar";
import Text from "../_components.tsx/text";
import Heading from "../_components.tsx/heading";
import Quote from "../_components.tsx/quote";
import TemplateCard from "../_components.tsx/templateCard";
import { StatsGrid } from "../_components.tsx/statsGrid";
import BreadCrumb from "../_components.tsx/breadCrumb";
import { Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Rabidco() {
  const [section, setSection] = useState(0);
  const templateCardData = {
    imagePath: "/Robidco.svg",
    industry: "Construction",
    teams: "Enterprise & SMEs",
    companySize: "New project team Bid teams",
    ProductsUsed: "Enterprise & Admin Soultion",
  };
  const stats = [
    {
      value: (
        <div className="w-full text-left">
          <Check color="#F96B13" />
        </div>
      ),
      label: "Reduced resource strain",
    },
    {
      value: (
        <div className="w-full text-left">
          <Check color="#F96B13" />
        </div>
      ),
      label: "Improved bid quality",
    },
    {
      value: (
        <div className="w-full text-left">
          <Check color="#F96B13" />
        </div>
      ),
      label: "Boosted success rate",
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
      title: "Reduce resource strain",
      description:
        "Minimise the manual effort and duplication across tender submissions",
    },
    {
      title: "Improve bid quality",
      description:
        "Ensure every submission is consistent, compliant, and strategically aligned",
    },
    {
      title: "Boost success rate",
      description:
        "Increase win rates through targeted, high-quality, and data-informed bids",
    },
  ];

  return (
    <div>
      <div className="max-w-7xl flex lg:flex-row flex-col lg:justify-between mx-auto pb-20">
        <div className="w-full px-5 lg:max-w-[717px] min-h-full flex flex-col justify-between">
          <div className="space-y-6 lg:space-y-10">
            <BreadCrumb text="Stadium" url="stadium" />
            <h1 className="text-[#1C1C1C] text-4xl text-center lg:text-left lg:text-5xl font-semibold leading-10 lg:leading-[58px] tracking-[-0.96px] ">
              Transforming Bid Efficiency for Tier 1 & SME Construction
              Providers
              {/* <span className="text-[#F96B13] h-[60px] px-3 bg-[#FFF3EB] rounded-xl">
                mytender.io
              </span>{" "} */}
              {/* Advantage */}
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
      <div className="bg-[#FAFAFA]">
        <div className="max-w-7xl px-5 pt-14 pb-14 lg:pb-24 flex flex-col lg:flex-row justify-between mx-auto relative">
          <div className="lg:max-w-[808px]">
            <Quote
              text="“mytender.io is the best AI tender writing tool I've seen and used and way ahead of anything Gemini/copilot can achieve.”"
              by="Executive Chairman"
            />
            <div className="border-t mt-8 mb-10 w-full"></div>
            <motion.div
              onViewportEnter={(e) => {
                setSection(0);
              }}
            >
              <Heading id="Robidco">Meet Robidco</Heading>
              <Text className=" pb-[18px]">
                Robid is a Tier 1 and SME construction bid professional with
                over 20 years experience in building winning bids across large
                construction projects including international multi-billion
                pound projects and complex railway tenders.
                <br />
                <br />
                Combining 20 years of technical writing, workforce development,
                entrepreneurialism, and quality assurance to develop winning
                projects. Specialising in bids, proposals and tenders since 2010
                across industries, Robid bring new ideas and perspectives to
                help business bids truly stand out.
              </Text>
            </motion.div>
            <Image
              src="https://mytender.b-cdn.net/Case%20Stuides/Robidco/robid.png"
              alt="Robidco"
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
                Large construction firms often face mounting pressure when
                responding to tenders. Juggling tight deadlines, fragmented
                teams, and complex submission requirements. These challenges
                lead to inconsistencies, duplicated effort, and missed
                opportunities, particularly for Tier 1 contractors managing
                multiple bids simultaneously. The need for a more structured,
                scalable, and resource-efficient approach became clear as bid
                workloads grew and internal resources remained stretched.
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
                Robidco partnered with mytender.io to deliver a fully supported
                bid management service tailored to the construction sector.
                Acting as a construction bid consultancy, Robidco brought the
                structure, industry insight, and strategy, while mytender.io
                provided the platform and delivery capacity to scale bid
                operations without burdening internal teams.
                <br />
                <br />
                By combining Robidco’s sector-specific expertise with
                mytender.io’s proven systems, construction firms gained access
                to end-to-end bid support. This included everything from
                document preparation and compliance tracking to automated
                content generation and project oversight. Together, Robidco and
                mytender.io enabled clients to improve output, reduce turnaround
                time, and increase win rates—without compromising on quality.
              </Text>
            </motion.div>
          </div>

          <Sidebar title="Robidco" section={section} />
        </div>
      </div>
      <div className="py-14 lg:py-20 text-base">
        <ReadMoreStories exlude="Robid.co" />
      </div>
    </div>
  );
}
