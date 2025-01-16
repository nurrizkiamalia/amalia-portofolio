"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { headerLinks } from "@/data/data";

const ResponsiveHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const headerElement = document.getElementById("header");
    const footerElement = document.getElementById("footer");

    const handleScroll = () => {
      if (headerElement && footerElement) {
        const headerRect = headerElement.getBoundingClientRect();
        const footerRect = footerElement.getBoundingClientRect();

        const isHeaderVisible = headerRect.bottom > 0;
        const isFooterVisible = footerRect.top < window.innerHeight;

        setIsVisible(!isHeaderVisible && !isFooterVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible ? (
    <div className="m-5 bg-dspLightGray2 rounded-full border-2 shadow-xl border-dspGray fixed bottom-0 w-fit flex-wrap py-2 px-10 flex items-center gap-3 justify-center z-[99999999999999]">
      {headerLinks.map((item, index) => (
        <Link
          href={item.links}
          key={index}
          className="bg-dspOrange text-white p-2 font-bold text-2xl rounded-full border-2 border-dspOrangeYellow hover:bg-dspBlack transition-all duration-500"
        >
          <item.icon />
        </Link>
      ))}
    </div>
  ) : null;
};

export default ResponsiveHeader;
