import Tag from "@/components/ui/tag";
import StoryCard from "./storyCard";

const caseStudyCards = [
  {
    imagePath: "/Stadium.svg",
    title: "Stadium",
    tag: "Construction",
    description:
      "“Stadium FM have been using the brilliant mytender.io platform to save a tonne of time and headaches, whilst being able to win more work.”",
    storyLink: "/case-studies/stadium",
  },
  // {
  //   imagePath: "/Killingley.svg",
  //   title: "Killingley",
  //   tag: "Construction",
  //   description:
  //     "“Time was the problem for us when tendering for work, the mytender.io platform has taken our bid writing time down from 10 hours to…”",
  //   storyLink: "/case-studies/killingley",
  // },
  {
    imagePath: "/Empro.svg",
    title: "Empro",
    tag: "Consultancy",
    description:
      "“I have worked with Sam and the Team at mytender.io for the last year and have seen the tool develop and transform into an innovative industry leading platform…”",
    storyLink: "/case-studies/empro",
  },
  {
    imagePath: "/Robidco.svg",
    title: "Robid.co",
    tag: "Consultancy",
    description:
      "“mytender.io is the best AI tender writing tool I’ve seen and used and way ahead of anything Gemini/Copilot can achieve. I’m still trying to find the right analogy to…”",
    storyLink: "/case-studies/robidco",
  },
];

export default function ReadMoreStories({ exlude }: { exlude: string }) {
  const filteredCaseStudyCards = caseStudyCards.filter(
    (card) => card.title !== exlude
  );

  return (
    <div className="mx-auto w-fit px-5">
      <Tag
        text="More Case Studies"
        className="text-[#F96B13] bg-[#FFEFE5] mb-5 z-10"
      />
      <h1 className="text-[#1C1C1C] lg:text-[42px] text-[34px] leading-9 font-semibold mb-10 lg:mb-12">
        Read more stories
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mx-auto w-full items-center justify-center gap-6">
        {filteredCaseStudyCards.map((caseStudyCard, index) => (
          <StoryCard
            {...caseStudyCard}
            key={`${caseStudyCard.title}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
