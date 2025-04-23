import HorizontalBorder from "../ui/HorizontalBorder";

export default function Metrics() {
  return (
    <div className="relative w-full overflow-hidden ">
      {/* <div className=" bg-[#23385E]/15 w-[2000px] -ml-[30%] h-[1px] top-[13%] md:top-[24%] absolute" /> */}
      {/* <div className=" bg-[#23385E]/15 w-[2000px] -ml-[30%] h-[1px] bottom-[0%] mt-[2px] lg:mt-[6px] absolute" /> */}
      <HorizontalBorder borderStyles="border-solid" />
      <div className="w-full xl:max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 px-0">
        <div className="flex flex-col justify-center items-center gap-2 border-r border-dashed px-4 w-full md:px-16 py-8 border-[#23385E]/15 ">
          <h1 className="text-[40px] md:text-5xl font-[600] text-[#1c1c1c]">
            75%
          </h1>
          <h5 className="text-[#5E6D7B] text-sm md:text-[18px] text-nowrap">
            Faster first draft
          </h5>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 md:border-r border-dashed px-4 w-full md:px-16 py-8 border-[#23385E]/15 ">
          <h1 className="text-[40px] md:text-5xl font-[600] text-[#1c1c1c]">
            2x
          </h1>
          <h5 className="text-[#5E6D7B] text-sm md:text-[18px] text-nowrap">
            Submission speed
          </h5>
        </div>
        <div className="flex flex-col justify-center items-center md:border-t-0 border-t gap-2 border-r border-dashed px-4 w-full md:px-16 py-8 border-[#23385E]/15 ">
          <h1 className="text-[40px] md:text-5xl font-[600] text-[#1c1c1c]">
            3000+
          </h1>
          <h5 className="text-[#5E6D7B] text-sm md:text-[18px] text-nowrap">
            Successful bids
          </h5>
        </div>
        <div className="flex flex-col justify-center items-center md:border-t-0 border-t gap-2 border-dashed px-4 w-full md:px-16 py-8 border-[#23385E]/15 ">
          <h1 className="text-[40px] md:text-5xl font-[600] text-[#1c1c1c]">
            24/7
          </h1>
          <h5 className="text-[#5E6D7B] text-sm md:text-[18px] text-nowrap">
            Expert support
          </h5>
        </div>
      </div>
      <HorizontalBorder borderStyles="border-solid" />
    </div>
  );
}
