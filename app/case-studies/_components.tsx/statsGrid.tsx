import React from "react";

type Stat = {
  value: string | any;
  label: string;
};

type StatsGridProps = {
  stats: Stat[];
};

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="w-full bg-white max-w-[600px] mx-auto xl:max-w-[717px] grid grid-cols-1 md:grid-cols-3 border border-[#23385E1F] rounded-xl">
      {stats.map((stat, idx) => {
        const borderLeft = idx !== 0 ? "md:border-l" : "border-l-0";
        const borderTop = idx === 0 ? "border-t-0" : "border-t";

        return (
          <div
            key={idx}
            className={`flex flex-col md:justify-center md:items-center gap-[10px] ${borderTop} ${borderLeft} md:border-y-0 border-r-0 py-5 px-6 lg:p-6 border-[#23385E]/15`}
          >
            <h1 className="text-[34px] font-semibold text-[#1c1c1c] w-full text-left lg:text-center">
              {stat.value}
            </h1>
            <h5 className="text-[#5E6D7B] text-base text-nowrap">
              {stat.label}
            </h5>
          </div>
        );
      })}
    </div>
  );
};
