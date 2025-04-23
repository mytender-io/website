export default function ApproachCard({ list }: { list: string[] }) {
  return (
    <div
      className="p-7 pb-0 rounded-2xl lg:max-w-[400px] w-full min-w-[300px] bg-white h-fit"
      style={{
        boxShadow:
          "0px 96px 138px 0px rgba(0, 0, 0, 0.03), 0px 21.443px 30.824px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <p className="text-[#1C1C1C] text-2xl font-semibold leading-7 mb-7">
        Approach
      </p>

      {list.map((item, index) => (
        <div
          key={index}
          className="flex w-full items-center gap-[10px] py-7 border-t border-[rgba(35,56,94,0.12)]"
        >
          <div className="w-[30px] h-[30px] bg-[#FFEFE5] rounded-[6px] items-center flex justify-center text-lg text-[#F96B13]">
            {index + 1}
          </div>
          <p className="text-[#181D27] text-lg font-semibold w-auto leading-5">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
