import { cn } from "@/lib/utils";

export default function Heading({
  heading,
  subHeading,
  headingClassName,
  subHeadingClassName,
}: {
  heading: string;
  subHeading: string;
  headingClassName?: string;
  subHeadingClassName?: string;
}) {
  return (
    <>
      <h1
        className={cn(
          `text-["#000"] text-[34px] lg:text-[42px] font-semibold leading-[46px] tracking-[-0.84px] `,
          headingClassName
        )}
      >
        {heading}
      </h1>
      <p
        className={cn(
          `text-["#5E6D7B"] text-lg font-medium leading-6 tracking-[-0.18px]`,
          subHeadingClassName
        )}
      >
        {subHeading}
      </p>
    </>
  );
}
