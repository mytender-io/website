import Image from "next/image";

export default function TemplateCard({
  imagePath,
  industry,
  teams,
  companySize,
  ProductsUsed,
}: {
  imagePath: string;
  industry: string;
  teams: string;
  companySize: string;
  ProductsUsed: string;
}) {
  return (
    <div className="min-w-[280px] w-full md:min-w-[600px] mx-auto lg:mx-0 lg:max-w-[300px] lg:w-full xl:max-w-[450px] rounded-2xl border border-[rgba(35,56,94,0.12)] bg-white">
      <div className="px-[10px] pt-[10px]">
        <Image
          src={imagePath}
          alt="template"
          width={300}
          height={200}
          className="lg:rounded-[6px] md:w-[580px] md:h-auto object-cover shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] lg:max-h-[250px] w-full"
        />
      </div>
      <div className="flex lg:flex-row gap-2 flex-col lg:justify-between lg:items-center p-4 px-6 border-b border-[#E9EAEB] lg:h-[50px]">
        <p className="font-semibold">Industry</p>
        <p className="text-[#535862]">{industry}</p>
      </div>
      <div className="flex lg:flex-row gap-2 flex-col lg:justify-between lg:items-center p-4 px-6 border-b border-[#E9EAEB] lg:h-[50px]">
        <p className="font-semibold">Teams</p>
        <p className="text-[#535862]">{teams}</p>
      </div>
      <div className="flex lg:flex-row gap-2 flex-col lg:justify-between lg:items-center p-4 px-6 border-b border-[#E9EAEB] lg:h-[50px]">
        <p className="font-semibold">Company Size</p>
        <p className="text-[#535862]">{companySize}</p>
      </div>
      <div className="flex lg:flex-row gap-2 flex-col lg:justify-between lg:items-center p-4 lg:h-[50px]">
        <p className="font-semibold">Products Used</p>
        <p className="text-[#535862]">{ProductsUsed}</p>
      </div>
    </div>
  );
}
