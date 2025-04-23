import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stadium",
  description: "Stadium",
};
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
