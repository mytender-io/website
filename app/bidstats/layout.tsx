import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "mytender.io - BitStats Official Partner",
  description: "mytender.io is proud to be the official partner of BitStats. Our intelligent platform helps you write winning bids quickly and efficiently.",
};

export default function BitStatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 