import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robidco",
  description: "Robidco",
};
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
