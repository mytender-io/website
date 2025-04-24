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
import { motion } from "framer-motion";
import { useState } from "react";
export default function Stadium() {
  const [section, setSection] = useState(0);
  const templateCardData = {
    imagePath: "/Stadium.svg",
    industry: "Facilities Services | Security",
    teams: "Medium Enterprise",
    companySize: "New project team Sales & Customer Success",
    ProductsUsed: "Team Soultion",
  };
  const stats = [
    { value: "40%", label: "Time reduction" },
    {
      value: "2.5x",
      label: "Increase in throughput",
    },
    {
      value: "22%",
      label: "Increase in  win rate",
    },
  ];
  const approachCardData = {
    list: [
      "Deploy mytender.io licenses",
      "Centralise bid content",
      "Optimise for volume",
    ],
  };
  const objectiveCardData = [
    {
      title: "Increase bid capacity",
      description:
        "Scale the number of tenders handled without expanding internal headcount",
    },
    {
      title: "Reduce turnaround time",
      description:
        "Streamline bid preparation and submission workflows across departments",
    },
    {
      title: "Improve win outcomes",
      description:
        "Elevate proposal quality and alignment to client needs through smarter tools",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl flex lg:flex-row flex-col lg:justify-between mx-auto pb-20">
        <div className="w-full px-5 lg:max-w-[717px] min-h-full flex flex-col justify-between">
          <div className="space-y-6 lg:space-y-10">
            <BreadCrumb text="Stadium" url="stadium" />
            <h1 className="text-[#1C1C1C] text-4xl text-center lg:text-left lg:text-5xl font-semibold leading-10 lg:leading-[58px] tracking-[-0.96px] ">
              Winning More, Faster: Stadium FM streamlines tendering with{" "}
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
      <div className="bg-[#FAFAFA]">
        <div className=" max-w-7xl px-5 pt-14 pb-14 lg:pb-24 flex flex-col lg:flex-row justify-between mx-auto relative">
          <div className="lg:max-w-[808px]">
            <Quote
              text="“Stadium FM have been using the brilliant mytender.io platform to save a tonne of time and headaches, whilst being able to win more work.”"
              by="Executive Chairman"
            />
            <div className="border-t mt-8 mb-10 w-full"></div>
            <motion.div
              onViewportEnter={(e) => {
                setSection(0);
              }}
            >
              <Heading id="Stadium">Meet Stadium </Heading>
              <Text className=" pb-[18px]">
                Stadium FM is a trusted provider of integrated facilities
                management solutions, delivering safe, efficient, and
                high-quality services across the UK's most dynamic venues and
                environments.
                <br />
                <br />
                With a focus on safety, reliability, and client experience,
                Stadium FM supports both public and private sector organisations
                through expert cleaning, stewarding, maintenance, and security
                services. Whether it's a major event venue, transport hub, or
                public space, Stadium FM ensures operations run smoothly,
                creating clean, compliant, and welcoming environments at every
                level.
              </Text>
            </motion.div>
            <Image
              src="/case-study/stadium-main.png"
              alt="Stadium"
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
                Stadium FM, a national provider of integrated facilities
                management services, was seeing growing demand and increasing
                pressure to respond to more tenders at pace. With a lean
                internal team, the bid process was becoming a bottleneck,
                affecting throughput, stretching resources, and putting win
                rates at risk.
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
                Stadium FM adopted mytender.io, investing in multiple licenses
                to roll out the software across its bid and operational teams.
                The platform offered an intuitive, centralised space to manage
                bids—from initial document analysis to final submission.
                <br />
                <br />
                Since implementation, Stadium FM has reduced bid prep time by
                40%, increased throughput by 2.5x, and improved win rates by 22%
                over a 12-month period. The platform's automated content
                generation, collaboration tools, and reusable content library
                proved critical in delivering faster, more consistent
                bids—especially during high-volume periods.
              </Text>
            </motion.div>
          </div>
          <Sidebar title="Stadium" section={section} />
        </div>
      </div>
      <div className="py-14 lg:py-20 text-base">
        <ReadMoreStories exlude="Stadium" />
      </div>
    </div>
  );
}
