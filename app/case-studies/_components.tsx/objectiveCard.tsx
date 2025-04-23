export default function ObjectiveCard({
  list,
}: {
  list: {
    title: string;
    description: string;
  }[];
}) {
  return (
    <div
      className="p-7 pb-0 rounded-2xl lg:max-w-[400px] w-full min-w-[300px] bg-white h-fit"
      style={{
        boxShadow:
          "0px 96px 138px 0px rgba(0, 0, 0, 0.03), 0px 21.443px 30.824px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <p className="text-[#1C1C1C] text-2xl font-semibold leading-7 mb-7">
        Objectives
      </p>

      {list.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-full gap-[10px] py-7 border-t border-[rgba(35,56,94,0.12)]"
        >
          <p className="text-[#181D27] text-lg font-semibold leading-5">
            {item.title}
          </p>
          <p className="text-[#535862] text-base font-normal leading-5">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
