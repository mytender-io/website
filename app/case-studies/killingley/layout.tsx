import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Killingley",
  description: "Killingley",
};
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
