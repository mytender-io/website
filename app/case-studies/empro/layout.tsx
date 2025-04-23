import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empro",
  description: "Empro",
};
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
