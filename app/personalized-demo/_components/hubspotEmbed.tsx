"use client";
import React, { useEffect } from "react";

export const HubSpotEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
    );
    head?.appendChild(script);
  }, []);

  return (
    <div
      className="meetings-iframe-container h-[1000px] lg:h-[660px] w-full"
      data-src={`${url}?embed=true`}
    ></div>
  );
};

export default HubSpotEmbed;
