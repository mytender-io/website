import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mytender.b-cdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "app.storylane.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
