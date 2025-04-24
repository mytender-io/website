"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import ApproachCard from "../_components.tsx/approachCard";
import BreadCrumb from "../_components.tsx/breadCrumb";
import Heading from "../_components.tsx/heading";
import ObjectiveCard from "../_components.tsx/objectiveCard";
import Quote from "../_components.tsx/quote";
import ReadMoreStories from "../_components.tsx/readMoreStories";
import Sidebar from "../_components.tsx/sideBar";
import { StatsGrid } from "../_components.tsx/statsGrid";
import TemplateCard from "../_components.tsx/templateCard";
import Text from "../_components.tsx/text";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Empro() {
  const [section, setSection] = useState(0);
  const templateCardData = {
    imagePath: "/Empro.svg",
    industry: "Facilities Management Consultants",
    teams: "Bid Team",
    companySize: " Tier-1 Enterprise Contractors",
    ProductsUsed: "Enterprise Soultion",
  };
  const stats = [
    {
      value: (
        <div className="w-full text-left">
          <Check color="#F96B13" />
        </div>
      ),
      label: "Reduced internal workload",
    },
    {
      value: (
        <div className="w-full text-left">
          <Check color="#F96B13" />
        </div>
      ),
      label: "Improved bid consistency",
    },
    {
      value: (
        <div className="w-full text-left">
          <Check color="#F96B13" />
        </div>
      ),
      label: "Accelerated bid turnaround",
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
      title: "Reduce internal workload",
      description:
        "Support enterprise FM teams by easing the pressure of complex bid requirements",
    },
    {
      title: "Improve bid consistency",
      description:
        "Standardise structure and quality across all submissions using proven processes",
    },
    {
      title: "Accelerate bid turnaround",
      description:
        "Speed up delivery timelines without compromising compliance or quality",
    },
  ];

  return (
    <div>
      <div className="max-w-7xl flex lg:flex-row flex-col lg:justify-between mx-auto pb-20">
        <div className="w-full px-5 lg:max-w-[717px] min-h-full flex flex-col justify-between">
          <div className="space-y-6 lg:space-y-10">
            <BreadCrumb text="Stadium" url="stadium" />
            <h1 className="text-[#1C1C1C] text-4xl text-center lg:text-left lg:text-5xl font-semibold leading-10 lg:leading-[58px] tracking-[-0.96px] ">
              Transforming Bid Efficiency for Tier 1 FM Providers: The empro-{" "}
              <span className="text-[#F96B13] h-[60px] px-3 bg-[#FFF3EB] rounded-xl">
                mytender.io
              </span>{" "}
              Advantage
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
              text="“The capabilities and functionality of the mytender.io system can really accelerate and facilitate growth in the SME space and allow organisations to win their desired contracts”"
              by="Managing  Director"
            />
            <div className="border-t mt-8 mb-10 w-full"></div>
            <motion.div
              onViewportEnter={(e) => {
                setSection(0);
              }}
            >
              <Heading id="Empro">Meet Empro</Heading>
              <Text className=" pb-[18px]">
                Empro Group is a leading UK specialist in Tier 1 Facility
                Management contract mobilisation, delivering forward-thinking
                and sustainable solutions across the built environment.
                <br />
                <br />
                Rooted in a passion for quality and innovation, empro partners
                with clients across public and private sectors to deliver
                standout results. From landscape construction to grounds
                maintenance and environmental management, we bring bold ideas
                and expert execution to every project. Building environments
                that last and inspire.
              </Text>
            </motion.div>
            <Image
              src="/case-study/empro-main.png"
              alt="Empro"
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
                Tier 1 FM providers face highly complex, resource-intensive bid
                processes that strain internal teams and limit operational
                efficiency. With growing competition and tighter margins,
                streamlining these functions became critical to maintaining a
                competitive edge.
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
              <Text id={"Solution"}>
                Empro, acting as a strategic FM consultancy, identified this
                pain point across its client base and introduced mytender.io as
                a specialist partner to transform its bid operations. Rather
                than attempting to solve the problem in-house, Empro leveraged
                its consultancy role to connect Tier 1 FM providers with an
                expert solution tailored to the unique demands of
                enterprise-level bidding. This collaboration allowed clients to
                offload the most demanding elements of the bid process to a
                trusted, scalable resource, freeing up internal teams to focus
                on core service delivery and high-level strategy.
                <br />
                <br />
                mytender.io worked closely with each client to seamlessly embed
                into their existing operations, providing bespoke support that
                included bid management, document preparation, compliance
                checks, and project coordination. By bringing structure,
                consistency, and dedicated expertise to the process, clients saw
                measurable improvements in bid turnaround times, win rates, and
                overall team efficiency. Empro's ability to identify the right
                partner and facilitate a smooth introduction ensured maximum
                value was delivered with minimal disruption.
              </Text>
            </motion.div>
          </div>
          <Sidebar title="Empro" section={section} />
        </div>
      </div>
      <div className="py-14 lg:py-20 text-base">
        <ReadMoreStories exlude="Empro" />
      </div>
    </div>
  );
}
