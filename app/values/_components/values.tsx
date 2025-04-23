import { reverse } from "dns";
import { Feather, Handshake, LucideProps, Smile, Star } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const values = [
  {
    text: "Quality",
    reverse: false,
    iconPath:
      "M7.1263 35.3337V27.417M7.1263 11.5837V3.66699M3.16797 7.62533H11.0846M3.16797 31.3753H11.0846M20.5846 5.25033L17.8389 12.3894C17.3923 13.5503 17.1691 14.1308 16.8219 14.619C16.5142 15.0518 16.1361 15.4299 15.7034 15.7376C15.2151 16.0848 14.6346 16.308 13.4737 16.7545L6.33464 19.5003L13.4737 22.2461C14.6346 22.6926 15.2151 22.9159 15.7034 23.2631C16.1361 23.5708 16.5142 23.9489 16.8219 24.3816C17.1691 24.8699 17.3923 25.4503 17.8389 26.6113L20.5846 33.7503L23.3304 26.6113C23.7769 25.4503 24.0002 24.8699 24.3474 24.3816C24.6551 23.9489 25.0332 23.5708 25.4659 23.2631C25.9542 22.9159 26.5347 22.6926 27.6956 22.2461L34.8346 19.5003L27.6956 16.7545C26.5347 16.308 25.9542 16.0848 25.4659 15.7376C25.0332 15.4299 24.6551 15.0518 24.3474 14.619C24.0002 14.1308 23.7769 13.5503 23.3304 12.3894L20.5846 5.25033Z",
    content: (
      <>
        <h1 className="text-[#1C1C1C] text-[34px] font-semibold leading-[42px] tracking-[-0.68px]">
          We never compromise on quality.
        </h1>
        <p className="text-[#5E6D7B] text-lg font-medium leading-6 tracking-[-0.16px]">
          Our AI is carefully tailored to your business so every bid scores
          super high marks. From smart configuration to ongoing support, we
          deliver precision where it matters most.
          <br />
          <br /> The end-to-end agentic AI bid writing system accommodates for
          the nuances of each unique user, delivering exceptional quality on
          every single bid, as well as fine-tuned propriety bid writing data
          from world-leading proposal professionals to bring new expert skills
          into your business.
        </p>
      </>
    ),
  },
  {
    text: "Trust",
    icon: Handshake,
    reverse: true,
    content: (
      <>
        <h1 className="text-[#1C1C1C] text-[34px] font-semibold leading-[42px] tracking-[-0.68px]">
          We earn your trust by being there when it counts.
        </h1>
        <p className="text-[#5E6D7B] text-lg font-medium leading-6 tracking-[-0.16px]">
          We earn your trust by being there when it counts; offering transparent
          support, reliable results, and always putting your needs first.
          <br />
          <br /> With us, AI doesn’t replace people; it works hand-in-hand with
          them. We provide market-leading data security standards that meet
          enterprise security requirments and are proud to be ISO27001 and GDPR
          accredited.
        </p>
      </>
    ),
  },
  {
    text: "Simplicity",
    icon: Star,
    reverse: false,
    content: (
      <>
        <h1 className="text-[#1C1C1C] text-[34px] font-semibold leading-[42px] tracking-[-0.68px]">
          Complex procurement doesn’t need complex tools.
        </h1>
        <p className="text-[#5E6D7B] text-lg font-medium leading-6 tracking-[-0.16px]">
          We make powerful technology feel effortless, so you can focus on
          winning more and stressing less.
          <br />
          <br /> A central belief from technical development through to customer
          support is that we keep the complexity’s in the background so you can
          utilise cutting-edge technology in an enjoyable manner.
        </p>
      </>
    ),
  },
  {
    text: "Speed",
    iconPath:
      "M15.0026 29.6667H5.83594M10.8359 20.5H3.33594M15.0026 11.3333H6.66927M28.3359 5.5L17.3419 20.8917C16.8553 21.5729 16.612 21.9136 16.6225 22.1975C16.6317 22.4448 16.7502 22.6752 16.9461 22.8264C17.1711 23 17.5897 23 18.4269 23H26.6693L25.0026 35.5L35.9967 20.1083C36.4833 19.4271 36.7266 19.0864 36.716 18.8025C36.7069 18.5552 36.5883 18.3248 36.3924 18.1736C36.1675 18 35.7489 18 34.9117 18H26.6693L28.3359 5.5Z",
    reverse: true,
    content: (
      <>
        <h1 className="text-[#1C1C1C] text-[34px] font-semibold leading-[42px] tracking-[-0.68px]">
          Our platform is built to move fast!
        </h1>
        <p className="text-[#5E6D7B] text-lg font-medium leading-6 tracking-[-0.16px]">
          So you can bid more, respond quicker, and stay ahead.
          <br />
          <br /> From onboarding to output, we streamline every step. We have
          multiple SLA’s centred around speed so you’re never left waiting - why
          do you think we have so many F1 references throughout our site!
        </p>
      </>
    ),
  },
  {
    text: "Fun",
    reverse: false,
    icon: Smile,
    content: (
      <>
        <h1 className="text-[#1C1C1C] text-[34px] font-semibold leading-[42px] tracking-[-0.68px]">
          Yes, tenders can be fun{" "}
          <span className="text-[#AFAFAF]">(really).</span>
        </h1>
        <p className="text-[#5E6D7B] text-lg font-medium leading-6 tracking-[-0.16px]">
          We bring energy, clarity and a human touch to everything we do,
          because work should feel good too.
        </p>
      </>
    ),
  },
];

export default function Values({
  children,
  icon,
  iconPath,
  text,
  index,
  reverse,
}: {
  children: React.ReactNode;
  icon?: any;
  index: number;
  iconPath?: string;
  text?: string;
  reverse?: boolean;
}) {
  const Val = values[index].icon;
  return (
    <div
      className={`flex max-w-[600px] lg:max-w-7xl mx-auto gap-10 lg:gap-0 py-[56px] lg:py-20 flex-col ${"lg:flex-row"} lg:justify-between items-center w-full`}
    >
      {!reverse && (
        <div className="max-w-[600px] hidden lg:block space-y-6 items-center ">
          {children}
        </div>
      )}
      <div className="max-w-[600px] lg:hidden space-y-6 items-center ">
        {children}
      </div>
      <div className="xl:max-w-[531px] text-[#FF7F1B] min-h-[361px] w-full h-full flex items-center justify-center gap-[10px] rounded-[18px] border border-[#23385E1F]">
        {Val ? (
          <Val size={52} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 38 39"
            fill="none"
            stroke="#FF7F1B"

            // className="group-hover:stroke-[#1c1c1c] duration-300 transition-all"
          >
            <path
              d={iconPath}
              strokeWidth="3.15789"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <div className="text-transparent text-5xl font-semibold bg-[linear-gradient(91deg,#FF7F1B_18.84%,#FFAD74_36.21%,#FF7623_51.98%,#F92D79_74.18%)] bg-clip-text">
          {text}
        </div>
      </div>
      {reverse && (
        <div className="max-w-[600px] hidden lg:block space-y-6 items-center ">
          {children}
        </div>
      )}
    </div>
  );
}
