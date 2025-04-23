import ReadyToTransfer from "@/components/section/readyToTransfer";
import LayoutWithBorders from "@/components/ui/LayoutWithBorder";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full relative">
      <LayoutWithBorders zIndex={2} top="-20%">
        {children}
        <ReadyToTransfer />
      </LayoutWithBorders>
    </div>
  );
}
