"use client"
import React, { useEffect } from "react";

export const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget h-[1000px] lg:h-[660px] w-full"
      data-url={url}
    
    ></div>
  );
};

export default CalendlyEmbed;
